import fs from 'node:fs';
import path from 'node:path';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

const GUIDE_UPDATES = {
  // Tier 1 (Immediate Survival - 0 to 30 Days)
  't1-chemical-water-disinfection.md': { tier: 1, category: 'Water & Life Support' },
  't1-dakota-fire-hole.md': { tier: 1, category: 'Thermal & Firecraft' },
  't1-debris-hut.md': { tier: 1, category: 'Shelter & Rigging' },
  't1-emergency-firecraft-methods.md': { tier: 1, category: 'Thermal & Firecraft' },
  't1-emergency-trauma-triage.md': { tier: 1, category: 'Emergency Medicine' },
  't1-essential-knots-rigging.md': { tier: 1, category: 'Shelter & Rigging' },
  't1-primitive-water-filtration.md': { tier: 1, category: 'Water & Life Support' },
  't1-solar-still.md': { tier: 1, category: 'Water & Life Support' },
  't1-trench-latrine.md': { tier: 1, category: 'Sanitation & Hygiene' },
  't1-universal-edibility-test.md': { tier: 1, category: 'Botany & Foraging' },
  't1-wild-edible-medicinal-plants.md': { tier: 1, category: 'Botany & Foraging' },
  't1-wildlife-tracking-predator-defense.md': { tier: 1, category: 'Wildlife & Defense' },
  't1-windlass-tourniquet.md': { tier: 1, category: 'Emergency Medicine' },

  // Tier 2 (The Homestead & Agrarian Settlement - Months 2 to 12)
  't2-biome-settlement-colonization-homesteading.md': { tier: 2, category: 'Civil Engineering' },
  't2-rocket-stove.md': { tier: 2, category: 'Thermal & Combustion' },
  't2-seed-saving.md': { tier: 2, category: 'Agriculture & Botany' },
  't2-food-salting-smoking.md': { tier: 2, category: 'Food Preservation' },
  't2-lacto-fermentation-cellaring.md': { tier: 2, category: 'Food Preservation' },
  't2-avian-ornithology-poultry-husbandry.md': { tier: 2, category: 'Agriculture & Livestock' },
  't2-livestock-animal-husbandry.md': { tier: 2, category: 'Agriculture & Livestock' },

  // Tier 3 (Pre-Industrial Forge, Kiln & Masonry - Years 1 to 3)
  't2-primitive-forge.md': { tier: 3, category: 'Metallurgy & Foundry' },
  't2-sand-casting-bronze-iron.md': { tier: 3, category: 'Metallurgy & Foundry' },
  't2-quicklime-mortar-masonry.md': { tier: 3, category: 'Masonry & Materials' },
  't2-wood-ash-soapmaking.md': { tier: 3, category: 'Chemical Hygiene' },
  't2-hydraulic-ram-pump.md': { tier: 3, category: 'Hydraulics & Fluid Power' },
  't3-saltpeter-black-powder.md': { tier: 3, category: 'Industrial Minerals' },

  // Tier 4 (Mechanical Power & Kinetic Engines - Years 3 to 7)
  't3-pelton-water-turbine.md': { tier: 4, category: 'Kinetic Power' },
  't3-savonius-wind-turbine.md': { tier: 4, category: 'Kinetic Power' },
  't3-wood-gasifier-engine.md': { tier: 4, category: 'Thermal Gasification' },
  't3-biogas-anaerobic-digester.md': { tier: 4, category: 'Biofuels & Fertilizer' },
  't3-small-arms-ballistics-catalog.md': { tier: 4, category: 'Mechanics & Defense' },

  // Tier 5 (Industrial Chemistry & Applied Electricity - Years 7 to 15)
  't3-lead-acid-battery.md': { tier: 5, category: 'Electrical Storage' },
  't3-dr-stone-scientific-reconstruction-roadmap.md': { tier: 5, category: 'Chemical Synthesis' },
  't4-silicon-semiconductor-fabrication.md': { tier: 5, category: 'Solid-State Electronics' },

  // Tier 6 (Telecommunications, Law, Heritage & Computation - Decades+)
  't4-crystal-radio-receiver.md': { tier: 6, category: 'Telecommunications' },
  't4-celestial-navigation-sextant.md': { tier: 6, category: 'Astronomy & Navigation' },
  't4-python-programming-language-handbook.md': { tier: 6, category: 'Computing & Software' },
  't4-neural-network-from-scratch.md': { tier: 6, category: 'Computing & Software' },
  't4-law-justice-governance.md': { tier: 6, category: 'Law & Governance' },
  't4-universal-language-rosetta-matrix.md': { tier: 6, category: 'Linguistics & Rosetta' },
  't4-universal-constants-measurement.md': { tier: 6, category: 'Physical Metrology' },
  't4-sacred-texts-and-moral-philosophy.md': { tier: 6, category: 'Moral Philosophy' },
  't4-military-organization-ranks-fleet-doctrine.md': { tier: 6, category: 'Command & Strategy' },
};

let count = 0;
for (const [filename, updates] of Object.entries(GUIDE_UPDATES)) {
  const filePath = path.join(GUIDES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filename}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/^tier:.*$/m, `tier: ${updates.tier}`);
  content = content.replace(/^category:.*$/m, `category: "${updates.category}"`);

  fs.writeFileSync(filePath, content, 'utf8');
  count++;
}

console.log(`Successfully migrated ${count} guides to 6-Tier schema!`);
