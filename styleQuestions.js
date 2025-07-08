const styleQuizPT = {
  "Cleric": {
    question: "Como vives a tua fé?",
    options: {
      A: {
        label: "Protejo os outros com a força da minha fé.",
        next: {
          question: "Como vives a tua fé e o teu papel no grupo?",
          options: {
            A: {
              label: "Sou o escudo do grupo — mantenho todos seguros.",
              result: "Wisdom + Strength",
            },
            B: {
              label: "Ofereço orientação espiritual e magia útil.",
              result: "Wisdom",
            }
          }
        }
      },
      B: {
        label: "Canalizo milagres e cura com devoção.",
        next: {
          question: "Como canalizas o poder divino?",
          options: {
            A: {
              label: "Através da sabedoria e cura.",
              result: "Wisdom",
            },
            B: {
              label: "Com fé e fortaleza interior.",
              result: "Wisdom + Constitution",
            }
          }
        }
      }
    }
  },

  "Druid": {
    question: "Que papel tens no ciclo natural?",
    options: {
      A: {
        label: "Sou um guardião resiliente da floresta.",
        next: {
          question: "Como proteges o mundo natural?",
          options: {
            A: {
              label: "Com resiliência e devoção.",
              result: "Wisdom + Constitution"
            },
            B: {
              label: "Com intuição e conexão pura.",
              result: "Wisdom"
            }
          }
        }
      },
      B: {
        label: "Sou um conhecedor da magia e dos segredos naturais.",
        next: {
          question: "Qual é o centro do teu poder natural?",
          options: {
            A: {
              label: "Sabedoria profunda e ligação mística à natureza.",
              result: "Wisdom"
            },
            B: {
              label: "Agilidade e harmonia com o ambiente.",
              result: "Wisdom + Dexterity"
            }
          }
        }
      }
    }
  },

  "Paladin": {
    question: "Qual é a origem do teu poder sagrado?",
    options: {
      A: {
        label: "A minha fé oferece-me proteção divina.",
        next: {
          question: "Como canalizas a bênção divina que te guia?",
          options: {
            A: {
              label: "Uso a força da fé para proteger e resistir.",
              result: "Charisma + Constitution"
            }
          }
        }
      },
      B: {
        label: "O meu estilo de combate define-me.",
        next: {
          question: "Que tipo de campeão és?",
          options: {
            A: {
              label: "Resistente e implacável — o escudo do grupo.",
              result: "Strength + Constitution"
            },
            B: {
              label: "Rápido, elegante e encantador.",
              result: "Dexterity + Charisma"
            },
            C: {
              label: "Defensor firme e silencioso.",
              result: "Dexterity + Constitution"
            },
            D: {
              label: "Inspirador e poderoso como um comandante.",
              result: "Strength + Charisma"
            }
          }
        }
      }
    }
  },

  "Ranger": {
    question: "Como usas as tuas habilidades naturais?",
    options: {
      A: {
        label: "Tenho uma ligação mágica com a natureza.",
        next: {
          question: "Como usas a tua ligação à natureza?",
          options: {
            A: {
              label: "Misturo-me com a floresta, silencioso e preciso.",
              result: "Wisdom + Dexterity"
            },
            B: {
              label: "Sou resiliente, como pedra e raiz.",
              result: "Wisdom + Constitution"
            },
            C: {
              label: "Confio no instinto puro, guiado pelos espíritos.",
              result: "Wisdom"
            }
          }
        }
      },
      B: {
        label: "Sou um caçador ágil e prático.",
        next: {
          question: "Como preferes lidar com os perigos da selva e da cidade?",
          options: {
            A: {
              label: "Sou ágil e escorregadio — nunca me apanham.",
              result: "Dexterity"
            },
            B: {
              label: "Resisto ao desgaste e luto com persistência.",
              result: "Dexterity + Constitution"
            },
            C: {
              label: "Sigo os meus sentidos e sobrevivo com astúcia.",
              result: "Dexterity + Wisdom"
            }
          }
        }
      }
    }
  },

  "Warlock": {
    question: "Que tipo de pacto fizeste com o teu patrono?",
    options: {
      A: {
        label: "Uso armas encantadas para canalizar o poder.",
        next: {
          question: "Como usas o teu poder concedido no combate?",
          options: {
            A: {
              label: "Sou rápido e ágil — ataco antes que me vejam.",
              result: "Dexterity"
            },
            B: {
              label: "Canalizo o poder do meu patrono com presença imponente.",
              result: "Charisma"
            },
            C: {
              label: "Combino agilidade e carisma num estilo único.",
              result: "Charisma + Dexterity"
            }
          }
        }
      },
      B: {
        label: "Manifesta-se de forma mais subtil ou variada.",
        next: {
          question: "Como preferes manifestar os dons do teu patrono?",
          options: {
            A: {
              label: "Com estilo, sorte e improviso.",
              result: "Charisma + Dexterity"
            },
            B: {
              label: "Com fé inabalável e magia versátil.",
              result: "Charisma"
            }
          }
        }
      }
    }
  },

  "Barbarian": {
    question: "O que define o teu estilo de combate?",
    options: {
      A: { label: "Força pura e agressividade.", result: "Strength" },
      B: { label: "Força com resistência imbatível.", result: "Strength + Constitution" }
    }
  },

  "Monk": {
    question: "Que tipo de disciplina te guia?",
    options: {
      A: { label: "Agilidade e sabedoria interior.", result: "Dexterity + Wisdom" },
      B: { label: "Rapidez e resistência física.", result: "Dexterity + Constitution" }
    }
  },

  "Sorcerer": {
    question: "Como canalizas o teu poder inato?",
    options: {
      A: { label: "Com presença mágica poderosa.", result: "Charisma" },
      B: { label: "Com intensidade interior e vitalidade.", result: "Charisma + Constitution" }
    }
  },

  "Wizard": {
    question: "Como usas o teu conhecimento arcano?",
    options: {
      A: { label: "Com estudo e prática mágica constante.", result: "Intelligence" },
      B: { label: "Com perseverança e resistência ao fracasso.", result: "Intelligence + Constitution" }
    }
  },

  "Battle Master Fighter": {
    question: "Como preferes lutar?",
    options: {
      A: { label: "Com agilidade, movimentos rápidos e armas leves.", result: "Dexterity" },
      B: { label: "Com força bruta e presença dominante.", result: "Strength" }
    }
  },

  "Champion Fighter": {
    question: "Como preferes lutar?",
    options: {
      A: { label: "Com agilidade, movimentos rápidos e armas leves.", result: "Dexterity" },
      B: { label: "Com força bruta e presença dominante.", result: "Strength" }
    }
  },

  "Dungeoneer Fighter": {
    question: "Como preferes lutar?",
    options: {
      A: { label: "Com agilidade, movimentos rápidos e armas leves.", result: "Dexterity" },
      B: { label: "Com força bruta e presença dominante.", result: "Strength" }
    }
  },

  "Eldritch Knight Fighter": {
    question: "Como complementas a tua magia em combate?",
    options: {
      A: { label: "Com agilidade e estratégia.", result: "Intelligence + Dexterity" },
      B: { label: "Com força e foco arcano.", result: "Intelligence + Strength" }
    }
  },

  "Psi Warrior Fighter": {
    question: "Como complementas a tua magia em combate?",
    options: {
      A: { label: "Com agilidade e estratégia.", result: "Intelligence + Dexterity" },
      B: { label: "Com força e foco arcano.", result: "Intelligence + Strength" }
    }
  },

  "Arcane Trickster Rogue": {
    question: "Como aplicas a tua astúcia?",
    options: {
      A: { label: "Com conhecimento e agilidade.", result: "Intelligence + Dexterity" },
      B: { label: "Com inteligência e resistência.", result: "Intelligence + Constitution" }
    }
  },

  "Other Subclass Rogue": {
    question: "Como preferes resolver problemas?",
    options: {
      A: { label: "Com velocidade e reflexos.", result: "Dexterity" },
      B: { label: "Com resistência e persistência.", result: "Dexterity + Constitution" }
    }
  },

  "College of Glamour Bard": {
    question: "Qual é o teu ponto forte?",
    options: {
      A: { label: "Presença marcante e magia.", result: "Charisma" }
    }
  },

  "College of Lore Bard": {
    question: "Qual é o teu ponto forte?",
    options: {
      A: { label: "Presença marcante e magia.", result: "Charisma" }
    }
  },

  "College of Dance Bard": {
    question: "Como é o teu estilo em palco e em combate?",
    options: {
      A: { label: "Expressivo e versátil.", result: "Charisma + Dexterity" }
    }
  },

  "College of Valor Bard": {
    question: "Como é o teu estilo em palco e em combate?",
    options: {
      A: { label: "Expressivo e versátil.", result: "Charisma + Dexterity" }
    }
  }
};

