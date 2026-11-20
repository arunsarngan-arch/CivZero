// Kid-Friendly ("Explain Like I'm 10" / ELI10) Guide Explanations
// Translates complex survival and technical engineering into fun, simple concepts for a 10-year-old child.

export interface KidFriendlyExplanation {
  analogy: string;
  simpleWhatItIs: string;
  simpleMaterials: string[];
  easySteps: string[];
  safetyRule: string;
}

// Tailored kid-friendly guides for major civilization & survival topics
export const KID_FRIENDLY_GUIDES: Record<string, KidFriendlyExplanation> = {
  // TIER 1: WATER & DISINFECTION
  't1-chemical-water-disinfection': {
    analogy: 'Imagine germs have tiny balloon skins. Plain bleach acts like a bunch of tiny needles popping all the bad water bugs in 30 minutes!',
    simpleWhatItIs: 'Cleaning outdoor water with a few drops of bleach so it is safe to drink without getting a tummy ache.',
    simpleMaterials: ['1 big water bottle (1 Liter)', 'Plain, unscented household bleach', 'An eyedropper or clean straw', 'A clean cloth or coffee filter'],
    easySteps: [
      'Pour dirty water through a clean cloth to catch all leaves and floating mud.',
      'Add just 2 tiny drops of plain bleach to your full water bottle (or 4 drops if the water still looks a little cloudy).',
      'Put the cap on tight, shake it up, and wait at least 30 minutes. If it smells faintly like clean swimming pool water, it is safe to drink!'
    ],
    safetyRule: '⚠️ Never drink straight bleach! Only put tiny drops into water with a grown-up helping you.'
  },
  't1-solar-water-pasteurization': {
    analogy: 'Think of water pasteurization like baking cookies in the sun: heat the water hot enough, and all the bad bugs melt away!',
    simpleWhatItIs: 'Using the hot sun and clear plastic bottles to kill germs in water for free.',
    simpleMaterials: ['Clean, clear plastic soda bottles', 'A sunny roof or a piece of shiny tin foil', 'Cloud-free outdoor sunshine'],
    easySteps: [
      'Wash out a clear plastic bottle and fill it with clear stream or river water.',
      'Lay the bottle flat on a dark rock, tin roof, or shiny foil so it catches maximum sunlight.',
      'Leave it in bright sunshine for 6 full hours (or 2 full days if it is cloudy). The sun rays destroy the germs!'
    ],
    safetyRule: '⚠️ The bottle will get hot! Let it cool down before taking a sip.'
  },
  't1-bio-sand-filter': {
    analogy: 'A sand filter is like a giant layered cake made of rocks, gravel, and sand that traps dirt like a spiderweb.',
    simpleWhatItIs: 'A tall tube of gravel and fine sand that strains out dirt and bugs as water drips through.',
    simpleMaterials: ['A tall bucket or clean tube', 'Large gravel at the bottom', 'Fine clean playground sand in the middle', 'A clean rag or mesh at the drain'],
    easySteps: [
      'Layer big pebbles at the very bottom, small gravel in the middle, and lots of clean fine sand on top.',
      'Slowly pour murky river water onto the top layer.',
      'Watch crystal-clear water slowly drip out of the bottom spout into your cup!'
    ],
    safetyRule: '⚠️ The sand catches dirt, but always boil or bleach the water afterwards to kill invisible germs.'
  },
  't1-dakota-fire-hole': {
    analogy: 'A Dakota fire hole is like a fireplace built inside a secret underground tunnel. The wind blows down one hole to feed the fire, while heat shoots straight up the other!',
    simpleWhatItIs: 'A smokeless campfire built underground that won’t blow out in strong wind.',
    simpleMaterials: ['A small garden trowel or stick for digging', 'Dry twigs, leaves, and small firewood'],
    easySteps: [
      'Dig two holes next to each other in the dirt, about one foot deep and one foot apart.',
      'Dig a tunnel underground connecting the bottom of both holes.',
      'Build your small fire in one hole. The second hole pulls in fresh air like a magic chimney!'
    ],
    safetyRule: '⚠️ Keep your face away from the top hole because hot flames and heat rush straight up.'
  },
  't1-debris-hut': {
    analogy: 'A debris hut is like building a giant sleeping bag out of fallen dry leaves and tree branches.',
    simpleWhatItIs: 'A warm, waterproof survival shelter you can make with your bare hands in the woods in under two hours.',
    simpleMaterials: ['One long sturdy branch (ridgepole)', 'Lots of smaller ribs/sticks', 'Armfuls of dry crunchy leaves, pine needles, and moss'],
    easySteps: [
      'Prop one end of a long thick branch against a tree trunk or boulder.',
      'Lean smaller sticks along both sides to make an A-frame tent shape.',
      'Pile dry leaves at least 3 feet thick all over the roof. Leaves trap pockets of warm air like a winter coat!'
    ],
    safetyRule: '⚠️ Check leaves for prickly thorns, ant nests, or bees before piling them onto your shelter.'
  },
  't1-bow-drill-friction-fire': {
    analogy: 'Rubbing sticks together to make fire is like rubbing your hands together when you are cold, but done fast enough to make wood dust smoke and glow!',
    simpleWhatItIs: 'Making fire without matches using a wooden bow, a drill spindle, and a flat hearth board.',
    simpleMaterials: ['A curved stick tied with shoe lace (the bow)', 'A straight dry stick (spindle)', 'A flat dry softwood board', 'A bird-nest wad of dry fluffy grass'],
    easySteps: [
      'Wrap your shoelace around the straight stick once.',
      'Saw the bow back and forth smoothly like a violin to spin the stick against the board.',
      'When you see a pile of black smoking powder, gently tip the glowing coal into your dry grass nest and blow softly until it bursts into flames!'
    ],
    safetyRule: '⚠️ Fire gets hot instantly! Always have water or dirt ready to put out your campfire.'
  },
  // TIER 2: FOOD & AGRICULTURE
  't2-foraging-wild-edibles': {
    analogy: 'Plants in the woods are like groceries on a shelf, but some have secret warning signs that say "Do Not Eat!"',
    simpleWhatItIs: 'Finding tasty wild berries, nuts, and greens in the forest safely.',
    simpleMaterials: ['A clean collection bag or basket', 'A pocket plant guide or encyclopedia'],
    easySteps: [
      'Look for friendly plants you know 100% for sure, like dandelions, wild blackberries, and clover.',
      'Never eat mushrooms, white berries, or plants that smell like bitter almonds.',
      'Wash all leaves in clean water before eating them like a wild salad!'
    ],
    safetyRule: '⚠️ Never eat ANY wild plant unless an experienced adult checks and confirms it first.'
  },
  't2-food-preservation-smoking-curing': {
    analogy: 'Smoking meat is like giving food a protective smoke jacket and taking away all moisture so mold and bacteria starve to death.',
    simpleWhatItIs: 'Drying and smoking fish, fruit, and meat so they stay good to eat for months without a refrigerator.',
    simpleMaterials: ['Thinly sliced meat or fruit', 'Coarse salt', 'A wood-smoke rack built over smoldering apple or oak wood'],
    easySteps: [
      'Slice food very thin so it can dry out fast.',
      'Rub with salt and hang over gentle, warm wood smoke for several hours.',
      'Store the hard, dry jerky in a clean, airtight container away from bugs.'
    ],
    safetyRule: '⚠️ Never use green pine or cedar wood for smoking—they contain bad resin that tastes bitter.'
  },
  // TIER 3 & 4: FORGING & POWER
  't3-blacksmithing-charcoal-forge': {
    analogy: 'Heating iron is like playing with Play-Doh, but using intense fire so hard metal becomes soft enough to bend with a hammer!',
    simpleWhatItIs: 'Heating chunks of iron until they glow red-orange so you can hammer them into knives, nails, and axes.',
    simpleMaterials: ['Lump charcoal (not lighter-fluid briquettes)', 'A hair dryer or hand bellows to blow air', 'A heavy steel sledgehammer and anvil stone'],
    easySteps: [
      'Build a hot charcoal fire in a safe fire pit.',
      'Blow extra air into the coals using bellows. Air feeds oxygen to make the coals glow white-hot!',
      'Hold the metal with long tongs in the coals until glowing orange, then hammer it into shape on an anvil.'
    ],
    safetyRule: '⚠️ Metal stays burning hot even after it stops glowing! Never touch metal with bare hands.'
  },
  't4-permanent-magnet-generator': {
    analogy: 'Electricity is like a dance party of electrons: when magnets spin past copper wire coils, they push the electrons like a wave in a stadium!',
    simpleWhatItIs: 'Making your own electricity by spinning strong magnets past coils of copper wire using water, wind, or a bicycle.',
    simpleMaterials: ['Strong neodymium magnets', 'Spools of insulated copper wire', 'A spinning axle or bicycle wheel', 'A small LED bulb'],
    easySteps: [
      'Wind copper wire tightly around plastic spools 100 times.',
      'Glue magnets onto a spinning wooden disc with alternating North and South poles.',
      'Spin the disc rapidly past the copper coils. Connect the wires to an LED bulb to see it light up brightly!'
    ],
    safetyRule: '⚠️ Strong magnets can pinch fingers tightly. Keep magnets away from phones and watches.'
  },
  // TIER 6: RADIO & TELECOM
  't6-crystal-radio-am-receiver': {
    analogy: 'Radio waves in the air are like invisible ocean waves carrying music. A crystal radio catches the waves with an antenna wire without needing any battery at all!',
    simpleWhatItIs: 'A magical tiny radio receiver made of wire and a diode that plays broadcast stations purely from the radio wave energy.',
    simpleMaterials: ['A long copper wire antenna strung between trees', 'A cardboard toilet paper tube wound with wire', 'A Germanium diode (1N34A)', 'Sensitive piezoelectric earphone'],
    easySteps: [
      'Wrap 100 turns of wire around a cardboard tube to make a tuning coil.',
      'Connect one wire end to a long antenna in a tree, and the other to a ground rod stuck into wet dirt.',
      'Put the earphone in your ear and touch the diode to the coil. You will hear voices and music straight from the air with zero batteries!'
    ],
    safetyRule: '⚠️ Never put an antenna wire near electric power lines or during a lightning storm.'
  }
};

