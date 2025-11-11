const languageFromLocale = (locale) => {
  if (!locale) return 'pt';
  const [lang] = locale.split('-');
  return lang || 'pt';
};

const SUPPORTED_LANGUAGES = ['pt', 'en'];
const DEFAULT_LANGUAGE = 'pt';

const UI_TEXT = {
  title: {
    pt: 'Descobre a tua personagem de D&D 2024',
    en: 'Discover your 2024 D&D character',
  },
  subtitle: {
    pt: 'Responde às perguntas para encontrares a combinação ideal de género, espécie e classe.',
    en: 'Answer the questions to find the ideal combination of gender, species, and class.',
  },
  languageLabel: {
    pt: 'Idioma',
    en: 'Language',
  },
  startTitle: {
    pt: 'Começa a tua aventura',
    en: 'Begin your adventure',
  },
  startDescription: {
    pt: 'Escolhe o idioma e descobre que personagem de Dungeons & Dragons 2024 combina melhor contigo.',
    en: 'Choose a language and discover which Dungeons & Dragons 2024 character fits you best.',
  },
  startNote: {
    pt: 'Podes alterar o idioma em qualquer momento usando o seletor acima.',
    en: 'You can switch languages at any time using the selector above.',
  },
  startButton: {
    pt: 'Começar questionário',
    en: 'Start quiz',
  },
  progressPrefix: {
    pt: 'Pergunta',
    en: 'Question',
  },
  navPrevious: {
    pt: 'Anterior',
    en: 'Previous',
  },
  navNext: {
    pt: 'Seguinte',
    en: 'Next',
  },
  noOptions: {
    pt: 'Não encontrámos opções compatíveis com as tuas escolhas. Volta atrás e ajusta as respostas anteriores.',
    en: "We couldn't find options that match your choices. Go back and adjust your previous answers.",
  },
  resultsTitle: {
    pt: 'Resultados',
    en: 'Results',
  },
  resultsIntro: {
    pt: 'Eis as tuas escolhas ao longo do questionário. Podes voltar atrás para alterar respostas ou recomeçar.',
    en: 'Here are your choices throughout the quiz. You can go back to change answers or restart.',
  },
  restartButton: {
    pt: 'Recomeçar',
    en: 'Restart',
  },
  loading: {
    pt: 'A carregar questionário…',
    en: 'Loading quiz…',
  },
  loadError: {
    pt: 'Não foi possível carregar o questionário. Atualiza a página ou verifica o servidor.',
    en: "We couldn't load the quiz. Refresh the page or check the server.",
  },
};

const VARIABLE_LABELS = {
  gender: { pt: 'Género', en: 'Gender' },
  height: { pt: 'Altura', en: 'Height' },
  species_commonality: { pt: 'Comum/Exótico', en: 'Common/Exotic' },
  animal_likeness: { pt: 'Traços animais', en: 'Animal traits' },
  species_theme: { pt: 'Tema', en: 'Theme' },
  species: { pt: 'Espécie', en: 'Species' },
  class_complexity: { pt: 'Complexidade da classe', en: 'Class complexity' },
  class: { pt: 'Classe', en: 'Class' },
  subclass_group: { pt: 'Tipo de subclasse', en: 'Subclass type' },
  subclass: { pt: 'Subclasse', en: 'Subclass' },
  primary_roles: { pt: 'Papéis principais', en: 'Primary roles' },
  secondary_roles: { pt: 'Papéis secundários', en: 'Secondary roles' },
  dark_gift: { pt: 'Dark Gift', en: 'Dark Gift' },
  preferred_physical_ability: { pt: 'Habilidade física preferida', en: 'Preferred physical ability' },
  class_ability_combo: { pt: 'Atributos prioritários', en: 'Priority abilities' },
  class_armor: { pt: 'Armadura sugerida', en: 'Suggested armor' },
  class_handheld_gear: { pt: 'Equipamento empunhado', en: 'Handheld gear' },
  fighting_style_choice: { pt: 'Estilo de Luta', en: 'Fighting Style' },
  background: { pt: 'Antecedente', en: 'Background' },
};

const SECTION_FALLBACK = {
  gender: { pt: 'Género', en: 'Gender' },
  species: { pt: 'Espécie', en: 'Species' },
  class: { pt: 'Classe', en: 'Class' },
  dark_gift: { pt: 'Dark Gift', en: 'Dark Gift' },
  background: { pt: 'Antecedente', en: 'Background' },
};

