const langSelect = document.getElementById('lang');
const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');
const restartBtn = document.getElementById('restart');
const titleEl = document.querySelector('h1');
const languageLabel = document.querySelector('#language-select label');
let currentLang = 'pt';

function updateStaticText(){
  document.title = miscText[currentLang].quizTitle;
  titleEl.textContent = miscText[currentLang].quizTitle;
  languageLabel.textContent = miscText[currentLang].language;
}

let stage = 1;
let currentResult = {};
let speciesNode = null;
const speciesStack = [];
let step2Index = 0;
let step2Answers = {};
let step3Index = 0;
let step3Answers = {};

function renderQuiz() {
  const locale = data[currentLang];
  const strip = txt => txt.replace(/\s*\([^)]*\)\s*$/, '');
  updateStaticText();
  quizDiv.innerHTML = '';
  let html = '';
  if(stage === 1){
    const step = locale.step1;
    html += `<h2>${step.title}</h2>`;
    if(step.tree){
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
    submitBtn.textContent = currentLang === 'pt' ? 'Avançar' : 'Next';
  } else if(stage === 2){
    const step = locale.step2;
    const q = step.questions[step2Index];
    html += `<h2>${step.title}</h2>`;
    html += `<section><p>${q.text}</p>`;
    for (const key in q.options) {
      const id = `s2q${step2Index}_${key}`;
      const checked = step2Answers[step2Index] === key ? ' checked' : '';
      html += `<label><input type="radio" name="s2q${step2Index}" value="${key}" id="${id}"${checked}> ${strip(q.options[key])}</label>`;
    }
    html += '</section>';
    submitBtn.textContent = step2Index === step.questions.length - 1 ? (currentLang === 'pt' ? 'Avançar' : 'Next') : (currentLang === 'pt' ? 'Avançar' : 'Next');
  } else if(stage === 3){
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
  submitBtn.style.display = 'block';
  backBtn.style.display = stage > 1 ? 'block' : 'none';
  backBtn.textContent = currentLang === 'pt' ? 'Recuar' : 'Back';
  restartBtn.textContent = labels[currentLang].restart;
}

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  stage = 1;
  currentResult = {};
  speciesNode = null;
  speciesStack.length = 0;
  step2Index = 0;
  step2Answers = {};
  step3Index = 0;
  step3Answers = {};
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
  if(stage === 1){
    if(locale.step1.tree){
      const val = document.querySelector('input[name="s1"]:checked');
      if(!val) return;
      const choice = speciesNode.options[val.value];
      if(choice.next){
        speciesStack.push(speciesNode);
        speciesNode = choice.next;
        renderQuiz();
        return;
      }
      if(choice.result){
        currentResult.species = choice.result;
        speciesNode = null;
        speciesStack.length = 0;
        step2Index = 0;
        step2Answers = {};
        step3Index = 0;
        step3Answers = {};
        stage = 2;
        renderQuiz();
        return;
      }
      return;
    }
    currentResult.species = calculateSpecies();
    step2Index = 0;
    step2Answers = {};
    step3Index = 0;
    step3Answers = {};
    stage = 2;
    renderQuiz();
    return;
  }
  if(stage === 2){
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
        sessionStorage.setItem('dndResults', JSON.stringify({species:currentResult.species, class:currentResult.class, background, lang:currentLang}));
        window.location.href = 'results.html';
      } else {
        restartQuiz();
      }
      return;
    }
    step2Index = 0;
    stage = 3;
    renderQuiz();
    return;
  }
  if(stage === 3){
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
    sessionStorage.setItem('dndResults', JSON.stringify({species:currentResult.species, class:currentResult.class, background, lang:currentLang}));
    window.location.href = 'results.html';
  }
});

backBtn.addEventListener('click', () => {
  if(stage === 1 && speciesStack.length > 0){
    speciesNode = speciesStack.pop();
    renderQuiz();
    return;
  }
  if(stage === 2){
    if(step2Index > 0){
      step2Index--;
      renderQuiz();
      return;
    }
    stage = 1;
    speciesNode = data[currentLang].step1.tree;
    speciesStack.length = 0;
    renderQuiz();
    return;
  }
  if(stage === 3){
    if(step3Index > 0){
      step3Index--;
      renderQuiz();
      return;
    }
    stage = 2;
    step2Index = data[currentLang].step2.questions.length - 1;
    renderQuiz();
    return;
  }
});

function restartQuiz(){
  stage = 1;
  currentResult = {};
  speciesNode = null;
  speciesStack.length = 0;
  step2Index = 0;
  step2Answers = {};
  step3Index = 0;
  step3Answers = {};
  renderQuiz();
}

restartBtn.addEventListener('click', restartQuiz);
renderQuiz();
