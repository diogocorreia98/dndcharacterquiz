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

const subQuestionsEN = {
  Elf: {
    question: 'What kind of elf are you?',
    options: {
      'High Elf': 'Elegant and refined, with a natural gift for arcane magic.',
      'Wood Elf': 'Stealthy and swift, blending easily into natural environments.',
      'Drow Elf': 'Dark-skinned and silver-haired, with keen senses and innate magic from the Underdark.'
    }
  },
  Genasi: {
    question: 'Which element flows through your body?',
    options: {
      'Air Genasi': 'Light-footed and fast, with wind ever at your back.',
      'Earth Genasi': 'Stone-skinned and solid, steady even in rough terrain.',
      'Fire Genasi': 'Glowing and warm, with a fiery aura and searing touch.',
      'Water Genasi': 'Flowing and fluid, able to breathe underwater and swim with ease.'
    }
  },
  Geppettin: {
    question: 'What kind of living toy are you?',
    options: {
      'Bisque Geppettin': 'A porcelain doll with magical elegance and vintage charm.',
      'Marionette Geppettin': 'A lanky wooden puppet with nimble limbs and flexible joints.',
      'Plushie Geppettin': 'A soft and cuddly stuffed toy with surprising resilience.'
    }
  },
  Gnome: {
    question: 'What type of gnome are you?',
    options: {
      'Forest Gnome': 'Connected to nature and animals, with illusions and empathy.',
      'Rock Gnome': 'Tinkering inventor who crafts tiny mechanical gadgets for fun or utility.'
    }
  },
  Goliath: {
    question: 'What kind of giant blood flows through you?',
    options: {
      'Hill Goliath': 'Broad and brutal, shoving enemies aside with pure power.',
      'Stone Goliath': 'Solid as a rock, resisting damage with stoic might.',
      'Frost Goliath': 'Cold and unyielding, numbing foes with chilling strength.',
      'Fire Goliath': 'Radiating heat and striking with burning fury.',
      'Cloud Goliath': 'Graceful and elusive, moving like mist and evading harm.',
      'Storm Goliath': 'Crackling with energy, calling thunder and lightning to your side.'
    }
  },
  Mandrake: {
    question: 'What season were you harvested in?',
    options: {
      'Spring Mandrake': 'Your vines gently bring flying foes to the ground.',
      'Summer Mandrake': 'You reposition enemies with powerful, directed vines.',
      'Autumn Mandrake': 'You entangle more than one creature in a single burst.',
      'Winter Mandrake': 'Your vines deal a blast of chilling damage.'
    }
  },
  Shifter: {
    question: 'What animalistic trait emerges when you shift?',
    options: {
      'Beasthide Shifter': 'Tough and sturdy, shrugging off blows with a beast\u2019s hide.',
      'Longtooth Shifter': 'Ferocious and wild, tearing into foes with elongated fangs.',
      'Swiftstride Shifter': 'Fast and reactive, darting around opponents like a wildcat.',
      'Wildhunt Shifter': 'Instinctive and alert, never surprised and always tracking.'
    }
  },
  Tiefling: {
    question: 'What kind of fiendish ancestry do you bear?',
    options: {
      'Abyssal Tiefling': 'Chaotic and explosive, born of demons and destruction.',
      'Infernal Tiefling': 'Ordered and ruthless, touched by the flames of Hell.',
      'Chthonic Tiefling': 'Eerie and necrotic, rooted in death and shadowy power.'
    }
  },
  Dragonborn: {
    question: 'Which type of dragon is your ancestor?',
    options: {
      'Black Dragonborn': 'Tough and acidic, exhaling streams of burning acid.',
      'Blue Dragonborn': 'Proud and fierce, breathing blasts of lightning.',
      'Brass Dragonborn': 'Talkative and fiery, using fire breath with charm.',
      'Bronze Dragonborn': 'Loyal and noble, breathing controlled lightning.',
      'Copper Dragonborn': 'Trickster and agile, breathing acidic spray.',
      'Gold Dragonborn': 'Wise and regal, releasing mighty fire blasts.',
      'Green Dragonborn': 'Cunning and dangerous, exhaling poison.',
      'Red Dragonborn': 'Bold and aggressive, with the fiercest fire breath.',
      'Silver Dragonborn': 'Kind and strong, breathing cold to slow enemies.',
      'White Dragonborn': 'Savage and primal, exhaling icy frost at foes.'
    }
  }
};

