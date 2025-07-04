const langSelect = document.getElementById('lang');
const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');
const restartBtn = document.getElementById('restart');
const titleEl = document.querySelector('h1');
const languageLabel = document.querySelector('#language-select label');
let currentLang = 'pt';

const genderQuestions = {
  pt: {
    title: 'Apresentação de Género',
    text: 'Como se apresenta a tua personagem em termos de género?',
    options: { F: 'Feminina', M: 'Masculina', A: 'Andrógina' }
  },
  en: {
    title: 'Gender Presentation',
    text: 'How does your character present gender-wise?',
    options: { F: 'Female', M: 'Male', A: 'Androgynous' }
  }
};

const subSpeciesQuestions = { en: subQuestionsEN, pt: subQuestionsPT };

const subClassQuestions = { en: subClassEN, pt: subClassPT };

function updateStaticText(){
  document.title = miscText[currentLang].quizTitle;
  titleEl.textContent = miscText[currentLang].quizTitle;
  languageLabel.textContent = miscText[currentLang].language;
}

let stage = 0;
// holds current quiz selections
let currentResult = {
  gender: null,
  height: null,
  species: null,
  class: null,
  subclass: null,
  background: null
};
let speciesNode = null;
const speciesStack = [];
let subSpeciesNode = null;
let step2Index = 0;
let step2Answers = {};
let classNode = null;
const classStack = [];
let step3Index = 0;
let step3Answers = {};
const speciesPath = [];
const classPath = [];
let subQuestionSpecies = null;

