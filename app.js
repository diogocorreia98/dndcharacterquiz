const languageFromLocale = (locale) => {
  if (!locale) return 'pt';
  const [lang] = locale.split('-');
  return lang || 'pt';
};

class QuizApp {
  constructor(quizData) {
    this.quizData = quizData;
    this.language = languageFromLocale(quizData.locale);
    this.state = {
      variables: this.cloneValue(quizData.metadata?.initial_state ?? {}),
      currentNodeId: null,
      history: [],
    };

    this.dom = {
      questionScreen: document.getElementById('question-screen'),
      resultScreen: document.getElementById('result-screen'),
      progress: document.getElementById('progress-indicator'),
      statusSummary: document.getElementById('status-summary'),
      questionText: document.getElementById('question-text'),
      optionsForm: document.getElementById('options-form'),
      noOptionsMessage: document.getElementById('no-options-message'),
      backButton: document.getElementById('back-button'),
      nextButton: document.getElementById('next-button'),
      resultsContainer: document.getElementById('results-container'),
      restartButton: document.getElementById('restart-button'),
    };

    this.sectionVariables = this.buildSectionVariables();
    this.roleData = this.prepareRoleData();
    this.currentOptions = [];
    this.selectedValue = null;
    this.selectedValues = new Set();
    this.currentSelectionConfig = { mode: 'single' };
    this.attachEventListeners();
    this.start();
  }

  attachEventListeners() {
    this.dom.nextButton.addEventListener('click', () => this.goForward());
    this.dom.backButton.addEventListener('click', () => this.goBack());
    this.dom.restartButton.addEventListener('click', () => this.restart());
  }

  start() {
    this.state.currentNodeId = null;
    this.state.history = [];
    this.state.variables = this.cloneValue(this.quizData.metadata?.initial_state ?? {});
    this.showQuestion(this.quizData.root);
  }

  restart() {
    this.toggleScreens('question');
    this.start();
  }

  toggleScreens(target) {
    const showQuestion = target === 'question';
    this.dom.questionScreen.toggleAttribute('hidden', !showQuestion);
    this.dom.resultScreen.toggleAttribute('hidden', showQuestion);
    this.dom.questionScreen.classList.toggle('card--hidden', !showQuestion);
    this.dom.resultScreen.classList.toggle('card--hidden', showQuestion);
  }

  goBack() {
    if (!this.state.history.length) {
      return;
    }
    const lastEntry = this.state.history.pop();
    this.state.variables = this.cloneValue(lastEntry.stateBefore);
    this.showQuestion(lastEntry.nodeId, { preselect: lastEntry.selectedValue, fromHistory: true });
  }

  goForward() {
    const selection = this.currentSelectionConfig ?? { mode: 'single' };

    if (selection.mode === 'multiple') {
      const nodeId = this.state.currentNodeId;
      const node = this.quizData.nodes[nodeId];
      if (!node) {
        return;
      }

      const selectedArray = Array.from(this.selectedValues ?? []);
      const min = selection.min ?? 0;
      const max = selection.max ?? Infinity;

      if (selectedArray.length < min || selectedArray.length > max) {
        return;
      }

      const stateBefore = this.cloneValue(this.state.variables);
      this.applySelectionActions(selection.actions, selectedArray);
      this.applyActions(node.on_select, { selectedValues: selectedArray });

      this.state.history.push({
        nodeId,
        selectedValue: this.cloneValue(selectedArray),
        stateBefore,
      });

      const nextNodeId = node.next ?? null;
      this.showQuestion(nextNodeId);
      return;
    }

    if (!this.selectedValue) {
      return;
    }

    const nodeId = this.state.currentNodeId;
    const node = this.quizData.nodes[nodeId];
    const option = this.currentOptions.find((opt) => opt.value === this.selectedValue);

    if (!node || !option) {
      return;
    }

    const stateBefore = this.cloneValue(this.state.variables);
    this.applyActions(option.set, { option });
    this.applyActions(node.on_select, { option });

    this.state.history.push({
      nodeId,
      selectedValue: option.value,
      stateBefore,
    });

    const nextNodeId = option.next ?? node.next ?? null;
    this.showQuestion(nextNodeId);
  }