const styleQuizEN = {
  "Cleric": {
    question: "How do you live your faith?",
    options: {
      A: {
        label: "I protect others with the strength of my faith.",
        next: {
          question: "How do you live your faith and your role in the party?",
          options: {
            A: {
              label: "I'm the party's shield—keeping everyone safe.",
              result: "Wisdom + Strength",
            },
            B: {
              label: "I offer spiritual guidance and helpful magic.",
              result: "Wisdom",
            }
          }
        }
      },
      B: {
        label: "I channel miracles and healing with devotion.",
        next: {
          question: "How do you channel divine power?",
          options: {
            A: {
              label: "Through wisdom and healing.",
              result: "Wisdom",
            },
            B: {
              label: "With faith and inner fortitude.",
              result: "Wisdom + Constitution",
            }
          }
        }
      }
    }
  },

  "Druid": {
    question: "What role do you play in the natural cycle?",
    options: {
      A: {
        label: "I am a resilient guardian of the forest.",
        next: {
          question: "How do you safeguard the natural world?",
          options: {
            A: {
              label: "With resilience and devotion.",
              result: "Wisdom + Constitution"
            },
            B: {
              label: "With intuition and pure connection.",
              result: "Wisdom"
            }
          }
        }
      },
      B: {
        label: "I am a student of magic and natural secrets.",
        next: {
          question: "Where does your natural power center?",
          options: {
            A: {
              label: "Deep wisdom and mystical bond with nature.",
              result: "Wisdom"
            },
            B: {
              label: "Agility and harmony with the environment.",
              result: "Wisdom + Dexterity"
            }
          }
        }
      }
    }
  },

  "Paladin": {
    question: "Where does your holy power come from?",
    options: {
      A: {
        label: "My faith grants me divine protection.",
        next: {
          question: "How do you channel the divine blessing guiding you?",
          options: {
            A: {
              label: "I use the strength of faith to protect and endure.",
              result: "Charisma + Constitution"
            }
          }
        }
      },
      B: {
        label: "My fighting style defines me.",
        next: {
          question: "What type of champion are you?",
          options: {
            A: {
              label: "Resilient and relentless—the party's shield.",
              result: "Strength + Constitution"
            },
            B: {
              label: "Swift, stylish and charming.",
              result: "Dexterity + Charisma"
            },
            C: {
              label: "Steadfast, silent defender.",
              result: "Dexterity + Constitution"
            },
            D: {
              label: "Inspiring and powerful like a commander.",
              result: "Strength + Charisma"
            }
          }
        }
      }
    }
  },

  "Ranger": {
    question: "How do you use your natural talents?",
    options: {
      A: {
        label: "I have a magical bond with nature.",
        next: {
          question: "How do you use your bond with nature?",
          options: {
            A: {
              label: "I meld with the forest, silent and precise.",
              result: "Wisdom + Dexterity"
            },
            B: {
              label: "I'm resilient, like rock and root.",
              result: "Wisdom + Constitution"
            },
            C: {
              label: "I trust pure instinct, guided by spirits.",
              result: "Wisdom"
            }
          }
        }
      },
      B: {
        label: "I'm an agile, practical hunter.",
        next: {
          question: "How do you prefer to deal with the dangers of wilderness and city?",
          options: {
            A: {
              label: "I'm agile and slippery—never caught.",
              result: "Dexterity"
            },
            B: {
              label: "I endure hardships and fight with persistence.",
              result: "Dexterity + Constitution"
            },
            C: {
              label: "I follow my senses and survive with cunning.",
              result: "Dexterity + Wisdom"
            }
          }
        }
      }
    }
  },

  "Warlock": {
    question: "What kind of pact did you make with your patron?",
    options: {
      A: {
        label: "I wield enchanted weapons to channel the power.",
        next: {
          question: "How do you use your granted power in battle?",
          options: {
            A: {
              label: "I'm swift and agile—strike before I'm seen.",
              result: "Dexterity"
            },
            B: {
              label: "I channel my patron's power with commanding presence.",
              result: "Charisma"
            },
            C: {
              label: "I combine agility and charisma in a unique style.",
              result: "Charisma + Dexterity"
            }
          }
        }
      },
      B: {
        label: "It manifests more subtly or in varied ways.",
        next: {
          question: "How do you prefer to manifest your patron's gifts?",
          options: {
            A: {
              label: "With style, luck and improvisation.",
              result: "Charisma + Dexterity"
            },
            B: {
              label: "With unwavering faith and versatile magic.",
              result: "Charisma"
            }
          }
        }
      }
    }
  },

  "Barbarian": {
    question: "What defines your fighting style?",
    options: {
      A: { label: "Pure strength and aggressiveness.", result: "Strength" },
      B: { label: "Strength with unbeatable endurance.", result: "Strength + Constitution" }
    }
  },

  "Monk": {
    question: "What kind of discipline guides you?",
    options: {
      A: { label: "Agility and inner wisdom.", result: "Dexterity + Wisdom" },
      B: { label: "Speed and physical endurance.", result: "Dexterity + Constitution" }
    }
  },

  "Sorcerer": {
    question: "How do you channel your innate power?",
    options: {
      A: { label: "With powerful magical presence.", result: "Charisma" },
      B: { label: "With inner intensity and vitality.", result: "Charisma + Constitution" }
    }
  },

  "Wizard": {
    question: "How do you wield your arcane knowledge?",
    options: {
      A: { label: "Through constant study and practice.", result: "Intelligence" },
      B: { label: "With perseverance and resilience against failure.", result: "Intelligence + Constitution" }
    }
  },

  "Battle Master Fighter": {
    question: "How do you prefer to fight?",
    options: {
      A: { label: "With agility, quick moves and light weapons.", result: "Dexterity" },
      B: { label: "With brute strength and commanding presence.", result: "Strength" }
    }
  },

  "Champion Fighter": {
    question: "How do you prefer to fight?",
    options: {
      A: { label: "With agility, quick moves and light weapons.", result: "Dexterity" },
      B: { label: "With brute strength and commanding presence.", result: "Strength" }
    }
  },

  "Dungeoneer Fighter": {
    question: "How do you prefer to fight?",
    options: {
      A: { label: "With agility, quick moves and light weapons.", result: "Dexterity" },
      B: { label: "With brute strength and commanding presence.", result: "Strength" }
    }
  },

  "Eldritch Knight Fighter": {
    question: "How do you complement your magic in battle?",
    options: {
      A: { label: "With agility and strategy.", result: "Intelligence + Dexterity" },
      B: { label: "With strength and arcane focus.", result: "Intelligence + Strength" }
    }
  },

  "Psi Warrior Fighter": {
    question: "How do you complement your magic in battle?",
    options: {
      A: { label: "With agility and strategy.", result: "Intelligence + Dexterity" },
      B: { label: "With strength and arcane focus.", result: "Intelligence + Strength" }
    }
  },

  "Arcane Trickster Rogue": {
    question: "How do you apply your cunning?",
    options: {
      A: { label: "With knowledge and agility.", result: "Intelligence + Dexterity" },
      B: { label: "With smarts and resilience.", result: "Intelligence + Constitution" }
    }
  },

  "Other Subclass Rogue": {
    question: "How do you prefer to solve problems?",
    options: {
      A: { label: "With speed and reflexes.", result: "Dexterity" },
      B: { label: "With endurance and persistence.", result: "Dexterity + Constitution" }
    }
  },

  "College of Glamour Bard": {
    question: "What is your greatest strength?",
    options: {
      A: { label: "Striking presence and magic.", result: "Charisma" }
    }
  },

  "College of Lore Bard": {
    question: "What is your greatest strength?",
    options: {
      A: { label: "Striking presence and magic.", result: "Charisma" }
    }
  },

  "College of Dance Bard": {
    question: "What is your style on stage and in battle?",
    options: {
      A: { label: "Expressive and versatile.", result: "Charisma + Dexterity" }
    }
  },

  "College of Valor Bard": {
    question: "What is your style on stage and in battle?",
    options: {
      A: { label: "Expressive and versatile.", result: "Charisma + Dexterity" }
    }
  }
};

