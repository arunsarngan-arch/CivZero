---
id: t1-solar-still
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Solar Still Water Purifier
category: "Water & Life Support"
read_time: 4 min
difficulty: Low
tags: water, purification, hydration, solar, condensation, emergency
summary: Construct an emergency ground-pit solar distillation apparatus to extract drinkable moisture from soil, brackish water, or non-poisonous foliage using solar thermal energy.
---

## Principle of Operation
A solar still exploits thermal evaporation and dew-point condensation. Sunlight penetrates a transparent plastic sheet, warming the soil and moisture-bearing organic matter trapped in an excavated pit. As water vapor evaporates, it separates from contaminants, heavy salts, pathogens, and particulate toxins. The rising vapor condenses against the underside of the angled plastic cone, coalescing into droplets that slide to the inverted apex and drip directly into a clean catch vessel.

```svg
<svg viewBox="0 0 820 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Coordinate Grid -->
    <pattern id="stillGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>

    <!-- Subterranean Earth Hatching -->
    <pattern id="earthStillHatch" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#334155" stroke-width="1.2" stroke-opacity="0.4"/>
    </pattern>

    <!-- Solar Energy Radiation Glow -->
    <radialGradient id="sunStillGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="30%" stop-color="#f59e0b"/>
      <stop offset="70%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#ea580c" stop-opacity="0"/>
    </radialGradient>

    <!-- Pit Moisture Evaporation Gradient -->
    <linearGradient id="vaporRiseGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#bae6fd" stop-opacity="0"/>
    </linearGradient>

    <!-- Pure Distillate Water Gradient -->
    <linearGradient id="pureWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Canvas & Grid -->
  <rect x="0" y="0" width="820" height="450" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="450" fill="url(#stillGrid)"/>
  <rect x="10" y="10" width="800" height="430" rx="10" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- ================= 1. SUN & SOLAR IRRADIATION ================= -->
  <!-- Radiant Sun Disc -->
  <circle cx="700" cy="70" r="45" fill="url(#sunStillGlow)"/>
  <circle cx="700" cy="70" r="18" fill="#fef08a"/>

  <!-- Solar Thermal Rays Penetrating Pit -->
  <g stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6">
    <line x1="660" y1="95" x2="480" y2="230"/>
    <line x1="680" y1="110" x2="520" y2="260"/>
    <line x1="640" y1="80" x2="350" y2="230"/>
    <line x1="620" y1="70" x2="250" y2="230"/>
  </g>

  <!-- ================= 2. EXCAVATED GROUND PIT ================= -->
  <!-- Ground Stratum with excavated pit bowl -->
  <path d="M 12 170 
           L 170 170 
           Q 220 170 260 250 
           L 300 320 
           L 520 320 
           L 560 250 
           Q 600 170 650 170 
           L 808 170 
           L 808 438 
           L 12 438 Z" fill="#0f172a"/>
  <path d="M 12 170 
           L 170 170 
           Q 220 170 260 250 
           L 300 320 
           L 520 320 
           L 560 250 
           Q 600 170 650 170 
           L 808 170 
           L 808 438 
           L 12 438 Z" fill="url(#earthStillHatch)"/>

  <!-- Ground Surface Baseline -->
  <line x1="12" y1="170" x2="170" y2="170" stroke="#64748b" stroke-width="3"/>
  <line x1="650" y1="170" x2="808" y2="170" stroke="#64748b" stroke-width="3"/>

  <!-- Pit Cavity Thermal Air Space -->
  <path d="M 170 170 Q 220 170 260 250 L 300 320 L 520 320 L 560 250 Q 600 170 650 170 Z" fill="#080c14" stroke="#475569" stroke-width="1.5"/>

  <!-- Evaporative Vapor Updraft Glow -->
  <path d="M 230 310 Q 410 180 590 310 Z" fill="url(#vaporRiseGrad)"/>

  <!-- ================= 3. BIOMASS & MOISTURE SOURCE ================= -->
  <!-- Non-poisonous green leaves & damp soil in pit bottom -->
  <g fill="#15803d" stroke="#22c55e" stroke-width="1" opacity="0.8">
    <ellipse cx="270" cy="310" rx="35" ry="12"/>
    <ellipse cx="250" cy="300" rx="25" ry="10"/>
    <ellipse cx="550" cy="310" rx="35" ry="12"/>
    <ellipse cx="570" cy="300" rx="25" ry="10"/>
  </g>

  <!-- Biomass Callout Badge -->
  <rect x="25" y="325" width="220" height="38" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.2"/>
  <circle cx="40" cy="344" r="7" fill="#22c55e"/>
  <text x="40" y="348" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
  <text x="130" y="338" fill="#86efac" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">FOLIAGE &amp; BIOMASS</text>
  <text x="130" y="352" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">Damp soil, green cut branches</text>

  <!-- ================= 4. INVERTED PLASTIC MEMBRANE CONE ================= -->
  <!-- Angled Clear Polyethylene Sheeting -->
  <path d="M 160 170 Q 280 200 410 248 Q 540 200 660 170" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>

  <!-- Perimeter Soil & Rock Seal (Airtight) -->
  <g fill="#475569" stroke="#94a3b8" stroke-width="1.5">
    <ellipse cx="155" cy="162" rx="22" ry="12"/>
    <ellipse cx="180" cy="165" rx="16" ry="10"/>
    <ellipse cx="640" cy="165" rx="16" ry="10"/>
    <ellipse cx="665" cy="162" rx="22" ry="12"/>
  </g>

  <!-- Seal Callout Badge -->
  <rect x="25" y="115" width="210" height="38" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1.2"/>
  <circle cx="40" cy="134" r="7" fill="#64748b"/>
  <text x="40" y="138" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">7</text>
  <text x="125" y="128" fill="#f1f5f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">AIRTIGHT DIRT SEAL</text>
  <text x="125" y="142" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Weighted rocks &amp; perimeter dirt</text>

  <!-- ================= 5. WEIGHTED CENTER STONE ================= -->
  <!-- Smooth river pebble in center of plastic cone -->
  <ellipse cx="410" cy="242" rx="16" ry="10" fill="#64748b" stroke="#f1f5f9" stroke-width="2"/>

  <!-- Center Weight Callout Badge -->
  <rect x="290" y="115" width="240" height="38" rx="6" fill="#0c1929" stroke="#38bdf8" stroke-width="1.2"/>
  <circle cx="305" cy="134" r="7" fill="#0284c7"/>
  <text x="305" y="138" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
  <text x="425" y="128" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">CENTER APEX PEBBLE</text>
  <text x="425" y="142" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle">Creates 45° drip point over cup</text>
  <line x1="410" y1="153" x2="410" y2="230" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="2,2"/>

  <!-- ================= 6. CATCHMENT RECEPTACLE ================= -->
  <!-- Collection Container (Mug, Tin Can, or Bowl) -->
  <rect x="370" y="260" width="80" height="60" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <!-- Pure Water Reservoir inside cup -->
  <rect x="373" y="285" width="74" height="32" rx="2" fill="url(#pureWaterGrad)"/>
  <text x="410" y="306" fill="#ffffff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">PURE WATER</text>

  <!-- Condensation Drip Stream -->
  <circle cx="330" cy="215" r="3" fill="#7dd3fc"/>
  <circle cx="370" cy="232" r="3.5" fill="#7dd3fc"/>
  <circle cx="410" cy="252" r="3.5" fill="#7dd3fc"/>
  <line x1="410" y1="254" x2="410" y2="278" stroke="#38bdf8" stroke-width="2" stroke-dasharray="2,3"/>

  <!-- Cup Callout Badge -->
  <rect x="290" y="380" width="240" height="26" rx="6" fill="#0c1929" stroke="#38bdf8" stroke-width="1.2"/>
  <circle cx="305" cy="393" r="7" fill="#0284c7"/>
  <text x="305" y="397" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">5</text>
  <text x="425" y="397" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">COLLECTION CUP IN CENTER</text>

  <!-- ================= 7. INTERNAL DRINKING TUBE ================= -->
  <!-- Surgical/Silicone Tubing Leading Out to Surface -->
  <path d="M 380 300 Q 300 280 200 240 L 140 170 L 110 140" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="40" y="60" width="220" height="38" rx="6" fill="#1c1917" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="55" cy="79" r="7" fill="#f59e0b"/>
  <text x="55" y="83" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">6</text>
  <text x="145" y="73" fill="#fef3c7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">SIPHON DRINKING TUBE</text>
  <text x="145" y="87" fill="#fde68a" font-size="9" font-family="monospace" text-anchor="middle">Drink without breaking seal</text>

  <!-- ================= 8. PIT DIMENSIONS ================= -->
  <!-- Pit Diameter (1 Meter) -->
  <line x1="170" y1="185" x2="650" y2="185" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="170" y1="180" x2="170" y2="190" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="650" y1="180" x2="650" y2="190" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="410" y="202" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">1.0 METER PIT DIAMETER</text>

  <!-- Pit Depth Caliper (0.5m) -->
  <line x1="680" y1="170" x2="680" y2="320" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="674" y1="170" x2="686" y2="170" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="674" y1="320" x2="686" y2="320" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="695" y="250" fill="#f59e0b" font-size="10" font-family="monospace">0.5m DEPTH</text>
</svg>
```

## Construction Rules
1. **Pit Excavation:** Dig a cone-shaped pit approximately 1 meter (3 feet) wide and 0.5 meters (20 inches) deep in sunny, unshaded terrain.
2. **Moisture Loading:** Line the slopes of the pit with fresh green foliage, grass, or pour non-potable/brackish water around the edges (never into the center cup).
3. **Cup Placement:** Dig a small recess in the exact center of the pit floor. Firmly seat a clean cup or bowl level so it does not tip.
4. **Drinking Siphon Tube (Crucial):** Run a length of surgical tubing or hollow reed from the bottom of the catch cup up and over the pit rim to allow drinking without breaking the airtight thermal seal.
5. **Plastic Sheeting Membrane:** Lay a 2×2 meter sheet of clear polyethylene across the pit, ensuring it does not touch the cup.
6. **Perimeter Airtight Seal:** Shovel excavated soil and smooth anchor stones around the entire circumference to guarantee zero water vapor escapes.
7. **Center Incline Weight:** Place a smooth pebble in the center of the plastic directly over the cup. Push down gently until the plastic forms an inverted 45-degree cone pointing at the center of the cup.
