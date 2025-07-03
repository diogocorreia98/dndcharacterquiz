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
const data = {
  pt: {
    step1: {
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
    },
    step2: {
      title: 'Que Classe Combina Contigo?',
      tree: {
        question: 'Qual o nível de complexidade que preferes para a tua personagem?',
        options: {
          A: { label: 'O mínimo possível — quero algo simples e direto.', next: {
            question: 'Que estilo te atrai mais?',
            options: {
              A: { label: 'Força bruta e fúria pura. (Barbarian)', result: 'Barbarian' },
              B: { label: 'Perícia marcial e adaptabilidade. (Fighter)', result: 'Fighter' },
              C: { label: 'Furtividade, velocidade e precisão. (Rogue)', result: 'Rogue' }
            }
          }},
          B: { label: 'Uma abordagem equilibrada — gosto de variedade sem demasiada complexidade.', next: {
            question: 'Que estilo equilibrado soa mais apelativo?',
            options: {
              A: { label: 'Cura e apoio divino em combate. (Cleric)', result: 'Cleric' },
              B: { label: 'Um guerreiro sagrado que inspira e defende. (Paladin)', result: 'Paladin' },
              C: { label: 'Um rastreador habilidoso com magia prática. (Ranger)', result: 'Ranger' },
              D: { label: 'Um mestre de muitas magias com boa preparação. (Wizard)', result: 'Wizard' }
            }
          }},
          C: { label: 'Gosto de dominar sistemas complexos e desafios.', next: {
            question: 'Que papel complexo te atrai?',
            options: {
              A: { label: 'Um mago da natureza que muda de forma. (Druid)', result: 'Druid' },
              B: { label: 'Um artista marcial rápido com poder interior. (Monk)', result: 'Monk' },
              C: { label: 'Um artista estiloso que lança feitiços com charme. (Bard)', result: 'Bard' },
              D: { label: 'Um poderoso conjurador inato. (Sorcerer)', result: 'Sorcerer' },
              E: { label: 'Um conjurador ligado a um pacto com magia misteriosa. (Warlock)', result: 'Warlock' }
            }
          }}
        }
      }
    },
    step3: step3pt
  },
  en: {
    step1: {
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
      }},
      step2: {
        title: 'Which Class Fits You?',
        tree: {
          question: 'What level of complexity do you prefer in your character?',
          options: {
          A: { label: 'As little as possible — I want something simple and direct.', next: {
            question: 'Which style appeals most to you?',
            options: {
              A: { label: 'Brutal force and raw rage. (Barbarian)', result: 'Barbarian' },
              B: { label: 'Martial expertise and adaptability. (Fighter)', result: 'Fighter' },
              C: { label: 'Stealth, speed, and precision. (Rogue)', result: 'Rogue' }
            }
          }},
          B: { label: 'A balanced approach — I enjoy variety without too much complexity.', next: {
            question: 'Which balanced style sounds most appealing?',
            options: {
              A: { label: 'Healing and divine support in battle. (Cleric)', result: 'Cleric' },
              B: { label: 'A holy warrior who inspires and defends. (Paladin)', result: 'Paladin' },
              C: { label: 'A skilled tracker with practical magic. (Ranger)', result: 'Ranger' },
              D: { label: 'A master of many spells with good preparation. (Wizard)', result: 'Wizard' }
            }
          }},
          C: { label: 'I enjoy mastering complex systems and challenges.', next: {
            question: 'Which complex role are you drawn to?',
            options: {
              A: { label: 'A shape-shifting nature mage. (Druid)', result: 'Druid' },
              B: { label: 'A fast-paced martial artist with inner power. (Monk)', result: 'Monk' },
              C: { label: 'A stylish performer who casts spells with flair. (Bard)', result: 'Bard' },
              D: { label: 'A powerful innate spellcaster. (Sorcerer)', result: 'Sorcerer' },
              E: { label: 'A pact-bound spellcaster with mysterious magic. (Warlock)', result: 'Warlock' }
            }
          }}
        }
      }
    },
    step3: step3en,
  }
};
  const speciesInfo = {
    pt: {
    "Aasimar": "Radiantes e de aparência humana, os Aasimar destacam-se pelos olhos brilhantes, traços perfeitos e uma aura que parece sagrada. A sua natureza celestial concede-lhes poderes de cura e a capacidade de invocar explosões de energia divina, por vezes até manifestando asas espectrais.",
    "Dragonborn": "Os Dragonborn assemelham-se a dragões bípedes com corpos poderosos, pele escamosa em cores vibrantes e cabeças dracónicas imponentes. Conseguem libertar um sopro de poder elemental—como fogo, relâmpago ou gelo—e são naturalmente resistentes a esse mesmo elemento.",
    "Black Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Black Dragonborn partilham esta forma mas têm escamas escuras e oleosas e olhos amarelos penetrantes. Cospem ácido e são naturalmente resistentes a ele.",
    "Blue Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Blue Dragonborn brilham com escamas de cobalto e cristas orgulhosas, respirando relâmpagos e resistindo à sua força.",
    "Brass Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Brass Dragonborn têm escamas quentes e arenosas e expressões amigáveis, respirando fogo e encantando com facilidade conversadora.",
    "Bronze Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Bronze Dragonborn cintilam com escamas metálicas de bronze, canalizando relâmpagos com nobreza.",
    "Copper Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Copper Dragonborn são cobertos por escamas avermelhadas e douradas, respirando ácido e mostrando um espírito brincalhão.",
    "Gold Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Gold Dragonborn brilham com escamas douradas e exalam fogo intenso, mantendo uma postura digna e calma.",
    "Green Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Green Dragonborn têm escamas verde-esmeralda e olhos astutos, exalando nuvens venenosas que combinam com a sua astúcia.",
    "Red Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Red Dragonborn brilham com escamas carmesim, libertando chamas ferozes e ambição intensa.",
    "Silver Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os Silver Dragonborn reluzem com escamas prateadas, exalando hálito gelado e protegendo aliados com força tranquila.",
    "White Dragonborn": "Os Dragonborn têm corpos musculados e escamosos e cabeças reptilianas imponentes. Os White Dragonborn têm escamas brancas como neve e expressões primitivas, respirando frio intenso com instinto puro.",
    "Dwarf": "Baixos, robustos e resistentes, os anões têm barbas espessas, corpos poderosos e olhos firmes. Resistentes a venenos, veem no subsolo e são difíceis de derrubar.",
    "Elf": "Altos e esguios, os elfos têm orelhas alongadas, traços angulosos e uma postura graciosa. Veem na escuridão, resistem a encantamentos e apenas precisam de meditar para descansar.",
    "Drow Elf": "Os elfos são altos e esguios, com orelhas pontiagudas e traços intemporais. Os Drow partilham esta forma mas têm pele de obsidiana e olhos luminosos, usando magia inata e misturando sedução com perigo.",
    "High Elf": "Os elfos são altos e elegantes, com orelhas longas e postura graciosa. Os High Elves têm traços refinados, tons de pele mais claros e um ar de nobreza. São naturalmente dotados de magia arcana e intelecto aguçado.",
    "Wood Elf": "Os elfos são altos e elegantes, com orelhas longas e postura graciosa. Os Wood Elves fundem-se nas sombras da floresta com tons terrosos e movimentos silenciosos. São rápidos, furtivos e profundamente ligados à natureza.",
    "Gnome": "Os gnomos são pequenos e enérgicos, com traços exagerados e olhos expressivos. São curiosos e inteligentes, frequentemente resistindo a magias mentais e inventando pequenas maravilhas.",
    "Forest Gnome": "Os gnomos são pequenos e enérgicos, com traços exagerados e olhos expressivos. Os Forest Gnomes preferem cores naturais e adornos de folhas, comunicando com animais e escondendo-se com ilusões mágicas.",
    "Rock Gnome": "Os gnomos são pequenos e enérgicos, com traços exagerados e olhos expressivos. Os Rock Gnomes transportam ferramentas, lentes e engenhocas, criando dispositivos que realizam pequenos truques mágicos.",
    "Goliath": "Os Goliath são enormes e atléticos, mais altos do que a maioria dos mortais. A sua pele é frequentemente pedregosa ou tatuada, e a sua força permite-lhes suportar dores que outros não aguentam.",
    "Cloud Goliath": "Os Goliath são humanoides altos e largos, com ascendência elemental. Os Cloud Goliath têm tez pálida e enevoada e conseguem teletransportar-se brevemente como se montassem o vento.",
    "Fire Goliath": "Os Goliath são humanoides altos e largos, com ascendência elemental. Os Fire Goliath brilham com calor interno, revidando com explosões de fogo quando feridos.",
    "Frost Goliath": "Os Goliath são humanoides altos e largos, com ascendência elemental. Os Frost Goliath têm pele azulada e olhos gelados, irradiando frio que abranda os inimigos.",
    "Hill Goliath": "Os Goliath são humanoides altos e largos, com ascendência elemental. Os Hill Goliath são ossudos e corpulentos, derrubando inimigos com pura massa.",
    "Stone Goliath": "Os Goliath são humanoides altos e largos, com ascendência elemental. Os Stone Goliath têm pele cor de ardósia e resistência incomparável a golpes.",
    "Storm Goliath": "Os Goliath são humanoides altos e largos, com ascendência elemental. Os Storm Goliath crepitam com energia estática, libertando trovões quando são atingidos.",
    "Halfling": "Os Halflings são pequenos e de rosto redondo, com alegria natural e postura humilde. São incrivelmente sortudos, difíceis de apanhar e frequentemente sobrevivem ao perigo com um sorriso.",
    "Human": "Os humanos assemelham-se aos do nosso mundo, mas em D&D são conhecidos pela sua adaptabilidade. Começam com uma vantagem extra, permitindo-lhes sobressair cedo em qualquer papel.",
    "Orc": "Os orcs são altos, musculados e de aparência selvagem, com presas e pele esverdeada ou acinzentada. São brutalmente fortes, podem investir em combate e recuperam mais depressa após serem atingidos.",
    "Tiefling": "Os Tieflings parecem humanos mas com cornos, caudas e pele em tons de vermelho, roxo ou cinzento. A sua ascendência infernal torna-os resistentes a certos feitiços e dá-lhes acesso a poderes mágicos inquietantes.",
    "Abyssal Tiefling": "Os Tieflings são humanoides com cornos, caudas e pele tocada por magia infernal ou demoníaca. Os Abyssal Tieflings têm auras caóticas e olhos demoníacos, resistem a venenos e podem aceder a magias destrutivas.",
    "Chthonic Tiefling": "Os Tieflings são humanoides com cornos, caudas e pele tocada por magia infernal ou demoníaca. Os Chthonic Tieflings têm aspeto pálido e sombrio, resistem a forças necróticas e canalizam poderes dos reinos da morte.",
    "Infernal Tiefling": "Os Tieflings são humanoides com cornos, caudas e pele tocada por magia infernal ou demoníaca. Os Infernal Tieflings têm cornos mais afiados, pele avermelhada e olhos ardentes. Comandam o fogo e suportam punições infernais.",
    "Aarakocra": "Os Aarakocra assemelham-se a aves humanoides com penas, garras e asas que lhes permitem voar desde o início. Os seus corpos ágeis e instintos aviários tornam-nos excelentes batedores, atacantes em mergulho e vigias dos céus.",
    "Bugbear": "Os Bugbears são altos, largos e peludos, com traços goblinoides e membros longos. Apesar do tamanho, movem-se com silêncio assustador, atacando das sombras com força bruta e furtividade surpreendente.",
    "Centaur": "Os Centaur combinam a parte superior do corpo humana com a parte inferior de um cavalo poderoso. Rápidos, fortes e majestosos, podem galopar para a batalha, atropelar inimigos e percorrer terrenos selvagens com facilidade.",
    "Changeling": "Os Changelings têm pele pálida e traços suaves em repouso, mas conseguem mudar de rosto e forma à vontade. Mestres do disfarce, transitam entre identidades e adaptam-se a qualquer papel social.",
    "Firbolg": "Os Firbolgs são gigantes gentis com pele azul, cabelo musgoso e olhos profundos que refletem a floresta. Falam com animais e plantas, fundem-se na natureza e usam magia subtil para proteger o bosque.",
    "Githyanki": "Os Githyanki são magros e de pele amarela, com traços longos e olhos penetrantes. Oriundos de reinos astrais, são guerreiros ferozes que atacam com poder psíquico e perícia marcial.",
    "Githzerai": "Os Githzerai partilham o aspeto magro e alongado dos seus parentes Gith mas irradiam calma interior. Mestres da mente sobre a matéria, movem-se com quietude e agem com precisão.",
    "Goblin": "Os Goblins são pequenos, magros e de dentes afiados, com orelhas grandes e dedos ágeis. São rápidos, difíceis de apanhar e recuperam rapidamente após derrotar inimigos.",
    "Hobgoblin": "Os Hobgoblins são goblinoides mais altos e robustos, com pele castanho-avermelhada e postura militar. Lutam em formação, fortalecem aliados e valorizam ordem e honra.",
    "Kobold": "Os Kobolds são pequenos humanoides reptilianos com focinho canino e pele escamosa. Apesar de frágeis, superam inimigos com truques e ganham força lutando em grupo.",
    "Lizardfolk": "Os Lizardfolk são altos e de sangue frio, com peles escamosas, caudas e olhos reptilianos. Mantêm-se calmos sob pressão, fabricam ferramentas de osso e madeira e sobrevivem nos ambientes mais duros.",
    "Minotaur": "Os Minotauros são touros bípedes com torso humanoide, cornos e cascos. Investem com força aterradora, suportam dor e são excelentes rastreadores.",
    "Satyr": "Os Satyrs parecem humanos com pernas de cabra, cornos enrolados e olhos selvagens. O seu charme brincalhão e magia feérica protegem-nos de manipulação e dão-lhes velocidade, ritmo e graça social.",
    "Tabaxi": "Os Tabaxi são felinos humanoides com pelo, cauda, rosto de gato e orelhas inquietas. Ágeis e curiosos, escalam facilmente, escapam ao perigo e perseguem segredos e histórias.",
    "Triton": "Os Tritons são humanoides aquáticos de aspeto régio, com pele escamosa, cristas semelhantes a barbatanas e guelras no pescoço. Respiram debaixo de água, comunicam com criaturas marinhas e usam magia oceânica poderosa.",
    "Tortle": "Os Tortles assemelham-se a tartarugas humanoides com carapaças pesadas, garras e olhos pacientes. A sua carapaça protege-os naturalmente e destacam-se em tarefas de sobrevivência graças à disciplina e sabedoria prática.",
    "Yuan-ti": "Os Yuan-ti são humanoides de pele lisa com olhos de serpente, línguas bifurcadas e, por vezes, escamas subtis. Imunes a venenos e difíceis de manipular, usam magia inquietante para dominar ou assustar.",
    "Deep Gnome": "Os gnomos são pequenos, de cabeças grandes, olhos brilhantes e mãos ocupadas. Os Deep Gnomes são primos subterrâneos com pele cinzenta, olhos grandes e resistência forjada na pedra. Veem na escuridão e escondem-se com magia engenhosa.",
    "Duergar": "Os anões são baixos, robustos e barbudos, com membros sólidos e expressões severas. Os Duergar são os seus parentes cinzentos do Subterrâneo—estoicos, sombrios e dotados de magia que lhes permite crescer ou desaparecer por breves instantes.",
    "Eladrin": "Os elfos são altos, de orelhas longas e postura eterna. Os Eladrin partilham esta graça, mas a sua pele e aura mudam com as estações do Feywild. A sua magia de teletransporte ganha um novo efeito consoante a estação com que o seu espírito se alinha.",
    "Autumn Eladrin": "Os Eladrin são elfos cuja cor e humor mudam com as estações. Os Autumn Eladrin irradiam calor e charme, e quando se teletransportam, os inimigos próximos podem ficar demasiado encantados para retaliar.",
    "Winter Eladrin": "Os Eladrin são elfos cuja cor e humor mudam com as estações. Os Winter Eladrin são pálidos, distantes e frios como a geada—quando se teletransportam, assustam os inimigos a recuar.",
    "Spring Eladrin": "Os Eladrin são elfos cuja cor e humor mudam com as estações. Os Spring Eladrin florescem com energia e bondade, podendo teletransportar outros em vez de si próprios.",
    "Summer Eladrin": "Os Eladrin são elfos cuja cor e humor mudam com as estações. Os Summer Eladrin brilham com paixão dourada e, ao teletransportarem-se, queimam inimigos à volta com calor radiante.",
    "Fairy": "As Fairies são fadas do tamanho da palma da mão, com asas delicadas de inseto, pele cintilante e olhos luminosos. Conseguem voar, lançar magia inata e deslumbrar o mundo com uma mistura de fantasia e travessura.",
    "Genasi": "Os Genasi são humanoides infundidos com energia elemental, os seus corpos marcados por características como cabelo eletrificado, pele de pedra, olhos ardentes ou padrões fluidos. Resistentes ao seu elemento, controlam-no com facilidade.",
    "Air Genasi": "Os Genasi exibem traços visuais de magia elemental. Os Air Genasi têm cabelo esvoaçante, pele azul-cinzenta e andar leve. Deslizam suavemente, resistem a relâmpagos e movem-se como se fossem levados pelo vento.",
    "Earth Genasi": "Os Genasi exibem traços visuais de magia elemental. Os Earth Genasi têm pele semelhante a rocha, passos pesados e traços de cristal ou mineral. Mantêm-se firmes, ignoram deslocamentos e terrenos difíceis.",
    "Fire Genasi": "Os Genasi exibem traços visuais de magia elemental. Os Fire Genasi irradiam calor, com olhos incandescentes e cabelo de brasa. Suportam chamas e podem invocar luz ardente à vontade.",
    "Water Genasi": "Os Genasi exibem traços visuais de magia elemental. Os Water Genasi têm pele húmida e brilhante, cabelo cor de algas e movimentos fluidos. Respirando debaixo de água, nadam com graça e moldam água facilmente.",
    "Geppettin (Marionette)": "Os Geppettin assemelham-se a brinquedos vivos—constructos animados com designs distintos. Os Marionette Geppettin são de madeira e articulados como marionetas, frequentemente com rostos pintados e vozes ocas. Não sentem fome nem fadiga, e muitos destacam-se no teatro ou espionagem.",
    "Geppettin (Plushie or Bisque)": "Os Geppettin assemelham-se a brinquedos vivos—constructos animados com designs distintos. Os Plushie ou Bisque Geppettin parecem peluches macios ou bonecas de porcelana animadas. São incansáveis, imortais e evocam conforto e curiosidade.",
    "Marionette Geppettin": "Os Geppettin são brinquedos animados com formas e personalidades distintas. Os Marionette são de madeira, com membros articulados como marionetas e expressões pintadas. São ágeis, expressivos e não precisam de descanso ou alimento.",
    "Bisque Geppettin": "Os Geppettin são brinquedos animados com formas e personalidades distintas. Os Bisque Geppettin parecem bonecas de porcelana com traços elegantes e olhos vidrados. São incansáveis e intemporais, muitas vezes graciosos ou inquietantes.",
    "Plushie Geppettin": "Os Geppettin são brinquedos animados com formas e personalidades distintas. Os Plushie Geppettin são fofos e recheados, com olhos de botão e sorrisos costurados. Surpreendentemente resistentes, são acolhedores e estranhos.",
    "Harengon": "Os Harengon são coelhos humanoides com orelhas longas, pernas fortes e energia nervosa. Reagem com velocidade impressionante, saltam grandes distâncias e irradiam curiosidade sem limites.",
    "Kenku": "Os Kenku são humanoides semelhantes a corvos, com corpos emplumados, rostos bicudos e olhos escuros. Falam imitando sons e vozes, sendo mestres da furtividade e memória.",
    "Mandrake": "Os Mandrake têm pele semelhante a casca, membros folhosos e rostos que mudam com as estações. Sobrevivem à base de luz solar ou carne, enraízam-se para descansar e podem prender inimigos com vinhas vivas.",
    "Spring Mandrake": "Os Mandrake assemelham-se a plantas humanoides com pele de casca e cabelo de folhas. Os Spring Mandrake florescem com verdes frescos e conseguem puxar inimigos voadores para o chão em segurança.",
    "Summer Mandrake": "Os Mandrake assemelham-se a plantas humanoides com pele de casca e cabelo de folhas. Os Summer Mandrake são densos em folhagem e conseguem empurrar inimigos com vinhas cheias de força.",
    "Autumn Mandrake": "Os Mandrake assemelham-se a plantas humanoides com pele de casca e cabelo de folhas. Os Autumn Mandrake usam folhas douradas e vermelhas e conseguem prender dois inimigos ao mesmo tempo numa armadilha retorcida.",
    "Winter Mandrake": "Os Mandrake assemelham-se a plantas humanoides com pele de casca e cabelo de folhas. Os Winter Mandrake são retorcidos e gelados, atacando com vinhas que causam uma explosão de frio.",
    "Sea Elf": "Os Sea Elves têm a estrutura esguia e traços afiados dos outros elfos, mas com dedos palmados, guelras e pele em tons marinhos. Respirando e nadando debaixo de água, sentem o apelo do oceano no sangue.",
    "Shadar-kai": "Os Shadar-kai são elfos pálidos, marcados pela sombra e ligados à Rainha dos Corvos. Caminham entre mundos e podem tornar-se insubstanciais por breves instantes, escapando ao perigo com foco sombrio.",
    "Shifter": "Os Shifters parecem humanos mas com traços animais—presas, pelo, garras ou olhos brilhantes. Quando mudam, o seu lado animal emerge, desbloqueando habilidades aprimoradas.",
    "Beasthide Shifter": "Os Shifters assemelham-se a humanos com traços animais. Os Beasthide Shifters tornam-se mais resistentes ao transformar-se, com pele que se espessa como a de um rinoceronte para suportar golpes.",
    "Longtooth Shifter": "Os Shifters assemelham-se a humanos com traços animais. Os Longtooth Shifters desenvolvem presas de lobo ao mudar, mordendo ferozmente e avançando para o perigo.",
    "Swiftstride Shifter": "Os Shifters assemelham-se a humanos com traços animais. Os Swiftstride Shifters tornam-se esguios e rápidos ao transformar-se, movendo-se entre inimigos com graça felina.",
    "Wildhunt Shifter": "Os Shifters assemelham-se a humanos com traços animais. Os Wildhunt Shifters aguçam os sentidos e instintos, tornando-se quase impossíveis de surpreender e rastreadores perfeitos no seu estado bestial."
    },
    en: {
    "Aasimar": "Radiant and human-like, Aasimar stand out with glowing eyes, flawless features, and an aura that feels holy. Their celestial nature grants them healing powers and the ability to summon bursts of divine energy, sometimes even manifesting spectral wings.",
    "Dragonborn": "Dragonborn look like bipedal dragons with powerful builds, scaled skin in vibrant colours, and imposing draconic heads. They can unleash a breath of elemental power\u2014like fire, lightning, or ice\u2014and naturally shrug off that same element.",
    "Black Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Black Dragonborn share this form but have dark, oily scales and piercing yellow eyes. They spit acid and are naturally resistant to it.",
    "Blue Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Blue Dragonborn shimmer with cobalt scales and proud crests, breathing lightning and resisting its force.",
    "Brass Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Brass Dragonborn have warm, sandy scales and wide, friendly expressions, breathing fire and charming with talkative ease.",
    "Bronze Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Bronze Dragonborn glimmer with metallic bronze scales, channeling focused lightning with noble resolve.",
    "Copper Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Copper Dragonborn are covered in bright reddish-gold scales, breathing acid and displaying a trickster spirit.",
    "Gold Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Gold Dragonborn shine with regal golden scales, exhaling searing fire and carrying themselves with dignified calm.",
    "Green Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Green Dragonborn have deep emerald scales and narrow, clever eyes, exhaling poison clouds that match their cunning.",
    "Red Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Red Dragonborn blaze with crimson scales, unleashing ferocious flames and fierce ambition.",
    "Silver Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. Silver Dragonborn gleam with pale silver scales, exhaling icy breath and protecting allies with calm strength.",
    "White Dragonborn": "Dragonborn have muscular, scaled bodies and imposing reptilian heads. White Dragonborn wear snowy scales and primal snarls, breathing freezing cold with raw instinct.",
    "Dwarf": "Short, broad, and rugged, dwarves have thick beards, powerful builds, and steady eyes. They resist poison, see underground, and are hard to push aside.",
    "Elf": "Tall and slender, elves have elongated ears, angular features, and a graceful bearing. They see in darkness, resist charms, and need only meditation to rest.",
    "Drow Elf": "Elves are tall and slender with pointed ears and ageless features. Drow share this form but have obsidian skin and luminous eyes, wielding innate magic and blending allure with danger.",
    "High Elf": "Elves are tall and elegant, with long ears and graceful poise. High Elves have refined features, brighter skin tones, and an air of nobility. They are naturally gifted with arcane magic and sharp intellect.",
    "Wood Elf": "Elves are tall and elegant, with long ears and graceful poise. Wood Elves blend into forest shadows with earthy tones and quiet movement. They're swift, stealthy, and deeply attuned to nature.",
    "Gnome": "Gnomes are small and sprightly, with oversized features and expressive eyes. They\u2019re curious and clever, often resisting mind-affecting magic and inventing surprising little wonders.",
    "Forest Gnome": "Gnomes are small and sprightly, with oversized features and expressive eyes. Forest Gnomes favour natural colours and leafy adornments, speaking to animals and hiding with magical illusion.",
    "Rock Gnome": "Gnomes are small and sprightly, with oversized features and expressive eyes. Rock Gnomes carry tools, lenses, and gadgets wherever they go, crafting devices that perform minor magical tricks.",
    "Goliath": "Goliaths are massive and athletic, standing head and shoulders above most mortals. Their skin is often stony or tattooed, and their strength lets them shake off pain others can\u2019t endure.",
    "Cloud Goliath": "Goliaths are tall, broad-shouldered humanoids with powerful frames and elemental ancestry. Cloud Goliaths have pale, misty complexions and can briefly teleport as if riding the wind.",
    "Fire Goliath": "Goliaths are tall, broad-shouldered humanoids with powerful frames and elemental ancestry. Fire Goliaths glow with internal heat, striking back with bursts of flame when harmed.",
    "Frost Goliath": "Goliaths are tall, broad-shouldered humanoids with powerful frames and elemental ancestry. Frost Goliaths have bluish skin and icy eyes, radiating cold that slows down their enemies.",
    "Hill Goliath": "Goliaths are tall, broad-shouldered humanoids with powerful frames and elemental ancestry. Hill Goliaths are thick-boned and hulking, knocking enemies down with sheer mass.",
    "Stone Goliath": "Goliaths are tall, broad-shouldered humanoids with powerful frames and elemental ancestry. Stone Goliaths have slate-coloured skin and unmatched toughness that shrugs off blows.",
    "Storm Goliath": "Goliaths are tall, broad-shouldered humanoids with powerful frames and elemental ancestry. Storm Goliaths crackle with static energy, releasing thunderclaps when they\u2019re struck.",
    "Halfling": "Halflings are small and round-faced, with a natural cheer and humble posture. They are astonishingly lucky, hard to catch, and often manage to survive danger with a smile.",
    "Human": "Humans resemble those of our own world, but in D&D, they\u2019re known for their sheer adaptability. They start with an extra edge, allowing them to excel early in any role they choose.",
    "Orc": "Orcs are tall, muscular, and savage-looking, with tusks and greenish or gray skin. They\u2019re brutally strong, can charge into battle, and recover faster than most after a hit.",
    "Tiefling": "Tieflings appear mostly human but with horns, tails, and skin in shades of red, purple, or gray. Their infernal ancestry makes them resistant to certain spells and gives them access to unsettling magical powers.",
    "Abyssal Tiefling": "Tieflings are humanoids with horns, tails, and skin touched by infernal or demonic magic. Abyssal Tieflings have chaotic, wild auras and demonic eyes, shrug off poison, and can tap into destructive spells.",
    "Chthonic Tiefling": "Tieflings are humanoids with horns, tails, and skin touched by infernal or demonic magic. Chthonic Tieflings look pale and shadowed, resist necrotic forces, and channel powers from realms of death.",
    "Infernal Tiefling": "Tieflings are humanoids with horns, tails, and skin touched by infernal or demonic magic. Infernal Tieflings have sharper horns, reddish skin, and focused, fiery eyes. They command fire and endure hellish punishment.",
    "Aarakocra": "Aarakocra resemble humanoid birds with feathers, talons, and wings that grant them flight from the start. Their agile frames and avian instincts make them perfect for soaring scouts, diving attackers, and watchers of the skies.",
    "Bugbear": "Bugbears are tall, broad and furry, with goblinoid features and long limbs. Despite their size, they move with eerie silence, striking from shadows with brute force and surprising stealth.",
    "Centaur": "Centaur combine a human upper body with the lower body of a powerful horse. Fast, strong, and majestic, they can gallop into battle, trample foes, and roam wild terrain with ease.",
    "Changeling": "Changelings appear pale and smooth-featured at rest, but can shift their face and form at will. Masters of disguise, they walk between identities and adapt to any social role.",
    "Firbolg": "Firbolgs are gentle giants with blue skin, mossy hair, and deep eyes that reflect the forest. They speak to animals and plants, blend into nature, and wield subtle magic in defence of the wild.",
    "Githyanki": "Githyanki are lean and yellow-skinned, with long features and sharp eyes. Hailing from astral realms, they are fierce warriors who strike with psychic power and martial skill.",
    "Githzerai": "Githzerai share the gaunt, elongated look of their Gith kin but radiate inner calm. Masters of mind over matter, they move with stillness and act with precise control.",
    "Goblin": "Goblins are small, wiry, and sharp-toothed, with large ears and quick fingers. They're fast, hard to pin down, and bounce back after defeating enemies.",
    "Hobgoblin": "Hobgoblins are taller, sturdier goblinoids with red-brown skin and militaristic bearing. They fight in formation, empower allies, and value order and honour.",
    "Kobold": "Kobolds are tiny reptilian humanoids with doglike snouts and scaly skin. Though frail, they outsmart enemies with tricks and gain strength from fighting side by side.",
    "Lizardfolk": "Lizardfolk are tall and cold-blooded, with scaled hides, tails, and reptilian eyes. They remain calm under pressure, craft tools from bone and bark, and endure the harshest environments.",
    "Minotaur": "Minotaurs are bipedal bulls with humanoid torsos, horns, and hooves. They charge headfirst with terrifying power, shake off pain, and excel at tracking prey.",
    "Satyr": "Satyrs look like humans with goat legs, curled horns, and wild eyes. Their playful charm and fey magic protect them from manipulation and give them speed, rhythm, and social grace.",
    "Tabaxi": "Tabaxi are feline humanoids with fur, tails, catlike faces, and twitchy ears. Agile and curious, they climb easily, dart through danger, and chase after secrets and stories.",
    "Triton": "Tritons are regal aquatic humanoids with scaled skin, fin-like crests, and gills on their necks. They breathe underwater, speak to sea creatures, and wield oceanic magic that evokes the might of the deep.",
    "Tortle": "Tortles resemble humanoid turtles with heavy shells, clawed hands, and patient eyes. Their tough exterior shields them naturally, and they thrive in survival tasks thanks to calm discipline and practical wisdom.",
    "Yuan-ti": "Yuan-ti are smooth-skinned humanoids with serpent eyes, forked tongues, and often faint scale patterns. Immune to poison and hard to manipulate, they use unsettling magic to dominate or terrify.",
    "Deep Gnome": "Gnomes are small, big-headed folk with bright eyes and busy hands. Deep Gnomes are subterranean cousins with grey skin, oversized eyes, and grit carved from stone. They see through darkness and hide with clever magic.",
    "Duergar": "Dwarves are short, broad, and bearded, with solid limbs and stern expressions. Duergar are their ashen kin from the Underdark\u2014stoic, grim, and gifted with magic that lets them grow or vanish briefly.",
    "Eladrin": "Elves are tall, long-eared, and eternally poised. Eladrin share this grace, but their skin and aura shift with the seasons of the Feywild. Their teleportation magic gains a new effect depending on the time of year their spirit aligns with.",
    "Autumn Eladrin": "Eladrin are elves whose colour and mood change with the seasons. Autumn Eladrin radiate warmth and charm, and when they teleport, nearby foes may find themselves too enchanted to strike back.",
    "Winter Eladrin": "Eladrin are elves whose colour and mood change with the seasons. Winter Eladrin are pale, distant, and cold as frost\u2014when they teleport, they frighten foes into backing down.",
    "Spring Eladrin": "Eladrin are elves whose colour and mood change with the seasons. Spring Eladrin bloom with new energy and kindness, and can teleport others instead of themselves.",
    "Summer Eladrin": "Eladrin are elves whose colour and mood change with the seasons. Summer Eladrin blaze with golden passion and when they teleport, they burn foes around them with radiant heat.",
    "Fairy": "Fairies are palm-sized fey with delicate insect wings, sparkling skin tones, and luminous eyes. They can fly, cast innate magic, and dazzle the world with a mix of whimsy and mischief.",
    "Genasi": "Genasi are humanoids infused with elemental energy, their bodies marked by features like crackling hair, stone-textured skin, burning eyes, or flowing patterns. They resist their element and command it effortlessly.",
    "Air Genasi": "Genasi bear visual traces of elemental magic. Air Genasi have windswept hair, blue-grey skin, and a breezy gait. They glide lightly and resist lightning, often moving as if lifted by the wind.",
    "Earth Genasi": "Genasi bear visual traces of elemental magic. Earth Genasi have rock-like skin, heavy footsteps, and crystal or mineral features. They stand firm, shrug off displacement, and ignore rough terrain.",
    "Fire Genasi": "Genasi bear visual traces of elemental magic. Fire Genasi flicker with warmth, bearing smouldering eyes and ember-glow hair. They endure flames and can summon burning light at will.",
    "Water Genasi": "Genasi bear visual traces of elemental magic. Water Genasi have wet, glistening skin, seaweed-colored hair, and fluid movements. They breathe underwater, swim with grace, and shape water effortlessly.",
    "Geppettin (Marionette)": "Geppettin resemble living toys\u2014animated constructs with distinct designs. Marionette Geppettin are wooden and jointed like puppets, often with painted faces and hollow-sounding voices. They feel no hunger or fatigue, and many excel in theatre or espionage.",
    "Geppettin (Plushie or Bisque)": "Geppettin resemble living toys\u2014animated constructs with distinct designs. Plushie or Bisque Geppettin resemble soft stuffed animals or porcelain dolls brought to life. They\u2019re tireless, ageless, and evoke both comfort and curiosity.",
    "Marionette Geppettin": "Geppettin are animated toys with distinct forms and personalities. Marionette types are wooden, limbed like puppets, with painted expressions. They\u2019re agile, expressive, and feel no need for rest or food.",
    "Bisque Geppettin": "Geppettin are animated toys with distinct forms and personalities. Bisque Geppettin resemble porcelain dolls with elegant features and glassy eyes. They\u2019re tireless and timeless, often graceful or eerie.",
    "Plushie Geppettin": "Geppettin are animated toys with distinct forms and personalities. Plushie Geppettin are squishy and stuffed, with button eyes and stitched smiles. Surprisingly resilient, they\u2019re cuddly and uncanny.",
    "Harengon": "Harengon are rabbitfolk with long ears, strong legs, and twitchy energy. They react with blinding speed, leap great distances, and often radiate boundless curiosity.",
    "Kenku": "Kenku are crowlike humanoids with feathered bodies, beaked faces, and dark eyes. They speak by mimicking sounds and voices, and are masters of stealth and memory.",
    "Mandrake": "Mandrakes have bark-like skin, leafy limbs, and faces that shift with the seasons. They survive on sunlight or flesh, root in soil to rest, and can entangle enemies with living vines.",
    "Spring Mandrake": "Mandrakes resemble humanoid plants with bark skin and leafy hair. Spring Mandrakes bloom with fresh greens and can pull flying enemies safely to the ground.",
    "Summer Mandrake": "Mandrakes resemble humanoid plants with bark skin and leafy hair. Summer Mandrakes are dense with foliage and can shove enemies aside with vines full of strength.",
    "Autumn Mandrake": "Mandrakes resemble humanoid plants with bark skin and leafy hair. Autumn Mandrakes wear golden-red leaves and can entangle two foes at once in a twisting snare.",
    "Winter Mandrake": "Mandrakes resemble humanoid plants with bark skin and leafy hair. Winter Mandrakes are gnarled and frosted, striking with vines that deal a burst of cold.",
    "Sea Elf": "Sea Elves have the slender frame and sharp features of other elves, but with webbed fingers, gills, and sea-toned skin. They breathe and swim underwater, and feel the call of the ocean in their blood.",
    "Shadar-kai": "Shadar-kai are pale, shadow-marked elves tied to the Raven Queen. They stride between worlds and can briefly become insubstantial, slipping through danger with grim focus.",
    "Shifter": "Shifters look mostly human but carry beast-like features\u2014fangs, fur, claws, or glowing eyes. When they shift, their animal side surges forward, unlocking heightened abilities.",
    "Beasthide Shifter": "Shifters resemble humans with animal traits. Beasthide Shifters grow tougher when they transform, their skin thickening like a rhino\u2019s hide to endure hits others couldn\u2019t.",
    "Longtooth Shifter": "Shifters resemble humans with animal traits. Longtooth Shifters sprout wolf-like fangs when they shift, biting fiercely and charging headlong into danger.",
    "Swiftstride Shifter": "Shifters resemble humans with animal traits. Swiftstride Shifters grow sleek and fast when transformed, darting between foes with feline grace.",
    "Wildhunt Shifter": "Shifters resemble humans with animal traits. Wildhunt Shifters sharpen their senses and instincts, becoming near-impossible to surprise and perfect trackers in their beast state."
    }
  };

  const classInfo = {
    pt: {
      'Barbarian':'O Bárbaro é a força bruta da natureza. Combate com fúria selvagem, ignorando a dor e libertando ataques devastadores. Quando entra em Rage, torna-se mais difícil de ferir e mais poderoso nos seus golpes. Não usa magia, mas compensa com pura resistência e instinto. É ideal para quem quer estar na linha da frente, a levar e causar pancada sem hesitar.',
      'Bard':'O Bardo é um artista mágico — um contador de histórias, músico ou dançarino que inspira aliados e confunde inimigos. Usa magia através da sua arte, seja ela música, poesia ou dança. É extremamente versátil: pode curar, lançar feitiços, manipular emoções e ainda ter talento para lidar com quase qualquer situação fora de combate.',
      'Cleric':'O Clérigo é o canal de poder divino. Serve uma divindade e invoca milagres para curar, proteger ou castigar. É um pilar de suporte, mas também um combatente eficaz quando necessário. Usa armadura e pode ser tão temido como um guerreiro ou tão vital como um curandeiro, dependendo do domínio divino que escolhe seguir.',
      'Druid':'O Druida é o guardião da natureza. Controla os elementos, cura feridas e transforma-se em animais para explorar ou combater. A sua ligação ao mundo natural permite-lhe lançar magias únicas e adaptar-se a qualquer ambiente. É uma excelente escolha para quem gosta de versatilidade mágica e de proteger o equilíbrio do mundo.',
      'Fighter':'O Guerreiro é o mestre das armas. É treinado em todas as formas de combate físico e adapta-se facilmente ao tipo de luta que preferir — seja com espada, arco ou escudo. Não precisa de magia para brilhar, pois compensa com técnica, disciplina e uma incrível capacidade de resistência e ataque constante em batalha.',
      'Monk':'O Monge é um artista marcial que canaliza energia interior para atingir feitos sobre-humanos. Move-se com velocidade, dá golpes precisos e pode desviar-se de ataques com agilidade extrema. Usa o corpo como arma e combina disciplina física com espiritualidade. Ideal para quem quer ser rápido, ágil e surpreendentemente letal.',
      'Paladin':'O Paladino é o guerreiro sagrado. Luta em nome de uma causa justa ou juramento sagrado e combina armas com magia divina. É resistente, curador e implacável contra o mal. A sua presença inspira aliados e mete respeito nos inimigos. É perfeito para quem quer ser um herói protetor com um forte sentido de dever.',
      'Ranger':'O Patrulheiro é o explorador por excelência. Conhece os caminhos da natureza, persegue inimigos com precisão e usa magia simples para se adaptar ao terreno. Pode ter um companheiro animal e é especialista em sobreviver fora das cidades. É ideal para quem quer jogar como caçador, batedor ou guia experiente.',
      'Rogue':'O Ladino é o mestre da discrição e da precisão. Move-se nas sombras, ataca nos pontos fracos e evita armadilhas com facilidade. Usa agilidade e astúcia em vez de força, sendo letal quando apanha os inimigos desprevenidos. Perfeito para quem gosta de ser furtivo, inteligente e mortal com um só golpe.',
      'Sorcerer':'O Feiticeiro é um utilizador de magia nato. O seu poder vem de dentro — seja de uma herança dracónica, caos selvagem ou outra origem mágica. É explosivo, criativo e pode lançar magias poderosas com facilidade, mas com menos variedade do que outras classes mágicas. Ideal para quem gosta de pura força arcana instintiva.',
      'Warlock':'O Bruxo faz pactos com seres misteriosos — fadas, demónios ou entidades cósmicas — em troca de poder. A sua magia é estranha, única e cheia de truques. Usa invocações e pode disparar feitiços com frequência, mesmo com poucos recursos. Ótimo para quem quer um personagem intrigante com ligações sombrias ou místicas.',
      'Wizard':'O Mago é o verdadeiro estudioso da magia. Aprende através de livros e pesquisa, tendo acesso ao maior número de feitiços do jogo. Pode preparar diferentes magias conforme a situação e é um mestre em versatilidade arcana. Embora frágil fisicamente, é um dos conjuradores mais poderosos a longo prazo.'
    },
    en: {
      'Barbarian':'The Barbarian is raw force of nature. Fights with wild fury, ignoring pain and unleashing devastating attacks. When entering Rage, they become harder to hurt and stronger in their strikes. They do not use magic but rely on sheer toughness and instinct. Ideal for those who want to be on the front line, taking and dealing damage without hesitation.',
      'Bard':'The Bard is a magical performer—a storyteller, musician or dancer who inspires allies and confuses enemies. They use magic through art, whether music, poetry or dance. Extremely versatile: can heal, cast spells, sway emotions and handle nearly any situation outside combat.',
      'Cleric':'The Cleric channels divine power. They serve a deity and call miracles to heal, protect or punish. A pillar of support yet an effective fighter when needed. Wearing armor, they can be feared like a warrior or vital like a healer depending on the divine domain followed.',
      'Druid':'The Druid is guardian of nature. They command the elements, heal wounds and transform into animals to explore or fight. Their bond with the natural world lets them cast unique spells and adapt to any environment. A great choice for those who enjoy magical versatility and protecting the world’s balance.',
      'Fighter':'The Fighter is the master of weapons. Trained in every form of physical combat, they adapt easily to any fighting style—sword, bow or shield. They do not need magic to shine, excelling through technique, discipline and an incredible capacity for endurance and constant offense.',
      'Monk':'The Monk is a martial artist who channels inner energy to achieve superhuman feats. Swift and precise, they dodge attacks with extreme agility. Using the body as a weapon, they blend physical discipline with spirituality. Perfect for those seeking speed, agility and surprising lethality.',
      'Paladin':'The Paladin is the holy warrior. Fighting for a righteous cause or sacred oath, they combine weapons with divine magic. Resilient, healing and relentless against evil, their presence inspires allies and commands respect. Ideal for a heroic protector with a strong sense of duty.',
      'Ranger':'The Ranger is the ultimate explorer. They know nature’s paths, track foes accurately and use simple magic to adapt to the terrain. Possibly with an animal companion, they excel at surviving away from cities. Great for players who want to be a hunter, scout or seasoned guide.',
      'Rogue':'The Rogue is master of stealth and precision. Moving in shadows, striking weak spots and disarming traps with ease, they rely on agility and wit rather than strength. Deadly when catching enemies off guard—ideal for stealthy, clever and lethal play.',
      'Sorcerer':'The Sorcerer wields innate magic. Power comes from within—draconic blood, wild chaos or another magical origin. Explosive and creative, they cast powerful spells easily, though with less variety than other casters. Perfect for those who favor raw, instinctive arcane might.',
      'Warlock':'The Warlock makes pacts with mysterious beings—fey, demons or cosmic entities—for power. Their magic is strange, unique and full of tricks. Using invocations, they can fire spells often even with few resources. Great for an intriguing character with dark or mystical ties.',
      'Wizard':'The Wizard is the true scholar of magic. Studying from books and research, they have access to the largest array of spells. They can prepare different magic for each situation and are masters of arcane versatility. Though physically fragile, they become one of the most powerful spellcasters over time.'
    }
  };

  const subclassInfo = {
    pt: {
      'Path of the Berserker': 'Barbarians are raw physical power given form\u2014raging warriors fueled by primal emotion. The Path of the Berserker takes that ferocity to the next level, unleashing uncontrollable violence in battle and shrugging off mental interference, turning you into a terrifying force of nature with unmatched brutality.',
      'Path of the Wild Heart': 'Barbarians are primal warriors who channel their rage into power. The Path of the Wild Heart bonds you with animal spirits, letting you rage like a bear, eagle, or wolf and grow claws, wings, and senses that echo the wildest predators\u2014fighting as a beast among men.',
      'Path of the World Tree': "Barbarians fight with primal rage, and those who follow the Path of the World Tree tap into cosmic roots that span realms. These warriors channel Yggdrasil's energy to heal, extend their reach, summon branches to trap foes, and teleport across the battlefield like a living myth.",
      'Path of the Zealot': 'Barbarians channel raw fury into combat, and those on the Path of the Zealot turn that rage into divine power. You become a sacred berserker, smiting foes with holy wrath, healing through faith, and even defying death to fight on in your god\u2019s name.',
      'Path of the Muscle Wizard': "Barbarians fight with raw strength and fury, and the Path of the Muscle Wizard lets you pretend you\'re a spellcaster\u2014while actually pulverizing foes with sheer force. You intimidate with your \'arcane prowess\', hurl \'cantrips\' as powerful punches, and cast the ultimate spell: Fist. You\'re not just strong, you\'re magically strong (and no one dares say otherwise).",
      'College of Dance': 'Bards are masters of performance and magic, turning music and motion into power. Bards from the College of Dance fight with swirling grace, blending battle with ballet\u2014darting across the battlefield, inspiring allies with every spin, and dodging danger in a rhythm all their own.',
      'College of Glamour': 'Bards wield music and charisma as magical weapons, and those in the College of Glamour specialize in fey enchantment. You become a living legend, dazzling foes with illusions and charm while inspiring allies with the radiant majesty of the Feywild.',
      'College of Lore': 'Bards are jacks-of-all-trades and masters of magic through music and knowledge. The College of Lore turns you into a collector of secrets, letting you learn any spell, cut through enemy attacks with sharp wit, and reveal truth and trickery with every clever line.',
      'College of Valor': 'Bards weave spell and steel into heroic performances. The College of Valor empowers you to fight on the frontlines\u2014singing of ancient legends, striking foes with sword and song, and turning the tide of battle with inspirational magic and martial might.',
      'Life Domain': 'Clerics channel divine power to heal, protect, and smite in the name of their deity. The Life Domain turns you into the ultimate healer, empowering every healing spell you cast to restore more health and let you act as a radiant beacon of endurance and restoration.',
      'Light Domain': 'Clerics are divine spellcasters who call down miracles. The Light Domain arms you with searing radiance, letting you blast enemies with fire and expose hidden threats, burning away darkness and falsehoods with the fury of the sun.',
      'Trickery Domain': 'Clerics draw power from divine patrons, and the Trickery Domain favors cleverness and illusion. With stealthy blessings, deceptive magic, and divine mischief, you become a holy trickster\u2014confounding foes and turning divine grace into a tool of chaos.',
      'War Domain': 'Clerics wield divine power in service of the gods, and those of the War Domain thrive in battle. You charge into the fray armored in faith, striking with divine fury and blessing your allies with righteous might, becoming a living weapon of your god.',
      'Circle of the Land': 'Druids shape the world with nature\u2019s magic, and those of the Circle of the Land become guardians of ancient places. You draw strength from forests, deserts, and tundras, casting powerful spells and channeling the raw elemental energy of the earth beneath your feet.',
      'Circle of the Moon': 'Druids command the wild, and the Circle of the Moon unlocks your inner beast. You transform into fearsome creatures, shifting shape mid-battle, tanking blows and tearing into foes as a primal avatar of the wilderness.',
      'Circle of the Sea': 'Druids channel nature\u2019s force, and the Circle of the Sea wields the raw power of oceans. You conjure storms, surge with tidal energy, and strike like a living wave\u2014commanding the deep to crush your enemies with aquatic fury.',
      'Circle of Stars': 'Druids shape magic from the natural world, and the Circle of the Stars reaches for the heavens. You harness celestial patterns to guide fate, shift into radiant forms, and cast starlit magic that bends destiny to your will.',
      'Battle Master': 'Fighters are masters of combat in all forms, and Battle Masters elevate that to an art form. With expert maneuvers and tactical superiority, you control the battlefield, disarm enemies, trip foes, and guide your allies like a war-hardened general.',
      'Champion': 'Fighters dominate in martial combat, and Champions push their physical limits beyond mortal bounds. You strike harder, land critical hits more often, and become a symbol of raw, heroic power that dominates any arena of battle.',
      'Eldritch Knight': 'Fighters thrive in close combat, and the Eldritch Knight fuses martial prowess with arcane magic. You blink across the field, enchant your blade, and throw fire and force alongside your sword\u2014wielding magic like a weapon in its own right.',
      'Psi Warrior': 'Fighters are tactical experts, and Psi Warriors sharpen their minds into weapons. With telekinetic shoves, psychic strikes, and mental defenses, you become a warrior monk of the mind, bending reality and your enemies with sheer willpower.',
      Dungeoneer: 'Fighters are masters of battle, and the Dungeoneer turns every dungeon crawl into a tactical triumph. With superstitious instincts, trap-dodging reflexes, and bonuses for uncovering monsters\u2019 secrets, you become a living guidebook of survival and treasure-hunting\u2014delving where others dare not tread and living to boast about it.',
      'Way of Mercy': 'Monks channel inner peace and deadly strikes, and the Way of Mercy walks the fine line between healer and executioner. With a touch, you can mend wounds or inflict pain\u2014moving as a masked agent of balance, judgment, and restoration.',
      'Way of Shadow': 'Monks move with unmatched speed and precision, and those who follow the Way of Shadow blend martial skill with supernatural stealth. You strike from darkness, vanish into smoke, and become a living embodiment of fear and silence.',
      'Way of the Elements': 'Monks master their body as a weapon, and the Way of the Four Elements lets you harness fire, water, air, and earth with your ki. You unleash elemental fury with punches, conjuring fire blasts, water whips, and more with every strike.',
      'Way of the Open Hand': 'Monks perfect martial arts into a graceful force of nature, and the Way of the Open Hand is the purest form of unarmed mastery. You knock enemies down, push them back, and strike with pressure-point precision\u2014untouchable and unstoppable.',
      'Warrior of the Street': 'Monks channel inner strength into physical perfection, and Warriors of the Street throw down with blinding combos and special moves straight out of a fighting game. You knock foes into the air, fire energy blasts, and unleash unstoppable uppercuts\u2014turning every encounter into a highlight reel of style and skill.',
      'Oath of Devotion': 'Paladins are divine champions sworn to uphold sacred oaths. The Oath of Devotion binds you to ideals of justice, honor, and light\u2014empowering you to smite evil with radiant force and protect the innocent with unshakable resolve.',
      'Oath of Glory': 'Paladins wield holy power in battle, and the Oath of Glory turns you into a paragon of heroism. You inspire allies with epic feats, charge into combat like a mythic champion, and embody the divine spark of legendary greatness.',
      'Oath of the Ancients': 'Paladins are armored crusaders for a higher cause, and the Oath of the Ancients roots you in the beauty of nature and joy. You wield radiant energy to shield allies, resist darkness, and preserve life with fey-touched might.',
      'Oath of Vengeance': 'Paladins uphold sacred vows, and the Oath of Vengeance swears relentless pursuit of evildoers. You hunt down the wicked with supernatural fury, chaining foes, teleporting across the battlefield, and becoming the unstoppable hand of retribution.',
      'Oath of Revelry': 'Paladins are divine warriors sworn to sacred vows, and those who swear the Oath of Revelry are devoted to joy, camaraderie, and nonstop celebration. You conjure enchanted drinks, party through pain, and inspire allies to greatness with your infectious revelry\u2014fighting for the sacred right to party.',
      'Beast Master': 'Rangers blend martial prowess with nature magic, and Beast Masters bond with a primal companion. You and your beast fight as one\u2014coordinating attacks, watching each other\u2019s backs, and unleashing wild fury together in harmony with the wilderness.',
      'Fey Wanderer': 'Rangers survive where others fear to tread, and Fey Wanderers bring the chaotic beauty of the Feywild with them. With charms, psychic blades, and bursts of eerie joy, you move like a trickster knight straddling two worlds.',
      'Gloom Stalker': 'Rangers are expert hunters, and Gloom Stalkers thrive in darkness. You strike unseen from the shadows, move like a ghost through the Underdark or night, and destroy your foes before they even know you\'re there.',
      Hunter: 'Rangers protect nature and slay threats with surgical precision. As a Hunter, you tailor your skills to destroy your chosen prey\u2014hailing arrows, dodging blows, and controlling the battlefield with relentless efficiency.',
      'Arcane Trickster': 'Rogues are masters of stealth and precision, and the Arcane Trickster adds magical flair to your bag of tricks. You blend illusions and enchantments with sneak attacks\u2014disarming traps, vanishing in plain sight, and outsmarting foes with arcane guile.',
      Assassin: 'Rogues excel at ambush and escape, and Assassins perfect the art of the kill. You strike from the shadows with lethal timing, deal massive damage to surprised foes, and move through the world as a ghost with a dagger\'s kiss.',
      Soulknife: 'Rogues operate in the margins, and Soulknives harness psionic energy to become psychic killers. You manifest blades from thought, leap between minds, and slay with silent precision\u2014untethered from steel or shadow.',
      Thief: 'Rogues slip through defenses like smoke, and Thieves elevate infiltration to an art. You climb walls, disable traps, pick locks in a blink, and swipe treasures before anyone notices\u2014true masters of speed and subtlety.',
      'Arachnoid Stalker': 'Rogues thrive in the shadows, and the Arachnoid Stalker uses spider-like powers to climb walls, sling webs, and poison prey. Whether crawling across ceilings, ambushing from above, or paralyzing foes with venom, you\'re a terrifying blend of stealth, precision, and arachnid agility.',
      'Aberrant Sorcery': 'Sorcerers wield magic born from their very essence, and Aberrant Sorcerers are shaped by alien powers. You unleash psionic force, grow bizarre abilities, and twist reality itself\u2014channeling a terrifying mutation of magic.',
      'Clockwork Sorcery': 'Sorcerers shape magic through innate talent, and Clockwork Sorcerers embody universal order. You stabilize chaos, protect allies with perfect timing, and summon energy as precise as a ticking cosmic engine.',
      'Draconic Sorcery': 'Sorcerers wield magic in their blood, and Draconic Sorcery draws from a dragon\u2019s ancient power. You grow scales, resist elemental forces, and unleash devastating breath-like blasts\u2014becoming draconic royalty in human form.',
      'Wild Magic': 'Sorcerers cast spells by force of will, and Wild Magic is chaotic and unpredictable. You unleash magic surges that can turn the tide\u2014or the table\u2014into something wondrous, terrifying, or downright bizarre.',
      'Archfey Patron': 'Warlocks channel power from otherworldly patrons, and those bound to the Archfey gain magic rooted in wonder and terror. You charm and confuse with fey tricks, teleport in a swirl of mist, and wield glamour that bends minds and reality.',
      'Celestial Patron': 'Warlocks make pacts for power, and those who serve a Celestial bring light instead of darkness. You heal with radiant energy, shield allies from harm, and burn enemies with divine fire\u2014channeling stars and starlight through your soul.',
      'Fiend Patron': 'Warlocks deal with powerful entities, and the Fiend offers fiery might in return. You hurl flames, absorb life from defeated foes, and command infernal magic with every curse you whisper and fireball you conjure.',
      'Great Old One Patron': 'Warlocks gain power from unfathomable sources, and the Great Old One offers madness in exchange for might. You read thoughts, speak into minds, and drive foes insane\u2014channeling the unknowable horror of the cosmos.',
      'Future You': 'Warlocks make deals with strange powers, and yours is your own time-traveling future self. With knowledge of what\u2019s to come, you bend fate, manipulate time, dodge attacks you "knew were coming", and inflict psychic damage with paradoxes\u2014unfolding a destiny only you truly understand.',
      Abjurer: 'Wizards master arcane knowledge through study, and Abjurers specialize in magical defense. You erect shields, banish threats, and become a walking fortress\u2014turning spells into walls and wards that protect allies and repel foes.',
      Diviner: 'Wizards shape reality with spells, and Diviners bend time and fate. You peer into the future, manipulate outcomes with prophetic dice, and always seem to be in the right place with uncanny foreknowledge.',
      Evoker: 'Wizards command pure arcane force, and Evokers shape it into raw destruction. You sculpt fireballs, lightning bolts, and thunderous blasts\u2014unleashing elemental devastation with pinpoint control.',
      Illusionist: 'Wizards rewrite perception itself, and Illusionists are masters of deception. You create images so real they can fool dragons, vanish into your own illusions, and manipulate belief as easily as reality.'
    },
    en: {
      'Path of the Berserker': 'Barbarians are raw physical power given form\u2014raging warriors fueled by primal emotion. The Path of the Berserker takes that ferocity to the next level, unleashing uncontrollable violence in battle and shrugging off mental interference, turning you into a terrifying force of nature with unmatched brutality.',
      'Path of the Wild Heart': 'Barbarians are primal warriors who channel their rage into power. The Path of the Wild Heart bonds you with animal spirits, letting you rage like a bear, eagle, or wolf and grow claws, wings, and senses that echo the wildest predators\u2014fighting as a beast among men.',
      'Path of the World Tree': "Barbarians fight with primal rage, and those who follow the Path of the World Tree tap into cosmic roots that span realms. These warriors channel Yggdrasil's energy to heal, extend their reach, summon branches to trap foes, and teleport across the battlefield like a living myth.",
      'Path of the Zealot': 'Barbarians channel raw fury into combat, and those on the Path of the Zealot turn that rage into divine power. You become a sacred berserker, smiting foes with holy wrath, healing through faith, and even defying death to fight on in your god\u2019s name.',
      'Path of the Muscle Wizard': "Barbarians fight with raw strength and fury, and the Path of the Muscle Wizard lets you pretend you\'re a spellcaster\u2014while actually pulverizing foes with sheer force. You intimidate with your \'arcane prowess\', hurl \'cantrips\' as powerful punches, and cast the ultimate spell: Fist. You\'re not just strong, you\'re magically strong (and no one dares say otherwise).",
      'College of Dance': 'Bards are masters of performance and magic, turning music and motion into power. Bards from the College of Dance fight with swirling grace, blending battle with ballet\u2014darting across the battlefield, inspiring allies with every spin, and dodging danger in a rhythm all their own.',
      'College of Glamour': 'Bards wield music and charisma as magical weapons, and those in the College of Glamour specialize in fey enchantment. You become a living legend, dazzling foes with illusions and charm while inspiring allies with the radiant majesty of the Feywild.',
      'College of Lore': 'Bards are jacks-of-all-trades and masters of magic through music and knowledge. The College of Lore turns you into a collector of secrets, letting you learn any spell, cut through enemy attacks with sharp wit, and reveal truth and trickery with every clever line.',
      'College of Valor': 'Bards weave spell and steel into heroic performances. The College of Valor empowers you to fight on the frontlines\u2014singing of ancient legends, striking foes with sword and song, and turning the tide of battle with inspirational magic and martial might.',
      'Life Domain': 'Clerics channel divine power to heal, protect, and smite in the name of their deity. The Life Domain turns you into the ultimate healer, empowering every healing spell you cast to restore more health and let you act as a radiant beacon of endurance and restoration.',
      'Light Domain': 'Clerics are divine spellcasters who call down miracles. The Light Domain arms you with searing radiance, letting you blast enemies with fire and expose hidden threats, burning away darkness and falsehoods with the fury of the sun.',
      'Trickery Domain': 'Clerics draw power from divine patrons, and the Trickery Domain favors cleverness and illusion. With stealthy blessings, deceptive magic, and divine mischief, you become a holy trickster\u2014confounding foes and turning divine grace into a tool of chaos.',
      'War Domain': 'Clerics wield divine power in service of the gods, and those of the War Domain thrive in battle. You charge into the fray armored in faith, striking with divine fury and blessing your allies with righteous might, becoming a living weapon of your god.',
      'Circle of the Land': 'Druids shape the world with nature\u2019s magic, and those of the Circle of the Land become guardians of ancient places. You draw strength from forests, deserts, and tundras, casting powerful spells and channeling the raw elemental energy of the earth beneath your feet.',
      'Circle of the Moon': 'Druids command the wild, and the Circle of the Moon unlocks your inner beast. You transform into fearsome creatures, shifting shape mid-battle, tanking blows and tearing into foes as a primal avatar of the wilderness.',
      'Circle of the Sea': 'Druids channel nature\u2019s force, and the Circle of the Sea wields the raw power of oceans. You conjure storms, surge with tidal energy, and strike like a living wave\u2014commanding the deep to crush your enemies with aquatic fury.',
      'Circle of Stars': 'Druids shape magic from the natural world, and the Circle of the Stars reaches for the heavens. You harness celestial patterns to guide fate, shift into radiant forms, and cast starlit magic that bends destiny to your will.',
      'Battle Master': 'Fighters are masters of combat in all forms, and Battle Masters elevate that to an art form. With expert maneuvers and tactical superiority, you control the battlefield, disarm enemies, trip foes, and guide your allies like a war-hardened general.',
      'Champion': 'Fighters dominate in martial combat, and Champions push their physical limits beyond mortal bounds. You strike harder, land critical hits more often, and become a symbol of raw, heroic power that dominates any arena of battle.',
      'Eldritch Knight': 'Fighters thrive in close combat, and the Eldritch Knight fuses martial prowess with arcane magic. You blink across the field, enchant your blade, and throw fire and force alongside your sword\u2014wielding magic like a weapon in its own right.',
      'Psi Warrior': 'Fighters are tactical experts, and Psi Warriors sharpen their minds into weapons. With telekinetic shoves, psychic strikes, and mental defenses, you become a warrior monk of the mind, bending reality and your enemies with sheer willpower.',
      Dungeoneer: 'Fighters are masters of battle, and the Dungeoneer turns every dungeon crawl into a tactical triumph. With superstitious instincts, trap-dodging reflexes, and bonuses for uncovering monsters\u2019 secrets, you become a living guidebook of survival and treasure-hunting\u2014delving where others dare not tread and living to boast about it.',
      'Way of Mercy': 'Monks channel inner peace and deadly strikes, and the Way of Mercy walks the fine line between healer and executioner. With a touch, you can mend wounds or inflict pain\u2014moving as a masked agent of balance, judgment, and restoration.',
      'Way of Shadow': 'Monks move with unmatched speed and precision, and those who follow the Way of Shadow blend martial skill with supernatural stealth. You strike from darkness, vanish into smoke, and become a living embodiment of fear and silence.',
      'Way of the Elements': 'Monks master their body as a weapon, and the Way of the Four Elements lets you harness fire, water, air, and earth with your ki. You unleash elemental fury with punches, conjuring fire blasts, water whips, and more with every strike.',
      'Way of the Open Hand': 'Monks perfect martial arts into a graceful force of nature, and the Way of the Open Hand is the purest form of unarmed mastery. You knock enemies down, push them back, and strike with pressure-point precision\u2014untouchable and unstoppable.',
      'Warrior of the Street': 'Monks channel inner strength into physical perfection, and Warriors of the Street throw down with blinding combos and special moves straight out of a fighting game. You knock foes into the air, fire energy blasts, and unleash unstoppable uppercuts\u2014turning every encounter into a highlight reel of style and skill.',
      'Oath of Devotion': 'Paladins are divine champions sworn to uphold sacred oaths. The Oath of Devotion binds you to ideals of justice, honor, and light\u2014empowering you to smite evil with radiant force and protect the innocent with unshakable resolve.',
      'Oath of Glory': 'Paladins wield holy power in battle, and the Oath of Glory turns you into a paragon of heroism. You inspire allies with epic feats, charge into combat like a mythic champion, and embody the divine spark of legendary greatness.',
      'Oath of the Ancients': 'Paladins are armored crusaders for a higher cause, and the Oath of the Ancients roots you in the beauty of nature and joy. You wield radiant energy to shield allies, resist darkness, and preserve life with fey-touched might.',
      'Oath of Vengeance': 'Paladins uphold sacred vows, and the Oath of Vengeance swears relentless pursuit of evildoers. You hunt down the wicked with supernatural fury, chaining foes, teleporting across the battlefield, and becoming the unstoppable hand of retribution.',
      'Oath of Revelry': 'Paladins are divine warriors sworn to sacred vows, and those who swear the Oath of Revelry are devoted to joy, camaraderie, and nonstop celebration. You conjure enchanted drinks, party through pain, and inspire allies to greatness with your infectious revelry\u2014fighting for the sacred right to party.',
      'Beast Master': 'Rangers blend martial prowess with nature magic, and Beast Masters bond with a primal companion. You and your beast fight as one\u2014coordinating attacks, watching each other\u2019s backs, and unleashing wild fury together in harmony with the wilderness.',
      'Fey Wanderer': 'Rangers survive where others fear to tread, and Fey Wanderers bring the chaotic beauty of the Feywild with them. With charms, psychic blades, and bursts of eerie joy, you move like a trickster knight straddling two worlds.',
      'Gloom Stalker': 'Rangers are expert hunters, and Gloom Stalkers thrive in darkness. You strike unseen from the shadows, move like a ghost through the Underdark or night, and destroy your foes before they even know you\'re there.',
      Hunter: 'Rangers protect nature and slay threats with surgical precision. As a Hunter, you tailor your skills to destroy your chosen prey\u2014hailing arrows, dodging blows, and controlling the battlefield with relentless efficiency.',
      'Arcane Trickster': 'Rogues are masters of stealth and precision, and the Arcane Trickster adds magical flair to your bag of tricks. You blend illusions and enchantments with sneak attacks\u2014disarming traps, vanishing in plain sight, and outsmarting foes with arcane guile.',
      Assassin: 'Rogues excel at ambush and escape, and Assassins perfect the art of the kill. You strike from the shadows with lethal timing, deal massive damage to surprised foes, and move through the world as a ghost with a dagger\'s kiss.',
      Soulknife: 'Rogues operate in the margins, and Soulknives harness psionic energy to become psychic killers. You manifest blades from thought, leap between minds, and slay with silent precision\u2014untethered from steel or shadow.',
      Thief: 'Rogues slip through defenses like smoke, and Thieves elevate infiltration to an art. You climb walls, disable traps, pick locks in a blink, and swipe treasures before anyone notices\u2014true masters of speed and subtlety.',
      'Arachnoid Stalker': 'Rogues thrive in the shadows, and the Arachnoid Stalker uses spider-like powers to climb walls, sling webs, and poison prey. Whether crawling across ceilings, ambushing from above, or paralyzing foes with venom, you\'re a terrifying blend of stealth, precision, and arachnid agility.',
      'Aberrant Sorcery': 'Sorcerers wield magic born from their very essence, and Aberrant Sorcerers are shaped by alien powers. You unleash psionic force, grow bizarre abilities, and twist reality itself\u2014channeling a terrifying mutation of magic.',
      'Clockwork Sorcery': 'Sorcerers shape magic through innate talent, and Clockwork Sorcerers embody universal order. You stabilize chaos, protect allies with perfect timing, and summon energy as precise as a ticking cosmic engine.',
      'Draconic Sorcery': 'Sorcerers wield magic in their blood, and Draconic Sorcery draws from a dragon\u2019s ancient power. You grow scales, resist elemental forces, and unleash devastating breath-like blasts\u2014becoming draconic royalty in human form.',
      'Wild Magic': 'Sorcerers cast spells by force of will, and Wild Magic is chaotic and unpredictable. You unleash magic surges that can turn the tide\u2014or the table\u2014into something wondrous, terrifying, or downright bizarre.',
      'Archfey Patron': 'Warlocks channel power from otherworldly patrons, and those bound to the Archfey gain magic rooted in wonder and terror. You charm and confuse with fey tricks, teleport in a swirl of mist, and wield glamour that bends minds and reality.',
      'Celestial Patron': 'Warlocks make pacts for power, and those who serve a Celestial bring light instead of darkness. You heal with radiant energy, shield allies from harm, and burn enemies with divine fire\u2014channeling stars and starlight through your soul.',
      'Fiend Patron': 'Warlocks deal with powerful entities, and the Fiend offers fiery might in return. You hurl flames, absorb life from defeated foes, and command infernal magic with every curse you whisper and fireball you conjure.',
      'Great Old One Patron': 'Warlocks gain power from unfathomable sources, and the Great Old One offers madness in exchange for might. You read thoughts, speak into minds, and drive foes insane\u2014channeling the unknowable horror of the cosmos.',
      'Future You': 'Warlocks make deals with strange powers, and yours is your own time-traveling future self. With knowledge of what\u2019s to come, you bend fate, manipulate time, dodge attacks you "knew were coming", and inflict psychic damage with paradoxes\u2014unfolding a destiny only you truly understand.',
      Abjurer: 'Wizards master arcane knowledge through study, and Abjurers specialize in magical defense. You erect shields, banish threats, and become a walking fortress\u2014turning spells into walls and wards that protect allies and repel foes.',
      Diviner: 'Wizards shape reality with spells, and Diviners bend time and fate. You peer into the future, manipulate outcomes with prophetic dice, and always seem to be in the right place with uncanny foreknowledge.',
      Evoker: 'Wizards command pure arcane force, and Evokers shape it into raw destruction. You sculpt fireballs, lightning bolts, and thunderous blasts\u2014unleashing elemental devastation with pinpoint control.',
      Illusionist: 'Wizards rewrite perception itself, and Illusionists are masters of deception. You create images so real they can fool dragons, vanish into your own illusions, and manipulate belief as easily as reality.'
    }
  };

  const backgroundInfo = {
    pt: {
      'Acolyte':'Foste criado num templo, a servir uma divindade com devoção. Passaste os teus dias a estudar escrituras e a ajudar nas cerimónias. Tens uma forte ligação espiritual e um conhecimento profundo da fé, além de pequenos poderes sagrados aprendidos com os clérigos que te ensinaram.',
      'Artisan':'Cresceste num ambiente de trabalho manual, aprendendo um ofício desde jovem. Sabes como construir, reparar e vender os teus produtos. O teu olho treinado para os detalhes e o jeito com clientes fazem de ti alguém respeitado no mundo do comércio e da criação.',
      'Charlatan':'És um mestre da mentira e da ilusão. Vendeste poções falsas, fingiste ser alguém que não eras ou criaste documentos falsos com um sorriso convincente. Vives da tua lábia, da tua criatividade e de saberes sempre quando fugir.',
      'Criminal':'A tua vida começou nos becos e sombras da cidade. Foste ladrão, arrombador ou espião — talvez sozinho, talvez parte de um gangue. Sabes como mover-te sem ser visto e como escapar de quem te quer apanhar.',
      'Entertainer':'Viveste de aplausos e de fazer o público sorrir. Foste músico, acrobata, poeta ou palhaço. Sabes como cativar uma multidão e tens talento para o espectáculo, sempre pronto a brilhar ou a provocar gargalhadas.',
      'Farmer':'Nasceste e cresceste a trabalhar a terra. Aprendeste o valor do trabalho duro, da paciência e da ligação com os ciclos da natureza. A tua força e resistência vêm de anos de vida simples e esforço contínuo.',
      'Guard':'Serviste como guarda — de uma cidade, de uma muralha ou de um nobre. Estás sempre atento, preparado para intervir quando há perigo. A tua experiência ensinou-te a distinguir problemas ao longe e a manter a calma em situações tensas.',
      'Guide':'Viveste longe da civilização, a explorar florestas, montanhas e ruínas esquecidas. Levas outros por caminhos perigosos com sabedoria e discrição. Conheces os sons da natureza e os perigos que se escondem no meio dela.',
      'Hermit':'Passaste anos em isolamento, a meditar, estudar ou fugir do mundo. A tua mente está habituada à introspeção e ao silêncio. Talvez tenhas encontrado respostas... ou perguntas mais profundas ainda.',
      'Merchant':'Aprendeste a arte da negociação, da logística e do lucro. Vendeste bens por cidades e estradas, conhecendo culturas diferentes e as suas necessidades. És um viajante esperto com olho para oportunidades.',
      'Noble':'Foste criado no luxo de uma casa aristocrática. Aprendeste etiqueta, política e o peso do nome da tua família. Podes ser arrogante ou humilde, mas sabes como se comportar entre poderosos — ou manipulá-los.',
      'Sage':'Desde cedo te fascinaste com o conhecimento. Passaste anos entre livros, pergaminhos e mestres, a tentar compreender o mundo. Tens uma mente afiada e uma curiosidade insaciável, sempre à procura de respostas.',
      'Sailor':'A tua casa foi o mar. Navegaste por águas calmas e tempestades, conhecendo portos distantes e histórias fantásticas. És resistente, adaptável e habituado a uma vida onde tudo pode mudar com o vento.',
      'Scribe':'Trabalhaste a copiar textos importantes, seja em monastérios ou escritórios do governo. Escreves com precisão e atenção ao detalhe. O teu mundo é feito de palavras e de saber preservá-las sem erro.',
      'Soldier':'Foste treinado para a guerra. A tua vida foi feita de disciplina, treino e combate real. Estás habituado ao barulho da batalha, ao peso da armadura e às ordens que não se discutem. És leal, prático e determinado.',
      'Wayfarer':'Cresceste nas ruas, a sobreviver com engenho e teimosia. Aprendeste a mover-te sem ser notado e a confiar apenas em quem merece. Mesmo quando roubaste para sobreviver, nunca perdeste a esperança de um futuro melhor.'
    },
    en: {
      'Acolyte':'You were raised in a temple, serving a deity with devotion. You spent your days studying scriptures and helping in ceremonies. You have a strong spiritual bond and deep knowledge of faith, plus minor holy powers learned from the clerics who taught you.',
      'Artisan':'You grew up in a craftsman\'s environment, learning a trade from a young age. You can build, repair and sell your goods. Your trained eye for detail and skill with customers make you respected in the world of commerce and creation.',
      'Charlatan':'You are a master of lies and illusion. You sold fake potions, pretended to be someone else or forged documents with a convincing smile. You live by your wit, creativity and knowing when to run.',
      'Criminal':'Your life began in the city\'s alleys and shadows. You were a thief, burglar or spy—maybe alone, maybe part of a gang. You know how to move unseen and how to escape those who want to catch you.',
      'Entertainer':'You lived off applause and making the public smile. You were a musician, acrobat, poet or clown. You know how to captivate a crowd and have talent for showmanship, always ready to shine or provoke laughter.',
      'Farmer':'You were born and raised working the land. You learned the value of hard work, patience and the connection with nature\'s cycles. Your strength and endurance come from years of simple life and continuous effort.',
      'Guard':'You served as a guard—for a city, a wall or a noble. Always watchful, ready to intervene when danger arises. Your experience taught you to spot trouble from afar and keep calm in tense situations.',
      'Guide':'You lived far from civilization, exploring forests, mountains and forgotten ruins. You lead others through dangerous paths with wisdom and discretion. You know nature\'s sounds and the dangers hiding within.',
      'Hermit':'You spent years in isolation, meditating, studying or hiding from the world. Your mind is used to introspection and silence. Perhaps you found answers... or deeper questions.',
      'Merchant':'You learned the art of negotiation, logistics and profit. You sold goods along roads and cities, learning different cultures and their needs. You\'re a savvy traveler with an eye for opportunities.',
      'Noble':'You were raised in the luxury of an aristocratic house. You learned etiquette, politics and the weight of your family name. You may be arrogant or humble, but you know how to behave among the powerful—or manipulate them.',
      'Sage':'Fascinated by knowledge from early on, you spent years among books, scrolls and mentors trying to understand the world. You have a sharp mind and insatiable curiosity, always seeking answers.',
      'Sailor':'The sea was your home. You sailed through calm waters and storms, seeing distant ports and fantastic tales. You\'re resilient, adaptable and used to a life where everything can change with the wind.',
      'Scribe':'You worked copying important texts, whether in monasteries or government offices. You write with precision and attention to detail. Your world is made of words and knowing how to preserve them without error.',
      'Soldier':'You were trained for war. Your life was built on discipline, training and real combat. You\'re used to the noise of battle, the weight of armor and orders that are not questioned. Loyal, practical and determined.',
      'Wayfarer':'You grew up on the streets, surviving with cunning and stubbornness. You learned to move unnoticed and to trust only those who deserve it. Even when you stole to survive, you never lost hope for a better future.'
    }
  };

  const labels = {
    pt: { Species:'Espécie', Class:'Classe', Background:'Antecedente', restart:'Recomeçar' },
    en: { Species:'Species', Class:'Class', Background:'Background', restart:'Restart Quiz' }
  };

