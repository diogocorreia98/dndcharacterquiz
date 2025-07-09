const step1pt = {
      title: 'Que espécie gostarias de jogar?',
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
        label: 'Corpo maciço como montanha; desafia o gelo e o vento com força ancestral herdada dos gigantes.',
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
      title: 'Which species would you like to play as?',
      tree: {
        question: 'How tall is your character?',
        options: {
          A: { label: 'Very Short – as small as a tavern stool or a backpack', next: {
            question: 'Humanoid in appearance or more animalistic/constructed?',
            options: {
              A: { label: 'Humanoid', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Large ears, roguish grin and a wiry body.', result: 'Goblin' },
                  B: { label: 'Tiny and glowing with insect wings.', result: 'Fairy' },
                  C: { label: 'Small grey-skinned gnome with big eyes.', result: 'Deep Gnome' }
                }
              }},
              B: { label: 'Animalistic or inorganic', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Small, hunched, birdlike creature with beak and feathers but cannot fly.', result: 'Kenku' },
                  B: { label: 'Red scales, lizard-like with a dragon snout.', result: 'Kobold' },
                  C: { label: 'Toy‑like body made of plush or porcelain.', result: 'Geppettin (Plushie or Bisque)' }
                }
              }}
            }
          }},
          B: { label: 'Short – roughly table-height or chest-high to a human', next: {
            question: 'Animal-like or humanoid appearance?',
            options: {
              A: { label: 'Animal', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Rabbit head, restless and quick.', result: 'Harengon' },
                  B: { label: 'Hunched, feathered and mimics sounds.', result: 'Kenku' },
                  C: { label: 'Small lizard with a dragon face.', result: 'Kobold' }
                }
              }},
              B: { label: 'Humanoid', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Broad build, armored and bearded.', result: 'Dwarf' },
                  B: { label: 'Dark dwarf with gray skin and heavy gear.', result: 'Duergar' },
                  C: { label: 'Barefoot, round-faced and joyful.', result: 'Halfling' },
                  D: { label: 'Curious inventor with tools and bright clothes.', result: 'Gnome' },
                  E: { label: 'Subterranean gnome with grey skin.', result: 'Deep Gnome' }
                }
              }}
            }
          }},
          C: { label: 'Average – about human height', next: {
            question: 'What is their nature?',
            options: {
              A: { label: 'Humanoid or slightly monstrous', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Completely ordinary.', result: 'Human' },
                  B: { label: 'Radiant aura, shining eyes.', result: 'Aasimar' },
                  C: { label: 'Horns, tail, red or purple skin.', result: 'Tiefling' },
                  D: { label: 'Tusks, green‑gray skin, feral look.', result: 'Orc' },
                  E: { label: 'Shapeshifter with smooth pale skin.', result: 'Changeling' },
                  F: { label: 'Red-skinned with disciplined bearing.', result: 'Hobgoblin' }
                }
              }},
              B: { label: 'Clearly animal', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Feline body and face, long tail.', result: 'Tabaxi' },
                  B: { label: 'Bestial transformations like fangs or claws.', result: 'Shifter' },
                  C: { label: 'Goat legs, horns and mischievous spirit.', result: 'Satyr' },
                  D: { label: 'Serpentine face, slit eyes, hypnotic calm.', result: 'Yuan-ti' },
                  E: { label: 'Shell on the back, strong limbs, peaceful air.', result: 'Tortle' }
                }
              }},
              C: { label: 'Elven', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Graceful classic elf with long ears.', result: 'Elf' },
                  B: { label: 'Elf whose appearance shifts with the seasons.', result: 'Eladrin' },
                  C: { label: 'Pale or shadowy elf with a serious expression.', result: 'Shadar-kai' }
                }
              }},
              D: { label: 'Aquatic', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Slim elf with fins or gills.', result: 'Sea Elf' },
                  B: { label: 'Scaled ocean warrior wielding a trident.', result: 'Triton' }
                }
              }},
              E: { label: 'Construct, elemental or plant', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Marionette body of wood and hinged limbs.', result: 'Geppettin (Marionette)' },
                  B: { label: 'Skin like bark or covered in leaves.', result: 'Mandrake' },
                  C: { label: 'Body made of flame, mist, stone or water.', result: 'Genasi' }
                }
              }}
            }
          }},
            D: {
              label: 'Tall – Taller than a typical human, like a war banner or a walking arsenal.',
              next: {
                question: 'Choose the description that fits best:',
                options: {
                  A: {
                    label: 'Reptilian or mammalian traits',
                    next: {
                      question: 'Which description fits best?',
                      options: {
                        A: { label: 'Dragon head with elemental breath.', result: 'Dragonborn' },
                        B: { label: 'Lizard face with tail and crest.', result: 'Lizardfolk' },
                        C: { label: 'Upright posture with snake-like features.', result: 'Yuan-ti' },
                        D: { label: 'Bull’s head with horns and hooves, but human torso.', result: 'Minotaur' },
                        E: { label: 'Goat legs, horns, joyful and musical nature.', result: 'Satyr' },
                      }
                    }
                  },
                  B: {
                    label: 'Ancestral warriors or forest beings',
                    next: {
                      question: 'Which description fits best?',
                      options: {
                        A: { label: 'Tall tribal warrior with tusks.', result: 'Orc' },
                        B: { label: 'Pale warrior with sharp features.', result: 'Githyanki' },
                        C: { label: 'Calm, with yellow-greenish skin.', result: 'Githzerai' },
                        D: { label: 'Walking plant creature with bark-like skin.', result: 'Mandrake' },
                        E: { label: 'Elf with changeable seasonal appearance.', result: 'Eladrin' }
                      }
                    }
                  }
                }
              }
            },
          E: { label: 'Very Tall – as tall as a stacked wagon or a library shelf', next: {
            question: 'Choose the description that fits best:',
            options: {
              A: { label: 'Hairy giant with long arms and fangs.', result: 'Bugbear' },
              B: { label: 'Horse body with human torso.', result: 'Centaur' },
              C: { label: 'Burly humanoid with giant elemental heritage.', result: 'Goliath' },
              D: { label: 'Forest giant with mossy blue skin.', result: 'Firbolg' },
              E: { label: 'Adult walking tree or bark‑covered humanoid.', result: 'Mandrake' }
            }
          }}
        }
      }};

