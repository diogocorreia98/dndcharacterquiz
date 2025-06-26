(function(){
  const container = document.getElementById('results');
  const restartBtn = document.getElementById('restart');
  const stored = sessionStorage.getItem('dndResults');
  if(!stored){
    container.textContent = 'No results available.';
    return;
  }
  const {species, class:clazz, background, lang} = JSON.parse(stored);

  const speciesInfo = {
    pt: {
      'Aasimar':'Com aparência divina e traços luminosos, os aasimar são vistos como enviados dos céus. Conseguem curar com um toque e, em momentos de necessidade, libertam o seu verdadeiro poder celestial, ganhando asas ou uma aura poderosa para proteger ou destruir.',
      'Dragonborn':'Semelhantes a dragões antropomórficos, os draconatos exibem escamas coloridas e uma presença imponente. Conseguem cuspir energia mágica (como fogo ou gelo) sobre os inimigos e são naturalmente resistentes a esse mesmo tipo de energia.',
      'Dwarf':'Baixos e resistentes, os anões são conhecidos pela sua robustez. Aguentam bem venenos, veem claramente no escuro e são muito difíceis de derrubar. São trabalhadores incansáveis, tanto no campo como na guerra.',
      'Elf':'Elegantes e atentos, os elfos têm sentidos apurados e conseguem ver no escuro. Não precisam de dormir como os outros — bastam poucas horas de meditação. São também resistentes a magias que tentam manipular emoções.',
      'Gnome':'Pequenos e curiosos, os gnomos são espertos e resistentes a truques mentais. Alguns falam com animais, outros inventam pequenos objetos mágicos. São criativos e têm uma mente afiada.',
      'Goliath':'Altos como pequenos gigantes, os golias possuem força e resistência impressionantes. Conseguem suportar mais dano do que o normal e usar poderes que lembram os seus antepassados gigantes.',
      'Halfling':'Pequeninos e simpáticos, os halflings são incrivelmente sortudos. Costumam escapar de situações perigosas e são difíceis de apanhar. São companheiros leais e discretos.',
      'Human':'Versáteis e determinados, os humanos adaptam-se facilmente a qualquer papel. Começam com um talento especial que os ajuda a destacar-se cedo nas aventuras.',
      'Orc':'Fortes e impulsivos, os orques continuam de pé mesmo quando deviam cair. Conseguem lançar-se com força sobre os inimigos e recuperam rapidamente em combate. São guerreiros naturais.',
      'Tiefling':'Com aparência infernal, os tieflings têm um lado mágico ligado a demónios ou diabos. São resistentes a certas magias e podem usar poderes sombrios para enganar ou ferir.',
      'Aarakocra':'Com asas de pássaro, os aarakocra podem voar desde o início. São rápidos, ágeis e têm grande vantagem em terrenos abertos ou para explorar lugares altos.',
      'Bugbear':'Altos e peludos, os bugbears movem-se com uma furtividade surpreendente. São fortes, atacam à distância com os braços longos e adoram emboscadas.',
      'Centaur':'Metade humano, metade cavalo, o centauro é rápido e poderoso. Corre e luta com facilidade, e a sua ligação à natureza torna-o um excelente explorador.',
      'Changeling':'De aparência mutável, os changelings conseguem mudar de rosto e corpo à vontade. São ideais para disfarces, espionagem ou para jogar várias "personagens" numa só.',
      'Firbolg':'Gentis e altos, os firbolgs ligam-se profundamente à natureza. Sabem esconder-se facilmente, comunicar com animais e plantas, e usar magia para se protegerem ou ajudarem os outros.',
      'Githyanki':'Guerreiros de outros planos.',
      'Githzerai':'Monges que controlam a mente.',
      'Goblin':'Pequenos, espertos e rápidos, os duendes são difíceis de agarrar e costumam recuperar força quando derrotam inimigos. Escapam de perigos com facilidade e são ótimos sobreviventes.',
      'Hobgoblin':'Com ar de soldados disciplinados, os hobgoblins são estratégicos e cooperativos. Ajudam os aliados com eficácia e mantêm a ordem mesmo no meio do caos.',
      'Kobold':'Frágeis mas engenhosos, os kobolds são valentes quando em grupo. Surpreendem os inimigos com truques e podem inspirar os colegas com gritos de coragem.',
      'Lizardfolk':'Parecidos com lagartos humanoides, os lizardfolk são calmos, práticos e duros de roer. Sabem construir com o que têm à mão e sobrevivem bem em ambientes difíceis.',
      'Minotaur':'Fortes e imponentes, os minotauros atacam com violência e resistem a quedas. Carregam sobre os inimigos como verdadeiros touros e são bons rastreadores.',
      'Satyr':'Festeiros e encantadores, os sátiros dançam e tocam música como parte da sua magia. São difíceis de manipular, rápidos nos saltos e ótimos em socializar.',
      'Tabaxi':'Felinos ágeis e curiosos, os tabaxi movem-se rapidamente e conseguem escalar com facilidade. Estão sempre em busca de coisas novas e adoram explorar.',
      'Triton':'Seres aquáticos nobres, os tritões vivem bem debaixo de água. Sabem nadar com mestria, comunicar com criaturas marinhas e controlar pequenos efeitos mágicos ligados ao mar.',
      'Yuan-ti':'Com traços de serpente, os yuan-ti são frios e manipuladores. Imunes a venenos e difíceis de influenciar, usam magia para controlar os outros ou causar medo.'
    },
    en: {
      'Aasimar':'With divine appearance and radiant traits, aasimar are seen as heaven-sent. They can heal with a touch and, when needed, unleash true celestial power, gaining wings or a powerful aura to protect or destroy.',
      'Dragonborn':'Anthropomorphic dragons with colorful scales and an imposing presence. They can breathe magical energy, such as fire or ice, and are naturally resistant to that same element.',
      'Dwarf':'Short and sturdy, dwarves are known for their resilience. They resist poison, see clearly in the dark and are hard to knock down. Tireless workers both in the field and at war.',
      'Elf':'Graceful and alert, elves have keen senses and darkvision. They need only a few hours of meditation instead of sleep and resist magic that manipulates emotions.',
      'Gnome':'Small and curious, gnomes are clever and resistant to mental tricks. Some talk to animals while others invent little magical objects. Creative and sharp-minded.',
      'Goliath':'Tall like small giants, goliaths boast impressive strength and endurance. They withstand more damage than usual and wield powers reminiscent of their giant ancestry.',
      'Halfling':'Tiny and friendly, halflings are incredibly lucky. They often escape danger and are hard to catch, remaining loyal and discreet companions.',
      'Human':'Versatile and determined, humans adapt easily to any role. They begin with a special feat that helps them shine early in adventures.',
      'Orc':'Strong and impulsive, orcs stay standing even when they should fall. They can charge foes with force and recover quickly in battle. Natural warriors.',
      'Tiefling':'With infernal looks, tieflings have a magical side linked to demons or devils. They resist certain spells and can use dark powers to deceive or harm.',
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
      'Yuan-ti':'With serpent traits, yuan-ti are cold and manipulative. Immune to poison and hard to influence, they use magic to control others or instill fear.'
    }
  };

  const classInfo = {
    pt: {
      'Barbarian':'O Bárbaro é a força bruta da natureza. Combate com fúria selvagem, ignorando a dor e libertando ataques devastadores. Quando entra em Rage, torna-se mais difícil de ferir e mais poderoso nos seus golpes. Não usa magia, mas compensa com pura resistência e instinto. É ideal para quem quer estar na linha da frente, a levar e causar pancada sem hesitar.',
      'Bard':'O Bardo é um artista mágico — um contador de histórias, músico ou dançarino que inspira aliados e confunde inimigos. Usa magia através da sua arte, seja ela música, poesia ou dança. É extremamente versátil: pode curar, lançar feitiços, manipular emoções e ainda ter talento para lidar com quase qualquer situação fora de combate.',
      'Cleric':'O Clérigo é o canal de poder divino. Serve uma divindade e invoca milagres para curar, proteger ou castigar. É um pilar de suporte, mas também um combatente eficaz quando necessário. Usa armadura e pode ser tão temido como um guerreiro ou tão vital como um curandeiro, dependendo do domínio divino que escolhe seguir.',
      'Druid':'O Druída é o guardião da natureza. Controla os elementos, cura feridas e transforma-se em animais para explorar ou combater. A sua ligação ao mundo natural permite-lhe lançar magias únicas e adaptar-se a qualquer ambiente. É uma excelente escolha para quem gosta de versatilidade mágica e de proteger o equilíbrio do mundo.',
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
      'Acolyte':'Foste criado num templo, a servir uma divindade com devoção. Como acólito, passaste os teus dias a estudar escrituras e a ajudar nas cerimónias. Tens uma forte ligação espiritual e um conhecimento profundo da fé, além de pequenos poderes sagrados aprendidos com os clérigos que te ensinaram.',
      'Artisan':'Cresceste num ambiente de trabalho manual, aprendendo um ofício desde jovem. Como artesão, sabes como construir, reparar e vender os teus produtos. O teu olho treinado para os detalhes e o jeito com clientes fazem de ti alguém respeitado no mundo do comércio e da criação.',
      'Charlatan':'És um mestre da mentira e da ilusão. Como charlatão, vendeste poções falsas, fingiste ser alguém que não eras ou criaste documentos falsos com um sorriso convincente. Vives da tua lábia, da tua criatividade e de saberes sempre quando fugir.',
      'Criminal':'A tua vida começou nos becos e sombras da cidade. Enquanto criminoso foste ladrão, arrombador ou espião — talvez sozinho, talvez parte de um gangue. Sabes como mover-te sem ser visto e como escapar de quem te quer apanhar.',
      'Entertainer':'Viveste de aplausos e de fazer o público sorrir. Foste músico, acrobata, poeta ou palhaço. Sabes como cativar uma multidão e tens talento para o espectáculo, sempre pronto a brilhar ou a provocar gargalhadas.',
      'Farmer':'Nasceste e cresceste a trabalhar a terra. Como lavrador, aprendeste o valor do trabalho duro, da paciência e da ligação com os ciclos da natureza. A tua força e resistência vêm de anos de vida simples e esforço contínuo.',
      'Guard':'Serviste como guarda — de uma cidade, de uma muralha ou de um nobre. Estás sempre atento, preparado para intervir quando há perigo. A tua experiência ensinou-te a distinguir problemas ao longe e a manter a calma em situações tensas.',
      'Guide':'Viveste longe da civilização, a explorar florestas, montanhas e ruínas esquecidas. Como guia, levas outros por caminhos perigosos com sabedoria e discrição. Conheces os sons da natureza e os perigos que se escondem no meio dela.',
      'Hermit':'Passaste anos em isolamento, a meditar, estudar ou fugir do mundo. Como eremita, a tua mente está habituada à introspeção e ao silêncio. Talvez tenhas encontrado respostas... ou perguntas mais profundas ainda.',
      'Merchant':'Aprendeste a arte da negociação, da logística e do lucro. Enquanto comerciante, vendeste bens por cidades e estradas, conhecendo culturas diferentes e as suas necessidades. És um viajante esperto com olho para oportunidades.',
      'Noble':'Foste criado no luxo de uma casa aristocrática. Como nobre, aprendeste etiqueta, política e o peso do nome da tua família. Podes ser arrogante ou humilde, mas sabes como se comportar entre poderosos — ou manipulá-los.',
      'Sage':'Desde cedo te fascinaste com o conhecimento. Como estudioso, passaste anos entre livros, pergaminhos e mestres, a tentar compreender o mundo. Tens uma mente afiada e uma curiosidade insaciável, sempre à procura de respostas.',
      'Sailor':'A tua casa foi o mar. Como marinheiro, navegaste por águas calmas e tempestades, conhecendo portos distantes e histórias fantásticas. És resistente, adaptável e habituado a uma vida onde tudo pode mudar com o vento.',
      'Scribe':'Como escriba, trabalhaste a copiar textos importantes, seja em monastérios ou escritórios do governo. Escreves com precisão e atenção ao detalhe. O teu mundo é feito de palavras e de saber preservá-las sem erro.',
      'Soldier':'Foste treinado para a guerra. Como soldado, a tua vida foi feita de disciplina, treino e combate real. Estás habituado ao barulho da batalha, ao peso da armadura e às ordens que não se discutem. És leal, prático e determinado.',
      'Wayfarer':'Cresceste nas ruas, a sobreviver com engenho e teimosia. Como vagabundo, aprendeste a mover-te sem ser notado e a confiar apenas em quem merece. Mesmo quando roubaste para sobreviver, nunca perdeste a esperança de um futuro melhor.'
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

  const phbSpecies = new Set([
    'Aasimar','Dragonborn','Dwarf','Elf','Gnome','Goliath',
    'Halfling','Human','Orc','Tiefling'
  ]);

  function makeSection(label, value, info, type, source){
    const section = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = `<strong>${label}:</strong> ${value} - ${info}`;
    const btn = document.createElement('button');
    btn.textContent = 'See more';
    const name = value.toLowerCase().replace(/\s+/g,'');
    const src = source || (phbSpecies.has(value) ? 'xphb' : 'mpmm');
    const url = `https://5e.tools/${type}.html#${name}_${src}`;
    btn.addEventListener('click',()=>window.open(url,'_blank'));
    section.appendChild(text);
    section.appendChild(btn);
    container.appendChild(section);
  }

  makeSection(labels[lang].Species, species, speciesInfo[lang][species] || '', 'races');
  makeSection(labels[lang].Class, clazz, classInfo[lang][clazz] || '', 'classes', 'xphb');
  makeSection(labels[lang].Background, background, backgroundInfo[lang][background] || '', 'backgrounds', 'xphb');

  restartBtn.textContent = labels[lang].restart;

  restartBtn.addEventListener('click', () => {
    sessionStorage.removeItem('dndResults');
    window.location.href = 'index.html';
  });
})();
