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
<svg viewBox="0 0 700 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="700" height="380" fill="#090d16" rx="8"/>

  <!-- Module 1: Bamboo Pyrolysis -->
  <g transform="translate(30, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="100" y="24" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. FILAMENT PYROLYSIS</text>
    <text x="100" y="38" fill="#94a3b8" font-size="8.5" font-family="monospace" text-anchor="middle">Bamboo Fiber Carbonization</text>

    <!-- Crucible & horseshoe filament graphic -->
    <rect x="65" y="55" width="70" height="50" rx="4" fill="#78350f" stroke="#b45309" stroke-width="1.5"/>
    <path d="M85 95 C85 68, 115 68, 115 95" fill="none" stroke="#f59e0b" stroke-width="3"/>

    <rect x="15" y="118" width="170" height="64" rx="4" fill="#1e293b"/>
    <text x="25" y="135" fill="#f8fafc" font-size="9" font-family="monospace">BAMBOO PREPARATION:</text>
    <text x="25" y="150" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace">0.25mm Stripped Fiber</text>
    <text x="25" y="164" fill="#cbd5e1" font-size="8.5" font-family="monospace">Bend into horseshoe loop</text>
    <text x="25" y="175" fill="#94a3b8" font-size="8" font-family="monospace">Pack in bone-black graphite</text>

    <rect x="15" y="190" width="170" height="62" rx="4" fill="#1e293b"/>
    <text x="25" y="206" fill="#86efac" font-size="9.5" font-weight="bold" font-family="monospace">KILN BAKING @ 1000°C:</text>
    <text x="25" y="222" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">8 Hours Anaerobic</text>
    <text x="25" y="236" fill="#cbd5e1" font-size="8.5" font-family="monospace">Yields flexible pure carbon</text>
    <text x="25" y="246" fill="#fca5a5" font-size="8" font-family="monospace">Resistance: ~100 - 150 Ohms</text>

    <text x="100" y="268" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle">Conductive Elastic Carbon</text>
  </g>

  <!-- Module 2: The Sprengel Vacuum Pump -->
  <g transform="translate(250, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="100" y="24" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. SPRENGEL PUMP</text>
    <text x="100" y="38" fill="#94a3b8" font-size="8.5" font-family="monospace" text-anchor="middle">Mercury Fall-Tube Evacuator</text>

    <!-- Sprengel capillary drop tube -->
    <rect x="88" y="50" width="24" height="20" rx="2" fill="#64748b" stroke="#94a3b8"/>
    <line x1="100" y1="70" x2="100" y2="120" stroke="#cbd5e1" stroke-width="2.5"/>
    <circle cx="100" cy="85" r="2" fill="#ffffff"/>
    <circle cx="100" cy="100" r="2" fill="#ffffff"/>
    <line x1="100" y1="80" x2="135" y2="80" stroke="#f59e0b" stroke-width="1.5"/>

    <rect x="15" y="128" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="145" fill="#f8fafc" font-size="9" font-family="monospace">PHYSICAL MECHANISM:</text>
    <text x="25" y="161" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace">Falling Mercury Pellets</text>
    <text x="25" y="175" fill="#cbd5e1" font-size="8" font-family="monospace">Trap air bubbles down tube</text>

    <rect x="15" y="196" width="170" height="58" rx="4" fill="#1e293b"/>
    <text x="25" y="213" fill="#86efac" font-size="9.5" font-weight="bold" font-family="monospace">VACUUM THRESHOLD:</text>
    <text x="25" y="229" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace">10^-4 Torr (0.01 Pa)</text>
    <text x="25" y="242" fill="#cbd5e1" font-size="8" font-family="monospace">Zero moving piston seals</text>

    <text x="100" y="268" fill="#f59e0b" font-size="9" font-family="monospace" text-anchor="middle">Torricellian Barometer Leg</text>
  </g>

  <!-- Module 3: Assembled Vacuum Lamp -->
  <g transform="translate(470, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="100" y="24" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. THE GLOWING BULB</text>
    <text x="100" y="38" fill="#94a3b8" font-size="8.5" font-family="monospace" text-anchor="middle">Incandescence in Vacuum</text>

    <!-- Glowing bulb graphic -->
    <circle cx="100" cy="80" r="28" fill="#fef08a" opacity="0.3"/>
    <circle cx="100" cy="80" r="24" fill="none" stroke="#fef08a" stroke-width="1.5"/>
    <path d="M92 90 C92 70, 108 70, 108 90" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <line x1="92" y1="90" x2="92" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="108" y1="90" x2="108" y2="105" stroke="#94a3b8" stroke-width="1.5"/>

    <rect x="15" y="118" width="170" height="66" rx="4" fill="#1e293b"/>
    <text x="25" y="135" fill="#f8fafc" font-size="9" font-family="monospace">ELECTRICAL PARAMS:</text>
    <text x="25" y="150" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace">12V - 24V DC / 0.8A</text>
    <text x="25" y="164" fill="#cbd5e1" font-size="8.5" font-family="monospace">Filament Temp: 2100°C</text>
    <text x="25" y="175" fill="#fef08a" font-size="8" font-family="monospace">Warm golden glow (2400K)</text>

    <rect x="15" y="190" width="170" height="64" rx="4" fill="#1e293b"/>
    <text x="25" y="206" fill="#86efac" font-size="9.5" font-weight="bold" font-family="monospace">OPERATIONAL LIFE:</text>
    <text x="25" y="222" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">600 - 1200 Hours</text>
    <text x="25" y="237" fill="#cbd5e1" font-size="8.5" font-family="monospace">Outlasts 500 candles</text>
    <text x="25" y="248" fill="#86efac" font-size="8" font-family="monospace">Zero soot / Zero fire hazard</text>

    <text x="100" y="268" fill="#10b981" font-size="9" font-family="monospace" text-anchor="middle">Continuous Electric Night Light</text>
  </g>

  <!-- Bottom Engineering Mandate -->
  <rect x="25" y="318" width="650" height="46" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
  <text x="350" y="336" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">HERMETIC SEAL MANDATE: Platinum or Dumet copper-alloy wire matches glass expansion.</text>
  <text x="350" y="352" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Ordinary copper wire expands faster than glass, cracking the seal and causing instant burnout.</text>
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