  showQuestion(startNodeId, { preselect = null, fromHistory = false } = {}) {
    const resolution = this.resolveNextQuestion(startNodeId);
    if (!resolution) {
      this.showResults();
      return;
    }

    const { nodeId, node, options } = resolution;
    this.state.currentNodeId = nodeId;
    this.currentOptions = options;

    const selection = node.selection ?? { mode: 'single' };
    this.currentSelectionConfig = selection;

    if (selection.mode === 'multiple') {
      const preselectedValues = Array.isArray(preselect) ? preselect : [];
      this.selectedValues = new Set(preselectedValues);
      this.selectedValue = null;
    } else {
      this.selectedValue = preselect;
      this.selectedValues = new Set();
    }

    this.dom.progress.textContent = `Pergunta ${this.state.history.length + 1}`;
    this.dom.questionText.textContent = node.question;

    this.renderOptions(options, preselect, selection);
    this.dom.noOptionsMessage.hidden = options.length > 0;

    if (selection.mode === 'multiple') {
      this.updateNextButtonForMultiple(selection);
    } else {
      this.dom.nextButton.disabled = !preselect;
    }

    this.dom.backButton.disabled = this.state.history.length === 0;

    if (!options.length) {
      this.dom.nextButton.disabled = true;
    }

    this.renderStatusSummary();

    if (!fromHistory) {
      this.dom.optionsForm.focus?.();
    }
  }

  showResults() {
    this.toggleScreens('result');
    this.renderResults();
  }

  resolveNextQuestion(startNodeId) {
    let nodeId = startNodeId;
    while (nodeId) {
      const node = this.quizData.nodes[nodeId];
      if (!node) {
        return null;
      }

      if (node.when && !this.evaluateCondition(node.when)) {
        nodeId = node.next ?? null;
        continue;
      }

      if (node.type !== 'question') {
        nodeId = node.next ?? null;
        continue;
      }

      let options = this.buildOptions(node, { includeDatasetEntry: true });
      options = this.applyRoleFilters(node, options);

      const pruneOutcome = this.pruneZeroViableOptions(node, options);
      options = pruneOutcome?.options ?? options;

      const skipNoOptionsOutcome = this.processSkipIfNoOptions(node, options);
      if (skipNoOptionsOutcome?.skip) {
        nodeId = skipNoOptionsOutcome.nextNodeId;
        continue;
      }
      options = skipNoOptionsOutcome?.options ?? options;

      const skipOutcome = this.processSkipIfSingleViable(node, options);
      if (skipOutcome?.skip) {
        nodeId = skipOutcome.nextNodeId;
        continue;
      }
      options = skipOutcome?.options ?? options;

      const autoOutcome = this.tryAutoselect(node, options);
      if (autoOutcome?.skip) {
        nodeId = autoOutcome.nextNodeId;
        continue;
      }
      options = autoOutcome?.options ?? options;

      const singleOptionOutcome = this.autoSelectSingleOption(node, options);
      if (singleOptionOutcome?.skip) {
        nodeId = singleOptionOutcome.nextNodeId;
        continue;
      }
      options = singleOptionOutcome?.options ?? options;

      return { nodeId, node, options };
    }

    return null;
  }

  autoSelectSingleOption(node, options) {
    if (!node.auto_select_if_single_option || options.length !== 1) {
      return { options };
    }

    const selectedOption = options[0];
    this.applyActions(selectedOption.set, { option: selectedOption });
    this.applyActions(node.on_select, { option: selectedOption });

    return {
      skip: true,
      nextNodeId: selectedOption.next ?? node.next ?? null,
    };
  }

  tryAutoselect(node, options) {
    const rule = node.autoselect_if_single;
    if (!rule || options.length !== 1) {
      return { options };
    }

    const selectedOption = options[0];
    this.applyActions(selectedOption.set, { option: selectedOption });
    this.applyActions(node.on_select, { option: selectedOption });
    this.applyActions(rule.set, {
      resultValue: selectedOption.value,
      result: selectedOption.datasetEntry,
    });

    return {
      skip: true,
      nextNodeId: rule.skip_to ?? node.next ?? null,
    };
  }

