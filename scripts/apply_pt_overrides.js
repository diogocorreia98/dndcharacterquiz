const fs = require('fs');
const path = require('path');

const overridesPath = path.join(__dirname, '..', 'translations', 'pt_overrides.json');
const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));
const files = [
  'option_labels_appearance.json',
  'option_labels_profession.json',
  'key_mappings.json'
];

function applyOverrides(value) {
  if (!value || typeof value !== 'object') {
    return false;
  }
  let changed = false;
  if (typeof value.en === 'string' && typeof value.pt === 'string') {
    const key = value.en.trim();
    if (key && Object.prototype.hasOwnProperty.call(overrides, key)) {
      const nextValue = overrides[key];
      if (typeof nextValue === 'string' && value.pt !== nextValue) {
        value.pt = nextValue;
        changed = true;
      }
    }
  }
  for (const nestedKey of Object.keys(value)) {
    const nested = value[nestedKey];
    if (typeof nested === 'object' && nested !== null) {
      if (applyOverrides(nested)) {
        changed = true;
      }
    }
  }
  return changed;
}

for (const file of files) {
  const filePath = path.join(__dirname, '..', file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const changed = applyOverrides(data);
  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated translations in ${file}`);
  } else {
    console.log(`No translation updates needed for ${file}`);
  }
}
