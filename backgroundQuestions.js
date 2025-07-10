const step3pt = {
  title: 'Escolhe o Teu Antecedente',
  question: 'Que tipo de passado assenta melhor na tua personagem?',
  combos: {
    'Intelligence + Constitution': ['Criminal','Merchant','Sage'],
    'Intelligence + Dexterity': ['Artisan','Criminal','Scribe'],
    'Dexterity + Constitution': ['Charlatan','Criminal','Guide','Soldier'],
    'Dexterity': ['Artisan','Charlatan','Criminal','Entertainer','Guide','Sailor','Scribe','Soldier','Wayfarer'],
    'Strength': ['Artisan','Entertainer','Farmer','Guard','Noble','Sailor','Soldier'],
    'Strength + Constitution': ['Farmer','Soldier'],
    'Charisma + Constitution': ['Charlatan','Hermit','Merchant'],
    'Charisma + Dexterity': ['Charlatan','Entertainer','Wayfarer'],
    'Charisma': ['Acolyte','Charlatan','Entertainer','Hermit','Merchant','Noble','Wayfarer'],
    'Wisdom + Dexterity': ['Guide','Sailor','Scribe','Wayfarer'],
    'Wisdom + Constitution': ['Farmer','Guide','Hermit','Sage'],
    'Wisdom': ['Acolyte','Farmer','Guard','Guide','Hermit','Sage','Sailor','Scribe','Wayfarer'],
    'Intelligence + Strength': ['Artisan','Guard','Noble'],
    'Dexterity + Charisma': ['Charlatan','Entertainer','Wayfarer'],
    'Strength + Charisma': ['Entertainer','Noble'],
    'Wisdom + Strength': ['Farmer','Guard','Sailor'],
    'Intelligence': ['Acolyte','Artisan','Criminal','Guard','Merchant','Noble','Sage','Scribe']
  },
  branches: {
    Intelligence: {
      question: 'Que caminho marcou mais o teu passado?',
      options: {
        A: { label: 'Estudo ou f\u00e9.', list: ['Acolyte','Sage','Scribe'] },
        B: { label: 'Trabalho ou vida mundana.', list: ['Artisan','Criminal','Guard','Merchant','Noble'] }
      }
    },
    Dexterity: {
      question: 'Como usas a tua agilidade?',
      options: {
        A: { label: 'Furtividade e truques.', list: ['Charlatan','Criminal','Wayfarer'] },
        B: {
          question: 'Qual destes caminhos descreve melhor a tua experi\u00eancia?',
          options: {
            A: { label: 'Profiss\u00f5es pr\u00e1ticas ou art\u00edsticas.', list: ['Artisan','Entertainer','Scribe'] },
            B: { label: 'Explora\u00e7\u00e3o ou treino f\u00edsico.', list: ['Guide','Sailor','Soldier'] }
          }
        }
      }
    },
    Strength: {
      question: 'De onde vem a tua for\u00e7a?',
      options: {
        A: { label: 'Trabalho duro e combate.', list: ['Farmer','Guard','Sailor','Soldier','Artisan'] },
        B: { label: 'Performance ou nobreza.', list: ['Entertainer','Noble'] }
      }
    },
    Charisma: {
      question: 'Como influencias os outros?',
      options: {
        A: { label: 'Carisma e espet\u00e1culo.', list: ['Charlatan','Entertainer','Merchant','Noble','Wayfarer'] },
        B: { label: 'Convic\u00e7\u00e3o ou isolamento.', list: ['Acolyte','Hermit'] }
      }
    },
    Wisdom: {
      question: 'O que guia os teus instintos?',
      options: {
        A: { label: 'F\u00e9 ou estudo.', list: ['Acolyte','Hermit','Sage','Scribe'] },
        B: { label: 'Vida pr\u00e1tica ou viajante.', list: ['Farmer','Guard','Guide','Sailor','Wayfarer'] }
      }
    }
  }
};

