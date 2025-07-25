const step1pt = {
  "title": "Que espécie é a tua personagem?",
  "tree": {
    "question": "Qual é a altura da tua personagem?",
    "options": {
      "A": {
        "label": "Muito Baixa (até 1,00 m) – Tão pequena como um banco de taverna ou uma mochila",
        "next": {
          "question": "Qual destas descrições corresponde melhor à tua personagem?",
          "options": {
            "Goblin": {
              "label": "Orelhas pontiagudas, olhos travessos e pés ligeiros; escapa facilmente ao perigo e surpreende com ataques astutos.",
              "result": "Goblin"
            },
            "Fairy": {
              "label": "Minúscula criatura alada, envolta em brilho etéreo; dança pelos ares e invoca encantamentos feéricos.",
              "result": "Fairy"
            },
            "Kenku": {
              "label": "Corpo encurvado e coberto de penas escuras; observa tudo, imita tudo, esquece nada.",
              "result": "Kenku"
            },
            "Kobold": {
              "label": "Reptilóide pequeno com olhar ardente; grita com fervor dracónico e inspira ataques certeiros.",
              "result": "Kobold"
            }
          }
        }
      },
      "B": {
        "label": "Baixa (1,01 m – 1,50 m) – Da altura de uma mesa de taverna ou do peito de um humano comum.",
        "next": {
          "question": "Que tipo de criatura se aproxima mais do teu aspeto?",
          "options": {
            "Animal": {
              "label": "Animal",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Harengon": {
                    "label": "Pernas fortes de coelho e energia irrequieta; reage num piscar de olhos e salta para longe do perigo.",
                    "result": "Harengon"
                  },
                  "Kenku": {
                    "label": "Corpo encurvado e coberto de penas escuras; observa tudo, imita tudo, esquece nada.",
                    "result": "Kenku"
                  },
                  "Kobold": {
                    "label": "Reptilóide pequeno com olhar ardente; grita com fervor dracónico e inspira ataques certeiros.",
                    "result": "Kobold"
                  }
                }
              }
            },
            "Humanoide": {
              "label": "Humanoide",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Dwarf": {
                    "label": "Corpo robusto, barba cerrada e olhos que já viram muita pedra; firme como rocha e resistente como ferro.",
                    "result": "Dwarf"
                  },
                  "Halfling": {
                    "label": "Pés descalços, sorriso caloroso e coração leve; move-se com graça e surpreende com sorte inesperada.",
                    "result": "Halfling"
                  },
                  "Gnome": {
                    "label": "Mãos manchadas de tinta e ferramentas nos bolsos; engenhoso criador de bugigangas encantadas.",
                    "result": "Gnome"
                  }
                }
              }
            }
          }
        }
      },
      "C": {
        "label": "Média (1,51 m – 1,80 m) – Aproximadamente da altura de um humano comum.",
        "next": {
          "question": "Qual destas categorias descreve melhor a tua personagem?",
          "options": {
            "Animal ou híbrido": {
              "label": "Animal ou híbrido",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Tabaxi": {
                    "label": "Rosto felino e movimentos silenciosos; olhos atentos e garras afiadas prontas para escalar ou atacar.",
                    "result": "Tabaxi"
                  },
                  "Shifter": {
                    "label": "Traços ferozes e garras prontas a surgir; transforma-se em fera viva quando o perigo chama.",
                    "result": "Shifter"
                  },
                  "Satyr": {
                    "label": "Cornos enrolados e pernas de cabra; salta alegremente e encanta com presença feérica.",
                    "result": "Satyr"
                  },
                  "Yuan-ti": {
                    "label": "Olhos hipnóticos e corpo esguio como serpente; resiste a venenos e encanta com palavras sibilantes.",
                    "result": "Yuan-ti"
                  },
                  "Tortle": {
                    "label": "Casco duro e olhos sábios; nada e respira como uma tartaruga ancestral e resiste pacientemente ao mundo.",
                    "result": "Tortle"
                  }
                }
              }
            },
            "Construto, elemental ou planta": {
              "label": "Construto, elemental ou planta",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Genasi": {
                    "label": "Corpo forjado de pedra, fogo, ar ou água; cada passo ecoa com poder elemental ancestral.",
                    "result": "Genasi"
                  },
                  "Mandrake": {
                    "label": "Tronco vivo coberto de casca; cresce com as estações e enraíza-se na magia da terra.",
                    "result": "Mandrake"
                  },
                  "Geppettin (Marionette)": {
                    "label": "Corpo articulado feito de madeira e cordas; parece uma marioneta animada com brilho curioso.",
                    "result": "Geppettin (Marionette)"
                  }
                }
              }
            }
          }
        }
      },
      "D": {
        "label": "Alta (1,81 m – 2,10 m) – Acima da altura comum de um humano como um estandarte de guerra ou um armário de armas.",
        "next": {
          "question": "Qual é a origem ou natureza da personagem?",
          "options": {
            "Reptiliana ou bestial": {
              "label": "Reptiliana ou bestial",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Dragonborn": {
                    "label": "Corpo escamoso e imponente com sopro mágico; resiste a elementos e impõe-se em combate.",
                    "result": "Dragonborn"
                  },
                  "Lizardfolk": {
                    "label": "Rosto de lagarto e crista dorsal; caça com calma instintiva e pele tão dura quanto couro.",
                    "result": "Lizardfolk"
                  },
                  "Minotaur": {
                    "label": "Cabeça de touro e corpo de guerreiro; investe com força bruta e nunca se perde no labirinto.",
                    "result": "Minotaur"
                  },
                  "Yuan-ti": {
                    "label": "Olhos hipnóticos e corpo esguio como serpente; resiste a venenos e encanta com palavras sibilantes.",
                    "result": "Yuan-ti"
                  },
                  "Satyr": {
                    "label": "Cornos enrolados e pernas de cabra; salta alegremente e encanta com presença feérica.",
                    "result": "Satyr"
                  }
                }
              }
            },
            "Psiónica ou exótica": {
              "label": "Psiónica ou exótica",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Orc": {
                    "label": "Figura tribal de músculos salientes e presas à mostra; sobrevive com instinto e força crua.",
                    "result": "Orc"
                  },
                  "Githyanki": {
                    "label": "Pele pálida e olhar distante; mistura acrobacia com magia psiónica vinda do além.",
                    "result": "Githyanki"
                  },
                  "Githzerai": {
                    "label": "Movimentos meditativos e aura disciplinada; molda a realidade com pura força mental.",
                    "result": "Githzerai"
                  },
                  "Mandrake": {
                    "label": "Tronco vivo coberto de casca; cresce com as estações e enraíza-se na magia da terra.",
                    "result": "Mandrake"
                  },
                  "Elf": {
                    "label": "Figura graciosa de orelhas longas e olhos atentos; move-se com leveza e dorme em meditação.",
                    "result": "Elf"
                  }
                }
              }
            }
          }
        }
      },
      "E": {
        "label": "Muito Alta (acima de 2,10 m) – Tão alta como uma carroça empilhada ou uma estante de uma biblioteca arcana.",
        "next": {
          "question": "Que tipo de figura representa melhor a personagem?",
          "options": {
            "Monstruosa ou feroz": {
              "label": "Monstruosa ou feroz",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Bugbear": {
                    "label": "Figura peluda e ameaçadora com braços longos; ataca com força brutal antes que o inimigo reaja.",
                    "result": "Bugbear"
                  },
                  "Centaur": {
                    "label": "Corpo de cavalo e torso de guerreiro; galopa livremente e dispara com precisão.",
                    "result": "Centaur"
                  }
                }
              }
            },
            "Gigante ou mística": {
              "label": "Gigante ou mística",
              "next": {
                "question": "Qual destas descrições corresponde melhor à tua personagem?",
                "options": {
                  "Goliath": {
                    "label": "Pele marcada por runas e músculos de pedra; desafia os deuses em força e resistência.",
                    "result": "Goliath"
                  },
                  "Firbolg": {
                    "label": "Figura gentil de rosto bovino e aura natural; conversa com plantas e esconde-se com magia.",
                    "result": "Firbolg"
                  },
                  "Mandrake": {
                    "label": "Tronco vivo coberto de casca; cresce com as estações e enraíza-se na magia da terra.",
                    "result": "Mandrake"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const step1en = {
  title: 'Which species is your character?',
  tree: {
    question: 'How tall is your character?',
    options: {
      A: {
        label: 'Very Short (up to 1.00 m) – As small as a tavern bench or a backpack',
        next: {
          question: 'Which of these descriptions best matches your character?',
          options: {
            Goblin: {
              label: 'Pointy ears, mischievous eyes and quick feet; easily slips past danger and strikes with cunning surprise.',
              result: 'Goblin'
            },
            Fairy: {
              label: 'Tiny winged creature bathed in ethereal glow; dances through the air and invokes fey enchantments.',
              result: 'Fairy'
            },
            Kenku: {
              label: 'Hunched body covered in dark feathers; watches everything, imitates everything, forgets nothing.',
              result: 'Kenku'
            },
            Kobold: {
              label: 'Small reptilian with a fiery stare; cries out with draconic zeal and inspires precise attacks.',
              result: 'Kobold'
            }
          }
        }
      },
      B: {
        label: 'Short (1.01 m – 1.50 m) – About as tall as a tavern table or a human\'s chest.',
        next: {
          question: 'What type of creature most resembles your appearance?',
          options: {
            Animal: {
              label: 'Animal',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Harengon: {
                  label: 'Strong rabbit legs and restless energy; reacts in a blink and leaps away from danger.',
                  result: 'Harengon'
                },
                Kenku: {
                  label: 'Hunched body covered in dark feathers; watches everything, imitates everything, forgets nothing.',
                  result: 'Kenku'
                },
                Kobold: {
                  label: 'Small reptilian with a fiery stare; cries out with draconic zeal and inspires precise attacks.',
                  result: 'Kobold'
                }
              }
            },
            Humanoid: {
              label: 'Humanoid',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Dwarf: {
                  label: 'Stout body, thick beard and eyes that have seen much stone; steadfast as rock and tough as iron.',
                  result: 'Dwarf'
                },
                Halfling: {
                  label: 'Bare feet, warm smile and light heart; moves with grace and surprises with unexpected luck.',
                  result: 'Halfling'
                },
                Gnome: {
                  label: 'Ink-stained hands and tools in pockets; ingenious maker of enchanted contraptions.',
                  result: 'Gnome'
                }
              }
            }
          }
        }
      },
      C: {
        label: 'Medium (1.51 m – 1.80 m) – Roughly the height of an average human.',
        next: {
          question: 'Which of these categories best describes your character?',
          options: {
            Humanoid: {
              label: 'Humanoid',
              question: "What is your character's origin or leaning?",
              options: {
                'Normal or Adaptable': {
                  label: 'Normal or Adaptable',
                  question: 'Which of these descriptions best matches your character?',
                  options: {
                    Human: {
                      label: 'Common appearance but adaptable to any role; learns quickly and fits any adventure.',
                      result: 'Human'
                    },
                    Changeling: {
                      label: 'Androgynous silhouette with smooth skin and blank eyes; changes shape like swapping masks.',
                      result: 'Changeling'
                    },
                    Elf: {
                      label: 'Graceful figure with long ears and keen eyes; moves lightly and rests in meditation.',
                      result: 'Elf'
                    }
                  }
                },
                'Celestial or Infernal': {
                  label: 'Celestial or Infernal',
                  question: 'Which of these descriptions best matches your character?',
                  options: {
                    Aasimar: {
                      label: 'Serene presence with eyes that shine; heals with a touch and glows with celestial power.',
                      result: 'Aasimar'
                    },
                    Tiefling: {
                      label: 'Vivid skin, elegant horns and a serpentine tail; channels inner magic with burning intensity.',
                      result: 'Tiefling'
                    }
                  }
                },
                'Fierce or Tribal': {
                  label: 'Fierce or Tribal',
                  question: 'Which of these descriptions best matches your character?',
                  options: {
                    Orc: {
                      label: 'Tribal figure of bulging muscles and tusks on display; survives by instinct and raw power.',
                      result: 'Orc'
                    },
                    Hobgoblin: {
                      label: 'Disciplined posture and calculating eyes; a natural strategist with ancient magical ties.',
                      result: 'Hobgoblin'
                    }
                  }
                }
              }
            },
            'Animal or hybrid': {
              label: 'Animal or hybrid',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Tabaxi: {
                  label: 'Feline face and silent movements; sharp eyes and claws ready to climb or strike.',
                  result: 'Tabaxi'
                },
                Shifter: {
                  label: 'Feral traits and ready claws; becomes a living beast when danger calls.',
                  result: 'Shifter'
                },
                Satyr: {
                  label: 'Curled horns and goat legs; bounds with joy and enchants with fey presence.',
                  result: 'Satyr'
                },
                'Yuan-ti': {
                  label: 'Hypnotic eyes and slender serpent body; resists poison and charms with sibilant words.',
                  result: 'Yuan-ti'
                },
                Tortle: {
                  label: 'Hard shell and wise eyes; swims and breathes like an ancient turtle and patiently endures the world.',
                  result: 'Tortle'
                }
              }
            },
            'Construct, elemental or plant': {
              label: 'Construct, elemental or plant',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Genasi: {
                  label: 'Body forged of stone, fire, air or water; each step echoes with ancient elemental power.',
                  result: 'Genasi'
                },
                Mandrake: {
                  label: 'Living trunk covered in bark; grows with the seasons and roots itself in earth magic.',
                  result: 'Mandrake'
                },
                'Geppettin (Marionette)': {
                  label: 'Jointed body of wood and strings; appears like a curious animated puppet.',
                  result: 'Geppettin (Marionette)'
                }
              }
            }
          }
        }
      },
      D: {
        label: 'Tall (1.81 m – 2.10 m) – Above the common human height like a war banner or a weapon rack.',
        next: {
          question: "What is the character's origin or nature?",
          options: {
            'Reptilian or bestial': {
              label: 'Reptilian or bestial',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Dragonborn: {
                  label: 'Scaled and imposing body with magical breath; resists elements and dominates in battle.',
                  result: 'Dragonborn'
                },
                Lizardfolk: {
                  label: 'Lizard face and dorsal crest; hunts with calm instinct and skin tough as leather.',
                  result: 'Lizardfolk'
                },
                Minotaur: {
                  label: 'Bull head and warrior body; charges with brute force and never loses the maze.',
                  result: 'Minotaur'
                },
                'Yuan-ti': {
                  label: 'Hypnotic eyes and serpentine body; resists poison and charms with sibilant words.',
                  result: 'Yuan-ti'
                },
                Satyr: {
                  label: 'Curled horns and goat legs; bounds with joy and enchants with fey presence.',
                  result: 'Satyr'
                }
              }
            },
            'Psionic or exotic': {
              label: 'Psionic or exotic',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Orc: {
                  label: 'Tribal figure of bulging muscles and tusks on display; survives by instinct and raw power.',
                  result: 'Orc'
                },
                Githyanki: {
                  label: 'Pale skin and distant stare; blends acrobatics with psionic magic from beyond.',
                  result: 'Githyanki'
                },
                Githzerai: {
                  label: 'Meditative movements and disciplined aura; shapes reality with sheer mental force.',
                  result: 'Githzerai'
                },
                Mandrake: {
                  label: 'Living trunk covered in bark; grows with the seasons and roots itself in earth magic.',
                  result: 'Mandrake'
                },
                Elf: {
                  label: 'Graceful figure with long ears and keen eyes; moves lightly and rests in meditation.',
                  result: 'Elf'
                }
              }
            }
          }
        }
      },
      E: {
        label: 'Very Tall (over 2.10 m) – As tall as a stacked wagon or a shelf in an arcane library.',
        next: {
          question: 'What type of figure best represents the character?',
          options: {
            'Monstrous or fierce': {
              label: 'Monstrous or fierce',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Bugbear: {
                  label: 'Hairy and menacing figure with long arms; strikes with brutal force before the foe can react.',
                  result: 'Bugbear'
                },
                Centaur: {
                  label: 'Horse body with a warrior\'s torso; gallops freely and shoots with precision.',
                  result: 'Centaur'
                }
              }
            },
            'Giant or mystical': {
              label: 'Giant or mystical',
              question: 'Which of these descriptions best matches your character?',
              options: {
                Goliath: {
                  label: 'Skin marked with runes and muscles of stone; challenges the gods in strength and endurance.',
                  result: 'Goliath'
                },
                Firbolg: {
                  label: 'Gentle figure with bovine features and a natural aura; speaks with plants and hides through magic.',
                  result: 'Firbolg'
                },
                Mandrake: {
                  label: 'Living trunk covered in bark; grows with the seasons and roots itself in earth magic.',
                  result: 'Mandrake'
                }
              }
            }
          }
        }
      }
    }
  }
};