const QUESTION_TRANSLATIONS = {
  "q_gender": {
    "question": {
      "pt": "Como se apresenta a tua personagem em termos de género?",
      "en": "How does your character present in terms of gender?"
    }
  },
  "q_height": {
    "question": {
      "pt": "Em que faixa de alturas se encaixa a tua personagem?",
      "en": "Which height range fits your character?"
    }
  },
  "q_species_exoticness": {
    "question": {
      "pt": "Quão exótica pretendes que a espécie da tua personagem seja?",
      "en": "How exotic do you want your character's species to be?"
    }
  },
  "q_species_animal_likeness": {
    "question": {
      "pt": "A tua personagem tem traços de animal?",
      "en": "Does your character have animal traits?"
    }
  },
  "q_species_pick": {
    "question": {
      "pt": "Que espécie preferes jogar?",
      "en": "Which species do you want to play?"
    }
  },
  "q_dragonborn_ancestry_type": {
    "question": {
      "pt": "Que tipo de ancestralidade dracónica define a tua personagem?",
      "en": "Which type of draconic ancestry defines your character?"
    }
  },
  "q_goliath_power_type": {
    "question": {
      "pt": "Que tipo de poder de ancestralidade gigante melhor descreve a tua personagem?",
      "en": "Which kind of giant ancestry power best fits your character?"
    }
  },
  "q_subspecies_pick": {
    "question": {
      "pt": "Que subespécie prefere a tua personagem?",
      "en": "Which sub-species does your character prefer?"
    }
  },
  "q_subsubspecies_pick": {
    "question": {
      "pt": "Qual é a variação específica da subespécie?",
      "en": "What is the specific variation of the sub-species?"
    }
  },
  "q_primary_roles": {
    "question": {
      "pt": "Que papel preferes em combate (seleciona até 2 opções)?",
      "en": "Which combat role do you prefer (select up to 2 options)?"
    }
  },
  "q_healer_support_preference": {
    "question": {
      "pt": "Qual preferes?",
      "en": "Which do you prefer?"
    }
  },
  "q_secondary_roles": {
    "question": {
      "pt": "Há mais algum papel que precisas que a tua personagem sirva (Seleciona 0, 1 ou 2 opções)?",
      "en": "Do you need your character to fill any other roles (select 0, 1, or 2 options)?"
    }
  },
  "q_class_complexity": {
    "question": {
      "pt": "Com que nível de complexidade te sentes confortável?",
      "en": "What level of class complexity are you comfortable with?"
    }
  },
  "q_class_simple_choice": {
    "question": {
      "pt": "Que classe preferes jogar?",
      "en": "Which class would you like to play?"
    }
  },
  "q_class_medium_choice": {
    "question": {
      "pt": "Que classe preferes jogar?",
      "en": "Which class would you like to play?"
    }
  },
  "q_class_high_choice": {
    "question": {
      "pt": "Que classe preferes jogar?",
      "en": "Which class would you like to play?"
    }
  },
  "q_subclass_group": {
    "question": {
      "pt": "Preferes explorar subclasses principais ou especializadas?",
      "en": "Do you want to explore core or specialized subclasses?"
    }
  },
  "q_subclass_choice": {
    "question": {
      "pt": "Qual destas subclasses chama mais por ti?",
      "en": "Which of these subclasses appeals to you most?"
    }
  },
  "q_find_familiar_use": {
    "question": {
      "pt": "Pretendes usar o feitiço Find Familiar e ter uma companhia animal mágica?",
      "en": "Do you plan to use the Find Familiar spell and have a magical animal companion?"
    }
  },
  "q_familiar_habitat": {
    "question": {
      "pt": "O teu familiar ideal vive...?",
      "en": "Where does your ideal familiar live?"
    }
  },
  "q_familiar_creature_sky": {
    "question": {
      "pt": "Qual destas criaturas aéreas te acompanha?",
      "en": "Which of these aerial creatures accompanies you?"
    }
  },
  "q_familiar_creature_land": {
    "question": {
      "pt": "Qual destes animais terrestres partilha a tua jornada?",
      "en": "Which of these land animals joins your journey?"
    }
  },
  "q_familiar_creature_water": {
    "question": {
      "pt": "Qual destas criaturas aquáticas é tua aliada?",
      "en": "Which of these aquatic creatures is your ally?"
    }
  },
  "q_class_adjustment_cleric": {
    "question": {
      "pt": "Que Divine Order pretendes escolher?",
      "en": "Which Divine Order do you want to choose?"
    }
  },
  "q_class_adjustment_druid": {
    "question": {
      "pt": "Que Primal Order pretendes escolher?",
      "en": "Which Primal Order do you want to choose?"
    }
  },
  "q_class_adjustment_warlock": {
    "question": {
      "pt": "Que Pact Boon Invocation pretendes escolher?",
      "en": "Which Pact Boon Invocation do you want to choose?"
    }
  },
  "q_warlock_familiar_type": {
    "question": {
      "pt": "Que tipo de familiar mágico te acompanha nas tuas aventuras?",
      "en": "What type of magical familiar accompanies you on your adventures?"
    }
  },
  "q_warlock_familiar_style": {
    "question": {
      "pt": "Preferes que o teu familiar tenha...?",
      "en": "Do you prefer your familiar to have...?"
    }
  },
  "q_warlock_familiar_dark": {
    "question": {
      "pt": "Qual destes seres das trevas preferes como familiar?",
      "en": "Which dark creature do you prefer as a familiar?"
    }
  },
  "q_warlock_familiar_mystic": {
    "question": {
      "pt": "Qual destas criaturas mágicas e fascinantes escolhes?",
      "en": "Which of these magical and fascinating creatures do you choose?"
    }
  },
  "q_warlock_familiar_habitat": {
    "question": {
      "pt": "O teu familiar ideal vive...?",
      "en": "Where does your ideal familiar live?"
    }
  },
  "q_warlock_familiar_creature_sky": {
    "question": {
      "pt": "Qual destas criaturas aéreas te acompanha?",
      "en": "Which of these aerial creatures accompanies you?"
    }
  },
  "q_warlock_familiar_creature_land": {
    "question": {
      "pt": "Qual destas criaturas terrestres te acompanha?",
      "en": "Which of these land creatures accompanies you?"
    }
  },
  "q_warlock_familiar_creature_water": {
    "question": {
      "pt": "Qual destas criaturas aquáticas te acompanha?",
      "en": "Which of these aquatic creatures accompanies you?"
    }
  },
  "q_class_adjustment_fighter": {
    "question": {
      "pt": "Que Estilo de Luta preferes aprender?",
      "en": "Which Fighting Style would you like to learn?"
    }
  },
  "q_class_adjustment_ranger": {
    "question": {
      "pt": "Que Estilo de Luta preferes aprender?",
      "en": "Which Fighting Style would you like to learn?"
    }
  },
  "q_class_adjustment_paladin": {
    "question": {
      "pt": "Que Estilo de Luta preferes aprender?",
      "en": "Which Fighting Style would you like to learn?"
    }
  },
  "q_physical_ability_preference": {
    "question": {
      "pt": "Preferes destacar a Destreza (DEX) ou a Força (STR) da tua personagem?",
      "en": "Would you rather highlight your character's Dexterity (DEX) or Strength (STR)?"
    }
  },
  "q_background_preference": {
    "question": {
      "pt": "Que tipo de vida levou a tua personagem?",
      "en": "What kind of life has your character led?"
    }
  },
  "q_dark_gift_presence": {
    "question": {
      "pt": "A tua personagem carrega uma maldição?",
      "en": "Does your character carry a curse?"
    }
  },
  "q_dark_gift_type": {
    "question": {
      "pt": "Que tipo de maldição ela tem?",
      "en": "What kind of curse do they bear?"
    }
  }
};


