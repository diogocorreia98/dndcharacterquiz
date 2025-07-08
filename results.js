(function(){
  const container = document.getElementById('results');
  const restartBtn = document.getElementById('restart');
  const titleEl = document.querySelector('h1');
  const langSelect = document.getElementById('lang');
  const languageLabel = document.querySelector('#language-select label');

  const stored = sessionStorage.getItem('dndResults');
  const parsed = stored ? JSON.parse(stored) : {lang:'en'};
  const {species, class:clazz, subclass, style, background, gender, height, subcategoryName, subcategory, familiar} = parsed;
  let currentLang = parsed.lang || 'en';

  const phbSpecies = new Set([
    'Aasimar','Dragonborn','Dwarf','Elf','Gnome','Goliath',
    'Halfling','Human','Orc','Tiefling'
  ]);

  const abilityMap = {
    en: {
      Strength: 'strength',
      Dexterity: 'dexterity',
      Constitution: 'constitution',
      Intelligence: 'intelligence',
      Wisdom: 'wisdom',
      Charisma: 'charisma'
    },
    pt: {
      Strength: 'força',
      Dexterity: 'destreza',
      Constitution: 'constituição',
      Intelligence: 'inteligência',
      Wisdom: 'sabedoria',
      Charisma: 'carisma'
    }
  };

  function formatAbilityText(str){
    if(!str) return '';
    const map = abilityMap[currentLang] || abilityMap.en;
    return str.split('+')
      .map(s => map[s.trim()] || s.trim().toLowerCase())
      .join(currentLang === 'pt' ? ' e ' : ' and ');
  }

  function makeSection(label, value, info, type, source, cat, displayOverride){
    const section = document.createElement('div');
    const text = document.createElement('p');
    let displayValue = value && value !== 'N/A' ? value : miscText[currentLang].notChosen;
    if(value && value !== 'N/A' && nameMap[currentLang] && nameMap[currentLang][cat]){
      displayValue = nameMap[currentLang][cat][value] || value;
    }
    if(displayOverride) displayValue = displayOverride;
    const displayInfo = info || '';
    text.innerHTML = `<strong>${label}:</strong> ${displayValue}${displayInfo ? ' - ' + displayInfo : ''}`;
    section.appendChild(text);
    if(value && value !== 'N/A'){
      const btn = document.createElement('button');
      btn.textContent = miscText[currentLang].seeMore;
      const name = value.toLowerCase().replace(/\s+/g,'');
      const src = source || (phbSpecies.has(value) ? 'xphb' : 'mpmm');
      const url = `https://5e.tools/${type}.html#${name}_${src}`;
      btn.addEventListener('click',()=>window.open(url,'_blank'));
      section.appendChild(btn);
    }
    container.appendChild(section);
  }

  function localizeInfo(info, cat){
    if(currentLang !== 'pt' || !info) return info;
    const map = nameMap[currentLang] && nameMap[currentLang][cat];
    if(!map) return info;
    return info.replace(/\b([A-Za-z'()\- ]+)\b/g, m => map[m] || m);
  }

  function updateStatic(){
    document.documentElement.lang = currentLang;
    document.title = miscText[currentLang].resultsTitle;
    titleEl.textContent = miscText[currentLang].resultsTitle;
    restartBtn.textContent = labels[currentLang].restart;
    languageLabel.textContent = miscText[currentLang].language;
    langSelect.value = currentLang;
  }

  function render(){
    container.innerHTML = '';
    updateStatic();

    if(!stored){
      container.textContent = miscText[currentLang].noResults;
      return;
    }

    makeSection(
      labels[currentLang].Species,
      species,
      localizeInfo(speciesInfo[currentLang][species] || '', 'species'),
      'races',
      undefined,
      'species'
    );

    const baseBg = background ? background.replace(/\s*\(.*?\)\s*$/, '').trim() : background;
    const bgDesc = localizeInfo(backgroundInfo[currentLang][baseBg] || '', 'backgrounds');
    let displayBg = baseBg;
    if(nameMap[currentLang] && nameMap[currentLang].backgrounds && baseBg){
      const translated = nameMap[currentLang].backgrounds[baseBg];
      if(translated) {
        displayBg = translated;
      }
    }
    const abilityText = formatAbilityText(style || '');
    const prefix = baseBg ? (currentLang === 'pt'
      ? `Cultivaste a tua ${abilityText} como ${displayBg}. `
      : `You cultivated your ${abilityText} as a ${displayBg}. `)
      : '';
    makeSection(
      labels[currentLang].Background,
      baseBg,
      prefix + bgDesc,
      'backgrounds',
      'xphb',
      'backgrounds',
      displayBg
    );

    const className = nameMap[currentLang].classes[clazz] || clazz;
    let subclassName = subclass ? subclass : '';
    if(subclass && nameMap[currentLang].subclasses){
      subclassName = nameMap[currentLang].subclasses[subclass] || subclass;
    }
    let displayClass = className;
    if(subclass){
      displayClass = currentLang === 'pt'
        ? `${className} ${subclassName}`
        : `${subclassName} ${className}`;
    }
    const classDesc = subclass
      ? subclassInfo[currentLang][subclass] || classInfo[currentLang][clazz]
      : classInfo[currentLang][clazz];
    let localized = localizeInfo(classDesc || '', 'classes');
    localized = localizeInfo(localized, 'subclasses');
    makeSection(
      labels[currentLang].Class,
      clazz,
      localized,
      'classes',
      'xphb',
      'classes',
      displayClass
    );

    const genderMap = {F:'female', M:'male', A:'androgynous'};
    const poseHints = {
      'Aberrant Mind':'twitching hands raised to the sky, wide-eyed, haunted expression as alien energy warps the air',
      'Clockwork Soul':'standing tall and composed, arms symmetrically extended, surrounded by floating golden cogs',
      'Draconic Bloodline':'roaring in mid-cast, arms flared wide, dragon wings unfolding behind them',
      'Wild Magic':'mid-explosion of chaotic magic, hair lifted by static, surprised or gleeful expression',
      Abjurer:'holding up a glowing warding sigil with a protective stance, calm and focused',
      Diviner:'gazing into a crystal or orb, eyes glowing, in a meditative or prophetic trance',
      Evoker:'arms extended in a blast, flames or lightning erupting forward, battle-ready and fierce',
      Illusionist:'one hand behind their back, the other casting an illusory double, sly smile on their lips',
      'Archfey Patron':'graceful posture, mid-spin, trailing glamoured leaves and vines, an amused smirk',
      'Celestial Patron':'bathed in radiant light, arms open as if delivering a blessing, serene expression',
      'Fiend Patron':'casting fire with a devilish grin, surrounded by hellish chains or infernal runes',
      'Great Old One Patron':'clutching their head as invisible tendrils reach from behind, whispering madness in their posture',
      'Future You':'staring at a cracked mirror or time portal, one hand reaching forward, expression torn between fear and resolve',
      'Arachnoid Stalker':'crouched on a vertical wall or web, blades drawn, emotionless and predatory',
      'Arcane Trickster':'leaning on a glowing magical dagger, winking, mid-flick of an illusion',
      Assassin:'emerging from shadow behind a target, blade poised, cold and focused gaze',
      Soulknife:'holding psychic blades mid-air in telekinetic grip, crouched with eyes narrowed in concentration',
      Thief:'mid-leap with a bag of gold, cheeky grin, fingers reaching for another trinket',
      'Battle Master':'commanding pose on a battlefield, pointing sword forward, calculating gaze',
      Champion:'lifting a weapon in victory, confident smile, surrounded by fallen enemies',
      Dungeoneer:'torch in one hand, sword in the other, eyes alert in a claustrophobic corridor',
      'Eldritch Knight':'summoning a weapon with one hand, casting with the other, intense magical focus',
      'Psi Warrior':'floating slightly above the ground, energy pulsing around head and limbs, calm but deadly expression',
      'Beast Master':'back-to-back with their beast companion, bow drawn, loyal determination in their eyes',
      'Fey Wanderer':'skipping over glowing mushrooms, dreamy and whimsical, with a mischievous smirk',
      'Gloom Stalker':'emerging from total darkness, crossbow aimed, emotionless hunter\'s focus',
      Hunter:'mid-volley of arrows, eyes locked on prey, breath held in a moment of precision',
      'Circle of the Land':'kneeling in a field or grove, channeling magic through plants, peaceful and grounded',
      'Circle of the Moon':'shifting mid-form into a beast, glowing eyes, primal snarl or focused intensity',
      'Circle of the Sea':'conjuring a tidal wave, hair and robes flowing like water, commanding and serene',
      'Circle of Stars':'casting constellations into the sky with their hands, starlight in their gaze',
      'College of Dance':'caught mid-leap in a graceful spin, joyful expression, surrounded by motion blur',
      'College of Glamour':'striking a dramatic pose, cloak flowing, surrounded by dazzled onlookers',
      'College of Lore':'gesturing to a floating tome with a smirk, one eyebrow raised in challenge',
      'College of Valor':'performing while swordfighting, playing a lute with one hand, bold and heroic grin',
      'Oath of Devotion':'raising a sword and holy symbol toward the heavens, radiant and resolute',
      'Oath of Glory':'mid-charge, cloak flaring behind, grin full of charisma and challenge',
      'Oath of Revelry':'laughing mid-battle, ale sloshing in one hand, weapon raised high',
      'Oath of the Ancients':'surrounded by green glow and blooming vines, peaceful yet imposing stance',
      'Oath of Vengeance':'pointing at a fleeing foe, eyes burning with judgment, blade crackling with divine power',
      'Path of the Berserker':'screaming mid-rage with bloodied axe overhead, feral eyes wide open',
      'Path of the Muscle Wizard':'flexing dramatically while casting magic with biceps, exaggerated heroic grin',
      'Path of the Wild Heart':'mid-roar, animal spirit glowing behind them, primal rage in their posture',
      'Path of the World Tree':'roots coiling around their feet, hammer raised, aura of eternal strength',
      'Path of the Zealot':'battle cry to the heavens, glowing with divine wrath, wings of light unfurling',
      'Warrior of the Street':'relaxed stance, leaning against a wall, chewing a straw, fists glowing faintly',
      'Way of Mercy':'gently cradling a wounded creature in one hand, fist clenched in the other, face full of compassion and fury',
      'Way of Shadow':'crouched in silhouette, barely visible, eyes glowing faintly in the dark',
      'Way of the Elements':'arms raised in elemental flow, surrounded by swirling fire, water, wind, or earth',
      'Way of the Open Hand':'balanced stance, one hand open and extended in peace, the other clenched and ready'
    };

    const heightMapEn = {
      'Muito baixa':'very short',
      'Baixa':'short',
      'Altura média':'average height',
      'Alta':'tall',
      'Muito alta':'very tall'
    };
    const heightText = heightMapEn[height] || height || 'average height';
    const pose = poseHints[subclass] ? ', ' + poseHints[subclass] : '';

    const classNameEn = clazz;
    const subclassNameEn = subclass || '';
    const displayClassEn = subclass ? `${subclassNameEn} ${classNameEn}` : classNameEn;

    const promptSpecies = species;
    const promptBackground = background;
    const promptSubcategory = subcategory || '';
    const promptFamiliar = familiar || '';
    const familiarSize = familiar ? (familiar === 'Skeleton' ? 'Medium' : 'Tiny') : '';
    const subText = subcategoryName && promptSubcategory ? ` with ${subcategoryName} ${promptSubcategory}` : '';
    const famText = promptFamiliar ? ` and a ${familiarSize} ${promptFamiliar} familiar` : '';
    const prompt = `A ${genderMap[gender] || ''} ${promptSpecies}, standing ${heightText}, dressed in a way that reflects their role as a ${displayClassEn}${subText}${famText}. Their look shows traits of a ${promptBackground} — with appropriate gear or attitude. Dynamic fantasy character portrait${pose}, high detail, cinematic lighting, full body or 3/4 view. Dungeons & Dragons-inspired.`;

    const promptTitle = document.createElement('h2');
    promptTitle.textContent = miscText[currentLang].promptIntro;
    const promptEl = document.createElement('textarea');
    promptEl.id = 'ai-prompt';
    promptEl.readOnly = true;
    promptEl.value = prompt;
    const copyBtn = document.createElement('button');
    copyBtn.textContent = currentLang === 'pt' ? 'Copiar' : 'Copy';
    copyBtn.addEventListener('click', ()=>{
      promptEl.select();
      document.execCommand('copy');
    });
    container.appendChild(promptTitle);
    container.appendChild(promptEl);
    container.appendChild(copyBtn);
  }

  langSelect.addEventListener('change', () => {
    currentLang = langSelect.value;
    render();
  });

  restartBtn.addEventListener('click', () => {
    sessionStorage.removeItem('dndResults');
    window.location.href = 'index.html';
  });

  render();
})();
