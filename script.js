const data = {
  pt: {
    step1: {
      title: 'Guia de Criação de Personagem por Questionário',
      questions: [
        {
          text: '1. O que te parece mais épico ter como traço natural?',
          options: {
            A: 'Um brilho celestial e origem divina. (Aasimar)',
            B: 'Alento elemental e escamas de dragão. (Dragonborn)',
            C: 'Resistência física e ligação à pedra. (Dwarf)',
            D: 'Graça e sentidos élficos. (Elf)',
            E: 'Criatividade intensa em corpo pequeno. (Gnome)',
            F: 'Força de montanha e determinação. (Goliath)',
            G: 'Sorte, humildade e discrição. (Halfling)',
            H: 'Adaptabilidade e ambição ilimitada. (Human)',
            I: 'Fúria primal e presença temida. (Orc)',
            J: 'Aparência infernal e poderes sombrios. (Tiefling)',
            K: 'Voar pelos céus como um falcão. (Aarakocra)',
            L: 'Ser alto, peludo e surpreendentemente furtivo. (Bugbear)',
            M: 'Correr como um cavalo e lutar como um guerreiro. (Centaur)',
            N: 'Magia natural e alma gentil de gigante. (Firbolg)',
            O: 'Disciplina e armas de planos distantes. (Githyanki)',
            P: 'Concentração mental e serenidade psíquica. (Githzerai)',
            Q: 'Ser pequeno, sorrateiro e atrevido. (Goblin)',
            R: 'Seguir a honra e a tática como um general. (Hobgoblin)',
            S: 'Ser pequenino, dracónico e engenhoso. (Kobold)',
            T: 'Frieza emocional e sobrevivência reptiliana. (Lizardfolk)',
            U: 'Cabeça de touro e espírito de combate. (Minotaur)',
            V: 'Viver com música e riso, sempre em festa. (Satyr)',
            W: 'Movimentar-me com agilidade felina. (Tabaxi)',
            X: 'Proteger os mares com poder e nobreza. (Triton)',
            Y: 'Olhos de serpente e alma manipuladora. (Yuan-ti Pureblood)'
          }
        },
        {
          text: '2. Que tipo de história gostavas de contar com a tua personagem?',
          options: {
            A: 'Uma jornada de redenção e luz. (Aasimar)',
            B: 'Uma saga de honra e poder ancestral. (Dragonborn)',
            C: 'Tradição familiar e lealdade inabalável. (Dwarf)',
            D: 'Viagens pelo mundo e sabedoria eterna. (Elf)',
            E: 'Descoberta científica e humor inesperado. (Gnome)',
            F: 'Provar que sou mais forte que o mundo. (Goliath)',
            G: 'Aventura simples com coração grande. (Halfling)',
            H: 'Superar limites com força de vontade. (Human)',
            I: 'Encontrar aceitação num mundo que teme a força. (Orc)',
            J: 'Abraçar o meu lado obscuro para o bem. (Tiefling)',
            K: 'Explorar os céus e as fronteiras do mundo. (Aarakocra)',
            L: 'Mostrar que o inesperado pode ser mortal. (Bugbear)',
            M: 'Defender a minha tribo e correr livre. (Centaur)',
            N: 'Proteger o equilíbrio da natureza com bondade. (Firbolg)',
            O: 'Vingar a opressão e dominar a guerra planar. (Githyanki)',
            P: 'Alcançar a paz interior contra o caos do mundo. (Githzerai)',
            Q: 'Subir na vida com malícia e charme. (Goblin)',
            R: 'Liderar com estratégia e disciplina. (Hobgoblin)',
            S: 'Ajudar os outros apesar de ser subestimado. (Kobold)',
            T: 'Sobreviver com pragmatismo e calma fria. (Lizardfolk)',
            U: 'Enfrentar tudo com força e frontalidade. (Minotaur)',
            V: 'Viver cada dia como uma festa épica. (Satyr)',
            W: 'Procurar segredos e maravilhas exóticas. (Tabaxi)',
            X: 'Lutar para manter o mundo aquático seguro. (Triton)',
            Y: 'Controlar com inteligência fria e superioridade. (Yuan-ti)'
          }
        },
        {
          text: '3. Como queres que os outros te vejam?',
          options: {
            A: 'Protetor e inspirador. (Aasimar)',
            B: 'Respeitado e feroz. (Dragonborn)',
            C: 'Fiável e trabalhador. (Dwarf)',
            D: 'Elegante e misterioso. (Elf)',
            E: 'Brilhante e imprevisível. (Gnome)',
            F: 'Forte e corajoso. (Goliath)',
            G: 'Amável e leal. (Halfling)',
            H: 'Versátil e determinado. (Human)',
            I: 'Intenso e corajoso. (Orc)',
            J: 'Carismático e intrigante. (Tiefling)',
            K: 'Livre e destemido. (Aarakocra)',
            L: 'Ameaçador mas sábio. (Bugbear)',
            M: 'Honesto e selvagem. (Centaur)',
            N: 'Gentil e sereno. (Firbolg)',
            O: 'Letal e calculista. (Githyanki)',
            P: 'Tranquilo e sábio. (Githzerai)',
            Q: 'Esperto e persistente. (Goblin)',
            R: 'Estratégico e digno. (Hobgoblin)',
            S: 'Pequeno mas corajoso. (Kobold)',
            T: 'Calmo e letal. (Lizardfolk)',
            U: 'Direto e honesto. (Minotaur)',
            V: 'Charmoso e imprevisível. (Satyr)',
            W: 'Ágil e curioso. (Tabaxi)',
            X: 'Nobre e guardião. (Triton)',
            Y: 'Inteligente e manipulador. (Yuan-ti)'
          }
        }
      ],
      mapping: {
        A: 'Aasimar', B: 'Dragonborn', C: 'Dwarf', D: 'Elf', E: 'Gnome', F: 'Goliath', G: 'Halfling', H: 'Human', I: 'Orc', J: 'Tiefling',
        K: 'Aarakocra', L: 'Bugbear', M: 'Centaur', N: 'Firbolg', O: 'Githyanki', P: 'Githzerai', Q: 'Goblin', R: 'Hobgoblin', S: 'Kobold', T: 'Lizardfolk',
        U: 'Minotaur', V: 'Satyr', W: 'Tabaxi', X: 'Triton', Y: 'Yuan-ti'
      }
    },
    step2: {
      title: 'Que Classe Combina Contigo?',
      questions: [
        {
          text: '1. O que te parece mais divertido fazer numa aventura?',
          options: {
            A: 'Correr para a frente e derrotar tudo com fúria. (Barbarian)',
            B: 'Usar música, charme ou palavras para liderar ou enganar. (Bard)',
            C: 'Proteger os aliados e usar magia divina para ajudar ou castigar. (Cleric)',
            D: 'Comunicar com a natureza ou transformar-te num animal. (Druid)',
            E: 'Usar qualquer arma e adaptar-me a qualquer situação. (Fighter)',
            F: 'Lutar desarmado e com agilidade sobre-humana. (Monk)',
            G: 'Defender os inocentes com fé e força sagrada. (Paladin)',
            H: 'Ser perito em rastrear, caçar e sobreviver no desconhecido. (Ranger)',
            I: 'Mover-me nas sombras e atacar de surpresa. (Rogue)',
            J: 'Ter magia no sangue e usá-la com criatividade. (Sorcerer)',
            K: 'Fazer pactos com seres misteriosos e ganhar poder. (Warlock)',
            L: 'Estudar magia a fundo e lançar feitiços complexos. (Wizard)'
          }
        },
        {
          text: '2. Numa equipa, o teu papel ideal seria:',
          options: {
            A: 'Tanque — levar porrada e dar mais ainda. (Barbarian)',
            B: 'Apoiar e inspirar os outros. (Bard)',
            C: 'Curar, proteger e castigar os maus. (Cleric)',
            D: 'Ser um místico da natureza. (Druid)',
            E: 'Atacar, defender, adaptar — tudo bem feito. (Fighter)',
            F: 'Entrar, atacar e sair antes que me toquem. (Monk)',
            G: 'Ser o exemplo de justiça e honra. (Paladin)',
            H: 'Guiar o grupo e agir com precisão. (Ranger)',
            I: 'Desarmar armadilhas, abrir fechaduras, esgueirar-me. (Rogue)',
            J: 'Lançar feitiços caóticos e explosivos. (Sorcerer)',
            K: 'Invocar poderes sombrios ou sobrenaturais. (Warlock)',
            L: 'Planear e usar magia com estratégia. (Wizard)'
          }
        },
        {
          text: '3. Como descreverias a tua personagem ideal?',
          options: {
            A: 'Selvagem, imparável, emocional. (Barbarian)',
            B: 'Divertida, encantadora, versátil. (Bard)',
            C: 'Devota, protetora, determinada. (Cleric)',
            D: 'Calma, ligada à natureza, misteriosa. (Druid)',
            E: 'Prática, forte, honrada. (Fighter)',
            F: 'Ágil, disciplinada, serena. (Monk)',
            G: 'Justa, nobre, leal. (Paladin)',
            H: 'Reservada, precisa, experiente. (Ranger)',
            I: 'Astuta, sorrateira, destemida. (Rogue)',
            J: 'Impulsiva, poderosa, criativa. (Sorcerer)',
            K: 'Sombria, inteligente, ambiciosa. (Warlock)',
            L: 'Lógica, curiosa, estudiosa. (Wizard)'
          }
        },
        {
          text: '4. Escolhe a tua arma ou ferramenta favorita:',
          options: {
            A: 'Um machado gigante. (Barbarian)',
            B: 'Um instrumento musical mágico. (Bard)',
            C: 'Um símbolo sagrado. (Cleric)',
            D: 'Um cajado natural. (Druid)',
            E: 'Uma espada, uma lança, ou o que houver à mão. (Fighter)',
            F: 'Os meus próprios punhos e velocidade. (Monk)',
            G: 'Uma espada reluzente cheia de poder divino. (Paladin)',
            H: 'Um arco longo e olhos atentos. (Ranger)',
            I: 'Uma adaga e um conjunto de ferramentas. (Rogue)',
            J: 'Um amuleto arcano cheio de energia bruta. (Sorcerer)',
            K: 'Um tomo dado por um patrono misterioso. (Warlock)',
            L: 'Um grimório cheio de feitiços secretos. (Wizard)'
          }
        },
        {
          text: '5. Que tipo de magia/poder te atrai mais?',
          options: {
            A: 'Nenhuma — só força bruta! (Barbarian)',
            B: 'Magia ligada à emoção, à arte e ao carisma. (Bard)',
            C: 'Magia sagrada que salva e castiga. (Cleric)',
            D: 'Magia que vem da Terra, dos animais e dos elementos. (Druid)',
            E: 'Estratégia e técnica, não magia. (Fighter)',
            F: 'Magia interior que melhora corpo e mente. (Monk)',
            G: 'Magia de justiça, juramentos e fé. (Paladin)',
            H: 'Magia selvagem ou feitiços úteis da natureza. (Ranger)',
            I: 'Nada de magia — só jeito e oportunidade. (Rogue)',
            J: 'Magia inata, explosiva e imprevisível. (Sorcerer)',
            K: 'Magia de pactos, segredos e poderes estranhos. (Warlock)',
            L: 'Magia estudada com precisão e conhecimento. (Wizard)'
          }
        }
      ],
      mapping: {
        A: 'Barbarian', B: 'Bard', C: 'Cleric', D: 'Druid', E: 'Fighter', F: 'Monk', G: 'Paladin', H: 'Ranger', I: 'Rogue', J: 'Sorcerer', K: 'Warlock', L: 'Wizard'
      }
    },
    step3: step3pt,
  },
  en: {
    step1: {
      title: 'Character Creation Guide by Questionnaire',
      questions: [
        {
          text: '1. Which natural trait seems most epic to have?',
          options: {
            A: 'A celestial glow and divine origin. (Aasimar)',
            B: 'Elemental breath and dragon scales. (Dragonborn)',
            C: 'Physical endurance and a bond with stone. (Dwarf)',
            D: 'Grace and elven senses. (Elf)',
            E: 'Intense creativity in a small body. (Gnome)',
            F: 'Mountain strength and resolve. (Goliath)',
            G: 'Luck, humility and discretion. (Halfling)',
            H: 'Adaptability and limitless ambition. (Human)',
            I: 'Primal fury and a feared presence. (Orc)',
            J: 'Infernal looks and dark powers. (Tiefling)',
            K: 'Fly through the skies like a hawk. (Aarakocra)',
            L: 'Tall, furry and surprisingly stealthy. (Bugbear)',
            M: 'Run like a horse and fight like a warrior. (Centaur)',
            N: 'Natural magic and the gentle soul of a giant. (Firbolg)',
            O: 'Discipline and weapons from distant planes. (Githyanki)',
            P: 'Mental focus and psychic serenity. (Githzerai)',
            Q: 'Small, sneaky and cheeky. (Goblin)',
            R: 'Follow honor and tactics like a general. (Hobgoblin)',
            S: 'Tiny, draconic and ingenious. (Kobold)',
            T: 'Emotional coldness and reptilian survival. (Lizardfolk)',
            U: 'Bull-headed with a fighting spirit. (Minotaur)',
            V: 'Living with music and laughter, always partying. (Satyr)',
            W: 'Move with feline agility. (Tabaxi)',
            X: 'Guard the seas with power and nobility. (Triton)',
            Y: 'Serpent eyes and a manipulative soul. (Yuan-ti Pureblood)'
          }
        },
        {
          text: '2. What kind of story would you like to tell with your character?',
          options: {
            A: 'A journey of redemption and light. (Aasimar)',
            B: 'A saga of honor and ancient power. (Dragonborn)',
            C: 'Family tradition and unwavering loyalty. (Dwarf)',
            D: 'Travel the world and eternal wisdom. (Elf)',
            E: 'Scientific discovery and unexpected humor. (Gnome)',
            F: 'Proving I am stronger than the world. (Goliath)',
            G: 'Simple adventure with a big heart. (Halfling)',
            H: 'Overcoming limits with willpower. (Human)',
            I: 'Finding acceptance in a world that fears strength. (Orc)',
            J: 'Embracing my dark side for good. (Tiefling)',
            K: 'Exploring the skies and frontiers of the world. (Aarakocra)',
            L: 'Showing that the unexpected can be deadly. (Bugbear)',
            M: 'Defending my tribe and running free. (Centaur)',
            N: 'Protecting nature’s balance with kindness. (Firbolg)',
            O: 'Avenging oppression and mastering planar war. (Githyanki)',
            P: 'Reaching inner peace against the chaos of the world. (Githzerai)',
            Q: 'Rising in life with malice and charm. (Goblin)',
            R: 'Leading with strategy and discipline. (Hobgoblin)',
            S: 'Helping others despite being underestimated. (Kobold)',
            T: 'Surviving with pragmatism and cold calm. (Lizardfolk)',
            U: 'Facing everything with strength and bluntness. (Minotaur)',
            V: 'Living each day like an epic party. (Satyr)',
            W: 'Seeking secrets and exotic wonders. (Tabaxi)',
            X: 'Fighting to keep the aquatic world safe. (Triton)',
            Y: 'Controlling with cold intellect and superiority. (Yuan-ti)'
          }
        },
        {
          text: '3. How do you want others to see you?',
          options: {
            A: 'Protective and inspiring. (Aasimar)',
            B: 'Respected and fierce. (Dragonborn)',
            C: 'Reliable and hardworking. (Dwarf)',
            D: 'Elegant and mysterious. (Elf)',
            E: 'Brilliant and unpredictable. (Gnome)',
            F: 'Strong and brave. (Goliath)',
            G: 'Kind and loyal. (Halfling)',
            H: 'Versatile and determined. (Human)',
            I: 'Intense and courageous. (Orc)',
            J: 'Charismatic and intriguing. (Tiefling)',
            K: 'Free and fearless. (Aarakocra)',
            L: 'Threatening but wise. (Bugbear)',
            M: 'Honest and wild. (Centaur)',
            N: 'Gentle and serene. (Firbolg)',
            O: 'Lethal and calculating. (Githyanki)',
            P: 'Calm and wise. (Githzerai)',
            Q: 'Clever and persistent. (Goblin)',
            R: 'Strategic and dignified. (Hobgoblin)',
            S: 'Small but brave. (Kobold)',
            T: 'Calm and deadly. (Lizardfolk)',
            U: 'Direct and honest. (Minotaur)',
            V: 'Charming and unpredictable. (Satyr)',
            W: 'Agile and curious. (Tabaxi)',
            X: 'Noble and guardian. (Triton)',
            Y: 'Intelligent and manipulative. (Yuan-ti)'
          }
        }
      ],
      mapping: {
        A: 'Aasimar', B: 'Dragonborn', C: 'Dwarf', D: 'Elf', E: 'Gnome', F: 'Goliath', G: 'Halfling', H: 'Human', I: 'Orc', J: 'Tiefling', K: 'Aarakocra', L: 'Bugbear', M: 'Centaur', N: 'Firbolg', O: 'Githyanki', P: 'Githzerai', Q: 'Goblin', R: 'Hobgoblin', S: 'Kobold', T: 'Lizardfolk', U: 'Minotaur', V: 'Satyr', W: 'Tabaxi', X: 'Triton', Y: 'Yuan-ti'
      }
    },
    step2: {
      title: 'Which Class Fits You?',
      questions: [
        {
          text: '1. What seems most fun to do on an adventure?',
          options: {
            A: 'Charge ahead and defeat everything with fury. (Barbarian)',
            B: 'Use music, charm or words to lead or deceive. (Bard)',
            C: 'Protect allies and use divine magic to help or punish. (Cleric)',
            D: 'Communicate with nature or transform into an animal. (Druid)',
            E: 'Use any weapon and adapt to any situation. (Fighter)',
            F: 'Fight unarmed with supernatural agility. (Monk)',
            G: 'Defend the innocent with faith and sacred strength. (Paladin)',
            H: 'Be an expert tracker, hunter and survivor in the wild. (Ranger)',
            I: 'Move in the shadows and strike from surprise. (Rogue)',
            J: 'Have magic in my blood and use it creatively. (Sorcerer)',
            K: 'Make pacts with mysterious beings and gain power. (Warlock)',
            L: 'Study magic deeply and cast complex spells. (Wizard)'
          }
        },
        {
          text: '2. In a team, your ideal role would be:',
          options: {
            A: 'Tank — take hits and give more back. (Barbarian)',
            B: 'Support and inspire others. (Bard)',
            C: 'Heal, protect and smite evil. (Cleric)',
            D: 'Be a nature mystic. (Druid)',
            E: 'Attack, defend, adapt — all done well. (Fighter)',
            F: 'Get in, strike and leave before they touch me. (Monk)',
            G: 'Be the example of justice and honor. (Paladin)',
            H: 'Guide the group and act with precision. (Ranger)',
            I: 'Disarm traps, pick locks, sneak. (Rogue)',
            J: 'Cast chaotic and explosive spells. (Sorcerer)',
            K: 'Invoke dark or supernatural powers. (Warlock)',
            L: 'Plan and use magic strategically. (Wizard)'
          }
        },
        {
          text: '3. How would you describe your ideal character?',
          options: {
            A: 'Wild, unstoppable, emotional. (Barbarian)',
            B: 'Fun, charming, versatile. (Bard)',
            C: 'Devout, protective, determined. (Cleric)',
            D: 'Calm, attuned to nature, mysterious. (Druid)',
            E: 'Practical, strong, honorable. (Fighter)',
            F: 'Agile, disciplined, serene. (Monk)',
            G: 'Just, noble, loyal. (Paladin)',
            H: 'Reserved, precise, experienced. (Ranger)',
            I: 'Cunning, stealthy, fearless. (Rogue)',
            J: 'Impulsive, powerful, creative. (Sorcerer)',
            K: 'Dark, intelligent, ambitious. (Warlock)',
            L: 'Logical, curious, studious. (Wizard)'
          }
        },
        {
          text: '4. Choose your favorite weapon or tool:',
          options: {
            A: 'A giant axe. (Barbarian)',
            B: 'A magical musical instrument. (Bard)',
            C: 'A sacred symbol. (Cleric)',
            D: 'A natural staff. (Druid)',
            E: 'A sword, a spear, or whatever is handy. (Fighter)',
            F: 'My own fists and speed. (Monk)',
            G: 'A gleaming sword full of divine power. (Paladin)',
            H: 'A longbow and sharp eyes. (Ranger)',
            I: 'A dagger and a tool kit. (Rogue)',
            J: 'An arcane amulet full of raw energy. (Sorcerer)',
            K: 'A tome given by a mysterious patron. (Warlock)',
            L: 'A grimoire full of secret spells. (Wizard)'
          }
        },
        {
          text: '5. What kind of magic/power attracts you the most?',
          options: {
            A: 'None — just brute strength! (Barbarian)',
            B: 'Magic tied to emotion, art and charisma. (Bard)',
            C: 'Sacred magic that heals and punishes. (Cleric)',
            D: 'Magic from the Earth, animals and elements. (Druid)',
            E: 'Strategy and technique, not magic. (Fighter)',
            F: 'Inner magic that improves body and mind. (Monk)',
            G: 'Magic of justice, oaths and faith. (Paladin)',
            H: 'Wild magic or useful nature spells. (Ranger)',
            I: 'No magic — just skill and opportunity. (Rogue)',
            J: 'Innate, explosive and unpredictable magic. (Sorcerer)',
            K: 'Magic of pacts, secrets and strange powers. (Warlock)',
            L: 'Magic studied with precision and knowledge. (Wizard)'
          }
        }
      ],
      mapping: {
        A: 'Barbarian', B: 'Bard', C: 'Cleric', D: 'Druid', E: 'Fighter', F: 'Monk', G: 'Paladin', H: 'Ranger', I: 'Rogue', J: 'Sorcerer', K: 'Warlock', L: 'Wizard'
      }
    },
    step3: {
      title: 'Which Background Fits Your Class?',
      placeholder: 'Step 3 questions omitted for brevity. Implement similarly to steps 1 and 2.'
    }
  }
};

