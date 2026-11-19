---
id: t2-wood-ash-soapmaking
tier: 3
tier_name: Tier 2 - Agrarian & Pre-Industrial
title: Wood Ash Lye & Saponification
category: "Chemical Hygiene"
read_time: 6 min
difficulty: Medium
tags: chemistry, soap, lye, hygiene, sanitation, potassium hydroxide, tallow
summary: Synthesize caustic potassium hydroxide ($KOH$) lye by leaching hardwood campfire ash through rainwater, and saponify rendered animal fat into true antimicrobial soap.
---

## Saponification Chemistry
Soap is the single most effective intervention in human medical history, responsible for dropping infant mortality by **over 70%**. Soap is synthesized through base hydrolysis of triglycerides (fats/oils). Potassium carbonate ($K_2CO_3$) present in hardwood ash dissolves in soft water to produce a concentrated alkaline lye solution:

$$\text{Triglyceride (Fat)} + 3\,KOH \longrightarrow \text{Glycerol} + 3\,\text{Potassium Carboxylate (Soap)}$$

```svg
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#52525b"/>
      <stop offset="100%" stop-color="#27272a"/>
    </linearGradient>
    <linearGradient id="lyeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="360" fill="#090d16" rx="8"/>

  <!-- Left: Ash Leaching Hopper Barrel -->
  <g transform="translate(40, 40)">
    <rect x="0" y="0" width="180" height="260" rx="6" fill="#18181b" stroke="#71717a" stroke-width="2"/>
    <text x="90" y="24" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. ASH LEACH HOPPER</text>

    <!-- Rainwater inlet -->
    <path d="M70 35 L110 35 L100 55 L80 55 Z" fill="#38bdf8"/>
    <text x="90" y="50" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle">Rainwater</text>

    <!-- Hardwood Ash Layer -->
    <rect x="15" y="60" width="150" height="90" fill="url(#ashGrad)" stroke="#3f3f46"/>
    <text x="90" y="105" fill="#e4e4e7" font-size="10" font-family="monospace" text-anchor="middle">Clean Hardwood Ash</text>
    <text x="90" y="120" fill="#a1a1aa" font-size="8" font-family="monospace" text-anchor="middle">(Oak, Hickory, Beech)</text>

    <!-- Straw & Pebble Filter Bed -->
    <rect x="15" y="150" width="150" height="25" fill="#ca8a04" opacity="0.6"/>
    <text x="90" y="167" fill="#fef08a" font-size="9" font-family="monospace" text-anchor="middle">Straw Filter Layer</text>
    <rect x="15" y="175" width="150" height="20" fill="#52525b"/>
    <text x="90" y="190" fill="#d4d4d8" font-size="9" font-family="monospace" text-anchor="middle">Clean River Gravel</text>

    <!-- Spigot Drip into Catchment -->
    <path d="M85 220 L95 220 L90 250 Z" fill="#f59e0b"/>
    <rect x="55" y="235" width="70" height="30" rx="3" fill="#27272a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="90" y="253" fill="#fde68a" font-size="9" font-family="monospace" text-anchor="middle">Raw Lye (KOH)</text>
  </g>

  <!-- Middle: The Egg Float Density Assay -->
  <g transform="translate(260, 40)">
    <rect x="0" y="0" width="170" height="260" rx="6" fill="#18181b" stroke="#f59e0b" stroke-width="2"/>
    <text x="85" y="24" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. EGG FLOAT TEST</text>
    <text x="85" y="40" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Specific Gravity Check</text>

    <!-- Glass/Jar of Lye -->
    <rect x="35" y="60" width="100" height="130" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="37" y="100" width="96" height="88" fill="url(#lyeGrad)" opacity="0.7"/>

    <!-- Floating Egg -->
    <ellipse cx="85" cy="100" rx="16" ry="24" fill="#fed7aa" stroke="#fb923c" stroke-width="1.5"/>
    <line x1="85" y1="76" x2="85" y2="100" stroke="#ef4444" stroke-width="2"/>
    <text x="85" y="70" fill="#fca5a5" font-size="9" font-family="monospace" text-anchor="middle">Quarter-Sized Tip</text>

    <!-- Criteria Box -->
    <rect x="15" y="200" width="140" height="50" rx="4" fill="#090d16"/>
    <text x="85" y="218" fill="#86efac" font-size="9" font-family="monospace" text-anchor="middle">IF SINK: Boil to boil off</text>
    <text x="85" y="232" fill="#86efac" font-size="9" font-family="monospace" text-anchor="middle">excess water (concentrate)</text>
    <text x="85" y="244" fill="#fde68a" font-size="8" font-family="monospace" text-anchor="middle">Target SG: ~1.28</text>
  </g>

  <!-- Right: Saponification Kettle -->
  <g transform="translate(470, 40)">
    <rect x="0" y="0" width="190" height="260" rx="6" fill="#18181b" stroke="#10b981" stroke-width="2"/>
    <text x="95" y="24" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. HEATED CAULDRON</text>
    <text x="95" y="40" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Tallow + Lye Emulsion</text>

    <!-- Iron Pot -->
    <path d="M35 110 Q95 200 155 110 Z" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
    <ellipse cx="95" cy="110" rx="60" ry="12" fill="#ca8a04"/>
    <text x="95" y="145" fill="#fef08a" font-size="10" font-family="monospace" text-anchor="middle">Hot Emulsion</text>
    <text x="95" y="160" fill="#f8fafc" font-size="8" font-family="monospace" text-anchor="middle">Stir Continuously</text>

    <!-- Flame under pot -->
    <path d="M75 190 Q95 160 100 190 Q115 165 115 190 Z" fill="#ef4444"/>

    <!-- Finished Soap Output -->
    <rect x="25" y="205" width="140" height="42" rx="4" fill="#090d16" stroke="#10b981" stroke-width="1"/>
    <text x="95" y="222" fill="#86efac" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">TRACE STATE (3-5 Hours)</text>
    <text x="95" y="238" fill="#d4d4d8" font-size="8" font-family="monospace" text-anchor="middle">Pour into wooden molds.</text>
  </g>

  <rect x="40" y="315" width="620" height="30" rx="4" fill="#2e1010" stroke="#ef4444" stroke-width="1"/>
  <text x="350" y="334" fill="#fca5a5" font-size="9.5" font-family="monospace" text-anchor="middle">CAUTION: Never use aluminum pots (lye releases explosive H2 gas). Use iron, enamel, or clay only.</text>
</svg>
```

