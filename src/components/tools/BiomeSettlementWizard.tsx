import React, { useState } from 'react';
import {
  Compass,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Layers,
  Sprout,
  Shield,
  Home,
  Droplet,
  Flame,
  ArrowRight
} from 'lucide-react';

interface BiomeSettlementWizardProps {
  nightVision: boolean;
}

type BiomeType = 'wetland' | 'snowy' | 'plains' | 'desert' | 'tropical';
type SoilType = 'clay' | 'sand' | 'rocky' | 'loam';
type WaterType = 'surface' | 'high_ground' | 'deep_well' | 'ephemeral';

interface BiomeProfile {
  name: string;
  hazard: string;
  sitingRule: string;
  shelterType: string;
  foundation: string;
  roofPitch: string;
  sanitation: string;
  fencing: string;
  soilAmendment: string;
  topCrops: string[];
  day1_7: string;
  day8_30: string;
  month2_6: string;
  year1: string;
}

export const BiomeSettlementWizard: React.FC<BiomeSettlementWizardProps> = ({ nightVision }) => {
  const [selectedBiome, setSelectedBiome] = useState<BiomeType>('wetland');
  const [selectedSoil, setSelectedSoil] = useState<SoilType>('clay');
  const [selectedWater, setSelectedWater] = useState<WaterType>('high_ground');

  const BIOME_PROFILES: Record<BiomeType, BiomeProfile> = {
    wetland: {
      name: 'Damp, Swampy & Riparian Land',
      hazard: 'Seasonal flooding, waterborne pathogens (cholera/typhoid), timber rot, and malaria vectors.',
      sitingRule: 'Locate 100-year flood watermark on tree trunks. Build exclusively on highest knolls above flood line.',
      shelterType: 'Post-and-beam elevated on rot-resistant fire-charred pilings with slatted airflow flooring.',
      foundation: 'Driven charred oak/locust pilings into stiff clay or bedrock (1.0m–1.5m clearance above grade).',
      roofPitch: '45°+ steep pitch with 1m overhang eaves to channel torrential downpours away from foundation.',
      sanitation: 'CRITICAL: ZERO PIT LATRINES. Must use elevated aerobic composting dry-toilet with sawdust.',
      fencing: 'Woven wattle hurdle fence (willow/hazel) with crushed stone drainage trench along perimeter.',
      soilAmendment: 'Heavy drainage swales. Construct Aztec Chinampas (raised beds piled with anaerobic river muck).',
      topCrops: ['Taro & Dasheen', 'Wild Rice (Zizania)', 'Sweet Potatoes', 'Watercress', 'Duck & Carp Aquaculture'],
      day1_7: 'Map high-water mark; dig preliminary drainage ditches; establish elevated sawdust composting toilet.',
      day8_30: 'Drive fire-charred timber piles; erect elevated floor platform; install 45° pitched rain-catchment roof.',
      month2_6: 'Construct chinampa raised beds; introduce duck flock for weed/snail parasite control; dig French drains.',
      year1: 'Build permanent stone-pier foundation upgrades; plant woven willow windbreaks; construct smoked-fish smokehouse.'
    },
    snowy: {
      name: 'Snowy, Boreal & Alpine Taiga',
      hazard: 'Lethal hypothermia, 7-month frozen ground, structural roof collapse under snow, chimney fires.',
      sitingRule: 'South-to-southeast slope at mid-elevation (Thermal Belt); avoid valley bottoms (frost hollows).',
      shelterType: 'Earth-bermed log cabin with central masonry thermal stove and dual-door airlock entry.',
      foundation: 'Stone piers excavated 30cm BELOW frost line (1.2m–1.8m deep) to prevent frost-heave rupture.',
      roofPitch: '50°–60° steep pitch to shed tons of heavy wet snow naturally under gravity.',
      sanitation: 'Deep trench latrine excavated in mid-summer before ground freezes into impenetrable permafrost.',
      fencing: 'Post-and-rail timber fence with dry-stack boulder base; clear 30m wildfire and falling tree buffer.',
      soilAmendment: 'Add crushed limestone (CaCO3) and wood ash to neutralize acidic pine needle soil (podzol).',
      topCrops: ['Winter Cabbage', 'Rutabagas & Turnips', 'Cold-Hardy Kale', 'Early Russian Potatoes', 'Rye & Oats'],
      day1_7: 'Locate south-facing thermal slope; fell initial timber; dig emergency trench latrine before freeze.',
      day8_30: 'Erect earth-bermed log shelter; construct central stone rocket mass heater; install double-door airlock.',
      month2_6: 'Buck and split 10 to 15 cords of firewood (must dry to <20% moisture); excavate subterranean root cellar.',
      year1: 'Expand permanent livestock winter barn; harvest first root crop into cellar; bank soil against north walls.'
    },
    plains: {
      name: 'Grassy Plains, Prairie & Steppe',
      hazard: '80+ km/h wind shear, complete absence of timber, fast-moving grass wildfires, hail storms.',
      sitingRule: 'Leeward side of low ridges; grade a 10m bare-mineral-earth circle around settlement as a firebreak.',
      shelterType: 'Sod-brick masonry (cut 30x10cm prairie root bricks) or semi-subterranean dugout shelter.',
      foundation: 'Tamped gravel trench foundation with shallow sod-layer footing (60cm–100cm wall thickness).',
      roofPitch: '30° low aerodynamic hip roof with turf grass overlay to deflect prairie wind gales.',
      sanitation: 'Deep-drilled borehole or trench latrine placed 50m downwind and down-gradient from well.',
      fencing: 'Living thorny hedgerow (Osage Orange / Hawthorn) backed by ditch-and-berm earthworks.',
      soilAmendment: 'Deep moldboard plowing to invert dense sod slab; allow 6 months for root nitrogen decomposition.',
      topCrops: ['Hard Red Winter Wheat', 'Grain Sorghum', 'Barley & Rye', 'Flint Corn', 'Sunflowers (Oil & Seed)'],
      day1_7: 'Plow or scrape 10m wide bare-earth firebreak circle; establish emergency windbreak stakes and tarps.',
      day8_30: 'Cut prairie sod bricks; construct thick-walled sod house with timber/pole ridge beam; dig rainwater cistern.',
      month2_6: 'Plant 3-row shelterbelt trees (shrubs, poplars, conifers); plow primary grain acreage; fence livestock.',
      year1: 'Establish deep tube-well; construct permanent grain crib; layer living thorny boundary hedgerows.'
    },
    desert: {
      name: 'Arid & Semi-Arid Desert Scrub',
      hazard: 'Severe water scarcity, lethal flash floods in dry washes, extreme day/night 35°C temperature swings.',
      sitingRule: 'Elevated rocky benches at least 5m above dry canyon arroyos (never camp in dry stream beds).',
      shelterType: 'Thick unbaked adobe clay brick (40cm walls) providing 8–10 hour thermal lag against desert extremes.',
      foundation: 'Dry rubble stone footing with lime mortar; raised 20cm above grade to prevent adobe rain melt.',
      roofPitch: 'Slight 5°–10° slope draining to underground covered cistern; large overhanging eaves for wall shade.',
      sanitation: 'Dry solar-kiln composting latrine utilizing desert UV radiation for pathogen desiccation.',
      fencing: 'Dry-stack desert stone wall topped with thorny mesquite brush or ocotillo living cactus fence.',
      soilAmendment: 'Heavy 15cm organic sheet mulch to prevent capillary salt draw; dig contour water swales.',
      topCrops: ['Tepary Beans (Thrives at 45°C)', 'Grain Sorghum', 'Cowpeas (Black-Eyed)', 'Pomegranate & Fig', 'Prickly Pear (Nopal)'],
      day1_7: 'Locate high rocky bench above flash flood line; map contour lines for rainwater swales; dig shade pit.',
      day8_30: 'Form and sun-cure 500 adobe bricks (70% sand, 30% clay, straw); construct sealed underground cistern.',
      month2_6: 'Excavate contour swales across hillside to sink flash rainwater; apply 15cm mulch; plant drought crops.',
      year1: 'Erect Persian badgir windcatcher tower for passive natural cooling; build dry-stack stone perimeter.'
    },
    tropical: {
      name: 'Humid Tropical & Jungle Rainforest',
      hazard: 'Extreme humidity, wood-eating termites, torrential monsoon rains, soil mineral leaching, venomous snakes.',
      sitingRule: 'High well-drained ridge; clear immediate canopy to allow sunlight penetration and wind drying.',
      shelterType: 'Open-lattice bamboo pole shelter on 2m stilts with 360° ventilation and deep palm-thatch eaves.',
      foundation: 'Hardwood rot-resistant pilings (teak, ironwood) fitted with smooth termite collar discs.',
      roofPitch: '50°+ high-pitch palm-frond thatch with 1.2m eaves to shed daily monsoons clear of living deck.',
      sanitation: 'Elevated composting chamber with biochar and dry wood chips; never let effluent pool in rain.',
      fencing: 'Living fenceposts of quick-rooting ficus/gliricidia wired with thorny bamboo or acacia barriers.',
      soilAmendment: 'CRITICAL: Terra Preta practice. Slash-and-char biochar + animal manure + bone meal worked into topsoil.',
      topCrops: ['Cassava / Yuca (Boil to detoxify)', 'Cooking Bananas & Plantains', 'Breadfruit & Papaya', 'Moringa (27% protein)', 'Sweet Potatoes'],
      day1_7: 'Clear ridge knoll; dig perimeter storm-water swales; erect temporary raised bamboo sleeping platforms.',
      day8_30: 'Drive rot-hardened stilt posts; build woven bamboo lattice living quarters with steep thatched roof.',
      month2_6: 'Synthesize Terra Preta biochar beds; plant perennial 7-layer food forest; install termite metal collars.',
      year1: 'Establish mature banana/cassava groves; replace thatch roof layers; construct elevated chicken roosts.'
    }
  };

  const currentProfile = BIOME_PROFILES[selectedBiome];

  // Specific dynamic warning based on combination
  const getCombinationWarning = () => {
    if (selectedBiome === 'wetland' && selectedSoil === 'clay') {
      return 'CRITICAL WARNING: Saturated clay has zero percolation. Any pit latrine or septic hole will pool contaminated effluent on the surface, causing immediate dysentery/cholera outbreaks. You must use elevated aerobic dry-composting.';
    }
    if (selectedBiome === 'desert' && selectedWater === 'surface') {
      return 'FLASH FLOOD HAZARD: Surface water in arid terrain indicates a wash or drainage corridor. Expect violent, sudden torrents from distant storms without local warning. Relocate living quarters at least 5m vertically above stream bed.';
    }
    if (selectedBiome === 'snowy' && selectedSoil === 'sand') {
      return 'FROST-HEAVE CAUTION: Coarse sand drains well, but freezing groundwater can shift stone pads. Ensure footing posts are anchored deep into bedrock or well below 1.5m freeze line.';
    }
    if (selectedBiome === 'tropical' && selectedSoil === 'clay') {
      return 'ACIDIC LATERITE ALERT: Tropical clay will bake into hard brick under direct sun and leach phosphorus rapidly. Do not plow bare soil; keep ground permanently covered with biochar and perennial living mulch.';
    }
    if (selectedBiome === 'plains' && selectedWater === 'deep_well') {
      return 'WATER LOGISTICS NOTE: Deep prairie aquifers require heavy manual lever winches or wind-powered mechanical pump jacks. Prioritize massive rainwater roof catchment cisterns during initial construction.';
    }
    return 'NOMINAL CONSTRAINTS: Standard civil engineering rules apply. Prioritize the 30m uphill separation between potable water and animal/human waste.';
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div
        className={`p-5 rounded-2xl border transition-colors ${
          nightVision
            ? 'bg-[#150303] border-red-950 text-red-100'
            : 'bg-gradient-to-br from-[#0d1117] to-[#161b22] border-zinc-800 text-zinc-100 shadow-xl'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono tracking-tight">Biome Settlement &amp; Homesteading Wizard</h2>
            <p className="text-xs text-zinc-400 font-mono">
              Civil engineering, sanitation zoning &amp; soil conditioning planner by terrain
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Select your geographic ecosystem, native soil texture, and water access to generate an actionable, chronological Day 1 to Year 1 colonization blueprint customized for your exact land conditions.
        </p>
      </div>

      {/* Interactive Selection Grid */}
      <div className="space-y-4">
        {/* 1. Biome Selection */}
        <div>
          <label className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            1. Select Geographic Biome / Land Type:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'wetland', label: 'Wetland / Swamp', sub: 'High Water Table' },
              { id: 'snowy', label: 'Snowy / Boreal', sub: 'Alpine / Sub-Arctic' },
              { id: 'plains', label: 'Grassy Plains', sub: 'Prairie / Steppe' },
              { id: 'desert', label: 'Arid / Desert', sub: 'Dry Scrub / Wash' },
              { id: 'tropical', label: 'Tropical Jungle', sub: 'Rainforest / Humid' },
            ].map(b => (
              <button
                key={b.id}
                onClick={() => setSelectedBiome(b.id as BiomeType)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedBiome === b.id
                    ? nightVision
                      ? 'bg-red-950/70 border-red-500 text-white shadow-lg'
                      : 'bg-zinc-900 border-amber-500 text-white shadow-lg'
                    : 'bg-[#0d1117] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="text-xs font-bold font-mono">{b.label}</div>
                <div className="text-[10px] text-zinc-500 font-mono truncate">{b.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Soil Texture Selection */}
        <div>
          <label className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5 text-amber-400" />
            2. Native Soil Composition (Ribbon Test):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'clay', label: 'Heavy Clay', desc: '> 5cm Ribbon, Sticky' },
              { id: 'sand', label: 'Loose Sand', desc: 'Gritty, Zero Ribbon' },
              { id: 'rocky', label: 'Rocky / Thin', desc: 'Shallow Bedrock' },
              { id: 'loam', label: 'Balanced Loam', desc: '2.5–5cm Ribbon, Crumbly' },
            ].map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSoil(s.id as SoilType)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedSoil === s.id
                    ? nightVision
                      ? 'bg-red-950/70 border-red-500 text-white'
                      : 'bg-zinc-900 border-amber-500 text-white'
                    : 'bg-[#0d1117] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="text-xs font-bold font-mono">{s.label}</div>
                <div className="text-[10px] text-zinc-500 font-mono truncate">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Water Source Selection */}
        <div>
          <label className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
            <Droplet className="w-3.5 h-3.5 text-amber-400" />
            3. Primary Water Access:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'high_ground', label: 'High Water Table', desc: '< 2m Underground' },
              { id: 'surface', label: 'Surface Stream / River', desc: 'Active Running Water' },
              { id: 'deep_well', label: 'Deep Aquifer', desc: '> 10m Below Surface' },
              { id: 'ephemeral', label: 'Rain Catchment Only', desc: 'Rare/Seasonal Rain' },
            ].map(w => (
              <button
                key={w.id}
                onClick={() => setSelectedWater(w.id as WaterType)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedWater === w.id
                    ? nightVision
                      ? 'bg-red-950/70 border-red-500 text-white'
                      : 'bg-zinc-900 border-amber-500 text-white'
                    : 'bg-[#0d1117] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="text-xs font-bold font-mono">{w.label}</div>
                <div className="text-[10px] text-zinc-500 font-mono truncate">{w.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Warning Alert */}
      <div
        className={`p-4 rounded-xl border flex items-start gap-3 ${
          nightVision
            ? 'bg-red-950/30 border-red-900 text-red-200'
            : 'bg-amber-950/20 border-amber-500/40 text-amber-200'
        }`}
      >
        <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />
        <div className="space-y-1">
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">
            Site-Specific Hazard Warning
          </div>
          <p className="text-xs leading-relaxed">{getCombinationWarning()}</p>
        </div>
      </div>

      {/* Engineering Specs Matrix */}
      <div
        className={`p-5 rounded-2xl border space-y-4 ${
          nightVision ? 'bg-[#0f0404] border-red-950' : 'bg-[#0d1117] border-zinc-800'
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <span className="text-sm font-bold font-mono text-zinc-200 flex items-center gap-2">
            <Home className="w-4 h-4 text-amber-400" />
            Engineering &amp; Architectural Specifications: {currentProfile.name}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
            Verified Blueprint
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="space-y-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-400 text-[11px] block">1. Siting &amp; Microclimate Rule:</span>
            <p className="text-zinc-200 font-sans">{currentProfile.sitingRule}</p>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-400 text-[11px] block">2. Foundation Depth &amp; Type:</span>
            <p className="text-zinc-200 font-sans">{currentProfile.foundation}</p>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-400 text-[11px] block">3. Roof Pitch &amp; Snow/Rain Shed:</span>
            <p className="text-zinc-200 font-sans">{currentProfile.roofPitch}</p>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-400 text-[11px] block">4. Sanitation &amp; Latrine Protocol:</span>
            <p className="text-amber-300 font-sans font-bold">{currentProfile.sanitation}</p>
          </div>

          <div className="space-y-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 sm:col-span-2">
            <span className="text-zinc-400 text-[11px] block">5. Soil Chemistry &amp; Drainage Engineering:</span>
            <p className="text-zinc-200 font-sans">{currentProfile.soilAmendment}</p>
          </div>
        </div>
      </div>

      {/* Chronological Action Timeline */}
      <div
        className={`p-5 rounded-2xl border space-y-4 ${
          nightVision ? 'bg-[#0f0404] border-red-950' : 'bg-[#0d1117] border-zinc-800'
        }`}
      >
        <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-bold font-mono text-zinc-200">
            Chronological Settlement Action Checklist
          </span>
        </div>

        <div className="space-y-3">
          {[
            { phase: 'Phase 1 (Day 1–7)', title: 'Microclimate, Water & Sanitation', desc: currentProfile.day1_7, icon: Droplet },
            { phase: 'Phase 2 (Day 8–30)', title: 'Primary Structural Shelter', desc: currentProfile.day8_30, icon: Home },
            { phase: 'Phase 3 (Month 2–6)', title: 'Soil Conditioning & Food Runway', desc: currentProfile.month2_6, icon: Sprout },
            { phase: 'Phase 4 (Year 1)', title: 'Boundaries, Barns & Permanent Fortification', desc: currentProfile.year1, icon: Shield },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-zinc-800/60 text-amber-400 flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-400 font-bold">{item.phase}</span>
                    <span className="text-[10px] font-mono text-zinc-500">{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optimal Caloric Crops */}
      <div
        className={`p-5 rounded-2xl border space-y-3 ${
          nightVision ? 'bg-[#0f0404] border-red-950' : 'bg-[#0d1117] border-zinc-800'
        }`}
      >
        <span className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
          <Sprout className="w-3.5 h-3.5 text-emerald-400" />
          Top 5 Recommended Caloric Runway Crops for {currentProfile.name}:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {currentProfile.topCrops.map((crop, cIdx) => (
            <div
              key={cIdx}
              className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/80 text-center flex flex-col items-center justify-center gap-1"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold font-mono text-zinc-200">{crop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
