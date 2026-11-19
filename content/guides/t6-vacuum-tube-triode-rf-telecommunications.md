---
id: "t6-vacuum-tube-triode-rf-telecommunications"
title: "Vacuum Tube Triode Fabrication, Audio Amplification & Long-Range RF Transmitters"
tier: 6
category: "Telecommunications"
read_time: "26 min"
difficulty: "Advanced"
summary: "Definitive handbook for reconstructing thermionic electronic amplification and wireless telecommunications: fabricating triode vacuum tubes, barium getter flashing, Armstrong LC tuned RF oscillators, carbon microphone AM voice modulation, and long-wire dipole antennas."
tags: "telecommunications, vacuum tube, triode, radio, transmitter, dr stone, senku, electronics, rf, wireless"
---

A passive crystal radio (such as the galena receiver in Tier 6) is an invaluable zero-power emergency monitor, but it cannot transmit information across mountain ranges, nor can it amplify weak radio signals from distant survivor settlements. 

The invention that made modern telecommunications, radar, and early computing possible was Lee de Forest's 1906 **Audion (The Vacuum Tube Triode)**. By interposing an electrostatic **control grid** between a heated thermionic cathode and a high-voltage anode plate, a minute input signal of a few microvolts controls a powerful current flow, delivering voltage amplification factors exceeding **$30\times$ per stage**. Configured with positive feedback, a single triode becomes a continuous radio transmitter capable of broadcasting human voice across hundreds of kilometers.

```
                      THE THERMIONIC TRIODE CONTROL CIRCUIT
                      
                         [ High-Voltage Plate Battery (100V DC) ]
                                            │
                                            ▼
                           Anode Metal Plate (Attracts Electrons)
                                            ▲
                                            │ (Electron Cloud Stream)
                Input Audio / RF ──> [ Control Grid Mesh ]
                 (Microvolt Wave)           │ (Electrostatic Gatekeeper)
                                            │
                           Cathode Filament (Glowing @ 2000K)
                                            │
                         [ Low-Voltage Filament Battery (6V DC) ]
```

