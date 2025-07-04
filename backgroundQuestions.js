const step3pt = {
  title: 'Que Background Combina com a Tua Classe?',
  intro: '',
  classes: {
    Barbarian: {
      questions: [
        {
          text: '1. Como descreves a tua infância ou juventude?',
          options: {
            A: 'Trabalhava com ferramentas e construía coisas úteis (Artisan)',
            B: 'Animava os outros com música, dança ou histórias (Entertainer)',
            C: 'Cresci a trabalhar no campo, em contacto com a natureza (Farmer)',
            D: 'Era responsável por proteger pessoas ou locais (Guard)',
            E: 'Vivi rodeado de luxo, com educação e influência (Noble)',
            F: 'Passei muito tempo no mar, talvez em navios ou portos (Sailor)',
            G: 'Fui treinado para lutar, talvez como parte de um exército (Soldier)'
          }
        },
        {
          text: '2. O que é mais importante para ti numa aventura?',
          options: {
            A: 'Resolver problemas com engenho e habilidade manual (Artisan)',
            B: 'Ser admirado e expressar-me com criatividade (Entertainer)',
            C: 'Proteger a terra e os que nela vivem (Farmer)',
            D: 'Manter a ordem e proteger os outros (Guard)',
            E: 'Honrar o meu nome e mostrar liderança (Noble)',
            F: 'Descobrir novos horizontes e enfrentar tempestades (Sailor)',
            G: 'Combater lado a lado com os meus companheiros (Soldier)'
          }
        },
        {
          text: '3. Como lidas com conflito físico?',
          options: {
            A: 'Uso ferramentas ou truques para virar o jogo (Artisan)',
            B: 'Tento evitar, mas quando preciso, sou dramático! (Entertainer)',
            C: 'Defendo-me com força bruta, como aprendi a trabalhar duro (Farmer)',
            D: 'Estou habituado a lutar para proteger outros (Guard)',
            E: 'Espero que outros o façam por mim… ou pago para isso (Noble)',
            F: 'Uso a minha experiência em terreno irregular ou molhado (Sailor)',
            G: 'Estou sempre pronto para o combate — é o que faço melhor (Soldier)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes construir e reparar armas, armaduras e ferramentas. Poupas dinheiro e és engenhoso. (Artisan)',
            B: 'Sabes tocar instrumentos e usá-los para animar, acalmar ou inspirar os outros. (Entertainer)',
            C: 'Tens mais energia e resistência que o normal. Aguentas mais pancada que os outros. (Farmer)',
            D: 'Estás sempre atento ao que te rodeia. É muito difícil seres apanhado de surpresa. (Guard)',
            E: 'Consegues fazer discursos que animam os teus aliados e lhes dão coragem extra. (Noble)',
            F: 'Nadas bem, sabes navegar e aguentas muito tempo debaixo de água. (Sailor)',
            G: 'Quando atacas, consegues dar golpes especialmente violentos que causam mais dano. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Bard: {
      questions: [
        {
          text: '1. O que mais te fascina no mundo?',
          options: {
            A: 'O poder da fé e do conhecimento sagrado (Acolyte)',
            B: 'A emoção de enganar e manipular (Charlatan)',
            C: 'A alegria de entreter multidões (Entertainer)',
            D: 'O autoconhecimento e o retiro espiritual (Hermit)',
            E: 'A arte de negociar e acumular riqueza (Merchant)',
            F: 'O prestígio e a etiqueta da nobreza (Noble)',
            G: 'Viajar, explorar e descobrir novas culturas (Wayfarer)'
          }
        },
        {
          text: '2. Como preferes influenciar os outros?',
          options: {
            A: 'Com palavras inspiradas e ensinamentos (Acolyte)',
            B: 'Com charme e mentiras convincentes (Charlatan)',
            C: 'Através da música ou atuação (Entertainer)',
            D: 'Pela introspeção e sabedoria silenciosa (Hermit)',
            E: 'Com persuasão e trato comercial (Merchant)',
            F: 'Pela autoridade e tradição familiar (Noble)',
            G: 'Através de histórias do mundo e experiências vividas (Wayfarer)'
          }
        },
        {
          text: '3. Qual frase mais te define?',
          options: {
            A: 'A fé move montanhas. (Acolyte)',
            B: 'Consigo convencer qualquer um. (Charlatan)',
            C: 'A vida é um palco, e eu sou o centro. (Entertainer)',
            D: 'Encontrei a verdade no silêncio. (Hermit)',
            E: 'Tudo tem um preço justo. (Merchant)',
            F: 'A honra da minha família é tudo. (Noble)',
            G: 'Cada caminho é uma canção diferente. (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens facilidade em curar os outros e usar poderes ligados à fé e inspiração. (Acolyte)',
            B: 'Consegues mentir com convicção e fazer truques rápidos com as mãos. (Charlatan)',
            C: 'Tens talento natural para cativar multidões com música ou atuação. (Entertainer)',
            D: 'És resistente a magias que tentam invadir a tua mente. A tua alma é protegida. (Hermit)',
            E: 'Sabes negociar como ninguém e tens olho para encontrar itens raros ou valiosos. (Merchant)',
            F: 'Consegues liderar com palavras e presença. A tua autoridade inspira respeito. (Noble)',
            G: 'És bom a sobreviver em viagens, sabes orientar-te e falar línguas diferentes. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Cleric: {
      questions: [
        {
          text: '1. Onde nasceu a tua ligação ao sagrado?',
          options: {
            A: 'Numa instituição religiosa onde foste educado (Acolyte)',
            B: 'No isolamento, em reflexão pessoal (Hermit)',
            C: 'No meio rural, em contacto com a terra (Farmer)',
            D: 'Ao proteger locais ou pessoas sagradas (Guard)',
            E: 'Em jornadas e encontros espirituais (Guide)',
            F: 'Ao estudar a natureza do divino (Sage)',
            G: 'Em alto-mar, entre preces e tormentas (Sailor)',
            H: 'Ao copiar escrituras e textos sagrados (Scribe)',
            I: 'Em longas viagens por culturas diversas (Wayfarer)'
          }
        },
        {
          text: '2. Como preferes partilhar a tua fé?',
          options: {
            A: 'Com rituais e celebrações (Acolyte)',
            B: 'Aconselhando em silêncio (Hermit)',
            C: 'Pelo exemplo simples e prático (Farmer)',
            D: 'Com proteção e firmeza (Guard)',
            E: 'Contando o que viste nas tuas viagens (Guide)',
            F: 'Com palavras estudadas e conhecimento (Sage)',
            G: 'Com cânticos nas horas de trabalho (Sailor)',
            H: 'Com registos e manuscritos (Scribe)',
            I: 'Com sabedoria recolhida de outros povos (Wayfarer)'
          }
        },
        {
          text: '3. Qual destas situações descreve-te melhor?',
          options: {
            A: 'Cuidar de um templo (Acolyte)',
            B: 'Viver sozinho por escolha (Hermit)',
            C: 'Ajudar na colheita de uma aldeia (Farmer)',
            D: 'Defender fiéis de um ataque (Guard)',
            E: 'Acompanhar peregrinos (Guide)',
            F: 'Debater filosofia espiritual (Sage)',
            G: 'Rezar durante uma tempestade (Sailor)',
            H: 'Copiar pergaminhos antigos (Scribe)',
            I: 'Rezar em muitos idiomas diferentes (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens prática em curar, proteger aliados e expulsar criaturas das trevas. (Acolyte)',
            B: 'És muito resistente e tens uma reserva extra de energia vital. (Farmer)',
            C: 'Estás sempre em guarda. É difícil que alguém te apanhe desprevenido. (Guard)',
            D: 'Sabes orientar-te em terrenos difíceis e proteger quem viaja contigo. (Guide)',
            E: 'Tens uma proteção espiritual que te defende de influências mágicas externas. (Hermit)',
            F: 'Sabes lançar pequenos feitiços extra e aprender mais magias sagradas que o normal. (Sage)',
            G: 'És resistente, sabes nadar bem e mexer-te em barcos com facilidade. (Sailor)',
            H: 'Aprendes feitiços rapidamente e consegues copiá-los com precisão. (Scribe)',
            I: 'És versátil, sabes reagir bem a novas culturas e ambientes desconhecidos. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Hermit',C:'Farmer',D:'Guard',E:'Guide',F:'Sage',G:'Sailor',H:'Scribe',I:'Wayfarer'}
    },
    Druid: {
      questions: [
        {
          text: '1. Onde te sentes mais em paz?',
          options: {
            A: 'Na oficina, a moldar a natureza com as mãos (Artisan)',
            B: 'No campo, a cuidar da terra (Farmer)',
            C: 'Em trilhos por explorar, no meio da floresta (Guide)',
            D: 'Em silêncio, longe do mundo (Hermit)',
            E: 'Entre livros antigos e sabedoria ancestral (Sage)',
            F: 'A estudar mapas e registos antigos (Scribe)',
            G: 'Em viagens sem destino, movido pela curiosidade (Wayfarer)'
          }
        },
        {
          text: '2. Que tipo de sabedoria valorizas mais?',
          options: {
            A: 'Prática e artesanal (Artisan)',
            B: 'Intuitiva e natural (Farmer)',
            C: 'De sobrevivência e observação (Guide)',
            D: 'Interior e espiritual (Hermit)',
            E: 'Científica e natural (Sage)',
            F: 'Documentada e registrada (Scribe)',
            G: 'Empírica e multicultural (Wayfarer)'
          }
        },
        {
          text: '3. O que mais te define?',
          options: {
            A: 'Criação (Artisan)',
            B: 'Cultivo (Farmer)',
            C: 'Exploração (Guide)',
            D: 'Meditação (Hermit)',
            E: 'Pesquisa (Sage)',
            F: 'Documentação (Scribe)',
            G: 'Aventura (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes construir ferramentas e objetos úteis com recursos naturais. (Artisan)',
            B: 'Tens muita resistência e uma ligação prática com a terra e a vida. (Farmer)',
            C: 'És excelente a orientar-te na natureza e guiar outros por trilhos difíceis. (Guide)',
            D: 'Tens uma paz interior que te protege contra magias que afetam a mente. (Hermit)',
            E: 'Consegues aprender magias naturais adicionais graças ao teu estudo. (Sage)',
            F: 'Sabes copiar magias e registar conhecimento mágico com facilidade. (Scribe)',
            G: 'Adaptas-te bem a ambientes diferentes e aprendes com o mundo à tua volta. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Farmer',C:'Guide',D:'Hermit',E:'Sage',F:'Scribe',G:'Wayfarer'}
    },
    Fighter: {
      questions: [
        {
          text: '1. Qual foi a tua formação inicial?',
          options: {
            A: 'Trabalhei com ferramentas e engenho (Artisan)',
            B: 'Aprendi a cativar plateias com talento (Entertainer)',
            C: 'Cresci a trabalhar duro na terra (Farmer)',
            D: 'Fui treinado para proteger (Guard)',
            E: 'Recebi educação de elite (Noble)',
            F: 'Naveguei mares turbulentos (Sailor)',
            G: 'Fui moldado por vida militar (Soldier)'
          }
        },
        {
          text: '2. Como vêem a tua disciplina?',
          options: {
            A: 'Cauteloso e prático (Artisan)',
            B: 'Inovador e expressivo (Entertainer)',
            C: 'Resistente e resiliente (Farmer)',
            D: 'Vigilante e direto (Guard)',
            E: 'Orgulhoso e estratega (Noble)',
            F: 'Corajoso e adaptável (Sailor)',
            G: 'Determinado e obediente (Soldier)'
          }
        },
        {
          text: '3. Que tipo de combate preferes?',
          options: {
            A: 'Com improviso e ferramentas (Artisan)',
            B: 'Com dramatismo (Entertainer)',
            C: 'Força bruta (Farmer)',
            D: 'Defesa e tática (Guard)',
            E: 'Liderança e exemplo (Noble)',
            F: 'Rápido e flexível (Sailor)',
            G: 'Organizado e implacável (Soldier)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'És prático e sabes improvisar com ferramentas e armas feitas por ti. (Artisan)',
            B: 'Gostas de impressionar com estilo — até no combate. (Entertainer)',
            C: 'Tens um físico resistente graças ao trabalho duro. Aguentas muito. (Farmer)',
            D: 'Estás sempre atento e pronto para reagir a ameaças. (Guard)',
            E: 'A tua presença inspira liderança e respeito entre aliados. (Noble)',
            F: 'Tens equilíbrio, força e sabes movimentar-te bem em navios e molhados. (Sailor)',
            G: 'Sabes onde atacar para causar o maior dano possível em combate corpo-a-corpo. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Monk: {
      questions: [
        {
          text: '1. O que te guia?',
          options: {
            A: 'Uma causa religiosa ou espiritual (Acolyte)',
            B: 'A perfeição do artesanato (Artisan)',
            C: 'O dever de proteger (Guard)',
            D: 'A busca de paz interior (Hermit)',
            E: 'O legado da família (Noble)',
            F: 'O saber acumulado (Sage)',
            G: 'O registo do mundo (Scribe)'
          }
        },
        {
          text: '2. Como treinaste?',
          options: {
            A: 'Numa ordem religiosa (Acolyte)',
            B: 'A trabalhar com as mãos (Artisan)',
            C: 'Num treino de vigilância (Guard)',
            D: 'Em isolamento (Hermit)',
            E: 'Sob tutela de mestres nobres (Noble)',
            F: 'Em bibliotecas e academias (Sage)',
            G: 'Como aprendiz de escriba (Scribe)'
          }
        },
        {
          text: '3. O que melhor descreve a tua abordagem?',
          options: {
            A: 'Disciplina espiritual (Acolyte)',
            B: 'Foco técnico (Artisan)',
            C: 'Defesa ativa (Guard)',
            D: 'Introspecção (Hermit)',
            E: 'Dever e tradição (Noble)',
            F: 'Conhecimento profundo (Sage)',
            G: 'Registo e preservação (Scribe)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens poder espiritual que ajuda a resistir à magia e focar o teu interior. (Acolyte)',
            B: 'És disciplinado e sabes trabalhar com ferramentas e materiais diversos. (Artisan)',
            C: 'Reages rapidamente e não és facilmente surpreendido. (Guard)',
            D: 'A tua alma está centrada e protegida contra influências mentais. (Hermit)',
            E: 'Agues com honra e presença firme. Os outros seguem o teu exemplo. (Noble)',
            F: 'Aprendes rapidamente técnicas novas e tens boa memória. (Sage)',
            G: 'Sabes estudar e registar movimentos, planos ou técnicas detalhadamente. (Scribe)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Artisan',C:'Guard',D:'Hermit',E:'Noble',F:'Sage',G:'Scribe'}
    },
    Paladin: {
      questions: [
        {
          text: '1. O que te ensinou o sentido de justiça?',
          options: {
            A: 'Construir algo útil para outros (Artisan)',
            B: 'Ver o impacto das emoções nos outros (Entertainer)',
            C: 'Viver em comunidade e depender da terra (Farmer)',
            D: 'Proteger inocentes todos os dias (Guard)',
            E: 'Ser educado com valores de honra (Noble)',
            F: 'Salvar companheiros no mar (Sailor)',
            G: 'Combater o mal como soldado (Soldier)'
          }
        },
        {
          text: '2. Como juraste proteger os outros?',
          options: {
            A: 'Ajudando a construir um mundo melhor (Artisan)',
            B: 'Inspirando coragem com histórias e canções (Entertainer)',
            C: 'Cuidando dos teus vizinhos (Farmer)',
            D: 'Fazendo parte da guarda de uma cidade (Guard)',
            E: 'Através de um juramento solene perante a tua ordem (Noble)',
            F: 'Servindo num navio de patrulha (Sailor)',
            G: 'Em formação, com espada em mão (Soldier)'
          }
        },
        {
          text: '3. Que causa juraste defender?',
          options: {
            A: 'O bem comum e a estabilidade (Artisan)',
            B: 'A alegria e a esperança (Entertainer)',
            C: 'A sobrevivência e a colheita (Farmer)',
            D: 'A ordem e a lei (Guard)',
            E: 'Os valores da tua linhagem (Noble)',
            F: 'A liberdade e a coragem (Sailor)',
            G: 'A paz através da guerra justa (Soldier)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Trabalhas com dedicação e crias coisas úteis para servir os outros. (Artisan)',
            B: 'Inspiras os outros com as tuas palavras ou presença marcante. (Entertainer)',
            C: 'És forte, leal e aguentas muito fisicamente. (Farmer)',
            D: 'És sempre vigilante e pronto para defender os inocentes. (Guard)',
            E: 'Tens uma aura de liderança natural e valores nobres. (Noble)',
            F: 'És resistente e habituado a lidar com condições difíceis. (Sailor)',
            G: 'Lutas com disciplina e sabes golpear com força extra quando é preciso. (Soldier)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Entertainer',C:'Farmer',D:'Guard',E:'Noble',F:'Sailor',G:'Soldier'}
    },
    Ranger: {
      questions: [
        {
          text: '1. Que terras exploraste no passado?',
          options: {
            A: 'Regiões onde trabalhaste com as mãos (Artisan)',
            B: 'Cidades onde enganas e persuades (Charlatan)',
            C: 'Bairros perigosos onde sobreviver é um desafio (Criminal)',
            D: 'Regiões onde animaste e encantaste (Entertainer)',
            E: 'Florestas, montanhas e trilhos (Guide)',
            F: 'Costas e arquipélagos (Sailor)',
            G: 'Arquivos e bibliotecas de mapas (Scribe)',
            H: 'Campos de batalha em várias terras (Soldier)',
            I: 'Mundos desconhecidos e culturas longínquas (Wayfarer)'
          }
        },
        {
          text: '2. O que te tornou resiliente?',
          options: {
            A: 'Aprender um ofício (Artisan)',
            B: 'Manipular para sobreviver (Charlatan)',
            C: 'Fugir da lei (Criminal)',
            D: 'Conviver com multidões (Entertainer)',
            E: 'Enfrentar a natureza (Guide)',
            F: 'Desafiar o mar (Sailor)',
            G: 'Pesquisar e aprender com registos antigos (Scribe)',
            H: 'Treino militar (Soldier)',
            I: 'Experiências em diversas culturas (Wayfarer)'
          }
        },
        {
          text: '3. Qual o teu objetivo nas viagens solitárias?',
          options: {
            A: 'Ajudar quem encontrares com prática (Artisan)',
            B: 'Aproveitar cada oportunidade (Charlatan)',
            C: 'Fugir do passado (Criminal)',
            D: 'Levar arte a todos os cantos (Entertainer)',
            E: 'Ajudar os perdidos a encontrar caminho (Guide)',
            F: 'Defender marinheiros e povo costeiro (Sailor)',
            G: 'Registar e estudar o mundo (Scribe)',
            H: 'Levar paz com competência militar (Soldier)',
            I: 'Descobrir e aprender com tudo (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes fazer armadilhas, armas simples e reparar o que usas na natureza. (Artisan)',
            B: 'És convincente, rápido a improvisar e consegues enganar com facilidade. (Charlatan)',
            C: 'És furtivo, calculista e habituado a fugir de problemas. (Criminal)',
            D: 'Usas a criatividade até nas aventuras e gostas de cativar outros. (Entertainer)',
            E: 'Sabes explorar terrenos difíceis e sobreviver em qualquer lugar. (Guide)',
            F: 'Consegues nadar bem, equilibrar-te em superfícies instáveis e navegar. (Sailor)',
            G: 'Tens boa memória e estudaste mapas e estratégias. (Scribe)',
            H: 'Combinas treino militar com habilidades práticas de sobrevivência. (Soldier)',
            I: 'Adaptas-te rapidamente a novas terras, povos e desafios. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Charlatan',C:'Criminal',D:'Entertainer',E:'Guide',F:'Sailor',G:'Scribe',H:'Soldier',I:'Wayfarer'}
    },
    Rogue: {
      questions: [
        {
          text: '1. Como aprendeste a ser furtivo?',
          options: {
            A: 'A esconder ferramentas e truques (Artisan)',
            B: 'A enganar para conseguir o que queres (Charlatan)',
            C: 'Nas ruas e becos da cidade (Criminal)',
            D: 'A fugir do palco em momentos dramáticos (Entertainer)',
            E: 'Ao emboscar nas matas (Guide)',
            F: 'A evitar piratas e contrabandistas (Sailor)',
            G: 'A observar sem ser notado (Scribe)',
            H: 'Em missões táticas (Soldier)',
            I: 'Durante viagens perigosas (Wayfarer)'
          }
        },
        {
          text: '2. Qual era o teu truque favorito na rua?',
          options: {
            A: 'Ferramentas ocultas (Artisan)',
            B: 'Ilusionismo verbal (Charlatan)',
            C: 'Mãos leves (Criminal)',
            D: 'Encantar com espectáculos (Entertainer)',
            E: 'Caçar com armadilhas (Guide)',
            F: 'Esconder contrabando (Sailor)',
            G: 'Memorizar tudo à volta (Scribe)',
            H: 'Sabotar estruturas (Soldier)',
            I: 'Misturar-me entre culturas (Wayfarer)'
          }
        },
        {
          text: '3. Por que escolheste o caminho do risco?',
          options: {
            A: 'Para testar engenho (Artisan)',
            B: 'Pela emoção da manipulação (Charlatan)',
            C: 'Por necessidade (Criminal)',
            D: 'Pela adrenalina da atuação (Entertainer)',
            E: 'Para proteger viajantes (Guide)',
            F: 'Para ganhar liberdade (Sailor)',
            G: 'Para registar tudo secretamente (Scribe)',
            H: 'Para servir numa guerra clandestina (Soldier)',
            I: 'Para encontrar algo perdido (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Sabes esconder ferramentas, improvisar e criar itens engenhosos. (Artisan)',
            B: 'Tens lábia e mãos rápidas — sabes enganar e roubar sem ser notado. (Charlatan)',
            C: 'Sabes mexer-te nas sombras, abrir fechaduras e desaparecer. (Criminal)',
            D: 'Usas o teu charme e dramatismo para manipular ou distrair. (Entertainer)',
            E: 'Conheces trilhos escondidos e sabes montar emboscadas eficazes. (Guide)',
            F: 'Sabes fugir e manobrar até nas piores situações. Adaptas-te bem. (Sailor)',
            G: 'Tens atenção aos detalhes e memória visual excelente. (Scribe)',
            H: 'Sabes atacar de forma rápida e letal — com precisão militar. (Soldier)',
            I: 'Tens experiência com diversas culturas e consegues passar despercebido. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Artisan',B:'Charlatan',C:'Criminal',D:'Entertainer',E:'Guide',F:'Sailor',G:'Scribe',H:'Soldier',I:'Wayfarer'}
    },
    Sorcerer: {
      questions: [
        {
          text: '1. Quando descobriste o teu poder interior?',
          options: {
            A: 'Durante um ritual religioso (Acolyte)',
            B: 'Quando enganaste alguém com um "truque" que era magia (Charlatan)',
            C: 'No palco, quando algo explodiu (Entertainer)',
            D: 'Em isolamento, por acidente (Hermit)',
            E: 'Ao fechar um negócio arriscado (Merchant)',
            F: 'Desde criança, como herança de sangue nobre (Noble)',
            G: 'Durante uma viagem por uma terra estranha (Wayfarer)'
          }
        },
        {
          text: '2. Como lidaram os outros com a tua magia?',
          options: {
            A: 'Com respeito e veneração (Acolyte)',
            B: 'Com suspeita (Charlatan)',
            C: 'Com aplausos (Entertainer)',
            D: 'Com medo (Hermit)',
            E: 'Como uma vantagem competitiva (Merchant)',
            F: 'Como uma bênção esperada (Noble)',
            G: 'Com fascínio e mistério (Wayfarer)'
          }
        },
        {
          text: '3. O que procuras fazer com o teu dom?',
          options: {
            A: 'Servir o bem maior (Acolyte)',
            B: 'Obter vantagem (Charlatan)',
            C: 'Impressionar e emocionar (Entertainer)',
            D: 'Descobrir a verdade dentro de mim (Hermit)',
            E: 'Crescer em influência (Merchant)',
            F: 'Honrar o nome da família (Noble)',
            G: 'Descobrir os limites do mundo (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Tens ligação a poderes sagrados e consegues curar ou proteger com magia. (Acolyte)',
            B: 'Usas a tua magia com truques e palavras bem escolhidas para enganar. (Charlatan)',
            C: 'A tua magia vem com estilo e emoção. Impressionas multidões. (Entertainer)',
            D: 'A tua magia é protegida por um espírito interior que te guia. (Hermit)',
            E: 'Sabes aproveitar a magia para ganhar vantagem e fazer trocas eficazes. (Merchant)',
            F: 'A tua presença mágica impõe respeito. És naturalmente influente. (Noble)',
            G: 'A tua magia adapta-se a tudo — culturas, perigos e locais diferentes. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Warlock: {
      questions: [
        {
          text: '1. Como conheceste o teu patrono?',
          options: {
            A: 'A rezar no altar do templo (Acolyte)',
            B: 'Ao enganar alguém e sentir uma presença estranha (Charlatan)',
            C: 'Em pleno palco, no auge da atuação (Entertainer)',
            D: 'Durante anos de solidão e introspecção (Hermit)',
            E: 'Ao tentar obter poder e riqueza (Merchant)',
            F: 'Por herança ou profecia ancestral (Noble)',
            G: 'Ao vaguear por planos desconhecidos (Wayfarer)'
          }
        },
        {
          text: '2. Que promessa fizeste em troca de poder?',
          options: {
            A: 'Servir como missionário do patrono (Acolyte)',
            B: 'Convencer outros a fazerem pactos (Charlatan)',
            C: 'Difundir o nome do patrono com atuações (Entertainer)',
            D: 'Manter o segredo e obedecer (Hermit)',
            E: 'Usar os dons para lucro (Merchant)',
            F: 'Expandir a influência do patrono na corte (Noble)',
            G: 'Descobrir os limites da magia (Wayfarer)'
          }
        },
        {
          text: '3. O que desejas conquistar?',
          options: {
            A: 'Um mundo mais justo (Acolyte)',
            B: 'Poder absoluto (Charlatan)',
            C: 'Fama eterna (Entertainer)',
            D: 'Conhecimento proibido (Hermit)',
            E: 'Fortuna e estatuto (Merchant)',
            F: 'Glória e reconhecimento (Noble)',
            G: 'Sabedoria sem fronteiras (Wayfarer)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Usas o poder que recebeste com devoção quase religiosa. (Acolyte)',
            B: 'Consegues convencer outros a seguir o teu caminho mágico com charme e astúcia. (Charlatan)',
            C: 'Usas a magia do teu patrono de forma cativante e dramática. (Entertainer)',
            D: 'A tua ligação mágica nasceu na solidão e dá-te resistência mental. (Hermit)',
            E: 'Negocias favores e magias como quem troca mercadorias valiosas. (Merchant)',
            F: 'A tua presença imponente reforça o poder do teu patrono. (Noble)',
            G: 'Exploras os limites do teu pacto mágico com curiosidade e coragem. (Wayfarer)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Charlatan',C:'Entertainer',D:'Hermit',E:'Merchant',F:'Noble',G:'Wayfarer'}
    },
    Wizard: {
      questions: [
        {
          text: '1. Como entraste no mundo da magia?',
          options: {
            A: 'Pela religião e rituais (Acolyte)',
            B: 'A fabricar e estudar artefatos (Artisan)',
            C: 'Por necessidade e esperteza (Criminal)',
            D: 'A vigiar e proteger algo arcano (Guard)',
            E: 'Por interesse em relíquias valiosas (Merchant)',
            F: 'Pelo acesso a educação privilegiada (Noble)',
            G: 'Pela sede de conhecimento (Sage)',
            H: 'A copiar textos e feitiços (Scribe)'
          }
        },
        {
          text: '2. O que mais te motiva a aprender?',
          options: {
            A: 'A devoção (Acolyte)',
            B: 'A prática (Artisan)',
            C: 'A sobrevivência (Criminal)',
            D: 'A responsabilidade (Guard)',
            E: 'A ambição (Merchant)',
            F: 'A herança (Noble)',
            G: 'A curiosidade (Sage)',
            H: 'A documentação (Scribe)'
          }
        },
        {
          text: '3. Onde está o teu habitat natural?',
          options: {
            A: 'Mosteiro ou templo (Acolyte)',
            B: 'Oficina arcana (Artisan)',
            C: 'Submundo urbano (Criminal)',
            D: 'Quartel ou torre de vigia (Guard)',
            E: 'Feira ou mercado (Merchant)',
            F: 'Salões de estudo (Noble)',
            G: 'Biblioteca (Sage)',
            H: 'Sala de arquivos (Scribe)'
          }
        },
        {
          text: '4. Que talento especial gostarias que a tua personagem tivesse desde o início da aventura?',
          options: {
            A: 'Começaste com magia sagrada e isso deu-te uma base sólida. (Acolyte)',
            B: 'És bom a criar objetos mágicos ou ferramentas arcanas úteis. (Artisan)',
            C: 'Usas a magia com astúcia para sobreviver e obter vantagem. (Criminal)',
            D: 'Estás atento e proteges os teus segredos com disciplina. (Guard)',
            E: 'Sabes usar magia para obter lucro ou fazer trocas vantajosas. (Merchant)',
            F: 'A tua educação deu-te acesso a magias raras e poderosas. (Noble)',
            G: 'Aprendes e dominas magias com mais facilidade que os outros. (Sage)',
            H: 'Consegues copiar, registar e alterar magias com precisão única. (Scribe)'
          }
        }
      ],
      mapping: {A:'Acolyte',B:'Artisan',C:'Criminal',D:'Guard',E:'Merchant',F:'Noble',G:'Sage',H:'Scribe'}
    }
  }
};
const step3en = {
  title: 'Which Background Fits Your Class?',
  intro: "After you know your class, use the corresponding quiz to find the ideal background. Only backgrounds compatible with your class's main traits will be presented.",
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