window.styleQuiz = window.styleQuiz || { pt: styleQuizPT, en: styleQuizEN };

const subCategoryPT = {
  Cleric: {
    name: 'Ordem Divina',
    question: 'Que caminho sagrado melhor reflete a tua devoção?',
    options: {
      Protector: 'Defender e inspirar quem te rodeia',
      Thaumaturge: 'Invocar milagres para curar e apoiar'
    }
  },
  Druid: {
    name: 'Ordem Primal',
    question: 'Que tipo de ligação natural define o teu caminho?',
    options: {
      Warden: 'Guarda a vida selvagem com dedicação feroz',
      Magician: 'Domina os segredos e rituais da natureza'
    }
  },
  Warlock: {
    name: 'Vínculo Sombrio',
    question: 'Que laço profundo te liga ao teu patrono?',
    options: {
      'Pact of the Tome': 'Um tomo antigo cheio de mistérios',
      'Pact of the Chain': 'Uma corrente etérea que invoca uma criatura aliada',
      'Pact of the Blade': 'Uma arma consagrada ao teu patrono',
      None: 'Prefiro um acordo simples, sem laços extras'
    }
  }
};

const subCategoryEN = {
  Cleric: {
    name: 'Divine Order',
    question: 'Which sacred path best reflects your devotion?',
    options: {
      Protector: 'Shield and inspire those around you',
      Thaumaturge: 'Call forth miracles to heal and aid'
    }
  },
  Druid: {
    name: 'Primal Order',
    question: 'What kind of natural bond defines your path?',
    options: {
      Warden: 'Guard the wilds with unwavering dedication',
      Magician: 'Master nature\'s secrets and rituals'
    }
  },
  Warlock: {
    name: 'Mystic Bond',
    question: 'What deep bond ties you to your patron?',
    options: {
      'Pact of the Tome': 'An ancient tome filled with secrets',
      'Pact of the Chain': 'An ethereal chain granting a companion',
      'Pact of the Blade': 'A dedicated weapon channelling power',
      None: 'I prefer a simpler deal without extra ties'
    }
  }
};