function renderQuiz() {
  const locale = data[currentLang];
  const strip = txt => txt.replace(/\s*\([^)]*\)\s*$/, '');
  updateStaticText();
  quizDiv.innerHTML = '';
  let html = '';
  if(stage === 0){
    const q = genderQuestions[currentLang];
    html += `<h2>${q.title}</h2>`;
    html += `<section><p>${q.text}</p>`;
    for(const key in q.options){
      const id = `g_${key}`;
      const checked = currentResult.gender === key ? ' checked' : '';
      html += `<label><input type="radio" name="gender" value="${key}" id="${id}"${checked}> ${q.options[key]}</label>`;
    }
    html += '</section>';
    submitBtn.textContent = currentLang === 'pt' ? 'Avançar' : 'Next';
  } else if(stage === 1){
    const step = locale.step1;
    html += `<h2>${step.title}</h2>`;
    if(subSpeciesNode){
      html += `<section><p>${subSpeciesNode.question}</p>`;
      for(const key in subSpeciesNode.options){
        const id = `sub_${key}`;
        html += `<label><input type="radio" name="sub" value="${key}" id="${id}"> ${strip(subSpeciesNode.options[key])}</label>`;
      }
      html += '</section>';
    } else if(step.tree){
      if(!speciesNode) speciesNode = step.tree;
      html += `<section><p>${speciesNode.question}</p>`;
      for(const key in speciesNode.options){
        const id = `s1_${key}`;
        html += `<label><input type="radio" name="s1" value="${key}" id="${id}"> ${strip(speciesNode.options[key].label)}</label>`;
      }
      html += '</section>';
    } else {
      step.questions.forEach((q, qi) => {
        html += `<section><p>${q.text}</p>`;
        for (const key in q.options) {
          const id = `s1q${qi}_${key}`;
          html += `<label><input type="radio" name="s1q${qi}" value="${key}" id="${id}"> ${strip(q.options[key])}</label>`;
        }
        html += '</section>';
      });
    }
  } else if(stage === 2){
    const step = locale.step2;
    html += `<h2>${step.title}</h2>`;
    if(step.tree){
      if(!classNode) classNode = step.tree;
      html += `<section><p>${classNode.question}</p>`;
      for(const key in classNode.options){
        const id = `s2_${key}`;
        const opt = classNode.options[key];
        html += `<label><input type="radio" name="s2" value="${key}" id="${id}"> ${strip(opt.label)}</label>`;
      }
      html += '</section>';
      submitBtn.textContent = currentLang === 'pt' ? 'Avançar' : 'Next';
    } else {
      const q = step.questions[step2Index];
      html += `<section><p>${q.text}</p>`;
      for (const key in q.options) {
        const id = `s2q${step2Index}_${key}`;
        const checked = step2Answers[step2Index] === key ? ' checked' : '';
        html += `<label><input type="radio" name="s2q${step2Index}" value="${key}" id="${id}"${checked}> ${strip(q.options[key])}</label>`;
      }
      html += '</section>';
      submitBtn.textContent = step2Index === step.questions.length - 1 ? (currentLang === 'pt' ? 'Avançar' : 'Next') : (currentLang === 'pt' ? 'Avançar' : 'Next');
    }
  } else if(stage === 3){
    const sub = subClassQuestions[currentLang][currentResult.class];
    html += `<h2>${currentLang === 'pt' ? 'Subclasse' : 'Subclass'}</h2>`;
    html += `<section><p>${sub.question}</p>`;
    for(const key in sub.options){
      const id = `sc_${key}`;
      const checked = currentResult.subclass === key ? ' checked' : '';
      html += `<label><input type="radio" name="subclass" value="${key}" id="${id}"${checked}> ${strip(sub.options[key])}</label>`;
    }
    html += '</section>';
    submitBtn.textContent = currentLang === 'pt' ? 'Avançar' : 'Next';
  } else if(stage === 4){
    const step = locale.step3;
    const classData = step.classes[currentResult.class];
    const q = classData.questions[step3Index];
    html += `<h2>${step.title}</h2><p>${step.intro}</p>`;
    html += `<section><p>${q.text}</p>`;
    for(const key in q.options){
      const id = `s3q${step3Index}_${key}`;
      const checked = step3Answers[step3Index] === key ? ' checked' : '';
      html += `<label><input type="radio" name="s3q${step3Index}" value="${key}" id="${id}"${checked}> ${strip(q.options[key])}</label>`;
    }
    html += '</section>';
    submitBtn.textContent = step3Index === classData.questions.length - 1 ? (currentLang === 'pt' ? 'Concluir' : 'Finish') : (currentLang === 'pt' ? 'Avançar' : 'Next');
  }
  quizDiv.innerHTML = html;
  window.scrollTo(0,0);
  submitBtn.style.display = 'block';
  backBtn.style.display = stage > 0 || speciesStack.length > 0 || subSpeciesNode || classStack.length > 0 ? 'block' : 'none';
  backBtn.textContent = currentLang === 'pt' ? 'Recuar' : 'Back';
  restartBtn.textContent = labels[currentLang].restart;
}

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  const locale = data[currentLang];
  if(locale.step1.tree){
    speciesNode = locale.step1.tree;
    speciesStack.length = 0;
    for(const key of speciesPath){
      const choice = speciesNode.options[key];
      if(!choice) break;
      speciesStack.push(speciesNode);
      if(choice.next){
        speciesNode = choice.next;
      }
    }
  }
  if(subQuestionSpecies){
    subSpeciesNode = subSpeciesQuestions[currentLang][subQuestionSpecies];
  }
  if(locale.step2.tree){
    classNode = locale.step2.tree;
    classStack.length = 0;
    for(const key of classPath){
      const choice = classNode.options[key];
      if(!choice) break;
      classStack.push(classNode);
      if(choice.next){
        classNode = choice.next;
      }
    }
  }
  updateStaticText();
  renderQuiz();
});

function calculateSpecies(){
  const locale = data[currentLang];
  if(locale.step1.tree){
    const val = document.querySelector('input[name="s1"]:checked');
    if(!val) return null;
    const choice = speciesNode.options[val.value];
    return choice.result || null;
  }
  const speciesScores = {};
  locale.step1.questions.forEach((q, qi) => {
    const val = document.querySelector(`input[name="s1q${qi}"]:checked`);
    if(val){
      speciesScores[val.value] = (speciesScores[val.value] || 0) + 1;
    }
  });
  const species = Object.entries(speciesScores).sort((a,b)=>b[1]-a[1])[0];
  return species ? locale.step1.mapping[species[0]] : 'N/A';
}

function calculateClass(){
  const locale = data[currentLang];
  const classScores = {};
  Object.values(step2Answers).forEach(val => {
    classScores[val] = (classScores[val] || 0) + 1;
  });
  const clazz = Object.entries(classScores).sort((a,b)=>b[1]-a[1])[0];
  return clazz ? locale.step2.mapping[clazz[0]] : 'N/A';
}

