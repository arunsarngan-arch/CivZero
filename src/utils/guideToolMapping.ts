import {
  Droplet,
  Compass,
  Route,
  Sun,
  Apple,
  HelpCircle,
  HeartPulse,
  FlaskConical,
  Zap,
  Wifi,
  Radio,
  MapPin,
  BookText,
  BookA,
  LucideIcon
} from 'lucide-react';

export interface RelatedTool {
  toolId: string;
  label: string;
  reason: string;
  iconName: string;
}

export function getRelatedToolsForGuide(guide: {
  id?: string;
  title: string;
  category: string;
  tags?: string;
}): RelatedTool[] {
  const tools: RelatedTool[] = [];
  const text = `${guide.title} ${guide.category} ${guide.tags || ''}`.toLowerCase();

  // 1. Water Dosing Calculator
  if (text.includes('water') || text.includes('purif') || text.includes('disinfect') || text.includes('filtr') || text.includes('potable') || text.includes('well')) {
    tools.push({
      toolId: 'water',
      label: 'Water Dosing Calculator',
      reason: 'Calculate exact bleach drops & rolling boil times for safe hydration',
      iconName: 'Droplet'
    });
  }

  // 2. Trauma Triage & Burns
  if (text.includes('medic') || text.includes('first aid') || text.includes('trauma') || text.includes('wound') || text.includes('burn') || text.includes('shock') || text.includes('bleed') || text.includes('fractur')) {
    tools.push({
      toolId: 'trauma',
      label: 'Trauma Triage & Shock Index',
      reason: 'Calculate Parkland burn fluid replacement & hemodynamic shock index',
      iconName: 'HeartPulse'
    });
  }

  // 3. Calorie Planner & Stockpile Runway
  if (text.includes('food') || text.includes('calori') || text.includes('ration') || text.includes('stockpile') || text.includes('preserv') || text.includes('agricult') || text.includes('crop') || text.includes('forag')) {
    tools.push({
      toolId: 'calories',
      label: 'Calorie Stockpile Planner',
      reason: 'Calculate caloric runway, burn rate & days of food remaining',
      iconName: 'Apple'
    });
  }

  // 4. Edibility Test Triage
  if (text.includes('plant') || text.includes('forag') || text.includes('wild') || text.includes('botan') || text.includes('edib') || text.includes('mushro') || text.includes('toxic') || text.includes('berry')) {
    tools.push({
      toolId: 'edibility',
      label: 'Universal Edibility Test',
      reason: '8-stage toxicity triage protocol for unknown wild flora',
      iconName: 'HelpCircle'
    });
  }

  // 5. Celestial Navigation & Latitude
  if (text.includes('celest') || text.includes('star') || text.includes('polaris') || text.includes('gnomon') || text.includes('latitud') || text.includes('sun') || text.includes('night sky') || text.includes('sextant')) {
    tools.push({
      toolId: 'celestial',
      label: 'Celestial Latitude Tool',
      reason: 'Measure solar noon shadow length or Polaris elevation for latitude',
      iconName: 'Sun'
    });
  }

  // 6. Field Compass & Azimuth
  if (text.includes('compass') || text.includes('azimuth') || text.includes('navigat') || text.includes('orient') || text.includes('bearing') || text.includes('magnetic') || text.includes('mils')) {
    tools.push({
      toolId: 'compass',
      label: 'Tactical Field Compass',
      reason: 'Hardware magnetometer azimuth, mils compass rose & heading lock',
      iconName: 'Compass'
    });
  }

  // 7. Trail & Backtrack GPS
  if (text.includes('trail') || text.includes('track') || text.includes('path') || text.includes('scout') || text.includes('hike') || text.includes('terrain') || text.includes('survey')) {
    tools.push({
      toolId: 'trail',
      label: 'Trail & Backtrack Mapper',
      reason: 'Offline GPS breadcrumb tracker to navigate back to safe camp',
      iconName: 'Route'
    });
  }

  // 8. Kinetic & Solar Power
  if (text.includes('power') || text.includes('electr') || text.includes('solar') || text.includes('batter') || text.includes('turbin') || text.includes('hydro') || text.includes('wind') || text.includes('volt') || text.includes('watt') || text.includes('generat')) {
    tools.push({
      toolId: 'kinetic',
      label: 'Kinetic & Solar Power Calculator',
      reason: 'Size battery capacity, solar arrays, hydro head & wind turbine output',
      iconName: 'Zap'
    });
  }

  // 9. Chemistry Titration & Precursors
  if (text.includes('chem') || text.includes('acid') || text.includes('base') || text.includes('powder') || text.includes('saltpet') || text.includes('soap') || text.includes('lime') || text.includes('mortar') || text.includes('smelt') || text.includes('metall')) {
    tools.push({
      toolId: 'chemistry',
      label: 'Chemistry Titration & Precursors',
      reason: 'Formulas for black powder, sulfuric acid, lye soap & mortar',
      iconName: 'FlaskConical'
    });
  }

  // 10. RF & Antenna Tuning
  if (text.includes('radio') || text.includes('antenna') || text.includes('frequen') || text.includes('dipole') || text.includes('rf') || text.includes('transmi') || text.includes('ham') || text.includes('amateur')) {
    tools.push({
      toolId: 'antenna',
      label: 'RF & Wire Antenna Calculator',
      reason: 'Calculate wire dipole lengths & line-of-sight radio horizons',
      iconName: 'Wifi'
    });
  }

  // 11. Morse Beacon & Optical Strobe
  if (text.includes('signal') || text.includes('morse') || text.includes('beacon') || text.includes('strobe') || text.includes('distress') || text.includes('sos')) {
    tools.push({
      toolId: 'morse',
      label: 'Morse Code Optical Beacon',
      reason: 'Transmit light strobes and 800Hz audio distress signals',
      iconName: 'Radio'
    });
  }

  // 12. Settlement & Colonization Biome Wizard
  if (text.includes('shelter') || text.includes('settle') || text.includes('homestead') || text.includes('coloniz') || text.includes('timber') || text.includes('masonry') || text.includes('biome') || text.includes('cabin')) {
    tools.push({
      toolId: 'settlement',
      label: 'Biome Settlement Wizard',
      reason: 'Analyze terrain, resources, defense & construction strategies',
      iconName: 'MapPin'
    });
  }

  // If no specific match, default to Trail & Backtrack or Lexicon
  if (tools.length === 0) {
    tools.push({
      toolId: 'trail',
      label: 'Trail & Backtrack Mapper',
      reason: 'Log GPS waypoints and navigate field territory safely',
      iconName: 'Route'
    });
  }

  // Deduplicate and limit to at most 2 most relevant tools
  const uniqueTools: RelatedTool[] = [];
  const seen = new Set<string>();
  for (const t of tools) {
    if (!seen.has(t.toolId)) {
      seen.add(t.toolId);
      uniqueTools.push(t);
      if (uniqueTools.length >= 2) break;
    }
  }

  return uniqueTools;
}

