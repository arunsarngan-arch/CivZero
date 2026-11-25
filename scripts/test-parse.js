function parseWebsterEntry(raw) {
  if (!raw) return { meanings: [], examples: [], fullText: '' };

  const fullText = raw.trim();
  const meanings = [];
  const examples = [];

  // Match numbered definitions: 1. ... 2. ... 3. ...
  // Split on numbers followed by period and space
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

      // Look for examples inside the part: "..." or as, ...
      const exampleQuotes = part.match(/"([^"]{4,120})"/g);
      if (exampleQuotes) {
        for (const ex of exampleQuotes) {
          const cleanEx = ex.replace(/^"|"$/g, '').trim();
          if (cleanEx.length > 5 && !examples.includes(cleanEx)) {
            examples.push(cleanEx);
          }
        }
      }

      // Also match "as, to ..." or "as, a ..."
      const asExample = part.match(/;\s*as,\s*([^.;]+(?:\.|\;)?)/i);
      if (asExample && asExample[1]) {
        const cleanAs = asExample[1].trim().replace(/[.;]$/, '');
        if (cleanAs.length > 5 && !examples.includes(cleanAs)) {
          examples.push(cleanAs);
        }
      }

      // Clean definition text
      const cleanDef = part
        .replace(/;\s*as,\s*[^.;]+(?:\.|\;)?/gi, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (cleanDef.length > 8) {
        meanings.push(cleanDef);
      }
    }
  } else {
    // No numbers, split by semicolons or paragraphs
    const parts = fullText.split(/;\s+/);
    for (const p of parts) {
      const clean = p.trim().replace(/\s+/g, ' ');
      if (clean.length > 8) meanings.push(clean);
    }
  }

  return {
    meanings: meanings.slice(0, 5),
    examples: examples.slice(0, 3),
    fullText
  };
}

const sampleWater = `1. The fluid which descends from the clouds in rain, and which forms rivers, lakes, seas, etc. "We will drink water." Shak. 2. A body of water, standing or flowing; a lake, river, or other collection of water. 3. Any liquid secretion, humor, or the like, resembling water; esp., the urine. 4. (Pharm.) A solution in water of a gaseous or readily volatile substance; as, ammonia water. 5. The limpidity and luster of a precious stone, especially a diamond; as, a diamond of the first water.`;

console.log('Result for Water:');
console.log(JSON.stringify(parseWebsterEntry(sampleWater), null, 2));
