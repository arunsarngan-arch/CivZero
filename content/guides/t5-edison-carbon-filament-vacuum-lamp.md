---
id: "t5-edison-carbon-filament-vacuum-lamp"
title: "The Edison Carbon-Filament Incandescent Lamp & Sprengel High-Vacuum Pump"
tier: 5
category: "Electrical Storage"
read_time: "20 min"
difficulty: "Advanced"
summary: "Complete blueprint for building incandescent vacuum light bulbs from zero: pyrolyzing bamboo vascular fibers into pure carbon filaments, constructing a mercury Sprengel high-vacuum pump (10^-4 torr), copper-to-glass hermetic seals, and operating off DC battery banks."
tags: "light bulb, electricity, vacuum pump, sprengel pump, bamboo, filament, edison, dr stone, senku"
---

Artificial illumination liberates humanity from the tyrannical diurnal cycle of the sun. Before electric light, indoor labor ceased at dusk; candles made of animal tallow produced dim, flickering light (12 lumens), consumed valuable food calories, smoked heavily, and presented constant fire hazards to thatched roof settlements.

Thomas Edison's 1879 breakthrough was not merely the concept of electric light, but the creation of a high-resistance **carbonized bamboo filament** suspended in a **near-perfect vacuum ($<10^{-4}\text{ torr}$)**. In air, white-hot carbon burns to ash in milliseconds; in a high vacuum, a carbon filament operates safely at **$2100^\circ\text{C}$ ($2370\text{ K}$)** for upwards of **1,200 continuous hours**.

```
                   THE INCANDESCENT VACUUM LAMP RECONSTRUCTION
                   
     [ Japanese / Native Bamboo Fibers ]              [ Blown Glass Bulb Envelope ]
                     │                                              │
        (Pyrolysis in Clay Crucible @ 1000°C)                       │
                     ▼                                              │
          Pure Carbon Hair Filament                                 │
                     │                                              │
           (Lead Wire Clamping)                                     │
                     └──────────────────────┬───────────────────────┘
                                            │
                                 (Glass Hermetic Pinch)
                                            ▼
                           The Unsealed Incandescent Lamp
                                            │
                        (Sprengel Mercury Vacuum Fall-Tube)
                               (Evacuation to 10^-4 Torr)
                                            ▼
                           (Tip-Off Torch Flame Sealing)
                                            ▼
                           Permanent High-Vacuum Light Bulb
                         (16 Candlepower / 1200-Hour Life)
```

