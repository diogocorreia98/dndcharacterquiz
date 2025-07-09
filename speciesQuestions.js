const step1pt = {
  title: 'Que espécie é a tua personagem?',
  tree: {
    question: 'Qual é a altura da tua personagem?',
    options: {
      A: {
        label: 'Muito Baixa – Tão pequena como um banco de taverna ou uma mochila',
        next: {
          question: 'Aspeto humanoide ou animalesco/inorgânico?',
          options: {
            A: {
              label: 'Humanoide',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Orelhas pontiagudas, olhos travessos e pés ligeiros; escapa facilmente ao perigo e surpreende com ataques astutos.',
                    result: 'Goblin'
                  },
                  B: {
                    label: 'Minúscula criatura alada, envolta em brilho etéreo; dança pelos ares e invoca encantamentos feéricos.',
                    result: 'Fairy'
                  },
                  C: {
                    label: 'Pele cinzenta e olhos grandes como pedras preciosas; move-se sem ser visto e resiste ao toque da magia.',
                    result: 'Deep Gnome'
                  }
                }
              }
            },
            B: {
              label: 'Animalesco ou inorgânico',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Figura encurvada, coberta de penas escuras e olhar astuto; mestre da imitação e da memória perfeita.',
                    result: 'Kenku'
                  },
                  B: {
                    label: 'Reptilóide pequeno com olhar ardente; grita com fervor dracónico e inspira ataques certeiros.',
                    result: 'Kobold'
                  },
                  C: {
                    label: 'Forma encantadora de brinquedo antigo — feita de pano ou porcelana; surpreendentemente capaz e cheia de alma.',
                    result: 'Geppettin (Plushie or Bisque)'
                  }
                }
              }
            }
          }
        }
      },

      B: {
        label: 'Baixa – Da altura de uma mesa de taverna ou do peito de um humano comum.',
        next: {
          question: 'Aspeto animalesco ou humanoide?',
          options: {
            A: {
              label: 'Animal',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Pernas fortes de coelho e energia irrequieta; reage num piscar de olhos e salta para longe do perigo.',
                    result: 'Harengon'
                  },
                  B: {
                    label: 'Corpo encurvado e coberto de penas escuras; observa tudo, imita tudo, esquece nada.',
                    result: 'Kenku'
                  },
                  C: {
                    label: 'Reptilóide pequeno com olhos atentos e garras nervosas; solta um grito ancestral que fortalece aliados.',
                    result: 'Kobold'
                  }
                }
              }
            },
            B: {
              label: 'Humanoide',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Corpo robusto, barba cerrada e olhos que já viram muita pedra; firme como rocha e resistente como ferro.',
                    result: 'Dwarf'
                  },
                  B: {
                    label: 'Pele acinzentada, olhos duros e expressão desconfiada; cresce em poder psiónico nas sombras profundas.',
                    result: 'Duergar'
                  },
                  C: {
                    label: 'Pés descalços, sorriso caloroso e coração leve; move-se com graça e surpreende com sorte inesperada.',
                    result: 'Halfling'
                  },
                  D: {
                    label: 'Mãos manchadas de tinta e ferramentas nos bolsos; engenhoso criador de bugigangas encantadas.',
                    result: 'Gnome'
                  },
                  E: {
                    label: 'Rosto sério, pele de pedra e olhos que brilham como cristais; move-se nas sombras e resiste à magia.',
                    result: 'Deep Gnome'
                  }
                }
              }
            }
          }
        }
      },

      C: {
        label: 'Média – Aproximadamente da altura de um humano comum.',
        next: {
          question: 'Qual é a sua natureza?',
          options: {
            A: {
              label: 'Humanoide ou ligeiramente monstruosa',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Figura comum, mas moldável a qualquer papel; aprende depressa e adapta-se a qualquer aventura.',
                    result: 'Human'
                  },
                  B: {
                    label: 'Presença serena com olhos que irradiam luz; cura feridas com um toque e brilha com poder celestial.',
                    result: 'Aasimar'
                  },
                  C: {
                    label: 'Pele de tons vivos, chifres elegantes e cauda serpenteante; canaliza magia interior com intensidade ardente.',
                    result: 'Tiefling'
                  },
                  D: {
                    label: 'Corpo forte e pele acinzentada; avança com fúria primal e ruge com poder brutal.',
                    result: 'Orc'
                  },
                  E: {
                    label: 'Silhueta andrógina de pele lisa e olhos inexpressivos; muda de forma como quem troca de máscara.',
                    result: 'Changeling'
                  },
                  F: {
                    label: 'Postura disciplinada e olhos calculistas; um estratega natural com laços mágicos ancestrais.',
                    result: 'Hobgoblin'
                  }
                }
              }
            },
            B: {
              label: 'Claramente animal',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Rosto felino e movimentos silenciosos; olhos atentos e garras afiadas prontas para escalar ou atacar.',
                    result: 'Tabaxi'
                  },
                  B: {
                    label: 'Traços ferozes e garras prontas a surgir; transforma-se em fera viva quando o perigo chama.',
                    result: 'Shifter'
                  },
                  C: {
                    label: 'Pernas de cabra, sorriso travesso e energia saltitante; encanta multidões com charme e música.',
                    result: 'Satyr'
                  },
                  D: {
                    label: 'Olhos de serpente e presença enigmática; resiste à magia e envenena com palavras suaves.',
                    result: 'Yuan-ti'
                  },
                  E: {
                    label: 'Casco duro e olhos sábios; nada e respira como uma tartaruga ancestral e resiste pacientemente ao mundo.',
                    result: 'Tortle'
                  }
                }
              }
            },
            C: {
              label: 'Élfica',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Figura graciosa de orelhas longas e olhos atentos; move-se com leveza e dorme em meditação.',
                    result: 'Elf'
                  },
                  B: {
                    label: 'Beleza feérica em constante mutação; muda com as estações e transporta-se em clarões mágicos.',
                    result: 'Eladrin'
                  },
                  C: {
                    label: 'Pele pálida e olhar distante; move-se como uma sombra entre mundos e torna-se brevemente invulnerável.',
                    result: 'Shadar-kai'
                  }
                }
              }
            },
            D: {
              label: 'Aquático',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Silhueta elegante com guelras e barbatanas; vive entre as marés e comunica com as criaturas do mar.',
                    result: 'Sea Elf'
                  },
                  B: {
                    label: 'Guerreiro de pele azulada e tridente à mão; comanda o mar, resiste ao frio e anda sobre as águas.',
                    result: 'Triton'
                  }
                }
              }
            },
            E: {
              label: 'Construto, elemental ou planta',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Corpo articulado feito de madeira e cordas; parece uma marioneta animada com brilho curioso.',
                    result: 'Geppettin (Marionette)'
                  },
                  B: {
                    label: 'Pele de casca e olhos como botões florais; nutre-se da luz e cresce em força com as estações.',
                    result: 'Mandrake'
                  },
                  C: {
                    label: 'Corpo forjado de pedra, fogo, ar ou água; cada passo ecoa com poder elemental ancestral.',
                    result: 'Genasi'
                  }
                }
              }
            }
          }
        }
      }
      ,
      D: {
        label: 'Alta – Acima da altura comum de um humano como um estandarte de guerra ou um armário de armas.',
        next: {
          question: 'Escolhe a descrição que melhor se adequa:',
          options: {
            A: {
              label: 'Traços reptilianos ou mamíferos',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Corpo escamoso e imponente com sopro mágico; resiste a elementos e impõe-se em combate.',
                    result: 'Dragonborn'
                  },
                  B: {
                    label: 'Rosto de lagarto e crista dorsal; caça com calma instintiva e pele tão dura quanto couro.',
                    result: 'Lizardfolk'
                  },
                  C: {
                    label: 'Olhos hipnóticos e corpo esguio como serpente; resiste a venenos e encanta com palavras sibilantes.',
                    result: 'Yuan-ti'
                  },
                  D: {
                    label: 'Cabeça de touro e corpo de guerreiro; investe com força bruta e nunca se perde no labirinto.',
                    result: 'Minotaur'
                  },
                  E: {
                    label: 'Cornos enrolados e pernas de cabra; salta alegremente e encanta com presença feérica.',
                    result: 'Satyr'
                  }
                }
              }
            },
            B: {
              label: 'Guerreiros ancestrais ou seres florestais',
              next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: {
                    label: 'Figura tribal de músculos salientes e presas à mostra; sobrevive com instinto e força crua.',
                    result: 'Orc'
                  },
                  B: {
                    label: 'Pele pálida e olhar distante; mistura acrobacia com magia psiónica vinda do além.',
                    result: 'Githyanki'
                  },
                  C: {
                    label: 'Movimentos meditativos e aura disciplinada; molda a realidade com pura força mental.',
                    result: 'Githzerai'
                  },
                  D: {
                    label: 'Corpo vegetal de casca viva; enraizado na floresta, move-se com graça e cresce com luz.',
                    result: 'Mandrake'
                  },
                  E: {
                    label: 'Silhueta élfica mutável como o vento; salta entre planos com a leveza de uma estação em mudança.',
                    result: 'Eladrin'
                  }
                }
              }
            }
          }
        }
      }
      ,
      E: {
        label: 'Muito Alta – Tão alta como uma carroça empilhada ou uma estante de uma biblioteca arcana.',
        next: {
          question: 'Escolhe a descrição que melhor se adequa:',
          options: {
            A: {
              label: 'Gigante peludo de braços longos e presas afiadas; move-se nas sombras e ataca antes de ser visto.',
              result: 'Bugbear'
            },
            B: {
              label: 'Metade humano, metade cavalo; galopa sobre o campo de batalha com arco ou lança em punho.',
              result: 'Centaur'
            },
            C: {
              label: 'Silhueta imponente de sangue antigo; invoca o poder dos gigantes para crescer em tamanho ou libertar trovões, fogo, gelo ou força titânica.',
              result: 'Goliath'
            },
            D: {
              label: 'Pele azul musgosa e olhos calmos; liga-se à floresta como um guardião antigo e discreto.',
              result: 'Firbolg'
            },
            E: {
              label: 'Tronco vivo coberto de casca; cresce com as estações e enraíza-se na magia da terra.',
              result: 'Mandrake'
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
        label: 'Very Short – As small as a tavern bench or a backpack',
        next: {
          question: 'Humanoid or animalistic/inorganic in appearance?',
          options: {
            A: {
              label: 'Humanoid',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Pointy ears, mischievous eyes, and light feet; easily slips past danger and strikes with clever surprise.',
                    result: 'Goblin'
                  },
                  B: {
                    label: 'Tiny winged creature wrapped in ethereal glow; dances through the air and casts whimsical enchantments.',
                    result: 'Fairy'
                  },
                  C: {
                    label: 'Gray skin and gemstone eyes; vanishes into shadows and shrugs off magical force.',
                    result: 'Deep Gnome'
                  }
                }
              }
            },
            B: {
              label: 'Animalistic or inorganic',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Hunched figure, cloaked in dark feathers with sharp gaze; master of mimicry and perfect memory.',
                    result: 'Kenku'
                  },
                  B: {
                    label: 'Small reptilian with burning eyes; shouts with draconic fervor and boosts allies to strike true.',
                    result: 'Kobold'
                  },
                  C: {
                    label: 'Charming toy-like form made of cloth or porcelain; surprisingly capable and full of soul.',
                    result: 'Geppettin (Plushie or Bisque)'
                  }
                }
              }
            }
          }
        }
      },

      B: {
        label: 'Short – As tall as a tavern table or a human’s chest.',
        next: {
          question: 'Animalistic or humanoid?',
          options: {
            A: {
              label: 'Animal',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Strong rabbit legs and boundless energy; reacts in a flash and hops far from harm.',
                    result: 'Harengon'
                  },
                  B: {
                    label: 'Hunched body covered in dark feathers; sees all, imitates all, forgets nothing.',
                    result: 'Kenku'
                  },
                  C: {
                    label: 'Small reptilian with alert eyes and twitchy claws; releases an ancient cry that strengthens allies.',
                    result: 'Kobold'
                  }
                }
              }
            },
            B: {
              label: 'Humanoid',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Sturdy frame, thick beard, and eyes that have seen stone for ages; solid as rock and tough as iron.',
                    result: 'Dwarf'
                  },
                  B: {
                    label: 'Gray skin, sharp eyes, and guarded expression; psionic strength grows in deep shadow.',
                    result: 'Duergar'
                  },
                  C: {
                    label: 'Bare feet, warm smile, and light heart; walks with ease and thrives on unexpected luck.',
                    result: 'Halfling'
                  },
                  D: {
                    label: 'Ink-stained hands and pockets full of tools; a clever tinkerer of enchanted gadgets.',
                    result: 'Gnome'
                  },
                  E: {
                    label: 'Serious face, stone-like skin, and eyes that gleam like crystals; hides in darkness and resists magic.',
                    result: 'Deep Gnome'
                  }
                }
              }
            }
          }
        }
      },

      C: {
        label: 'Medium – About as tall as an average human.',
        next: {
          question: 'What is their nature?',
          options: {
            A: {
              label: 'Humanoid or slightly monstrous',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Common frame, adaptable to any role; learns quickly and fits any adventure.',
                    result: 'Human'
                  },
                  B: {
                    label: 'Serene presence with glowing eyes; heals with a touch and radiates celestial power.',
                    result: 'Aasimar'
                  },
                  C: {
                    label: 'Vibrant skin, elegant horns, and serpentine tail; channels inner magic with blazing intensity.',
                    result: 'Tiefling'
                  },
                  D: {
                    label: 'Broad body and grayish skin; charges with primal fury and roars with brutal strength.',
                    result: 'Orc'
                  },
                  E: {
                    label: 'Androgynous figure with smooth skin and unreadable gaze; changes shape like swapping masks.',
                    result: 'Changeling'
                  },
                  F: {
                    label: 'Disciplined posture and calculating eyes; a natural tactician with ancient magical ties.',
                    result: 'Hobgoblin'
                  }
                }
              }
            },
            B: {
              label: 'Clearly animal-like',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Feline face and silent steps; alert eyes and sharp claws ready to climb or pounce.',
                    result: 'Tabaxi'
                  },
                  B: {
                    label: 'Feral traits and ready claws; transforms into a living beast when danger calls.',
                    result: 'Shifter'
                  },
                  C: {
                    label: 'Goat legs, playful grin, and bouncing energy; charms crowds with music and wit.',
                    result: 'Satyr'
                  },
                  D: {
                    label: 'Serpent eyes and enigmatic presence; resists magic and poisons with soft-spoken venom.',
                    result: 'Yuan-ti'
                  },
                  E: {
                    label: 'Tough shell and wise eyes; swims and breathes like an ancient turtle and endures the world patiently.',
                    result: 'Tortle'
                  }
                }
              }
            },
            C: {
              label: 'Elven',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Graceful figure with long ears and keen eyes; moves lightly and meditates in dreams.',
                    result: 'Elf'
                  },
                  B: {
                    label: 'Fey beauty in constant flux; shifts with the seasons and teleports in bursts of magic.',
                    result: 'Eladrin'
                  },
                  C: {
                    label: 'Pale skin and distant gaze; moves like a shadow between worlds and becomes briefly untouchable.',
                    result: 'Shadar-kai'
                  }
                }
              }
            },
            D: {
              label: 'Aquatic',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Elegant figure with gills and fins; lives with the tides and speaks to sea creatures.',
                    result: 'Sea Elf'
                  },
                  B: {
                    label: 'Blue-skinned warrior with trident in hand; commands the sea, resists cold, and strides atop waves.',
                    result: 'Triton'
                  }
                }
              }
            },
            E: {
              label: 'Construct, elemental, or plant',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Wooden frame with moving joints; like a puppet brought to life with curious spark.',
                    result: 'Geppettin (Marionette)'
                  },
                  B: {
                    label: 'Bark-like skin and floral eyes; thrives on sunlight and grows with the seasons.',
                    result: 'Mandrake'
                  },
                  C: {
                    label: 'Body shaped from stone, flame, mist, or water; every step echoes with elemental force.',
                    result: 'Genasi'
                  }
                }
              }
            }
          }
        }
      },

      D: {
        label: 'Tall – Taller than most humans, like a war banner or weapon rack.',
        next: {
          question: 'Choose the description that fits best:',
          options: {
            A: {
              label: 'Reptilian or mammalian features',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Imposing scaled body with magical breath; shrugs off elemental harm and dominates the battlefield.',
                    result: 'Dragonborn'
                  },
                  B: {
                    label: 'Lizard face and spiny crest; stalks with calm instincts and hides behind tough skin.',
                    result: 'Lizardfolk'
                  },
                  C: {
                    label: 'Hypnotic eyes and snake-like form; shrugs off poison and whispers with venomous charm.',
                    result: 'Yuan-ti'
                  },
                  D: {
                    label: 'Bull’s head atop a warrior’s frame; charges with raw force and never loses its path.',
                    result: 'Minotaur'
                  },
                  E: {
                    label: 'Coiled horns and goat legs; leaps joyfully and dazzles with fey charisma.',
                    result: 'Satyr'
                  }
                }
              }
            },
            B: {
              label: 'Ancestral warriors or forest beings',
              next: {
                question: 'Which description fits best?',
                options: {
                  A: {
                    label: 'Tribal form with bulging muscles and jutting tusks; survives with instinct and raw might.',
                    result: 'Orc'
                  },
                  B: {
                    label: 'Pale skin and distant eyes; blends acrobatics and psionics drawn from the beyond.',
                    result: 'Githyanki'
                  },
                  C: {
                    label: 'Disciplined aura and graceful motions; bends reality through pure mental force.',
                    result: 'Githzerai'
                  },
                  D: {
                    label: 'Living bark body rooted in the woods; flows with nature and grows in sunlight.',
                    result: 'Mandrake'
                  },
                  E: {
                    label: 'Elven shape that shifts like wind; leaps through realms with seasonal grace.',
                    result: 'Eladrin'
                  }
                }
              }
            }
          }
        }
      },

      E: {
        label: 'Very Tall – As tall as a stacked cart or a grand library shelf.',
        next: {
          question: 'Choose the description that fits best:',
          options: {
            A: {
              label: 'Hairy giant with long arms and sharp tusks; prowls the dark and strikes before seen.',
              result: 'Bugbear'
            },
            B: {
              label: 'Half human, half horse; gallops through battle with bow or spear in hand.',
              result: 'Centaur'
            },
            C: {
              label: 'Towering figure with ancient blood; channels the might of giants to grow, strike, or command the storm.',
              result: 'Goliath'
            },
            D: {
              label: 'Moss-blue skin and calm eyes; bonded to the forest as a gentle and ancient warden.',
              result: 'Firbolg'
            },
            E: {
              label: 'Living trunk with bark-covered limbs; grows with the seasons and roots in earth’s magic.',
              result: 'Mandrake'
            }
          }
        }
      }
    }
  }
};