  buildOptions(node, { includeDatasetEntry = false } = {}) {
    if (Array.isArray(node.options)) {
      return node.options.map((opt, index) => ({
        ...opt,
        index,
      }));
    }

    const source = node.options_source;
    if (!source) {
      return [];
    }

    if (source.type !== 'inline') {
      return [];
    }

    const dataset = this.quizData.metadata?.datasets?.[source.dataset] ?? [];
    const filtered = dataset.filter((entry) => this.passesFilters(entry, source.filters ?? []));

    const seen = new Set();
    const options = [];

    for (const entry of filtered) {
      const value = entry[source.value_field];
      const label = entry[source.label_field];

      if (source.distinct && seen.has(value)) {
        continue;
      }

      seen.add(value);
      const option = {
        label,
        value,
      };

      if (includeDatasetEntry) {
        option.datasetEntry = entry;
      }

      options.push(option);
    }

    return options;
  }

  pruneZeroViableOptions(node, options) {
    const rule = node.prune_zero_viable_options;
    if (!rule || !rule.dataset || !rule.option_field) {
      return { options };
    }

    const datasetInfo = this.getDatasetInfo(rule);
    if (!datasetInfo) {
      return { options };
    }

    const exclusions = new Set(rule.exclude_values ?? []);
    const allowedValues = new Set([...datasetInfo.viableValues, ...exclusions]);

    const prunedOptions = options.filter((option) => allowedValues.has(option.value));
    return { options: prunedOptions };
  }

  processSkipIfSingleViable(node, options) {
    const rule = node.skip_if_single_viable;
    if (!rule || !rule.dataset || !rule.option_field) {
      return { options };
    }

    const datasetInfo = this.getDatasetInfo(rule);
    if (!datasetInfo) {
      return { options };
    }

    const { entries, viableValues } = datasetInfo;
    const prunedOptions = options.filter((option) => viableValues.has(option.value));

    if (!entries.length) {
      return {
        skip: true,
        nextNodeId: rule.skip_to ?? node.next ?? null,
      };
    }

    if (!prunedOptions.length) {
      return {
        skip: true,
        nextNodeId: rule.skip_to ?? node.next ?? null,
      };
    }

    if (prunedOptions.length === 1 && viableValues.size === 1) {
      const chosen = prunedOptions[0];
      if (rule.set_var_to_viable_option) {
        this.applyActions(chosen.set, { option: chosen });
        this.applyActions(node.on_select, { option: chosen });
      }
      return {
        skip: true,
        nextNodeId: rule.skip_to ?? node.next ?? null,
      };
    }

    return { options: prunedOptions };
  }

  processSkipIfNoOptions(node, options) {
    const rule = node.skip_if_no_options;
    if (!rule) {
      return { options };
    }

    if (options.length > 0) {
      return { options };
    }

    return {
      skip: true,
      nextNodeId: rule.next ?? node.next ?? null,
    };
  }

  passesFilters(entry, filters) {
    if (!filters?.length) {
      return true;
    }

    return filters.every((filter) => {
      const { field, var: variableName, op, optional } = filter;
      const variableValue = this.state.variables[variableName];

      if (!this.hasValue(variableValue) && optional) {
        return true;
      }

      if (!this.hasValue(variableValue)) {
        return false;
      }

      const entryValue = entry[field];
      switch (op) {
        case 'eq': {
          if (Array.isArray(entryValue)) {
            return entryValue.includes(variableValue);
          }
          return entryValue === variableValue;
        }
        case 'contains': {
          if (!Array.isArray(entryValue)) {
            return false;
          }
          return entryValue.includes(variableValue);
        }
        case 'in': {
          if (!Array.isArray(variableValue)) {
            return false;
          }
          if (Array.isArray(entryValue)) {
            return entryValue.some((item) => variableValue.includes(item));
          }
          return variableValue.includes(entryValue);
        }
        case 'in_list': {
          if (!Array.isArray(variableValue)) {
            return false;
          }
          return variableValue.includes(entryValue);
        }
        default:
          return false;
      }
    });
  }