const subQuestionsEN = {
  Elf: {
    question: 'What kind of elf are you?',
    options: {
      'High Elf': 'Elegant and refined, with a natural gift for arcane magic.',
      'Wood Elf': 'Stealthy and swift, blending easily into natural environments.',
      'Drow Elf': 'Dark-skinned and silver-haired, with keen senses and innate magic from the Underdark.'
    }
  },
  Genasi: {
    question: 'Which element flows through your body?',
    options: {
      'Air Genasi': 'Light-footed and fast, with wind ever at your back.',
      'Earth Genasi': 'Stone-skinned and solid, steady even in rough terrain.',
      'Fire Genasi': 'Glowing and warm, with a fiery aura and searing touch.',
      'Water Genasi': 'Flowing and fluid, able to breathe underwater and swim with ease.'
    }
  },
  'Geppettin (Plushie or Bisque)': {
    question: 'What kind of living toy are you?',
    options: {
      'Bisque Geppettin': 'A porcelain doll with magical elegance and vintage charm.',
      'Plushie Geppettin': 'A soft and cuddly stuffed toy with surprising resilience.'
    }
  },
  Gnome: {
    question: 'What type of gnome are you?',
    options: {
      'Forest Gnome': 'Connected to nature and animals, with illusions and empathy.',
      'Rock Gnome': 'Tinkering inventor who crafts tiny mechanical gadgets for fun or utility.'
    }
  },
  Goliath: {
    question: 'What kind of giant blood flows through you?',
    options: {
      'Hill Goliath': 'Broad and brutal, shoving enemies aside with pure power.',
      'Stone Goliath': 'Solid as a rock, resisting damage with stoic might.',
      'Frost Goliath': 'Cold and unyielding, numbing foes with chilling strength.',
      'Fire Goliath': 'Radiating heat and striking with burning fury.',
      'Cloud Goliath': 'Graceful and elusive, moving like mist and evading harm.',
      'Storm Goliath': 'Crackling with energy, calling thunder and lightning to your side.'
    }
  },
  Mandrake: {
    question: 'What season were you harvested in?',
    options: {
      'Spring Mandrake': 'Your vines gently bring flying foes to the ground.',
      'Summer Mandrake': 'You reposition enemies with powerful, directed vines.',
      'Autumn Mandrake': 'You entangle more than one creature in a single burst.',
      'Winter Mandrake': 'Your vines deal a blast of chilling damage.'
    }
  },
  Eladrin: {
    question: 'Which season best reflects your nature?',
    options: {
      'Spring Eladrin': 'Your Fey Step can teleport an ally instead of you.',
      'Summer Eladrin': 'Your Fey Step burns foes around you.',
      'Autumn Eladrin': 'Your Fey Step charms nearby creatures.',
      'Winter Eladrin': 'Your Fey Step frightens a nearby enemy.'
    }
  },
  Shifter: {
    question: 'What animalistic trait emerges when you shift?',
    options: {
      'Beasthide Shifter': 'Tough and sturdy, shrugging off blows with a beast\u2019s hide.',
      'Longtooth Shifter': 'Ferocious and wild, tearing into foes with elongated fangs.',
      'Swiftstride Shifter': 'Fast and reactive, darting around opponents like a wildcat.',
      'Wildhunt Shifter': 'Instinctive and alert, never surprised and always tracking.'
    }
  },
  Tiefling: {
    question: 'What kind of fiendish ancestry do you bear?',
    options: {
      'Abyssal Tiefling': 'Chaotic and explosive, born of demons and destruction.',
      'Infernal Tiefling': 'Ordered and ruthless, touched by the flames of Hell.',
      'Chthonic Tiefling': 'Eerie and necrotic, rooted in death and shadowy power.'
    }
  },
  Dragonborn: {
    question: 'Which type of dragon is your ancestor?',
    options: {
      'Black Dragonborn': 'Tough and acidic, exhaling streams of burning acid.',
      'Blue Dragonborn': 'Proud and fierce, breathing blasts of lightning.',
      'Brass Dragonborn': 'Talkative and fiery, using fire breath with charm.',
      'Bronze Dragonborn': 'Loyal and noble, breathing controlled lightning.',
      'Copper Dragonborn': 'Trickster and agile, breathing acidic spray.',
      'Gold Dragonborn': 'Wise and regal, releasing mighty fire blasts.',
      'Green Dragonborn': 'Cunning and dangerous, exhaling poison.',
      'Red Dragonborn': 'Bold and aggressive, with the fiercest fire breath.',
      'Silver Dragonborn': 'Kind and strong, breathing cold to slow enemies.',
      'White Dragonborn': 'Savage and primal, exhaling icy frost at foes.'
    }
  }
};

