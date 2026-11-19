import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const ROOT_DIR = process.cwd();
const GUIDES_DIR = path.join(ROOT_DIR, 'content', 'guides');
const PACKS_DIR = path.join(ROOT_DIR, 'public', 'packs');
const DATA_DIR = path.join(ROOT_DIR, 'src', 'data');

if (!fs.existsSync(PACKS_DIR)) {
  fs.mkdirSync(PACKS_DIR, { recursive: true });
}
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const TIERS_CONFIG = [
  {
    id: 1,
    name: 'Tier 1: Immediate Survival & Triage',
    subtitle: 'First 30 Days',
    description: 'Critical physical imperatives: safe water filtration & titration, trauma life support, thermal shelters, firecraft, tracking, and poisonous plant avoidance.',
    color: '#ef4444',
    badge: 'T1 - SURVIVAL',
    icon: 'ShieldAlert',
  },
  {
    id: 2,
    name: 'Tier 2: The Homestead & Agrarian Settlement',
    subtitle: 'Months 2 to 12',
    description: 'Post-collapse food security, biome colonization, soil ribbon testing, seed preservation, root cellaring, poultry husbandry, and draft animal traction.',
    color: '#f59e0b',
    badge: 'T2 - HOMESTEAD',
    icon: 'Wheat',
  },
  {
    id: 3,
    name: 'Tier 3: Pre-Industrial Forge, Kiln & Masonry',
    subtitle: 'Years 1 to 3',
    description: 'Foundational metallurgy and structural materials: clay adobe blast forges, greensand metal casting, slaked quicklime mortar, hydraulic ram pumps, and nitre beds.',
    color: '#eab308',
    badge: 'T3 - METALLURGY',
    icon: 'Hammer',
  },
  {
    id: 4,
    name: 'Tier 4: Mechanical Power & Kinetic Engines',
    subtitle: 'Years 3 to 7',
    description: 'Work multiplication: micro-hydro Pelton wheels, omnidirectional Savonius wind dynamos, Imbert wood gasifiers, anaerobic biogas digesters, and small arms mechanisms.',
    color: '#10b981',
    badge: 'T4 - POWER',
    icon: 'Zap',
  },
  {
    id: 5,
    name: 'Tier 5: Industrial Chemistry & Applied Electricity',
    subtitle: 'Years 7 to 15',
    description: 'Modern chemical synthesis & energy storage: Planté lead-acid storage cells, the Dr. Stone 0-to-industrial chemical roadmap, and silicon semiconductors.',
    color: '#06b6d4',
    badge: 'T5 - CHEMISTRY',
    icon: 'Cpu',
  },
  {
    id: 6,
    name: 'Tier 6: Telecommunications, Law & Heritage',
    subtitle: 'Decades to Millennia',
    description: 'Preserving human intellect and societal order: crystal radio, celestial sextants, Python programming, neural networks, universal law, linguistics, and sacred texts.',
    color: '#8b5cf6',
    badge: 'T6 - HERITAGE',
    icon: 'Radio',
  }
];

function parseMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = raw.match(frontmatterRegex);

  if (!match) {
    throw new Error(`File ${filePath} lacks valid frontmatter block`);
  }

  const yamlStr = match[1];
  const markdownBody = match[2].trim();

  const meta = {};
  yamlStr.split(/\r?\n/).forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      meta[key] = val;
    }
  });

  return {
    id: meta.id || path.basename(filePath, '.md'),
    tier: parseInt(meta.tier, 10) || 1,
    tier_name: meta.tier_name || `Tier ${meta.tier}`,
    title: meta.title || 'Untitled Guide',
    category: meta.category || 'General Survival',
    read_time: meta.read_time || '5 min',
    difficulty: meta.difficulty || 'Medium',
    tags: meta.tags || '',
    summary: meta.summary || '',
    content: markdownBody,
    created_at: new Date().toISOString()
  };
}