export function extractChecklistFromGuide(guide: {
  title: string;
  category: string;
  tier: number;
  content: string;
  summary: string;
}): { title: string; content: string } {
  const steps: string[] = [];

  // Parse markdown content line by line for bullet points and numbered lists
  const lines = guide.content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Match numbered list: "1. Step description"
    const numMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (numMatch && numMatch[2].length > 10) {
      // Strip any inner markdown bolding for clean title
      steps.push(numMatch[2]);
      continue;
    }
    // Match bullet items: "- [ ] task" or "- Step description"
    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (bulletMatch && bulletMatch[1].length > 15 && !bulletMatch[1].startsWith('**Note') && !bulletMatch[1].startsWith('**Warning')) {
      steps.push(bulletMatch[1]);
    }
  }

  // If no explicit list items found, generate from summary and sentences
  if (steps.length === 0) {
    const sentences = guide.summary.split('.').filter(s => s.trim().length > 10);
    for (const s of sentences) {
      steps.push(s.trim());
    }
  }

  // Format into Markdown checklist
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const formattedChecklist = [
    `# Field Checklist: ${guide.title}`,
    `**Category:** Tier ${guide.tier} • ${guide.category}`,
    `**Date Exported:** ${today}`,
    ``,
    `### Operational Checklist:`,
    ...steps.slice(0, 10).map(s => `- [ ] ${s}`),
    ``,
    `### Field Notes & Log:`,
    `- Status: In Progress`,
    `- Supplies Checked: [ ]`,
    `- Safety Clearance: [ ]`,
    ``,
    `*Generated from CivZero Technical Manual: "${guide.title}"*`
  ].join('\n');

  return {
    title: `Checklist: ${guide.title}`,
    content: formattedChecklist
  };
}