---

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="lampGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#f59e0b" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
    </radialGradient>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
    <marker id="arrowSky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#lampGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">EDISON CARBON FILAMENT INCANDESCENT LAMP &amp; SPRENGEL VACUUM SYSTEM</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">HERMETIC VACUUM ELECTRONICS</text>

  <!-- MODULE 1: BAMBOO FIBER PYROLYSIS (LEFT) -->
  <g id="pyrolysis" transform="translate(25, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Cast Iron Crucible with Charcoal Pack -->
    <rect x="45" y="55" width="155" height="65" rx="5" fill="#1e293b" stroke="#78350f" stroke-width="2"/>
    <rect x="55" y="65" width="135" height="45" fill="#070a0f"/>
    <!-- Horseshoe Bamboo Filament Loop Inside Crucible -->
    <path d="M 100 102 C 100 70, 145 70, 145 102" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <text x="122" y="100" fill="#fde68a" font-size="7.5" font-family="monospace" text-anchor="middle">Horseshoe Loop</text>
    <text x="122" y="135" fill="#fca5a5" font-size="8" font-family="monospace" text-anchor="middle">Packed in Bone-Black Graphite</text>

    <!-- Fiber Preparation Specs Pill -->
    <rect x="18" y="150" width="210" height="75" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1"/>
    <text x="28" y="168" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">BAMBOO PREPARATION:</text>
    <text x="28" y="183" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">0.25mm Shaved Heartwood Fiber</text>
    <text x="28" y="197" fill="#cbd5e1" font-size="8" font-family="monospace">• Bent around carbonized mandrel</text>
    <text x="28" y="210" fill="#94a3b8" font-size="8" font-family="monospace">• Submerged in bone charcoal dust</text>

    <!-- Kiln Baking Dynamics Pill -->
    <rect x="18" y="235" width="210" height="75" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="254" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">KILN PYROLYSIS (1000°C):</text>
    <text x="28" y="269" fill="#cbd5e1" font-size="8" font-family="monospace">8 Hours anaerobic kiln firing</text>
    <text x="28" y="283" fill="#cbd5e1" font-size="8" font-family="monospace">Yields elastic, pure graphite filament</text>
    <text x="28" y="299" fill="#38bdf8" font-size="8" font-family="monospace">Resistance: 100–150 Ohms cold</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="150" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#d97706"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="86" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">FILAMENT PYROLYSIS</text>
  </g>

  <!-- MODULE 2: SPRENGEL MERCURY VACUUM PUMP (CENTER) -->
  <g id="sprengel" transform="translate(285, 60)">
    <rect x="0" y="0" width="250" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Upper Mercury Reservoir Funnel -->
    <polygon points="105,48 145,48 135,70 115,70" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="125" y="44" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Hg Reservoir</text>

    <!-- Capillary Fall-Tube (760mm Torricelli Leg) -->
    <line x1="125" y1="70" x2="125" y2="135" stroke="#38bdf8" stroke-width="2.5"/>
    <!-- Falling Mercury Droplets -->
    <ellipse cx="125" cy="82" rx="2" ry="3" fill="#ffffff"/>
    <ellipse cx="125" cy="98" rx="2" ry="3" fill="#ffffff"/>
    <ellipse cx="125" cy="114" rx="2" ry="3" fill="#ffffff"/>

    <!-- Bulb Exhaust Tap Connection -->
    <path d="M 125 90 L 175 90 L 175 110" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrowAmber)"/>
    <text x="165" y="85" fill="#f59e0b" font-size="7" font-family="monospace">Air Entrapment</text>

    <!-- Lower Mercury Collector Flask -->
    <rect x="110" y="130" width="30" height="15" rx="2" fill="#475569" stroke="#94a3b8"/>
    <text x="125" y="142" fill="#ffffff" font-size="7" font-family="monospace" text-anchor="middle">Trap</text>

    <!-- Sprengel Physics Pill -->
    <rect x="18" y="150" width="214" height="75" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1"/>
    <text x="28" y="168" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace">MERCURY DROPLET ACTION:</text>
    <text x="28" y="183" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace">Falling liquid drops form pistons</text>
    <text x="28" y="197" fill="#cbd5e1" font-size="8" font-family="monospace">Traps &amp; compresses air down tube</text>
    <text x="28" y="210" fill="#94a3b8" font-size="8" font-family="monospace">Zero rubber gaskets or mechanical seals</text>

    <!-- Vacuum Threshold Pill -->
    <rect x="18" y="235" width="214" height="75" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="254" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">HIGH VACUUM REACHED:</text>
    <text x="28" y="269" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">10⁻⁴ Torr (0.013 Pascal)</text>
    <text x="28" y="283" fill="#cbd5e1" font-size="8" font-family="monospace">Eliminates all oxygen molecules</text>
    <text x="28" y="299" fill="#86efac" font-size="8" font-family="monospace">Prevents instant filament combustion</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="145" height="20" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#0284c7"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="83" y="24" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">SPRENGEL PUMP</text>
  </g>

  <!-- MODULE 3: THE INCANDESCENT VACUUM BULB (RIGHT) -->
  <g id="bulb" transform="translate(550, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Glowing Bulb Envelope (Radial Aura) -->
    <circle cx="122" cy="85" r="45" fill="url(#bulbGlow)"/>
    <circle cx="122" cy="85" r="32" fill="none" stroke="#fef08a" stroke-width="1.5"/>

    <!-- Incandescent Carbon Filament -->
    <path d="M 112 95 C 112 72, 132 72, 132 95" fill="none" stroke="#fef08a" stroke-width="3"/>

    <!-- Platinum Lead-In Wires & Glass Pinch Seal -->
    <rect x="110" y="105" width="24" height="15" fill="#475569" stroke="#94a3b8"/>
    <line x1="114" y1="95" x2="114" y2="128" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="130" y1="95" x2="130" y2="128" stroke="#cbd5e1" stroke-width="2"/>
    <text x="122" y="142" fill="#38bdf8" font-size="7.5" font-family="monospace" text-anchor="middle">Platinum Pinch Seal</text>

    <!-- Electrical Performance Pill -->
    <rect x="18" y="150" width="210" height="75" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="28" y="168" fill="#10b981" font-size="8.5" font-weight="bold" font-family="monospace">ELECTRICAL PARAMS:</text>
    <text x="28" y="183" fill="#86efac" font-size="9" font-weight="bold" font-family="monospace">12V–24V DC / 0.8 Amperes</text>
    <text x="28" y="197" fill="#cbd5e1" font-size="8" font-family="monospace">Filament Temp: 2100°C</text>
    <text x="28" y="210" fill="#fde68a" font-size="8" font-family="monospace">Warm 2400K golden illumination</text>

    <!-- Operational Lifespan Pill -->
    <rect x="18" y="235" width="210" height="75" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="254" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">LIFESPAN &amp; EFFICIENCY:</text>
    <text x="28" y="269" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">600–1200 Continuous Hours</text>
    <text x="28" y="283" fill="#cbd5e1" font-size="8" font-family="monospace">Equals light output of 500 candles</text>
    <text x="28" y="299" fill="#38bdf8" font-size="8" font-family="monospace">Zero soot, zero fire hazard</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="155" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#10b981"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="88" y="24" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">INCANDESCENT BULB</text>
  </g>

  <!-- HERMETIC GLASS-METAL EXPANSION MANDATE FOOTER -->
  <rect x="25" y="402" width="770" height="42" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
  <circle cx="45" cy="423" r="10" fill="#f59e0b"/>
  <text x="45" y="427" fill="#0f172a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">★</text>
  <text x="65" y="420" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace">HERMETIC SEAL MANDATE: PLATINUM OR DUMET ALLOY MATCHES GLASS EXPANSION</text>
  <text x="65" y="434" fill="#cbd5e1" font-size="8.5" font-family="monospace">Ordinary copper expands 2x faster than borosilicate glass upon cooling, cracking the stem seal and causing instant filament burnout.</text>