---

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="triodeGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <linearGradient id="rfGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
    </marker>
    <marker id="arrowSky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#triodeGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">TRIODE VACUUM TUBE &amp; ARMSTRONG RF OSCILLATOR TRANSMITTER</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">THERMIONIC HIGH-FREQUENCY CW</text>

  <!-- MODULE 1: THE TRIODE VACUUM TUBE (LEFT) -->
  <g id="triodeTube" transform="translate(25, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Glass Vacuum Tube Envelope -->
    <rect x="75" y="45" width="95" height="90" rx="28" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
    <!-- Anode Plate (Outer Red) -->
    <rect x="88" y="55" width="68" height="65" fill="none" stroke="#ef4444" stroke-width="2.5"/>
    <!-- Control Grid Mesh (Dashed Amber) -->
    <line x1="104" y1="60" x2="104" y2="115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2"/>
    <line x1="140" y1="60" x2="140" y2="115" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2"/>
    <!-- Incandescent Filament Cathode (Center Yellow Loop) -->
    <path d="M 116 115 L 116 75 Q 122 70 128 75 L 128 115" fill="none" stroke="#fef08a" stroke-width="2.5"/>
    <circle cx="122" cy="72" r="3" fill="#fef08a"/>
    <text x="122" y="148" fill="#bae6fd" font-size="8" font-family="monospace" text-anchor="middle">Plate • Grid • Filament</text>

    <!-- Electrode Physics Specs Pill -->
    <rect x="18" y="155" width="210" height="75" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1"/>
    <text x="28" y="173" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace">ELEMENT ANATOMY:</text>
    <text x="28" y="188" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace">Directly Heated Tungsten Cathode</text>
    <text x="28" y="202" fill="#cbd5e1" font-size="8" font-family="monospace">Nickel mesh spiral grid electrostatic gate</text>
    <text x="28" y="215" fill="#94a3b8" font-size="8" font-family="monospace">Cylindrical nickel plate anode (+250V)</text>

    <!-- Amplification Factor Pill -->
    <rect x="18" y="238" width="210" height="72" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="257" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">AMPLIFICATION FACTOR:</text>
    <text x="28" y="272" fill="#86efac" font-size="9" font-weight="bold" font-family="monospace">Gain (μ) = 25× – 40×</text>
    <text x="28" y="286" fill="#cbd5e1" font-size="8" font-family="monospace">Millivolt grid swings gate heavy plate amps</text>
    <text x="28" y="299" fill="#fde68a" font-size="8" font-family="monospace">The fundamental active electronic valve</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="145" height="20" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#0284c7"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="83" y="24" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">TRIODE VALVE</text>
  </g>

  <!-- MODULE 2: ARMSTRONG TUNED LC OSCILLATOR (CENTER) -->
  <g id="oscillator" transform="translate(285, 60)">
    <rect x="0" y="0" width="250" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Resonant LC Tank Schematic Graphic -->
    <rect x="40" y="50" width="170" height="80" rx="4" fill="#070a0f" stroke="#f59e0b" stroke-width="1.5"/>
    <!-- Inductor Coils (Left) -->
    <ellipse cx="80" cy="90" rx="16" ry="24" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <text x="80" y="94" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">L</text>
    <!-- Variable Air Capacitor (Right) -->
    <line x1="140" y1="72" x2="140" y2="108" stroke="#cbd5e1" stroke-width="3"/>
    <line x1="152" y1="72" x2="152" y2="108" stroke="#cbd5e1" stroke-width="3"/>
    <path d="M 132 108 L 160 72" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowAmber)"/>
    <text x="146" y="122" fill="#cbd5e1" font-size="8" font-family="monospace" text-anchor="middle">C (Var)</text>
    <path d="M 96 90 L 140 90 M 152 90 L 185 90" stroke="#f59e0b" stroke-width="2"/>

    <!-- Resonant Frequency Specs Pill -->
    <rect x="18" y="155" width="214" height="75" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1"/>
    <text x="28" y="173" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace">RESONANT TANK FREQUENCY:</text>
    <text x="28" y="188" fill="#fde68a" font-size="9" font-weight="bold" font-family="monospace">f = 1 / [2π √(L · C)]</text>
    <text x="28" y="202" fill="#cbd5e1" font-size="8" font-family="monospace">3.5 MHz (80m) to 7.0 MHz (40m) HF</text>
    <text x="28" y="215" fill="#94a3b8" font-size="8" font-family="monospace">High-Q ceramic coil form prevents drift</text>

    <!-- Tickler Coil Feedback Pill -->
    <rect x="18" y="238" width="214" height="72" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="257" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">TICKLER COIL SELF-EXCITATION:</text>
    <text x="28" y="272" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">Magnetic Inductive Feedback</text>
    <text x="28" y="286" fill="#cbd5e1" font-size="8" font-family="monospace">Converts DC B-battery into pure RF sine wave</text>
    <text x="28" y="299" fill="#38bdf8" font-size="8" font-family="monospace">RF Output Power: 5–15 Watts CW</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="150" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#d97706"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="86" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">TUNED RF TANK</text>
  </g>

  <!-- MODULE 3: ANTENNA & AM MODULATION (RIGHT) -->
  <g id="antennaMod" transform="translate(550, 60)">
    <rect x="0" y="0" width="245" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Resonant Half-Wave Dipole Antenna Diagram -->
    <line x1="30" y1="65" x2="115" y2="65" stroke="#10b981" stroke-width="3.5"/>
    <circle cx="122" cy="65" r="5" fill="#f59e0b"/>
    <line x1="129" y1="65" x2="215" y2="65" stroke="#10b981" stroke-width="3.5"/>
    <line x1="122" y1="65" x2="122" y2="105" stroke="#cbd5e1" stroke-width="2.5"/>
    <path d="M 112 105 L 132 105 L 122 120 Z" fill="#94a3b8"/>
    <text x="122" y="55" fill="#86efac" font-size="8" font-family="monospace" text-anchor="middle">λ/2 Resonant Dipole (20.3m)</text>

    <!-- Dipole Dimensioning Pill -->
    <rect x="18" y="155" width="210" height="75" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="28" y="173" fill="#10b981" font-size="8.5" font-weight="bold" font-family="monospace">DIPOLE DIMENSIONS:</text>
    <text x="28" y="188" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace">Length (m) = 142.5 / f (MHz)</text>
    <text x="28" y="202" fill="#cbd5e1" font-size="8" font-family="monospace">At 7.0 MHz = 20.35m total copper span</text>
    <text x="28" y="215" fill="#94a3b8" font-size="8" font-family="monospace">Elevate &gt;8 meters horizontal in trees</text>

    <!-- Voice Modulation Pill -->
    <rect x="18" y="238" width="210" height="72" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="28" y="257" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">AM VOICE MODULATION:</text>
    <text x="28" y="272" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace">Carbon Granule Microphone</text>
    <text x="28" y="286" fill="#cbd5e1" font-size="8" font-family="monospace">Voice sound waves compress granules</text>
    <text x="28" y="299" fill="#38bdf8" font-size="8" font-family="monospace">Modulates plate voltage: voice over RF!</text>

    <!-- Callout Pill Badges -->
    <rect x="12" y="10" width="155" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="22" cy="20" r="7" fill="#10b981"/>
    <text x="22" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="88" y="24" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">DIPOLE &amp; MODULATOR</text>
  </g>

  <!-- IONOSPHERIC PROPAGATION MANDATE FOOTER -->
  <rect x="25" y="402" width="770" height="42" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
  <circle cx="45" cy="423" r="10" fill="#10b981"/>
  <text x="45" y="427" fill="#0f172a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">📡</text>
  <text x="65" y="420" fill="#86efac" font-size="10.5" font-weight="bold" font-family="monospace">IONOSPHERIC SKY-WAVE PROPAGATION: 3.5 MHz (80M) &amp; 7.0 MHz (40M) BANDS</text>
  <text x="65" y="434" fill="#cbd5e1" font-size="8.5" font-family="monospace">Radio waves refract off the F2 ionospheric layer at night, bypassing the curvature of the Earth. A 10-Watt homebuilt triode reaches 500–2,000 km without satellites or repeater towers.</text>