class QuizApp {
  constructor(quizData) {
    this.quizData = quizData;
    this.language = languageFromLocale(quizData.locale);
    if (!SUPPORTED_LANGUAGES.includes(this.language)) {
      this.language = DEFAULT_LANGUAGE;
    }
    this.state = {
      variables: this.cloneValue(quizData.metadata?.initial_state ?? {}),
      currentNodeId: null,
      history: [],
    };

    this.dom = {
      startScreen: document.getElementById('start-screen'),
      questionScreen: document.getElementById('question-screen'),
      resultScreen: document.getElementById('result-screen'),
      appTitle: document.getElementById('app-title'),
      appSubtitle: document.getElementById('app-subtitle'),
      progress: document.getElementById('progress-indicator'),
      statusSummary: document.getElementById('status-summary'),
      questionText: document.getElementById('question-text'),
      optionsForm: document.getElementById('options-form'),
      noOptionsMessage: document.getElementById('no-options-message'),
      backButtons: Array.from(document.querySelectorAll('[data-nav="back"]')),
      nextButtons: Array.from(document.querySelectorAll('[data-nav="next"]')),
      resultsContainer: document.getElementById('results-container'),
      restartButton: document.getElementById('restart-button'),
      startButton: document.getElementById('start-button'),
      startTitle: document.getElementById('start-title'),
      startDescription: document.getElementById('start-description'),
      startLanguageNote: document.getElementById('start-language-note'),
      languageSelect: document.getElementById('language-select'),
      languageLabel: document.getElementById('language-label'),
      resultTitle: document.getElementById('result-title'),
      resultIntro: document.getElementById('result-intro'),
    };

    this.sectionVariables = this.buildSectionVariables();
    this.darkGiftQuestionId = this.findDarkGiftQuestionId();
    this.backgroundQuestionId = this.findBackgroundQuestionId();
    this.roleData = this.prepareRoleData();
    this.variantData = this.prepareVariantData();
    this.lastVariantSignature = null;
    this.currentOptions = [];
    this.selectedValue = null;
    this.selectedValues = new Set();
    this.currentSelectionConfig = { mode: 'single' };
    this.hasStarted = false;
    this.attachEventListeners();
    this.syncClassVariantAttributes();
    this.setLanguage(this.language, { skipRerender: true });
    this.toggleScreens('start');
  }