const step3en = {
  title: 'Choose Your Background',
  question: 'What kind of past is more suited to your character?',
  combos: {
    'Intelligence + Constitution': ['Criminal','Merchant','Sage'],
    'Intelligence + Dexterity': ['Artisan','Criminal','Scribe'],
    'Dexterity + Constitution': ['Charlatan','Criminal','Guide','Soldier'],
    'Dexterity': ['Artisan','Charlatan','Criminal','Entertainer','Guide','Sailor','Scribe','Soldier','Wayfarer'],
    'Strength': ['Artisan','Entertainer','Farmer','Guard','Noble','Sailor','Soldier'],
    'Strength + Constitution': ['Farmer','Soldier'],
    'Charisma + Constitution': ['Charlatan','Hermit','Merchant'],
    'Charisma + Dexterity': ['Charlatan','Entertainer','Wayfarer'],
    'Charisma': ['Acolyte','Charlatan','Entertainer','Hermit','Merchant','Noble','Wayfarer'],
    'Wisdom + Dexterity': ['Guide','Sailor','Scribe','Wayfarer'],
    'Wisdom + Constitution': ['Farmer','Guide','Hermit','Sage'],
    'Wisdom': ['Acolyte','Farmer','Guard','Guide','Hermit','Sage','Sailor','Scribe','Wayfarer'],
    'Intelligence + Strength': ['Artisan','Guard','Noble'],
    'Dexterity + Charisma': ['Charlatan','Entertainer','Wayfarer'],
    'Strength + Charisma': ['Entertainer','Noble'],
    'Wisdom + Strength': ['Farmer','Guard','Sailor'],
    'Intelligence': ['Acolyte','Artisan','Criminal','Guard','Merchant','Noble','Sage','Scribe']
  },
  branches: {
    Intelligence: {
      question: 'Which path shaped you more?',
      options: {
        A: { label: 'Study or faith.', list: ['Acolyte','Sage','Scribe'] },
        B: { label: 'Trade or worldly life.', list: ['Artisan','Criminal','Guard','Merchant','Noble'] }
      }
    },
    Dexterity: {
      question: 'How do you use your agility?',
      options: {
        A: { label: 'Stealth and trickery.', list: ['Charlatan','Criminal','Wayfarer'] },
        B: {
          question: 'Which of these paths best describes your experience?',
          options: {
            A: { label: 'Practical or artistic trades.', list: ['Artisan','Entertainer','Scribe'] },
            B: { label: 'Exploration or physical training.', list: ['Guide','Sailor','Soldier'] }
          }
        }
      }
    },
    Strength: {
      question: 'Where does your strength come from?',
      options: {
        A: { label: 'Hard work and battle training.', list: ['Farmer','Guard','Sailor','Soldier','Artisan'] },
        B: { label: 'Performance or noble upbringing.', list: ['Entertainer','Noble'] }
      }
    },
    Charisma: {
      question: 'How do you sway others?',
      options: {
        A: { label: 'Charm and showmanship.', list: ['Charlatan','Entertainer','Merchant','Noble','Wayfarer'] },
        B: { label: 'Conviction or solitude.', list: ['Acolyte','Hermit'] }
      }
    },
    Wisdom: {
      question: 'What guides your instincts?',
      options: {
        A: { label: 'Faith or scholarship.', list: ['Acolyte','Hermit','Sage','Scribe'] },
        B: { label: 'Hands-on or wandering life.', list: ['Farmer','Guard','Guide','Sailor','Wayfarer'] }
      }
    }
  }
};

const bgDescriptionsPT = {
  Acolyte: 'Serviste um templo com devoção e ganhaste acesso a magia divina básica e rituais sagrados.',
  Artisan: 'Aprendeste um ofício artesanal e desenvolveste olho clínico e talento para criar objetos úteis.',
  Charlatan: 'Consegues mentir com charme e mãos rápidas — és um mestre da fraude e manipulação social.',
  Criminal: 'Sobrevivente furtivo das sombras urbanas, treinado para escapar, roubar e antecipar perigo.',
  Entertainer: 'Brilhas em palco com talento físico ou musical e sabes como impressionar qualquer multidão.',
  Farmer: 'Criado na terra e endurecido pelo esforço, és resiliente, prático e conheces bem a natureza.',
  Guard: 'Vigilante treinado para manter a ordem, com sentidos aguçados e espírito de defesa.',
  Guide: 'Explorador nato, habituado a ambientes selvagens e conhecedor de magia natural rudimentar.',
  Hermit: 'Afastaste-te do mundo para refletir e curar — agora possuis sabedoria e habilidades médicas.',
  Merchant: 'Especialista em viagens e negócios, sorte e persuasão estão do teu lado nas trocas comerciais.',
  Noble: 'Nasceste entre privilégios e aprendeste a comandar, negociar e dominar jogos de influência.',
  Sage: 'Passaste anos a estudar magia e história — o teu conhecimento é tão vasto quanto a tua curiosidade.',
  Sailor: 'Viveste entre ondas e tabernas, és ágil, resistente e pronto para a luta em qualquer porto.',
  Scribe: 'Trabalhas com precisão e detalhe, dominando tanto a palavra escrita como a observação cuidada.',
  Soldier: 'Veterano de treino militar rigoroso, és forte, imponente e letal em campo de batalha.',
  Wayfarer: 'Cresceste nas ruas, movendo-te sem ser visto — sabes sobreviver, infiltrar-te e manter esperança.'
};


const bgDescriptionsEN = {
  Acolyte: 'You served a temple with devotion, gaining sacred knowledge and minor divine magic.',
  Artisan: 'You learned a craft, honing your skills to create useful gear and spot fine details.',
  Charlatan: 'You lie with flair and act with sleight — a master of deception and social manipulation.',
  Criminal: 'A sneaky survivor of the streets, trained in stealth, theft, and anticipating threats.',
  Entertainer: 'You thrive on stage, dazzling with acrobatics or music and charming any audience.',
  Farmer: 'Raised on the land, you’re tough, grounded, and deeply connected to nature’s rhythms.',
  Guard: 'A vigilant defender trained to watch for danger and maintain order with sharp instincts.',
  Guide: 'A wilderness expert, you know wild lands, walk unseen, and wield simple druidic magic.',
  Hermit: 'You withdrew from society to reflect and heal — now you wield wisdom and medical skills.',
  Merchant: 'A seasoned trader and traveler, your charm and luck make you excel in negotiation.',
  Noble: 'Born to privilege, you learned to lead, persuade, and thrive in courts and politics.',
  Sage: 'Years of study in ancient tomes granted you deep knowledge and a spark of arcane talent.',
  Sailor: 'Hardened by the sea and the tavern, you’re nimble, perceptive, and brawl-ready anywhere.',
  Scribe: 'You write with care and precision, skilled in research and spotting the smallest detail.',
  Soldier: 'A disciplined warrior forged by military training, strong and fearless in organized combat.',
  Wayfarer: 'You grew up on the streets, moving unseen and surviving with stealth, skill, and will.'
};


window.bgDescriptions = { pt: bgDescriptionsPT, en: bgDescriptionsEN };
