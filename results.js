(function(){
  const container = document.getElementById('results');
  const restartBtn = document.getElementById('restart');
  const titleEl = document.querySelector('h1');
  const stored = sessionStorage.getItem('dndResults');
  const {species, class:clazz, subclass, background, lang = 'en'} = stored ? JSON.parse(stored) : {lang:'en'};
  document.title = miscText[lang].resultsTitle;
  titleEl.textContent = miscText[lang].resultsTitle;
  if(!stored){
    container.textContent = miscText[lang].noResults;
    restartBtn.textContent = labels[lang].restart;
    return;
  }


  const phbSpecies = new Set([
    'Aasimar','Dragonborn','Dwarf','Elf','Gnome','Goliath',
    'Halfling','Human','Orc','Tiefling'
  ]);

  function makeSection(label, value, info, type, source, cat, displayOverride){
    const section = document.createElement('div');
    const text = document.createElement('p');
    let displayValue = value && value !== 'N/A' ? value : miscText[lang].notChosen;
    if(value && value !== 'N/A' && nameMap[lang] && nameMap[lang][cat]){
      displayValue = nameMap[lang][cat][value] || value;
    }
    if(displayOverride) displayValue = displayOverride;
    const displayInfo = info || '';
    text.innerHTML = `<strong>${label}:</strong> ${displayValue}${displayInfo ? ' - ' + displayInfo : ''}`;
    section.appendChild(text);
    if(value && value !== 'N/A'){
      const btn = document.createElement('button');
      btn.textContent = miscText[lang].seeMore;
      const name = value.toLowerCase().replace(/\s+/g,'');
      const src = source || (phbSpecies.has(value) ? 'xphb' : 'mpmm');
      const url = `https://5e.tools/${type}.html#${name}_${src}`;
      btn.addEventListener('click',()=>window.open(url,'_blank'));
      section.appendChild(btn);
    }
    container.appendChild(section);
  }

  makeSection(labels[lang].Species, species, speciesInfo[lang][species] || '', 'races', undefined, 'species');
  const className = nameMap[lang].classes[clazz] || clazz;
  let subclassName = subclass ? subclass : '';
  if(subclass && nameMap[lang].subclasses){
    subclassName = nameMap[lang].subclasses[subclass] || subclass;
  }
  const displayClass = subclass ? `${subclassName} ${className}` : className;
  makeSection(labels[lang].Class, clazz, classInfo[lang][clazz] || '', 'classes', 'xphb', 'classes', displayClass);
  makeSection(labels[lang].Background, background, backgroundInfo[lang][background] || '', 'backgrounds', 'xphb', 'backgrounds');

  restartBtn.textContent = labels[lang].restart;

  restartBtn.addEventListener('click', () => {
    sessionStorage.removeItem('dndResults');
    window.location.href = 'index.html';
  });
})();