  getDatasetInfo(rule) {
    const dataset = this.quizData.metadata?.datasets?.[rule.dataset];
    if (!Array.isArray(dataset)) {
      return null;
    }

    const filters = rule.filters ?? [];
    for (const filter of filters) {
      const variableValue = this.state.variables[filter.var];
      if (!this.hasValue(variableValue) && !filter.optional) {
        return null;
      }
    }

    const filteredEntries = dataset.filter((entry) => this.passesFilters(entry, filters));
    const viableValues = new Set();

    filteredEntries.forEach((entry) => {
      const value = entry[rule.option_field];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (this.hasValue(item)) {
            viableValues.add(item);
          }
        });
      } else if (this.hasValue(value)) {
        viableValues.add(value);
      }
    });

    return { entries: filteredEntries, viableValues };
  }

  evaluateCondition(condition) {
    if (!condition) {
      return true;
    }

    const hasLogicalGroups =
      Array.isArray(condition.all) || Array.isArray(condition.any) || Array.isArray(condition.none);
    if (hasLogicalGroups) {
      let result = true;

      if (Array.isArray(condition.all)) {
        result = result && condition.all.every((c) => this.evaluateCondition(c));
      }

      if (!result) {
        return false;
      }

      if (Array.isArray(condition.any)) {
        result = result && condition.any.some((c) => this.evaluateCondition(c));
      }

      if (!result) {
        return false;
      }

      if (Array.isArray(condition.none)) {
        result = result && condition.none.every((c) => !this.evaluateCondition(c));
      }

      return result;
    }

    const variableValue = this.state.variables[condition.var];
    switch (condition.op) {
      case 'eq':
        return variableValue === condition.value;
      case 'in':
        if (!Array.isArray(condition.value)) {
          return false;
        }
        return condition.value.includes(variableValue);
      case 'is_set':
        return this.hasValue(variableValue);
      default:
        return true;
    }
  }

  renderOptions(options, preselectValue, selection = { mode: 'single' }) {
    this.dom.optionsForm.innerHTML = '';
    const isMultiple = selection?.mode === 'multiple';
    const preselectedSet = new Set(Array.isArray(preselectValue) ? preselectValue : []);
    const maxSelections = selection?.max ?? Infinity;

    options.forEach((option, index) => {
      const optionId = `option-${index}`;
      const wrapper = document.createElement('label');
      wrapper.className = 'option';
      wrapper.setAttribute('for', optionId);

      const input = document.createElement('input');
      input.type = isMultiple ? 'checkbox' : 'radio';
      input.name = 'quiz-option';
      input.value = option.value;
      input.id = optionId;
      input.className = 'option__input';

      if (isMultiple) {
        input.checked = preselectedSet.has(option.value);
      } else {
        input.checked = option.value === preselectValue;
      }

      input.addEventListener('change', () => {
        if (isMultiple) {
          if (input.checked) {
            if (this.selectedValues.size >= maxSelections) {
              input.checked = false;
              return;
            }
            this.selectedValues.add(option.value);
          } else {
            this.selectedValues.delete(option.value);
          }
          this.updateNextButtonForMultiple(selection);
        } else {
          this.selectedValue = input.value;
          this.dom.nextButton.disabled = false;
        }
      });

      if (isMultiple && input.checked) {
        this.selectedValues.add(option.value);
      }

      const label = document.createElement('p');
      label.className = 'option__label';
      label.textContent = option.label;

      wrapper.append(input, label);
      this.dom.optionsForm.appendChild(wrapper);
    });

    if (!options.length) {
      this.selectedValue = null;
      this.selectedValues = new Set();
      this.dom.nextButton.disabled = true;
      return;
    }

    if (isMultiple) {
      this.updateNextButtonForMultiple(selection);
    } else if (!preselectValue) {
      this.dom.nextButton.disabled = true;
    }
  }

  renderResults() {
    const localeKey = this.language === 'pt' ? 'pt' : 'en';
    this.dom.resultsContainer.innerHTML = '';

    const sectionsMeta = this.quizData.metadata?.sections ?? {};
    const valueMap = this.quizData.metadata?.value_map ?? {};
    const variableSchemas = this.quizData.metadata?.variables ?? {};

    Object.entries(sectionsMeta).forEach(([sectionKey, translations]) => {
      const variables = Array.from(this.sectionVariables.get(sectionKey) ?? []).filter((variableName) => {
        if (!variableName || variableName.startsWith('_')) {
          return false;
        }
        return true;
      });

      if (!variables.length) {
        return;
      }

      const sectionElement = document.createElement('section');
      sectionElement.className = 'result-section';

      const title = document.createElement('h3');
      title.className = 'result-section__title';
      title.textContent = translations[localeKey] ?? translations.pt ?? sectionKey;
      sectionElement.appendChild(title);

      variables.forEach((variableName) => {
        const rawValue = this.state.variables[variableName];
        if (!this.hasValue(rawValue)) {
          return;
        }

        const item = document.createElement('div');
        item.className = 'result-item';

        const label = document.createElement('span');
        label.className = 'result-item__label';
        label.textContent = this.formatVariableLabel(variableName);

        const value = document.createElement('span');
        value.className = 'result-item__value';
        value.textContent = this.formatVariableValue(variableName, rawValue, valueMap, localeKey);

        item.append(label, value);
        sectionElement.appendChild(item);
      });

      this.dom.resultsContainer.appendChild(sectionElement);
    });
  }

  renderStatusSummary() {
    const container = this.dom.statusSummary;
    if (!container) {
      return;
    }

    const localeKey = this.language === 'pt' ? 'pt' : 'en';
    const sectionsMeta = this.quizData.metadata?.sections ?? {};
    const valueMap = this.quizData.metadata?.value_map ?? {};
    const variableSchemas = this.quizData.metadata?.variables ?? {};

    container.innerHTML = '';
    let hasContent = false;

    this.sectionVariables.forEach((variables, sectionKey) => {
      const variableList = Array.from(variables).filter((variableName) => {
        if (!variableName || variableName.startsWith('_')) {
          return false;
        }
        return this.hasValue(this.state.variables[variableName]);
      });

      if (!variableList.length) {
        return;
      }

      hasContent = true;

      const sectionElement = document.createElement('section');
      sectionElement.className = 'status-summary__section';

      const title = document.createElement('h3');
      title.className = 'status-summary__title';
      const translations = sectionsMeta[sectionKey];
      title.textContent =
        translations?.[localeKey] ??
        translations?.pt ??
        this.formatSectionFallback(sectionKey);
      sectionElement.appendChild(title);

      variableList.forEach((variableName) => {
        const item = document.createElement('div');
        item.className = 'status-summary__item';

        const label = document.createElement('span');
        label.className = 'status-summary__label';
        label.textContent = this.formatVariableLabel(variableName);

        const value = document.createElement('span');
        value.className = 'status-summary__value';
        const rawValue = this.state.variables[variableName];
        value.textContent = this.formatVariableValue(
          variableName,
          rawValue,
          valueMap,
          localeKey,
        );

        item.append(label, value);
        sectionElement.appendChild(item);
      });

      container.appendChild(sectionElement);
    });

    container.toggleAttribute('hidden', !hasContent);
    container.classList.toggle('status-summary--hidden', !hasContent);
  }

  formatVariableLabel(variableName) {
    const map = {
      gender: 'Género',
      height: 'Altura',
      species_commonality: 'Comum/Exótico',
      animal_likeness: 'Traços animais',
      species_theme: 'Tema',
      species: 'Espécie',
      class_complexity: 'Complexidade da classe',
      class: 'Classe',
      subclass_group: 'Tipo de subclasse',
      subclass: 'Subclasse',
      primary_roles: 'Papéis principais',
      secondary_roles: 'Papéis secundários',
    };
    return map[variableName] ?? variableName;
  }

  formatSectionFallback(sectionKey) {
    const map = {
      gender: 'Género',
      species: 'Espécie',
      class: 'Classe',
    };
    return map[sectionKey] ?? sectionKey;
  }

  formatVariableValue(variableName, rawValue, valueMap, localeKey) {
    if (rawValue === null || rawValue === undefined) {
      return '—';
    }

    const variableMap = valueMap?.[variableName];

    if (Array.isArray(rawValue)) {
      if (!rawValue.length) {
        return '—';
      }
      return rawValue
        .map((item) => {
          if (variableMap && variableMap[item]) {
            const entry = variableMap[item];
            return entry[localeKey] ?? entry.pt ?? String(item);
          }
          return String(item);
        })
        .join(', ');
    }

    if (variableMap && variableMap[rawValue]) {
      const entry = variableMap[rawValue];
      return entry[localeKey] ?? entry.pt ?? String(rawValue);
    }

    if (variableName === 'species') {
      const dataset = this.quizData.metadata?.datasets?.species ?? [];
      const match = dataset.find((entry) => entry.code === rawValue);
      if (match) {
        return match[localeKey] ?? match.pt ?? rawValue;
      }
    }

    if (variableName === 'subclass') {
      const dataset = this.quizData.metadata?.datasets?.subclasses ?? [];
      const match = dataset.find((entry) => entry.code === rawValue);
      if (match) {
        return match[localeKey] ?? match.pt ?? rawValue;
      }
    }

    return String(rawValue);
  }

  buildSectionVariables() {
    const map = new Map();
    const ensureSection = (section) => {
      if (!map.has(section)) {
        map.set(section, new Set());
      }
      return map.get(section);
    };

    Object.values(this.quizData.nodes).forEach((node) => {
      if (node.type !== 'question' || !node.section) {
        return;
      }

      const sectionSet = ensureSection(node.section);
      const collect = (actions) => {
        if (!Array.isArray(actions)) {
          return;
        }
        actions.forEach((action) => {
          if (action?.var) {
            sectionSet.add(action.var);
          }
        });
      };

      (node.options ?? []).forEach((option) => collect(option.set));
      collect(node.on_select);
      collect(node.selection?.actions);
      if (node.autoselect_if_single) {
        collect(node.autoselect_if_single.set);
      }

      if (node.options_source) {
        // Dynamic options may still feed into on_select, so ensure at least the target variable is captured.
        collect(node.on_select);
      }
    });

    return map;
  }

  applySelectionActions(actions, selectedValues) {
    if (!Array.isArray(actions)) {
      return;
    }

    const selectionArray = Array.isArray(selectedValues) ? selectedValues.slice() : [];

    actions.forEach((action) => {
      if (!action || action.op !== 'set' || !action.var) {
        return;
      }

      let value;
      if (action.value_from_selection) {
        value = selectionArray;
      } else if (action.value_from_selection_filtered) {
        const excludes = new Set(action.value_from_selection_filtered.exclude_values ?? []);
        value = selectionArray.filter((item) => !excludes.has(item));
      } else if (action.value_from_selection_includes) {
        const config = action.value_from_selection_includes;
        const matches = selectionArray.includes(config.value);
        if (matches) {
          value = config.true_value ?? true;
        } else {
          value = config.false_value ?? false;
        }
      } else {
        value = action.value;
      }

      this.state.variables[action.var] = this.cloneValue(value);
    });
  }

  applyActions(actions, context = {}) {
    if (!Array.isArray(actions)) {
      return;
    }

    actions.forEach((action) => {
      if (!action || action.op !== 'set' || !action.var) {
        return;
      }

      let value;
      if (action.value_from_option) {
        value = context.option?.value;
      } else if (action.value_from_result) {
        value = context.resultValue ?? context.result?.[action.value_field];
      } else if (action.value_from_var) {
        value = this.cloneValue(this.state.variables[action.value_from_var]);
      } else {
        value = action.value;
      }

      if (action.append) {
        const baseArray = Array.isArray(value)
          ? value.slice()
          : Array.isArray(this.state.variables[action.var])
          ? this.cloneValue(this.state.variables[action.var])
          : [];
        const appendItems = Array.isArray(action.append) ? action.append : [action.append];
        appendItems.forEach((item) => {
          if (!baseArray.includes(item)) {
            baseArray.push(item);
          }
        });
        value = baseArray;
      }

      if (action.remove_values) {
        const removeItems = Array.isArray(action.remove_values)
          ? action.remove_values
          : [action.remove_values];
        if (Array.isArray(value)) {
          value = value.filter((item) => !removeItems.includes(item));
        }
      }

      this.state.variables[action.var] = this.cloneValue(value);
    });
  }

  applyRoleFilters(node, options) {
    if (!Array.isArray(options) || !options.length) {
      return options ?? [];
    }

    const filter = node.filter_by_roles;
    if (!filter) {
      return options;
    }

    switch (filter.type) {
      case 'class':
        return options.filter((option) => this.getCommonSubclassesForClass(option.value, 'ALL').length > 0);
      case 'subclass_group': {
        const classCode = this.state.variables.class;
        if (!classCode) {
          return [];
        }
        return options.filter((option) => this.getCommonSubclassesForClass(classCode, option.value).length > 0);
      }
      case 'subclass': {
        const classCode = this.state.variables.class;
        const group = this.state.variables.subclass_group;
        if (!classCode || !group) {
          return [];
        }
        const allowed = new Set(this.getCommonSubclassesForClass(classCode, group));
        return options.filter((option) => allowed.has(option.value));
      }
      default:
        return options;
    }
  }

  updateNextButtonForMultiple(selection) {
    const min = selection?.min ?? 0;
    const max = selection?.max ?? Infinity;
    const count = this.selectedValues.size;
    let isValid = count >= min && count <= max;
    if (min === 0 && count === 0) {
      isValid = true;
    }
    this.dom.nextButton.disabled = !isValid;
  }

  prepareRoleData() {
    const roleMappings = this.quizData.metadata?.role_mappings ?? {};
    const subclassMap = this.buildSubclassNameMap();
    const normalizeKey = (value) =>
      typeof value === 'string' ? value.toUpperCase().replace(/\s+/g, '_') : value;

    const primaryRoles = new Set(['DEFENDER', 'HEALER', 'SUPPORT', 'CONTROLLER', 'STRIKER', 'SCOUT']);
    const secondaryRoles = new Set(['BLASTER', 'FACE', 'SCHOLAR', 'UTILITY_CASTER']);

    const data = {
      primary: {},
      secondary: {},
    };

    Object.entries(roleMappings).forEach(([roleName, classEntries]) => {
      const roleKey = normalizeKey(roleName);
      let target;
      if (primaryRoles.has(roleKey)) {
        target = data.primary;
      } else if (secondaryRoles.has(roleKey)) {
        target = data.secondary;
      } else {
        return;
      }

      const roleTarget = (target[roleKey] = target[roleKey] || {});
      Object.entries(classEntries ?? {}).forEach(([className, groups]) => {
        const classKey = normalizeKey(className);
        const core = new Set();
        const niche = new Set();

        (groups?.core_subclasses ?? []).forEach((name) => {
          const code = subclassMap.get(name);
          if (code) {
            core.add(code);
          }
        });

        (groups?.niche_subclasses ?? []).forEach((name) => {
          const code = subclassMap.get(name);
          if (code) {
            niche.add(code);
          }
        });

        roleTarget[classKey] = {
          core,
          niche,
        };
      });
    });

    return { data, primaryRoles, secondaryRoles };
  }

  buildSubclassNameMap() {
    const dataset = this.quizData.metadata?.datasets?.subclasses ?? [];
    const map = new Map();
    dataset.forEach((entry) => {
      if (entry.pt) {
        map.set(entry.pt, entry.code);
      }
      if (entry.en) {
        map.set(entry.en, entry.code);
      }
    });
    return map;
  }

  getSelectedRoles() {
    const normalize = (value) => (typeof value === 'string' ? value.toUpperCase() : value);
    const primary = Array.isArray(this.state.variables.primary_roles)
      ? this.state.variables.primary_roles.map(normalize)
      : [];
    const secondary = Array.isArray(this.state.variables.secondary_roles)
      ? this.state.variables.secondary_roles.map(normalize)
      : [];
    return { primary, secondary };
  }

  getCommonSubclassesForClass(classCode, groupPreference = 'ALL') {
    if (!classCode) {
      return [];
    }

    const normalizedClass = typeof classCode === 'string' ? classCode.toUpperCase() : classCode;
    const preference = typeof groupPreference === 'string' ? groupPreference.toUpperCase() : 'ALL';
    const { primary, secondary } = this.getSelectedRoles();
    const roles = [...primary, ...secondary];

    if (!roles.length) {
      return this.getAllSubclassesForClass(normalizedClass, preference);
    }

    let common = null;
    for (const roleName of roles) {
      const roleData =
        this.roleData?.data?.primary?.[roleName] ?? this.roleData?.data?.secondary?.[roleName];
      if (!roleData) {
        return [];
      }
      const classEntry = roleData[normalizedClass];
      if (!classEntry) {
        return [];
      }

      let roleSet;
      if (preference === 'CORE') {
        roleSet = new Set(classEntry.core ?? []);
      } else if (preference === 'NICHE') {
        roleSet = new Set(classEntry.niche ?? []);
      } else {
        roleSet = new Set([...(classEntry.core ?? []), ...(classEntry.niche ?? [])]);
      }

      if (!roleSet.size) {
        return [];
      }

      if (common === null) {
        common = roleSet;
      } else {
        common = new Set([...common].filter((code) => roleSet.has(code)));
        if (!common.size) {
          return [];
        }
      }
    }

    return Array.from(common ?? []);
  }

  getAllSubclassesForClass(classCode, groupPreference = 'ALL') {
    const dataset = this.quizData.metadata?.datasets?.subclasses ?? [];
    const group = typeof groupPreference === 'string' ? groupPreference.toUpperCase() : 'ALL';
    return dataset
      .filter((entry) => entry.class === classCode && (group === 'ALL' || entry.group === group))
      .map((entry) => entry.code);
  }

  cloneValue(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof structuredClone === 'function') {
      return structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
  }

  hasValue(value) {
    if (value === null || value === undefined) {
      return false;
    }

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === 'string') {
      return value.trim() !== '';
    }

    return true;
  }
}