</svg>
```

---

## 1. Fabricating the Triode Vacuum Tube

A triode consists of three elements sealed inside a high-vacuum glass bulb evacuated with a Sprengel mercury pump to $<10^{-5}\text{ torr}$:

1. **The Filament (Cathode):** A fine tungsten wire or carbonized bamboo loop ($0.15\text{ mm}$ diameter). When driven with **6 Volts at 1.0 Ampere** ($6\text{ Watts}$), it glows bright yellow ($2200\text{ K}$). Thermal energy boils electrons off the atoms, creating a glowing cloud of free negative electrons (the *space charge*).
2. **The Anode (The Plate):** A hollow cylinder or flat rectangle folded from thin nickel or iron sheet ($20 \times 30\text{ mm}$). Connected to the positive terminal of a **90V to 150V high-voltage DC battery pack** (ten 9V batteries or an array of chemical cells). The positive electrostatic charge attracts electrons across the vacuum gap.
3. **The Control Grid:** A fine, open helix of nickel or copper wire (pitch: 1.5 mm) wound around two support rods positioned directly between the filament and the plate.
4. **The Barium Getter (Vacuum Scavenger):** Even after hours on a Sprengel pump, trace microscopic molecules of oxygen and nitrogen remain trapped in the metal pores. Weld a small tantalum cup holding a pellet of **barium or magnesium metal** inside the bulb. Once the bulb is tipped off, heat the cup from the exterior using an induction RF coil. The barium flashes into vapor and condenses onto the cool glass as a mirror-like silver coating, chemically capturing every remaining gas molecule into an immovable solid oxide.

---

## 2. Electrostatic Amplification Mechanics

How does the triode amplify?
- The control grid is biased with a slight negative voltage (e.g., **$-3\text{V DC}$**). Because negative charges repel electrons, the grid repels the cloud of electrons boiling off the filament, acting like a Venetian blind that regulates how many electrons can pass through to the positive plate.
- A tiny microvolt radio signal picked up by an antenna is fed onto this grid.
- A **$+0.5\text{V}$ rise** on the grid opens the electrostatic gate, allowing a massive surge of electrons ($+15\text{ mA}$) to crash into the plate.
- A **$-0.5\text{V}$ drop** chokes the electron flow to a trickle.
- Because the plate circuit is connected to a high-voltage battery through a $50,000\ \Omega$ load resistor, that $15\text{ mA}$ current surge creates a **$30\text{V}$ voltage swing** across the load. The original $1\text{V}$ input has been cleanly amplified **$30\times$** without mechanical distortion.

---

## 3. The Armstrong LC Tuned Oscillator (Transmitter Circuit)

To transmit electromagnetic waves, you must convert continuous DC battery power into high-frequency alternating radio currents:

```
                            [ +120V Plate Battery ]
                                      │
                                      ▼
             ┌───────────> [ Primary Tank Inductor L1 ]
             │                        │
             │           [ Variable Air Capacitor C1 ]
             │                        │
             │            (LC Resonant Tuning: 7 MHz)
             │                        │
             │                        ▼
             │                  Triode Plate
             │                        │
     (Tickler Coil L2)          Control Grid
     (Magnetic Feedback)              ▲
             │                        │
             └────────────────────────┘
