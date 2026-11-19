---
id: t1-debris-hut
tier: 1
tier_name: Tier 1 - Immediate Survival
title: Debris Hut Insulative Shelter
category: "Shelter & Rigging"
read_time: 4 min
difficulty: Medium
tags: shelter, debris hut, insulation, hypothermia, thermal envelope
summary: Construct an individual thermal cocoon utilizing a ridgepole, rib struts, and a 1-meter thick compressed leaf/moss insulation layer capable of preventing fatal hypothermia down to sub-zero temperatures.
---

## Physical Thermal Principle
Human body heat is lost predominantly through **conduction to the frozen earth** and **convection via ambient wind**. A debris hut traps body heat within a minimal micro-volume by creating an envelope of thousands of dead-air pockets. The interior space must be just large enough to fit your body tightly; extra space demands extra caloric energy to heat.

```svg
<svg viewBox="0 0 820 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Tactical Blueprint Grid Pattern -->
    <pattern id="hutGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>

    <!-- Geological Earth Hatch Pattern -->
    <pattern id="earthHatch" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#334155" stroke-width="1.2" stroke-opacity="0.4"/>
    </pattern>

    <!-- Wood Timber Gradient -->
    <linearGradient id="ridgepoleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>

    <!-- Debris Outer Shell Gradient -->
    <radialGradient id="debrisShellGrad" cx="40%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#166534" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#14532d" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#052e16" stop-opacity="0.95"/>
    </radialGradient>

    <!-- Thermal Heat Radiation Halo -->
    <radialGradient id="bodyHeatGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0284c7" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
    </radialGradient>

    <!-- Ground Bedding Gradient -->
    <linearGradient id="mattressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#a16207"/>
      <stop offset="100%" stop-color="#713f12"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Schematic Backdrop -->
  <rect x="0" y="0" width="820" height="450" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="450" fill="url(#hutGrid)"/>

  <!-- Outer Blueprint Border & Title Block -->
  <rect x="10" y="10" width="800" height="430" rx="10" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- ================= 1. EARTH FOUNDATION ================= -->
  <!-- Sub-surface Frozen Ground -->
  <rect x="12" y="320" width="796" height="118" fill="#0f172a"/>
  <rect x="12" y="320" width="796" height="118" fill="url(#earthHatch)"/>
  <line x1="12" y1="320" x2="808" y2="320" stroke="#475569" stroke-width="2.5"/>

  <!-- Earth Thermal Warning Pill -->
  <rect x="520" y="380" width="270" height="26" rx="6" fill="#0b1120" stroke="#334155" stroke-width="1"/>
  <text x="655" y="397" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">FROZEN GROUND (CONDUCTIVE HEAT SINK)</text>

  <!-- ================= 2. INSULATING BEDDING MATTRESS ================= -->
  <!-- 30cm Dry Leaf/Pine Needle Bed -->
  <rect x="180" y="285" width="460" height="35" rx="5" fill="url(#mattressGrad)" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4,2"/>
  <!-- Bedding Texture details -->
  <path d="M190 295 Q210 290 230 295 T270 295 T310 295 T350 295 T390 295 T430 295 T470 295 T510 295 T550 295 T590 295 T630 295" fill="none" stroke="#ca8a04" stroke-width="1" opacity="0.6"/>
  <path d="M190 305 Q210 300 230 305 T270 305 T310 305 T350 305 T390 305 T430 305 T470 305 T510 305 T550 305 T590 305 T630 305" fill="none" stroke="#ca8a04" stroke-width="1" opacity="0.4"/>

  <!-- Bedding Callout Pill -->
  <rect x="230" y="335" width="360" height="26" rx="6" fill="#1c1917" stroke="#eab308" stroke-width="1"/>
  <circle cx="245" cy="348" r="7" fill="#ca8a04"/>
  <text x="245" y="352" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
  <text x="415" y="352" fill="#fef08a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">30cm DRY BEDDING (Blocks 80% Ground Heat Loss)</text>

  <!-- ================= 3. SLEEPING HUMAN SILHOUETTE & THERMAL ENVELOPE ================= -->
  <!-- Thermal Capsule Zone -->
  <ellipse cx="400" cy="265" rx="190" ry="26" fill="url(#bodyHeatGrad)"/>

  <!-- Stylized Sleeping Human Form (Side Elevation, Head at Left, Feet at Right) -->
  <g opacity="0.95">
    <!-- Head / Hooded Cap (Near Entrance) -->
    <circle cx="240" cy="262" r="14" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
    <!-- Sleeping Torso / Thermal Jacket -->
    <ellipse cx="320" cy="266" rx="65" ry="17" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Hips & Bent Legs in Sleeping Bag -->
    <path d="M375 262 Q450 258 530 274 Q535 280 500 282 Q420 282 360 276 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2"/>
    <!-- Foot Zone (Tucked into narrow rear) -->
    <ellipse cx="540" cy="275" rx="14" ry="8" fill="#0284c7"/>
  </g>

  <!-- Thermal Capsule Callout Badge -->
  <rect x="280" y="215" width="240" height="24" rx="6" fill="#0c1929" stroke="#38bdf8" stroke-width="1"/>
  <circle cx="295" cy="227" r="6" fill="#0284c7"/>
  <text x="295" y="231" fill="#fff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">5</text>
  <text x="408" y="231" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">TIGHT AIR CAPSULE (BODY-FIT)</text>

  <!-- ================= 4. STRUCTURAL SKELETON (RIDGEPOLE & RIBS) ================= -->
  <!-- Rib Strut Branches (Left & Right 45-degree angled rafters) -->
  <g stroke="#94a3b8" stroke-width="3" stroke-linecap="round" opacity="0.85">
    <line x1="210" y1="140" x2="250" y2="290"/>
    <line x1="260" y1="158" x2="310" y2="290"/>
    <line x1="310" y1="176" x2="370" y2="290"/>
    <line x1="360" y1="194" x2="430" y2="290"/>
    <line x1="410" y1="212" x2="490" y2="290"/>
    <line x1="460" y1="230" x2="550" y2="290"/>
    <line x1="510" y1="248" x2="600" y2="290"/>
    <line x1="560" y1="266" x2="640" y2="290"/>
  </g>

  <!-- Horizontal Interlaced Twig Lattice (Prevents debris falling inside) -->
  <path d="M220 180 L620 280 M230 220 L610 285 M240 250 L580 288" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6"/>

  <!-- Heavy Ridgepole (3-Meter Timber Spine) -->
  <line x1="160" y1="120" x2="670" y2="295" stroke="url(#ridgepoleGrad)" stroke-width="12" stroke-linecap="round"/>
  <!-- Front Overhang Joint -->
  <circle cx="160" cy="120" r="10" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>

  <!-- Ridgepole Callout Pill -->
  <rect x="360" y="115" width="260" height="26" rx="6" fill="#1c1917" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="375" cy="128" r="7" fill="#f59e0b"/>
  <text x="375" y="132" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
  <text x="500" y="132" fill="#fef3c7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">RIDGEPOLE (3m / 10ft DEADFALL)</text>

  <!-- Ribs Callout Pill -->
  <rect x="440" y="155" width="200" height="24" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="455" cy="167" r="6" fill="#64748b"/>
  <text x="455" y="171" fill="#fff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
  <text x="540" y="171" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">RIB SPARS (45° SKELETON)</text>

  <!-- ================= 5. APEX FORK / BIPOD SUPPORT ================= -->
  <!-- Support Bipod Legs -->
  <line x1="160" y1="120" x2="135" y2="320" stroke="#78350f" stroke-width="7" stroke-linecap="round"/>
  <line x1="160" y1="120" x2="185" y2="320" stroke="#92400e" stroke-width="7" stroke-linecap="round"/>

  <!-- Apex Fork Callout Badge -->
  <rect x="30" y="80" width="225" height="26" rx="6" fill="#18181b" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="45" cy="93" r="7" fill="#f59e0b"/>
  <text x="45" y="97" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
  <text x="145" y="97" fill="#fef3c7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">APEX BIPOD FORK (~0.9m)</text>
  <!-- Leader Line to Apex -->
  <line x1="140" y1="106" x2="158" y2="116" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>

  <!-- Waist Height Dimension Line -->
  <line x1="110" y1="120" x2="110" y2="320" stroke="#06b6d4" stroke-width="1.5"/>
  <line x1="104" y1="120" x2="116" y2="120" stroke="#06b6d4" stroke-width="1.5"/>
  <line x1="104" y1="320" x2="116" y2="320" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="100" y="225" fill="#22d3ee" font-size="10" font-family="monospace" text-anchor="end">WAIST HEIGHT (0.9m)</text>

  <!-- ================= 6. 1-METER COMPRESSED DEBRIS SHELL ================= -->
  <!-- Outer Debris Mound (Leaves, Duff, Moss, Conifer Needles) -->
  <path d="M140 115 Q360 15 720 320 L660 320 Q360 85 170 135 Z" fill="url(#debrisShellGrad)" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Organic Thatch Texture accents -->
  <path d="M220 85 Q240 70 260 82 M300 55 Q330 40 360 52 M420 60 Q450 45 480 62 M540 100 Q570 85 600 110 M620 160 Q650 150 670 180" fill="none" stroke="#4ade80" stroke-width="1.5" opacity="0.6"/>

  <!-- 1-Meter Thickness Dimension Callout -->
  <g transform="translate(360, 25)">
    <rect x="-10" y="0" width="310" height="26" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.2"/>
    <circle cx="5" cy="13" r="7" fill="#22c55e"/>
    <text x="5" y="17" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">6</text>
    <text x="150" y="17" fill="#86efac" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1-METER (3 FT) DEBRIS THICKNESS</text>
    <!-- Arrow Bracket Indicating Shell Thickness -->
    <line x1="60" y1="30" x2="60" y2="70" stroke="#22c55e" stroke-width="1.5"/>
    <line x1="55" y1="30" x2="65" y2="30" stroke="#22c55e" stroke-width="1.5"/>
    <line x1="55" y1="70" x2="65" y2="70" stroke="#22c55e" stroke-width="1.5"/>
  </g>

  <!-- ================= 7. INSULATED DOOR PLUG ================= -->
  <!-- Door Plug at Apex Entrance -->
  <rect x="120" y="170" width="55" height="145" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
  <!-- Leaf Thatch Texture on Door -->
  <path d="M125 185 Q145 180 165 185 M125 210 Q145 205 165 210 M125 240 Q145 235 165 240 M125 270 Q145 265 165 270 M125 295 Q145 290 165 295" fill="none" stroke="#d97706" stroke-width="1.5"/>

  <!-- Door Plug Callout Badge (HORIZONTAL & EASY TO READ) -->
  <rect x="15" y="270" width="180" height="38" rx="6" fill="#1c1917" stroke="#ea580c" stroke-width="1.2"/>
  <circle cx="30" cy="285" r="7" fill="#ea580c"/>
  <text x="30" y="289" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">7</text>
  <text x="105" y="285" fill="#fed7aa" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">LEAF-BUNDLE DOOR PLUG</text>
  <text x="105" y="299" fill="#fdba74" font-size="9" font-family="monospace" text-anchor="middle">(Seal After Crawling In)</text>

  <!-- Wind Arrow Warning -->
  <g transform="translate(680, 260)">
    <path d="M50 0 L15 0 M25 -6 L15 0 L25 6" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
    <text x="30" y="-10" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle">PREVAILING WIND</text>
    <text x="30" y="18" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Tail faces into wind</text>
  </g>
</svg>
```

## Construction Rules
1. **Ridgepole Selection:** Secure a sturdy deadfall timber roughly 1.5x your body length (3 meters) and 10–12 cm thick. Test under full body weight.
2. **Support Apex:** Wedge the front end into the fork of a tree or onto an interlocking two-branch bipod at roughly waist height (0.8 to 1 meter). The tail rests directly on the earth facing into prevailing winds.
3. **Rib Skeleton:** Lean hundreds of sturdy branches along both sides of the ridgepole at a 45-degree angle, spaced no more than hand-width apart.
4. **Lattice Webbing:** Weave flexible twigs, dry ferns, and vines horizontally over the ribs to create a net so small debris does not fall into the sleeping cavity.
5. **Bedding Layer:** Pack the interior floor with **at least 30 cm (1 foot)** of dry leaves, dry grass, or moss. An uninsulated floor will leech all body heat via ground conduction.
6. **Thick Outer Insulation:** Pile dry forest debris (leaves, needles, dry moss, duff) over the exterior to a depth of **at least 1 meter (arm's length)**.
7. **Door Plug:** Gather an armful of leaves or a backpack to seal the entrance after sliding in feet first.
