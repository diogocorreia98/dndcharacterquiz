const labels = {
    pt: { Species:'Espécie', Class:'Classe', Background:'Antecedente', restart:'Recomeçar' },
    en: { Species:'Species', Class:'Class', Background:'Background', restart:'Restart Quiz' }
  };

const miscText = {
  pt: {
    noResults: 'Sem resultados disponíveis.',
    seeMore: 'Ver mais',
    language: 'Idioma:',
    quizTitle: 'Questionário de Personagem de D&D',
    resultsTitle: 'Resultados do Questionário'
  },
  en: {
    noResults: 'No results available.',
    seeMore: 'See more',
    language: 'Language:',
    quizTitle: 'D&D Character Quiz',
    resultsTitle: 'Quiz Results'
  }
};

const data = {
  pt: {
    step1: {
      title: 'Que espécie gostarias de jogar?',
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
      title: 'Which species would you like to play as?',
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

const step3pt = {
  title: 'Que Background Combina com a Tua Classe?',
  intro: 'Depois de saberes a tua classe, usa o questionário correspondente para descobrir o background ideal. Ser-te-ão apresentados apenas backgrounds compatíveis com os atributos principais da tua classe.',
  classes: {
    Barbarian: {
      questions: [
        {
          text: '1. Como descreves a tua infância ou juventude?',
          options: {
            A: 'Trabalhava com ferramentas e construía coisas úteis (Artisan)',
            B: 'Animava os outros com música, dança ou histórias (Entertainer)',
            C: 'Cresci a trabalhar no campo, em contacto com a natureza (Farmer)',
            D: 'Era responsável por proteger pessoas ou locais (Guard)',
            E: 'Vivi rodeado de luxo, com educação e influência (Noble)',
            F: 'Passei muito tempo no mar, talvez em navios ou portos (Sailor)',
            G: 'Fui treinado para lutar, talvez como parte de um exército (Soldier)'
          }
        },
        {
          text: '2. O que é mais importante para ti numa aventura?',
          options: {
            A: 'Resolver problemas com engenho e habilidade manual (Artisan)',
            B: 'Ser admirado e expressar-me com criatividade (Entertainer)',
            C: 'Proteger a terra e os que nela vivem (Farmer)',
            D: 'Manter a ordem e proteger os outros (Guard)',
            E: 'Honrar o meu nome e mostrar liderança (Noble)',
            F: 'Descobrir novos horizontes e enfrentar tempestades (Sailor)',
            G: 'Combater lado a lado com os meus companheiros (Soldier)'
          }
        },
        {
          text: '3. Como lidas com conflito físico?',
          options: {
            A: 'Uso ferramentas ou truques para virar o jogo (Artisan)',
            B: 'Tento evitar, mas quando preciso, sou dramático! (Entertainer)',
            C: 'Defendo-me com força bruta, como aprendi a trabalhar duro (Farmer)',
            D: 'Estou habituado a lutar para proteger outros (Guard)',
            E: 'Espero que outros o façam por mim… ou pago para isso (Noble)',
            F: 'Uso a minha experiência em terreno irregular ou molhado (Sailor)',
            G: 'Estou sempre pronto para o combate — é o que faço melhor (Soldier)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes construir e reparar armas, armaduras e ferramentas. Poupas dinheiro e és engenhoso. (Artisan)',
            B: 'Sabes tocar instrumentos e usá-los para animar, acalmar ou inspirar os outros. (Entertainer)',
            C: 'Tens mais energia e resistência que o normal. Aguentas mais pancada que os outros. (Farmer)',
            D: 'Estás sempre atento ao que te rodeia. É muito difícil seres apanhado de surpresa. (Guard)',
            E: 'Consegues fazer discursos que animam os teus aliados e lhes dão coragem extra. (Noble)',
            F: 'Nadas bem, sabes navegar e aguentas muito tempo debaixo de água. (Sailor)',
            G: 'Quando atacas, consegues dar golpes especialmente violentos que causam mais dano. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Bard: {
      questions: [
        {
          text: '1. O que mais te fascina no mundo?',
          options: {
            A: 'O poder da fé e do conhecimento sagrado (Acolyte)',
            B: 'A emoção de enganar e manipular (Charlatan)',
            C: 'A alegria de entreter multidões (Entertainer)',
            D: 'O autoconhecimento e o retiro espiritual (Hermit)',
            E: 'A arte de negociar e acumular riqueza (Merchant)',
            F: 'O prestígio e a etiqueta da nobreza (Noble)',
            G: 'Viajar, explorar e descobrir novas culturas (Wayfarer)'
          }
        },
        {
          text: '2. Como preferes influenciar os outros?',
          options: {
            A: 'Com palavras inspiradas e ensinamentos (Acolyte)',
            B: 'Com charme e mentiras convincentes (Charlatan)',
            C: 'Através da música ou atuação (Entertainer)',
            D: 'Pela introspeção e sabedoria silenciosa (Hermit)',
            E: 'Com persuasão e trato comercial (Merchant)',
            F: 'Pela autoridade e tradição familiar (Noble)',
            G: 'Através de histórias do mundo e experiências vividas (Wayfarer)'
          }
        },
        {
          text: '3. Qual frase mais te define?',
          options: {
            A: 'A fé move montanhas. (Acolyte)',
            B: 'Consigo convencer qualquer um. (Charlatan)',
            C: 'A vida é um palco, e eu sou o centro. (Entertainer)',
            D: 'Encontrei a verdade no silêncio. (Hermit)',
            E: 'Tudo tem um preço justo. (Merchant)',
            F: 'A honra da minha família é tudo. (Noble)',
            G: 'Cada caminho é uma canção diferente. (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens facilidade em curar os outros e usar poderes ligados à fé e inspiração. (Acolyte)',
            B: 'Consegues mentir com convicção e fazer truques rápidos com as mãos. (Charlatan)',
            C: 'Tens talento natural para cativar multidões com música ou atuação. (Entertainer)',
            D: 'És resistente a magias que tentam invadir a tua mente. A tua alma é protegida. (Hermit)',
            E: 'Sabes negociar como ninguém e tens olho para encontrar itens raros ou valiosos. (Merchant)',
            F: 'Consegues liderar com palavras e presença. A tua autoridade inspira respeito. (Noble)',
            G: 'És bom a sobreviver em viagens, sabes orientar-te e falar línguas diferentes. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Cleric: {
      questions: [
        {
          text: '1. Onde nasceu a tua ligação ao sagrado?',
          options: {
            A: 'Numa instituição religiosa onde foste educado (Acolyte)',
            B: 'No isolamento, em reflexão pessoal (Hermit)',
            C: 'No meio rural, em contacto com a terra (Farmer)',
            D: 'Ao proteger locais ou pessoas sagradas (Guard)',
            E: 'Em jornadas e encontros espirituais (Guide)',
            F: 'Ao estudar a natureza do divino (Sage)',
            G: 'Em alto-mar, entre preces e tormentas (Sailor)',
            H: 'Ao copiar escrituras e textos sagrados (Scribe)',
            I: 'Em longas viagens por culturas diversas (Wayfarer)'
          }
        },
        {
          text: '2. Como preferes partilhar a tua fé?',
          options: {
            A: 'Com rituais e celebrações (Acolyte)',
            B: 'Aconselhando em silêncio (Hermit)',
            C: 'Pelo exemplo simples e prático (Farmer)',
            D: 'Com proteção e firmeza (Guard)',
            E: 'Contando o que viste nas tuas viagens (Guide)',
            F: 'Com palavras estudadas e conhecimento (Sage)',
            G: 'Com cânticos nas horas de trabalho (Sailor)',
            H: 'Com registos e manuscritos (Scribe)',
            I: 'Com sabedoria recolhida de outros povos (Wayfarer)'
          }
        },
        {
          text: '3. Qual destas situações descreve-te melhor?',
          options: {
            A: 'Cuidar de um templo (Acolyte)',
            B: 'Viver sozinho por escolha (Hermit)',
            C: 'Ajudar na colheita de uma aldeia (Farmer)',
            D: 'Defender fiéis de um ataque (Guard)',
            E: 'Acompanhar peregrinos (Guide)',
            F: 'Debater filosofia espiritual (Sage)',
            G: 'Rezar durante uma tempestade (Sailor)',
            H: 'Copiar pergaminhos antigos (Scribe)',
            I: 'Rezar em muitos idiomas diferentes (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens prática em curar, proteger aliados e expulsar criaturas das trevas. (Acolyte)',
            B: 'És muito resistente e tens uma reserva extra de energia vital. (Farmer)',
            C: 'Estás sempre em guarda. É difícil que alguém te apanhe desprevenido. (Guard)',
            D: 'Sabes orientar-te em terrenos difíceis e proteger quem viaja contigo. (Guide)',
            E: 'Tens uma proteção espiritual que te defende de influências mágicas externas. (Hermit)',
            F: 'Sabes lançar pequenos feitiços extra e aprender mais magias sagradas que o normal. (Sage)',
            G: 'És resistente, sabes nadar bem e mexer-te em barcos com facilidade. (Sailor)',
            H: 'Aprendes feitiços rapidamente e consegues copiá-los com precisão. (Scribe)',
            I: 'És versátil, sabes reagir bem a novas culturas e ambientes desconhecidos. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Hermit',C:'Farmer',D:'Guard',E:'Guide',F:'Sage',G:'Sailor',H:'Scribe',I:'Wayfarer'}
    },
    Druid: {
      questions: [
        {
          text: '1. Onde te sentes mais em paz?',
          options: {
            A: 'Na oficina, a moldar a natureza com as mãos (Artisan)',
            B: 'No campo, a cuidar da terra (Farmer)',
            C: 'Em trilhos por explorar, no meio da floresta (Guide)',
            D: 'Em silêncio, longe do mundo (Hermit)',
            E: 'Entre livros antigos e sabedoria ancestral (Sage)',
            F: 'A estudar mapas e registos antigos (Scribe)',
            G: 'Em viagens sem destino, movido pela curiosidade (Wayfarer)'
          }
        },
        {
          text: '2. Que tipo de sabedoria valorizas mais?',
          options: {
            A: 'Prática e artesanal (Artisan)',
            B: 'Intuitiva e natural (Farmer)',
            C: 'De sobrevivência e observação (Guide)',
            D: 'Interior e espiritual (Hermit)',
            E: 'Científica e natural (Sage)',
            F: 'Documentada e registrada (Scribe)',
            G: 'Empírica e multicultural (Wayfarer)'
          }
        },
        {
          text: '3. O que mais te define?',
          options: {
            A: 'Criação (Artisan)',
            B: 'Cultivo (Farmer)',
            C: 'Exploração (Guide)',
            D: 'Meditação (Hermit)',
            E: 'Pesquisa (Sage)',
            F: 'Documentação (Scribe)',
            G: 'Aventura (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes construir ferramentas e objetos úteis com recursos naturais. (Artisan)',
            B: 'Tens muita resistência e uma ligação prática com a terra e a vida. (Farmer)',
            C: 'És excelente a orientar-te na natureza e guiar outros por trilhos difíceis. (Guide)',
            D: 'Tens uma paz interior que te protege contra magias que afetam a mente. (Hermit)',
            E: 'Consegues aprender magias naturais adicionais graças ao teu estudo. (Sage)',
            F: 'Sabes copiar magias e registar conhecimento mágico com facilidade. (Scribe)',
            G: 'Adaptas-te bem a ambientes diferentes e aprendes com o mundo à tua volta. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Farmer',C:'Guide',D:'Hermit',E:'Sage',F:'Scribe',G:'Wayfarer'}
    },
    Fighter: {
      questions: [
        {
          text: '1. Qual foi a tua formação inicial?',
          options: {
            A: 'Trabalhei com ferramentas e engenho (Artisan)',
            B: 'Aprendi a cativar plateias com talento (Entertainer)',
            C: 'Cresci a trabalhar duro na terra (Farmer)',
            D: 'Fui treinado para proteger (Guard)',
            E: 'Recebi educação de elite (Noble)',
            F: 'Naveguei mares turbulentos (Sailor)',
            G: 'Fui moldado por vida militar (Soldier)'
          }
        },
        {
          text: '2. Como vêem a tua disciplina?',
          options: {
            A: 'Cauteloso e prático (Artisan)',
            B: 'Inovador e expressivo (Entertainer)',
            C: 'Resistente e resiliente (Farmer)',
            D: 'Vigilante e direto (Guard)',
            E: 'Orgulhoso e estratega (Noble)',
            F: 'Corajoso e adaptável (Sailor)',
            G: 'Determinado e obediente (Soldier)'
          }
        },
        {
          text: '3. Que tipo de combate preferes?',
          options: {
            A: 'Com improviso e ferramentas (Artisan)',
            B: 'Com dramatismo (Entertainer)',
            C: 'Força bruta (Farmer)',
            D: 'Defesa e tática (Guard)',
            E: 'Liderança e exemplo (Noble)',
            F: 'Rápido e flexível (Sailor)',
            G: 'Organizado e implacável (Soldier)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'És prático e sabes improvisar com ferramentas e armas feitas por ti. (Artisan)',
            B: 'Gostas de impressionar com estilo — até no combate. (Entertainer)',
            C: 'Tens um físico resistente graças ao trabalho duro. Aguentas muito. (Farmer)',
            D: 'Estás sempre atento e pronto para reagir a ameaças. (Guard)',
            E: 'A tua presença inspira liderança e respeito entre aliados. (Noble)',
            F: 'Tens equilíbrio, força e sabes movimentar-te bem em navios e molhados. (Sailor)',
            G: 'Sabes onde atacar para causar o maior dano possível em combate corpo-a-corpo. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Monk: {
      questions: [
        {
          text: '1. O que te guia?',
          options: {
            A: 'Uma causa religiosa ou espiritual (Acolyte)',
            B: 'A perfeição do artesanato (Artisan)',
            C: 'O dever de proteger (Guard)',
            D: 'A busca de paz interior (Hermit)',
            E: 'O legado da família (Noble)',
            F: 'O saber acumulado (Sage)',
            G: 'O registo do mundo (Scribe)'
          }
        },
        {
          text: '2. Como treinaste?',
          options: {
            A: 'Numa ordem religiosa (Acolyte)',
            B: 'A trabalhar com as mãos (Artisan)',
            C: 'Num treino de vigilância (Guard)',
            D: 'Em isolamento (Hermit)',
            E: 'Sob tutela de mestres nobres (Noble)',
            F: 'Em bibliotecas e academias (Sage)',
            G: 'Como aprendiz de escriba (Scribe)'
          }
        },
        {
          text: '3. O que melhor descreve a tua abordagem?',
          options: {
            A: 'Disciplina espiritual (Acolyte)',
            B: 'Foco técnico (Artisan)',
            C: 'Defesa ativa (Guard)',
            D: 'Introspecção (Hermit)',
            E: 'Dever e tradição (Noble)',
            F: 'Conhecimento profundo (Sage)',
            G: 'Registo e preservação (Scribe)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens poder espiritual que ajuda a resistir à magia e focar o teu interior. (Acolyte)',
            B: 'És disciplinado e sabes trabalhar com ferramentas e materiais diversos. (Artisan)',
            C: 'Reages rapidamente e não és facilmente surpreendido. (Guard)',
            D: 'A tua alma está centrada e protegida contra influências mentais. (Hermit)',
            E: 'Agues com honra e presença firme. Os outros seguem o teu exemplo. (Noble)',
            F: 'Aprendes rapidamente técnicas novas e tens boa memória. (Sage)',
            G: 'Sabes estudar e registar movimentos, planos ou técnicas detalhadamente. (Scribe)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Artisan',C:'Guard',D:'Hermit',E:'Noble',F:'Sage',G:'Scribe'}
    },
    Paladin: {
      questions: [
        {
          text: '1. O que te ensinou o sentido de justiça?',
          options: {
            A: 'Construir algo útil para outros (Artisan)',
            B: 'Ver o impacto das emoções nos outros (Entertainer)',
            C: 'Viver em comunidade e depender da terra (Farmer)',
            D: 'Proteger inocentes todos os dias (Guard)',
            E: 'Ser educado com valores de honra (Noble)',
            F: 'Salvar companheiros no mar (Sailor)',
            G: 'Combater o mal como soldado (Soldier)'
          }
        },
        {
          text: '2. Como juraste proteger os outros?',
          options: {
            A: 'Ajudando a construir um mundo melhor (Artisan)',
            B: 'Inspirando coragem com histórias e canções (Entertainer)',
            C: 'Cuidando dos teus vizinhos (Farmer)',
            D: 'Fazendo parte da guarda de uma cidade (Guard)',
            E: 'Através de um juramento solene perante a tua ordem (Noble)',
            F: 'Servindo num navio de patrulha (Sailor)',
            G: 'Em formação, com espada em mão (Soldier)'
          }
        },
        {
          text: '3. Que causa juraste defender?',
          options: {
            A: 'O bem comum e a estabilidade (Artisan)',
            B: 'A alegria e a esperança (Entertainer)',
            C: 'A sobrevivência e a colheita (Farmer)',
            D: 'A ordem e a lei (Guard)',
            E: 'Os valores da tua linhagem (Noble)',
            F: 'A liberdade e a coragem (Sailor)',
            G: 'A paz através da guerra justa (Soldier)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Trabalhas com dedicação e crias coisas úteis para servir os outros. (Artisan)',
            B: 'Inspiras os outros com as tuas palavras ou presença marcante. (Entertainer)',
            C: 'És forte, leal e aguentas muito fisicamente. (Farmer)',
            D: 'És sempre vigilante e pronto para defender os inocentes. (Guard)',
            E: 'Tens uma aura de liderança natural e valores nobres. (Noble)',
            F: 'És resistente e habituado a lidar com condições difíceis. (Sailor)',
            G: 'Lutas com disciplina e sabes golpear com força extra quando é preciso. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Ranger: {
      questions: [
        {
          text: '1. Que terras exploraste no passado?',
          options: {
            A: 'Regiões onde trabalhaste com as mãos (Artisan)',
            B: 'Cidades onde enganas e persuades (Charlatan)',
            C: 'Bairros perigosos onde sobreviver é um desafio (Criminal)',
            D: 'Regiões onde animaste e encantaste (Entertainer)',
            E: 'Florestas, montanhas e trilhos (Guide)',
            F: 'Costas e arquipélagos (Sailor)',
            G: 'Arquivos e bibliotecas de mapas (Scribe)',
            H: 'Campos de batalha em várias terras (Soldier)',
            I: 'Mundos desconhecidos e culturas longínquas (Wayfarer)'
          }
        },
        {
          text: '2. O que te tornou resiliente?',
          options: {
            A: 'Aprender um ofício (Artisan)',
            B: 'Manipular para sobreviver (Charlatan)',
            C: 'Fugir da lei (Criminal)',
            D: 'Conviver com multidões (Entertainer)',
            E: 'Enfrentar a natureza (Guide)',
            F: 'Desafiar o mar (Sailor)',
            G: 'Pesquisar e aprender com registos antigos (Scribe)',
            H: 'Treino militar (Soldier)',
            I: 'Experiências em diversas culturas (Wayfarer)'
          }
        },
        {
          text: '3. Qual o teu objetivo nas viagens solitárias?',
          options: {
            A: 'Ajudar quem encontrares com prática (Artisan)',
            B: 'Aproveitar cada oportunidade (Charlatan)',
            C: 'Fugir do passado (Criminal)',
            D: 'Levar arte a todos os cantos (Entertainer)',
            E: 'Ajudar os perdidos a encontrar caminho (Guide)',
            F: 'Defender marinheiros e povo costeiro (Sailor)',
            G: 'Registar e estudar o mundo (Scribe)',
            H: 'Levar paz com competência militar (Soldier)',
            I: 'Descobrir e aprender com tudo (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes fazer armadilhas, armas simples e reparar o que usas na natureza. (Artisan)',
            B: 'És convincente, rápido a improvisar e consegues enganar com facilidade. (Charlatan)',
            C: 'És furtivo, calculista e habituado a fugir de problemas. (Criminal)',
            D: 'Usas a criatividade até nas aventuras e gostas de cativar outros. (Entertainer)',
            E: 'Sabes explorar terrenos difíceis e sobreviver em qualquer lugar. (Guide)',
            F: 'Consegues nadar bem, equilibrar-te em superfícies instáveis e navegar. (Sailor)',
            G: 'Tens boa memória e estudaste mapas e estratégias. (Scribe)',
            H: 'Combinas treino militar com habilidades práticas de sobrevivência. (Soldier)',
            I: 'Adaptas-te rapidamente a novas terras, povos e desafios. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Charlatan',C:'Criminal',D:'Entertainer',E:'Guide',F:'Sailor',G:'Scribe',H:'Soldier',I:'Wayfarer'}
    },
    Rogue: {
      questions: [
        {
          text: '1. Como aprendeste a ser furtivo?',
          options: {
            A: 'A esconder ferramentas e truques (Artisan)',
            B: 'A enganar para conseguir o que queres (Charlatan)',
            C: 'Nas ruas e becos da cidade (Criminal)',
            D: 'A fugir do palco em momentos dramáticos (Entertainer)',
            E: 'Ao emboscar nas matas (Guide)',
            F: 'A evitar piratas e contrabandistas (Sailor)',
            G: 'A observar sem ser notado (Scribe)',
            H: 'Em missões táticas (Soldier)',
            I: 'Durante viagens perigosas (Wayfarer)'
          }
        },
        {
          text: '2. Qual era o teu truque favorito na rua?',
          options: {
            A: 'Ferramentas ocultas (Artisan)',
            B: 'Ilusionismo verbal (Charlatan)',
            C: 'Mãos leves (Criminal)',
            D: 'Encantar com espectáculos (Entertainer)',
            E: 'Caçar com armadilhas (Guide)',
            F: 'Esconder contrabando (Sailor)',
            G: 'Memorizar tudo à volta (Scribe)',
            H: 'Sabotar estruturas (Soldier)',
            I: 'Misturar-me entre culturas (Wayfarer)'
          }
        },
        {
          text: '3. Por que escolheste o caminho do risco?',
          options: {
            A: 'Para testar engenho (Artisan)',
            B: 'Pela emoção da manipulação (Charlatan)',
            C: 'Por necessidade (Criminal)',
            D: 'Pela adrenalina da atuação (Entertainer)',
            E: 'Para proteger viajantes (Guide)',
            F: 'Para ganhar liberdade (Sailor)',
            G: 'Para registar tudo secretamente (Scribe)',
            H: 'Para servir numa guerra clandestina (Soldier)',
            I: 'Para encontrar algo perdido (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes esconder ferramentas, improvisar e criar itens engenhosos. (Artisan)',
            B: 'Tens lábia e mãos rápidas — sabes enganar e roubar sem ser notado. (Charlatan)',
            C: 'Sabes mexer-te nas sombras, abrir fechaduras e desaparecer. (Criminal)',
            D: 'Usas o teu charme e dramatismo para manipular ou distrair. (Entertainer)',
            E: 'Conheces trilhos escondidos e sabes montar emboscadas eficazes. (Guide)',
            F: 'Sabes fugir e manobrar até nas piores situações. Adaptas-te bem. (Sailor)',
            G: 'Tens atenção aos detalhes e memória visual excelente. (Scribe)',
            H: 'Sabes atacar de forma rápida e letal — com precisão militar. (Soldier)',
            I: 'Tens experiência com diversas culturas e consegues passar despercebido. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Charlatan',C:'Criminal',D:'Entertainer',E:'Guide',F:'Sailor',G:'Scribe',H:'Soldier',I:'Wayfarer'}
    },
    Sorcerer: {
      questions: [
        {
          text: '1. Quando descobriste o teu poder interior?',
          options: {
            A: 'Durante um ritual religioso (Acolyte)',
            B: 'Quando enganaste alguém com um "truque" que era magia (Charlatan)',
            C: 'No palco, quando algo explodiu (Entertainer)',
            D: 'Em isolamento, por acidente (Hermit)',
            E: 'Ao fechar um negócio arriscado (Merchant)',
            F: 'Desde criança, como herança de sangue nobre (Noble)',
            G: 'Durante uma viagem por uma terra estranha (Wayfarer)'
          }
        },
        {
          text: '2. Como lidaram os outros com a tua magia?',
          options: {
            A: 'Com respeito e veneração (Acolyte)',
            B: 'Com suspeita (Charlatan)',
            C: 'Com aplausos (Entertainer)',
            D: 'Com medo (Hermit)',
            E: 'Como uma vantagem competitiva (Merchant)',
            F: 'Como uma bênção esperada (Noble)',
            G: 'Com fascínio e mistério (Wayfarer)'
          }
        },
        {
          text: '3. O que procuras fazer com o teu dom?',
          options: {
            A: 'Servir o bem maior (Acolyte)',
            B: 'Obter vantagem (Charlatan)',
            C: 'Impressionar e emocionar (Entertainer)',
            D: 'Descobrir a verdade dentro de mim (Hermit)',
            E: 'Crescer em influência (Merchant)',
            F: 'Honrar o nome da família (Noble)',
            G: 'Descobrir os limites do mundo (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens ligação a poderes sagrados e consegues curar ou proteger com magia. (Acolyte)',
            B: 'Usas a tua magia com truques e palavras bem escolhidas para enganar. (Charlatan)',
            C: 'A tua magia vem com estilo e emoção. Impressionas multidões. (Entertainer)',
            D: 'A tua magia é protegida por um espírito interior que te guia. (Hermit)',
            E: 'Sabes aproveitar a magia para ganhar vantagem e fazer trocas eficazes. (Merchant)',
            F: 'A tua presença mágica impõe respeito. És naturalmente influente. (Noble)',
            G: 'A tua magia adapta-se a tudo — culturas, perigos e locais diferentes. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Warlock: {
      questions: [
        {
          text: '1. Como conheceste o teu patrono?',
          options: {
            A: 'A rezar no altar do templo (Acolyte)',
            B: 'Ao enganar alguém e sentir uma presença estranha (Charlatan)',
            C: 'Em pleno palco, no auge da atuação (Entertainer)',
            D: 'Durante anos de solidão e introspecção (Hermit)',
            E: 'Ao tentar obter poder e riqueza (Merchant)',
            F: 'Por herança ou profecia ancestral (Noble)',
            G: 'Ao vaguear por planos desconhecidos (Wayfarer)'
          }
        },
        {
          text: '2. Que promessa fizeste em troca de poder?',
          options: {
            A: 'Servir como missionário do patrono (Acolyte)',
            B: 'Convencer outros a fazerem pactos (Charlatan)',
            C: 'Difundir o nome do patrono com atuações (Entertainer)',
            D: 'Manter o segredo e obedecer (Hermit)',
            E: 'Usar os dons para lucro (Merchant)',
            F: 'Expandir a influência do patrono na corte (Noble)',
            G: 'Descobrir os limites da magia (Wayfarer)'
          }
        },
        {
          text: '3. O que desejas conquistar?',
          options: {
            A: 'Um mundo mais justo (Acolyte)',
            B: 'Poder absoluto (Charlatan)',
            C: 'Fama eterna (Entertainer)',
            D: 'Conhecimento proibido (Hermit)',
            E: 'Fortuna e estatuto (Merchant)',
            F: 'Glória e reconhecimento (Noble)',
            G: 'Sabedoria sem fronteiras (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Usas o poder que recebeste com devoção quase religiosa. (Acolyte)',
            B: 'Consegues convencer outros a seguir o teu caminho mágico com charme e astúcia. (Charlatan)',
            C: 'Usas a magia do teu patrono de forma cativante e dramática. (Entertainer)',
            D: 'A tua ligação mágica nasceu na solidão e dá-te resistência mental. (Hermit)',
            E: 'Negocias favores e magias como quem troca mercadorias valiosas. (Merchant)',
            F: 'A tua presença imponente reforça o poder do teu patrono. (Noble)',
            G: 'Exploras os limites do teu pacto mágico com curiosidade e coragem. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Wizard: {
      questions: [
        {
          text: '1. Como entraste no mundo da magia?',
          options: {
            A: 'Pela religião e rituais (Acolyte)',
            B: 'A fabricar e estudar artefatos (Artisan)',
            C: 'Por necessidade e esperteza (Criminal)',
            D: 'A vigiar e proteger algo arcano (Guard)',
            E: 'Por interesse em relíquias valiosas (Merchant)',
            F: 'Pelo acesso a educação privilegiada (Noble)',
            G: 'Pela sede de conhecimento (Sage)',
            H: 'A copiar textos e feitiços (Scribe)'
          }
        },
        {
          text: '2. O que mais te motiva a aprender?',
          options: {
            A: 'A devoção (Acolyte)',
            B: 'A prática (Artisan)',
            C: 'A sobrevivência (Criminal)',
            D: 'A responsabilidade (Guard)',
            E: 'A ambição (Merchant)',
            F: 'A herança (Noble)',
            G: 'A curiosidade (Sage)',
            H: 'A documentação (Scribe)'
          }
        },
        {
          text: '3. Onde está o teu habitat natural?',
          options: {
            A: 'Mosteiro ou templo (Acolyte)',
            B: 'Oficina arcana (Artisan)',
            C: 'Submundo urbano (Criminal)',
            D: 'Quartel ou torre de vigia (Guard)',
            E: 'Feira ou mercado (Merchant)',
            F: 'Salões de estudo (Noble)',
            G: 'Biblioteca (Sage)',
            H: 'Sala de arquivos (Scribe)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Começaste com magia sagrada e isso deu-te uma base sólida. (Acolyte)',
            B: 'És bom a criar objetos mágicos ou ferramentas arcanas úteis. (Artisan)',
            C: 'Usas a magia com astúcia para sobreviver e obter vantagem. (Criminal)',
            D: 'Estás atento e proteges os teus segredos com disciplina. (Guard)',
            E: 'Sabes usar magia para obter lucro ou fazer trocas vantajosas. (Merchant)',
            F: 'A tua educação deu-te acesso a magias raras e poderosas. (Noble)',
            G: 'Aprendes e dominas magias com mais facilidade que os outros. (Sage)',
            H: 'Consegues copiar, registar e alterar magias com precisão única. (Scribe)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Artisan',C:'Criminal',D:'Guard',E:'Merchant',F:'Noble',G:'Sage',H:'Scribe'}
    }
  }
};

  const speciesInfo = {
    pt: {
      'Aasimar':'Com aparência divina e traços luminosos, os Aasimar são vistos como enviados dos céus. Conseguem curar com um toque e, em momentos de necessidade, libertam o seu verdadeiro poder celestial, ganhando asas ou uma aura poderosa para proteger ou destruir.',
      'Dragonborn':'Parecem dragões antropomórficos, com escamas coloridas e uma presença imponente. Conseguem cuspir energia mágica (como fogo ou gelo) sobre os inimigos e são naturalmente resistentes a esse mesmo tipo de energia.',
      'Dwarf':'Baixos e resistentes, os anões são conhecidos pela sua robustez. Aguentam bem venenos, veem claramente no escuro e são muito difíceis de derrubar. São trabalhadores incansáveis, tanto no campo como na guerra.',
      'Elf':'Elegantes e atentos, os elfos têm sentidos apurados e conseguem ver no escuro. Não precisam de dormir como os outros — bastam poucas horas de meditação. São também resistentes a magias que tentam manipular emoções.',
      'Gnome':'Pequenos e curiosos, os gnomos são espertos e resistentes a truques mentais. Alguns falam com animais, outros inventam pequenos objetos mágicos. São criativos e têm uma mente afiada.',
      'Goliath':'Altos como pequenos gigantes, os goliaths têm força e resistência impressionantes. Conseguem suportar mais dano do que o normal e usar poderes que lembram os seus antepassados gigantes.',
      'Halfling':'Pequeninos e simpáticos, os halflings são incrivelmente sortudos. Costumam escapar de situações perigosas e são difíceis de apanhar. São companheiros leais e discretos.',
      'Human':'Versáteis e determinados, os humanos adaptam-se facilmente a qualquer papel. Começam com um talento especial que os ajuda a destacar-se cedo nas aventuras.',
      'Orc':'Fortes e impulsivos, os orcs continuam de pé mesmo quando deviam cair. Conseguem lançar-se com força sobre os inimigos e recuperam rapidamente em combate. São guerreiros naturais.',
      'Tiefling':'Com aparência infernal, os tieflings têm um lado mágico ligado a demónios ou diabos. São resistentes a certas magias e podem usar poderes sombrios para enganar ou ferir.',
      'Aarakocra':'Com asas de pássaro, os aarakocra podem voar desde o início. São rápidos, ágeis e têm grande vantagem em terrenos abertos ou para explorar lugares altos.',
      'Bugbear':'Altos e peludos, os bugbears movem-se com uma furtividade surpreendente. São fortes, atacam à distância com os braços longos e adoram emboscadas.',
      'Centaur':'Metade humano, metade cavalo, o centauro é rápido e poderoso. Corre e luta com facilidade, e a sua ligação à natureza torna-o um excelente explorador.',
      'Changeling':'De aparência mutável, os changelings conseguem mudar de rosto e corpo à vontade. São ideais para disfarces, espionagem ou para jogar várias "personagens" numa só.',
      'Firbolg':'Gentis e altos, os firbolgs ligam-se profundamente à natureza. Sabem esconder-se facilmente, comunicar com animais e plantas, e usar magia para se protegerem ou ajudarem os outros.',
      'Githyanki':'Guerreiros de outros planos.',
      'Githzerai':'Monges que controlam a mente.',
      'Goblin':'Pequenos, espertos e rápidos, os goblins são difíceis de agarrar e costumam recuperar força quando derrotam inimigos. Escapam de perigos com facilidade e são ótimos sobreviventes.',
      'Hobgoblin':'Com ar de soldados disciplinados, os hobgoblins são estratégicos e cooperativos. Ajudam os aliados com eficácia e mantêm a ordem mesmo no meio do caos.',
      'Kobold':'Frágeis mas engenhosos, os kobolds são valentes quando em grupo. Surpreendem os inimigos com truques e podem inspirar os colegas com gritos de coragem.',
      'Lizardfolk':'Parecidos com lagartos humanoides, são calmos, práticos e duros de roer. Sabem construir com o que têm à mão e sobrevivem bem em ambientes difíceis.',
      'Minotaur':'Fortes e imponentes, os minotauros atacam com violência e resistem a quedas. Carregam sobre os inimigos como verdadeiros touros e são bons rastreadores.',
      'Satyr':'Festeiros e encantadores, os satyrs dançam e tocam música como parte da sua magia. São difíceis de manipular, rápidos nos saltos e ótimos em socializar.',
      'Tabaxi':'Felinos ágeis e curiosos, os tabaxi movem-se rapidamente e conseguem escalar com facilidade. Estão sempre em busca de coisas novas e adoram explorar.',
      'Triton':'Seres aquáticos nobres, os tritons vivem bem debaixo de água. Sabem nadar com mestria, comunicar com criaturas marinhas e controlar pequenos efeitos mágicos ligados ao mar.',
      'Yuan-ti':'Com traços de serpente, os yuan-ti são frios e manipuladores. Imunes a venenos e difíceis de influenciar, usam magia para controlar os outros ou causar medo.'
    },
    en: {
      'Aasimar':'With divine appearance and radiant traits, Aasimar are seen as heaven-sent. They can heal with a touch and, when needed, unleash true celestial power, gaining wings or a powerful aura to protect or destroy.',
      'Dragonborn':'Anthropomorphic dragons with colorful scales and an imposing presence. They can breathe magical energy, such as fire or ice, and are naturally resistant to that same element.',
      'Dwarf':'Short and sturdy, dwarves are known for their resilience. They resist poison, see clearly in the dark and are hard to knock down. Tireless workers both in the field and at war.',
      'Elf':'Graceful and alert, elves have keen senses and darkvision. They need only a few hours of meditation instead of sleep and resist magic that manipulates emotions.',
      'Gnome':'Small and curious, gnomes are clever and resistant to mental tricks. Some talk to animals while others invent little magical objects. Creative and sharp-minded.',
      'Goliath':'Tall like small giants, goliaths boast impressive strength and endurance. They withstand more damage than usual and wield powers reminiscent of their giant ancestry.',
      'Halfling':'Tiny and friendly, halflings are incredibly lucky. They often escape danger and are hard to catch, remaining loyal and discreet companions.',
      'Human':'Versatile and determined, humans adapt easily to any role. They begin with a special feat that helps them shine early in adventures.',
      'Orc':'Strong and impulsive, orcs stay standing even when they should fall. They can charge foes with force and recover quickly in battle. Natural warriors.',
      'Tiefling':'With infernal looks, tieflings have a magical side linked to demons or devils. They resist certain spells and can use dark powers to deceive or harm.',
      'Aarakocra':'With birdlike wings, aarakocra can fly from the start. Fast and agile, they excel in open areas or exploring high places.',
      'Bugbear':'Tall and furry, bugbears move with surprising stealth. Strong and long-armed, they love ambushes.',
      'Centaur':'Half human, half horse, centaurs are swift and powerful. They run and fight with ease and their bond with nature makes them great scouts.',
      'Changeling':'With mutable features, changelings can alter face and body at will. Perfect for disguises, espionage or playing many “characters” in one.',
      'Firbolg':'Gentle and tall, firbolgs connect deeply with nature. They hide with ease, speak with animals and plants and use magic to protect or aid others.',
      'Githyanki':'Warriors from other planes.',
      'Githzerai':'Monks who master the mind.',
      'Goblin':'Small, clever and quick, goblins are hard to catch and regain strength when they defeat foes. Great survivors who escape danger easily.',
      'Hobgoblin':'Disciplined soldier-like folk, hobgoblins are strategic and cooperative, helping allies effectively and keeping order amid chaos.',
      'Kobold':'Fragile but ingenious, kobolds are brave in numbers. They surprise foes with tricks and can rally comrades with shouts of courage.',
      'Lizardfolk':'Resembling humanoid lizards, they are calm, practical and tough. They craft with whatever is at hand and thrive in harsh environments.',
      'Minotaur':'Strong and imposing, minotaurs strike violently and resist falling. They charge like true bulls and are skilled trackers.',
      'Satyr':'Festive and charming, satyrs dance and play music as part of their magic. Hard to manipulate, quick on their feet and sociable.',
      'Tabaxi':'Feline and curious, tabaxi move swiftly and can climb with ease. Always seeking new things, they love to explore.',
      'Triton':'Noble aquatic beings who thrive underwater. They swim expertly, communicate with sea creatures and wield minor magic tied to the ocean.',
      'Yuan-ti':'With serpent traits, yuan-ti are cold and manipulative. Immune to poison and hard to influence, they use magic to control others or instill fear.'
    }
  };

  const classInfo = {
    pt: {
      'Barbarian':'O Barbarian é a força bruta da natureza. Combate com fúria selvagem, ignorando a dor e libertando ataques devastadores. Quando entra em Rage, torna-se mais difícil de ferir e mais poderoso nos seus golpes. Não usa magia, mas compensa com pura resistência e instinto. É ideal para quem quer estar na linha da frente, a levar e causar pancada sem hesitar.',
      'Bard':'O Bard é um artista mágico — um contador de histórias, músico ou dançarino que inspira aliados e confunde inimigos. Usa magia através da sua arte, seja ela música, poesia ou dança. É extremamente versátil: pode curar, lançar feitiços, manipular emoções e ainda ter talento para lidar com quase qualquer situação fora de combate.',
      'Cleric':'O Cleric é o canal de poder divino. Serve uma divindade e invoca milagres para curar, proteger ou castigar. É um pilar de suporte, mas também um combatente eficaz quando necessário. Usa armadura e pode ser tão temido como um guerreiro ou tão vital como um curandeiro, dependendo do domínio divino que escolhe seguir.',
      'Druid':'O Druid é o guardião da natureza. Controla os elementos, cura feridas e transforma-se em animais para explorar ou combater. A sua ligação ao mundo natural permite-lhe lançar magias únicas e adaptar-se a qualquer ambiente. É uma excelente escolha para quem gosta de versatilidade mágica e de proteger o equilíbrio do mundo.',
      'Fighter':'O Fighter é o mestre das armas. É treinado em todas as formas de combate físico e adapta-se facilmente ao tipo de luta que preferir — seja com espada, arco ou escudo. Não precisa de magia para brilhar, pois compensa com técnica, disciplina e uma incrível capacidade de resistência e ataque constante em batalha.',
      'Monk':'O Monk é um artista marcial que canaliza energia interior para atingir feitos sobre-humanos. Move-se com velocidade, dá golpes precisos e pode desviar-se de ataques com agilidade extrema. Usa o corpo como arma e combina disciplina física com espiritualidade. Ideal para quem quer ser rápido, ágil e surpreendentemente letal.',
      'Paladin':'O Paladin é o guerreiro sagrado. Luta em nome de uma causa justa ou juramento sagrado e combina armas com magia divina. É resistente, curador e implacável contra o mal. A sua presença inspira aliados e mete respeito nos inimigos. É perfeito para quem quer ser um herói protetor com um forte sentido de dever.',
      'Ranger':'O Ranger é o explorador por excelência. Conhece os caminhos da natureza, persegue inimigos com precisão e usa magia simples para se adaptar ao terreno. Pode ter um companheiro animal e é especialista em sobreviver fora das cidades. É ideal para quem quer jogar como caçador, batedor ou guia experiente.',
      'Rogue':'O Rogue é o mestre da discrição e da precisão. Move-se nas sombras, ataca nos pontos fracos e evita armadilhas com facilidade. Usa agilidade e astúcia em vez de força, sendo letal quando apanha os inimigos desprevenidos. Perfeito para quem gosta de ser furtivo, inteligente e mortal com um só golpe.',
      'Sorcerer':'O Sorcerer é um utilizador de magia nato. O seu poder vem de dentro — seja de uma herança dracónica, caos selvagem ou outra origem mágica. É explosivo, criativo e pode lançar magias poderosas com facilidade, mas com menos variedade do que outras classes mágicas. Ideal para quem gosta de pura força arcana instintiva.',
      'Warlock':'O Warlock faz pactos com seres misteriosos — fadas, demónios ou entidades cósmicas — em troca de poder. A sua magia é estranha, única e cheia de truques. Usa invocações e pode disparar feitiços com frequência, mesmo com poucos recursos. Ótimo para quem quer um personagem intrigante com ligações sombrias ou místicas.',
      'Wizard':'O Wizard é o verdadeiro estudioso da magia. Aprende através de livros e pesquisa, tendo acesso ao maior número de feitiços do jogo. Pode preparar diferentes magias conforme a situação e é um mestre em versatilidade arcana. Embora frágil fisicamente, é um dos conjuradores mais poderosos a longo prazo.'
    },
    en: {
      'Barbarian':'The Barbarian is raw force of nature. Fights with wild fury, ignoring pain and unleashing devastating attacks. When entering Rage, they become harder to hurt and stronger in their strikes. They do not use magic but rely on sheer toughness and instinct. Ideal for those who want to be on the front line, taking and dealing damage without hesitation.',
      'Bard':'The Bard is a magical performer—a storyteller, musician or dancer who inspires allies and confuses enemies. They use magic through art, whether music, poetry or dance. Extremely versatile: can heal, cast spells, sway emotions and handle nearly any situation outside combat.',
      'Cleric':'The Cleric channels divine power. They serve a deity and call miracles to heal, protect or punish. A pillar of support yet an effective fighter when needed. Wearing armor, they can be feared like a warrior or vital like a healer depending on the divine domain followed.',
      'Druid':'The Druid is guardian of nature. They command the elements, heal wounds and transform into animals to explore or fight. Their bond with the natural world lets them cast unique spells and adapt to any environment. A great choice for those who enjoy magical versatility and protecting the world’s balance.',
      'Fighter':'The Fighter is the master of weapons. Trained in every form of physical combat, they adapt easily to any fighting style—sword, bow or shield. They do not need magic to shine, excelling through technique, discipline and an incredible capacity for endurance and constant offense.',
      'Monk':'The Monk is a martial artist who channels inner energy to achieve superhuman feats. Swift and precise, they dodge attacks with extreme agility. Using the body as a weapon, they blend physical discipline with spirituality. Perfect for those seeking speed, agility and surprising lethality.',
      'Paladin':'The Paladin is the holy warrior. Fighting for a righteous cause or sacred oath, they combine weapons with divine magic. Resilient, healing and relentless against evil, their presence inspires allies and commands respect. Ideal for a heroic protector with a strong sense of duty.',
      'Ranger':'The Ranger is the ultimate explorer. They know nature’s paths, track foes accurately and use simple magic to adapt to the terrain. Possibly with an animal companion, they excel at surviving away from cities. Great for players who want to be a hunter, scout or seasoned guide.',
      'Rogue':'The Rogue is master of stealth and precision. Moving in shadows, striking weak spots and disarming traps with ease, they rely on agility and wit rather than strength. Deadly when catching enemies off guard—ideal for stealthy, clever and lethal play.',
      'Sorcerer':'The Sorcerer wields innate magic. Power comes from within—draconic blood, wild chaos or another magical origin. Explosive and creative, they cast powerful spells easily, though with less variety than other casters. Perfect for those who favor raw, instinctive arcane might.',
      'Warlock':'The Warlock makes pacts with mysterious beings—fey, demons or cosmic entities—for power. Their magic is strange, unique and full of tricks. Using invocations, they can fire spells often even with few resources. Great for an intriguing character with dark or mystical ties.',
      'Wizard':'The Wizard is the true scholar of magic. Studying from books and research, they have access to the largest array of spells. They can prepare different magic for each situation and are masters of arcane versatility. Though physically fragile, they become one of the most powerful spellcasters over time.'
    }
  };

  const backgroundInfo = {
    pt: {
      'Acolyte':'Foste criado num templo, a servir uma divindade com devoção. Passaste os teus dias a estudar escrituras e a ajudar nas cerimónias. Tens uma forte ligação espiritual e um conhecimento profundo da fé, além de pequenos poderes sagrados aprendidos com os clérigos que te ensinaram.',
      'Artisan':'Cresceste num ambiente de trabalho manual, aprendendo um ofício desde jovem. Sabes como construir, reparar e vender os teus produtos. O teu olho treinado para os detalhes e o jeito com clientes fazem de ti alguém respeitado no mundo do comércio e da criação.',
      'Charlatan':'És um mestre da mentira e da ilusão. Vendeste poções falsas, fingiste ser alguém que não eras ou criaste documentos falsos com um sorriso convincente. Vives da tua lábia, da tua criatividade e de saberes sempre quando fugir.',
      'Criminal':'A tua vida começou nos becos e sombras da cidade. Foste ladrão, arrombador ou espião — talvez sozinho, talvez parte de um gangue. Sabes como mover-te sem ser visto e como escapar de quem te quer apanhar.',
      'Entertainer':'Viveste de aplausos e de fazer o público sorrir. Foste músico, acrobata, poeta ou palhaço. Sabes como cativar uma multidão e tens talento para o espectáculo, sempre pronto a brilhar ou a provocar gargalhadas.',
      'Farmer':'Nasceste e cresceste a trabalhar a terra. Aprendeste o valor do trabalho duro, da paciência e da ligação com os ciclos da natureza. A tua força e resistência vêm de anos de vida simples e esforço contínuo.',
      'Guard':'Serviste como guarda — de uma cidade, de uma muralha ou de um nobre. Estás sempre atento, preparado para intervir quando há perigo. A tua experiência ensinou-te a distinguir problemas ao longe e a manter a calma em situações tensas.',
      'Guide':'Viveste longe da civilização, a explorar florestas, montanhas e ruínas esquecidas. Levas outros por caminhos perigosos com sabedoria e discrição. Conheces os sons da natureza e os perigos que se escondem no meio dela.',
      'Hermit':'Passaste anos em isolamento, a meditar, estudar ou fugir do mundo. A tua mente está habituada à introspeção e ao silêncio. Talvez tenhas encontrado respostas... ou perguntas mais profundas ainda.',
      'Merchant':'Aprendeste a arte da negociação, da logística e do lucro. Vendeste bens por cidades e estradas, conhecendo culturas diferentes e as suas necessidades. És um viajante esperto com olho para oportunidades.',
      'Noble':'Foste criado no luxo de uma casa aristocrática. Aprendeste etiqueta, política e o peso do nome da tua família. Podes ser arrogante ou humilde, mas sabes como se comportar entre poderosos — ou manipulá-los.',
      'Sage':'Desde cedo te fascinaste com o conhecimento. Passaste anos entre livros, pergaminhos e mestres, a tentar compreender o mundo. Tens uma mente afiada e uma curiosidade insaciável, sempre à procura de respostas.',
      'Sailor':'A tua casa foi o mar. Navegaste por águas calmas e tempestades, conhecendo portos distantes e histórias fantásticas. És resistente, adaptável e habituado a uma vida onde tudo pode mudar com o vento.',
      'Scribe':'Trabalhaste a copiar textos importantes, seja em monastérios ou escritórios do governo. Escreves com precisão e atenção ao detalhe. O teu mundo é feito de palavras e de saber preservá-las sem erro.',
      'Soldier':'Foste treinado para a guerra. A tua vida foi feita de disciplina, treino e combate real. Estás habituado ao barulho da batalha, ao peso da armadura e às ordens que não se discutem. És leal, prático e determinado.',
      'Wayfarer':'Cresceste nas ruas, a sobreviver com engenho e teimosia. Aprendeste a mover-te sem ser notado e a confiar apenas em quem merece. Mesmo quando roubaste para sobreviver, nunca perdeste a esperança de um futuro melhor.'
    },
    en: {
      'Acolyte':'You were raised in a temple, serving a deity with devotion. You spent your days studying scriptures and helping in ceremonies. You have a strong spiritual bond and deep knowledge of faith, plus minor holy powers learned from the clerics who taught you.',
      'Artisan':'You grew up in a craftsman\'s environment, learning a trade from a young age. You can build, repair and sell your goods. Your trained eye for detail and skill with customers make you respected in the world of commerce and creation.',
      'Charlatan':'You are a master of lies and illusion. You sold fake potions, pretended to be someone else or forged documents with a convincing smile. You live by your wit, creativity and knowing when to run.',
      'Criminal':'Your life began in the city\'s alleys and shadows. You were a thief, burglar or spy—maybe alone, maybe part of a gang. You know how to move unseen and how to escape those who want to catch you.',
      'Entertainer':'You lived off applause and making the public smile. You were a musician, acrobat, poet or clown. You know how to captivate a crowd and have talent for showmanship, always ready to shine or provoke laughter.',
      'Farmer':'You were born and raised working the land. You learned the value of hard work, patience and the connection with nature\'s cycles. Your strength and endurance come from years of simple life and continuous effort.',
      'Guard':'You served as a guard—for a city, a wall or a noble. Always watchful, ready to intervene when danger arises. Your experience taught you to spot trouble from afar and keep calm in tense situations.',
      'Guide':'You lived far from civilization, exploring forests, mountains and forgotten ruins. You lead others through dangerous paths with wisdom and discretion. You know nature\'s sounds and the dangers hiding within.',
      'Hermit':'You spent years in isolation, meditating, studying or hiding from the world. Your mind is used to introspection and silence. Perhaps you found answers... or deeper questions.',
      'Merchant':'You learned the art of negotiation, logistics and profit. You sold goods along roads and cities, learning different cultures and their needs. You\'re a savvy traveler with an eye for opportunities.',
      'Noble':'You were raised in the luxury of an aristocratic house. You learned etiquette, politics and the weight of your family name. You may be arrogant or humble, but you know how to behave among the powerful—or manipulate them.',
      'Sage':'Fascinated by knowledge from early on, you spent years among books, scrolls and mentors trying to understand the world. You have a sharp mind and insatiable curiosity, always seeking answers.',
      'Sailor':'The sea was your home. You sailed through calm waters and storms, seeing distant ports and fantastic tales. You\'re resilient, adaptable and used to a life where everything can change with the wind.',
      'Scribe':'You worked copying important texts, whether in monasteries or government offices. You write with precision and attention to detail. Your world is made of words and knowing how to preserve them without error.',
      'Soldier':'You were trained for war. Your life was built on discipline, training and real combat. You\'re used to the noise of battle, the weight of armor and orders that are not questioned. Loyal, practical and determined.',
      'Wayfarer':'You grew up on the streets, surviving with cunning and stubbornness. You learned to move unnoticed and to trust only those who deserve it. Even when you stole to survive, you never lost hope for a better future.'
    }
  };
