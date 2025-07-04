const step1pt = {
      title: 'Que espécie gostarias de jogar?',
      tree: {
        question: 'Qual é a altura da tua personagem?',
        options: {
          A: { label: 'Muito Baixa – Tão pequena como um banco de taverna ou uma mochila', next: {
            question: 'Aspeto humanoide ou animalesco/inorgânico?',
            options: {
              A: { label: 'Humanoide', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Orelhas grandes, sorriso malandro e corpo esguio?', result: 'Goblin' },
                  B: { label: 'Pequena e brilhante com asas de inseto?', result: 'Fairy' },
                  C: { label: 'Pequeno gnomo de pele cinzenta e olhos grandes?', result: 'Deep Gnome' }
                }
              }},
              B: { label: 'Animalesco ou inorgânico', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Pequeno, corcunda, parecido com um pássaro sem voo, com bico e penas?', result: 'Kenku' },
                  B: { label: 'Escamas vermelhas, aspecto de lagarto, focinho de dragão?', result: 'Kobold' },
                  C: { label: 'Semelhante a brinquedo — corpo de peluche ou porcelana?', result: 'Geppettin (Plushie or Bisque)' }
                }
              }}
            }
          }},
          B: { label: 'Baixa – Da altura de uma mesa de taverna ou do peito de um humano comum.', next: {
            question: 'Aspeto animalesco ou humanoide?',
            options: {
              A: { label: 'Animal', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Cabeça de coelho, irrequieto e rápido?', result: 'Harengon' },
                  B: { label: 'Curvado, cheio de penas e a imitar sons?', result: 'Kenku' },
                  C: { label: 'Pequeno lagarto com rosto de dragão?', result: 'Kobold' }
                }
              }},
              B: { label: 'Humanoide', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Corpo largo, armadura e barba?', result: 'Dwarf' },
                  B: { label: 'Anão sombrio de pele acinzentada com equipamento pesado?', result: 'Duergar' },
                  C: { label: 'Pés descalços, rosto redondo e cheio de alegria?', result: 'Halfling' },
                  D: { label: 'Curioso inventor com ferramentas e roupas coloridas?', result: 'Gnome' },
                  E: { label: 'Gnomo subterrâneo de pele cinzenta?', result: 'Deep Gnome' }
                }
              }}
            }
          }},
          C: { label: 'Média – Aproximadamente da altura de um humano comum.', next: {
            question: 'Qual é a sua natureza?',
            options: {
              A: { label: 'Humanoide ou ligeiramente monstruosa', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Completamente comum?', result: 'Human' },
                  B: { label: 'Aura radiante, olhos brilhantes?', result: 'Aasimar' },
                  C: { label: 'Chifres, cauda, pele vermelha ou roxa?', result: 'Tiefling' },
                  D: { label: 'Presas, pele cinzento-esverdeada, ar selvagem?', result: 'Orc' },
                  E: { label: 'Forma mutável e pele lisa e pálida?', result: 'Changeling' },
                  F: { label: 'Pele vermelha, postura disciplinada?', result: 'Hobgoblin' }
                }
              }},
              B: { label: 'Claramente animal', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Corpo e rosto felino, cauda longa?', result: 'Tabaxi' },
                  B: { label: 'Transformações bestiais (presas, garras)?', result: 'Shifter' },
                  C: { label: 'Pernas de cabra, cornos, espírito travesso?', result: 'Satyr' },
                  D: { label: 'Face de serpente, olhos fendidos, calma hipnótica?', result: 'Yuan-ti' },
                  E: { label: 'Carapaça nas costas, membros fortes, ar pacífico?', result: 'Tortle' }
                }
              }},
              C: { label: 'Élfica', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Elfo gracioso clássico de orelhas longas?', result: 'Elf' },
                  B: { label: 'Elfo cujo visual muda com as estações?', result: 'Eladrin' },
                  C: { label: 'Elfo pálido ou sombrio com expressão séria?', result: 'Shadar-kai' }
                }
              }},
              D: { label: 'Aquático', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Elfo esguio com barbatanas ou guelras?', result: 'Sea Elf' },
                  B: { label: 'Guerreiro escamado do oceano com tridente?', result: 'Triton' }
                }
              }},
              E: { label: 'Construto, elemental ou planta', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Corpo de marioneta, madeira e membros articulados?', result: 'Geppettin (Marionette)' },
                  B: { label: 'Pele como casca ou coberta de folhas?', result: 'Mandrake' },
                  C: { label: 'Corpo feito de fogo, névoa, pedra ou água?', result: 'Genasi' }
                }
              }}
            }
          }},
          D: { label: 'Alta – Acima da altura comum de um humano como um estandarte de guerra ou um armário de armas.', next: {
            question: 'Escolhe a descrição que melhor se adequa:',
            options: {
              A: { label: 'Cabeça de dragão com sopro elemental?', result: 'Dragonborn' },
              B: { label: 'Rosto de lagarto com cauda e crista?', result: 'Lizardfolk' },
              C: { label: 'Postura ereta com traços de cobra?', result: 'Yuan-ti' },
              D: { label: 'Guerreiro tribal alto de presas?', result: 'Orc' },
              E: { label: 'Cabeça de touro, com chifres e cascos mas tronco humano?', result: 'Minotaur' },
              F: { label: 'Pernas de cabra, cornos, alegria musical?', result: 'Satyr' },
              G: { label: 'Guerreiro pálido de traços afiados?', result: 'Githyanki' },
              H: { label: 'Calmo, de pele amarelada-esverdeada?', result: 'Githzerai' },
              I: { label: 'Ser vegetal andante com pele de casca?', result: 'Mandrake' },
              J: { label: 'Elfo com aparência sazonal mutável?', result: 'Eladrin' }
            }
          }},
          E: { label: 'Muito Alta – Tão alta como uma carroça empilhada ou uma estante de uma biblioteca arcana.', next: {
            question: 'Escolhe a descrição que melhor se adequa:',
            options: {
              A: { label: 'Gigante peludo de braços longos e presas?', result: 'Bugbear' },
              B: { label: 'Corpo de cavalo e torso humano?', result: 'Centaur' },
              C: { label: 'Humanoide entroncado com ascendência elemental de gigante?', result: 'Goliath' },
              D: { label: 'Gigante da floresta de pele azul musgosa?', result: 'Firbolg' },
              E: { label: 'Árvore andante adulta ou humanoide coberto de casca?', result: 'Mandrake' }
            }
          }}
        }
      }
    };