const langSelect = document.getElementById('lang');
const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const backBtn = document.getElementById('back');
const restartBtn = document.getElementById('restart');
let currentLang = 'pt';

let stage = 1;
let currentResult = {};

function renderQuiz() {
  const locale = data[currentLang];
  quizDiv.innerHTML = '';
  let html = '';
  if(stage === 1){
    const step = locale.step1;
    html += `<h2>${step.title}</h2>`;
    step.questions.forEach((q, qi) => {
      html += `<section><p>${q.text}</p>`;
      for (const key in q.options) {
        const id = `s1q${qi}_${key}`;
        html += `<label><input type="radio" name="s1q${qi}" value="${key}" id="${id}"> ${q.options[key]}</label>`;
      }
      html += '</section>';
    });
    submitBtn.textContent = currentLang === 'pt' ? 'Avançar' : 'Next';
  } else if(stage === 2){
    const step = locale.step2;
    html += `<h2>${step.title}</h2>`;
    step.questions.forEach((q, qi) => {
      html += `<section><p>${q.text}</p>`;
      for (const key in q.options) {
        const id = `s2q${qi}_${key}`;
        html += `<label><input type="radio" name="s2q${qi}" value="${key}" id="${id}"> ${q.options[key]}</label>`;
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
        html += `<label><input type="radio" name="s3q${qi}" value="${key}" id="${id}"> ${q.options[key]}</label>`;
      }
      html += '</section>';
    });
    submitBtn.textContent = currentLang === 'pt' ? 'Concluir' : 'Finish';
  }
  quizDiv.innerHTML = html;
  submitBtn.style.display = 'block';
  backBtn.style.display = stage > 1 ? 'inline-block' : 'none';
  backBtn.textContent = currentLang === 'pt' ? 'Recuar' : 'Back';
  restartBtn.textContent = currentLang === 'pt' ? 'Recomeçar' : 'Restart';
}

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  stage = 1;
  currentResult = {};
  renderQuiz();
});

