import React, { useState } from 'react';
import { GitBranch, ArrowRight, CheckCircle2, Lock, BookOpen, Layers } from 'lucide-react';
import type { Guide } from '../../types';

interface TechNode {
  id: string;
  name: string;
  tier: number;
  category: string;
  prereqs: string[];
  unlocks: string[];
  description: string;
}

const TIER_HEADERS: Record<number, { title: string; subtitle: string; color: string }> = {
  1: {
    title: 'Tier 1: Survival & Immediate Triage',
    subtitle: '0–30 Days • Water, Thermal, Trauma & Containment',
    color: '#ef4444',
  },
  2: {
    title: 'Tier 2: Homestead & Agrarian Settlement',
    subtitle: 'Months 2–12 • Colonization, Soil, Seeds & Husbandry',
    color: '#f59e0b',
  },
  3: {
    title: 'Tier 3: Pre-Industrial Forge, Kiln & Masonry',
    subtitle: 'Years 1–3 • Metallurgy, Foundry, Slaked Lime & Nitre',
    color: '#eab308',
  },
  4: {
    title: 'Tier 4: Mechanical Power & Kinetic Engines',
    subtitle: 'Years 3–7 • Hydro Pelton, Wind Dynamos & Gasification',
    color: '#10b981',
  },
  5: {
    title: 'Tier 5: Industrial Chemistry & Applied Electricity',
    subtitle: 'Years 7–15 • Chemical Synthesis, Batteries & Silicon',
    color: '#06b6d4',
  },
  6: {
    title: 'Tier 6: Telecommunications, Law & Computation',
    subtitle: 'Decades+ • Radio, Metrology, Code, AI & Civil Order',
    color: '#8b5cf6',
  },
};