function calculateBackground(clazz){
  const step3 = data[currentLang].step3.classes[clazz];
  if(!step3) return 'N/A';
  const scores = {};
  Object.values(step3Answers).forEach(val => {
    scores[val] = (scores[val] || 0) + 1;
  });
  const res = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  return res ? step3.mapping[res[0]] : 'N/A';
}

submitBtn.addEventListener('click', async () => {
  const locale = data[currentLang];
  if(stage === 0){
    const val = document.querySelector('input[name="gender"]:checked');
    if(!val) return;
    currentResult.gender = val.value;
    speciesNode = locale.step1.tree;
    speciesStack.length = 0;
    subSpeciesNode = null;
    stage = 1;
    renderQuiz();
    return;
  }
  if(stage === 1){
    if(subSpeciesNode){
      const val = document.querySelector('input[name="sub"]:checked');
      if(!val) return;
      currentResult.species = val.value;
      subSpeciesNode = null;
      subQuestionSpecies = null;
      speciesPath.push(val.value);
      step2Index = 0;
      step2Answers = {};
      classNode = locale.step2.tree;
      classStack.length = 0;
      classPath.length = 0;
      step3Index = 0;
      step3Answers = {};
      stage = 2;
      renderQuiz();
      return;
    }
    if(locale.step1.tree){
      const val = document.querySelector('input[name="s1"]:checked');
      if(!val) return;
      const choice = speciesNode.options[val.value];
      if(speciesStack.length === 0 && speciesNode === locale.step1.tree){
        const hMap = {A:'very short',B:'short',C:'average height',D:'tall',E:'very tall'};
        currentResult.height = hMap[val.value];
      }
      if(choice.next){
        speciesStack.push(speciesNode);
        speciesPath.push(val.value);
        speciesNode = choice.next;
        renderQuiz();
        return;
      }
      if(choice.result){
        if(choice.result === 'Geppettin (Marionette)'){
          currentResult.species = 'Marionette Geppettin';
          speciesPath.push(val.value);
          step2Index = 0;
          step2Answers = {};
          classNode = locale.step2.tree;
          classStack.length = 0;
          classPath.length = 0;
          step3Index = 0;
          step3Answers = {};
          stage = 2;
          renderQuiz();
          return;
        }
        const sub = subSpeciesQuestions[currentLang][choice.result];
        if(sub){
          subSpeciesNode = sub;
          subQuestionSpecies = choice.result;
          speciesPath.push(val.value);
          renderQuiz();
          return;
        }
        currentResult.species = choice.result;
        speciesPath.push(val.value);
        step2Index = 0;
        step2Answers = {};
        classNode = locale.step2.tree;
        classStack.length = 0;
        classPath.length = 0;
        step3Index = 0;
        step3Answers = {};
        stage = 2;
        renderQuiz();
        return;
      }
      return;
    }
    currentResult.species = calculateSpecies();
    if(currentResult.species === 'Geppettin (Marionette)'){
      currentResult.species = 'Marionette Geppettin';
    } else {
      const sub = subSpeciesQuestions[currentLang][currentResult.species];
      if(sub){
        subSpeciesNode = sub;
        subQuestionSpecies = currentResult.species;
        renderQuiz();
        return;
      }
    }
    step2Index = 0;
    step2Answers = {};
    classNode = locale.step2.tree;
    classStack.length = 0;
    step3Index = 0;
    step3Answers = {};
    stage = 2;
    renderQuiz();
    return;
  }
  if(stage === 2){
    if(locale.step2.tree){
      const val = document.querySelector('input[name="s2"]:checked');
      if(!val) return;
      const choice = classNode.options[val.value];
      if(choice.next){
        classStack.push(classNode);
        classPath.push(val.value);
        classNode = choice.next;
        renderQuiz();
        return;
      }
      if(choice.result){
        currentResult.class = choice.result;
        classPath.push(val.value);
        stage = 3;
        renderQuiz();
        return;
      }
      return;
    }
    const q = locale.step2.questions[step2Index];
    const val = document.querySelector(`input[name="s2q${step2Index}"]:checked`);
    if(!val) return;
    step2Answers[step2Index] = val.value;
    if(step2Index < locale.step2.questions.length - 1){
      step2Index++;
      renderQuiz();
      return;
    }
    currentResult.class = calculateClass();
    if(currentResult.class === 'N/A'){
      const msg = currentLang === 'pt'
        ? 'Nenhuma classe escolhida. Sem uma classe não é possível determinar um background. Queres terminar o questionário mesmo assim? Carrega em Cancelar para recomeçar.'
        : 'No class selected. Without a class it is not possible to determine a background. Would you like to finish the quiz anyway? Press Cancel to restart.';
      if(confirm(msg)){
        const background = 'N/A';
        sessionStorage.setItem('dndResults', JSON.stringify({
          species: currentResult.species,
          class: currentResult.class,
          background,
          gender: currentResult.gender,
          height: currentResult.height,
          lang: currentLang
        }));
        window.location.href = 'results.html';
      } else {
        restartQuiz();
      }
      return;
    }
    stage = 3;
    renderQuiz();
    return;
  }
  if(stage === 3){
    const sub = subClassQuestions[currentLang][currentResult.class];
    const val = document.querySelector('input[name="subclass"]:checked');
    if(!val) return;
    currentResult.subclass = val.value;
    if(data[currentLang].step3 && data[currentLang].step3.classes[currentResult.class]){
      stage = 4;
      step3Index = 0;
      step3Answers = {};
      renderQuiz();
    } else {
      const background = 'N/A';
      sessionStorage.setItem('dndResults', JSON.stringify({
        species: currentResult.species,
        class: currentResult.class,
        subclass: currentResult.subclass,
        background,
        gender: currentResult.gender,
        height: currentResult.height,
        lang: currentLang
      }));
      window.location.href = 'results.html';
    }
    return;
  }
  if(stage === 4){
    const classData = locale.step3.classes[currentResult.class];
    const val = document.querySelector(`input[name="s3q${step3Index}"]:checked`);
    if(!val) return;
    step3Answers[step3Index] = val.value;
    if(step3Index < classData.questions.length - 1){
      step3Index++;
      renderQuiz();
      return;
    }
    const background = calculateBackground(currentResult.class);
    sessionStorage.setItem('dndResults', JSON.stringify({
      species: currentResult.species,
      class: currentResult.class,
      subclass: currentResult.subclass,
      background,
      gender: currentResult.gender,
      height: currentResult.height,
      lang: currentLang
    }));
    window.location.href = 'results.html';
  }
});