/**
 * Fallback generator for guides that do not have a hardcoded entry:
 * Breaks down any guide into kid-friendly chunks.
 */
export function getKidFriendlyExplanation(guideId: string, title: string, category: string, summary: string): KidFriendlyExplanation {
  if (KID_FRIENDLY_GUIDES[guideId]) {
    return KID_FRIENDLY_GUIDES[guideId];
  }

  return {
    analogy: `Think of "${title}" like a fun science puzzle: by learning how nature and tools work together, you can make or fix anything yourself!`,
    simpleWhatItIs: `This guide teaches you how to ${summary.toLowerCase().replace(/neutralize|synthesize|fabricate|titrate|calcine/g, 'make or clean')} using simple materials found outdoors.`,
    simpleMaterials: [
      'Common outdoor natural materials (wood, stone, clean water, or soil)',
      'Basic hand tools (a strong stick, knife, rope, or container)',
      'A safe workspace with good light and plenty of room to practice'
    ],
    easySteps: [
      'Read through the steps carefully and gather all your materials before you begin.',
      'Follow the blueprint one simple step at a time, checking your work as you go.',
      'Test your creation in a small, safe way first before relying on it.'
    ],
    safetyRule: '⚠️ Always work with a buddy or adult when practicing with sharp tools, fires, or heavy materials!'
  };
}