const subQuestionsPT = {
  Elf: {
    question: 'Que tipo de elfo és?',
    options: {
      'High Elf': 'Elegante e refinado, com talento natural para magia arcana.',
      'Wood Elf': 'Discreto e ágil, move-se facilmente pelos ambientes naturais.',
      'Drow Elf': 'Pele escura e cabelo prateado, com sentidos aguçados e magia inata do Subterrâneo.'
    }
  },
  Genasi: {
    question: 'Que elemento corre no teu corpo?',
    options: {
      'Air Genasi': 'Ligeiro e rápido, com o vento sempre a favor.',
      'Earth Genasi': 'Pele de pedra e firmeza, resiste mesmo em terreno difícil.',
      'Fire Genasi': 'Brilhante e quente, com aura ardente e toque abrasador.',
      'Water Genasi': 'Fluido e flexível, respira debaixo de água e nada com facilidade.'
    }
  },
  'Geppettin (Plushie or Bisque)': {
    question: 'Que tipo de brinquedo vivo és?',
    options: {
      'Bisque Geppettin': 'Boneca de porcelana com charme antigo e magia elegante.',
      'Plushie Geppettin': 'Boneco de peluche fofinho e surpreendentemente resistente.'
    }
  },
  Gnome: {
    question: 'Que tipo de gnomo és?',
    options: {
      'Forest Gnome': 'Ligado à natureza e animais, com ilusões e empatia.',
      'Rock Gnome': 'Inventor engenhocas que cria pequenas máquinas divertidas ou úteis.'
    }
  },
  Goliath: {
    question: 'Que traços carrega o teu sangue de gigante?',
    options: {
      'Hill Goliath': 'Largo e bruto, empurrando inimigos com pura força.',
      'Stone Goliath': 'Sólido como rocha, resiste a dano com vigor estoico.',
      'Frost Goliath': 'Frio e inflexível, entorpece inimigos com força gélida.',
      'Fire Goliath': 'Radiante de calor, ataca com fúria ardente.',
      'Cloud Goliath': 'Gracioso e evasivo, move-se como névoa e evita dano.',
      'Storm Goliath': 'Carregado de energia, retalio com o estrondo da trovoada.'
    }
  },
  Mandrake: {
    question: 'Que poder sazonal tens tu?',
    options: {
      'Spring Mandrake': 'As tuas vinhas fazem cair inimigos voadores.',
      'Summer Mandrake': 'Reposicionas inimigos com vinhas poderosas e diretas.',
      'Autumn Mandrake': 'Prendes mais de uma criatura numa única explosão.',
      'Winter Mandrake': 'As tuas vinhas lançam uma rajada de dano gelado.'
    }
  },
  Eladrin: {
    question: 'Que poder sazonal se ativa quando te teletransportas?',
    options: {
      'Spring Eladrin': 'Teletransporto um aliado.',
      'Summer Eladrin': 'Queimo inimigos ao redor.',
      'Autumn Eladrin': 'Encanto criaturas próximas.',
      'Winter Eladrin': 'Aterrorizo um inimigo.'
    }
  },
  Shifter: {
    question: 'Que traço animal surge quando te transformas?',
    options: {
      'Beasthide Shifter': 'Robusto e resistente, ignorando golpes com pele bestial.',
      'Longtooth Shifter': 'Feroz e selvagem, rasga inimigos com presas alongadas.',
      'Swiftstride Shifter': 'Rápido e reativo, contorna adversários como um felino.',
      'Wildhunt Shifter': 'Instintivo e atento, nunca surpreendido e sempre em perseguição.'
    }
  },
  Tiefling: {
    question: 'Que tipo de ascendência carregas?',
    options: {
      'Abyssal Tiefling': 'Caótico e explosivo, descendente de demónios e destruição.',
      'Infernal Tiefling': 'Ordenado e impiedoso, tocado pelas chamas do Inferno.',
      'Chthonic Tiefling': 'Sombrio e necromântico, ligado à morte e ao poder das sombras.'
    }
  },
  Dragonborn: {
    question: 'De que tipo de dragão descendes?',
    options: {
      'Black Dragonborn': 'Resistente e ácido, exala jatos de ácido ardente.',
      'Blue Dragonborn': 'Orgulhoso e feroz, lança rajadas de relâmpago.',
      'Brass Dragonborn': 'Falador e fogoso, usa sopro de fogo com charme.',
      'Bronze Dragonborn': 'Leal e nobre, exala relâmpagos controlados.',
      'Copper Dragonborn': 'Brincalhão e ágil, cospe uma rajada de ácido.',
      'Gold Dragonborn': 'Sábio e régio, liberta potentes rajadas de fogo.',
      'Green Dragonborn': 'Astuto e perigoso, exala veneno.',
      'Red Dragonborn': 'Ousado e agressivo, com o fogo mais intenso.',
      'Silver Dragonborn': 'Bondoso e forte, exala frio para abrandar inimigos.',
      'White Dragonborn': 'Selvagem e primitivo, solta ar gélido sobre os inimigos.'
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
