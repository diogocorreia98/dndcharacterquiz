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
        B: { label: 'Of\u00edcio ou explora\u00e7\u00e3o.', list: ['Artisan','Entertainer','Guide','Sailor','Scribe','Soldier'] }
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
        B: { label: 'Craft or exploration.', list: ['Artisan','Entertainer','Guide','Sailor','Scribe','Soldier'] }
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
  Acolyte: 'Conhecedor de tradições sagradas e serviço comunitário',
  Artisan: 'Trabalhador manual habilidoso',
  Charlatan: 'Mestre em enganar com astúcia',
  Criminal: 'Habituado a agir nas sombras e longe da lei',
  Entertainer: 'Vive do aplauso e sabe cativar o público',
  Farmer: 'Fortalecido pela vida campestre e trabulho duro',
  Guard: 'Treinado para vigiar e proteger',
  Guide: 'Especialista em trilhos e regiões perigosas',
  Hermit: 'Costuma viver em isolamento e reflexão',
  Merchant: 'Negociante experiente em trocas',
  Noble: 'Conhecedor de etiqueta e círculos de poder',
  Sage: 'Dedicado ao estudo e à busca de conhecimento',
  Sailor: 'Adaptado à vida entre embarcações e tabernas',
  Scribe: 'Habituado a copiar e guardar textos',
  Soldier: 'Treinado para combate organizado',
  Wayfarer: 'Sobrevivente de rua que se move silenciosamente'
};

const bgDescriptionsEN = {
  Acolyte: 'Familiar with sacred rites and community duties',
  Artisan: 'Skilled manual worker',
  Charlatan: 'Expert at deceiving others',
  Criminal: 'Used to acting from the shadows and outside the law',
  Entertainer: 'Lives for applause and charming crowds',
  Farmer: 'Toughness from a life of hard field work',
  Guard: 'Trained to watch and protect',
  Guide: 'Knows dangerous trails and wild regions',
  Hermit: 'Accustomed to isolation and introspection',
  Merchant: 'Seasoned in negotiation and trade',
  Noble: 'Understands etiquette and circles of influence',
  Sage: 'Devoted to study and knowledge',
  Sailor: 'Adapted to life aboard ships and drinking at pubs',
  Scribe: 'Works with copying and preserving texts',
  Soldier: 'Trained for organized combat',
  Wayfarer: 'Street survivor who moves unseen'
};

window.bgDescriptions = { pt: bgDescriptionsPT, en: bgDescriptionsEN };
