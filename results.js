(function(){
  const container = document.getElementById('results');
  const restartBtn = document.getElementById('restart');
  const stored = sessionStorage.getItem('dndResults');
  if(!stored){
    container.textContent = miscText.noResults;
    return;
  }
  const {species, class:clazz, background, lang} = JSON.parse(stored);


  const phbSpecies = new Set([
    'Aasimar','Dragonborn','Dwarf','Elf','Gnome','Goliath',
    'Halfling','Human','Orc','Tiefling'
  ]);

  function makeSection(label, value, info, type, source){
    const section = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = `<strong>${label}:</strong> ${value} - ${info}`;
    const btn = document.createElement('button');
    btn.textContent = miscText.seeMore;
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