const TECH_NODES: TechNode[] = [
  // Tier 1
  {
    id: 't1-emergency-firecraft-methods',
    name: 'Multi-Method Firecraft',
    tier: 1,
    category: 'Thermal & Firecraft',
    prereqs: [],
    unlocks: ['t1-dakota-fire-hole', 't2-primitive-forge'],
    description: '5 alternative ignition methods: friction, percussion, lens, electric, chemical.'
  },
  {
    id: 't1-dakota-fire-hole',
    name: 'Convective Firecraft',
    tier: 1,
    category: 'Thermal & Firecraft',
    prereqs: ['t1-emergency-firecraft-methods'],
    unlocks: ['t2-rocket-stove', 't2-primitive-forge', 't2-wood-ash-soapmaking', 't2-biome-settlement-colonization-homesteading'],
    description: 'Controlled high-temperature subterranean combustion with secondary air tunnel.'
  },
  {
    id: 't1-primitive-water-filtration',
    name: 'Biosand & Biochar Filtration',
    tier: 1,
    category: 'Water & Life Support',
    prereqs: [],
    unlocks: ['t1-solar-still', 't2-wood-ash-soapmaking'],
    description: 'Multi-stage mechanical and biological water purification columns removing parasites and bacteria.'
  },
  {
    id: 't1-solar-still',
    name: 'Solar Distillation',
    tier: 1,
    category: 'Water & Life Support',
    prereqs: ['t1-primitive-water-filtration'],
    unlocks: ['t2-wood-ash-soapmaking'],
    description: 'Phase-change water extraction from soil and brine yielding zero-salinity pure distillate.'
  },
  {
    id: 't1-primitive-archery-bowyer-hunting-weapons',
    name: 'Primitive Archery & Bowyer Craft',
    tier: 1,
    category: 'Wildlife & Defense',
    prereqs: [],
    unlocks: ['t3-small-arms-ballistics-catalog'],
    description: 'Stave selection, tillering 50 lb flatbows, fletching, and flint knapping for survival hunting.'
  },
  {
    id: 't1-emergency-trauma-triage',
    name: 'Field Trauma Stabilization',
    tier: 1,
    category: 'Emergency Medicine',
    prereqs: [],
    unlocks: [],
    description: 'M.A.R.C.H. sequence: wound packing, flutter chest seal, traction splints, and hemastasis.'
  },
  {
    id: 't1-trench-latrine',
    name: 'Biochar Sanitation Latrine',
    tier: 1,
    category: 'Sanitation & Hygiene',
    prereqs: ['t1-dakota-fire-hole'],
    unlocks: ['t3-saltpeter-black-powder', 't3-biogas-anaerobic-digester', 't2-biome-settlement-colonization-homesteading'],
    description: 'Pathogen containment, dry wood-ash alkaline coverage, and microbial nitrogen beds.'
  },

  // Tier 2
  {
    id: 't2-biome-settlement-colonization-homesteading',
    name: 'Biome Settlement Architecture',
    tier: 2,
    category: 'Civil Engineering',
    prereqs: ['t1-dakota-fire-hole', 't1-trench-latrine'],
    unlocks: ['t2-water-well-drilling-cistern-engineering', 't2-seed-saving', 't2-livestock-animal-husbandry', 't2-quicklime-mortar-masonry', 't4-law-justice-governance'],
    description: 'Soil ribbon testing, zoning, site defense, drainage grids, and perimeter fortification across 7 biomes.'
  },
  {
    id: 't2-water-well-drilling-cistern-engineering',
    name: 'Percussion Well Drilling & Cisterns',
    tier: 2,
    category: 'Civil Engineering',
    prereqs: ['t2-biome-settlement-colonization-homesteading'],
    unlocks: ['t2-hydraulic-ram-pump', 't3-ceramic-pottery-refractory-firebrick-kilns'],
    description: 'Spring-pole percussion drill, steel bailer valves, perforated casing gravel packs, and mortared cisterns.'
  },
  {
    id: 't2-seed-saving',
    name: 'Heirloom Seed Banking',
    tier: 2,
    category: 'Agriculture & Botany',
    prereqs: ['t2-biome-settlement-colonization-homesteading'],
    unlocks: ['t2-lacto-fermentation-cellaring'],
    description: 'Wet fermentation and sub-8% desiccation for 10-year genetic food sovereignty.'
  },
  {
    id: 't2-lacto-fermentation-cellaring',
    name: 'Lacto-Fermentation & Cellaring',
    tier: 2,
    category: 'Food Preservation',
    prereqs: ['t2-seed-saving'],
    unlocks: [],
    description: 'Anaerobic acidification, vinegar pickling, solar drying, and thermal root cellaring without refrigeration.'
  },
  {
    id: 't2-livestock-animal-husbandry',
    name: 'Domestic Livestock Husbandry',
    tier: 2,
    category: 'Agriculture & Livestock',
    prereqs: ['t2-biome-settlement-colonization-homesteading'],
    unlocks: ['t3-biogas-anaerobic-digester'],
    description: 'Ruminant silage feeding, animal health, selective breeding, and equine draft harness mechanics.'
  },
  {
    id: 't2-rocket-stove',
    name: 'Insulated Rocket Stove',
    tier: 2,
    category: 'Thermal & Combustion',
    prereqs: ['t1-dakota-fire-hole'],
    unlocks: ['t2-quicklime-mortar-masonry', 't3-ceramic-pottery-refractory-firebrick-kilns', 't3-wood-gasifier-engine'],
    description: '900°C secondary wood gas complete combustion with thermal mass heat storage.'
  },

  // Tier 3
  {
    id: 't2-primitive-forge',
    name: 'Clay Adobe Blast Forge',
    tier: 3,
    category: 'Metallurgy & Foundry',
    prereqs: ['t1-dakota-fire-hole'],
    unlocks: ['t3-tatara-bloomery-iron-sand-smelting', 't2-sand-casting-bronze-iron', 't3-pelton-water-turbine', 't3-wood-gasifier-engine'],
    description: '1150°C forced-air tuyere blast for malleable steel forging and tool heat treatment.'
  },
  {
    id: 't3-ceramic-pottery-refractory-firebrick-kilns',
    name: 'Refractory Firebrick & Kilns',
    tier: 3,
    category: 'Masonry & Materials',
    prereqs: ['t2-rocket-stove', 't2-water-well-drilling-cistern-engineering'],
    unlocks: ['t3-tatara-bloomery-iron-sand-smelting', 't5-laboratory-glassblowing-scientific-glassware'],
    description: 'Kaolin alumina firebrick blending, grog tempering, and 1400°C downdraft kiln construction.'
  },
  {
    id: 't3-tatara-bloomery-iron-sand-smelting',
    name: 'Tatara Iron Sand Smelting',
    tier: 3,
    category: 'Metallurgy & Foundry',
    prereqs: ['t2-primitive-forge', 't3-ceramic-pottery-refractory-firebrick-kilns'],
    unlocks: ['t4-mechanical-lathe-machine-tool-reconstruction', 't4-reciprocating-steam-engine-pressure-boiler'],
    description: 'Direct bloomery reduction of magnetic black river sand into high-carbon tamahagane steel blooms.'
  },
  {
    id: 't2-sand-casting-bronze-iron',
    name: 'Greensand & Lost-Wax Foundry',
    tier: 3,
    category: 'Metallurgy & Foundry',
    prereqs: ['t2-primitive-forge'],
    unlocks: ['t2-hydraulic-ram-pump', 't3-pelton-water-turbine', 't3-small-arms-ballistics-catalog', 't4-mechanical-lathe-machine-tool-reconstruction'],
    description: 'Casting intricate gears, machine beds, and tool patterns in refractory clay and greensand.'
  },
  {
    id: 't2-quicklime-mortar-masonry',
    name: 'Limestone Calcination & Mortar',
    tier: 3,
    category: 'Masonry & Materials',
    prereqs: ['t2-rocket-stove'],
    unlocks: ['t3-saltpeter-black-powder', 't3-ceramic-pottery-refractory-firebrick-kilns'],
    description: '900°C CaO quicklime slaking for permanent weather-resistant stone and brick architecture.'
  },
  {
    id: 't2-wood-ash-soapmaking',
    name: 'Lye Saponification & Soap',
    tier: 3,
    category: 'Chemical Hygiene',
    prereqs: ['t1-dakota-fire-hole', 't1-solar-still'],
    unlocks: ['t3-saltpeter-black-powder', 't5-chloralkali-industrial-acids-vitriol'],
    description: 'Potassium hydroxide base hydrolysis of animal tallow for medical pathogen defense.'
  },
  {
    id: 't2-hydraulic-ram-pump',
    name: 'Hydraulic Ram Pump',
    tier: 3,
    category: 'Hydraulics & Fluid Power',
    prereqs: ['t2-sand-casting-bronze-iron', 't2-water-well-drilling-cistern-engineering'],
    unlocks: ['t3-pelton-water-turbine'],
    description: 'Continuous water hammer kinetic elevation with zero external fuel or electricity.'
  },
  {
    id: 't3-saltpeter-black-powder',
    name: 'Nitre Bed Potassium Nitrate',
    tier: 3,
    category: 'Industrial Minerals',
    prereqs: ['t1-trench-latrine', 't2-wood-ash-soapmaking', 't2-quicklime-mortar-masonry'],
    unlocks: ['t3-dr-stone-scientific-reconstruction-roadmap', 't3-small-arms-ballistics-catalog', 't5-chloralkali-industrial-acids-vitriol'],
    description: 'KNO3 crystal extraction for civil rock blasting, soil amendment, and propellant synthesis.'
  },

  // Tier 4
  {
    id: 't4-mechanical-lathe-machine-tool-reconstruction',
    name: 'The Mother Machine: Metal Lathe',
    tier: 4,
    category: 'Mechanics & Defense',
    prereqs: ['t3-tatara-bloomery-iron-sand-smelting', 't2-sand-casting-bronze-iron'],
    unlocks: ['t4-reciprocating-steam-engine-pressure-boiler', 't5-edison-carbon-filament-vacuum-lamp', 't6-papermaking-movable-type-printing-press'],
    description: 'Cast iron lathe beds, hand scraped prism ways, leadscrew gear trains, and precision cross slides.'
  },
  {
    id: 't4-reciprocating-steam-engine-pressure-boiler',
    name: 'Steam Engine & Pressure Boiler',
    tier: 4,
    category: 'Kinetic Power',
    prereqs: ['t4-mechanical-lathe-machine-tool-reconstruction', 't3-tatara-bloomery-iron-sand-smelting'],
    unlocks: ['t5-chloralkali-industrial-acids-vitriol', 't3-pelton-water-turbine'],
    description: 'Double-acting D-slide valve reciprocating steam engine with multi-flue riveted fire-tube boiler.'
  },
  {
    id: 't3-pelton-water-turbine',
    name: 'Impulse Hydro Pelton Turbine',
    tier: 4,
    category: 'Kinetic Power',
    prereqs: ['t2-primitive-forge', 't2-hydraulic-ram-pump'],
    unlocks: ['t3-lead-acid-battery'],
    description: 'High-head kinetic jet conversion to 1200 RPM shaft power via spoon-shaped impulse buckets.'
  },
  {
    id: 't3-savonius-wind-turbine',
    name: 'Savonius Wind Alternator',
    tier: 4,
    category: 'Kinetic Power',
    prereqs: ['t2-sand-casting-bronze-iron'],
    unlocks: ['t3-lead-acid-battery'],
    description: 'Omnidirectional vertical-axis wind turbine with low-RPM axial-flux permanent magnet dynamo.'
  },
  {
    id: 't3-wood-gasifier-engine',
    name: 'Imbert Downdraft Wood Gasifier',
    tier: 4,
    category: 'Thermal Gasification',
    prereqs: ['t2-rocket-stove', 't2-primitive-forge'],
    unlocks: ['t3-lead-acid-battery'],
    description: 'Thermal wood cracking into carbon monoxide and hydrogen to run internal combustion engines.'
  },
  {
    id: 't3-biogas-anaerobic-digester',
    name: 'Continuous Biogas Digester',
    tier: 4,
    category: 'Biofuels & Fertilizer',
    prereqs: ['t1-trench-latrine', 't2-livestock-animal-husbandry'],
    unlocks: ['t3-wood-gasifier-engine'],
    description: 'Microbial methane fuel synthesis and concentrated nitrogen-rich bio-slurry fertilizer.'
  },
  {
    id: 't3-small-arms-ballistics-catalog',
    name: 'Ballistics & Mechanical Systems',
    tier: 4,
    category: 'Mechanics & Defense',
    prereqs: ['t2-sand-casting-bronze-iron', 't3-saltpeter-black-powder', 't1-primitive-archery-bowyer-hunting-weapons'],
    unlocks: ['t4-military-organization-ranks-fleet-doctrine'],
    description: 'Standard military calibers, bolt-action/gas-operated lockups, rifling rates, and chamber pressure.'
  },

  // Tier 5
  {
    id: 't5-laboratory-glassblowing-scientific-glassware',
    name: 'Laboratory Glassblowing & Glassware',
    tier: 5,
    category: 'Chemical Synthesis',
    prereqs: ['t3-ceramic-pottery-refractory-firebrick-kilns'],
    unlocks: ['t5-chloralkali-industrial-acids-vitriol', 't5-edison-carbon-filament-vacuum-lamp', 't6-vacuum-tube-triode-rf-telecommunications'],
    description: 'Borosilicate formulation, torch lampworking, Liebig condensers, ground glass joints, and distillation retorts.'
  },
  {
    id: 't5-chloralkali-industrial-acids-vitriol',
    name: 'Industrial Acids & Chloralkali Matrix',
    tier: 5,
    category: 'Chemical Synthesis',
    prereqs: ['t5-laboratory-glassblowing-scientific-glassware', 't3-saltpeter-black-powder'],
    unlocks: ['t5-sulfa-drug-antibiotic-synthesis', 't3-dr-stone-scientific-reconstruction-roadmap'],
    description: 'Sulfuric acid vitriol distillation, Birkeland-Eyde arc nitric, salt brine chloralkali electrolysis.'
  },
  {
    id: 't5-sulfa-drug-antibiotic-synthesis',
    name: 'Sulfanilamide Antibiotic Synthesis',
    tier: 5,
    category: 'Chemical Synthesis',
    prereqs: ['t5-chloralkali-industrial-acids-vitriol'],
    unlocks: [],
    description: '25-step primitive synthesis: coal tar aniline, chlorosulfonation, ammonolysis, and acid hydrolysis.'
  },
  {
    id: 't5-edison-carbon-filament-vacuum-lamp',
    name: 'Carbon Filament Incandescent Lamp',
    tier: 5,
    category: 'Electrical Storage',
    prereqs: ['t5-laboratory-glassblowing-scientific-glassware', 't4-mechanical-lathe-machine-tool-reconstruction', 't3-lead-acid-battery'],
    unlocks: ['t6-vacuum-tube-triode-rf-telecommunications'],
    description: 'Bamboo carbonization, copper-platinum glass pin seals, Sprengel mercury pump 10^-5 torr vacuum.'
  },
  {
    id: 't3-dr-stone-scientific-reconstruction-roadmap',
    name: 'Kingdom of Science Roadmap',
    tier: 5,
    category: 'Chemical Synthesis',
    prereqs: ['t2-primitive-forge', 't3-saltpeter-black-powder', 't5-chloralkali-industrial-acids-vitriol'],
    unlocks: ['t3-lead-acid-battery', 't4-silicon-semiconductor-fabrication', 't4-crystal-radio-receiver'],
    description: 'Senku zero-to-industrial roadmap: sulfuric acid distillation, lab glassblowing, and sulfa drug synthesis.'
  },
  {
    id: 't3-lead-acid-battery',
    name: 'Planté Reversible Storage Cell',
    tier: 5,
    category: 'Electrical Storage',
    prereqs: ['t3-pelton-water-turbine', 't3-savonius-wind-turbine', 't3-dr-stone-scientific-reconstruction-roadmap'],
    unlocks: ['t4-crystal-radio-receiver', 't4-silicon-semiconductor-fabrication', 't5-edison-carbon-filament-vacuum-lamp'],
    description: 'Reversible lead-acid secondary cells for continuous off-grid DC energy storage and grid buffering.'
  },
  {
    id: 't4-silicon-semiconductor-fabrication',
    name: 'Silicon Semiconductor Fab',
    tier: 5,
    category: 'Solid-State Electronics',
    prereqs: ['t2-primitive-forge', 't3-lead-acid-battery', 't3-dr-stone-scientific-reconstruction-roadmap'],
    unlocks: ['t6-c-programming-kernel-systems-architecture', 't4-neural-network-from-scratch', 't4-python-programming-language-handbook'],
    description: 'Quartz sand reduction, Czochralski monocrystal pulling, planar lithography, and MOSFET logic gates.'
  },

  // Tier 6
  {
    id: 't6-vacuum-tube-triode-rf-telecommunications',
    name: 'Vacuum Tube Triode & RF Transmitter',
    tier: 6,
    category: 'Telecommunications',
    prereqs: ['t5-edison-carbon-filament-vacuum-lamp', 't4-crystal-radio-receiver'],
    unlocks: ['t4-silicon-semiconductor-fabrication'],
    description: 'De Forest Audion control grid, Hartley RF LC oscillator tank, AM plate modulation, and audio amplification.'
  },
  {
    id: 't6-papermaking-movable-type-printing-press',
    name: 'Archival Papermaking & Printing Press',
    tier: 6,
    category: 'Law & Governance',
    prereqs: ['t2-biome-settlement-colonization-homesteading', 't4-mechanical-lathe-machine-tool-reconstruction'],
    unlocks: ['t4-law-justice-governance', 't4-sacred-texts-and-moral-philosophy'],
    description: 'Rag fiber maceration, wire deckle screens, oak gallotannate iron ink, and lead-antimony type casting.'
  },
  {
    id: 't6-c-programming-kernel-systems-architecture',
    name: 'C Programming & Bare-Metal OS Kernel',
    tier: 6,
    category: 'Computing & Software',
    prereqs: ['t4-silicon-semiconductor-fabrication'],
    unlocks: ['t4-python-programming-language-handbook'],
    description: 'x86_64 bootloader assembly, GDT, interrupt descriptor tables, virtual memory paging, and preemption.'
  },
  {
    id: 't4-crystal-radio-receiver',
    name: 'Zero-Power Galena Radio',
    tier: 6,
    category: 'Telecommunications',
    prereqs: ['t3-lead-acid-battery', 't3-dr-stone-scientific-reconstruction-roadmap'],
    unlocks: ['t6-vacuum-tube-triode-rf-telecommunications', 't4-neural-network-from-scratch'],
    description: 'Passive electromagnetic reception, antenna inductance tuning, and point-contact diode demodulation.'
  },
  {
    id: 't4-universal-constants-measurement',
    name: 'Universal Physical Metrology',
    tier: 6,
    category: 'Physical Metrology',
    prereqs: [],
    unlocks: ['t4-celestial-navigation-sextant', 't4-python-programming-language-handbook'],
    description: 'Reconstruction of SI metric standards (meter, second, kilogram) from immutable physical constants.'
  },
  {
    id: 't4-celestial-navigation-sextant',
    name: 'Celestial Sextant Navigation',
    tier: 6,
    category: 'Astronomy & Navigation',
    prereqs: ['t4-universal-constants-measurement'],
    unlocks: [],
    description: 'Solar noon meridian gnomon angles and Polaris sights for exact geographical coordinate determination.'
  },
  {
    id: 't4-python-programming-language-handbook',
    name: 'Python Systems Architecture',
    tier: 6,
    category: 'Computing & Software',
    prereqs: ['t6-c-programming-kernel-systems-architecture', 't4-universal-constants-measurement'],
    unlocks: ['t4-neural-network-from-scratch'],
    description: 'Core syntax, data structures, algorithms, operating system wrappers, and computation pipelines.'
  },
  {
    id: 't4-neural-network-from-scratch',
    name: 'Neural Models & Artificial Intel',
    tier: 6,
    category: 'Computing & Software',
    prereqs: ['t4-silicon-semiconductor-fabrication', 't4-python-programming-language-handbook'],
    unlocks: [],
    description: 'Vector calculus, backpropagation, matrix tensor multiplication, and self-attention transformers.'
  },
  {
    id: 't4-law-justice-governance',
    name: 'Foundations of Law & Justice',
    tier: 6,
    category: 'Law & Governance',
    prereqs: ['t2-biome-settlement-colonization-homesteading', 't6-papermaking-movable-type-printing-press'],
    unlocks: ['t4-sacred-texts-and-moral-philosophy', 't4-military-organization-ranks-fleet-doctrine'],
    description: 'Codified jurisprudence from Hammurabi to Magna Carta: property rights, arbitration, and civil contracts.'
  },
  {
    id: 't4-sacred-texts-and-moral-philosophy',
    name: 'Universal Ethics & Philosophy',
    tier: 6,
    category: 'Moral Philosophy',
    prereqs: ['t4-law-justice-governance', 't6-papermaking-movable-type-printing-press'],
    unlocks: [],
    description: 'Civilizational ethical bedrock: core human duties, virtue ethics, and societal preservation doctrines.'
  }
];