</svg>
```

---

## 1. Preparing & Pyrolyzing the Bamboo Filament

Not all plant fibers work as incandescent filaments. Cotton thread, flax, and wood splinter into brittle graphite dust or warp out of shape when heated. Bamboo possesses unique vascular bundles: long, uninterrupted, parallel cellulose fibers running along its culm without knots or cross-grain.

1. **Harvesting:** Select aged, dry bamboo culms (2 to 3-year-old growth; *Phyllostachys bambusoides* / Madake bamboo is ideal). Split lengthwise into thin splints.
2. **Carving:** Using a razor-sharp draw-knife, pare down the inner fibrous layer into uniform strips **0.25 mm wide and 0.20 mm thick**.
3. **Forming:** Bend each fiber around a nickel or brass U-shaped jig to create a clean horseshoe loop (approx. 40 mm long and 15 mm wide across the legs). Tie the ends with fine thread so it retains its curve.
4. **Anaerobic Packing:** Place the bent bamboo loops into a heavy fireclay crucible. Fill the crucible completely with finely pulverized **graphite dust or calcined bone-black charcoal**. Tamp down firmly so no air pockets remain. Seal the crucible lid with a thick paste of refractory clay.
5. **The 1000°C Furnace Run:** Place the sealed crucible in a charcoal blast furnace. Raise temperature steadily to **1000°C** over 4 hours, and hold at cherry-red heat for **4 full hours**.
6. **Carbonized State:** As volatile hydrogen and oxygen boil off, the cellulose transforms into pure, highly aligned electrical carbon. When cooled, the filament is a delicate, jet-black, flexible, conductive horseshoe loop. Handle exclusively with tweezers; a single drop of finger grease will create a localized hot spot and cause premature filament blowout.

---

## 2. Fabricating the Glass Bulb & Hermetic Lead-In Wire

A common point of failure in amateur glassblowing is the wire feedthrough. Copper expands at $17 \times 10^{-6}/\text{K}$, while soda-lime glass expands at $9 \times 10^{-6}/\text{K}$. When a plain copper wire passes through glass, the wire shrinks faster upon cooling, opening an invisible microscopic annulus that leaks atmospheric oxygen within seconds.

1. **Dumet / Platinum Lead-In Wires:** Use short pieces of thin platinum wire, gold-coated iron wire, or "Dumet" wire (a nickel-iron core clad in a copper sheath). The composite expansion rate matches glass perfectly.
2. **Mounting the Filament:** Clamp the two tails of the carbon filament into tiny rolled copper tubes soldered to the lead wires. Alternatively, paste the junction with a conductive slurry of graphite powder and sodium silicate (water glass).
3. **Stem Flare:** Blow a small 12 mm glass tube with a flared trumpet rim at one end. Place the lead wires inside, and heat the narrow end with a localized torch until the glass collapses and pinches the metal wires into an airtight glass-to-metal seal.
4. **Bulb Envelope:** Blow a 50 mm clear glass sphere with a tapered neck and an open exhaustion stem (a 4 mm thin capillary tube) protruding from the top apex.
5. **Sealing Stem to Bulb:** Insert the stem mount with the filament into the base of the bulb. Fusion-weld the flared rim to the neck of the bulb using a rotating needle flame. The bulb is now sealed, with the only opening being the narrow exhaust tube at the top.

---

## 3. The Sprengel High-Vacuum Mercury Pump

A mechanical piston pump cannot pull a vacuum below $1\text{ mmHg}$ because gas leaks past piston rings and valve gaskets. In 1865, Hermann Sprengel invented the pump that made the electronics age possible: a purely hydraulic, mechanical-seal-free mercury fall-tube capable of reaching **$10^{-5}\text{ torr}$**.

```
                           [ Mercury Reservoir Funnel ]
                                       │
                                (Stopcock Drip)
                                       ▼
                       Dropping Mercury Droplets (Pellets)
                                       │
           To Light Bulb ───> [ Capillary T-Junction ]
           Exhaust Tube                │
                               (Mercury Fall-Tube)
                             (>760mm Barometer Height)
                                       │
                        (Air Trapped Between Hg Pellets)
                                       │
                                       ▼
                           [ Mercury Waste Trough ]
                             (Air Bubbles Vent Off)
