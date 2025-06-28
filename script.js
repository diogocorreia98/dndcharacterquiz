const langSelect = document.getElementById('lang');
const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');
const restartBtn = document.getElementById('restart');
const titleEl = document.querySelector('h1');
const languageLabel = document.querySelector('#language-select label');
let currentLang = 'pt';

const MAX_OPTIONS = 3;

function splitQuestion(question){
  const keys = Object.keys(question.options);
  if(keys.length <= MAX_OPTIONS) return [question];
  const parts = [];
  for(let i=0;i<keys.length;i+=MAX_OPTIONS){
    const slice = keys.slice(i, i+MAX_OPTIONS);
    const opts = {};
    slice.forEach(k=>opts[k] = question.options[k]);
    parts.push({text: question.text, options: opts});
  }
  return parts;
}

function preprocessStep(step){
  const questions = [];
  step.questions.forEach(q=>questions.push(...splitQuestion(q)));
  return {...step, questions};
}

function preprocessStep3(step){
  const classes = {};
  for(const c in step.classes){
    const cls = step.classes[c];
    const questions = [];
    cls.questions.forEach(q=>questions.push(...splitQuestion(q)));
    classes[c] = {...cls, questions};
  }
  return {...step, classes};
}

function preprocessData(base){
  const result = {};
  for(const lang in base){
    const langData = base[lang];
    const step1 = preprocessStep(langData.step1);
    const step2 = preprocessStep(langData.step2);
    const step3 = preprocessStep3(langData.step3);
    result[lang] = {...langData, step1, step2, step3};
  }
  return result;
}

const processedData = preprocessData(data);

function updateStaticText(){
  document.title = miscText[currentLang].quizTitle;
  titleEl.textContent = miscText[currentLang].quizTitle;
  languageLabel.textContent = miscText[currentLang].language;
}

let stage = 1;
let questionIndex = 0;
let answers = {1:[],2:[],3:[]};
let currentResult = {};

function getStepData(){
  const locale = processedData[currentLang];
  if(stage === 1) return locale.step1;
  if(stage === 2) return locale.step2;
  const cls = currentResult.class;
  return locale.step3.classes[cls] || {questions:[]};
}

function renderQuiz(){
  const locale = processedData[currentLang];
  updateStaticText();
  quizDiv.innerHTML = '';
  const step = getStepData();
  let html = `<h2>${step.title}</h2>`;
  if(stage===3) html += `<p>${locale.step3.intro}</p>`;
  const q = step.questions[questionIndex];
  html += `<section><p>${q.text}</p>`;
  for(const key in q.options){
    const name = `s${stage}q${questionIndex}`;
    const id = `${name}_${key}`;
    const cleaned = q.options[key].replace(/\s*\([^\)]*\)\s*$/, '');
    const checked = answers[stage][questionIndex] === key ? 'checked' : '';
    html += `<label><input type="radio" name="${name}" value="${key}" id="${id}" ${checked}> ${cleaned}</label>`;
  }
  html += '</section>';
  quizDiv.innerHTML = html;

  const questions = step.questions;
  const isLast = questionIndex === questions.length - 1;
  submitBtn.textContent = stage === 3 && isLast
    ? (currentLang === 'pt' ? 'Concluir' : 'Finish')
    : (currentLang === 'pt' ? 'Avançar' : 'Next');
  submitBtn.style.display = 'block';
  backBtn.style.display = stage === 1 && questionIndex === 0 ? 'none' : 'block';
  backBtn.textContent = currentLang === 'pt' ? 'Recuar' : 'Back';
  restartBtn.textContent = labels[currentLang].restart;
}

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  stage = 1;
  questionIndex = 0;
  answers = {1:[],2:[],3:[]};
  currentResult = {};
  updateStaticText();
  renderQuiz();
});

function calculateSpecies(ans){
  const locale = processedData[currentLang];
  const scores = {};
  ans.forEach(v=>{ if(v){ scores[v] = (scores[v]||0)+1; } });
  const species = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  return species ? locale.step1.mapping[species[0]] : 'N/A';
}

function calculateClass(ans){
  const locale = processedData[currentLang];
  const scores = {};
  ans.forEach(v=>{ if(v){ scores[v] = (scores[v]||0)+1; } });
  const clazz = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  return clazz ? locale.step2.mapping[clazz[0]] : 'N/A';
}

function calculateBackground(clazz, ans){
  const step3 = processedData[currentLang].step3.classes[clazz];
  if(!step3) return 'N/A';
  const scores = {};
  ans.forEach(v=>{ if(v){ scores[v] = (scores[v]||0)+1; } });
  const res = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
  return res ? step3.mapping[res[0]] : 'N/A';
}

submitBtn.addEventListener('click', () => {
  const name = `s${stage}q${questionIndex}`;
  const valEl = document.querySelector(`input[name="${name}"]:checked`);
  if(valEl){
    answers[stage][questionIndex] = valEl.value;
  } else {
    return;
  }
  const step = getStepData();
  if(questionIndex < step.questions.length - 1){
    questionIndex++;
    renderQuiz();
    return;
  }

  if(stage === 1){
    currentResult.species = calculateSpecies(answers[1]);
    stage = 2;
    questionIndex = 0;
    renderQuiz();
    return;
  }
  if(stage === 2){
    currentResult.class = calculateClass(answers[2]);
    if(currentResult.class === 'N/A'){
      const msg = currentLang === 'pt'
        ? 'Nenhuma classe escolhida. Sem uma classe n\u00e3o \u00e9 poss\u00edvel determinar um background. Queres terminar o question\u00e1rio mesmo assim? Carrega em Cancelar para recome\u00e7ar.'
        : 'No class selected. Without a class it is not possible to determine a background. Would you like to finish the quiz anyway? Press Cancel to restart.';
      if(confirm(msg)){
        const background = 'N/A';
        sessionStorage.setItem('dndResults', JSON.stringify({species:currentResult.species, class:currentResult.class, background, lang:currentLang}));
        window.location.href = 'results.html';
      } else {
        restartQuiz();
      }
      return;
    }
    stage = 3;
    questionIndex = 0;
    answers[3] = [];
    renderQuiz();
    return;
  }
  if(stage === 3){
    const background = calculateBackground(currentResult.class, answers[3]);
    sessionStorage.setItem('dndResults', JSON.stringify({species:currentResult.species, class:currentResult.class, background, lang:currentLang}));
    window.location.href = 'results.html';
  }
});

backBtn.addEventListener('click', () => {
  if(questionIndex > 0){
    questionIndex--;
    renderQuiz();
    return;
  }
  if(stage > 1){
    stage--;
    const step = getStepData();
    questionIndex = step.questions.length - 1;
    renderQuiz();
  }
});

function restartQuiz(){
  stage = 1;
  questionIndex = 0;
  answers = {1:[],2:[],3:[]};
  currentResult = {};
  renderQuiz();
}

restartBtn.addEventListener('click', restartQuiz);
renderQuiz();
