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
    'Aasimar':'Humanoides tocados pelo plano celestial.',
    'Dragonborn':'Descendentes de dragões, orgulhosos e poderosos.',
    'Dwarf':'Anões resistentes e trabalhadores.',
    'Elf':'Elfos graciosos e longevos.',
    'Gnome':'Pequenos inventores e curiosos.',
    'Goliath':'Gigantes das montanhas, focados em força.',
    'Halfling':'Pessoas pequenas e de grande coração.',
    'Human':'Versáteis e ambiciosos.',
    'Orc':'Guerreiros ferozes de sangue quente.',
    'Tiefling':'Herança infernal e poderes sombrios.',
    'Aarakocra':'Seres alados que habitam os céus.',
    'Bugbear':'Criaturas grandes e furtivas.',
    'Centaur':'Metade humano, metade cavalo.',
    'Firbolg':'Gigantes gentis ligados à natureza.',
    'Githyanki':'Guerreiros de outros planos.',
    'Githzerai':'Monges que controlam a mente.',
    'Goblin':'Pequenos e astutos sobreviventes.',
    'Hobgoblin':'Estratégas disciplinados.',
    'Kobold':'Serviçais dracónicos engenhosos.',
    'Lizardfolk':'Humanóides répteis frios e práticos.',
    'Minotaur':'Lutadores com cabeça de touro.',
    'Satyr':'Festeiros meio-bode.',
    'Tabaxi':'Felinos curiosos e ágeis.',
    'Triton':'Guardas nobres dos mares.',
    'Yuan-ti':'Seres serpentes manipuladores.'
  };

  const classInfo = {
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
  };

  const backgroundInfo = {
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
  };

  const p = document.createElement('p');
  p.innerHTML = `<strong>Species:</strong> ${species} - ${speciesInfo[species] || ''}<br>`+
                 `<strong>Class:</strong> ${clazz} - ${classInfo[clazz] || ''}<br>`+
                 `<strong>Background:</strong> ${background} - ${backgroundInfo[background] || ''}`;
  container.appendChild(p);

  restartBtn.textContent = lang === 'pt' ? 'Recomeçar' : 'Restart Quiz';

  restartBtn.addEventListener('click', () => {
    sessionStorage.removeItem('dndResults');
    window.location.href = 'index.html';
  });
})();