const fetchJson = async (url, description) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Falha ao carregar ${description ?? 'o recurso'}: ${response.status}`);
  }
  return response.json();
};

const loadQuizData = async (manifestUrl) => {
  const manifest = await fetchJson(manifestUrl, 'o questionário');

  if (manifest.nodes) {
    return manifest;
  }

  const questionEntries = Object.entries(manifest.question_files ?? {});
  if (!questionEntries.length) {
    throw new Error('O manifesto não define ficheiros de perguntas.');
  }
  const questionPayloads = await Promise.all(
    questionEntries.map(async ([key, filePath]) => ({
      key,
      data: await fetchJson(filePath, `as perguntas (${key})`),
    }))
  );

  const nodes = questionPayloads.reduce((acc, { data }) => {
    if (data && data.nodes) {
      Object.assign(acc, data.nodes);
    }
    return acc;
  }, {});

  if (!Object.keys(nodes).length) {
    throw new Error('Não foi possível carregar nenhuma pergunta do questionário.');
  }

  let metadata = manifest.metadata ?? {};
  if (manifest.metadata_file) {
    metadata = await fetchJson(manifest.metadata_file, 'os mapeamentos');
  }

  const merged = {
    ...manifest,
    nodes,
    metadata,
  };

  delete merged.question_files;
  delete merged.metadata_file;

  if (!merged.root) {
    const rootFromPayload = questionPayloads.find(({ data }) => data?.root)?.data?.root;
    if (rootFromPayload) {
      merged.root = rootFromPayload;
    }
  }

  return merged;
};

const bootstrap = async () => {
  const loadingMessage = 'A carregar questionário…';
  document.getElementById('question-text').textContent = loadingMessage;
  try {
    const data = await loadQuizData('dnd_2024_questionario.json');
    new QuizApp(data);
  } catch (error) {
    const message = document.createElement('p');
    message.className = 'options__empty';
    message.textContent = 'Não foi possível carregar o questionário. Atualiza a página ou verifica o servidor.';
    const container = document.getElementById('options-form');
    container.innerHTML = '';
    container.appendChild(message);
    console.error(error);
  }
};

bootstrap();
