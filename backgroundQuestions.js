const step3pt = {
  title: 'Que Background Combina com a Tua Classe?',
  intro: '',
  classes: {
    Barbarian: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Mais vida e resistência', result: 'Farmer (Tough)' },
          B: { label: 'Dano físico extra', result: 'Soldier (Savage Attacker)' },
          C: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' },
          D: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
          E: { label: 'Muitas perícias', result: 'Artisan (Skilled)' }
        }
      }
    },
    Rogue: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Iniciativa e reação rápida', result: 'Criminal (Alert)' },
          B: { label: 'Magia básica e suporte', result: 'Guide (Magic Initiate - Druid)' },
          C: { label: 'Muitas perícias', next: {
              question: 'Que tipo de perícias te interessam?',
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
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Curar com perícia', result: 'Hermit (Healer)' },
          C: { label: 'Reagir rapidamente', result: 'Guard (Alert)' },
          D: { label: 'Sorte e versatilidade', result: 'Wayfarer (Lucky)' },
          E: { label: 'Muitas perícias', result: 'Scribe (Skilled)' }
        }
      }
    },
    Druid: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Guide (Magic Initiate - Druid)' },
          B: { label: 'Curar com perícia', result: 'Hermit (Healer)' },
          C: { label: 'Reagir rapidamente', result: 'Guard (Alert)' },
          D: { label: 'Sorte e versatilidade', result: 'Wayfarer (Lucky)' },
          E: { label: 'Muitas perícias', result: 'Farmer (Skilled)' }
        }
      }
    },
    Bard: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' },
          C: { label: 'Habilidades sociais fortes', result: 'Charlatan (Skilled)' },
          D: { label: 'Ser músico ou artista', result: 'Entertainer (Musician)' },
          E: { label: 'Muitas perícias', result: 'Scribe (Skilled)' }
        }
      }
    },
    Sorcerer: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Sage (Magic Initiate - Wizard)' },
          B: { label: 'Sorte e improviso', result: 'Merchant (Lucky)' },
          C: { label: 'Habilidades sociais fortes', result: 'Charlatan (Skilled)' },
          D: { label: 'Muitas perícias', result: 'Scribe (Skilled)' }
        }
      }
    },
    Warlock: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
        options: {
          A: { label: 'Magia complementar', result: 'Acolyte (Magic Initiate - Cleric)' },
          B: { label: 'Sorte e improviso', result: 'Wayfarer (Lucky)' },
          C: { label: 'Habilidades sociais fortes', result: 'Charlatan (Skilled)' },
          D: { label: 'Muitas perícias', result: 'Scribe (Skilled)' }
        }
      }
    },
    Wizard: {
      tree: {
        question: 'Que tipo de feat te parece mais interessante?',
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
          C: { label: 'Muitas perícias', next: {
              question: 'Que tipo de perícias te interessam?',
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
              question: 'Que tipo de feat te parece mais interessante?',
              options: {
                A: { label: 'Movimento e velocidade', result: 'Wayfarer (Lucky)' },
                B: { label: 'Consciência e suporte', result: 'Hermit (Healer)' },
                C: { label: 'Muitas perícias', result: 'Scribe (Skilled)' }
              }
            } },
          B: { label: 'Prefiro focar-me só na agilidade física.', next: {
              question: 'Que tipo de feat te parece mais interessante?',
              options: {
                A: { label: 'Iniciativa rápida e furtividade', result: 'Criminal (Alert)' },
                B: { label: 'Movimento e sorte', result: 'Wayfarer (Lucky)' }
              }
            } },
          C: { label: 'Prefiro focar-me só na clareza mental e percepção.', next: {
              question: 'Que tipo de feat te parece mais interessante?',
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
              question: 'Que tipo de feat te parece mais interessante?',
              options: {
                A: { label: 'Curar e proteger aliados', result: 'Acolyte (Magic Initiate - Cleric)' },
                B: { label: 'Ter presença e sorte', result: 'Wayfarer (Lucky)' },
                C: { label: 'Muitas perícias úteis', result: 'Charlatan (Skilled)' }
              }
            } },
          B: { label: 'Prefiro ser um defensor forte e direto.', next: {
              question: 'Que tipo de feat te parece mais interessante?',
              options: {
                A: { label: 'Mais vida e resistência', result: 'Farmer (Tough)' },
                B: { label: 'Dano físico extra', result: 'Soldier (Savage Attacker)' }
              }
            } },
          C: { label: 'Prefiro ser alguém inspirador e eloquente.', next: {
              question: 'Que tipo de feat te parece mais interessante?',
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
              question: 'Que tipo de feat te parece mais interessante?',
              options: {
                A: { label: 'Explorar e sobreviver', result: 'Guide (Magic Initiate - Druid)' },
                B: { label: 'Agir rápido e com sorte', result: 'Wayfarer (Lucky)' },
                C: { label: 'Muitas perícias úteis', result: 'Scribe (Skilled)' }
              }
            } },
          B: { label: 'Prefiro mover-me com leveza e rapidez.', next: {
              question: 'Que tipo de feat te parece mais interessante?',
              options: {
                A: { label: 'Furtividade e ferramentas', result: 'Criminal (Alert)' },
                B: { label: 'Movimento e sorte', result: 'Wayfarer (Lucky)' }
              }
            } },
          C: { label: 'Prefiro seguir os meus instintos e sentidos.', next: {
              question: 'Que tipo de feat te parece mais interessante?',
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
                    A: { label: 'Skills úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Vida extra', result: 'Farmer (Tough)' },
                    C: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    D: { label: 'Dano físico', result: 'Soldier (Savage Attacker)' }
                  }
                } },
              B: { label: 'Dexterity', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Skills úteis', result: 'Charlatan (Skilled)' },
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
                    A: { label: 'Skills úteis', result: 'Charlatan (Skilled)' },
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
                    A: { label: 'Skills úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Armas leves, arco, mobilidade', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Skills úteis', result: 'Scribe (Skilled)' },
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
                    A: { label: 'Skills úteis', result: 'Artisan (Crafter)' },
                    B: { label: 'Iniciativa rápida', result: 'Guard (Alert)' },
                    C: { label: 'Sorte e improviso', result: 'Noble (Skilled)' }
                  }
                } },
              B: { label: 'Armas leves, arco, mobilidade', next: {
                  question: 'O que gostarias de fazer fora do combate?',
                  options: {
                    A: { label: 'Skills úteis', result: 'Scribe (Skilled)' },
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
      questions: [
        {
          text: '1. How would you describe your childhood or youth?',
          options: {
            A: 'I worked with tools and built useful things (Artisan)',
            B: 'I entertained others with music, dance or stories (Entertainer)',
            C: 'I grew up working the land, in contact with nature (Farmer)',
            D: 'I was responsible for protecting people or places (Guard)',
            E: 'I lived surrounded by luxury, with education and influence (Noble)',
            F: 'I spent much time at sea, perhaps on ships or in ports (Sailor)',
            G: 'I was trained to fight, maybe as part of an army (Soldier)'
          }
        },
        {
          text: '2. What is most important to you in an adventure?',
          options: {
            A: 'Solving problems with ingenuity and handiwork (Artisan)',
            B: 'Being admired and expressing myself creatively (Entertainer)',
            C: 'Protecting the land and those who live on it (Farmer)',
            D: 'Keeping order and protecting others (Guard)',
            E: 'Honoring my name and showing leadership (Noble)',
            F: 'Discovering new horizons and facing storms (Sailor)',
            G: 'Fighting side by side with my companions (Soldier)'
          }
        },
        {
          text: '3. How do you handle physical conflict?',
          options: {
            A: 'I use tools or tricks to turn the tide (Artisan)',
            B: 'I try to avoid it, but when needed I am dramatic! (Entertainer)',
            C: 'I defend myself with brute force learned from hard work (Farmer)',
            D: 'I am used to fighting to protect others (Guard)',
            E: 'I expect others to do it for me… or I pay for it (Noble)',
            F: 'I rely on my experience in rough or wet terrain (Sailor)',
            G: "I'm always ready for combat—it's what I do best (Soldier)"
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You know how to craft and repair weapons, armor and tools. You save money and are resourceful. (Artisan)',
            B: 'You can play instruments to cheer, calm or inspire others. (Entertainer)',
            C: 'You have more stamina and endurance than normal. You can take more hits. (Farmer)',
            D: "You're always alert to your surroundings. It's very hard to surprise you. (Guard)",
            E: 'You can give speeches that rally your allies and boost their courage. (Noble)',
            F: 'You swim well, know how to navigate and can hold your breath a long time. (Sailor)',
            G: 'When you strike, your blows are especially violent and cause more damage. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Bard: {
      questions: [
        {
          text: '1. What fascinates you most about the world?',
          options: {
            A: 'The power of faith and sacred knowledge (Acolyte)',
            B: 'The thrill of deceiving and manipulating (Charlatan)',
            C: 'The joy of entertaining crowds (Entertainer)',
            D: 'Self-knowledge and spiritual retreat (Hermit)',
            E: 'The art of negotiating and accumulating wealth (Merchant)',
            F: 'Prestige and noble etiquette (Noble)',
            G: 'Traveling, exploring and discovering new cultures (Wayfarer)'
          }
        },
        {
          text: '2. How do you prefer to influence others?',
          options: {
            A: 'With inspired words and teachings (Acolyte)',
            B: 'With charm and convincing lies (Charlatan)',
            C: 'Through music or performance (Entertainer)',
            D: 'Through introspection and quiet wisdom (Hermit)',
            E: 'With persuasion and business dealings (Merchant)',
            F: 'Through authority and family tradition (Noble)',
            G: 'Through stories of the world and life experiences (Wayfarer)'
          }
        },
        {
          text: '3. Which phrase defines you best?',
          options: {
            A: 'Faith moves mountains. (Acolyte)',
            B: 'I can convince anyone. (Charlatan)',
            C: "Life is a stage and I'm the center. (Entertainer)",
            D: 'I found truth in silence. (Hermit)',
            E: 'Everything has a fair price. (Merchant)',
            F: "My family's honor is everything. (Noble)",
            G: 'Every road is a different song. (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You easily heal others and use powers tied to faith and inspiration. (Acolyte)',
            B: 'You can lie convincingly and perform quick hand tricks. (Charlatan)',
            C: 'You naturally captivate crowds with music or acting. (Entertainer)',
            D: 'You resist magic that tries to invade your mind. Your soul is shielded. (Hermit)',
            E: 'You know how to negotiate and spot rare or valuable items. (Merchant)',
            F: 'You can lead with words and presence. Your authority commands respect. (Noble)',
            G: "You're good at surviving on journeys, navigating and speaking different languages. (Wayfarer)"
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Cleric: {
      questions: [
        {
          text: '1. Where did your bond with the sacred begin?',
          options: {
            A: 'In a religious institution where you were educated (Acolyte)',
            B: 'In isolation, in personal reflection (Hermit)',
            C: 'In rural life, in contact with the earth (Farmer)',
            D: 'By protecting sacred places or people (Guard)',
            E: 'On journeys and spiritual encounters (Guide)',
            F: 'By studying the nature of the divine (Sage)',
            G: 'At sea, among prayers and storms (Sailor)',
            H: 'Copying scriptures and sacred texts (Scribe)',
            I: 'On long travels through diverse cultures (Wayfarer)'
          }
        },
        {
          text: '2. How do you prefer to share your faith?',
          options: {
            A: 'With rituals and celebrations (Acolyte)',
            B: 'Giving quiet counsel (Hermit)',
            C: 'By simple and practical example (Farmer)',
            D: 'With protection and firmness (Guard)',
            E: 'Telling what you saw on your journeys (Guide)',
            F: 'With studied words and knowledge (Sage)',
            G: 'With chants during work hours (Sailor)',
            H: 'With records and manuscripts (Scribe)',
            I: 'With wisdom gathered from other peoples (Wayfarer)'
          }
        },
        {
          text: '3. Which of these situations describes you best?',
          options: {
            A: 'Taking care of a temple (Acolyte)',
            B: 'Living alone by choice (Hermit)',
            C: 'Helping with a village harvest (Farmer)',
            D: 'Defending the faithful from an attack (Guard)',
            E: 'Escorting pilgrims (Guide)',
            F: 'Debating spiritual philosophy (Sage)',
            G: 'Praying during a storm (Sailor)',
            H: 'Copying ancient scrolls (Scribe)',
            I: 'Praying in many different languages (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You are skilled in healing, shielding allies and turning away creatures of darkness. (Acolyte)',
            B: 'You are very hardy and have an extra reserve of vitality. (Farmer)',
            C: "You're always on guard. It's difficult for anyone to catch you unaware. (Guard)",
            D: 'You know how to navigate rough terrain and protect those traveling with you. (Guide)',
            E: 'You possess a spiritual protection that shields you from external magical influence. (Hermit)',
            F: 'You can cast extra cantrips and learn more sacred spells than usual. (Sage)',
            G: 'You are tough, swim well and move easily on ships. (Sailor)',
            H: 'You learn spells quickly and can copy them with precision. (Scribe)',
            I: 'You are versatile, reacting well to new cultures and unfamiliar environments. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Hermit',C:'Farmer',D:'Guard',E:'Guide',F:'Sage',G:'Sailor',H:'Scribe',I:'Wayfarer'}
    },
    Druid: {
      questions: [
        {
          text: '1. Where do you feel most at peace?',
          options: {
            A: 'In a workshop, shaping nature with your hands (Artisan)',
            B: 'In the fields, tending the land (Farmer)',
            C: 'On unexplored trails deep in the forest (Guide)',
            D: 'In silence, far from the world (Hermit)',
            E: 'Among ancient books and timeless wisdom (Sage)',
            F: 'Studying maps and old records (Scribe)',
            G: 'On aimless journeys driven by curiosity (Wayfarer)'
          }
        },
        {
          text: '2. What type of wisdom do you value most?',
          options: {
            A: 'Practical and artisanal (Artisan)',
            B: 'Intuitive and natural (Farmer)',
            C: 'Survival and observation (Guide)',
            D: 'Inner and spiritual (Hermit)',
            E: 'Scientific and natural (Sage)',
            F: 'Documented and recorded (Scribe)',
            G: 'Empirical and multicultural (Wayfarer)'
          }
        },
        {
          text: '3. What defines you most?',
          options: {
            A: 'Creation (Artisan)',
            B: 'Cultivation (Farmer)',
            C: 'Exploration (Guide)',
            D: 'Meditation (Hermit)',
            E: 'Research (Sage)',
            F: 'Documentation (Scribe)',
            G: 'Adventure (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You know how to craft tools and useful items from natural resources. (Artisan)',
            B: 'You have great endurance and a practical connection with the land and life. (Farmer)',
            C: 'You are excellent at navigating the wild and guiding others through difficult trails. (Guide)',
            D: 'You possess inner peace that shields you from mind-affecting magic. (Hermit)',
            E: 'You can learn additional nature spells thanks to your studies. (Sage)',
            F: 'You know how to copy spells and record magical knowledge easily. (Scribe)',
            G: 'You adapt well to different environments and learn from the world around you. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Farmer',C:'Guide',D:'Hermit',E:'Sage',F:'Scribe',G:'Wayfarer'}
    },
    Fighter: {
      questions: [
        {
          text: '1. What was your initial training?',
          options: {
            A: 'I worked with tools and ingenuity (Artisan)',
            B: 'I learned to captivate audiences with talent (Entertainer)',
            C: 'I grew up working hard on the land (Farmer)',
            D: 'I was trained to protect (Guard)',
            E: 'I received elite education (Noble)',
            F: 'I sailed turbulent seas (Sailor)',
            G: 'I was shaped by a military life (Soldier)'
          }
        },
        {
          text: '2. How is your discipline viewed?',
          options: {
            A: 'Cautious and practical (Artisan)',
            B: 'Innovative and expressive (Entertainer)',
            C: 'Enduring and resilient (Farmer)',
            D: 'Vigilant and direct (Guard)',
            E: 'Proud and strategic (Noble)',
            F: 'Courageous and adaptable (Sailor)',
            G: 'Determined and obedient (Soldier)'
          }
        },
        {
          text: '3. What type of combat do you prefer?',
          options: {
            A: 'Improvised with tools (Artisan)',
            B: 'Dramatic (Entertainer)',
            C: 'Brute force (Farmer)',
            D: 'Defense and tactics (Guard)',
            E: 'Leadership and example (Noble)',
            F: 'Fast and flexible (Sailor)',
            G: 'Organized and relentless (Soldier)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You are practical and can improvise with tools and weapons you craft. (Artisan)',
            B: 'You like to impress with style—even in combat. (Entertainer)',
            C: 'You have a tough physique thanks to hard work. You endure a lot. (Farmer)',
            D: 'You are always alert and ready to react to threats. (Guard)',
            E: 'Your presence inspires leadership and respect among allies. (Noble)',
            F: 'You have balance and strength, moving well on ships and slick surfaces. (Sailor)',
            G: 'You know where to strike to cause maximum damage in melee. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Monk: {
      questions: [
        {
          text: '1. What guides you?',
          options: {
            A: 'A religious or spiritual cause (Acolyte)',
            B: 'The perfection of craftsmanship (Artisan)',
            C: 'The duty to protect (Guard)',
            D: 'The search for inner peace (Hermit)',
            E: 'Family legacy (Noble)',
            F: 'Accumulated knowledge (Sage)',
            G: 'Recording the world (Scribe)'
          }
        },
        {
          text: '2. How did you train?',
          options: {
            A: 'In a religious order (Acolyte)',
            B: 'Working with my hands (Artisan)',
            C: 'In watchful training (Guard)',
            D: 'In isolation (Hermit)',
            E: 'Under the tutelage of noble masters (Noble)',
            F: 'In libraries and academies (Sage)',
            G: "As a scribe's apprentice (Scribe)"
          }
        },
        {
          text: '3. What best describes your approach?',
          options: {
            A: 'Spiritual discipline (Acolyte)',
            B: 'Technical focus (Artisan)',
            C: 'Active defense (Guard)',
            D: 'Introspection (Hermit)',
            E: 'Duty and tradition (Noble)',
            F: 'Deep knowledge (Sage)',
            G: 'Record and preservation (Scribe)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You have spiritual power that helps resist magic and focus your inner self. (Acolyte)',
            B: 'You are disciplined and know how to work with various tools and materials. (Artisan)',
            C: 'You react quickly and are not easily surprised. (Guard)',
            D: 'Your soul is centered and protected from mental influence. (Hermit)',
            E: 'You act with honor and a firm presence. Others follow your example. (Noble)',
            F: 'You learn new techniques quickly and have a good memory. (Sage)',
            G: 'You know how to study and record movements, plans or techniques in detail. (Scribe)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Artisan',C:'Guard',D:'Hermit',E:'Noble',F:'Sage',G:'Scribe'}
    },
    Paladin: {
      questions: [
        {
          text: '1. What taught you the meaning of justice?',
          options: {
            A: 'Building something useful for others (Artisan)',
            B: 'Seeing the impact of emotions on others (Entertainer)',
            C: 'Living in community and relying on the land (Farmer)',
            D: 'Protecting innocents every day (Guard)',
            E: 'Being raised with values of honor (Noble)',
            F: 'Saving companions at sea (Sailor)',
            G: 'Fighting evil as a soldier (Soldier)'
          }
        },
        {
          text: '2. How did you swear to protect others?',
          options: {
            A: 'Helping build a better world (Artisan)',
            B: 'Inspiring courage with stories and songs (Entertainer)',
            C: 'Caring for your neighbors (Farmer)',
            D: "Serving as part of a city's guard (Guard)",
            E: 'Through a solemn oath before your order (Noble)',
            F: 'Serving on a patrol ship (Sailor)',
            G: 'In formation, sword in hand (Soldier)'
          }
        },
        {
          text: '3. What cause did you swear to defend?',
          options: {
            A: 'The common good and stability (Artisan)',
            B: 'Joy and hope (Entertainer)',
            C: 'Survival and the harvest (Farmer)',
            D: 'Order and law (Guard)',
            E: 'The values of your lineage (Noble)',
            F: 'Freedom and courage (Sailor)',
            G: 'Peace through just war (Soldier)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You work diligently and create useful things to serve others. (Artisan)',
            B: 'You inspire others with your words or striking presence. (Entertainer)',
            C: 'You are strong, loyal and physically tough. (Farmer)',
            D: 'You are ever vigilant and ready to defend the innocent. (Guard)',
            E: 'You have a natural aura of leadership and noble values. (Noble)',
            F: 'You are hardy and used to dealing with harsh conditions. (Sailor)',
            G: 'You fight with discipline and know how to strike with extra force when needed. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Ranger: {
      questions: [
        {
          text: '1. Which lands have you explored in the past?',
          options: {
            A: 'Regions where you worked with your hands (Artisan)',
            B: 'Cities where you deceive and persuade (Charlatan)',
            C: 'Dangerous neighborhoods where surviving is a challenge (Criminal)',
            D: 'Places where you entertained and enchanted (Entertainer)',
            E: 'Forests, mountains and trails (Guide)',
            F: 'Coasts and archipelagos (Sailor)',
            G: 'Map archives and libraries (Scribe)',
            H: 'Battlefields in various lands (Soldier)',
            I: 'Unknown worlds and distant cultures (Wayfarer)'
          }
        },
        {
          text: '2. What made you resilient?',
          options: {
            A: 'Learning a trade (Artisan)',
            B: 'Manipulating to survive (Charlatan)',
            C: 'Running from the law (Criminal)',
            D: 'Living among crowds (Entertainer)',
            E: 'Facing nature (Guide)',
            F: 'Challenging the sea (Sailor)',
            G: 'Researching and learning from ancient records (Scribe)',
            H: 'Military training (Soldier)',
            I: 'Experiences in diverse cultures (Wayfarer)'
          }
        },
        {
          text: '3. What is your goal on solitary journeys?',
          options: {
            A: 'Helping those you meet with practical skills (Artisan)',
            B: 'Taking advantage of every opportunity (Charlatan)',
            C: 'Running from the past (Criminal)',
            D: 'Bringing art to every corner (Entertainer)',
            E: 'Helping the lost find their way (Guide)',
            F: 'Protecting sailors and coastal folk (Sailor)',
            G: 'Recording and studying the world (Scribe)',
            H: 'Bringing peace with military competence (Soldier)',
            I: 'Discovering and learning from everything (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You can craft traps, simple weapons and repair what you use in the wild. (Artisan)',
            B: 'You are persuasive, quick to improvise and can deceive easily. (Charlatan)',
            C: 'You are stealthy, calculating and used to running from trouble. (Criminal)',
            D: 'You use creativity even on adventures and love to captivate others. (Entertainer)',
            E: 'You know how to explore rough terrain and survive anywhere. (Guide)',
            F: 'You can swim well, balance on unstable surfaces and navigate. (Sailor)',
            G: 'You have a good memory and studied maps and strategies. (Scribe)',
            H: 'You combine military training with practical survival skills. (Soldier)',
            I: 'You adapt quickly to new lands, peoples and challenges. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Charlatan',C:'Criminal',D:'Entertainer',E:'Guide',F:'Sailor',G:'Scribe',H:'Soldier',I:'Wayfarer'}
    },
    Rogue: {
      questions: [
        {
          text: '1. How did you learn to be stealthy?',
          options: {
            A: 'By hiding tools and tricks (Artisan)',
            B: 'By deceiving to get what you want (Charlatan)',
            C: 'In the streets and alleys of the city (Criminal)',
            D: 'By fleeing the stage in dramatic moments (Entertainer)',
            E: 'By ambushing in the woods (Guide)',
            F: 'By avoiding pirates and smugglers (Sailor)',
            G: 'By observing without being noticed (Scribe)',
            H: 'On tactical missions (Soldier)',
            I: 'During dangerous travels (Wayfarer)'
          }
        },
        {
          text: '2. What was your favorite trick on the street?',
          options: {
            A: 'Hidden tools (Artisan)',
            B: 'Verbal sleight of hand (Charlatan)',
            C: 'Light fingers (Criminal)',
            D: 'Charming with performances (Entertainer)',
            E: 'Hunting with traps (Guide)',
            F: 'Hiding contraband (Sailor)',
            G: 'Memorizing everything around (Scribe)',
            H: 'Sabotaging structures (Soldier)',
            I: 'Blending into different cultures (Wayfarer)'
          }
        },
        {
          text: '3. Why did you choose the risky path?',
          options: {
            A: 'To test my ingenuity (Artisan)',
            B: 'For the thrill of manipulation (Charlatan)',
            C: 'Out of necessity (Criminal)',
            D: 'For the adrenaline of performing (Entertainer)',
            E: 'To protect travelers (Guide)',
            F: 'To gain freedom (Sailor)',
            G: 'To record everything in secret (Scribe)',
            H: 'To serve in a clandestine war (Soldier)',
            I: 'To find something lost (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You know how to hide tools, improvise and create ingenious items. (Artisan)',
            B: 'You have the gift of gab and quick hands—able to deceive and steal unnoticed. (Charlatan)',
            C: 'You can move in the shadows, pick locks and vanish. (Criminal)',
            D: 'You use charm and drama to manipulate or distract. (Entertainer)',
            E: 'You know hidden paths and can set effective ambushes. (Guide)',
            F: 'You can escape and maneuver even in the worst situations, adapting well. (Sailor)',
            G: 'You pay attention to details and have excellent visual memory. (Scribe)',
            H: 'You know how to strike quickly and lethally—with military precision. (Soldier)',
            I: 'You have experience with many cultures and can go unnoticed. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Charlatan',C:'Criminal',D:'Entertainer',E:'Guide',F:'Sailor',G:'Scribe',H:'Soldier',I:'Wayfarer'}
    },
    Sorcerer: {
      questions: [
        {
          text: '1. When did you discover your inner power?',
          options: {
            A: 'During a religious ritual (Acolyte)',
            B: "When you fooled someone with a 'trick' that was actually magic (Charlatan)",
            C: 'On stage, when something exploded (Entertainer)',
            D: 'In isolation, by accident (Hermit)',
            E: 'While closing a risky deal (Merchant)',
            F: 'Since childhood, as a noble bloodline heritage (Noble)',
            G: 'During a journey through a strange land (Wayfarer)'
          }
        },
        {
          text: '2. How did others deal with your magic?',
          options: {
            A: 'With respect and veneration (Acolyte)',
            B: 'With suspicion (Charlatan)',
            C: 'With applause (Entertainer)',
            D: 'With fear (Hermit)',
            E: 'As a competitive advantage (Merchant)',
            F: 'As an expected blessing (Noble)',
            G: 'With fascination and mystery (Wayfarer)'
          }
        },
        {
          text: '3. What do you seek to do with your gift?',
          options: {
            A: 'Serve the greater good (Acolyte)',
            B: 'Gain an advantage (Charlatan)',
            C: 'Impress and move others (Entertainer)',
            D: 'Discover the truth within me (Hermit)',
            E: 'Grow in influence (Merchant)',
            F: 'Honor the family name (Noble)',
            G: 'Discover the limits of the world (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You have a connection to holy powers and can heal or shield with magic. (Acolyte)',
            B: 'You use your magic with tricks and well-chosen words to deceive. (Charlatan)',
            C: 'Your magic comes with style and emotion. You wow crowds. (Entertainer)',
            D: 'Your magic is guarded by an inner spirit that guides you. (Hermit)',
            E: 'You know how to leverage magic to gain advantage and make profitable trades. (Merchant)',
            F: 'Your magical presence commands respect. You\'re naturally influential. (Noble)',
            G: 'Your magic adapts to everything—cultures, dangers and different places. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Warlock: {
      questions: [
        {
          text: '1. How did you meet your patron?',
          options: {
            A: 'While praying at the temple altar (Acolyte)',
            B: 'By tricking someone and sensing a strange presence (Charlatan)',
            C: 'On stage at the height of a performance (Entertainer)',
            D: 'During years of solitude and introspection (Hermit)',
            E: 'While seeking power and wealth (Merchant)',
            F: 'Through heritage or ancestral prophecy (Noble)',
            G: 'While wandering unknown planes (Wayfarer)'
          }
        },
        {
          text: '2. What promise did you make in exchange for power?',
          options: {
            A: "To serve as the patron's missionary (Acolyte)",
            B: 'To convince others to make pacts (Charlatan)',
            C: "To spread the patron's name through performances (Entertainer)",
            D: 'To keep the secret and obey (Hermit)',
            E: 'To use the gifts for profit (Merchant)',
            F: "To expand the patron's influence at court (Noble)",
            G: 'To discover the limits of magic (Wayfarer)'
          }
        },
        {
          text: '3. What do you wish to conquer?',
          options: {
            A: 'A fairer world (Acolyte)',
            B: 'Absolute power (Charlatan)',
            C: 'Eternal fame (Entertainer)',
            D: 'Forbidden knowledge (Hermit)',
            E: 'Fortune and status (Merchant)',
            F: 'Glory and recognition (Noble)',
            G: 'Wisdom without borders (Wayfarer)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You wield the power you received with almost religious devotion. (Acolyte)',
            B: 'You can convince others to follow your magical path with charm and cunning. (Charlatan)',
            C: "You use your patron's magic in a captivating, dramatic way. (Entertainer)",
            D: 'Your magical connection was born in solitude and gives you mental resilience. (Hermit)',
            E: 'You trade favors and spells like valuable goods. (Merchant)',
            F: "Your imposing presence bolsters your patron's power. (Noble)",
            G: 'You explore the limits of your magical pact with curiosity and courage. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Wizard: {
      questions: [
        {
          text: '1. How did you enter the world of magic?',
          options: {
            A: 'Through religion and rituals (Acolyte)',
            B: 'By crafting and studying artifacts (Artisan)',
            C: 'Out of necessity and cunning (Criminal)',
            D: 'Guarding and protecting something arcane (Guard)',
            E: 'Because of an interest in valuable relics (Merchant)',
            F: 'Through access to privileged education (Noble)',
            G: 'From a thirst for knowledge (Sage)',
            H: 'By copying texts and spells (Scribe)'
          }
        },
        {
          text: '2. What motivates you most to learn?',
          options: {
            A: 'Devotion (Acolyte)',
            B: 'Practice (Artisan)',
            C: 'Survival (Criminal)',
            D: 'Responsibility (Guard)',
            E: 'Ambition (Merchant)',
            F: 'Heritage (Noble)',
            G: 'Curiosity (Sage)',
            H: 'Documentation (Scribe)'
          }
        },
        {
          text: '3. Where is your natural habitat?',
          options: {
            A: 'Monastery or temple (Acolyte)',
            B: 'Arcane workshop (Artisan)',
            C: 'Urban underworld (Criminal)',
            D: 'Barracks or watchtower (Guard)',
            E: 'Fair or market (Merchant)',
            F: 'Halls of study (Noble)',
            G: 'Library (Sage)',
            H: 'Archive room (Scribe)'
          }
        },
        {
          text: '4. Which special talent would you like your character to have from the start of the adventure?',
          options: {
            A: 'You began with sacred magic that gave you a solid foundation. (Acolyte)',
            B: 'You are good at crafting magical items or useful arcane tools. (Artisan)',
            C: 'You use magic cunningly to survive and gain advantage. (Criminal)',
            D: 'You stay alert and guard your secrets with discipline. (Guard)',
            E: 'You know how to use magic for profit or advantageous deals. (Merchant)',
            F: 'Your education grants you access to rare and powerful spells. (Noble)',
            G: 'You learn and master spells more easily than others. (Sage)',
            H: 'You can copy, record and alter spells with unique precision. (Scribe)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Artisan',C:'Criminal',D:'Guard',E:'Merchant',F:'Noble',G:'Sage',H:'Scribe'}
    }
  }
};