interface TechTreeVisualizerProps {
  nightVision: boolean;
  onOpenGuide: (guideId: string) => void;
}

export const TechTreeVisualizer: React.FC<TechTreeVisualizerProps> = ({ nightVision, onOpenGuide }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('t1-dakota-fire-hole');

  const selectedNode = TECH_NODES.find(n => n.id === selectedNodeId) || TECH_NODES[0];

  const getTierColor = (t: number) => {
    return TIER_HEADERS[t]?.color || '#cbd5e1';
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div
        className={`p-5 rounded-2xl border transition-colors ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0d1117] to-[#161b22] border-zinc-800 text-zinc-100 shadow-xl'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <GitBranch className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono tracking-tight">6-Epoch Technological Tree</h2>
            <p className="text-xs text-zinc-400 font-mono">
              Civilizational dependency matrix from emergency triage to advanced computation
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Technologies build systematically upon foundational discoveries: basic firecraft and sanitation enable settlement and agriculture, which supply the resources for blast kilns and metallurgy. Metal mastery fuels kinetic engines and chemical synthesis, culminating in solid-state computing, telecommunications, and codified civil law.
        </p>
      </div>

      {/* Selected Node Inspector Pane */}
      {selectedNode && (
        <div
          className={`p-5 rounded-2xl border space-y-3 transition-colors ${
            nightVision
              ? 'bg-[#120303] border-red-900/60'
              : 'bg-[#0f141c] border-amber-500/40 shadow-lg'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                style={{
                  color: getTierColor(selectedNode.tier),
                  backgroundColor: `${getTierColor(selectedNode.tier)}15`,
                  borderColor: `${getTierColor(selectedNode.tier)}40`
                }}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border uppercase"
              >
                TIER {selectedNode.tier} • {selectedNode.category}
              </span>
              <h3 className="text-base font-bold font-mono text-white">
                {selectedNode.name}
              </h3>
            </div>

            <button
              onClick={() => onOpenGuide(selectedNode.id)}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Full Blueprint</span>
            </button>
          </div>

          <p className="text-xs text-zinc-300 font-sans leading-relaxed">
            {selectedNode.description}
          </p>

          {/* Prereqs & Unlocks pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-800">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                Required Prerequisite Technologies:
              </span>
              {selectedNode.prereqs.length === 0 ? (
                <span className="text-xs font-mono text-emerald-400">★ Fundamental Baseline (No Prereqs)</span>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.prereqs.map(pId => {
                    const prereq = TECH_NODES.find(n => n.id === pId);
                    return (
                      <button
                        key={pId}
                        onClick={() => setSelectedNodeId(pId)}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-amber-400 transition-colors"
                      >
                        ← {prereq?.name || pId}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                Unlocks Subsequent Technologies:
              </span>
              {selectedNode.unlocks.length === 0 ? (
                <span className="text-xs font-mono text-zinc-500">Terminal Tech Branch</span>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.unlocks.map(uId => {
                    const unlock = TECH_NODES.find(n => n.id === uId);
                    return (
                      <button
                        key={uId}
                        onClick={() => setSelectedNodeId(uId)}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-emerald-900/60 text-emerald-300 hover:border-emerald-400 transition-colors"
                      >
                        → {unlock?.name || uId}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* The 6-Tier Interactive Grid */}
      <div className="space-y-6">
        {[1, 2, 3, 4, 5, 6].map(tierNum => {
          const tierNodes = TECH_NODES.filter(n => n.tier === tierNum);
          const meta = TIER_HEADERS[tierNum];
          const tierColor = meta?.color || '#cbd5e1';

          return (
            <div key={tierNum} className="space-y-2.5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    style={{ color: tierColor, borderColor: `${tierColor}50`, backgroundColor: `${tierColor}10` }}
                    className="px-2 py-0.5 rounded text-[11px] font-mono font-bold border tracking-wider uppercase"
                  >
                    TIER {tierNum}
                  </span>
                  <span className="text-xs font-mono font-semibold text-zinc-200">
                    {meta.title.split(': ')[1] || meta.title}
                  </span>
                  <span className="hidden sm:inline text-[11px] font-mono text-zinc-500">
                    ({meta.subtitle.split(' • ')[0]})
                  </span>
                </div>
                <div className="h-px bg-zinc-800 flex-1 ml-2" />
                <span className="text-[10px] font-mono text-zinc-500">
                  {tierNodes.length} {tierNodes.length === 1 ? 'node' : 'nodes'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {tierNodes.map(node => {
                  const isSelected = selectedNodeId === node.id;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all relative ${
                        isSelected
                          ? nightVision
                            ? 'bg-red-950/60 border-red-500 text-white ring-2 ring-red-500'
                            : 'bg-zinc-900 border-amber-400 text-white shadow-lg ring-2 ring-amber-400/40'
                          : 'bg-[#0d1117] border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          style={{ color: tierColor }}
                          className="text-[10px] font-mono font-bold uppercase truncate max-w-[80%]"
                        >
                          {node.category}
                        </span>
                        {node.prereqs.length === 0 ? (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Baseline Tech" />
                        ) : (
                          <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                            {node.prereqs.length} req
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold font-mono leading-tight text-zinc-100">
                        {node.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-sans mt-1 line-clamp-2 leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
