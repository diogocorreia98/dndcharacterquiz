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
  'Geppettin (Plushie or Bisque)': {
    question: 'What kind of living toy are you?',
    options: {
      'Bisque Geppettin': 'A porcelain doll with magical elegance and vintage charm.',
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
  Eladrin: {
    question: 'Which season best reflects your nature?',
    options: {
      'Spring Eladrin': 'Your Fey Step can teleport an ally instead of you.',
      'Summer Eladrin': 'Your Fey Step burns foes around you.',
      'Autumn Eladrin': 'Your Fey Step charms nearby creatures.',
      'Winter Eladrin': 'Your Fey Step frightens a nearby enemy.'
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
  'Geppettin (Plushie or Bisque)': {
    question: 'Que tipo de brinquedo vivo és?',
    options: {
      'Bisque Geppettin': 'Boneca de porcelana com charme antigo e magia elegante.',
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
  Eladrin: {
    question: 'Que estação reflete melhor a tua natureza?',
    options: {
      'Spring Eladrin': 'O teu Passo Feérico pode teletransportar um aliado.',
      'Summer Eladrin': 'O teu Passo Feérico queima inimigos ao redor.',
      'Autumn Eladrin': 'O teu Passo Feérico encanta criaturas próximas.',
      'Winter Eladrin': 'O teu Passo Feérico provoca medo num inimigo.'
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

const subClassEN = {
  Barbarian: {
    question: 'What fuels your rage?',
    options: {
      'Path of the Berserker': 'I let loose in a frenzy, hitting harder the more I bleed.',
      'Path of the Wild Heart': 'I channel the primal power of beasts to fight like wolf, bear or eagle.',
      'Path of the World Tree': 'I draw strength from the World Tree, teleporting and healing mid-battle.',
      'Path of the Zealot': 'I blaze with divine fury, shouting radiant oaths between strikes.',
      'Path of the Muscle Wizard': 'I am the strongest wizard alive — my fists are spells and my rage is proof.'
    }
  },
  Bard: {
    question: 'What kind of performer are you?',
    options: {
      'College of Dance': 'I dance through combat with grace and power.',
      'College of Glamour': 'I enchant crowds with glamour and dazzling charm.',
      'College of Lore': 'I wield deadly knowledge and cutting words as weapons.',
      'College of Valor': 'I lead warriors with bold songs and blade in hand.'
    }
  },
  Cleric: {
    question: 'What aspect of the divine do you serve?',
    options: {
      'Life Domain': 'I heal the broken and bring light to the dying.',
      'Light Domain': 'I ignite darkness with holy flame and brilliance.',
      'Trickery Domain': 'I weave divine illusions and trick my foes into defeat.',
      'War Domain': 'I stride into battle as a warpriest of divine justice.'
    }
  },
  Druid: {
    question: 'How do you commune with nature?',
    options: {
      'Circle of the Land': 'I cast nature\u2019s spells drawn from forests, deserts or tundra.',
      'Circle of the Moon': 'I become the beasts — claws, fangs, and fury.',
      'Circle of the Storm': 'I call the tides and unleash crashing storms.',
      'Circle of Stars': 'I glow with celestial starlight and guide through constellations.'
    }
  },
  Fighter: {
    question: 'What defines your combat style?',
    options: {
      Champion: 'I rely on raw skill and score brutal critical hits.',
      'Battle Master': 'I outmaneuver my foes with tactics and precision.',
      'Eldritch Knight': 'I mix sword and spell with arcane discipline.',
      'Psi Warrior': 'I shape my strikes with psychic force.',
      'Monster Hunter': 'I survive traps, monsters and dungeons with instinct and superstition.'
    }
  },
  Monk: {
    question: 'What path shapes your martial discipline?',
    options: {
      'Way of the Open Hand': 'I master balance and knock enemies off their feet.',
      'Way of Shadow': 'I vanish in shadows and strike from silence.',
      'Way of the Four Elements': 'I wield the four elements through martial motion.',
      'Way of Mercy': 'I wear a mask, healing with one hand and punishing with the other.',
      'Way of the Arcade': 'I fight like an arcade legend — combos, uppercuts, and air dashes.'
    }
  },
  Paladin: {
    question: 'What oath have you sworn?',
    options: {
      'Oath of Devotion': 'I stand for justice, honor and protection.',
      'Oath of Glory': 'I fight with radiant glory and live to inspire.',
      'Oath of the Ancients': 'I protect joy and nature from all that threatens it.',
      'Oath of Vengeance': 'I hunt down evil with relentless vengeance.',
      'Oath of Celebration': 'I bring divine partying to every battlefield.'
    }
  },
  Ranger: {
    question: 'What kind of wilderness guide are you?',
    options: {
      'Beast Master': 'I fight beside a loyal beast companion.',
      'Fey Wanderer': 'I move with otherworldly charm from the Feywild.',
      'Gloom Stalker': 'I strike unseen from the deepest shadows.',
      Hunter: 'I adapt to every threat and dominate the terrain.'
    }
  },
  Rogue: {
    question: 'What defines your stealthy skillset?',
    options: {
      Spider: 'I web enemies and climb walls like a deadly spider.',
      'Arcane Trickster': 'I blend arcane trickery with swift hands.',
      Assassin: 'I strike before anyone knows I was there.',
      Soulknife: 'I summon blades from thought and vanish like a ghost.',
      Swashbuckler: 'I\u2019m fast, clever, and gone before the alarms sound.'
    }
  },
  Sorcerer: {
    question: 'Where does your power come from?',
    options: {
      'Aberrant Mind': 'I was touched by a mind-breaking alien force.',
      'Clockwork Soul': 'I channel the gears of reality to enforce magical order.',
      'Draconic Bloodline': 'My dragon blood burns with elemental power.',
      'Wild Magic': 'I am a walking arcane explosion — wild and unpredictable.'
    }
  },
  Warlock: {
    question: 'Who grants your arcane pact?',
    options: {
      'Archfey Patron': 'A fey trickster blessed me with mischief and magic.',
      'Celestial Patron': 'A radiant being gave me healing flame and hope.',
      'Fiend Patron': 'A devil\u2019s contract fuels me with fire and fury.',
      'Future Self': 'I\u2019m mentored by my future self — I know what comes next.',
      'Great Old One': 'I speak to an ancient god of madness that whispers truths.'
    }
  },
  Wizard: {
    question: 'What arcane school do you specialize in?',
    options: {
      Abjuration: 'I shield my allies and block the worst magic.',
      Divination: 'I twist fate and always know what\u2019s coming.',
      Evocation: 'I unleash elemental devastation like a living spell.',
      Illusion: 'I deceive, distract and dominate through illusion.'
    }
  }
};

const subClassPT = {
  Barbarian: {
    question: 'O que alimenta a tua f\u00faria?',
    options: {
      'Path of the Berserker': 'Entrego-me a uma f\u00faria desenfreada e bato mais forte quanto mais sangrar. (Path of the Berserker)',
      'Path of the Wild Heart': 'Canalizo o poder primal das feras para lutar como lobo, urso ou \u00e1guia. (Path of the Wild Heart)',
      'Path of the World Tree': 'Extraio for\u00e7a da \u00c1rvore do Mundo, teleportando-me e curando-me em plena batalha. (Path of the World Tree)',
      'Path of the Zealot': 'Ardo com f\u00faria divina, gritando juramentos radiantes entre os golpes. (Path of the Zealot)',
      'Path of the Muscle Wizard': 'Sou o feiticeiro mais forte do mundo — os meus punhos s\u00e3o feiti\u00e7os e a minha f\u00faria prova-o. (Path of the Muscle Wizard)'
    }
  },
  Bard: {
    question: 'Que tipo de artista \u00e9s?',
    options: {
      'College of Dance': 'Dan\u00e7o em combate com gra\u00e7a e poder. (College of Dance)',
      'College of Glamour': 'Encanto multid\u00f5es com glamour e charme. (College of Glamour)',
      'College of Lore': 'Uso conhecimento e palavras afiadas como armas. (College of Lore)',
      'College of Valor': 'Lidero guerreiros com can\u00e7\u00f5es ousadas e espada em punho. (College of Valor)'
    }
  },
  Cleric: {
    question: 'Que aspecto do divino serves?',
    options: {
      'Life Domain': 'Curo os feridos e levo luz aos moribundos. (Life Domain)',
      'Light Domain': 'Ateio fogo \u00e0 escurid\u00e3o com chama sagrada. (Light Domain)',
      'Trickery Domain': 'Tecelo ilus\u00f5es divinas e engano os inimigos. (Trickery Domain)',
      'War Domain': 'Marcho para a guerra como sacerdote da justi\u00e7a. (War Domain)'
    }
  },
  Druid: {
    question: 'Como comunicas com a natureza?',
    options: {
      'Circle of the Land': 'Lan\u00e7o feiti\u00e7os inspirados em florestas, desertos ou tundra. (Circle of the Land)',
      'Circle of the Moon': 'Torno-me nas feras — garras, presas e f\u00faria. (Circle of the Moon)',
      'Circle of the Storm': 'Invoco as mar\u00e9s e lan\u00e7o tempestades violentas. (Circle of the Storm)',
      'Circle of Stars': 'Brilho com luz estelar e guio pelas constela\u00e7\u00f5es. (Circle of Stars)'
    }
  },
  Fighter: {
    question: 'O que define o teu estilo de combate?',
    options: {
      Champion: 'Confio na habilidade pura e acerto golpes brutais. (Champion)',
      'Battle Master': 'Supero inimigos com t\u00e1tica e precis\u00e3o. (Battle Master)',
      'Eldritch Knight': 'Misturo espada e magia com disciplina arcana. (Eldritch Knight)',
      'Psi Warrior': 'Moldo os golpes com for\u00e7a ps\u00edquica. (Psi Warrior)',
      'Monster Hunter': 'Sobrevivo a armadilhas e monstros por instinto. (Monster Hunter)'
    }
  },
  Monk: {
    question: 'Que caminho guia a tua disciplina marcial?',
    options: {
      'Way of the Open Hand': 'Domino o equil\u00edbrio e derrubo advers\u00e1rios. (Way of the Open Hand)',
      'Way of Shadow': 'Desapare\u00e7o nas sombras e ataco do silêncio. (Way of Shadow)',
      'Way of the Four Elements': 'Control\u00f5 os quatro elementos com o movimento. (Way of the Four Elements)',
      'Way of Mercy': 'Uso uma m\u00e1scara, curando e punindo. (Way of Mercy)',
      'Way of the Arcade': 'Luto como uma lenda dos arcades — combos e uppercuts. (Way of the Arcade)'
    }
  },
  Paladin: {
    question: 'Que juramento fizeste?',
    options: {
      'Oath of Devotion': 'Defendo a justi\u00e7a, a honra e a prote\u00e7\u00e3o. (Oath of Devotion)',
      'Oath of Glory': 'Combato com gl\u00f3ria radiante e inspiro. (Oath of Glory)',
      'Oath of the Ancients': 'Protejo a alegria e a natureza de todo o mal. (Oath of the Ancients)',
      'Oath of Vengeance': 'Ca\u00e7o o mal com vingan\u00e7a implac\u00e1vel. (Oath of Vengeance)',
      'Oath of Celebration': 'Levo a festa divina a todos os campos de batalha. (Oath of Celebration)'
    }
  },
  Ranger: {
    question: 'Que tipo de guia selvagem és?',
    options: {
      'Beast Master': 'Combato ao lado de um companheiro animal fiel. (Beast Master)',
      'Fey Wanderer': 'Movo-me com charme sobrenatural do Feywild. (Fey Wanderer)',
      'Gloom Stalker': 'Ataque invis\u00edvel das sombras profundas. (Gloom Stalker)',
      Hunter: 'Adapto-me a todas as amea\u00e7as e domino o terreno. (Hunter)'
    }
  },
  Rogue: {
    question: 'O que define as tuas habilidades furtivas?',
    options: {
      Spider: 'Enredo inimigos e escalo paredes como uma aranha mortal. (Spider)',
      'Arcane Trickster': 'Misturo travessuras arcanas com m\u00e3os r\u00e1pidas. (Arcane Trickster)',
      Assassin: 'Golpeio antes que percebam a minha presen\u00e7a. (Assassin)',
      Soulknife: 'Invoco l\u00e2minas do pensamento e desvane\u00e7o-me como um fantasma. (Soulknife)',
      Swashbuckler: 'Sou r\u00e1pido, esperto e desapare\u00e7o antes do alarme soar. (Swashbuckler)'
    }
  },
  Sorcerer: {
    question: 'De onde vem o teu poder?',
    options: {
      'Aberrant Mind': 'Fui tocado por uma for\u00e7a alien\u00edgena e enlouquecedora. (Aberrant Mind)',
      'Clockwork Soul': 'Canalizo as engrenagens da realidade para impor ordem m\u00e1gica. (Clockwork Soul)',
      'Draconic Bloodline': 'O meu sangue drac\u00f3nico arde com poder elemental. (Draconic Bloodline)',
      'Wild Magic': 'Sou uma explos\u00e3o arcana ambulante — ca\u00f3tica e imprevis\u00edvel. (Wild Magic)'
    }
  },
  Warlock: {
    question: 'Quem te concedeu o pacto arcano?',
    options: {
      'Archfey Patron': 'Uma fada trapaceira aben\u00e7oou-me com magia e travessura. (Archfey Patron)',
      'Celestial Patron': 'Um ser radiante concedeu-me chamas curativas e esperan\u00e7a. (Celestial Patron)',
      'Fiend Patron': 'Um pacto demon\u00edaco alimenta-me com fogo e f\u00faria. (Fiend Patron)',
      'Future Self': 'Sou orientado pelo meu futuro eu — sei o que est\u00e1 para vir. (Future Self)',
      'Great Old One': 'Falo com um deus antigo de loucura que sussurra verdades. (Great Old One)'
    }
  },
  Wizard: {
    question: 'Em que escola arcana te especializaste?',
    options: {
      Abjuration: 'Protejo aliados e bloqueio a pior magia. (Abjuration)',
      Divination: 'Tor\u00e7o o destino e sei sempre o que est\u00e1 para acontecer. (Divination)',
      Evocation: 'Liberto devasta\u00e7\u00e3o elemental como uma magia viva. (Evocation)',
      Illusion: 'Engano, distraio e domino atrav\u00e9s de ilus\u00e3o. (Illusion)'
    }
  }
};

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