const step1en = {
      title: 'Which species would you like to play as?',
      tree: {
        question: 'How tall is your character?',
        options: {
          A: { label: 'Very short', next: {
            question: 'Human-like or animalistic or object-like?',
            options: {
              A: { label: 'Human-like', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Big ears, sharp grin, wiry frame?', result: 'Goblin' },
                  B: { label: 'Tiny and glowing with insect wings?', result: 'Fairy' },
                  C: { label: 'Small gray-skinned gnome with large eyes?', result: 'Deep Gnome' }
                }
              }},
              B: { label: 'Animalistic or object-like', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Small, hunched flightless birdlike humanoid with beak and feathers?', result: 'Kenku' },
                  B: { label: 'Red-scaled, lizard-like, dragon-snouted?', result: 'Kobold' },
                  C: { label: 'Toy-like — plush or porcelain-bodied?', result: 'Geppettin (Plushie or Bisque)' }
                }
              }}
            }
          }},
          B: { label: 'Short', next: {
            question: 'Are they animal-like or human-like?',
            options: {
              A: { label: 'Animal-like', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Bunny-headed, twitchy and fast?', result: 'Harengon' },
                  B: { label: 'Hunched, feathered and mimicking?', result: 'Kenku' },
                  C: { label: 'Small dragon-faced lizardling?', result: 'Kobold' }
                }
              }},
              B: { label: 'Human-like', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Broad-bodied, armored and bearded?', result: 'Dwarf' },
                  B: { label: 'Grim and ashen dwarf with heavy gear?', result: 'Duergar' },
                  C: { label: 'Barefoot and round-faced, full of joy?', result: 'Halfling' },
                  D: { label: 'Curious tinkerer with tools and bright clothes?', result: 'Gnome' },
                  E: { label: 'Deep-dwelling gnome with gray skin?', result: 'Deep Gnome' }
                }
              }}
            }
          }},
          C: { label: 'Average height', next: {
            question: 'What is their nature?',
            options: {
              A: { label: 'Humanlike or slightly magical', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Completely ordinary?', result: 'Human' },
                  B: { label: 'Radiant aura, glowing eyes?', result: 'Aasimar' },
                  C: { label: 'Horns, tail, red or purple skin?', result: 'Tiefling' },
                  D: { label: 'Tusks, greenish-gray skin, primal look?', result: 'Orc' },
                  E: { label: 'Pale and smooth-skinned shapeshifter?', result: 'Changeling' },
                  F: { label: 'Red skin, disciplined and postured?', result: 'Hobgoblin' }
                }
              }},
              B: { label: 'Clearly animalistic', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Feline body and face, long tail?', result: 'Tabaxi' },
                  B: { label: 'Beast-like changes (fangs, claws)?', result: 'Shifter' },
                  C: { label: 'Goat legs, horns, mischievous spirit?', result: 'Satyr' },
                  D: { label: 'Serpentine face, slitted eyes, hypnotic calm?', result: 'Yuan-ti' },
                  E: { label: 'Shell on back, strong limbs, peaceful look?', result: 'Tortle' }
                }
              }},
              C: { label: 'Elven', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Classic graceful elf with long ears?', result: 'Elf' },
                  B: { label: 'Elf whose look shifts with the seasons?', result: 'Eladrin' },
                  C: { label: 'Pale or shadowy elf with grim expression?', result: 'Shadar-kai' }
                }
              }},
              D: { label: 'Aquatic', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Sleek elf with fins or gills?', result: 'Sea Elf' },
                  B: { label: 'Scaled oceanic warrior with trident?', result: 'Triton' }
                }
              }},
              E: { label: 'Constructed, elemental, or plant-based', next: {
                question: 'Which description fits best?',
                options: {
                  A: { label: 'Puppet-like body, wood or jointed limbs?', result: 'Geppettin (Marionette)' },
                  B: { label: 'Skin like bark or covered in leaves?', result: 'Mandrake' },
                  C: { label: 'Body made of flame, mist, rock or water?', result: 'Genasi' }
                }
              }}
            }
          }},
          D: { label: 'Tall', next: {
            question: 'Choose the best description:',
            options: {
              A: { label: 'Dragon-headed with breath weapon?', result: 'Dragonborn' },
              B: { label: 'Lizard-faced with tail and frill?', result: 'Lizardfolk' },
              C: { label: 'Upright with snake features?', result: 'Yuan-ti' },
              D: { label: 'Tall, tusked tribal warrior?', result: 'Orc' },
              E: { label: 'Bull-headed, horned, hoofed but with human torso and hands?', result: 'Minotaur' },
              F: { label: 'Goat legs, horns, musical joy?', result: 'Satyr' },
              G: { label: 'Pale warrior with sharp features?', result: 'Githyanki' },
              H: { label: 'Calm with yellow-green skin?', result: 'Githzerai' },
              I: { label: 'Plant-bodied humanoid with bark skin?', result: 'Mandrake' },
              J: { label: 'Elf with changing seasonal look?', result: 'Eladrin' }
            }
          }},
          E: { label: 'Very tall', next: {
            question: 'Choose the best description:',
            options: {
              A: { label: 'Hairy giant with long arms and fangs?', result: 'Bugbear' },
              B: { label: 'Horse body and human torso?', result: 'Centaur' },
              C: { label: 'Muscular and marked like stone?', result: 'Goliath' },
              D: { label: 'Mossy, blue-skinned forest giant?', result: 'Firbolg' },
              E: { label: 'Fully grown walking tree or bark-covered humanoid?', result: 'Mandrake' }
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
    question: 'Que sangue de gigante corre em ti?',
    options: {
      'Hill Goliath': 'Largo e bruto, empurrando inimigos com pura força.',
      'Stone Goliath': 'Sólido como rocha, resiste a dano com vigor estoico.',
      'Frost Goliath': 'Frio e inflexível, entorpece inimigos com força gélida.',
      'Fire Goliath': 'Radiante de calor, ataca com fúria ardente.',
      'Cloud Goliath': 'Gracioso e evasivo, move-se como névoa e evita dano.',
      'Storm Goliath': 'Carregado de energia, invoca trovões e relâmpagos a seu lado.'
    }
  },
  Mandrake: {
    question: 'Em que estação foste colhido?',
    options: {
      'Spring Mandrake': 'As tuas vinhas fazem cair inimigos voadores com suavidade.',
      'Summer Mandrake': 'Reposicionas inimigos com vinhas poderosas e diretas.',
      'Autumn Mandrake': 'Prendes mais de uma criatura numa única explosão.',
      'Winter Mandrake': 'As tuas vinhas lançam uma rajada de dano gelado.'
    }
  },
  Eladrin: {
    question: 'Que estação reflete melhor a tua natureza?',
    options: {
      'Spring Eladrin': 'O teu Passo Feérico pode teletransportar um aliado.',
      'Summer Eladrin': 'O teu Passo Feérico queima inimigos ao redor.',
      'Autumn Eladrin': 'O teu Passo Feérico encanta criaturas próximas.',
      'Winter Eladrin': 'O teu Passo Feérico provoca medo num inimigo.'
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
    question: 'Que tipo de ascendência demoníaca carregas?',
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
      'Copper Dragonborn': 'Brincalhão e ágil, cospe spray ácido.',
      'Gold Dragonborn': 'Sábio e régio, liberta potentes rajadas de fogo.',
      'Green Dragonborn': 'Astuto e perigoso, exala veneno.',
      'Red Dragonborn': 'Ousado e agressivo, com o fogo mais intenso.',
      'Silver Dragonborn': 'Bondoso e forte, exala frio para abrandar inimigos.',
      'White Dragonborn': 'Selvagem e primitivo, solta gelo gélido sobre os inimigos.'
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
