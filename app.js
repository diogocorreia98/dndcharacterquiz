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
      questionText: document.getElementById('question-text'),
      optionsForm: document.getElementById('options-form'),
      noOptionsMessage: document.getElementById('no-options-message'),
      backButton: document.getElementById('back-button'),
      nextButton: document.getElementById('next-button'),
      resultsContainer: document.getElementById('results-container'),
      restartButton: document.getElementById('restart-button'),
    };

    this.sectionVariables = this.buildSectionVariables();
    this.currentOptions = [];
    this.selectedValue = null;
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
    this.selectedValue = preselect;

    this.dom.progress.textContent = `Pergunta ${this.state.history.length + 1}`;
    this.dom.questionText.textContent = node.question;

    this.renderOptions(options, preselect);
    this.dom.noOptionsMessage.hidden = options.length > 0;
    this.dom.nextButton.disabled = !preselect;
    this.dom.backButton.disabled = this.state.history.length === 0;

    if (!options.length) {
      this.dom.nextButton.disabled = true;
    }

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

      if (node.autoselect_if_single) {
        const autoOptions = this.buildOptions(node, { includeDatasetEntry: true });
        if (autoOptions.length === 1) {
          const result = autoOptions[0];
          this.applyActions(node.autoselect_if_single.set, {
            resultValue: result.value,
            result: result.datasetEntry,
          });
          nodeId = node.autoselect_if_single.skip_to ?? node.next ?? null;
          continue;
        }
      }

      const options = this.buildOptions(node, { includeDatasetEntry: true });
      return { nodeId, node, options };
    }

    return null;
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

  passesFilters(entry, filters) {
    if (!filters?.length) {
      return true;
    }

    return filters.every((filter) => {
      const { field, var: variableName, op, optional } = filter;
      const variableValue = this.state.variables[variableName];

      if ((variableValue === undefined || variableValue === null || variableValue === '') && optional) {
        return true;
      }

      if (variableValue === undefined || variableValue === null || variableValue === '') {
        return false;
      }

      const entryValue = entry[field];
      switch (op) {
        case 'contains': {
          if (!Array.isArray(entryValue)) {
            return false;
          }
          return entryValue.includes(variableValue);
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

  evaluateCondition(condition) {
    if (!condition) {
      return true;
    }

    if (Array.isArray(condition.all)) {
      return condition.all.every((c) => this.evaluateCondition(c));
    }

    if (Array.isArray(condition.any)) {
      return condition.any.some((c) => this.evaluateCondition(c));
    }

    const variableValue = this.state.variables[condition.var];
    switch (condition.op) {
      case 'eq':
        return variableValue === condition.value;
      default:
        return true;
    }
  }

  renderOptions(options, preselectValue) {
    this.dom.optionsForm.innerHTML = '';
    options.forEach((option, index) => {
      const optionId = `option-${index}`;
      const wrapper = document.createElement('label');
      wrapper.className = 'option';
      wrapper.setAttribute('for', optionId);

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-option';
      input.value = option.value;
      input.id = optionId;
      input.className = 'option__input';
      input.checked = option.value === preselectValue;
      input.addEventListener('change', () => {
        this.selectedValue = input.value;
        this.dom.nextButton.disabled = false;
      });

      const label = document.createElement('p');
      label.className = 'option__label';
      label.textContent = option.label;

      wrapper.append(input, label);
      this.dom.optionsForm.appendChild(wrapper);
    });

    if (!options.length) {
      this.selectedValue = null;
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
        const schema = variableSchemas[variableName];
        return !schema || schema.type !== 'array';
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
        if (rawValue === undefined) {
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

  formatVariableLabel(variableName) {
    const map = {
      gender: 'Género',
      height: 'Altura',
      species_commonality: 'Comum/Exótico',
      animal_likeness: 'Traços animais',
      species_theme: 'Tema',
      species: 'Espécie',
      class_complexity: 'Complexidade da classe',
    };
    return map[variableName] ?? variableName;
  }

  formatVariableValue(variableName, rawValue, valueMap, localeKey) {
    if (rawValue === null || rawValue === undefined) {
      return '—';
    }

    if (Array.isArray(rawValue)) {
      return rawValue.join(', ');
    }

    const variableMap = valueMap?.[variableName];
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
      } else {
        value = action.value;
      }

      this.state.variables[action.var] = this.cloneValue(value);
    });
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
}

const bootstrap = async () => {
  const loadingMessage = 'A carregar questionário…';
  document.getElementById('question-text').textContent = loadingMessage;
  try {
    const response = await fetch('dnd_2024_questionario.json');
    if (!response.ok) {
      throw new Error(`Falha ao carregar o questionário: ${response.status}`);
    }
    const data = await response.json();
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