const subQuestionsPT = {
  Elf: {
    question: 'Que tipo de elfo é a personagem?',
    options: {
      'High Elf': 'Elegante e de feições finas, tem afinidade natural com a magia arcana.',
      'Wood Elf': 'Ágil e discreto, de pele bronzeada e olhar atento, move-se com facilidade na natureza.',
      'Drow Elf': 'De pele escura e cabelo branco, vê no escuro e domina magia do Subterrâneo.',
      'Eladrin': {
        label: 'Beleza feérica em constante mutação; muda com as estações e transporta-se em clarões mágicos.',
        question: 'Que poder floresce quando a personagem se teleporta?',
        options: {
          'Spring Eladrin': 'De aparência viva e primaveril, leva um aliado consigo ao teletransportar-se.',
          'Summer Eladrin': 'Com cabelo flamejante e aura quente, queima inimigos ao chegar.',
          'Autumn Eladrin': 'De tons dourados e andar calmo, encanta os que estão por perto.',
          'Winter Eladrin': 'De pele pálida e olhos frios, provoca medo quando aparece.'
        }
      },
      'Shadar-kai': 'Pele pálida e olhar distante; move-se como uma sombra entre mundos e torna-se brevemente invulnerável.',
      'Sea Elf': 'Silhueta elegante com guelras e barbatanas; vive entre as marés e comunica com as criaturas do mar.'
    }
  },
  Genasi: {
    question: 'Que tipo de Genasi é a personagem?',
    options: {
      'Air Genasi': 'Cabelos flutuantes e passos leves, desloca-se com facilidade e respira ar puro mesmo em altitude.',
      'Earth Genasi': 'Pele rugosa como pedra, resiste a terreno difícil e mantém-se firme sob pressão.',
      'Fire Genasi': 'Veias brilhantes sob pele escura, emite calor e causa dano com um toque ardente.',
      'Water Genasi': 'Corpo fluido e olhos de mar, nada bem e respira debaixo de água.'
    }
  },
  'Geppettin (Plushie or Bisque)': {
    question: 'Que tipo de brinquedo vivo é a personagem?',
    options: {
      'Bisque Geppettin': 'Feito de porcelana pintada, delicado mas lança magia com estilo e graça.',
      'Plushie Geppettin': 'Feito de peluche macio, é adorável e aguenta mais do que parece.'
    }
  },
  Gnome: {
    question: 'Que tipo de gnomo é a personagem?',
    options: {
      'Forest Gnome': 'Pequeno e curioso, entende os animais e cria ilusões simples.',
      'Rock Gnome': 'Com mãos sujas de graxa, inventa engenhocas mágicas e práticas.',
      'Deep Gnome': 'De pele cinzenta e olhos grandes como pedras preciosas; move-se sem ser visto e resiste ao toque da magia.'
    }
  },
  Goliath: {
    question: 'Que tipo de poder herdou a personagem dos seus ancestrais gigantes?',
    options: {
      Defensivo: {
        question: 'Qual é a aparência e a força da personagem?',
        options: {
          'Stone Goliath': 'Com pele cinzenta e placas de pedra, resiste bem a danos físicos.',
          'Storm Goliath': 'Pele arroxeada com energia no corpo, retalia com trovões ao ser atingida.'
        }
      },
      Ofensivo: {
        question: 'Qual é a aparência e o estilo de ataque da personagem?',
        options: {
          'Hill Goliath': 'Pele acastanhada e corpo largo, usa força pura para deitar inimigos ao chão.',
          'Frost Goliath': 'Pele azul-clara e olhos frios, abranda os inimigos com ataques gelados.',
          'Fire Goliath': 'Veias brilhantes sob pele escura, causa dano extra com fogo.'
        }
      },
      Mobilidade: {
        result: 'Cloud Goliath'
      }
    }
  },
  Mandrake: {
    question: 'Que tipo de Mandrágora é a tua personagem?',
    options: {
      'Spring Mandrake': 'Com flores frescas e vinhas leves, derruba inimigos no ar.',
      'Summer Mandrake': 'De folhagem densa e robusta, puxa os inimigos para junto de si.',
      'Autumn Mandrake': 'Com folhas douradas e galhos secos, prende vários alvos de uma vez.',
      'Winter Mandrake': 'Coberta de gelo e seiva fria, liberta rajadas geladas com as suas vinhas.'
    }
  },
  Shifter: {
    question: 'Que traço selvagem desperta na transformação da personagem?',
    options: {
      'Beasthide Shifter': 'Com pele espessa e corpo forte, aguenta melhor os ataques.',
      'Longtooth Shifter': 'Presas salientes e olhar feroz, ataca com mordidas poderosas.',
      'Swiftstride Shifter': 'Elegante como um felino, move-se rápido e evita ser cercada.',
      'Wildhunt Shifter': 'Com olhos atentos e pose alerta, nunca é apanhada desprevenida.'
    }
  },
  Tiefling: {
    question: 'Que tipo de Tiefling é a tua personagem?',
    options: {
      'Abyssal Tiefling': 'Com chifres animalescos e aura instável, liberta energia caótica.',
      'Infernal Tiefling': 'De pele vermelha e olhos intensos, canaliza fogo com precisão.',
      'Chthonic Tiefling': 'Pele sombria e feições sérias, usa poderes ligados à morte e à sombra.'
    }
  },
  Dragonborn: {
    question: 'Que tipo de sopro dracónico possui a personagem?',
    options: {
      'Ácido': {
        question: 'Que tipo de Draconato é a personagem?',
        options: {
          'Black Dragonborn': 'Escamas negras e olhar duro, cospe ácido que corrói tudo à frente.',
          'Copper Dragonborn': 'Escamas brilhantes e ar brincalhão, cospe ácido com um sorriso trocista.'
        }
      },
      'Fogo': {
        question: 'Qual é a aparência da personagem?',
        options: {
          'Brass Dragonborn': 'Escamas douradas metálicas e sorriso simpático, liberta fogo com graciosidade.',
          'Gold Dragonborn': 'Escamas douradas e ar majestoso, usa sopros de fogo devastadores.',
          'Red Dragonborn': 'Escamas vermelhas brilhantes, cospe fogo com grande intensidade.'
        }
      },
      'Relâmpago': {
        question: 'Qual é a aparência da personagem?',
        options: {
          'Blue Dragonborn': 'Chifres e escamas azuladas, dispara raios com precisão.',
          'Bronze Dragonborn': 'Escamas metálicas e pose nobre, lança relâmpagos contra os inimigos.'
        }
      },
      'Frio': {
        question: 'Qual é a aparência da personagem?',
        options: {
          'Silver Dragonborn': 'Pele prateada e ar calmo, exala frio para travar os oponentes.',
          'White Dragonborn': 'Escamas brancas e garras afiadas, usa rajadas geladas para atacar.'
        }
      },
      'Veneno': 'Green Dragonborn'
    }
  },
  Dwarf: {
    question: 'Que tipo de anão é a personagem?',
    options: {
      'Hill Dwarf': 'Baixinho e robusto, com resistência lendária e sabedoria prática.',
      'Mountain Dwarf': 'Mais largo e forte, habituado ao combate e às forjas profundas.',
      'Duergar': 'Pele acinzentada, olhos duros e expressão desconfiada; cresce em poder psiónico nas sombras profundas.'
    }
  }
};

