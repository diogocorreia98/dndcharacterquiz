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
