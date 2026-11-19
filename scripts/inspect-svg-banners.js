import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content', 'guides');
const files = [
  't1-chemical-water-disinfection.md',
  't1-debris-hut.md',
  't1-essential-knots-rigging.md',
  't1-universal-edibility-test.md',
  't2-quicklime-mortar-masonry.md',
  't2-wood-ash-soapmaking.md',
  't3-saltpeter-black-powder.md',
  't3-wood-gasifier-engine.md',
  't4-celestial-navigation-sextant.md'
];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const svgMatch = content.match(/```svg([\s\S]*?)```/);
  if (!svgMatch) continue;
  const svg = svgMatch[1];
  const vbMatch = svg.match(/viewBox=[\"']([^\"']+)[\"']/);
  console.log(`\n=== ${file} (viewBox: ${vbMatch ? vbMatch[1] : 'none'}) ===`);
  const lines = svg.split(/\r?\n/);
  lines.forEach((l, idx) => {
    if (l.includes('<rect') && (l.includes('stroke') || l.includes('fill="#1e293b"') || l.includes('y="3') || l.includes('y="2') || l.includes('y="4'))) {
      if (l.includes('width="6') || l.includes('width="7') || l.includes('width="5') || l.includes('width="8') || l.includes('width="4')) {
        console.log(`  Line ${idx}: ${l.trim()}`);
      }
    }
    if (l.includes('<text') && l.length > 80) {
      console.log(`  Line ${idx} TEXT: ${l.trim()}`);
    }
  });
}