backBtn.addEventListener('click', () => {
  if(stage === 1 && subSpeciesNode){
    subSpeciesNode = null;
    subQuestionSpecies = null;
    speciesPath.pop();
    renderQuiz();
    return;
  }
  if(stage === 1 && speciesStack.length === 0){
    stage = 0;
    renderQuiz();
    return;
  }
  if(stage === 1 && speciesStack.length > 0){
    speciesNode = speciesStack.pop();
    speciesPath.pop();
    renderQuiz();
    return;
  }
  if(stage === 2){
    if(locale.step2.tree){
      if(classStack.length > 0){
        classNode = classStack.pop();
        classPath.pop();
        renderQuiz();
        return;
      }
      stage = 1;
      renderQuiz();
      return;
    }
    if(step2Index > 0){
      step2Index--;
      renderQuiz();
      return;
    }
    stage = 1;
    renderQuiz();
    return;
  }
  if(stage === 3){
    stage = 2;
    renderQuiz();
    return;
  }
  if(stage === 4){
    if(step3Index > 0){
      step3Index--;
      renderQuiz();
      return;
    }
    stage = 3;
    renderQuiz();
    return;
  }
});

function restartQuiz(){
  stage = 0;
  currentResult = { gender:null, height:null, species:null, class:null, subclass:null, background:null };
  speciesNode = null;
  subSpeciesNode = null;
  speciesStack.length = 0;
  speciesPath.length = 0;
  step2Index = 0;
  step2Answers = {};
  classNode = null;
  classStack.length = 0;
  classPath.length = 0;
  step3Index = 0;
  step3Answers = {};
  subQuestionSpecies = null;
  renderQuiz();
}

restartBtn.addEventListener('click', restartQuiz);
renderQuiz();
