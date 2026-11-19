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
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="soapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="soapAshGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#52525b"/>
      <stop offset="50%" stop-color="#3f3f46"/>
      <stop offset="100%" stop-color="#27272a"/>
    </linearGradient>

    <linearGradient id="soapLyeAmber" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#b45309" stop-opacity="0.95"/>
    </linearGradient>

    <linearGradient id="soapEmulsion" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>

    <!-- Marker -->
    <marker id="soapArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#soapGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#f59e0b"/>
  <text x="60" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">WOOD-ASH LYE EXTRACTION &amp; SAPONIFICATION SYNTHESIS</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">HARDWOOD K2CO3 LEACHING ➔ SPECIFIC GRAVITY ASSAY (SG ~1.28) ➔ TRIGLYCERIDE BASE HYDROLYSIS</text>

  <!-- Connector Arrows between Panels -->
  <line x1="265" y1="210" x2="285" y2="210" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#soapArrow)"/>
  <line x1="535" y1="210" x2="555" y2="210" stroke="#10b981" stroke-width="2.5" marker-end="url(#soapArrow)"/>

  <!-- ================= PANEL 1: ASH LEACH HOPPER ================= -->
  <g transform="translate(25, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#f59e0b" stroke-width="1.5"/>
    
    <!-- Step Badge ❶ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#b45309"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❶</text>
    <text x="44" y="26" fill="#fde68a" font-size="10" font-weight="bold" font-family="sans-serif">Ash Leach Hopper</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Hardwood Rainwater Extraction</text>

    <!-- 200L Wooden Leach Barrel Cutaway -->
    <rect x="30" y="55" width="180" height="185" rx="5" fill="#18181b" stroke="#71717a" stroke-width="1.5"/>
    
    <!-- Rainwater Feed Vector Top -->
    <path d="M 90 55 L 150 55 L 135 68 L 105 68 Z" fill="#38bdf8"/>
    <text x="120" y="65" fill="#ffffff" font-size="7.5" font-weight="bold" font-family="monospace" text-anchor="middle">Soft Rainwater</text>

    <!-- Compressed Hardwood Ash Layer -->
    <rect x="35" y="72" width="170" height="75" fill="url(#soapAshGrad)" stroke="#3f3f46" stroke-width="1"/>
    <text x="120" y="105" fill="#f8fafc" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">HARDWOOD ASH</text>
    <text x="120" y="118" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Oak, Beech, Hickory (K2CO3)</text>

    <!-- Filter Bed: Straw Layer -->
    <rect x="35" y="147" width="170" height="22" fill="#ca8a04" fill-opacity="0.6" stroke="#a16207" stroke-width="0.8"/>
    <text x="120" y="162" fill="#fef08a" font-size="8" font-family="monospace" text-anchor="middle">Clean Straw Pre-Filter</text>

    <!-- Filter Bed: River Gravel Layer -->
    <rect x="35" y="169" width="170" height="20" fill="#52525b" stroke="#3f3f46" stroke-width="0.8"/>
    <text x="120" y="183" fill="#e4e4e7" font-size="8" font-family="monospace" text-anchor="middle">Washed River Gravel</text>

    <!-- Bottom Spigot & Amber Drip -->
    <rect x="115" y="189" width="10" height="12" fill="#a16207"/>
    <path d="M 120 201 L 120 216" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3,2"/>

    <!-- Catchment Vessel with Golden KOH Lye -->
    <rect x="85" y="215" width="70" height="20" rx="3" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
    <text x="120" y="229" fill="#fde68a" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">Amber Lye (KOH)</text>

    <!-- Hopper Rule Box -->
    <rect x="12" y="248" width="216" height="56" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="264" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">NO PINE / RESINOUS SOFTWOOD:</text>
    <text x="20" y="278" fill="#f8fafc" font-size="8" font-family="monospace">• Softwoods lack potassium salts</text>
    <text x="20" y="292" fill="#cbd5e1" font-size="8" font-family="monospace">• Re-pour first run 2–3x to concentrate</text>
  </g>

  <!-- ================= PANEL 2: EGG FLOAT DENSITY ASSAY ================= -->
  <g transform="translate(290, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#38bdf8" stroke-width="1.5"/>
    
    <!-- Step Badge ❷ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#0284c7"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❷</text>
    <text x="44" y="26" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="sans-serif">Egg Float Hydrometer</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Specific Gravity Calibration</text>

    <!-- Glass Testing Cylinder -->
    <rect x="65" y="60" width="110" height="150" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    
    <!-- Concentrated Amber Lye Fluid Level -->
    <rect x="68" y="100" width="104" height="106" rx="3" fill="url(#soapLyeAmber)"/>
    <line x1="68" y1="100" x2="172" y2="100" stroke="#fde047" stroke-width="1.5"/>

    <!-- Buoyant Egg in Fluid -->
    <ellipse cx="120" cy="108" rx="20" ry="28" fill="#fed7aa" stroke="#fb923c" stroke-width="1.5"/>
    
    <!-- Quarter-Sized Exposed Crown Caliper -->
    <line x1="110" y1="80" x2="130" y2="80" stroke="#ef4444" stroke-width="1.5"/>
    <line x1="120" y1="80" x2="120" y2="92" stroke="#ef4444" stroke-width="1.2"/>
    <rect x="75" y="65" width="90" height="16" rx="3" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
    <text x="120" y="77" fill="#fca5a5" font-size="7.5" font-family="monospace" text-anchor="middle">Quarter-Size Dome</text>

    <!-- Specific Gravity Metric Box -->
    <rect x="12" y="220" width="216" height="84" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="238" fill="#7dd3fc" font-size="9" font-weight="bold" font-family="monospace">TARGET SPECIFIC GRAVITY:</text>
    <text x="20" y="254" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace">SG ≈ 1.28 (13%–15% KOH)</text>
    <text x="20" y="270" fill="#fde68a" font-size="8" font-family="monospace">• If egg SINKS: Boil lye to evaporate</text>
    <text x="20" y="284" fill="#86efac" font-size="8" font-family="monospace">• If floats too high: Dilute with rainwater</text>
  </g>

  <!-- ================= PANEL 3: SAPONIFICATION CAULDRON ================= -->
  <g transform="translate(555, 62)">
    <rect width="240" height="315" rx="8" fill="#0b1322" stroke="#10b981" stroke-width="1.5"/>
    
    <!-- Step Badge ❸ -->
    <rect x="12" y="12" width="216" height="32" rx="5" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="28" cy="28" r="10" fill="#047857"/>
    <text x="28" y="32" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">❸</text>
    <text x="44" y="26" fill="#a7f3d0" font-size="10" font-weight="bold" font-family="sans-serif">Heated Cauldron</text>
    <text x="44" y="38" fill="#94a3b8" font-size="8" font-family="monospace">Emulsification &amp; Trace Phase</text>

    <!-- Heavy Cast-Iron Cauldron -->
    <g transform="translate(35, 60)">
      <path d="M 15 35 Q 85 110 155 35 Z" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
      <ellipse cx="85" cy="35" rx="70" ry="12" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>

      <!-- Simmering Emulsion Soup -->
      <ellipse cx="85" cy="38" rx="64" ry="10" fill="url(#soapEmulsion)"/>
      <text x="85" y="58" fill="#451a03" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">Tallow + Lye (50°C)</text>

      <!-- Wooden Stirring Paddle -->
      <line x1="125" y1="5" x2="85" y2="60" stroke="#a16207" stroke-width="3.5"/>
      <rect x="80" y="50" width="16" height="22" rx="2" fill="#78350f" transform="rotate(-30, 88, 61)"/>

      <!-- Low Embers Flame Below Cauldron -->
      <path d="M 60 95 Q 85 75 110 95 Z" fill="#ef4444"/>
      <circle cx="85" cy="88" r="6" fill="#f59e0b"/>
    </g>

    <!-- Curing Soap Bar Graphic -->
    <rect x="40" y="165" width="160" height="38" rx="4" fill="#090d16" stroke="#10b981" stroke-width="1"/>
    <text x="120" y="180" fill="#a7f3d0" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">TRACE PHASE (Warm Pudding)</text>
    <text x="120" y="194" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Pour into wooden mold ➔ Cure 4-6 wks</text>

    <!-- Saponification Formula Box -->
    <rect x="12" y="215" width="216" height="89" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="233" fill="#a7f3d0" font-size="9" font-weight="bold" font-family="monospace">SAPONIFICATION RATIO:</text>
    <text x="20" y="249" fill="#f8fafc" font-size="8.5" font-family="monospace">• 2 Vol: Rendered Tallow (50°C)</text>
    <text x="20" y="263" fill="#f8fafc" font-size="8.5" font-family="monospace">• 1 Vol: Hot Standard Lye (50°C)</text>
    <text x="20" y="277" fill="#fde68a" font-size="8" font-family="monospace">• Stir steadily in one direction</text>
    <text x="20" y="291" fill="#86efac" font-size="8" font-family="monospace">Yields 100% antimicrobial soap bar</text>
  </g>

  <!-- ================= BOTTOM ALUMINUM EXPLOSION DANGER WARNING ================= -->
  <g transform="translate(25, 388)">
    <rect width="770" height="58" rx="6" fill="#1b0707" stroke="#dc2626" stroke-width="1.5"/>
    <circle cx="45" cy="29" r="14" fill="#7f1d1d"/>
    <text x="45" y="34" fill="#ffffff" font-size="14" font-weight="bold" font-family="monospace" text-anchor="middle">⚠</text>
    
    <text x="70" y="25" fill="#f87171" font-size="10" font-weight="bold" font-family="monospace">LETHAL CHEMICAL EXPLOSION HAZARD — NEVER USE ALUMINUM:</text>
    <text x="70" y="42" fill="#cbd5e1" font-size="8.5" font-family="monospace">Potassium hydroxide reacts violently with aluminum vessels, dissolving metal and releasing explosive Hydrogen gas (H2).</text>
    <text x="70" y="52" fill="#fca5a5" font-size="8" font-family="monospace">Use exclusively Cast Iron, Enamel-coated steel, Stainless Steel, Stoneware, or Wooden troughs.</text>
  </g>
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
