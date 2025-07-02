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
            question: 'É mais humanoide ou tem traços animais/objeto?',
            options: {
              A: { label: 'Humanoide', next: {
                question: 'Qual descrição se encaixa melhor?',
                options: {
                  A: { label: 'Orelhas grandes, sorriso malandro e corpo esguio?', result: 'Goblin' },
                  B: { label: 'Pequena e brilhante com asas de inseto?', result: 'Fairy' },
                  C: { label: 'Pequeno gnomo de pele cinzenta e olhos grandes?', result: 'Deep Gnome' }
                }
              }},
              B: { label: 'Animal ou objeto', next: {
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
            question: 'É mais animal ou humanoide?',
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
              A: { label: 'Humanoide ou ligeiramente mágica', next: {
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
                  A: { label: 'Corpo de marioneta, madeira ou membros articulados?', result: 'Geppettin (Marionette)' },
                  B: { label: 'Pele como casca ou coberta de folhas?', result: 'Mandrake' },
                  C: { label: 'Corpo feito de fogo, névoa, pedra ou água?', result: 'Genasi' }
                }
              }}
            }
          }},
          D: { label: 'Alta – Acima da altura comum de um humano como um estandarte de guerra ou um armário de armas.', next: {
            question: 'Escolhe a descrição que melhor se adequa:',
            options: {
              A: { label: 'Cabeça de dragão com arma de sopro?', result: 'Dragonborn' },
              B: { label: 'Rosto de lagarto com cauda e crista?', result: 'Lizardfolk' },
              C: { label: 'Postura ereta com traços de cobra?', result: 'Yuan-ti' },
              D: { label: 'Guerreiro tribal alto de presas?', result: 'Orc' },
              E: { label: 'Cabeça de touro, com chifres e cascos mas tronco humano?', result: 'Minotaur' },
              F: { label: 'Pernas de cabra, cornos, alegria musical?', result: 'Satyr' },
              G: { label: 'Guerreiro pálido de traços afiados?', result: 'Githyanki' },
              H: { label: 'Calmo, de pele amarelada-esverdeada?', result: 'Githzerai' },
              I: { label: 'Humanoide de corpo vegetal com pele de casca?', result: 'Mandrake' },
              J: { label: 'Elfo com aparência sazonal mutável?', result: 'Eladrin' }
            }
          }},
          E: { label: 'Muito Alta – Tão alta como uma carroça empilhada ou uma estante de uma biblioteca arcana.', next: {
            question: 'Escolhe a descrição que melhor se adequa:',
            options: {
              A: { label: 'Gigante peludo de braços longos e presas?', result: 'Bugbear' },
              B: { label: 'Corpo de cavalo e torso humano?', result: 'Centaur' },
              C: { label: 'Musculado e marcado como pedra?', result: 'Goliath' },
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
  },
    step3: step3pt,
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
      'Aasimar':'Com aparência divina e traços luminosos, os Aasimar são vistos como enviados dos céus. Conseguem curar com um toque e, em momentos de necessidade, libertam o seu verdadeiro poder celestial, ganhando asas ou uma aura poderosa para proteger ou destruir.',
      'Dragonborn':'Parecem dragões antropomórficos, com escamas coloridas e uma presença imponente. Conseguem cuspir energia mágica (como fogo ou gelo) sobre os inimigos e são naturalmente resistentes a esse mesmo tipo de energia.',
      'Black Dragonborn':'Com escamas negras e um ar ameaçador, os Black Dragonborn descendem de dragões sombrios. Sua presença intimidadora é acompanhada pela capacidade de liberar uma energia corrosiva, como um ácido implacável, que destrói tudo à sua volta. A sua resistência natural ao veneno torna-os ainda mais temíveis.',
      'Blue Dragonborn':'Com escamas que variam do azul profundo ao azul vibrante, os Blue Dragonborn são descendentes dos dragões do relâmpago. Eles podem invocar tempestades, lançando rajadas de eletricidade devastadoras que atingem tudo ao redor. Sua resistência ao raio os torna imunes a danos de eletricidade.',
      'Brass Dragonborn':'Com escamas douradas e brilho metálico, os Brass Dragonborn têm uma ligação com o fogo e o calor. Sua habilidade de lançar chamas intensas, como uma fogueira incontrolável, é lendária. A sua resistência ao calor extremo os torna quase imunes a incêndios.',
      'Bronze Dragonborn':'Com escamas prateadas que brilham à luz, os Bronze Dragonborn são conhecidos por sua habilidade de manipular o eletricidade. Suas rajadas de raios cortam o ar com precisão mortal, e sua resistência ao dano elétrico os torna quase invulneráveis a ataques baseados em eletricidade.',
      'Copper Dragonborn':'Com escamas de cobre e uma natureza travessa, os Copper Dragonborn têm uma ligação com os elementos ácidos. Eles liberam uma poderosa rajada de substâncias corrosivas que podem destruir armaduras e qualquer coisa que toquem. Sua resistência ao ácido faz com que eles sejam imunes a esse tipo de dano.',
      'Gold Dragonborn':'Com escamas douradas brilhantes, os Gold Dragonborn possuem uma ligação direta com o fogo. Quando em combate, sua habilidade de lançar uma rajada de fogo incendeia tudo em seu caminho. Sua resistência ao calor extremo torna-os poderosos no campo de batalha, sem sofrer danos com o fogo.',
      'Green Dragonborn':'Com escamas em tons de verde profundo, os Green Dragonborn têm uma forte conexão com a natureza venenosa. Eles liberam uma rajada venenosa que pode paralisar e envenenar suas vítimas. Sua resistência a toxinas e venenos torna-os imunes a esse tipo de dano.',
      'Red Dragonborn':'Com escamas vermelhas flamejantes, os Red Dragonborn são os mais poderosos descendentes dos dragões do fogo. Eles podem liberar rajadas de chamas que devastam tudo em seu caminho, queimando seus inimigos. Sua resistência ao fogo os torna praticamente imunes a danos flamejantes.',
      'Silver Dragonborn':'Com escamas prateadas e uma aparência nobre, os Silver Dragonborn possuem uma resistência ao frio. Eles podem lançar rajadas de gelo, congelando seus inimigos com uma força congelante. Sua capacidade de resistir ao frio intenso os torna poderosos em climas gelados.',
      'White Dragonborn':'Com escamas brancas que brilham como o gelo, os White Dragonborn liberam rajadas de vento congelante que paralisam e danificam seus inimigos com o frio. Sua resistência ao frio extremo torna-os quase imunes a qualquer forma de gelo ou neve.',
      'Dwarf':'Baixos e resistentes, os anões são conhecidos pela sua robustez. Aguentam bem venenos, veem claramente no escuro e são muito difíceis de derrubar. São trabalhadores incansáveis, tanto no campo como na guerra.',
      'Elf':'Elegantes e atentos, os elfos têm sentidos apurados e conseguem ver no escuro. Não precisam de dormir como os outros — bastam poucas horas de meditação. São também resistentes a magias que tentam manipular emoções.',
      'Drow Elf':'Com pele escura como a noite e olhos que brilham como estrelas, os Drow Elves vivem nas profundezas da terra. Eles têm uma afinidade com as sombras e a magia das trevas, sendo capazes de se mover sem ser vistos e lançar feitiços que manipulam as forças sombrias.',
      'High Elf':'Com aparência etérea e traços delicados, os High Elves são conhecidos pela sua sabedoria e habilidades mágicas. Eles têm um domínio sobre as artes arcanas e podem lançar feitiços poderosos com facilidade. Sua ligação com o Feywild lhes concede uma conexão natural com a magia da natureza.',
      'Wood Elf':'Os Wood Elves são mestres da furtividade e da camuflagem, com uma ligação profunda às florestas e aos animais. Eles se movem agilmente entre as árvores e possuem uma rapidez impressionante, além de uma afinidade com a natureza que lhes permite sobreviver facilmente em ambientes selvagens.',
      'Gnome':'Pequenos e curiosos, os gnomos são espertos e resistentes a truques mentais. Alguns falam com animais, outros inventam pequenos objetos mágicos. São criativos e têm uma mente afiada.',
      'Forest Gnome':'Com uma conexão mágica com a natureza, os Forest Gnomes podem falar com os animais e têm habilidades mágicas ligadas ao crescimento das plantas. Eles são pequenos e ágeis, capazes de se mover facilmente pelas florestas e usar a magia para se protegerem.',
      'Rock Gnome':'Conhecidos por sua habilidade em criar dispositivos mágicos e engenhocas, os Rock Gnomes são brilhantes inventores. Sua magia está ligada à criação e invenção, permitindo-lhes conjurar pequenos dispositivos mecânicos que os ajudam em combate ou no dia a dia.',
      'Goliath':'Altos como pequenos gigantes, os goliaths têm força e resistência impressionantes. Conseguem suportar mais dano do que o normal e usar poderes que lembram os seus antepassados gigantes.',
      'Cloud Goliath':'Com aparência suave como as nuvens, os Cloud Goliaths têm a capacidade de se mover rapidamente, como se fossem transportados pelo vento. Sua habilidade de desaparecer e reaparecer em locais distantes os torna quase invisíveis, e sua resistência ao vento os torna imunes a ataques baseados em ar.',
      'Fire Goliath':'Com pele vermelha e chamas que parecem dançar ao seu redor, os Fire Goliaths canalizam o poder do fogo. Eles podem liberar calor intenso e destruir tudo em seu caminho com a força do fogo, além de terem uma resistência impressionante ao calor e ao fogo.',
      'Frost Goliath':'Com uma aparência gélida e uma conexão com o frio, os Frost Goliaths podem liberar rajadas de gelo que congelam tudo ao seu redor. Sua resistência ao frio os torna imunes ao dano de gelo e os ajuda a sobreviver em ambientes congelantes.',
      'Hill Goliath':'Com pele dura como a terra, os Hill Goliaths têm uma resistência incrível e força bruta. Sua ligação com a terra dá a eles uma habilidade única de resistir a danos e resistir ao impacto de ataques pesados. Eles são conhecidos por sua capacidade de derrubar adversários com força de montanha.',
      'Stone Goliath':'Os Stone Goliaths têm uma resistência inabalável e aparência que lembra a pedra sólida. Eles podem suportar grandes quantidades de dano e continuar em combate, além de serem extremamente fortes, o que os torna imbatíveis em combate corpo a corpo.',
      'Storm Goliath':'Com pele cintilante e olhos como relâmpagos, os Storm Goliaths têm uma conexão com os trovões e as tempestades. Eles podem retaliar com ondas de energia elétrica, criando uma tempestade de destruição ao seu redor. Sua resistência ao trovão os torna imunes a danos elétricos.',
      'Halfling':'Pequeninos e simpáticos, os halflings são incrivelmente sortudos. Costumam escapar de situações perigosas e são difíceis de apanhar. São companheiros leais e discretos.',
      'Human':'Versáteis e determinados, os humanos adaptam-se facilmente a qualquer papel. Começam com um talento especial que os ajuda a destacar-se cedo nas aventuras.',
      'Orc':'Fortes e impulsivos, os orcs continuam de pé mesmo quando deviam cair. Conseguem lançar-se com força sobre os inimigos e recuperam rapidamente em combate. São guerreiros naturais.',
      'Tiefling':'Com aparência infernal, os tieflings têm um lado mágico ligado a demónios ou diabos. São resistentes a certas magias e podem usar poderes sombrios para enganar ou ferir.',
      'Abyssal Tiefling':'Com chifres e uma presença demoníaca, os Abyssal Tieflings possuem uma conexão com os demônios do Abismo. Eles podem manipular energias venenosas, causando dano com a mesma força destrutiva das criaturas abissais.',
      'Chthonic Tiefling':'Os Chthonic Tieflings têm uma aparência cadavérica ou sedutora, com uma conexão com o submundo. Eles podem invocar poderes necromânticos que drenam a vida de seus inimigos, além de serem imunes a danos relacionados à necrose.',
      'Infernal Tiefling':'Com pele vermelha e chifres curvos, os Infernal Tieflings têm uma conexão direta com os demônios do Inferno. Eles podem lançar feitiços flamejantes que queimam seus inimigos, além de serem imunes ao fogo e calor.',
      'Aarakocra':'Com asas de pássaro, os aarakocra podem voar desde o início. São rápidos, ágeis e têm grande vantagem em terrenos abertos ou para explorar lugares altos.',
      'Bugbear':'Altos e peludos, os bugbears movem-se com uma furtividade surpreendente. São fortes, atacam à distância com os braços longos e adoram emboscadas.',
      'Centaur':'Metade humano, metade cavalo, o centauro é rápido e poderoso. Corre e luta com facilidade, e a sua ligação à natureza torna-o um excelente explorador.',
      'Changeling':'De aparência mutável, os changelings conseguem mudar de rosto e corpo à vontade. São ideais para disfarces, espionagem ou para jogar várias "personagens" numa só.',
      'Firbolg':'Gentis e altos, os firbolgs ligam-se profundamente à natureza. Sabem esconder-se facilmente, comunicar com animais e plantas, e usar magia para se protegerem ou ajudarem os outros.',
      'Githyanki':'Guerreiros de outros planos.',
      'Githzerai':'Monges que controlam a mente.',
      'Goblin':'Pequenos, espertos e rápidos, os goblins são difíceis de agarrar e costumam recuperar força quando derrotam inimigos. Escapam de perigos com facilidade e são ótimos sobreviventes.',
      'Hobgoblin':'Com ar de soldados disciplinados, os hobgoblins são estratégicos e cooperativos. Ajudam os aliados com eficácia e mantêm a ordem mesmo no meio do caos.',
      'Kobold':'Frágeis mas engenhosos, os kobolds são valentes quando em grupo. Surpreendem os inimigos com truques e podem inspirar os colegas com gritos de coragem.',
      'Lizardfolk':'Parecidos com lagartos humanoides, são calmos, práticos e duros de roer. Sabem construir com o que têm à mão e sobrevivem bem em ambientes difíceis.',
      'Minotaur':'Fortes e imponentes, os minotauros atacam com violência e resistem a quedas. Carregam sobre os inimigos como verdadeiros touros e são bons rastreadores.',
      'Satyr':'Festeiros e encantadores, os satyrs dançam e tocam música como parte da sua magia. São difíceis de manipular, rápidos nos saltos e ótimos em socializar.',
      'Tabaxi':'Felinos ágeis e curiosos, os tabaxi movem-se rapidamente e conseguem escalar com facilidade. Estão sempre em busca de coisas novas e adoram explorar.',
      'Triton':'Seres aquáticos nobres, os tritons vivem bem debaixo de água. Sabem nadar com mestria, comunicar com criaturas marinhas e controlar pequenos efeitos mágicos ligados ao mar.',
      'Yuan-ti':'Com traços de serpente, os yuan-ti são frios e manipuladores. Imunes a venenos e difíceis de influenciar, usam magia para controlar os outros ou causar medo.',
      'Deep Gnome':'Gnomos subterrâneos de pele cinzenta e olhos grandes. Resistentes e dotados de magia para se ocultarem.',
      'Duergar':'Anões cinzentos do Subterrâneo, resistentes a ilusões e capazes de crescer ou ficar invisíveis por instantes.',
      'Eladrin':'Elfos ligados à Feywild cujo aspeto e poderes mudam com as estações.',
      'Autumn Eladrin':'Com uma aura de paz, os Autumn Eladrin emanam harmonia e serenidade. Sua magia está ligada à estação de outono, permitindo-lhes acalmar os inimigos ou manipular suas emoções, tornando-os mais suscetíveis à paz ou à amizade.',
      'Winter Eladrin':'Com uma presença fria e calculista, os Winter Eladrin refletem o gelo e a solidão do inverno. Sua magia pode intimidar e criar medo, congelando os inimigos com o mesmo frio cortante que eles representam.',
      'Spring Eladrin':'Com um espírito alegre, os Spring Eladrin irradiam vitalidade e energia positiva. Eles podem curar os feridos e até transportar outras pessoas com a velocidade do vento, trazendo alegria e saúde para os outros ao seu redor.',
      'Summer Eladrin':'Com um fogo no coração, os Summer Eladrin são guerreiros da magia. Eles podem invocar chamas e rajadas de calor intensas, queimando seus inimigos e trazendo uma força imbatível para o campo de batalha.',
      'Fairy':'Pequenas fadas aladas com magia inata e muita travessura.',
      'Genasi':'Seres imbuídos de poder elemental — ar, terra, fogo ou água.',
      'Air Genasi':'Com uma aparência etérea e cabelos que flutuam com o vento, os Air Genasi têm uma conexão com os ventos. Eles podem controlar as correntes de ar, voar e resistir a ataques baseados em eletricidade ou vento.',
      'Earth Genasi':'Com uma pele que lembra pedras e minerais, os Earth Genasi têm uma resistência excepcional à terra e ao peso. Sua força física é impressionante, e eles podem manipular o solo para sua vantagem.',
      'Fire Genasi':'Com pele ardente e uma presença flamejante, os Fire Genasi são descendentes dos efreeti, podendo controlar o fogo e usar chamas para atacar. Sua resistência ao calor torna-os imunes a ataques de fogo.',
      'Water Genasi':'Com uma aparência fluída e uma conexão com os oceanos, os Water Genasi têm a capacidade de manipular a água. Eles podem nadar rapidamente e resistem a qualquer tipo de dano aquático.',
      'Geppettin (Marionette)':'Boneco vivo de madeira que não precisa dormir, muitas vezes artista ou espião.',
      'Geppettin (Plushie or Bisque)':'Boneco de pano ou porcelana que vive sem comer ou dormir, adorados por miúdos e graúdos.',
      'Marionette Geppettin':'Com articulações flexíveis e uma aparência de boneco de madeira, os Marionette Geppettin são excepcionais em dança e combate. Suas habilidades em combate corpo a corpo são amplificadas pela flexibilidade dos seus membros.',
      'Bisque Geppettin':'Com a aparência de uma boneca de porcelana, os Bisque Geppettin são incrivelmente delicados e de aparência encantadora, mas com grande força ao atacar. Eles causam grande dano com um ataque surpresa e são conhecidos pela sua aparência angelical e imperturbável.',
      'Plushie Geppettin':'Com uma aparência de brinquedo macio, os Plushie Geppettin são adoráveis e resistentes ao dano físico. Sua natureza fofinha esconde uma grande resistência, e sua habilidade de absorver impacto faz deles companheiros ideais em situações perigosas.',
      'Harengon':'Povo-coelho famoso pela rapidez e energia.',
      'Kenku':'Criaturas semelhantes a corvos que se comunicam por imitação e são mestres da furtividade.',
      'Mandrake':'Um intermediário entre animal e planta. Um icor rubro corre-lhe nas veias-raiz e pode alimentar-se de seres vivos ou apenas da luz do sol. A sua forma varia de rebento frondoso a tronco lenhoso e os druidas reverenciam-no como emissário da natureza.',
      'Spring Mandrake':'Com uma aparência de jovem árvore, as mandrágoras Primaveris florescem na primavera. Sua magia natural está ligada ao crescimento e à cura, e seus poderes são amplificados sob a luz do sol, permitindo-lhes crescer rapidamente.',
      'Summer Mandrake':'As mandrágoras Estivais são vigorosas e cheias de energia, com troncos robustos e folhas vibrantes. Sua magia está ligada à vitalidade, permitindo-lhes curar rapidamente e manipular a natureza com grande força.',
      'Autumn Mandrake':'Com a aparência de uma árvore envelhecida e folhas douradas, as mandrágoras Outonais possuem uma sabedoria antiga. Elas são capazes de afetar várias criaturas ao mesmo tempo com suas habilidades naturais e manipular o ambiente à sua volta.',
      'Winter Mandrake':'Com uma aparência gélida, as mandrágoras Invernais possuem habilidades que imitam o frio e a neve. Seus poderes são congelantes, causando dano com o toque do inverno e manipulando a área ao redor com magia gelada.',
      'Sea Elf':'Elfos adaptados ao mar, com guelras e capacidade de nadar rapidamente.',
      'Shadar-kai':'Elfos sombrios ligados à Rainha Corvo, viajando entre mundos.',
      'Shifter':'Humanoides com sangue bestial que assumem traços animais temporariamente.',
      'Beasthide Shifter':'Descendentes de werebears e wereboars, os Beasthide Shifters possuem uma resistência física impressionante e uma pele densa como a de um urso ou javali. Quando entram em "shifting", sua pele se torna espessa e resistente, aumentando sua defesa. São conhecidos pela sua força bruta e habilidade para suportar os maiores ataques, tornando-se praticamente inquebráveis.',
      'Longtooth Shifter':'Com raízes em werewolves, os Longtooth Shifters possuem presas afiadíssimas e uma ferocidade indomável. Quando entram em "shifting", suas presas se alongam e se tornam mortais, permitindo que eles lancem ataques rápidos e devastadores. Sua força de ataque e resistência ao dano fazem deles predadores naturais, prontos para lutar até o fim.',
      'Swiftstride Shifter':'Descendentes de wererats e weretigers, os Swiftstride Shifters têm uma agilidade e rapidez impressionantes. Ao entrarem em "shifting", seus movimentos se tornam tão rápidos quanto os de um felino ou roedor, permitindo-lhes desferir ataques rápidos e esquivar-se com facilidade. Sua habilidade de se mover rapidamente os torna difíceis de pegar, dando-lhes uma vantagem em batalhas dinâmicas.',
      'Wildhunt Shifter':'Descendentes de werewolves, os Wildhunt Shifters possuem uma afinidade com a caça e os rastros. Seus sentidos aguçados e habilidade de detectar criaturas ao seu redor os tornam excepcionais caçadores. Durante o "shifting", eles ganham uma maior velocidade e uma sensação de alerta constante, permitindo-lhes rastrear e perseguir suas presas com precisão. São mestres em evitar ataques e superar obstáculos enquanto caçam.',
      'Tortle':'Povo tartaruga pacífico com carapaças duras e talento para sobreviver.'
    },
    en: {
      'Aasimar':'With divine appearance and radiant traits, Aasimar are seen as heaven-sent. They can heal with a touch and, when needed, unleash true celestial power, gaining wings or a powerful aura to protect or destroy.',
      'Dragonborn':'Anthropomorphic dragons with colorful scales and an imposing presence. They can breathe magical energy, such as fire or ice, and are naturally resistant to that same element.',
      'Black Dragonborn':'Descended from black dragons, exhaling acid and resisting it.',
      'Blue Dragonborn':'Descended from blue dragons, breathing lightning with pride.',
      'Brass Dragonborn':'Descended from brass dragons, breathing fire and loving conversation.',
      'Bronze Dragonborn':'Descended from bronze dragons, releasing controlled lightning.',
      'Copper Dragonborn':'Descended from copper dragons, spitting acid with a trickster streak.',
      'Gold Dragonborn':'Descended from gold dragons, unleashing majestic fire.',
      'Green Dragonborn':'Descended from green dragons, exhaling poisonous clouds.',
      'Red Dragonborn':'Descended from red dragons, wielding the fiercest flames.',
      'Silver Dragonborn':'Descended from silver dragons, breathing cold with kindness.',
      'White Dragonborn':'Descended from white dragons, blasting foes with freezing breath.',
      'Dwarf':'Short and sturdy, dwarves are known for their resilience. They resist poison, see clearly in the dark and are hard to knock down. Tireless workers both in the field and at war.',
      'Elf':'Graceful and alert, elves have keen senses and darkvision. They need only a few hours of meditation instead of sleep and resist magic that manipulates emotions.',
      'Drow Elf':'Elves shaped by the Underdark, with innate magic and dark skin.',
      'High Elf':'Elves steeped in arcane tradition and refined culture.',
      'Wood Elf':'Elves of the deep forests, swift and stealthy hunters.',
      'Gnome':'Small and curious, gnomes are clever and resistant to mental tricks. Some talk to animals while others invent little magical objects. Creative and sharp-minded.',
      'Forest Gnome':'Gnomes bonded to woodland creatures and illusion magic.',
      'Rock Gnome':'Inventive gnomes who tinker with clever clockwork.',
      'Goliath':'Tall like small giants, goliaths boast impressive strength and endurance. They withstand more damage than usual and wield powers reminiscent of their giant ancestry.',
      'Cloud Goliath':'Cloud giant kin who teleport short distances.',
      'Fire Goliath':'Fire giant descendants channeling burning strikes.',
      'Frost Goliath':'Frost giant lineage that chills foes.',
      'Hill Goliath':'Hill giant strength knocks enemies prone.',
      'Stone Goliath':'Stone giant heritage grants endurance against harm.',
      'Storm Goliath':'Storm giant blood unleashes thunder when hurt.',
      'Halfling':'Tiny and friendly, halflings are incredibly lucky. They often escape danger and are hard to catch, remaining loyal and discreet companions.',
      'Human':'Versatile and determined, humans adapt easily to any role. They begin with a special feat that helps them shine early in adventures.',
      'Orc':'Strong and impulsive, orcs stay standing even when they should fall. They can charge foes with force and recover quickly in battle. Natural warriors.',
      'Tiefling':'With infernal looks, tieflings have a magical side linked to demons or devils. They resist certain spells and can use dark powers to deceive or harm.',
      'Abyssal Tiefling':'Tiefling with demonic blood, resistant to poison and wielding dark magic.',
      'Chthonic Tiefling':'Tiefling tied to gloomy realms, resisting necrotic energy.',
      'Infernal Tiefling':'Tiefling descended from devils, resistant to fire and hellish powers.',
      'Aarakocra':'With birdlike wings, aarakocra can fly from the start. Fast and agile, they excel in open areas or exploring high places.',
      'Bugbear':'Tall and furry, bugbears move with surprising stealth. Strong and long-armed, they love ambushes.',
      'Centaur':'Half human, half horse, centaurs are swift and powerful. They run and fight with ease and their bond with nature makes them great scouts.',
      'Changeling':'With mutable features, changelings can alter face and body at will. Perfect for disguises, espionage or playing many “characters” in one.',
      'Firbolg':'Gentle and tall, firbolgs connect deeply with nature. They hide with ease, speak with animals and plants and use magic to protect or aid others.',
      'Githyanki':'Warriors from other planes.',
      'Githzerai':'Monks who master the mind.',
      'Goblin':'Small, clever and quick, goblins are hard to catch and regain strength when they defeat foes. Great survivors who escape danger easily.',
      'Hobgoblin':'Disciplined soldier-like folk, hobgoblins are strategic and cooperative, helping allies effectively and keeping order amid chaos.',
      'Kobold':'Fragile but ingenious, kobolds are brave in numbers. They surprise foes with tricks and can rally comrades with shouts of courage.',
      'Lizardfolk':'Resembling humanoid lizards, they are calm, practical and tough. They craft with whatever is at hand and thrive in harsh environments.',
      'Minotaur':'Strong and imposing, minotaurs strike violently and resist falling. They charge like true bulls and are skilled trackers.',
      'Satyr':'Festive and charming, satyrs dance and play music as part of their magic. Hard to manipulate, quick on their feet and sociable.',
      'Tabaxi':'Feline and curious, tabaxi move swiftly and can climb with ease. Always seeking new things, they love to explore.',
      'Triton':'Noble aquatic beings who thrive underwater. They swim expertly, communicate with sea creatures and wield minor magic tied to the ocean.',
      'Yuan-ti':'With serpent traits, yuan-ti are cold and manipulative. Immune to poison and hard to influence, they use magic to control others or instill fear.',
      'Deep Gnome':'Small underground gnomes with gray skin and keen eyes. Tough miners who use natural magic to avoid danger.',
      'Duergar':'Gray-skinned dwarves of the Underdark. Resistant to illusions and able to grow or turn invisible briefly.',
      'Eladrin':'Elves attuned to the Feywild whose look and powers shift with the seasons.',
      'Autumn Eladrin':'Eladrin of autumn who charm nearby creatures after teleporting.',
      'Winter Eladrin':'Eladrin of winter who frighten foes with a fey step.',
      'Spring Eladrin':'Eladrin of spring who teleport allies instead of themselves.',
      'Summer Eladrin':'Eladrin of summer who burn enemies when they step.',
      'Fairy':'Tiny fey with delicate wings and innate magic, brimming with mischief.',
      'Genasi':'Humanoids infused with elemental power, their bodies showing traits of air, earth, fire or water.',
      'Air Genasi':'Air genasi descended from djinn with lightning resistance.',
      'Earth Genasi':'Earth genasi who move unhindered across difficult ground.',
      'Fire Genasi':'Fire genasi wreathed in flame and immune to the heat.',
      'Water Genasi':'Water genasi who breathe underwater and shape the waves.',
      'Geppettin (Marionette)':'Ever a joy to children, geppettin resemble living playthings. Marionette types are wooden with painted faces and flexible joints. Though they look like puppets, they are sentient and independent, needing no food or rest and never aging. Many perform on stage while others excel as spies or assassins.',
      'Geppettin (Plushie or Bisque)':'Ever a joy to children, geppettin resemble living playthings. Plushie or bisque varieties are soft-stuffed dolls or porcelain figures brought to life. They are sentient and independent, require no food or sleep and do not age. Most entertain crowds, though some find success as spies or companions.',
      'Marionette Geppettin':'Ever a joy to children, geppettin resemble living playthings. Marionette types are wooden with painted faces and flexible joints. They are sentient and tireless, often actors or spies.',
      'Bisque Geppettin':'Ever a joy to children, geppettin resemble living playthings. Bisque varieties are elegant porcelain dolls brought to life, needing neither food nor sleep.',
      'Plushie Geppettin':'Ever a joy to children, geppettin resemble living playthings. Plushie varieties are soft stuffed toys come alive, never needing sustenance or rest.',
      'Harengon':'Rabbitfolk known for quick reflexes and boundless energy.',
      'Kenku':'Crow-like beings who communicate by mimicry and excel at stealth.',
      'Mandrake':'With barklike skin and leaves at their extremities, mandrakes stand between animal and plant. A ruby ichor pumps through their root-veins, allowing them to feed on flesh or survive on sunlight. Their appearance shifts with the seasons from leafy sapling to woody tree. Druids regard them as emissaries of a primordial goddess of nature, and these rare beings can live for centuries on the edge of civilization and the wilds.',
      'Spring Mandrake':'Mandrake harvested in spring whose vines pull flying foes to earth.',
      'Summer Mandrake':'Mandrake harvested in summer that moves enemies with strong vines.',
      'Autumn Mandrake':'Mandrake harvested in autumn that ensnares multiple foes.',
      'Winter Mandrake':'Mandrake harvested in winter that blasts foes with cold vines.',
      'Sea Elf':'Elves adapted to the ocean with gills and a swimming speed.',
      'Shadar-kai':'Shadow-touched elves bound to the Raven Queen, traveling between worlds.',
      'Shifter':'Humans with bestial heritage who briefly assume animal traits.',
      'Beasthide Shifter':'Shifter whose hide thickens for extra defense.',
      'Longtooth Shifter':'Shifter who bites fiercely with elongated fangs.',
      'Swiftstride Shifter':'Shifter who moves quickly and avoids attacks when shifted.',
      'Wildhunt Shifter':'Shifter with keen instincts that foil surprise.',
      'Tortle':'Peaceful turtlefolk with hard shells and practical survival skills.'
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
      'Dragonborn':'Dragonborn',
      'Black Dragonborn':'Dragonborn (Negro)',
      'Blue Dragonborn':'Dragonborn (Azul)',
      'Brass Dragonborn':'Dragonborn (Latão)',
      'Bronze Dragonborn':'Dragonborn (Bronze)',
      'Copper Dragonborn':'Dragonborn (Cobre)',
      'Gold Dragonborn':'Dragonborn (Ouro)',
      'Green Dragonborn':'Dragonborn (Verde)',
      'Red Dragonborn':'Dragonborn (Vermelho)',
      'Silver Dragonborn':'Dragonborn (Prata)',
      'White Dragonborn':'Dragonborn (Branco)',
      'Dwarf':'Anão',
      'Elf':'Elfo',
      'Drow Elf':'Elfo Drow',
      'High Elf':'Alto Elfo',
      'Wood Elf':'Elfo da Floresta',
      'Gnome':'Gnomo',
      'Forest Gnome':'Gnomo da Floresta',
      'Rock Gnome':'Gnomo das Rochas',
      'Goliath':'Goliath',
      'Cloud Goliath':'Goliath das Nuvens',
      'Fire Goliath':'Goliath do Fogo',
      'Frost Goliath':'Goliath da Geada',
      'Hill Goliath':'Goliath das Colinas',
      'Stone Goliath':'Goliath de Pedra',
      'Storm Goliath':'Goliath da Tempestade',
      'Halfling':'Halfling',
      'Human':'Humano',
      'Orc':'Orc',
      'Tiefling':'Tiefling',
      'Abyssal Tiefling':'Tiefling Abissal',
      'Chthonic Tiefling':'Tiefling Ctónico',
      'Infernal Tiefling':'Tiefling Infernal',
      'Aarakocra':'Aarakocra',
      'Bugbear':'Bugbear',
      'Centaur':'Centauro',
      'Changeling':'Changeling',
      'Firbolg':'Firbolg',
      'Githyanki':'Githyanki',
      'Githzerai':'Githzerai',
      'Goblin':'Goblin',
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
      'Geppettin (Marionette)':'Geppettin (Marioneta)',
      'Geppettin (Plushie or Bisque)':'Geppettin (Pelúcia ou Porcelana)',
      'Marionette Geppettin':'Geppettin (Marioneta)',
      'Bisque Geppettin':'Geppettin (Porcelana)',
      'Plushie Geppettin':'Geppettin (Pelúcia)',
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
      'Beasthide Shifter':'Metamorfo Couro de Besta',
      'Longtooth Shifter':'Metamorfo Dente Longo',
      'Swiftstride Shifter':'Metamorfo Passo Veloz',
      'Wildhunt Shifter':'Metamorfo Caça Selvagem',
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
      'Merchant':'Mercador',
      'Noble':'Nobre',
      'Sage':'Sábio',
      'Sailor':'Marinheiro',
      'Scribe':'Escrivão',
      'Soldier':'Soldado',
      'Wayfarer':'Errante'
    },
    subclasses: {
      'Path of the Berserker':'Caminho do Berserker',
      'Path of the Wild Heart':'Caminho do Coração Selvagem',
      'Path of the World Tree':'Caminho da Árvore do Mundo',
      'Path of the Zealot':'Caminho do Zelote',
      'Path of the Muscle Wizard':'Caminho do Mago Musculado',
      'College of Dance':'Colégio da Dança',
      'College of Glamour':'Colégio do Glamour',
      'College of Lore':'Colégio do Saber',
      'College of Valor':'Colégio do Valor',
      'Life Domain':'Domínio da Vida',
      'Light Domain':'Domínio da Luz',
      'Trickery Domain':'Domínio da Trapaça',
      'War Domain':'Domínio da Guerra',
      'Circle of the Land':'Círculo da Terra',
      'Circle of the Moon':'Círculo da Lua',
      'Circle of the Storm':'Círculo da Tempestade',
      'Circle of Stars':'Círculo das Estrelas',
      'Champion':'Campeão',
      'Battle Master':'Mestre de Batalha',
      'Eldritch Knight':'Cavaleiro Arcano',
      'Psi Warrior':'Guerreiro Psi',
      'Monster Hunter':'Caçador de Monstros',
      'Way of the Open Hand':'Caminho da Mão Aberta',
      'Way of Shadow':'Caminho da Sombra',
      'Way of the Four Elements':'Caminho dos Quatro Elementos',
      'Way of Mercy':'Caminho da Misericórdia',
      'Way of the Arcade':'Caminho do Arcade',
      'Oath of Devotion':'Juramento da Devoção',
      'Oath of Glory':'Juramento da Glória',
      'Oath of the Ancients':'Juramento dos Ancestrais',
      'Oath of Vengeance':'Juramento da Vingança',
      'Oath of Celebration':'Juramento da Celebração',
      'Beast Master':'Mestre das Feras',
      'Fey Wanderer':'Errante Feérico',
      'Gloom Stalker':'Caçador das Sombras',
      'Hunter':'Caçador',
      'Spider':'Aranha',
      'Arcane Trickster':'Trapaceiro Arcano',
      'Assassin':'Assassino',
      'Soulknife':'Lâmina da Alma',
      'Swashbuckler':'Espadachim',
      'Aberrant Mind':'Mente Abissal',
      'Clockwork Soul':'Alma Mecânica',
      'Draconic Bloodline':'Linhagem Dracónica',
      'Wild Magic':'Magia Caótica',
      'Archfey Patron':'Patrono Feérico',
      'Celestial Patron':'Patrono Celestial',
      'Fiend Patron':'Patrono Infernal',
      'Future Self':'Eu do Futuro',
      'Great Old One':'Grande Antigo',
      'Abjuration':'Abjuração',
      'Divination':'Adivinhação',
      'Evocation':'Evocação',
      'Illusion':'Ilusão'
    }
  },
  en: { species:{}, classes:{}, backgrounds:{}, subclasses:{} }
};