const familiarPT = {
  question: 'Que tipo de companheiro mágico te segue?',
  options: {
    Imp: 'Um diabrete travesso de asas escuras',
    Pseudodragon: 'Um pequeno dragão de escamas cintilantes',
    Quasit: 'Criatura diminuta de garras e risos sinistros',
    Skeleton: 'Esqueleto obediente que nunca se cansa',
    'Slaad Tadpole': 'Girino estranho de olhos curiosos',
    'Sphinx of Wonder': 'Miniatura de esfinge que guarda enigmas',
    Sprite: 'Fada luminosa de voo gracioso',
    'Venomous Snake': 'Serpente elegante de olhar hipnótico'
  }
};

const familiarEN = {
  question: 'Which magical companion follows you?',
  options: {
    Imp: 'A mischievous fiend with leathery wings',
    Pseudodragon: 'A tiny dragon with shimmering scales',
    Quasit: 'A small clawed creature that giggles wickedly',
    Skeleton: 'An obedient skeleton that never tires',
    'Slaad Tadpole': 'A curious tadpole with quick jumps',
    'Sphinx of Wonder': 'A miniature sphinx whispering riddles',
    Sprite: 'A glowing sprite fluttering with grace',
    'Venomous Snake': 'A sleek serpent with a mesmerizing gaze'
  }
};

