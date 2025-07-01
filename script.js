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
    html += `<h2>${step.title}</h2>`;
    step.questions.forEach((q, qi) => {
      html += `<section><p>${q.text}</p>`;
      for (const key in q.options) {
        const id = `s2q${qi}_${key}`;
        html += `<label><input type="radio" name="s2q${qi}" value="${key}" id="${id}"> ${strip(q.options[key])}</label>`;
      }
      html += '</section>';
    });
    submitBtn.textContent = currentLang === 'pt' ? 'Avançar' : 'Next';
  } else if(stage === 3){
    const step = locale.step3;
    const classData = step.classes[currentResult.class];
    html += `<h2>${step.title}</h2><p>${step.intro}</p>`;
    classData.questions.forEach((q, qi) => {
      html += `<section><p>${q.text}</p>`;
      for(const key in q.options){
        const id = `s3q${qi}_${key}`;
        html += `<label><input type="radio" name="s3q${qi}" value="${key}" id="${id}"> ${strip(q.options[key])}</label>`;
      }
      html += '</section>';
    });
    submitBtn.textContent = currentLang === 'pt' ? 'Concluir' : 'Finish';
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
  locale.step2.questions.forEach((q, qi) => {
    const val = document.querySelector(`input[name="s2q${qi}"]:checked`);
    if(val){
      classScores[val.value] = (classScores[val.value] || 0) + 1;
    }
  });
  const clazz = Object.entries(classScores).sort((a,b)=>b[1]-a[1])[0];
  return clazz ? locale.step2.mapping[clazz[0]] : 'N/A';
}

function calculateBackground(clazz){
  const step3 = data[currentLang].step3.classes[clazz];
  if(!step3) return 'N/A';
  const scores = {};
  step3.questions.forEach((q, qi)=>{
    const val = document.querySelector(`input[name="s3q${qi}"]:checked`);
    if(val){
      scores[val.value] = (scores[val.value] || 0) + 1;
    }
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
        stage = 2;
        renderQuiz();
        return;
      }
      return;
    }
    currentResult.species = calculateSpecies();
    stage = 2;
    renderQuiz();
    return;
  }
  if(stage === 2){
    currentResult.class = calculateClass();
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
    renderQuiz();
    return;
  }
  if(stage === 3){
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
  if(stage > 1){
    stage--;
    if(stage === 1){
      speciesNode = data[currentLang].step1.tree;
      speciesStack.length = 0;
    }
    renderQuiz();
  }
});

function restartQuiz(){
  stage = 1;
  currentResult = {};
  speciesNode = null;
  speciesStack.length = 0;
  renderQuiz();
}

restartBtn.addEventListener('click', restartQuiz);
renderQuiz();