  attachEventListeners() {
    this.dom.nextButtons.forEach((button) => {
      button?.addEventListener('click', () => this.goForward());
    });
    this.dom.backButtons.forEach((button) => {
      button?.addEventListener('click', () => this.goBack());
    });
    this.dom.restartButton?.addEventListener('click', () => this.restart());
    this.dom.startButton?.addEventListener('click', () => this.startQuiz());
    this.dom.languageSelect?.addEventListener('change', (event) => {
      this.setLanguage(event.target.value);
    });
  }

  startQuiz() {
    this.hasStarted = true;
    this.toggleScreens('question');
    this.start();
  }

  setLanguage(language, { skipRerender = false } = {}) {
    const normalized = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    const previous = this.language;
    this.language = normalized;
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = this.language;
    }
    this.syncLanguageControls();
    this.updateStaticText();
    if (!skipRerender && previous !== this.language) {
      this.rerenderActiveScreen();
    }
  }

  syncLanguageControls() {
    if (this.dom.languageSelect) {
      this.dom.languageSelect.value = this.language;
    }
  }

  getLocaleKey() {
    return this.language === 'en' ? 'en' : 'pt';
  }

  getText(key) {
    const entry = UI_TEXT[key];
    if (!entry) {
      return '';
    }
    const localeKey = this.getLocaleKey();
    return entry[localeKey] ?? entry[DEFAULT_LANGUAGE] ?? '';
  }

  updateStaticText() {
    if (this.dom.appTitle) {
      this.dom.appTitle.textContent = this.getText('title');
    }
    if (this.dom.appSubtitle) {
      this.dom.appSubtitle.textContent = this.getText('subtitle');
    }
    if (this.dom.languageLabel) {
      this.dom.languageLabel.textContent = this.getText('languageLabel');
    }
    if (this.dom.startTitle) {
      this.dom.startTitle.textContent = this.getText('startTitle');
    }
    if (this.dom.startDescription) {
      this.dom.startDescription.textContent = this.getText('startDescription');
    }
    if (this.dom.startLanguageNote) {
      this.dom.startLanguageNote.textContent = this.getText('startNote');
    }
    if (this.dom.startButton) {
      this.dom.startButton.textContent = this.getText('startButton');
    }
    if (this.dom.noOptionsMessage) {
      this.dom.noOptionsMessage.textContent = this.getText('noOptions');
    }
    if (this.dom.resultTitle) {
      this.dom.resultTitle.textContent = this.getText('resultsTitle');
    }
    if (this.dom.resultIntro) {
      this.dom.resultIntro.textContent = this.getText('resultsIntro');
    }
    if (this.dom.restartButton) {
      this.dom.restartButton.textContent = this.getText('restartButton');
    }
    this.dom.backButtons.forEach((button) => {
      if (button) {
        button.textContent = `← ${this.getText('navPrevious')}`;
      }
    });
    this.dom.nextButtons.forEach((button) => {
      if (button) {
        button.textContent = `${this.getText('navNext')} →`;
      }
    });
    if (typeof document !== 'undefined') {
      document.title = this.getText('title');
    }
  }

  rerenderActiveScreen() {
    const questionVisible = this.dom.questionScreen && !this.dom.questionScreen.hasAttribute('hidden');
    const resultVisible = this.dom.resultScreen && !this.dom.resultScreen.hasAttribute('hidden');

    if (questionVisible && this.state.currentNodeId) {
      const selection = this.currentSelectionConfig ?? { mode: 'single' };
      const preselect =
        selection.mode === 'multiple'
          ? Array.from(this.selectedValues ?? [])
          : this.selectedValue;
      this.showQuestion(this.state.currentNodeId, { preselect, fromHistory: true });
      return;
    }

    if (resultVisible) {
      this.renderResults();
    }
  }

  getQuestionText(nodeId, node) {
    if (!node) {
      return '';
    }
    const localeKey = this.getLocaleKey();
    const translationEntry = QUESTION_TRANSLATIONS[nodeId]?.question;
    if (translationEntry) {
      return translationEntry[localeKey] ?? translationEntry[DEFAULT_LANGUAGE] ?? node.question ?? '';
    }
    if (node.question && typeof node.question === 'object') {
      return node.question[localeKey] ?? node.question[DEFAULT_LANGUAGE] ?? '';
    }
    return node.question ?? '';
  }

  getOptionLabel(nodeId, option) {
    if (!option) {
      return '';
    }
    const localeKey = this.getLocaleKey();
    if (option.label_translations) {
      return option.label_translations[localeKey] ?? option.label_translations[DEFAULT_LANGUAGE] ?? '';
    }
    const optionMapEntry = this.quizData.optionLabels?.[nodeId]?.[option.value];
    if (optionMapEntry) {
      return optionMapEntry[localeKey] ?? optionMapEntry[DEFAULT_LANGUAGE] ?? '';
    }
    if (option.datasetEntry) {
      const datasetLabel = option.datasetEntry[localeKey] ?? option.datasetEntry[DEFAULT_LANGUAGE];
      if (datasetLabel) {
        return datasetLabel;
      }
    }
    if (option.label && typeof option.label === 'object') {
      return option.label[localeKey] ?? option.label[DEFAULT_LANGUAGE] ?? '';
    }
    if (typeof option.label === 'string') {
      return option.label;
    }
    return String(option.value ?? '');
  }

  getNavButtons(type) {
    if (type === 'next') {
      return this.dom.nextButtons ?? [];
    }
    if (type === 'back') {
      return this.dom.backButtons ?? [];
    }
    return [];
  }

  setNavButtonsDisabled(type, disabled) {
    this.getNavButtons(type).forEach((button) => {
      if (button) {
        button.disabled = disabled;
      }
    });
  }

  scrollToTop() {
    if (typeof window === 'undefined' || typeof window.scrollTo !== 'function') {
      return;
    }
    try {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } catch {
      window.scrollTo(0, 0);
    }
  }

  start() {
    this.state.currentNodeId = null;
    this.state.history = [];
    this.state.variables = this.cloneValue(this.quizData.metadata?.initial_state ?? {});
    this.lastVariantSignature = null;
    this.syncClassVariantAttributes();
    this.showQuestion(this.quizData.root);
  }

  restart() {
    this.hasStarted = true;
    this.toggleScreens('question');
    this.start();
  }

  toggleScreens(target) {
    const showStart = target === 'start';
    const showQuestion = target === 'question';
    const showResult = target === 'result';

    if (this.dom.startScreen) {
      this.dom.startScreen.toggleAttribute('hidden', !showStart);
      this.dom.startScreen.classList.toggle('card--hidden', !showStart);
    }

    if (this.dom.questionScreen) {
      this.dom.questionScreen.toggleAttribute('hidden', !showQuestion);
      this.dom.questionScreen.classList.toggle('card--hidden', !showQuestion);
    }

    if (this.dom.resultScreen) {
      this.dom.resultScreen.toggleAttribute('hidden', !showResult);
      this.dom.resultScreen.classList.toggle('card--hidden', !showResult);
    }
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
    let resolution = this.resolveNextQuestion(startNodeId);
    if (!resolution) {
      resolution = this.resolveDarkGiftFallback();
      if (!resolution) {
        this.showResults();
        return;
      }
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

    if (this.dom.progress) {
      this.dom.progress.textContent = `${this.getText('progressPrefix')} ${
        this.state.history.length + 1
      }`;
    }
    if (this.dom.questionText) {
      this.dom.questionText.textContent = this.getQuestionText(nodeId, node);
    }

    this.renderOptions(nodeId, options, preselect, selection);
    this.dom.noOptionsMessage.hidden = options.length > 0;

    if (selection.mode === 'multiple') {
      this.updateNextButtonForMultiple(selection);
    } else {
      this.setNavButtonsDisabled('next', !preselect);
    }

    this.setNavButtonsDisabled('back', this.state.history.length === 0);

    if (!options.length) {
      this.setNavButtonsDisabled('next', true);
    }

    this.renderStatusSummary();

    if (!fromHistory) {
      this.dom.optionsForm.focus?.();
    }
    this.scrollToTop();
  }

  showResults() {
    this.toggleScreens('result');
    this.renderResults();
    this.scrollToTop();
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
      options = this.applyAbilityOverlapFilter(node, options);
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

  resolveDarkGiftFallback() {
    const variables = this.state.variables ?? {};

    if (this.hasValue(variables.dark_gift)) {
      return null;
    }

    if (!this.darkGiftQuestionId || this.state.currentNodeId === this.darkGiftQuestionId) {
      return null;
    }

    const backgroundNotChosen = !this.hasValue(variables.background);
    const abilityComboDefined = this.hasValue(variables.class_ability_combo);

    if (this.backgroundQuestionId && backgroundNotChosen && abilityComboDefined) {
      const resolution = this.resolveNextQuestion(this.backgroundQuestionId);
      if (resolution) {
        return resolution;
      }
    }

    return this.resolveNextQuestion(this.darkGiftQuestionId);
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
      return node.options
        .map((opt, index) => ({
          ...opt,
          index,
        }))
        .filter((option) => !option.when || this.evaluateCondition(option.when));
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

    return options.filter((option) => !option.when || this.evaluateCondition(option.when));
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
      case 'contains':
        if (!Array.isArray(variableValue)) {
          return false;
        }
        if (Array.isArray(condition.value)) {
          return condition.value.some((item) => variableValue.includes(item));
        }
        return variableValue.includes(condition.value);
      case 'is_set':
        return this.hasValue(variableValue);
      default:
        return true;
    }
  }

  renderOptions(nodeId, options, preselectValue, selection = { mode: 'single' }) {
    if (!this.dom.optionsForm) {
      return;
    }
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
          this.setNavButtonsDisabled('next', false);
        }
      });

      if (isMultiple && input.checked) {
        this.selectedValues.add(option.value);
      }

      const label = document.createElement('p');
      label.className = 'option__label';
      label.textContent = this.getOptionLabel(nodeId, option);

      wrapper.append(input, label);
      this.dom.optionsForm.appendChild(wrapper);
    });

    if (!options.length) {
      this.selectedValue = null;
      this.selectedValues = new Set();
      this.setNavButtonsDisabled('next', true);
      return;
    }

    if (isMultiple) {
      this.updateNextButtonForMultiple(selection);
    } else if (!preselectValue) {
      this.setNavButtonsDisabled('next', true);
    }
  }

  renderResults() {
    const localeKey = this.getLocaleKey();
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

    const localeKey = this.getLocaleKey();
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
    const entry = VARIABLE_LABELS[variableName];
    if (!entry) {
      return variableName;
    }
    const localeKey = this.getLocaleKey();
    return entry[localeKey] ?? entry[DEFAULT_LANGUAGE] ?? variableName;
  }

  formatSectionFallback(sectionKey) {
    const entry = SECTION_FALLBACK[sectionKey];
    if (!entry) {
      return sectionKey;
    }
    const localeKey = this.getLocaleKey();
    return entry[localeKey] ?? entry[DEFAULT_LANGUAGE] ?? sectionKey;
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

    const classSection = ensureSection('class');
    ['class_ability_combo', 'class_armor', 'class_handheld_gear'].forEach((variable) => {
      classSection.add(variable);
    });

    return map;
  }

  findDarkGiftQuestionId() {
    const entries = Object.entries(this.quizData.nodes ?? {});
    for (const [nodeId, node] of entries) {
      if (!node || node.type !== 'question' || node.section !== 'dark_gift') {
        continue;
      }

      const options = Array.isArray(node.options) ? node.options : [];
      const touchesDarkGift = options.some((option) =>
        Array.isArray(option.set) && option.set.some((action) => action?.var === 'dark_gift'),
      );

      if (!touchesDarkGift) {
        continue;
      }

      const resetsDarkGift = options.some((option) =>
        Array.isArray(option.set) && option.set.some((action) => action?.var === 'dark_gift' && action.value === null),
      );

      if (resetsDarkGift) {
        return nodeId;
      }
    }

    return null;
  }

  findBackgroundQuestionId() {
    const entries = Object.entries(this.quizData.nodes ?? {});
    for (const [nodeId, node] of entries) {
      if (!node || node.type !== 'question' || node.section !== 'background') {
        continue;
      }

      const usesBackgroundDataset = node.options_source?.dataset === 'backgrounds';
      const setsBackgroundVariable = Array.isArray(node.on_select)
        ? node.on_select.some((action) => action?.var === 'background')
        : false;

      if (usesBackgroundDataset || setsBackgroundVariable) {
        return nodeId;
      }
    }

    return null;
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

    this.syncClassVariantAttributes();
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

    this.syncClassVariantAttributes();
  }

  applyAbilityOverlapFilter(node, options) {
    if (!Array.isArray(options) || !options.length) {
      return options ?? [];
    }

    const rule = node.ability_overlap_filter;
    if (!rule || !rule.variable || !rule.entry_field) {
      return options;
    }

    const abilityValues = this.state.variables?.[rule.variable];
    if (!Array.isArray(abilityValues) || !abilityValues.length) {
      return [];
    }

    const normalizedAbilities = abilityValues.map((value) =>
      typeof value === 'string' ? value.toUpperCase() : String(value)
    );
    const abilitySet = new Set(normalizedAbilities);
    const abilitySetWithoutCha = Array.from(abilitySet).filter((value) => value && value !== 'CHA');
    const faceRoleVar = rule.face_role_variable ?? 'secondary_roles';
    let faceRoleSelected = false;
    const faceRoleValues = this.state.variables?.[faceRoleVar];
    if (Array.isArray(faceRoleValues)) {
      faceRoleSelected = faceRoleValues.some(
        (value) => typeof value === 'string' && value.toUpperCase() === 'FACE'
      );
    }
    const requireChaForFace = faceRoleSelected && rule.face_requires_cha;
    const minOverlap = typeof rule.min_overlap === 'number' ? rule.min_overlap : 1;

    return options.filter((option) => {
      const entry = option.datasetEntry;
      if (!entry) {
        return false;
      }

      const entryAbilitiesRaw = entry[rule.entry_field];
      if (!Array.isArray(entryAbilitiesRaw) || !entryAbilitiesRaw.length) {
        return false;
      }

      const entryAbilities = entryAbilitiesRaw
        .map((ability) => (ability ? String(ability).toUpperCase() : null))
        .filter(Boolean);
      if (!entryAbilities.length) {
        return false;
      }

      let overlap = 0;
      entryAbilities.forEach((ability) => {
        if (abilitySet.has(ability)) {
          overlap += 1;
        }
      });

      if (requireChaForFace) {
        const hasCha = entryAbilities.includes('CHA');
        let hasComboAbility = false;
        if (abilitySetWithoutCha.length) {
          hasComboAbility = abilitySetWithoutCha.some((ability) =>
            entryAbilities.includes(ability)
          );
        } else {
          hasComboAbility = hasCha;
        }
        if (!hasCha || !hasComboAbility) {
          return false;
        }
      }

      return overlap >= minOverlap;
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
    this.setNavButtonsDisabled('next', !isValid);
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

  prepareVariantData() {
    const entries = Array.isArray(this.quizData.metadata?.class_variants)
      ? this.quizData.metadata.class_variants
      : [];
    const map = new Map();

    entries.forEach((entry) => {
      const classCode = entry?.class;
      const subclassCode = entry?.subclass;
      if (!classCode || !subclassCode) {
        return;
      }

      const key = `${classCode}::${subclassCode}`;
      if (!map.has(key)) {
        map.set(key, []);
      }

      const abilityCombo = Array.isArray(entry.ability_combo)
        ? entry.ability_combo.map((value) => String(value))
        : [];
      const hands = Array.isArray(entry.hands) ? entry.hands.map((value) => String(value)) : [];

      map.get(key).push({
        adjustment: entry.required_adjustment ?? null,
        ability: entry.preferred_ability ?? null,
        abilityCombo,
        armor: entry.armor ?? null,
        hands,
        variant: entry.variant ?? null,
      });
    });

    return map;
  }

  getVariantEntries(classCode, subclassCode) {
    if (!classCode || !subclassCode) {
      return [];
    }
    const key = `${classCode}::${subclassCode}`;
    return this.variantData?.get(key) ?? [];
  }

  syncClassVariantAttributes() {
    if (!this.state?.variables) {
      return;
    }

    const variables = this.state.variables;
    const classCode = variables.class ?? null;
    const normalizedClassCode =
      typeof classCode === 'string' ? classCode.toUpperCase() : null;
    const subclassCode = variables.subclass ?? null;
    const classAdjustment = variables.class_adjustment ?? null;
    const fightingStyleRaw = variables.fighting_style_choice ?? null;
    let fightingStyle =
      typeof fightingStyleRaw === 'string' ? fightingStyleRaw.toUpperCase() : null;
    const supportsFightingStyle = ['FIGHTER', 'PALADIN', 'RANGER'].includes(
      normalizedClassCode
    );
    if (!supportsFightingStyle) {
      fightingStyle = null;
      if (fightingStyleRaw) {
        variables.fighting_style_choice = null;
      }
    }
    const usesStrengthStyle = fightingStyle === 'THROWN' || fightingStyle === 'UNARMED';
    const signature = `${classCode ?? ''}::${subclassCode ?? ''}::${classAdjustment ?? ''}::${
      fightingStyle ?? ''
    }`;
    const combinationChanged = signature !== this.lastVariantSignature;
    if (combinationChanged) {
      this.lastVariantSignature = signature;
      variables.preferred_physical_ability = null;
      variables._class_ability_combo_codes = [];
    }

    const entries = this.getVariantEntries(classCode, subclassCode);
    if (!entries.length) {
      variables.variant_requires_physical_preference = false;
      variables.class_ability_combo = null;
      variables.class_armor = null;
      variables.class_handheld_gear = null;
      variables._class_ability_combo_codes = [];
      return;
    }

    let filtered = entries.filter((entry) => entry.adjustment === classAdjustment);
    if (!filtered.length) {
      filtered = entries.filter((entry) => entry.adjustment === null || entry.adjustment === undefined);
    }
    if (!filtered.length) {
      filtered = entries.slice();
    }

    if (usesStrengthStyle) {
      const strengthEntries = filtered.filter(
        (entry) => (entry.ability ? String(entry.ability).toUpperCase() : null) === 'STR'
      );
      if (strengthEntries.length) {
        filtered = strengthEntries;
      }
    }

    if (usesStrengthStyle) {
      variables.preferred_physical_ability = 'STR';
    }

    const abilityOptions = Array.from(
      new Set(
        filtered
          .map((entry) => (entry.ability ? String(entry.ability).toUpperCase() : null))
          .filter(Boolean)
      )
    );
    const needsChoice = abilityOptions.length >= 2;
    variables.variant_requires_physical_preference = needsChoice;

    if (!abilityOptions.includes(variables.preferred_physical_ability)) {
      variables.preferred_physical_ability = null;
    }

    let selected = null;
    if (needsChoice) {
      if (variables.preferred_physical_ability) {
        selected = filtered.find(
          (entry) => (entry.ability ?? '').toUpperCase() === variables.preferred_physical_ability
        );
      }
    } else {
      selected = filtered[0] ?? null;
    }

    if (!selected && filtered.length === 1) {
      selected = filtered[0];
    }

    const abilityComboCodes = Array.isArray(selected?.abilityCombo)
      ? selected.abilityCombo
          .map((value) => (typeof value === 'string' ? value.toUpperCase() : String(value)))
          .filter(Boolean)
      : [];

    const abilityComboText = abilityComboCodes.length ? abilityComboCodes.join(' / ') : null;

    const armorRaw = selected?.armor ?? null;
    let armorText = null;
    if (typeof armorRaw === 'string') {
      const trimmed = armorRaw.trim();
      armorText = trimmed.length ? trimmed : null;
    } else if (armorRaw) {
      armorText = armorRaw;
    }

    const handsRaw = selected?.hands ?? null;
    let handsText = null;
    if (Array.isArray(handsRaw)) {
      const filteredHands = handsRaw
        .map((item) => (typeof item === 'string' ? item.trim() : item))
        .filter((item) => Boolean(item));
      handsText = filteredHands.length ? filteredHands.join(', ') : null;
    } else if (typeof handsRaw === 'string') {
      const trimmed = handsRaw.trim();
      handsText = trimmed.length ? trimmed : null;
    }

    variables.class_ability_combo = abilityComboText;
    variables.class_armor = armorText;
    variables.class_handheld_gear = handsText;
    const isWarlockTome =
      typeof classCode === 'string' &&
      classCode.toUpperCase() === 'WARLOCK' &&
      typeof classAdjustment === 'string' &&
      classAdjustment.toUpperCase() === 'WARLOCK_PACT_OF_THE_TOME';
    if (isWarlockTome) {
      variables.class_handheld_gear = 'Eldritch Spellbook';
    }
    if (fightingStyle === 'THROWN') {
      variables.class_handheld_gear = 'Handaxes';
    } else if (fightingStyle === 'UNARMED') {
      variables.class_handheld_gear = '[]';
    }
    variables._class_ability_combo_codes = abilityComboCodes;
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

const applyOptionLabelTranslations = (nodes, labelMap) => {
  if (!nodes || !labelMap) {
    return;
  }

  Object.entries(nodes).forEach(([nodeId, node]) => {
    if (!node || !Array.isArray(node.options)) {
      return;
    }

    const nodeLabels = labelMap[nodeId];
    if (!nodeLabels) {
      return;
    }

    node.options.forEach((option) => {
      if (!option || option.value === undefined) {
        return;
      }

      const translation = nodeLabels[option.value];
      if (translation && typeof translation === 'object') {
        option.label_translations = { ...translation };
      }
    });
  });
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

  let optionLabels = {};
  const labelEntries = Object.entries(manifest.option_label_files ?? {});
  if (labelEntries.length) {
    const labelPayloads = await Promise.all(
      labelEntries.map(async ([key, filePath]) => ({
        key,
        data: await fetchJson(filePath, `os rótulos (${key})`),
      }))
    );

    optionLabels = labelPayloads.reduce((acc, { data }) => {
      if (!data || typeof data !== 'object') {
        return acc;
      }
      Object.entries(data).forEach(([nodeId, labels]) => {
        if (!labels || typeof labels !== 'object') {
          return;
        }
        const bucket = acc[nodeId] ?? {};
        acc[nodeId] = bucket;
        Object.entries(labels).forEach(([value, translations]) => {
          if (translations && typeof translations === 'object') {
            bucket[value] = { ...translations };
          }
        });
      });
      return acc;
    }, {});
  }

  if (Object.keys(optionLabels).length) {
    applyOptionLabelTranslations(nodes, optionLabels);
  }

  let metadata = manifest.metadata ?? {};
  if (manifest.metadata_file) {
    metadata = await fetchJson(manifest.metadata_file, 'os mapeamentos');
  }

  if (manifest.class_variant_file) {
    const variants = await fetchJson(manifest.class_variant_file, 'as variantes de classe');
    metadata = {
      ...metadata,
      class_variants: variants,
    };
  }

  const merged = {
    ...manifest,
    nodes,
    metadata,
    optionLabels,
  };

  delete merged.question_files;
  delete merged.metadata_file;
  delete merged.class_variant_file;
  delete merged.option_label_files;

  if (!merged.root) {
    const rootFromPayload = questionPayloads.find(({ data }) => data?.root)?.data?.root;
    if (rootFromPayload) {
      merged.root = rootFromPayload;
    }
  }

  return merged;
};

const bootstrap = async () => {
  const loadingMessage = UI_TEXT.loading?.[DEFAULT_LANGUAGE] ?? 'A carregar questionário…';
  const questionElement = document.getElementById('question-text');
  if (questionElement) {
    questionElement.textContent = loadingMessage;
  }
  try {
    const data = await loadQuizData('dnd_2024_questionario.json');
    new QuizApp(data);
  } catch (error) {
    const message = document.createElement('p');
    message.className = 'options__empty';
    message.textContent = UI_TEXT.loadError?.[DEFAULT_LANGUAGE] ??
      'Não foi possível carregar o questionário. Atualiza a página ou verifica o servidor.';
    const container = document.getElementById('options-form');
    container.innerHTML = '';
    container.appendChild(message);
    console.error(error);
  }
};

bootstrap();