```

1. **The Resonant Tank ($L_1 - C_1$):**
   - Wind 25 turns of heavy copper wire on a 50 mm cardboard or ceramic tube ($L_1 \approx 10\ \mu\text{H}$).
   - Connect in parallel with an adjustable air-spaced capacitor consisting of interlocking semicircular aluminum or zinc plates ($C_1 \approx 100\text{ pF}$).
   - Resonant frequency formula:
     $$f = \frac{1}{2\pi \sqrt{L_1 C_1}}$$
   - At $10\ \mu\text{H}$ and $100\text{ pF}$, the circuit resonates at **$5.03\text{ MHz}$** ($60\text{ meters}$ wavelength).
2. **The Tickler Coil ($L_2$, Positive Feedback):**
   - Wind a secondary coil of 8 turns directly adjacent to $L_1$ and connect it between the control grid and ground.
   - When the plate current surges, it induces an in-phase magnetic pulse in the tickler coil, which kicks the grid, reinforcing the oscillation.
   - The circuit bursts into perpetual, self-sustaining high-frequency oscillation, churning out **5 to 10 Watts of pure RF alternating current**.

---

## 4. AM Voice Modulation & Dipole Antenna Setup

### Transmitting Voice:
1. **The Carbon Granule Microphone:** Fill a wooden pillbox with crushed, sieved anthracite coal or charred graphite powder ($0.5\text{ mm}$ grains) sandwiched between two thin brass diaphragms.
2. **Modulation Linkage:** Wire the microphone in series with the B+ battery line supplying the triode plate.
3. When human vocal cords vibrate the microphone diaphragm, acoustic sound waves compress the carbon grains, varying the electrical resistance in rhythm with speech.
4. The fluctuating current modulates the amplitude of the 5 MHz radio wave (Amplitude Modulation / AM).

### The Half-Wave Dipole Antenna:
1. **Dimension Calculation:** To radiate electromagnetic waves efficiently into the ether, the antenna wire must match half the operating wavelength:
   $$\text{Total Length (meters)} = \frac{142.5}{f\text{ (MHz)}}$$
   - For a **7.1 MHz** transmitter, total dipole length is **20.0 meters (65.6 feet)**.
2. **Construction:** Cut two equal lengths of 10-meter stranded copper wire. Suspend horizontally between two trees or tall wooden poles at least **8 meters above the ground**, insulated at the ends with glass bottle necks or ceramic insulators.
3. **Feedline:** Connect the inner ends of the two wires to the transmitter output link coil via a twisted pair or open-wire ladder line.
4. **Propagation:** At night, 7 MHz radio waves bounce off the ionospheric F-layer, skipping over mountains and curvature to deliver voice and Morse code across **500 to 1,500 kilometers**.