```

1. **Apparatus Setup:** Mount a vertical glass capillary tube of **1.5 mm internal diameter and 1.2 meters length** onto a wooden backboard.
2. **Top Junction:** The top of the capillary connects to a glass funnel filled with clean, triple-distilled liquid mercury through a precision glass stopcock. Just below the drip nozzle, a side-arm branches off and connects directly to the light bulb's exhaustion stem.
3. **The Barometric Fall-Tube:** The vertical drop tube must be longer than the barometric column of mercury ($>760\text{ mm}$). Below the 760 mm level, the mercury column creates a Torricellian vacuum.
4. **Operation:** Open the stopcock so mercury drips down the tube at a rate of **2 to 3 drops per second**. Each falling droplet acts as a liquid piston. As a droplet passes the side-arm, it sweeps a small parcel of air from the light bulb downward, trapping it between successive mercury pellets.
5. **Audible Verification:** During the first 15 minutes of pumping, the falling mercury strikes the bottom pool with a dull, muffled sound as air cushions the impact. As the vacuum approaches $10^{-4}\text{ torr}$, the air cushion disappears. The mercury drops strike the solid mercury column with a sharp, metallic, bell-like clicking sound ("the metallic click").
6. **Outgassing (The Flash):** While pumping continues at maximum vacuum, connect the bulb leads to a DC battery pack and apply $50\%$ of rated voltage. The filament glows dull red, heating the interior glass walls and driving out trapped moisture and adsorbed oxygen. Keep pumping for another 20 minutes until the clicking sound remains sharp.
7. **Tip-Off Sealing:** Direct a needle-sharp blowtorch flame onto the 4 mm glass exhaust tube where it joins the bulb. Under the external atmospheric pressure, the soft glass collapses inward, fuses solid, and seals the bulb permanently.

---

## 4. Electrical Integration & Powering from Off-Grid Dynamos

- **Cold vs. Hot Resistance:** Carbon has a **negative temperature coefficient of resistance** (the opposite of metals). A filament measuring $180\ \Omega$ cold will drop to approximately $100\ \Omega$ when glowing white-hot at 2100°C.
- **Powering:** Connect the two exterior lead wires across a **12V to 24V DC bus** supplied by a Planté lead-acid storage battery or hydro dynamo.
  - At $12\text{V}$ and $0.8\text{A}$, the lamp draws approx. **10 Watts**, emitting a warm, non-flickering, golden illumination of approximately 16 candlepower (150 lumens).
  - Clean, fume-free light allows nighttime surgeries, precision clockwork and machine tooling, microscopic biological examinations, and fireproof library reading.
