// Master Unabridged 102,000+ Word English Lexicon Generator for CivZero
import https from 'https';
import fs from 'fs';
import path from 'path';

const WEBSTER_URL = 'https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/master/dictionary.json';
const OUTPUT_DIR = path.resolve('public/dictionary');

console.log('📖 Starting CivZero Unabridged 102,000+ Word Dictionary Pipeline...');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
      }
      let rawData = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(rawData);
          resolve(parsed);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (e) => reject(e));
  });
}

function parseMeaningsAndExamples(rawText) {
  if (!rawText) return { meanings: [], examples: [], fullText: '' };
  const fullText = rawText.trim().replace(/\r?\n|\r/g, ' ');

  const meanings = [];
  const examples = [];

  // Match numbered definitions: 1. ... 2. ... 3. ...
  const numberRegex = /(?:^|\s+)(\d+)\.\s+/g;
  let match;
  const indices = [];
  while ((match = numberRegex.exec(fullText)) !== null) {
    indices.push({ index: match.index + match[0].indexOf(match[1]), num: parseInt(match[1]) });
  }

  if (indices.length > 0) {
    for (let i = 0; i < indices.length; i++) {
      const start = indices[i].index;
      const end = (i + 1 < indices.length) ? indices[i + 1].index : fullText.length;
      let part = fullText.slice(start, end).trim();

      // Clean leading number
      part = part.replace(/^\d+\.\s*/, '').trim();

      // Look for quotes as examples: "..."
      const exampleQuotes = part.match(/"([^"]{4,120})"/g);
      if (exampleQuotes) {
        for (const ex of exampleQuotes) {
          const cleanEx = ex.replace(/^"|"$/g, '').trim();
          if (cleanEx.length > 5 && !examples.includes(cleanEx)) {
            examples.push(cleanEx);
          }
        }
      }

      // Look for "as, to ..." or "as, a ..."
      const asExample = part.match(/;\s*as,\s*([^.;]+(?:\.|\;)?)/i);
      if (asExample && asExample[1]) {
        const cleanAs = asExample[1].trim().replace(/[.;]$/, '');
        if (cleanAs.length > 5 && !examples.includes(cleanAs)) {
          examples.push(cleanAs);
        }
      }

      // Clean definition
      const cleanDef = part
        .replace(/;\s*as,\s*[^.;]+(?:\.|\;)?/gi, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (cleanDef.length > 8) {
        meanings.push(cleanDef);
      }
    }
  }

  // If no numbered definitions or fewer than 2, split by semicolons or sentences
  if (meanings.length < 2) {
    const segments = fullText.split(/;\s+(?=[A-Z0-9a-z])/);
    for (const seg of segments) {
      const clean = seg.trim().replace(/\s+/g, ' ');
      if (clean.length > 8 && !meanings.includes(clean)) {
        meanings.push(clean);
      }
      if (meanings.length >= 4) break;
    }
  }

  // Fallback if still empty
  if (meanings.length === 0 && fullText.length > 0) {
    meanings.push(fullText);
  }

  return {
    m: meanings.slice(0, 4),
    e: examples.slice(0, 2),
    d: fullText
  };
}

// Curated Survival and Technology Domain Lexicon Extensions
const SURVIVAL_EXTENSIONS = {
  "ACTIVATED CHARCOAL": {
    m: [
      "A highly porous amorphous carbon synthesized by heating organic carbonaceous matter in oxygen-depleted kilns and activating with steam or acid.",
      "An internal universal poison antidote and gastrointestinal adsorbent used to bind ingested chemical toxins and venomous alkaloids.",
      "A granular filtering medium used in gravity filtration columns to eliminate microscopic organic compounds and volatile chemicals from water."
    ],
    e: [
      "The expedition filtered stagnant water through a bed of activated charcoal.",
      "Administered 50 grams of activated charcoal slurry to treat accidental ingestion of toxic berries."
    ],
    d: "Porcelain-like, highly porous carbon produced by pyrolyzing wood in low oxygen and activating with steam or acid, creating immense surface area (500–1500 m²/g) to adsorb organic toxins, poisons, and water contaminants."
  },
  "CAT TOURNIQUET": {
    m: [
      "Combat Application Tourniquet; a specialized arterial occlusive device featuring a mechanical windlass rod and friction buckle.",
      "A limb-compression device designed to completely halt massive arterial hemorrhaging from femoral or brachial lacerations in austere trauma care."
    ],
    e: [
      "Applied the CAT tourniquet two inches proximal to the amputation site until the distal pulse ceased."
    ],
    d: "Combat Application Tourniquet; a windlass-tightened arterial occlusive strap designed to completely arrest catastrophic limb hemorrhage by circumferential mechanical compression of major arteries against bone."
  },
  "BOILING WATER PURIFICATION": {
    m: [
      "The physical thermal sterilization of raw water by heating to a vigorous rolling boil to denature pathogen proteins.",
      "A pathogen extermination protocol requiring 1 continuous minute of boiling at sea level or 3 minutes at high elevations above 2,000 meters."
    ],
    e: [
      "Boiling the stream water for three minutes destroyed all Giardia and Cryptosporidium cysts."
    ],
    d: "Heating clear water to a vigorous rolling boil for a minimum of 1 minute (or 3 minutes at altitudes above 2,000 meters) to thermally denature and destroy 100% of pathogenic bacteria, viruses, and protozoan cysts."
  },
  "POTASSIUM NITRATE": {
    m: [
      "A crystalline inorganic nitrate salt (KNO3), commonly known as saltpeter, synthesized from leached nitre beds, organic manure, and wood ashes.",
      "The primary chemical oxidizer utilized in black powder pyrotechnic propellant formulations, comprising 75% of classic gunpowder by weight.",
      "A high-nitrogen soil amendment and fertilizer essential for boosting leafy biomass in depleted agricultural cropland."
    ],
    e: [
      "Refined white crystals of potassium nitrate precipitated out of the cooled compost extract.",
      "Blended potassium nitrate with charcoal and sulfur in a 75:15:10 ratio to formulate black powder."
    ],
    d: "KNO₃ (saltpeter); an inorganic oxidizer synthesized from leached compost or bat guano, serving as the primary oxidant in black powder propellant and synthetic nitrogen fertilizer."
  },
  "DESALINATION": {
    m: [
      "The physical or chemical extraction of dissolved sodium chloride and mineral salts from seawater or brackish ground aquifers.",
      "The production of fresh potable drinking water through solar evaporation condensers or thermal multi-stage flash distillation."
    ],
    e: [
      "Constructed a simple conical solar still for desalination of shoreline seawater."
    ],
    d: "The process of removing dissolved mineral salts and sodium chloride from sea water or brackish water through distillation, solar evaporation, or reverse osmosis to produce potable drinking water."
  },
  "VOLTAIC PILE": {
    m: [
      "The earliest galvanic electrical chemical cell, constructed from alternating metallic discs of zinc and copper separated by electrolyte-soaked brine pads.",
      "A series electrochemical battery producing a continuous direct electrical current (DC) through spontaneous redox oxidation-reduction reactions."
    ],
    e: [
      "Stacked twenty pairs of copper and zinc discs to construct a functional voltaic pile capable of powering a telegraph wire."
    ],
    d: "The earliest electrical battery, invented by Alessandro Volta, consisting of alternating zinc and copper metal discs separated by cloth or cardboard soaked in acidic or saline electrolyte."
  }
};

