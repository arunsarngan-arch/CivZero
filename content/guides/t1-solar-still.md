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
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0d1b2a"/>
      <stop offset="100%" stop-color="#1b263b"/>
    </linearGradient>
    <linearGradient id="earthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#415a77"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Sky Background -->
  <rect x="0" y="0" width="700" height="150" fill="url(#skyGrad)"/>

  <!-- Sun Rays & Sun -->
  <circle cx="580" cy="50" r="28" fill="url(#sunGrad)" filter="url(#glow)"/>
  <path d="M530 80 L390 190 M560 90 L420 200 M590 90 L480 200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>

  <!-- Earth Trench Profile -->
  <path d="M0 150 L160 150 L250 290 L450 290 L540 150 L700 150 L700 360 L0 360 Z" fill="url(#earthGrad)"/>
  <path d="M0 150 L160 150 M540 150 L700 150" stroke="#778da9" stroke-width="3"/>

  <!-- Foliage / Mud Biomass in Trench -->
  <path d="M210 240 Q230 220 250 240 Q270 215 285 240 L260 270 L210 270 Z" fill="#10b981" opacity="0.7"/>
  <path d="M415 240 Q435 220 455 240 Q475 215 490 240 L465 270 L415 270 Z" fill="#10b981" opacity="0.7"/>
  <text x="170" y="275" fill="#a7f3d0" font-size="11" font-family="monospace">Biomass / Brackish Water</text>

  <!-- Plastic Membrane Cone -->
  <path d="M150 150 L350 225 L550 150" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
  
  <!-- Anchor Rocks -->
  <ellipse cx="148" cy="145" rx="20" ry="12" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  <ellipse cx="552" cy="145" rx="20" ry="12" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="135" fill="#cbd5e1" font-size="11" font-family="monospace">Anchor Rocks / Dirt Seal</text>

  <!-- Center Weight Stone -->
  <ellipse cx="350" cy="220" rx="14" ry="9" fill="#94a3b8" stroke="#f1f5f9" stroke-width="1.5"/>
  <text x="350" y="195" fill="#f8fafc" font-size="11" font-family="monospace" text-anchor="middle">Weighted Center Stone</text>

  <!-- Catchment Container -->
  <rect x="315" y="240" width="70" height="50" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
  <rect x="320" y="265" width="60" height="23" rx="2" fill="#0284c7" opacity="0.8"/>
  <text x="350" y="280" fill="#ffffff" font-size="10" font-family="monospace" text-anchor="middle">Pure Distillate</text>

  <!-- Condensation Droplets & Drip Path -->
  <circle cx="280" cy="195" r="2.5" fill="#38bdf8"/>
  <circle cx="310" cy="208" r="3" fill="#38bdf8"/>
  <circle cx="420" cy="195" r="2.5" fill="#38bdf8"/>
  <circle cx="390" cy="208" r="3" fill="#38bdf8"/>
  <circle cx="350" cy="235" r="2.5" fill="#38bdf8"/>
  <path d="M350 228 L350 255" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- Evaporation arrows -->
  <path d="M250 220 L280 185 M450 220 L420 185" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="4,3"/>

  <!-- Labels -->
  <text x="350" y="325" fill="#e2e8f0" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Cross-Section: Subterranean Solar Still</text>
  <text x="350" y="343" fill="#94a3b8" font-size="11" font-family="monospace" text-anchor="middle">Yield: 0.5 - 1.5 Liters / 24 Hours in Direct Sunlight</text>
</svg>
```

## Bill of Materials
- **Transparent Sheet:** 2m x 2m clear polyethylene sheeting (or clean plastic tarp/survival blanket).
- **Collection Vessel:** Wide-mouth metal canteen, cup, or clean half-canteen.
- **Drainage Straw / Siphon (Optional):** 1.5m surgical or rubber hose running outside pit to drink without breaking the air seal.
- **Center Weight:** Smooth 0.5kg stone (avoid sharp edges that pierce plastic).
- **Moisture Substrate:** Non-toxic succulent leaves, wet river sand, contaminated water, or green leafy branches.

## Step-by-Step Construction Procedure
1. **Pit Excavation:** Dig a conical hole approximately 1 meter in diameter and 60 cm deep in direct sunlight. Ensure pit walls slope inward at roughly 45 degrees.
2. **Moisture Bedding:** Line the perimeter walls and trench base with wet foliage, brackish water, or mud. **Crucial:** Keep the center pedestal clean and dry.
3. **Position Vessel:** Place your collection cup directly in the lowest center point of the pit. Ensure it stands flat and cannot tip.
4. **Air-Tight Seal:** Drape the plastic sheet across the top. Weigh down all outer edges with excavated dirt and heavy stones. The perimeter seal must be 100% airtight to trap thermal humidity.
5. **Set the Inverted Apex:** Place your smooth central stone onto the top center of the plastic directly above the mouth of the collection cup. Adjust until the cone tip hangs 5 cm above the rim.
6. **Harvest:** Allow 4–8 hours of solar exposure. Never open during peak solar hours to avoid heat loss.

