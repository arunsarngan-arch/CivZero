import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content', 'guides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const svgMatches = content.match(/```svg[\s\S]*?```/g);
  if (!svgMatches) continue;

  for (const svg of svgMatches) {
    const lines = svg.split(/\r?\n/);
    for (const line of lines) {
      const rawTextMatch = line.match(/<text[^>]*>(.*?)<\/text>/);
      if (rawTextMatch) {
        const textStr = rawTextMatch[1].replace(/<[^>]+>/g, '');
        if (textStr.length > 55) {
          console.log(`[LONG TEXT] ${file} (len=${textStr.length}): "${textStr.slice(0, 60)}..."`);
        }
      }
    }
  }
}