const subQuestionsEN = {
  Elf: {
    question: 'What type of elf is the character?',
    options: {
      'High Elf': 'Elegant and fine-featured, naturally attuned to arcane magic.',
      'Wood Elf': 'Agile and discreet with bronzed skin and keen eyes, moves easily in nature.',
      'Drow Elf': 'Dark-skinned with white hair, sees in the dark and wields Underdark magic.',
      'Eladrin': {
        label: 'Fey beauty in constant flux; shifts with the seasons and teleports in flashes of magic.',
        question: 'Which power blossoms when the character teleports?',
        options: {
          'Spring Eladrin': 'Lively and springlike in appearance, brings an ally along when teleporting.',
          'Summer Eladrin': 'Flaming hair and a warm aura, burns foes upon arrival.',
          'Autumn Eladrin': 'Golden tones and calm stride, charms those nearby.',
          'Winter Eladrin': 'Pale skin and cold eyes, induces fear when appearing.'
        }
      },
      'Shadar-kai': 'Pale skin and distant gaze; moves like a shadow between worlds and becomes briefly invulnerable.',
      'Sea Elf': 'Slender silhouette with gills and fins; dwells among the tides and speaks with sea creatures.'
    }
  },
  Genasi: {
    question: 'What is the character\'s elemental essence?',
    options: {
      'Air Genasi': 'Hair that drifts and light steps, moves with ease and breathes pure air even at altitude.',
      'Earth Genasi': 'Skin rough as stone, endures difficult ground and stands firm under pressure.',
      'Fire Genasi': 'Veins aglow beneath dark skin, radiates heat and inflicts burning touch.',
      'Water Genasi': 'Fluid body and ocean eyes, swims well and breathes underwater.'
    }
  },
  'Geppettin (Plushie or Bisque)': {
    question: 'What kind of living toy is the character?',
    options: {
      'Bisque Geppettin': 'Made of painted porcelain, delicate yet casts magic with flair and grace.',
      'Plushie Geppettin': 'Made of soft plush, adorable and tougher than it looks.'
    }
  },
  Gnome: {
    question: 'What type of gnome is the character?',
    options: {
      'Forest Gnome': 'Small and curious, understands animals and crafts simple illusions.',
      'Rock Gnome': 'With grease-stained hands, invents magical gadgets for everyday use.',
      'Deep Gnome': 'Gray skin and large gemstone eyes; slips unseen and shrugs off magic.'
    }
  },
  Goliath: {
    question: 'What kind of power did the character inherit from giant ancestors?',
    options: {
      Defensive: {
        question: 'What is the character\'s appearance and fortitude?',
        options: {
          'Stone Goliath': 'Gray skin with stone plates, withstands physical damage well.',
          'Storm Goliath': 'Purple-tinged skin crackling with energy, retaliates with thunder when struck.'
        }
      },
      Offensive: {
        question: 'What is the character\'s appearance and attack style?',
        options: {
          'Hill Goliath': 'Brown skin and broad build, uses brute strength to knock enemies prone.',
          'Frost Goliath': 'Pale blue skin and cold eyes, slows enemies with icy blows.',
          'Fire Goliath': 'Glowing veins beneath dark skin, deals extra damage with fire.'
        }
      },
      Mobility: {
        result: 'Cloud Goliath'
      }
    }
  },
  Mandrake: {
    question: 'Which power grows with the character\'s season?',
    options: {
      'Spring Mandrake': 'Fresh flowers and light vines, knocks airborne foes down.',
      'Summer Mandrake': 'Dense, sturdy foliage pulls enemies close.',
      'Autumn Mandrake': 'Golden leaves and dry branches ensnare multiple targets at once.',
      'Winter Mandrake': 'Covered in ice and cold sap, unleashes frigid blasts with its vines.'
    }
  },
  Shifter: {
    question: 'Which wild trait awakens in the character\'s transformation?',
    options: {
      'Beasthide Shifter': 'Thick hide and strong body, endures attacks better.',
      'Longtooth Shifter': 'Jutting fangs and feral gaze, bites with powerful jaws.',
      'Swiftstride Shifter': 'Feline elegance, moves swiftly and avoids being surrounded.',
      'Wildhunt Shifter': 'Keen-eyed and alert, never caught off guard.'
    }
  },
  Tiefling: {
    question: 'Which infernal lineage runs in the character\'s blood?',
    options: {
      'Abyssal Tiefling': 'Irregular horns and unstable aura, unleashes chaotic energy.',
      'Infernal Tiefling': 'Red skin and intense eyes, channels fire with precision.',
      'Chthonic Tiefling': 'Dark complexion and serious features, wields powers of death and shadow.'
    }
  },
  Dragonborn: {
    question: 'What kind of draconic breath does the character possess?',
    options: {
      Acid: {
        question: 'What does the character look like?',
        options: {
          'Black Dragonborn': 'Black scales and stern gaze, spits acid that corrodes all ahead.',
          'Copper Dragonborn': 'Shining scales and playful air, spits acid with a mocking grin.'
        }
      },
      Fire: {
        question: 'What does the character look like?',
        options: {
          'Brass Dragonborn': 'Golden scales and friendly smile, releases fire with ease.',
          'Gold Dragonborn': 'Golden scales and majestic bearing, wields devastating fire breath.',
          'Red Dragonborn': 'Bright red scales, breathes fire with great intensity.'
        }
      },
      Lightning: {
        question: 'What does the character look like?',
        options: {
          'Blue Dragonborn': 'Horns and bluish scales, fires lightning bolts precisely.',
          'Bronze Dragonborn': 'Metallic scales and noble stance, blasts foes with lightning.'
        }
      },
      Cold: {
        question: 'What does the character look like?',
        options: {
          'Silver Dragonborn': 'Silver skin and calm demeanor, exhales cold to hinder opponents.',
          'White Dragonborn': 'White scales and sharp claws, uses frigid blasts to attack.'
        }
      },
      Poison: 'Green Dragonborn'
    }
  },
  Dwarf: {
    question: 'What type of dwarf is the character?',
    options: {
      'Hill Dwarf': 'Short and sturdy with legendary endurance and practical wisdom.',
      'Mountain Dwarf': 'Broader and stronger, used to battle and deep forges.',
      'Duergar': 'Ashen skin, harsh eyes and wary expression; grows psionic power in the deep dark.'
    }
  }
};



// expose the sub-species data on the global object. Using a conditional
// assignment prevents errors if this script is accidentally loaded more
// than once in the browser.
window.subSpeciesQuestions = window.subSpeciesQuestions || {
  en: subQuestionsEN,
  pt: subQuestionsPT
};