const subQuestionsPT = {
  Elf: {
    question: 'Que tipo de elfo és?',
    options: {
      'High Elf': 'Elegante e refinado, com talento natural para magia arcana.',
      'Wood Elf': 'Discreto e ágil, move-se facilmente pelos ambientes naturais.',
      'Drow Elf': 'Pele escura e cabelo prateado, com sentidos aguçados e magia inata do Subterrâneo.'
    }
  },
  Genasi: {
    question: 'Que elemento corre no teu corpo?',
    options: {
      'Air Genasi': 'Ligeiro e rápido, com o vento sempre a favor.',
      'Earth Genasi': 'Pele de pedra e firmeza, resiste mesmo em terreno difícil.',
      'Fire Genasi': 'Brilhante e quente, com aura ardente e toque abrasador.',
      'Water Genasi': 'Fluido e flexível, respira debaixo de água e nada com facilidade.'
    }
  },
  Geppettin: {
    question: 'Que tipo de brinquedo vivo és?',
    options: {
      'Bisque Geppettin': 'Boneca de porcelana com charme antigo e magia elegante.',
      'Marionette Geppettin': 'Marioneta esguia de madeira com membros flexíveis.',
      'Plushie Geppettin': 'Boneco de peluche fofinho e surpreendentemente resistente.'
    }
  },
  Gnome: {
    question: 'Que tipo de gnomo és?',
    options: {
      'Forest Gnome': 'Ligado à natureza e animais, com ilusões e empatia.',
      'Rock Gnome': 'Inventor engenhocas que cria pequenas máquinas divertidas ou úteis.'
    }
  },
  Goliath: {
    question: 'Que sangue de gigante corre em ti?',
    options: {
      'Hill Goliath': 'Largo e bruto, empurrando inimigos com pura força.',
      'Stone Goliath': 'Sólido como rocha, resiste a dano com vigor estoico.',
      'Frost Goliath': 'Frio e inflexível, entorpece inimigos com força gélida.',
      'Fire Goliath': 'Radiante de calor, ataca com fúria ardente.',
      'Cloud Goliath': 'Gracioso e evasivo, move-se como névoa e evita dano.',
      'Storm Goliath': 'Carregado de energia, invoca trovões e relâmpagos a seu lado.'
    }
  },
  Mandrake: {
    question: 'Em que estação foste colhido?',
    options: {
      'Spring Mandrake': 'As tuas vinhas fazem cair inimigos voadores com suavidade.',
      'Summer Mandrake': 'Reposicionas inimigos com vinhas poderosas e diretas.',
      'Autumn Mandrake': 'Prendes mais de uma criatura numa única explosão.',
      'Winter Mandrake': 'As tuas vinhas lançam uma rajada de dano gelado.'
    }
  },
  Shifter: {
    question: 'Que traço animal surge quando te transformas?',
    options: {
      'Beasthide Shifter': 'Robusto e resistente, ignorando golpes com pele bestial.',
      'Longtooth Shifter': 'Feroz e selvagem, rasga inimigos com presas alongadas.',
      'Swiftstride Shifter': 'Rápido e reativo, contorna adversários como um felino.',
      'Wildhunt Shifter': 'Instintivo e atento, nunca surpreendido e sempre em perseguição.'
    }
  },
  Tiefling: {
    question: 'Que tipo de ascendência demoníaca carregas?',
    options: {
      'Abyssal Tiefling': 'Caótico e explosivo, descendente de demónios e destruição.',
      'Infernal Tiefling': 'Ordenado e impiedoso, tocado pelas chamas do Inferno.',
      'Chthonic Tiefling': 'Sombrio e necromântico, ligado à morte e ao poder das sombras.'
    }
  },
  Dragonborn: {
    question: 'De que tipo de dragão descendes?',
    options: {
      'Black Dragonborn': 'Resistente e ácido, exala jatos de ácido ardente.',
      'Blue Dragonborn': 'Orgulhoso e feroz, lança rajadas de relâmpago.',
      'Brass Dragonborn': 'Falador e fogoso, usa sopro de fogo com charme.',
      'Bronze Dragonborn': 'Leal e nobre, exala relâmpagos controlados.',
      'Copper Dragonborn': 'Brincalhão e ágil, cospe spray ácido.',
      'Gold Dragonborn': 'Sábio e régio, liberta potentes rajadas de fogo.',
      'Green Dragonborn': 'Astuto e perigoso, exala veneno.',
      'Red Dragonborn': 'Ousado e agressivo, com o fogo mais intenso.',
      'Silver Dragonborn': 'Bondoso e forte, exala frio para abrandar inimigos.',
      'White Dragonborn': 'Selvagem e primitivo, solta gelo gélido sobre os inimigos.'
    }
  }
};

const subSpeciesQuestions = { en: subQuestionsEN, pt: subQuestionsPT };

function updateStaticText(){
  document.title = miscText[currentLang].quizTitle;
  titleEl.textContent = miscText[currentLang].quizTitle;
  languageLabel.textContent = miscText[currentLang].language;
}

let stage = 0;
let currentResult = {};
let speciesNode = null;
const speciesStack = [];
let subSpeciesNode = null;
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
  window.scrollTo(0,0);
  submitBtn.style.display = 'block';
  backBtn.style.display = stage > 0 || speciesStack.length > 0 || subSpeciesNode ? 'block' : 'none';
  backBtn.textContent = currentLang === 'pt' ? 'Recuar' : 'Back';
  restartBtn.textContent = labels[currentLang].restart;
}

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  stage = 0;
  currentResult = {};
  speciesNode = null;
  subSpeciesNode = null;
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
        const sub = subSpeciesQuestions[currentLang][choice.result];
        if(sub){
          subSpeciesNode = sub;
          speciesNode = null;
          speciesStack.length = 0;
          renderQuiz();
          return;
        }
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
    const sub = subSpeciesQuestions[currentLang][currentResult.species];
    if(sub){
      subSpeciesNode = sub;
      speciesNode = null;
      speciesStack.length = 0;
      stage = 1;
      renderQuiz();
      return;
    }
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
  if(stage === 1 && subSpeciesNode){
    subSpeciesNode = null;
    speciesNode = data[currentLang].step1.tree;
    speciesStack.length = 0;
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
  stage = 0;
  currentResult = {};
  speciesNode = null;
  subSpeciesNode = null;
  speciesStack.length = 0;
  step2Index = 0;
  step2Answers = {};
  step3Index = 0;
  step3Answers = {};
  renderQuiz();
}

restartBtn.addEventListener('click', restartQuiz);
renderQuiz();