const subQuestionsEN = {
  Elf: {
    question: 'What kind of elf is the character?',
    options: {
      'High Elf': 'Graceful and learned, with an innate gift for arcane magic and ancient knowledge.',
      'Wood Elf': 'Swift and stealthy, in tune with the forest and able to vanish into the wild.',
      'Drow Elf': 'Skin dark as night, hair like silver; enchants with shadow magic and razor-sharp senses.'
    }
  },
  Genasi: {
    question: 'What is the character’s elemental essence?',
    options: {
      'Air Genasi': 'Light as the breeze, moves with effortless speed and breathes freedom.',
      'Earth Genasi': 'Solid and unshakable, with stone-like skin and an unstoppable stride.',
      'Fire Genasi': 'Fiery and impulsive, radiates heat and burns with a blazing touch.',
      'Water Genasi': 'Fluid and adaptable, breathes underwater and flows with grace.'
    }
  },
  'Geppettin (Plushie or Bisque)': {
    question: 'What kind of living toy is the character?',
    options: {
      'Bisque Geppettin': 'A porcelain doll with timeless elegance and a magical presence.',
      'Plushie Geppettin': 'A cuddly plush doll, adorable yet surprisingly resilient.'
    }
  },
  Gnome: {
    question: 'What kind of gnome is the character?',
    options: {
      'Forest Gnome': 'Connected to nature and animals, skilled in illusions and empathy.',
      'Rock Gnome': 'Inventive and curious, builds magical trinkets with joy and cleverness.'
    }
  },
  Goliath: {
    question: 'What trait has the character inherited from the giants?',
    options: {
      'Hill Goliath': 'As strong as an avalanche, knocks smaller foes down with brute force.',
      'Stone Goliath': 'Tough as granite, shrugs off harm with stoic endurance.',
      'Frost Goliath': 'Cold and relentless, slows enemies with a freezing blow.',
      'Fire Goliath': 'Burns from within, adding fire to every furious strike.',
      'Cloud Goliath': 'Elusive as mist, vanishes in a blink and slips away from harm.',
      'Storm Goliath': 'Crackling with thunder, strikes back with the roar of the storm.'
    }
  },
  Mandrake: {
    question: 'What seasonal power does the character embody?',
    options: {
      'Spring Mandrake': 'Its vines drag flying foes from the sky to the earth.',
      'Summer Mandrake': 'Pulls enemies closer with forceful, vine-wrapped fury.',
      'Autumn Mandrake': 'Entangles multiple foes at once in a burst of foliage.',
      'Winter Mandrake': 'Its vines unleash a chilling blast of frost and ice.'
    }
  },
  Eladrin: {
    question: 'What power awakens when the character teleports?',
    options: {
      'Spring Eladrin': 'Teleports an ally along when shifting between realms.',
      'Summer Eladrin': 'Radiates searing heat that scorches nearby enemies.',
      'Autumn Eladrin': 'Charms nearby creatures with autumnal grace.',
      'Winter Eladrin': 'Instills deep fear in a foe upon appearing.'
    }
  },
  Shifter: {
    question: 'What primal trait emerges when the character shifts?',
    options: {
      'Beasthide Shifter': 'Thick and powerful, absorbs blows with beastly hide.',
      'Longtooth Shifter': 'Savage and instinctual, tears foes apart with elongated fangs.',
      'Swiftstride Shifter': 'Agile and evasive, glides around enemies like a feline.',
      'Wildhunt Shifter': 'Watchful and unyielding, sees the unseen and tracks without fail.'
    }
  },
  Tiefling: {
    question: 'What infernal lineage shapes the character’s blood?',
    options: {
      'Abyssal Tiefling': 'Chaotic and destructive, a descendant of demons and raw ruin.',
      'Infernal Tiefling': 'Disciplined and relentless, touched by the ordered fire of Hell.',
      'Chthonic Tiefling': 'Dark and necromantic, bound to death and the power of shadow.'
    }
  },
  Dragonborn: {
    question: 'What kind of dragon does the character descend from?',
    options: {
      'Black Dragonborn': 'Corrosive and menacing, breathes a stream of searing acid.',
      'Blue Dragonborn': 'Proud and fierce, unleashes bolts of lightning.',
      'Brass Dragonborn': 'Talkative and fiery, breathes flames with charm and wit.',
      'Bronze Dragonborn': 'Loyal and noble, exhales controlled blasts of lightning.',
      'Copper Dragonborn': 'Playful and nimble, sprays acid with a mischievous grin.',
      'Gold Dragonborn': 'Regal and wise, incinerates foes with radiant fire.',
      'Green Dragonborn': 'Cunning and poisonous, exhales toxic fumes and deceit.',
      'Red Dragonborn': 'Bold and ruthless, wields the fiercest fire of all.',
      'Silver Dragonborn': 'Kind yet mighty, breathes cold that slows and subdues.',
      'White Dragonborn': 'Wild and primal, exhales frost in savage bursts.'
    }
  }
};