## Production Protocol
1. **Ash Selection:** Burn dry hardwoods (Oak, Maple, Hickory, Beech, Ash). **Never use pine, spruce, or softwoods** (they yield resinous sap and minimal potassium). Sift ash to remove charcoal chunks.
2. **The Leach Barrel:** Drill small drainage holes into the base of a 200-liter wooden or food-grade plastic barrel. Layer 5 cm of clean gravel, 5 cm of clean straw, then fill with compressed wood ash.
3. **Leaching Runoff:** Slowly pour soft rainwater over the ash. Collect the amber liquid draining from the base. Re-pour the first run through the hopper 2–3 times to maximize potassium concentration.
4. **The Egg Float Density Check:** Drop a fresh potato or raw egg into the lye. If it floats revealing a quarter-sized patch above the surface, concentration is ideal (approx. $13\%\text{ to }15\%\text{ KOH}$). If it sinks, boil the lye gently in an iron pot to evaporate water until the egg floats.
5. **Rendering Fat:** Melt scrap animal tallow (beef suet or pork fat) with water, strain out gristle and membrane, and allow pure white fat to solidify on top.
6. **Saponification Stirring:** Warm rendered fat to 50°C. In a separate iron pot, heat lye to 50°C. Pour lye slowly into the melted fat in a 1:2 volume ratio while stirring continuously in one direction.
7. **Trace & Curing:** Continue low-heat simmering and stirring until the liquid thickens to the consistency of warm pudding (the "trace" stage). Pour into cloth-lined wooden molds. Allow to cure in a dry room for **4 to 6 weeks** so excess caustic lye completely reacts and mellows into skin-safe antimicrobial soap.