function calculateSpecies(){
  const locale = data[currentLang];
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
  if(stage === 1){
    currentResult.species = calculateSpecies();
    stage = 2;
    renderQuiz();
    return;
  }
  if(stage === 2){
    currentResult.class = calculateClass();
    if(currentResult.class === 'N/A'){
      const background = 'N/A';
      sessionStorage.setItem('dndResults', JSON.stringify({species:currentResult.species, class:currentResult.class, background, images:[], lang:currentLang}));
      window.location.href = 'results.html';
      return;
    }
    stage = 3;
    renderQuiz();
    return;
  }
  if(stage === 3){
    const background = calculateBackground(currentResult.class);
    let images = [];
    const apiKey = window.OPENAI_API_KEY;
    if(apiKey){
      const promptBase = `${currentResult.species} ${currentResult.class}`;
      const malePrompt = `fantasy illustration of a male ${promptBase}`;
      const femalePrompt = `fantasy illustration of a female ${promptBase}`;
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        };
        const body = JSON.stringify({model:'dall-e-3', prompt:malePrompt, n:1, size:'512x512'});
        const res1 = await fetch('https://api.openai.com/v1/images/generations',{method:'POST',headers,body});
        const img1 = (await res1.json()).data[0].url;
        const body2 = JSON.stringify({model:'dall-e-3', prompt:femalePrompt, n:1, size:'512x512'});
        const res2 = await fetch('https://api.openai.com/v1/images/generations',{method:'POST',headers,body:body2});
        const img2 = (await res2.json()).data[0].url;
        images = [img1,img2];
      } catch(err){
        console.error(err);
      }
    }
    sessionStorage.setItem('dndResults', JSON.stringify({species:currentResult.species, class:currentResult.class, background, images, lang:currentLang}));
    window.location.href = 'results.html';
  }
});

backBtn.addEventListener('click', () => {
  if(stage > 1){
    stage--;
    renderQuiz();
  }
});

restartBtn.addEventListener('click', () => {
  stage = 1;
  currentResult = {};
  renderQuiz();
});
renderQuiz();