async function buildPacks() {
  console.log('⚡ Initializing SQLite build process with native Node.js FTS5 engine...');

  const files = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} markdown guides in ${GUIDES_DIR}`);

  const guides = files.map(f => parseMarkdownFile(path.join(GUIDES_DIR, f)));

  // Master Database setup
  const masterDbPath = path.join(PACKS_DIR, 'civilization_master.db');
  if (fs.existsSync(masterDbPath)) {
    fs.unlinkSync(masterDbPath);
  }

  const db = new DatabaseSync(masterDbPath);

  // Create standard relational tables and FTS5 virtual table
  db.exec(`
    CREATE TABLE IF NOT EXISTS tiers (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      color TEXT,
      badge TEXT,
      icon TEXT,
      guide_count INTEGER DEFAULT 0,
      is_installed INTEGER DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS guides (
      id TEXT PRIMARY KEY,
      tier INTEGER NOT NULL,
      tier_name TEXT NOT NULL,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      read_time TEXT,
      difficulty TEXT,
      tags TEXT,
      summary TEXT,
      content TEXT,
      created_at TEXT,
      is_bookmarked INTEGER DEFAULT 0,
      FOREIGN KEY (tier) REFERENCES tiers(id)
    );

    -- FTS5 Full Text Search Table with Porter Stemmer & Unicode Tokenizer
    CREATE VIRTUAL TABLE IF NOT EXISTS guides_fts USING fts5(
      id UNINDEXED,
      title,
      category,
      tags,
      summary,
      content,
      tokenize = 'porter unicode61'
    );
  `);

  // Insert Tiers
  const insertTierStmt = db.prepare(`
    INSERT INTO tiers (id, name, subtitle, description, color, badge, icon, guide_count, is_installed)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
  `);

  for (const tier of TIERS_CONFIG) {
    const count = guides.filter(g => g.tier === tier.id).length;
    insertTierStmt.run(
      tier.id,
      tier.name,
      tier.subtitle,
      tier.description,
      tier.color,
      tier.badge,
      tier.icon,
      count
    );
  }

  // Insert Guides & Index FTS5
  const insertGuideStmt = db.prepare(`
    INSERT INTO guides (id, tier, tier_name, title, category, read_time, difficulty, tags, summary, content, created_at, is_bookmarked)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
  `);

  const insertFtsStmt = db.prepare(`
    INSERT INTO guides_fts (id, title, category, tags, summary, content)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  for (const guide of guides) {
    insertGuideStmt.run(
      guide.id,
      guide.tier,
      guide.tier_name,
      guide.title,
      guide.category,
      guide.read_time,
      guide.difficulty,
      guide.tags,
      guide.summary,
      guide.content,
      guide.created_at
    );

    insertFtsStmt.run(
      guide.id,
      guide.title,
      guide.category,
      guide.tags,
      guide.summary,
      guide.content
    );
  }

  // Test FTS5 query to verify functionality
  const ftsTest = db.prepare("SELECT id, title FROM guides_fts WHERE guides_fts MATCH 'water OR tourniq*' LIMIT 5").all();
  console.log('✅ SQLite FTS5 Match Test verified successfully. Sample hits:', ftsTest.length);

  db.close();

  const masterStat = fs.statSync(masterDbPath);
  console.log(`📦 Master SQLite DB built: ${masterDbPath} (${(masterStat.size / 1024).toFixed(2)} KB)`);

  // Build Modular Tier Packs
  const packManifest = {
    version: '1.0.0',
    generated_at: new Date().toISOString(),
    total_guides: guides.length,
    master_pack: {
      filename: 'civilization_master.db',
      size_bytes: masterStat.size,
      size_formatted: `${(masterStat.size / 1024).toFixed(1)} KB`
    },
    tiers: []
  };

  for (const tier of TIERS_CONFIG) {
    const tierGuides = guides.filter(g => g.tier === tier.id);
    const tierFilename = `tier_${tier.id}_pack.db`;
    const tierDbPath = path.join(PACKS_DIR, tierFilename);
    if (fs.existsSync(tierDbPath)) {
      fs.unlinkSync(tierDbPath);
    }

    const tierDb = new DatabaseSync(tierDbPath);
    tierDb.exec(`
      CREATE TABLE guides (
        id TEXT PRIMARY KEY,
        tier INTEGER,
        tier_name TEXT,
        title TEXT,
        category TEXT,
        read_time TEXT,
        difficulty TEXT,
        tags TEXT,
        summary TEXT,
        content TEXT
      );
      CREATE VIRTUAL TABLE guides_fts USING fts5(
        id UNINDEXED, title, category, tags, summary, content, tokenize = 'porter unicode61'
      );
    `);

    const tGuideStmt = tierDb.prepare(`
      INSERT INTO guides VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const tFtsStmt = tierDb.prepare(`
      INSERT INTO guides_fts VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const g of tierGuides) {
      tGuideStmt.run(g.id, g.tier, g.tier_name, g.title, g.category, g.read_time, g.difficulty, g.tags, g.summary, g.content);
      tFtsStmt.run(g.id, g.title, g.category, g.tags, g.summary, g.content);
    }

    tierDb.close();
    const tStat = fs.statSync(tierDbPath);

    packManifest.tiers.push({
      tier: tier.id,
      name: tier.name,
      filename: tierFilename,
      guide_count: tierGuides.length,
      size_bytes: tStat.size,
      size_formatted: `${(tStat.size / 1024).toFixed(1)} KB`
    });
  }

  // Write Manifest
  fs.writeFileSync(path.join(PACKS_DIR, 'manifest.json'), JSON.stringify(packManifest, null, 2));

  // Write precompiled JSON bundle for immediate synchronous hydration in UI / Web
  const precompiled = {
    manifest: packManifest,
    tiers: TIERS_CONFIG.map(t => ({
      ...t,
      guide_count: guides.filter(g => g.tier === t.id).length,
      is_installed: true
    })),
    guides: guides
  };
  fs.writeFileSync(path.join(DATA_DIR, 'precompiled_packs.json'), JSON.stringify(precompiled, null, 2));
  console.log(`✨ Precompiled assets generated in ${DATA_DIR}/precompiled_packs.json`);

  console.log('🎉 Knowledge packs and SQLite databases compiled successfully!');
}

buildPacks().catch(err => {
  console.error('Error compiling knowledge packs:', err);
  process.exit(1);
});
