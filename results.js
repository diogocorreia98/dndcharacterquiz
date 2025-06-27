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
      'Aasimar':'Com aparência divina e traços luminosos, os Aasimar são vistos como enviados dos céus. Conseguem curar com um toque e, em momentos de necessidade, libertam o seu verdadeiro poder celestial, ganhando asas ou uma aura poderosa para proteger ou destruir.',
      'Dragonborn':'Parecem dragões antropomórficos, com escamas coloridas e uma presença imponente. Conseguem cuspir energia mágica (como fogo ou gelo) sobre os inimigos e são naturalmente resistentes a esse mesmo tipo de energia.',
      'Dwarf':'Baixos e resistentes, os anões são conhecidos pela sua robustez. Aguentam bem venenos, veem claramente no escuro e são muito difíceis de derrubar. São trabalhadores incansáveis, tanto no campo como na guerra.',
      'Elf':'Elegantes e atentos, os elfos têm sentidos apurados e conseguem ver no escuro. Não precisam de dormir como os outros — bastam poucas horas de meditação. São também resistentes a magias que tentam manipular emoções.',
      'Gnome':'Pequenos e curiosos, os gnomos são espertos e resistentes a truques mentais. Alguns falam com animais, outros inventam pequenos objetos mágicos. São criativos e têm uma mente afiada.',
      'Goliath':'Altos como pequenos gigantes, os goliaths têm força e resistência impressionantes. Conseguem suportar mais dano do que o normal e usar poderes que lembram os seus antepassados gigantes.',
      'Halfling':'Pequeninos e simpáticos, os halflings são incrivelmente sortudos. Costumam escapar de situações perigosas e são difíceis de apanhar. São companheiros leais e discretos.',
      'Human':'Versáteis e determinados, os humanos adaptam-se facilmente a qualquer papel. Começam com um talento especial que os ajuda a destacar-se cedo nas aventuras.',
      'Orc':'Fortes e impulsivos, os orcs continuam de pé mesmo quando deviam cair. Conseguem lançar-se com força sobre os inimigos e recuperam rapidamente em combate. São guerreiros naturais.',
      'Tiefling':'Com aparência infernal, os tieflings têm um lado mágico ligado a demónios ou diabos. São resistentes a certas magias e podem usar poderes sombrios para enganar ou ferir.',
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
      'Yuan-ti':'Com traços de serpente, os yuan-ti são frios e manipuladores. Imunes a venenos e difíceis de influenciar, usam magia para controlar os outros ou causar medo.'
    },
    en: {
      'Aasimar':'With divine appearance and radiant traits, Aasimar are seen as heaven-sent. They can heal with a touch and, when needed, unleash true celestial power, gaining wings or a powerful aura to protect or destroy.',
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
      'Barbarian':'Guerreiro guiado pela fúria.',
      'Bard':'A magia da música e da inspiração.',
      'Cleric':'Servos divinos que curam e castigam.',
      'Druid':'Guardião das forças naturais.',
      'Fighter':'Especialista em combate versátil.',
      'Monk':'Mestre de artes marciais e disciplina.',
      'Paladin':'Campeão de ideais sagrados.',
      'Ranger':'Explorador e caçador do ermo.',
      'Rogue':'Especialista em furtividade e truques.',
      'Sorcerer':'Magia inata e poderosa.',
      'Warlock':'Pactos com entidades misteriosas.',
      'Wizard':'Estudioso das artes arcanas.'
    },
    en: {
      'Barbarian':'Warrior driven by fury.',
      'Bard':'Magic of music and inspiration.',
      'Cleric':'Divine servants who heal and punish.',
      'Druid':'Guardian of natural forces.',
      'Fighter':'Versatile combat specialist.',
      'Monk':'Master of martial arts and discipline.',
      'Paladin':'Champion of sacred ideals.',
      'Ranger':'Wilderness explorer and hunter.',
      'Rogue':'Expert in stealth and tricks.',
      'Sorcerer':'Innate and powerful magic.',
      'Warlock':'Pacts with mysterious entities.',
      'Wizard':'Scholar of arcane arts.'
    }
  };

  const backgroundInfo = {
    pt: {
      'Acolyte':'Treinado em templos ou igrejas.',
      'Artisan':'Especialista em ofícios e ferramentas.',
      'Charlatan':'Mestre do embuste e engano.',
      'Criminal':'Habituado ao submundo ilegal.',
      'Entertainer':'Artista que vive de atuar.',
      'Farmer':'Quem trabalha a terra e colhe frutos.',
      'Guard':'Responsável por proteger outros.',
      'Guide':'Conhecedor de trilhos e rotas.',
      'Hermit':'Recluso em busca de iluminação.',
      'Merchant':'Vive de comprar e vender bens.',
      'Noble':'Criado no conforto e na política.',
      'Sage':'Erudito sedento por conhecimento.',
      'Sailor':'Acostumado ao mar e suas tempestades.',
      'Scribe':'Especialista em registos e documentos.',
      'Soldier':'Treinado nas artes da guerra.',
      'Wayfarer':'Viajante que não fixa morada.'
    },
    en: {
      'Acolyte':'Trained in temples or churches.',
      'Artisan':'Expert in crafts and tools.',
      'Charlatan':'Master of deceit and trickery.',
      'Criminal':'Used to the criminal underworld.',
      'Entertainer':'Performer who lives to entertain.',
      'Farmer':'Works the land and gathers crops.',
      'Guard':'Responsible for protecting others.',
      'Guide':'Knows trails and routes well.',
      'Hermit':'Reclusive seeker of enlightenment.',
      'Merchant':'Makes a living buying and selling goods.',
      'Noble':'Raised in comfort and politics.',
      'Sage':'Scholar hungry for knowledge.',
      'Sailor':'Accustomed to the sea and storms.',
      'Scribe':'Expert in records and documents.',
      'Soldier':'Trained in the arts of war.',
      'Wayfarer':'Traveler who rarely settles down.'
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