const miscText = {
  pt: {
    noResults: 'Sem resultados disponíveis.',
    seeMore: 'Ver mais',
    language: 'Idioma:',
    notChosen: 'Por escolher',
    quizTitle: 'Questionário de Personagem de D&D',
    resultsTitle: 'Resultados do Questionário',
    promptIntro: 'Cola este prompt num gerador de arte IA para visualizares a tua personagem!'
  },
  en: {
    noResults: 'No results available.',
    seeMore: 'See more',
    language: 'Language:',
    notChosen: 'Yet to be chosen',
    quizTitle: 'D&D Character Quiz',
    resultsTitle: 'Quiz Results',
    promptIntro: 'Paste this prompt into an AI art generator to visualize your character!'
  }
};

const nameMap = {
  pt: {
    species: {
      'Aasimar':'Aasimar',
      'Dragonborn':'Draconato',
      'Black Dragonborn':'Draconato Negro',
      'Blue Dragonborn':'Draconato Azul',
      'Brass Dragonborn':'Draconato Latão',
      'Bronze Dragonborn':'Draconato Bronze',
      'Copper Dragonborn':'Draconato Cobre',
      'Gold Dragonborn':'Draconato Ouro',
      'Green Dragonborn':'Draconato Verde',
      'Red Dragonborn':'Draconato Vermelho',
      'Silver Dragonborn':'Draconato Prata',
      'White Dragonborn':'Draconato Branco',
      'Dwarf':'Anão',
      'Elf':'Elfo',
      'Drow Elf':'Elfo Drow',
      'High Elf':'Alto Elfo',
      'Wood Elf':'Elfo dos Bosques',
      'Gnome':'Gnomo',
      'Forest Gnome':'Gnomo da Floresta',
      'Rock Gnome':'Gnomo das Rochas',
      'Goliath':'Golias',
      'Cloud Goliath':'Golias das Nuvens',
      'Fire Goliath':'Golias do Fogo',
      'Frost Goliath':'Golias da Geada',
      'Hill Goliath':'Golias das Colinas',
      'Stone Goliath':'Golias de Pedra',
      'Storm Goliath':'Golias da Tempestade',
      'Halfling':'Halfling',
      'Human':'Humano',
      'Orc':'Orque',
      'Tiefling':'Tiefling',
      'Abyssal Tiefling':'Tiefling Abissal',
      'Chthonic Tiefling':'Tiefling Ctónico',
      'Infernal Tiefling':'Tiefling Infernal',
      'Aarakocra':'Aarakocra',
      'Bugbear':'Bicho-papão',
      'Centaur':'Centauro',
      'Changeling':'Changeling',
      'Firbolg':'Firbolg',
      'Githyanki':'Githyanki',
      'Githzerai':'Githzerai',
      'Goblin':'Duende',
      'Hobgoblin':'Hobgoblin',
      'Kobold':'Kobold',
      'Lizardfolk':'Lizardfolk',
      'Minotaur':'Minotauro',
      'Satyr':'Sátiro',
      'Tabaxi':'Tabaxi',
      'Triton':'Tritão',
      'Yuan-ti':'Yuan-ti',
      'Deep Gnome':'Gnomo das Profundezas',
      'Duergar':'Duergar',
      'Eladrin':'Eladrin',
      'Autumn Eladrin':'Eladrin Outonal',
      'Winter Eladrin':'Eladrin Invernal',
      'Spring Eladrin':'Eladrin Primaveril',
      'Summer Eladrin':'Eladrin Estival',
      'Fairy':'Fada',
      'Genasi':'Genasi',
      'Air Genasi':'Genasi do Ar',
      'Earth Genasi':'Genasi da Terra',
      'Fire Genasi':'Genasi do Fogo',
      'Water Genasi':'Genasi da Água',
      'Geppettin (Marionette)':'Geppettin Marioneta',
      'Geppettin (Plushie or Bisque)':'Geppettin de Peluche ou Porcelana',
      'Marionette Geppettin':'Geppettin Marioneta',
      'Bisque Geppettin':'Geppettin de Porcelana',
      'Plushie Geppettin':'Geppettin de Peluche',
      'Harengon':'Harengon',
      'Kenku':'Kenku',
      'Mandrake':'Mandrágora',
      'Spring Mandrake':'Mandrágora Primaveril',
      'Summer Mandrake':'Mandrágora Estival',
      'Autumn Mandrake':'Mandrágora Outonal',
      'Winter Mandrake':'Mandrágora Invernal',
      'Sea Elf':'Elfo do Mar',
      'Shadar-kai':'Shadar-kai',
      'Shifter':'Metamorfo',
      'Beasthide Shifter':'Metamorfo Encouraçado',
      'Longtooth Shifter':'Metamorfo Lupino',
      'Swiftstride Shifter':'Metamorfo Veloz',
      'Wildhunt Shifter':'Metamorfo Canídeo',
      'Tortle':'Tortle'
    },
    classes: {
      'Barbarian':'Bárbaro',
      'Bard':'Bardo',
      'Cleric':'Clérigo',
      'Druid':'Druida',
      'Fighter':'Guerreiro',
      'Monk':'Monge',
      'Paladin':'Paladino',
      'Ranger':'Patrulheiro',
      'Rogue':'Ladino',
      'Sorcerer':'Feiticeiro',
      'Warlock':'Bruxo',
      'Wizard':'Mago'
    },
    backgrounds: {
      'Acolyte':'Acólito',
      'Artisan':'Artesão',
      'Charlatan':'Charlatão',
      'Criminal':'Criminoso',
      'Entertainer':'Artista',
      'Farmer':'Camponês',
      'Guard':'Guarda',
      'Guide':'Guia',
      'Hermit':'Eremita',
      'Merchant':'Comerciante',
      'Noble':'Nobre',
      'Sage':'Estudioso',
      'Sailor':'Marinheiro',
      'Scribe':'Escrivão',
      'Soldier':'Soldado',
      'Wayfarer':'Errante'
    },
    subclasses: {
      'Path of the Berserker': 'do Caminho da Ira',
      'Path of the Wild Heart': 'do Caminho do Coração Selvagem',
      'Path of the World Tree': 'do Caminho da Árvore do Mundo',
      'Path of the Zealot': 'do Caminho do Fanático',
      'Path of the Muscle Wizard': 'do Caminho do Mago Musculado',
      'College of Dance': 'do Colégio da Dança',
      'College of Glamour': 'do Colégio do Deslumbre',
      'College of Lore': 'do Colégio do Conhecimento',
      'College of Valor': 'do Colégio da Bravura',
      'Life Domain': 'do Domínio da Vida',
      'Light Domain': 'do Domínio da Luz',
      'Trickery Domain': 'do Domínio da Trapaça',
      'War Domain': 'do Domínio da Guerra',
      'Circle of the Land': 'do Círculo da Terra',
      'Circle of the Moon': 'do Círculo da Lua',
      'Circle of the Sea': 'do Círculo do Mar',
      'Circle of Stars': 'do Círculo das Estrelas',
      'Champion': 'Campeão',
      'Battle Master': 'Mestre de Batalha',
      'Eldritch Knight': 'Místico',
      'Psi Warrior': 'Psiónico',
      Dungeoneer: 'Explorador de Masmorras',
      'Way of the Open Hand': 'da Técnica da Mão Aberta',
      'Way of Shadow': 'da Técnica da Sombra',
      'Way of the Elements': 'da Técnica dos Elementos',
      'Way of Mercy': 'da Técnica da Misericórdia',
      'Warrior of the Street': 'Lutador das Ruas',
      'Oath of Devotion': 'do Juramento da Devoção',
      'Oath of Glory': 'do Juramento da Glória',
      'Oath of the Ancients': 'do Juramento dos Ancestrais',
      'Oath of Vengeance': 'do Juramento da Vingança',
      'Oath of Revelry': 'do Juramento da Celebração',
      'Beast Master': 'Mestre das Feras',
      'Fey Wanderer': 'Viajante Feérico',
      'Gloom Stalker': 'Viajante das Sombras',
      'Hunter': 'Caçador',
      'Arachnoid Stalker': 'Predador Aracnídeo',
      'Arcane Trickster': 'Trapaceiro Arcano',
      'Assassin': 'Assassino',
      'Soulknife': 'da Lâmina Psíquica',
      Thief: 'Ladrão',
      'Aberrant Sorcery': 'da Magia Aberrante',
      'Clockwork Sorcery': 'da Magia Mecânica',
      'Draconic Sorcery': 'da Magia Dracónica',
      'Wild Magic': 'da Magia Caótica',
      'Archfey Patron': 'com Patrono Arqui-feérico',
      'Celestial Patron': 'com Patrono Celestial',
      'Fiend Patron': 'com Patrono Infernal',
      'Future You': 'com A Sua Versão Futura como Patrono',
      'Great Old One Patron': 'com Patrono Grande Ancião',
      Abjurer: 'Abjurador',
      Diviner: 'Divinador',
      Evoker: 'Evocador',
      Illusionist: 'Ilusionista'
    }
  },
  en: { species:{}, classes:{}, backgrounds:{}, subclasses:{} }
};
