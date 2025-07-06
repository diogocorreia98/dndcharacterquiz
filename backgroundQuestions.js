const step3pt = {
  title: 'Que Background Combina com a Tua Classe?',
  intro: '',
  classes: {
    Barbarian: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Mais vida e resistência', result: 'Farmer (Tough)' },
          B: { label: 'Dano físico extra', result: 'Soldier (Savage Attacker)' },
          C: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' },
          D: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
          E: { label: 'Várias habilidades', result: 'Artisan (Skilled)' }
        }
      }
    },
    Rogue: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Iniciativa e reação rápida', result: 'Criminal (Alert)' },
          B: { label: 'Magia básica e suporte', result: 'Guide (Magic Initiate - Druid)' },
          C: { label: 'Várias habilidades', next: {
              question: 'Que tipo de habilidades te interessam?',
              options: {
                A: { label: 'Engano, trapaça', result: 'Charlatan (Skilled)' },
                B: { label: 'Investigação e escrita', result: 'Scribe (Skilled)' }
              }
            } },
          D: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' }
        }
      }
    },
    Cleric: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Cura habilidosa', result: 'Hermit (Healer)' },
          C: { label: 'Reagir rapidamente', result: 'Guard (Alert)' },
          D: { label: 'Sorte e versatilidade', result: 'Wayfarer (Lucky)' },
          E: { label: 'Várias habilidades', result: 'Scribe (Skilled)' }
        }
      }
    },
    Druid: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Guide (Magic Initiate - Druid)' },
          B: { label: 'Cura habilidosa', result: 'Hermit (Healer)' },
          C: { label: 'Reagir rapidamente', result: 'Guard (Alert)' },
          D: { label: 'Sorte e versatilidade', result: 'Wayfarer (Lucky)' },
          E: { label: 'Várias habilidades', result: 'Farmer (Skilled)' }
        }
      }
    },
    Bard: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' },
          C: { label: 'Habilidades sociais fortes', result: 'Charlatan (Skilled)' },
          D: { label: 'Ser músico ou artista', result: 'Entertainer (Musician)' },
          E: { label: 'Várias habilidades', result: 'Scribe (Skilled)' }
        }
      }
    },
    Sorcerer: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Sage (Magic Initiate - Wizard)' },
          B: { label: 'Sorte e improviso', result: 'Merchant (Lucky)' },
          C: { label: 'Habilidades sociais fortes', result: 'Charlatan (Skilled)' },
          D: { label: 'Várias habilidades', result: 'Scribe (Skilled)' }
        }
      }
    },
    Warlock: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' },
          C: { label: 'Habilidades sociais fortes', result: 'Charlatan (Skilled)' },
          D: { label: 'Várias habilidades', result: 'Scribe (Skilled)' }
        }
      }
    },
    Wizard: {
      tree: {
        question: 'Que tipo de talento te parece mais interessante?',
        options: {
          A: { label: 'Acesso a magia adicional', next: {
              question: 'Que tipo de magia gostavas de ganhar?',
              options: {
                A: { label: 'Arcana (truques e feitiços adicionais)', result: 'Sage (Magic Initiate - Wizard)' },
                B: { label: 'Magia natural (cura e suporte)', result: 'Guide (Magic Initiate - Druid)' },
                C: { label: 'Magia divina (bênçãos e utilidade)', result: 'Acolyte (Magic Initiate - Cleric)' }
              }
            } },
          B: { label: 'Sorte e improviso', next: {
              question: 'Em que situações queres confiar na sorte?',
              options: {
                A: { label: 'Situações sociais ou arriscadas', result: 'Wayfarer (Lucky)' },
                B: { label: 'Exploração e negócios', result: 'Merchant (Lucky)' }
              }
            } },
          C: { label: 'Várias habilidades', next: {
              question: 'Que tipo de habilidades te interessam?',
              options: {
                A: { label: 'Conhecimento e escrita', result: 'Scribe (Skilled)' },
                B: { label: 'Engano, trapaça', result: 'Charlatan (Skilled)' }
              }
            } },
          D: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
          E: { label: 'Capacidade de curar', result: 'Hermit (Healer)' }
        }
      }
    },
    Monk: {
      tree: {
        question: 'Preferes equilibrar velocidade e consciência espiritual, ou focar-te só num desses aspetos?',
        options: {
          A: { label: 'Quero combinar agilidade com instinto interior.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Movimento e velocidade', result: 'Wayfarer (Lucky)' },
                B: { label: 'Consciência e suporte', result: 'Hermit (Healer)' },
                C: { label: 'Várias habilidades', result: 'Scribe (Skilled)' }
              }
            } },
          B: { label: 'Prefiro focar-me só na agilidade física.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Iniciativa rápida e furtividade', result: 'Criminal (Alert)' },
                B: { label: 'Movimento e sorte', result: 'Wayfarer (Lucky)' }
              }
            } },
          C: { label: 'Prefiro focar-me só na clareza mental e percepção.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Perceção e intuição', result: 'Guard (Alert)' },
                B: { label: 'Apoiar e curar', result: 'Hermit (Healer)' }
              }
            } }
        }
      }
    },
    Paladin: {
      tree: {
        question: 'Queres ser um guerreiro carismático e inspirador, ou preferes focar-te apenas na força ou na presença?',
        options: {
          A: { label: 'Quero unir força bruta com presença inspiradora.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Curar e proteger aliados', result: 'Acolyte (Magic Initiate - Cleric)' },
                B: { label: 'Ter presença e sorte', result: 'Wayfarer (Lucky)' },
                C: { label: 'Várias habilidades úteis', result: 'Charlatan (Skilled)' }
              }
            } },
          B: { label: 'Prefiro ser um defensor forte e direto.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Mais vida e resistência', result: 'Farmer (Tough)' },
                B: { label: 'Dano físico extra', result: 'Soldier (Savage Attacker)' }
              }
            } },
          C: { label: 'Prefiro ser alguém inspirador e eloquente.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Presença social e magia extra', result: 'Entertainer (Musician)' },
                B: { label: 'Carisma e sorte', result: 'Merchant (Lucky)' }
              }
            } }
        }
      }
    },
    Ranger: {
      tree: {
        question: 'Queres ser tanto ágil como atento ao mundo à tua volta, ou preferes focar-te num desses lados?',
        options: {
          A: { label: 'Quero ser rápido e atento à natureza.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Explorar e sobreviver', result: 'Guide (Magic Initiate - Druid)' },
                B: { label: 'Agir rápido e com sorte', result: 'Wayfarer (Lucky)' },
                C: { label: 'Várias habilidades úteis', result: 'Scribe (Skilled)' }
              }
            } },
          B: { label: 'Prefiro mover-me com leveza e rapidez.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Furtividade e ferramentas', result: 'Criminal (Alert)' },
                B: { label: 'Movimento e sorte', result: 'Wayfarer (Lucky)' }
              }
            } },
          C: { label: 'Prefiro seguir os meus instintos e sentidos.', next: {
              question: 'Que tipo de talento te parece mais interessante?',
              options: {
                A: { label: 'Conexão com a natureza', result: 'Guide (Magic Initiate - Druid)' },
                B: { label: 'Intuição e cura', result: 'Hermit (Healer)' }
              }
            } }
        }
      }
    },
    Fighter: {
      subclasses: {
        'Battle Master': {
          tree: {
            question: 'Qual é o teu atributo principal?',
            options: {
              A: { label: 'Strength', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Vida extra', result: 'Farmer (Tough)' },
                    C: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    D: { label: 'Dano físico', result: 'Soldier (Savage Attacker)' }
                  }
                } },
              B: { label: 'Dexterity', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Charlatan (Skilled)' },
                    B: { label: 'Iniciativa rápida', result: 'Criminal (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' }
                  }
                } }
            }
          }
        },
        'Champion': {
          tree: {
            question: 'Qual é o teu atributo principal?',
            options: {
              A: { label: 'Strength', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Vida extra', result: 'Farmer (Tough)' },
                    B: { label: 'Dano físico', result: 'Soldier (Savage Attacker)' }
                  }
                } },
              B: { label: 'Dexterity', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Charlatan (Skilled)' },
                    B: { label: 'Iniciativa rápida', result: 'Criminal (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' }
                  }
                } }
            }
          }
        },
        'Eldritch Knight': {
          tree: {
            question: 'Qual é o teu estilo de combate físico?',
            options: {
              A: { label: 'Armas pesadas, escudo, armadura pesada', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Armas leves, arco, mobilidade', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Scribe (Skilled)' },
                    B: { label: 'Magia extra', result: 'Guide (Magic Initiate - Druid)' }
                  }
                } }
            }
          }
        },
        'Psi Warrior': {
          tree: {
            question: 'Qual é o teu estilo de combate físico?',
            options: {
              A: { label: 'Armas pesadas, escudo, armadura pesada', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Armas leves, arco, mobilidade', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Scribe (Skilled)' },
                    B: { label: 'Magia extra', result: 'Guide (Magic Initiate - Druid)' }
                  }
                } }
            }
          }
        },
        'Dungeoneer': {
          tree: {
            question: 'Qual é o teu estilo de combate físico?',
            options: {
              A: { label: 'Armas pesadas, escudo, armadura pesada', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Armas leves, arco, mobilidade', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Habilidades úteis', result: 'Scribe (Skilled)' },
                    B: { label: 'Magia extra', result: 'Guide (Magic Initiate - Druid)' }
                  }
                } }
            }
          }
        }
      }
    }
  }
};
const step3en = {
  title: 'Which Background Fits Your Class?',
  intro: '',
  classes: {
    Barbarian: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'More hit points and toughness', result: 'Farmer (Tough)' },
          B: { label: 'Extra physical damage', result: 'Soldier (Savage Attacker)' },
          C: { label: 'Luck and improvisation', result: 'Wayfarer (Lucky)' },
          D: { label: 'Quick initiative', result: 'Guard (Alert)' },
          E: { label: 'Many skills', result: 'Artisan (Skilled)' }
        }
      }
    },
    Rogue: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Quick reactions and initiative', result: 'Criminal (Alert)' },
          B: { label: 'Basic magic and support', result: 'Guide (Magic Initiate - Druid)' },
          C: { label: 'Many skills', next: {
              question: 'Which kind of skills interest you?',
              options: {
                A: { label: 'Deception, trickery', result: 'Charlatan (Skilled)' },
                B: { label: 'Investigation and writing', result: 'Scribe (Skilled)' }
              }
            } },
          D: { label: 'Luck and improvisation', result: 'Wayfarer (Lucky)' }
        }
      }
    },
    Cleric: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Complementary magic', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Skilled healing', result: 'Hermit (Healer)' },
          C: { label: 'React quickly', result: 'Guard (Alert)' },
          D: { label: 'Luck and versatility', result: 'Wayfarer (Lucky)' },
          E: { label: 'Many skills', result: 'Scribe (Skilled)' }
        }
      }
    },
    Druid: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Complementary magic', result: 'Guide (Magic Initiate - Druid)' },
          B: { label: 'Skilled healing', result: 'Hermit (Healer)' },
          C: { label: 'React quickly', result: 'Guard (Alert)' },
          D: { label: 'Luck and versatility', result: 'Wayfarer (Lucky)' },
          E: { label: 'Many skills', result: 'Farmer (Skilled)' }
        }
      }
    },
    Bard: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Complementary magic', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Luck and improvisation', result: 'Wayfarer (Lucky)' },
          C: { label: 'Strong social skills', result: 'Charlatan (Skilled)' },
          D: { label: 'Be a musician or performer', result: 'Entertainer (Musician)' },
          E: { label: 'Many skills', result: 'Scribe (Skilled)' }
        }
      }
    },
    Sorcerer: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Complementary magic', result: 'Sage (Magic Initiate - Wizard)' },
          B: { label: 'Luck and improvisation', result: 'Merchant (Lucky)' },
          C: { label: 'Strong social skills', result: 'Charlatan (Skilled)' },
          D: { label: 'Many skills', result: 'Scribe (Skilled)' }
        }
      }
    },
    Warlock: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Complementary magic', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Luck and improvisation', result: 'Wayfarer (Lucky)' },
          C: { label: 'Strong social skills', result: 'Charlatan (Skilled)' },
          D: { label: 'Many skills', result: 'Scribe (Skilled)' }
        }
      }
    },
    Wizard: {
      tree: {
        question: 'Which feat sounds most appealing?',
        options: {
          A: { label: 'Access to extra magic', next: {
              question: 'What kind of magic would you like to gain?',
              options: {
                A: { label: 'Arcane (extra cantrips and spells)', result: 'Sage (Magic Initiate - Wizard)' },
                B: { label: 'Natural magic (healing and support)', result: 'Guide (Magic Initiate - Druid)' },
                C: { label: 'Divine magic (blessings and utility)', result: 'Acolyte (Magic Initiate - Cleric)' }
              }
            } },
          B: { label: 'Luck and improvisation', next: {
              question: 'When do you want to rely on luck?',
              options: {
                A: { label: 'Social or risky situations', result: 'Wayfarer (Lucky)' },
                B: { label: 'Exploration and business', result: 'Merchant (Lucky)' }
              }
            } },
          C: { label: 'Many skills', next: {
              question: 'Which kind of skills interest you?',
              options: {
                A: { label: 'Knowledge and writing', result: 'Scribe (Skilled)' },
                B: { label: 'Deception, trickery', result: 'Charlatan (Skilled)' }
              }
            } },
          D: { label: 'Quick initiative', result: 'Guard (Alert)' },
          E: { label: 'Ability to heal', result: 'Hermit (Healer)' }
        }
      }
    },
    Monk: {
      tree: {
        question: 'Do you prefer to balance speed and spiritual awareness, or focus on just one?',
        options: {
          A: { label: 'Combine agility with inner instinct.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Movement and speed', result: 'Wayfarer (Lucky)' },
                B: { label: 'Awareness and support', result: 'Hermit (Healer)' },
                C: { label: 'Many skills', result: 'Scribe (Skilled)' }
              }
            } },
          B: { label: 'Focus only on physical agility.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Quick initiative and stealth', result: 'Criminal (Alert)' },
                B: { label: 'Movement and luck', result: 'Wayfarer (Lucky)' }
              }
            } },
          C: { label: 'Focus only on mental clarity and perception.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Perception and intuition', result: 'Guard (Alert)' },
                B: { label: 'Support and healing', result: 'Hermit (Healer)' }
              }
            } }
        }
      }
    },
    Paladin: {
      tree: {
        question: 'Do you want to be a charismatic, inspiring warrior, or focus solely on strength or presence?',
        options: {
          A: { label: 'Combine brute strength with inspiring presence.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Heal and protect allies', result: 'Acolyte (Magic Initiate - Cleric)' },
                B: { label: 'Presence and luck', result: 'Wayfarer (Lucky)' },
                C: { label: 'Many useful skills', result: 'Charlatan (Skilled)' }
              }
            } },
          B: { label: 'Be a strong, straightforward defender.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'More hit points and toughness', result: 'Farmer (Tough)' },
                B: { label: 'Extra physical damage', result: 'Soldier (Savage Attacker)' }
              }
            } },
          C: { label: 'Be an inspiring and eloquent figure.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Social presence and extra magic', result: 'Entertainer (Musician)' },
                B: { label: 'Charisma and luck', result: 'Merchant (Lucky)' }
              }
            } }
        }
      }
    },
    Ranger: {
      tree: {
        question: 'Do you want to be both agile and aware of the world around you, or focus on one side?',
        options: {
          A: { label: 'Be quick and attuned to nature.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Explore and survive', result: 'Guide (Magic Initiate - Druid)' },
                B: { label: 'Act quickly with luck', result: 'Wayfarer (Lucky)' },
                C: { label: 'Many useful skills', result: 'Scribe (Skilled)' }
              }
            } },
          B: { label: 'Move lightly and swiftly.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Stealth and tools', result: 'Criminal (Alert)' },
                B: { label: 'Movement and luck', result: 'Wayfarer (Lucky)' }
              }
            } },
          C: { label: 'Follow your instincts and senses.', next: {
              question: 'Which feat sounds most appealing?',
              options: {
                A: { label: 'Connection with nature', result: 'Guide (Magic Initiate - Druid)' },
                B: { label: 'Intuition and healing', result: 'Hermit (Healer)' }
              }
            } }
        }
      }
    },
    Fighter: {
      subclasses: {
        'Battle Master': {
          tree: {
            question: 'What is your main attribute?',
            options: {
              A: { label: 'Strength', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Artisan (Crafter)' },
                    B: { label: 'Extra hit points', result: 'Farmer (Tough)' },
                    C: { label: 'Quick initiative', result: 'Guard (Alert)' },
                    D: { label: 'Deal physical damage', result: 'Soldier (Savage Attacker)' }
                  }
                } },
              B: { label: 'Dexterity', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Charlatan (Skilled)' },
                    B: { label: 'Quick initiative', result: 'Criminal (Alert)' },
                    C: { label: 'Luck and improvisation', result: 'Wayfarer (Lucky)' }
                  }
                } }
            }
          }
        },
        'Champion': {
          tree: {
            question: 'What is your main attribute?',
            options: {
              A: { label: 'Strength', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Extra hit points', result: 'Farmer (Tough)' },
                    B: { label: 'Deal physical damage', result: 'Soldier (Savage Attacker)' }
                  }
                } },
              B: { label: 'Dexterity', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Charlatan (Skilled)' },
                    B: { label: 'Quick initiative', result: 'Criminal (Alert)' },
                    C: { label: 'Luck and improvisation', result: 'Wayfarer (Lucky)' }
                  }
                } }
            }
          }
        },
        'Eldritch Knight': {
          tree: {
            question: 'What is your physical fighting style?',
            options: {
              A: { label: 'Heavy weapons, shield, heavy armour', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Artisan (Crafter)' },
                    B: { label: 'Quick initiative', result: 'Guard (Alert)' },
                    C: { label: 'Luck and improvisation', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Light weapons, bow, mobility', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Scribe (Skilled)' },
                    B: { label: 'Extra magic', result: 'Guide (Magic Initiate - Druid)' }
                  }
                } }
            }
          }
        },
        'Psi Warrior': {
          tree: {
            question: 'What is your physical fighting style?',
            options: {
              A: { label: 'Heavy weapons, shield, heavy armour', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Artisan (Crafter)' },
                    B: { label: 'Quick initiative', result: 'Guard (Alert)' },
                    C: { label: 'Luck and improvisation', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Light weapons, bow, mobility', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Scribe (Skilled)' },
                    B: { label: 'Extra magic', result: 'Guide (Magic Initiate - Druid)' }
                  }
                } }
            }
          }
        },
        'Dungeoneer': {
          tree: {
            question: 'What is your physical fighting style?',
            options: {
              A: { label: 'Heavy weapons, shield, heavy armour', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Artisan (Crafter)' },
                    B: { label: 'Quick initiative', result: 'Guard (Alert)' },
                    C: { label: 'Luck and improvisation', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Light weapons, bow, mobility', next: {
                  question: 'What would you like to do outside combat?',
                  options: {
                    A: { label: 'Useful skills', result: 'Scribe (Skilled)' },
                    B: { label: 'Extra magic', result: 'Guide (Magic Initiate - Druid)' }
                  }
                } }
            }
          }
        }
      }
    }
  }
};