window.subCategoryQuiz = window.subCategoryQuiz || {
  pt: subCategoryPT,
  en: subCategoryEN
};

window.familiarQuiz = window.familiarQuiz || { pt: familiarPT, en: familiarEN };

const specialStylePT = {
  Ranger: {
    question: 'Como usas as tuas habilidades naturais?',
    options: {
      Yes: 'Tenho uma ligação mágica com a natureza.',
      No: 'Sou um caçador ágil, experiente e prático.'
    }
  },
  Paladin: {
    question: 'Qual é a origem do teu poder sagrado?',
    options: {
      Yes: 'A minha fé oferece-me um pocuo de magia divina.',
      No: 'O meu estilo de combate e proeza militar define-me.'
    }
  }
};

const specialStyleEN = {
  Ranger: {
    question: 'Do you want to weave natural magic into your fighting style?',
    options: {
      Yes: 'Yes, let my strikes be guided by nature',
      No: 'No, I\'ll stick to traditional tactics'
    }
  },
  Paladin: {
    question: 'Do you wish to infuse each attack with your faith?',
    options: {
      Yes: 'Yes, I want to fight with blessed power',
      No: 'No, I prefer relying purely on skill'
    }
  }
};

window.specialStyleQuiz = window.specialStyleQuiz || { pt: specialStylePT, en: specialStyleEN };
