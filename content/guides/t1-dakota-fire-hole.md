---
id: t1-dakota-fire-hole
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Dakota Fire Hole & Friction Fire
category: "Thermal & Firecraft"
read_time: 4 min
difficulty: Medium
tags: fire, combustion, stealth, convection, windproof, thermal efficiency
summary: Excavate a two-chamber subterranean convective hearth that burns hot, produces virtually zero visible smoke, shields against high winds, and supports cooking pots directly over ground level.
---

## Aerodynamic Principle
The Dakota Fire Hole utilizes **thermal draft convection**. Burning wood in the primary chamber heats air, creating an aggressive low-pressure updraft. As rising hot air exhausts through the vertical combustion chimney, it forces fresh cold oxygen-rich air to rush down the angled feeder tunnel, creating an automated bellows effect that sustains temperatures exceeding **700°C** with minimal fuel.

```svg
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="groundGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#374151"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="700" height="360" fill="#090d16"/>

  <!-- Earth Profile with two connected chambers -->
  <path d="M0 130 L160 130 
           L160 270 
           L300 270 
           L300 130 
           L440 130 
           L530 250 
           L440 270 
           L300 270 
           L300 270 
           L300 130 
           L700 130 L700 360 L0 360 Z" fill="url(#groundGrad2)"/>
  <line x1="0" y1="130" x2="700" y2="130" stroke="#6b7280" stroke-width="3"/>

  <!-- Flame in Fire Chamber -->
  <path d="M200 265 Q230 190 230 140 Q250 210 270 265 Z" fill="url(#fireGrad)"/>
  <path d="M215 265 Q230 210 235 160 Q245 220 255 265 Z" fill="#fef08a"/>

  <!-- Embers / Coals Base -->
  <ellipse cx="230" cy="265" rx="50" ry="8" fill="#ef4444"/>

  <!-- Air Tunnel (Connecting the two) -->
  <path d="M300 240 L450 240 L430 270 L300 270 Z" fill="#030712" opacity="0.6"/>
  <path d="M430 130 L450 240 L500 240 L480 130 Z" fill="#030712" opacity="0.4"/>

  <!-- Cold Air Inflow Vector (Windward) -->
  <path d="M530 80 L490 140 L470 210 L380 255 L310 255" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8,4"/>
  <text x="560" y="85" fill="#38bdf8" font-size="12" font-family="monospace">Prevailing Wind Inflow</text>
  <text x="500" y="190" fill="#7dd3fc" font-size="11" font-family="monospace">Oxygen Air Shaft (30cm)</text>

  <!-- High Velocity Hot Exhaust Vector -->
  <path d="M230 130 L230 60" stroke="#f97316" stroke-width="4" stroke-dasharray="6,4"/>
  <text x="230" y="45" fill="#fdba74" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">Near-Smokeless High-Heat Plume</text>

  <!-- Cooking Grid / Sticks over chamber -->
  <line x1="150" y1="125" x2="310" y2="125" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
  <rect x="200" y="90" width="60" height="35" rx="3" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
  <text x="230" y="112" fill="#f8fafc" font-size="10" font-family="monospace" text-anchor="middle">Pot / Skillet</text>

  <!-- Labels -->
  <text x="230" y="300" fill="#e5e7eb" font-size="12" font-family="monospace" text-anchor="middle">Combustion Pit (30cm x 30cm)</text>
  <text x="350" y="340" fill="#9ca3af" font-size="11" font-family="monospace" text-anchor="middle">Underground Connecting Chunnel (15cm Diameter)</text>
</svg>
```

## Excavation & Operational Procedure
1. **Locate Wind Direction:** Determine the prevailing surface wind. The air intake tunnel MUST be dug upwind of the fire chamber.
2. **Excavate Primary Chamber:** Dig a circular hole 30 cm (12 in) wide and 30–40 cm deep with vertical walls.
3. **Excavate Air Shaft:** Step 30 cm upwind and dig a second hole 20 cm wide, angled diagonally at 45 degrees downward until it punctures into the bottom base of the combustion chamber.
4. **Draft Test:** Drop a piece of smoldering dry tinder into the air shaft; smoke should instantly suck down through the tunnel and eject straight out the fire pit.
5. **Lighting & Fueling:** Build a small tinder nest at the base of the fire chamber. Ignite and feed with pencil-lead sized dry twigs, gradually increasing to thumb-thickness hardwood sticks.
6. **Zero-Trace Extinguishment:** When finished, rake coals flat, fill both holes with the excavated dirt, and replace the top sod plug. No surface scorch mark or coal remains visible.

