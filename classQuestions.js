const step2pt = {
      title: 'Que Classe Combina Contigo?',
      tree: {
        question: 'Qual o nível de complexidade que preferes para a tua personagem?',
        options: {
          A: { label: 'O mínimo possível — quero algo simples e direto.', next: {
            question: 'Que estilo te atrai mais?',
            options: {
              A: { label: 'Força bruta e fúria pura. (Barbarian)', result: 'Barbarian' },
              B: { label: 'Perícia marcial e adaptabilidade. (Fighter)', result: 'Fighter' },
              C: { label: 'Furtividade, velocidade e precisão. (Rogue)', result: 'Rogue' }
            }
          }},
          B: { label: 'Uma abordagem equilibrada — gosto de variedade sem demasiada complexidade.', next: {
            question: 'Que estilo equilibrado soa mais apelativo?',
            options: {
              A: { label: 'Cura e apoio divino em combate. (Cleric)', result: 'Cleric' },
              B: { label: 'Um guerreiro sagrado que inspira e defende. (Paladin)', result: 'Paladin' },
              C: { label: 'Um rastreador habilidoso com magia prática. (Ranger)', result: 'Ranger' },
              D: { label: 'Um mestre de muitas magias com boa preparação. (Wizard)', result: 'Wizard' }
            }
          }},
          C: { label: 'Gosto de dominar sistemas complexos e desafios.', next: {
            question: 'Que papel complexo te atrai?',
            options: {
              A: { label: 'Um mago da natureza que muda de forma. (Druid)', result: 'Druid' },
              B: { label: 'Um artista marcial rápido com poder interior. (Monk)', result: 'Monk' },
              C: { label: 'Um artista estiloso que lança feitiços com charme. (Bard)', result: 'Bard' },
              D: { label: 'Um poderoso conjurador inato. (Sorcerer)', result: 'Sorcerer' },
              E: { label: 'Um conjurador ligado a um pacto com magia misteriosa. (Warlock)', result: 'Warlock' }
            }
          }}
        }
      }
    };

