const step3pt = {
  title: 'Escolhe o Teu Antecedente',
  question: 'Com base nas tuas habilidades prioritárias, escolhe um background:',
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
  question: 'Based on your priority abilities, choose a background:',
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
  Criminal: 'Habituado a agir nas sombras',
  Entertainer: 'Vive do aplauso e sabe cativar o público',
  Farmer: 'Força adquirida no campo e vida simples',
  Guard: 'Treinado para vigiar e proteger',
  Guide: 'Especialista em trilhos e regiões perigosas',
  Hermit: 'Costuma viver em isolamento e reflexão',
  Merchant: 'Negociante experiente em trocas',
  Noble: 'Conhecedor de etiqueta e círculos de poder',
  Sage: 'Dedicado ao estudo e à busca de conhecimento',
  Sailor: 'Adaptado à vida em embarcações',
  Scribe: 'Habituado a copiar e guardar textos',
  Soldier: 'Treinado para combate organizado',
  Wayfarer: 'Sobrevivente de rua que se move silenciosamente'
};

const bgDescriptionsEN = {
  Acolyte: 'Familiar with sacred rites and community duties',
  Artisan: 'Skilled manual worker',
  Charlatan: 'Expert at deceiving others',
  Criminal: 'Used to acting from the shadows',
  Entertainer: 'Lives for applause and charming crowds',
  Farmer: 'Strength from a life of hard field work',
  Guard: 'Trained to watch and protect',
  Guide: 'Knows dangerous trails and wild regions',
  Hermit: 'Accustomed to isolation and introspection',
  Merchant: 'Seasoned in negotiation and trade',
  Noble: 'Understands etiquette and circles of influence',
  Sage: 'Devoted to study and knowledge',
  Sailor: 'Adapted to life aboard ships',
  Scribe: 'Works with copying and preserving texts',
  Soldier: 'Trained for organized combat',
  Wayfarer: 'Street survivor who moves unseen'
};

window.bgDescriptions = { pt: bgDescriptionsPT, en: bgDescriptionsEN };