const subQuestionsPT = {
  Elf: {
    question: 'Que tipo de elfo é a personagem?',
    options: {
      'High Elf': 'Graciosa e culta, com um dom inato para a magia arcana e a erudição antiga.',
      'Wood Elf': 'Ágil e furtiva, vive em harmonia com a floresta e move-se sem deixar rasto.',
      'Drow Elf': 'Pele escura como a noite e cabelo prateado; enfeitiça com poder sombrio e sentidos aguçados.'
    }
  },
  Genasi: {
    question: 'Qual é a essência elemental da personagem?',
    options: {
      'Air Genasi': 'Leve como o vento, move-se com graça veloz e respira liberdade.',
      'Earth Genasi': 'Firme e inabalável, de pele pétrea e passo imperturbável.',
      'Fire Genasi': 'Ardente e impetuosa, irradia calor e destrói com um toque flamejante.',
      'Water Genasi': 'Fluída e adaptável, respira debaixo de água e funde-se com os rios.'
    }
  },
  'Geppettin (Plushie or Bisque)': {
    question: 'Que tipo de brinquedo vivo é a personagem?',
    options: {
      'Bisque Geppettin': 'Boneca de porcelana com elegância antiga e traços encantadores.',
      'Plushie Geppettin': 'Boneco de peluche macio, adorável e surpreendentemente resiliente.'
    }
  },
  Gnome: {
    question: 'Que tipo de gnomo é a personagem?',
    options: {
      'Forest Gnome': 'Ligada ao mundo natural, entende os animais e domina ilusões subtis.',
      'Rock Gnome': 'Inventiva e curiosa, cria engenhocas mágicas com alegria e engenho.'
    }
  },
  Goliath: {
    question: 'Que traço ancestral herdou dos gigantes?',
    options: {
      'Hill Goliath': 'Forte como uma avalanche, derruba os mais pequenos com pura força.',
      'Stone Goliath': 'Dura como granito, resiste a golpes com serenidade monumental.',
      'Frost Goliath': 'Gélida e implacável, abranda os inimigos com uma só pancada.',
      'Fire Goliath': 'Arde por dentro, acrescentando fogo a cada ataque feroz.',
      'Cloud Goliath': 'Ágil como névoa, desaparece num sopro e escapa ao perigo.',
      'Storm Goliath': 'Treme com trovões interiores, devolvendo dano com estrondo celeste.'
    }
  },
  Mandrake: {
    question: 'Que poder cresce com a estação da personagem?',
    options: {
      'Spring Mandrake': 'As suas vinhas derrubam inimigos que se elevam acima do chão.',
      'Summer Mandrake': 'Puxa os inimigos para junto de si com força vigorosa.',
      'Autumn Mandrake': 'Enreda vários inimigos de uma só vez numa explosão de folhagem.',
      'Winter Mandrake': 'As suas vinhas libertam rajadas de frio cortante.'
    }
  },
  Eladrin: {
    question: 'Que poder se manifesta quando a personagem se transporta?',
    options: {
      'Spring Eladrin': 'Leva consigo um aliado ao saltar entre planos.',
      'Summer Eladrin': 'Liberta uma aura ardente que queima quem a rodeia.',
      'Autumn Eladrin': 'Cativa os corações à sua volta com encanto outonal.',
      'Winter Eladrin': 'Inspira medo profundo num inimigo ao surgir do vazio.'
    }
  },
  Shifter: {
    question: 'Que traço selvagem desperta na transformação da personagem?',
    options: {
      'Beasthide Shifter': 'Densa e musculada, aguenta feridas com a força de uma fera protegida.',
      'Longtooth Shifter': 'Furiosa e instintiva, dilacera com presas como um predador alfa.',
      'Swiftstride Shifter': 'Ágil e escorregadia, evita ataques e dança entre inimigos.',
      'Wildhunt Shifter': 'Atenta e focada, vê o invisível e persegue sem ser surpreendida.'
    }
  },
  Tiefling: {
    question: 'Que linhagem infernal corre no sangue da personagem?',
    options: {
      'Abyssal Tiefling': 'Caótica e destrutiva, herdeira do poder bruto dos demónios.',
      'Infernal Tiefling': 'Calculista e ardente, moldada pelas chamas ordenadas do Inferno.',
      'Chthonic Tiefling': 'Sombria e silenciosa, sintonizada com a morte e as forças do além.'
    }
  },
  Dragonborn: {
    question: 'De que tipo de dragão descende a personagem?',
    options: {
      'Black Dragonborn': 'Corrosiva e imponente, cospe ácido devastador.',
      'Blue Dragonborn': 'Dominadora e elétrica, liberta raios com precisão letal.',
      'Brass Dragonborn': 'Faladora e ardente, envolve o combate com chamas e charme.',
      'Bronze Dragonborn': 'Nobre e destemida, lança relâmpagos para proteger os seus.',
      'Copper Dragonborn': 'Brincalhona e ágil, desfere ácido com um sorriso trocista.',
      'Gold Dragonborn': 'Majestosa e sábia, incinera com sopros dignos de reis.',
      'Green Dragonborn': 'Persuasiva e venenosa, contamina o ar com palavras e veneno.',
      'Red Dragonborn': 'Ardente e impiedosa, cospe fogo mais feroz que qualquer outro.',
      'Silver Dragonborn': 'Gentil mas imponente, abranda inimigos com um sopro gélido.',
      'White Dragonborn': 'Instintiva e selvagem, cobre os oponentes com geada implacável.'
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