const step2en = {
        title: 'Which Class Fits You?',
        tree: {
          question: 'What level of complexity do you prefer in your character?',
          options: {
          A: { label: 'As little as possible — I want something simple and direct.', next: {
            question: 'Which style appeals most to you?',
            options: {
              A: { label: 'Brutal force and raw rage. (Barbarian)', result: 'Barbarian' },
              B: { label: 'Martial expertise and adaptability. (Fighter)', result: 'Fighter' },
              C: { label: 'Stealth, speed, and precision. (Rogue)', result: 'Rogue' }
            }
          }},
          B: { label: 'A balanced approach — I enjoy variety without too much complexity.', next: {
            question: 'Which balanced style sounds most appealing?',
            options: {
              A: { label: 'Healing and divine support in battle. (Cleric)', result: 'Cleric' },
              B: { label: 'A holy warrior who inspires and defends. (Paladin)', result: 'Paladin' },
              C: { label: 'A skilled tracker with practical magic. (Ranger)', result: 'Ranger' },
              D: { label: 'A master of many spells with good preparation. (Wizard)', result: 'Wizard' }
            }
          }},
          C: { label: 'I enjoy mastering complex systems and challenges.', next: {
            question: 'Which complex role are you drawn to?',
            options: {
              A: { label: 'A shape-shifting nature mage. (Druid)', result: 'Druid' },
              B: { label: 'A fast-paced martial artist with inner power. (Monk)', result: 'Monk' },
              C: { label: 'A stylish performer who casts spells with flair. (Bard)', result: 'Bard' },
              D: { label: 'A powerful innate spellcaster. (Sorcerer)', result: 'Sorcerer' },
              E: { label: 'A pact-bound spellcaster with mysterious magic. (Warlock)', result: 'Warlock' }
            }
          }}
        }
      }
    };

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
      'Circle of the Sea': 'I call the tides and unleash crashing storms.',
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
      Dungeoneer: 'I survive traps, monsters and dungeons with instinct and superstition.'
    }
  },
  Monk: {
    question: 'What path shapes your martial discipline?',
    options: {
      'Way of the Open Hand': 'I master balance and knock enemies off their feet.',
      'Way of Shadow': 'I vanish in shadows and strike from silence.',
      'Way of the Elements': 'I wield the four elements through martial motion.',
      'Way of Mercy': 'I wear a mask, healing with one hand and punishing with the other.',
      'Warrior of the Street': 'I fight with dirty, improvised moves learned on the streets.'
    }
  },
  Paladin: {
    question: 'What oath have you sworn?',
    options: {
      'Oath of Devotion': 'I stand for justice, honor and protection.',
      'Oath of Glory': 'I fight with radiant glory and live to inspire.',
      'Oath of the Ancients': 'I protect joy and nature from all that threatens it.',
      'Oath of Vengeance': 'I hunt down evil with relentless vengeance.',
      'Oath of Revelry': 'I bring divine partying to every battlefield.'
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
      'Arachnoid Stalker': 'I web enemies and climb walls like a deadly spider.',
      'Arcane Trickster': 'I blend arcane trickery with swift hands.',
      Assassin: 'I strike before anyone knows I was there.',
      Soulknife: 'I summon blades from thought and vanish like a ghost.',
      Thief: 'I\u2019m fast, clever, and gone before the alarms sound.'
    }
  },
  Sorcerer: {
    question: 'Where does your power come from?',
    options: {
      'Aberrant Sorcery': 'I was touched by a mind-breaking alien force.',
      'Clockwork Sorcery': 'I channel the gears of reality to enforce magical order.',
      'Draconic Sorcery': 'My dragon blood burns with elemental power.',
      'Wild Magic': 'I am a walking arcane explosion — wild and unpredictable.'
    }
  },
  Warlock: {
    question: 'Who grants your arcane pact?',
    options: {
      'Archfey Patron': 'A fey trickster blessed me with mischief and magic.',
      'Celestial Patron': 'A radiant being gave me healing flame and hope.',
      'Fiend Patron': 'A devil\u2019s contract fuels me with fire and fury.',
      'Future You': 'I\u2019m mentored by my future self — I know what comes next.',
      'Great Old One Patron': 'I speak to an ancient god of madness that whispers truths.'
    }
  },
  Wizard: {
    question: 'What arcane school do you specialize in?',
    options: {
      Abjurer: 'I shield my allies and block the worst magic.',
      Diviner: 'I twist fate and always know what\u2019s coming.',
      Evoker: 'I unleash elemental devastation like a living spell.',
      Illusionist: 'I deceive, distract and dominate through illusion.'
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
      'Circle of the Sea': 'Invoco o poder do mar e lan\u00e7o tempestades violentas. (Circle of the Sea)',
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
      Dungeoneer: 'Sobrevivo a armadilhas e monstros por instinto. (Dungeoneer)'
    }
  },
  Monk: {
    question: 'Que caminho guia a tua disciplina marcial?',
    options: {
      'Way of the Open Hand': 'Domino o equil\u00edbrio e derrubo advers\u00e1rios. (Way of the Open Hand)',
      'Way of Shadow': 'Desapare\u00e7o nas sombras e ataco do silêncio. (Way of Shadow)',
      'Way of the Elements': 'Control\u00f5 os quatro elementos com o movimento. (Way of the Four Elements)',
      'Way of Mercy': 'Uso uma m\u00e1scara, curando e punindo. (Way of Mercy)',
      'Warrior of the Street': 'Combato com t\u00e9cnicas improvisadas das ruas. (Warrior of the Street)'
    }
  },
  Paladin: {
    question: 'Que juramento fizeste?',
    options: {
      'Oath of Devotion': 'Defendo a justi\u00e7a, a honra e a prote\u00e7\u00e3o. (Oath of Devotion)',
      'Oath of Glory': 'Combato com gl\u00f3ria radiante e inspiro. (Oath of Glory)',
      'Oath of the Ancients': 'Protejo a alegria e a natureza de todo o mal. (Oath of the Ancients)',
      'Oath of Vengeance': 'Ca\u00e7o o mal com vingan\u00e7a implac\u00e1vel. (Oath of Vengeance)',
      'Oath of Revelry': 'Levo a festa divina a todos os campos de batalha. (Oath of Revelry)'
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
      'Arachnoid Stalker': 'Enredo inimigos e escalo paredes como uma aranha mortal. (Arachnoid Stalker)',
      'Arcane Trickster': 'Misturo travessuras arcanas com m\u00e3os r\u00e1pidas. (Arcane Trickster)',
      Assassin: 'Golpeio antes que percebam a minha presen\u00e7a. (Assassin)',
      Soulknife: 'Invoco l\u00e2minas do pensamento e desvane\u00e7o-me como um fantasma. (Soulknife)',
      Thief: 'Sou r\u00e1pido, esperto e desapare\u00e7o antes do alarme soar. (Thief)'
    }
  },
  Sorcerer: {
    question: 'De onde vem o teu poder?',
    options: {
      'Aberrant Sorcery': 'Fui tocado por uma for\u00e7a alien\u00edgena e enlouquecedora. (Aberrant Sorcery)',
      'Clockwork Sorcery': 'Canalizo as engrenagens da realidade para impor ordem m\u00e1gica. (Clockwork Sorcery)',
      'Draconic Sorcery': 'O meu sangue drac\u00f3nico arde com poder elemental. (Draconic Sorcery)',
      'Wild Magic': 'Sou uma explos\u00e3o arcana ambulante — ca\u00f3tica e imprevis\u00edvel. (Wild Magic)'
    }
  },
  Warlock: {
    question: 'Quem te concedeu o pacto arcano?',
    options: {
      'Archfey Patron': 'Uma fada trapaceira aben\u00e7oou-me com magia e travessura. (Archfey Patron)',
      'Celestial Patron': 'Um ser radiante concedeu-me chamas curativas e esperan\u00e7a. (Celestial Patron)',
      'Fiend Patron': 'Um pacto demon\u00edaco alimenta-me com fogo e f\u00faria. (Fiend Patron)',
      'Future You': 'Sou orientado pelo meu futuro eu — sei o que est\u00e1 para vir. (Future You)',
      'Great Old One Patron': 'Falo com um deus antigo de loucura que sussurra verdades. (Great Old One Patron)'
    }
  },
  Wizard: {
    question: 'Em que escola arcana te especializaste?',
    options: {
      Abjurer: 'Protejo aliados e bloqueio a pior magia. (Abjurer)',
      Diviner: 'Tor\u00e7o o destino e sei sempre o que est\u00e1 para acontecer. (Diviner)',
      Evoker: 'Liberto devasta\u00e7\u00e3o elemental como uma magia viva. (Evoker)',
      Illusionist: 'Engano, distraio e domino atrav\u00e9s de ilus\u00e3o. (Illusionist)'
    }
  }
};

const subClassQuestions = { en: subClassEN, pt: subClassPT };