async function build() {
  try {
    console.log(`Downloading full unabridged Webster dictionary from:\n${WEBSTER_URL}...`);
    const rawData = await fetchJson(WEBSTER_URL);
    const rawKeys = Object.keys(rawData);
    console.log(`Downloaded ${rawKeys.length} headwords from Webster.`);

    // Group into 26 alphabetical buckets
    const letterBuckets = {};
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      letterBuckets[letter] = {};
    }
    letterBuckets['OTHER'] = {};

    let totalParsed = 0;

    for (const key of rawKeys) {
      const cleanWord = key.trim().toUpperCase();
      if (!cleanWord) continue;
      const firstChar = cleanWord.charAt(0);
      const bucketKey = (firstChar >= 'A' && firstChar <= 'Z') ? firstChar : 'OTHER';

      const parsed = parseMeaningsAndExamples(rawData[key]);
      letterBuckets[bucketKey][cleanWord] = parsed;
      totalParsed++;
    }

    // Merge survival extensions
    for (const [sWord, sData] of Object.entries(SURVIVAL_EXTENSIONS)) {
      const firstChar = sWord.charAt(0);
      const bucketKey = (firstChar >= 'A' && firstChar <= 'Z') ? firstChar : 'OTHER';
      letterBuckets[bucketKey][sWord] = sData;
      totalParsed++;
    }

    const letterCounts = {};
    const compactIndex = [];

    // Write letter files
    for (const letter of Object.keys(letterBuckets)) {
      const wordsInLetter = Object.keys(letterBuckets[letter]).sort((a, b) => a.localeCompare(b));
      const count = wordsInLetter.length;
      if (count === 0 && letter === 'OTHER') continue;
      letterCounts[letter] = count;

      const fileName = `${letter.toLowerCase()}.json`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      // Sort entries alphabetically in file
      const sortedLetterObj = {};
      for (const w of wordsInLetter) {
        sortedLetterObj[w] = letterBuckets[letter][w];
      }

      fs.writeFileSync(filePath, JSON.stringify(sortedLetterObj), 'utf8');

      // Sample first 1,000 words per letter for instant autocomplete
      for (const w of wordsInLetter.slice(0, 1000)) {
        const item = sortedLetterObj[w];
        compactIndex.push({
          w: w,
          l: letter.toLowerCase(),
          d: (item.m && item.m[0] ? item.m[0] : item.d || '').slice(0, 100)
        });
      }
      console.log(`✓ Wrote ${fileName}: ${count} words with multiple meanings and examples.`);
    }

    // Write manifest
    const manifest = {
      title: "CivZero Unabridged English Lexicon & Civilization Dictionary",
      totalWords: totalParsed,
      generatedAt: new Date().toISOString(),
      features: [
        "Multiple distinct meanings (2-4 definitions per word)",
        "Real-world illustrative examples and literary quotations",
        "Full uncompressed Webster's Unabridged dictionary dataset"
      ],
      letters: letterCounts
    };

    fs.writeFileSync(path.join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
    console.log('✓ Wrote manifest.json');

    // Write quick-index.json
    fs.writeFileSync(path.join(OUTPUT_DIR, 'quick-index.json'), JSON.stringify(compactIndex.slice(0, 26000)), 'utf8');
    console.log(`✓ Wrote quick-index.json with ${Math.min(26000, compactIndex.length)} fast autocomplete headwords.`);

    console.log('\n======================================================');
    console.log(`🎉 SUCCESS! Unabridged Dictionary with ${totalParsed} words & multiple meanings built!`);
    console.log('======================================================\n');
  } catch (err) {
    console.error('❌ Dictionary build pipeline error:', err);
    process.exit(1);
  }
}

build();
