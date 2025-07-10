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
    question: 'What type of elf is the character?',
    options: {
      'High Elf': 'Elegant and fine-featured, naturally attuned to arcane magic.',
      'Wood Elf': 'Agile and discreet with bronzed skin and keen eyes, moves easily in nature.',
      'Drow Elf': 'Dark-skinned with white hair, sees in the dark and wields Underdark magic.'
    }
  },
  Genasi: {
    question: 'What is the character\u2019s elemental essence?',
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
      'Rock Gnome': 'With grease-stained hands, invents magical gadgets for everyday use.'
    }
  },
  Goliath: {
    question: 'What kind of power did the character inherit from giant ancestors?',
    options: {
      Defensive: {
        question: 'What is the character\u2019s appearance and fortitude?',
        options: {
          'Stone Goliath': 'Gray skin with stone plates, withstands physical damage well.',
          'Storm Goliath': 'Purple-tinged skin crackling with energy, retaliates with thunder when struck.'
        }
      },
      Offensive: {
        question: 'What is the character\u2019s appearance and attack style?',
        options: {
          'Hill Goliath': 'Brown skin and broad build, uses brute strength to knock enemies prone.',
          'Frost Goliath': 'Pale blue skin and cold eyes, slows enemies with icy blows.',
          'Fire Goliath': 'Glowing veins beneath dark skin, deals extra damage with fire.'
        }
      },
      Mobility: 'Cloud Goliath'
    }
  },
  Mandrake: {
    question: 'Which power grows with the character\u2019s season?',
    options: {
      'Spring Mandrake': 'Fresh flowers and light vines, knocks airborne foes down.',
      'Summer Mandrake': 'Dense, sturdy foliage pulls enemies close.',
      'Autumn Mandrake': 'Golden leaves and dry branches ensnare multiple targets at once.',
      'Winter Mandrake': 'Covered in ice and cold sap, unleashes frigid blasts with its vines.'
    }
  },
  Eladrin: {
    question: 'Which power blossoms when the character teleports?',
    options: {
      'Spring Eladrin': 'Lively and springlike in appearance, brings an ally along when teleporting.',
      'Summer Eladrin': 'Flaming hair and a warm aura, burns foes upon arrival.',
      'Autumn Eladrin': 'Golden tones and calm stride, charms those nearby.',
      'Winter Eladrin': 'Pale skin and cold eyes, induces fear when appearing.'
    }
  },
  Shifter: {
    question: 'Which wild trait awakens in the character\u2019s transformation?',
    options: {
      'Beasthide Shifter': 'Thick hide and strong body, endures attacks better.',
      'Longtooth Shifter': 'Jutting fangs and feral gaze, bites with powerful jaws.',
      'Swiftstride Shifter': 'Feline elegance, moves swiftly and avoids being surrounded.',
      'Wildhunt Shifter': 'Keen-eyed and alert, never caught off guard.'
    }
  },
  Tiefling: {
    question: 'Which infernal lineage runs in the character\u2019s blood?',
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
  }
};


const subQuestionsPT = {
  Elf: {
    question: 'Que tipo de elfo é a personagem?',
    options: {
      'High Elf': 'Elegante e de feições finas, tem afinidade natural com a magia arcana.',
      'Wood Elf': 'Ágil e discreta, de pele bronzeada e olhar atento, move-se com facilidade na natureza.',
      'Drow Elf': 'De pele escura e cabelo branco, vê no escuro e domina magia do Subterrâneo.'
    }
  },
  Genasi: {
    question: 'Qual é a essência elemental da personagem?',
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
      'Bisque Geppettin': 'Feita de porcelana pintada, é delicada mas lança magia com estilo e graça.',
      'Plushie Geppettin': 'Feita de peluche macio, é adorável e aguenta mais do que parece.'
    }
  },
  Gnome: {
    question: 'Que tipo de gnomo é a personagem?',
    options: {
      'Forest Gnome': 'Pequena e curiosa, entende os animais e cria ilusões simples.',
      'Rock Gnome': 'Com mãos sujas de graxa, inventa engenhocas mágicas e práticas.'
    }
  },
  Goliath: {
    question: 'Que tipo de poder herdou a personagem dos seus ancestrais gigantes?',
    options: {
      Defensivo: {
        question: 'Qual é a aparência e a força da personagem?',
        options: {
          'Stone Goliath': 'Com pele cinzenta e placas de pedra, resiste bem a danos físicos.',
          'Storm Goliath': 'Pele arroxeada com energia no corpo, revida com trovões ao ser atingida.'
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
      Mobilidade: 'Cloud Goliath'
    }
  },
  Mandrake: {
    question: 'Que poder cresce com a estação da personagem?',
    options: {
      'Spring Mandrake': 'Com flores frescas e vinhas leves, derruba inimigos no ar.',
      'Summer Mandrake': 'De folhagem densa e robusta, puxa os inimigos para junto de si.',
      'Autumn Mandrake': 'Com folhas douradas e galhos secos, prende vários alvos de uma vez.',
      'Winter Mandrake': 'Coberta de gelo e seiva fria, liberta rajadas geladas com as suas vinhas.'
    }
  },
  Eladrin: {
    question: 'Que poder floresce quando a personagem se teleporta?',
    options: {
      'Spring Eladrin': 'De aparência viva e primaveril, leva um aliado consigo ao teletransportar-se.',
      'Summer Eladrin': 'Com cabelo flamejante e aura quente, queima inimigos ao chegar.',
      'Autumn Eladrin': 'De tons dourados e andar calmo, encanta os que estão por perto.',
      'Winter Eladrin': 'De pele pálida e olhos frios, provoca medo quando aparece.'
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
    question: 'Que linhagem infernal corre no sangue da personagem?',
    options: {
      'Abyssal Tiefling': 'Com chifres irregulares e aura instável, liberta energia caótica.',
      'Infernal Tiefling': 'De pele vermelha e olhos intensos, canaliza fogo com precisão.',
      'Chthonic Tiefling': 'Pele sombria e feições sérias, usa poderes ligados à morte e à sombra.'
    }
  },
  Dragonborn: {
    question: 'Que tipo de sopro dracónico possui a personagem?',
    options: {
      'Ácido': {
        question: 'Qual é a aparência da personagem?',
        options: {
          'Black Dragonborn': 'Escamas negras e olhar duro, cospe ácido que corrói tudo à frente.',
          'Copper Dragonborn': 'Escamas brilhantes e ar brincalhão, cospe ácido com um sorriso trocista.'
        }
      },
      'Fogo': {
        question: 'Qual é a aparência da personagem?',
        options: {
          'Brass Dragonborn': 'Escamas douradas e sorriso simpático, liberta fogo com facilidade.',
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
  }
};


// expose the sub-species data on the global object. Using a conditional
// assignment prevents errors if this script is accidentally loaded more
// than once in the browser.
window.subSpeciesQuestions = window.subSpeciesQuestions || {
  en: subQuestionsEN,
  pt: subQuestionsPT
};
