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
<svg viewBox="0 0 700 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="700" height="380" fill="#090d16" rx="8"/>

  <!-- Module 1: The Triode Vacuum Tube -->
  <g transform="translate(30, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="100" y="24" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. THE TRIODE TUBE</text>
    <text x="100" y="38" fill="#94a3b8" font-size="8.5" font-family="monospace" text-anchor="middle">Thermionic Electrostatics</text>

    <!-- Glass tube envelope -->
    <rect x="70" y="50" width="60" height="70" rx="20" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Anode Plate -->
    <rect x="78" y="60" width="44" height="48" fill="none" stroke="#ef4444" stroke-width="2"/>
    <!-- Grid Mesh -->
    <line x1="88" y1="65" x2="88" y2="103" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="112" y1="65" x2="112" y2="103" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>
    <!-- Filament -->
    <path d="M96 100 L96 72 Q100 68 104 72 L104 100" fill="none" stroke="#fef08a" stroke-width="2"/>

    <rect x="15" y="126" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="142" fill="#f8fafc" font-size="9" font-family="monospace">ELEMENT ANATOMY:</text>
    <text x="25" y="157" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace">Cathode, Grid, Plate</text>
    <text x="25" y="171" fill="#cbd5e1" font-size="8.5" font-family="monospace">Tungsten wire filament</text>
    <text x="25" y="181" fill="#94a3b8" font-size="8" font-family="monospace">Nickel mesh spiral grid</text>

    <rect x="15" y="192" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="208" fill="#86efac" font-size="9.5" font-weight="bold" font-family="monospace">AMPLIFICATION FACTOR:</text>
    <text x="25" y="224" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">Mu (μ) = 25 - 40x</text>
    <text x="25" y="238" fill="#cbd5e1" font-size="8.5" font-family="monospace">Small grid volt swings</text>
    <text x="25" y="248" fill="#fef08a" font-size="8" font-family="monospace">Modulate huge plate amps</text>

    <text x="100" y="268" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle">Active Electronic Valve</text>
  </g>

  <!-- Module 2: The LC Oscillator Transmitter -->
  <g transform="translate(250, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="100" y="24" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. RF OSCILLATOR</text>
    <text x="100" y="38" fill="#94a3b8" font-size="8.5" font-family="monospace" text-anchor="middle">Armstrong Tuned Tank</text>

    <!-- Resonant LC Tank circuit -->
    <ellipse cx="80" cy="75" rx="14" ry="20" fill="none" stroke="#f59e0b" stroke-width="3"/>
    <line x1="120" y1="60" x2="120" y2="90" stroke="#cbd5e1" stroke-width="3"/>
    <line x1="130" y1="60" x2="130" y2="90" stroke="#cbd5e1" stroke-width="3"/>
    <path d="M94 75 L120 75 M130 75 L150 75" stroke="#f59e0b" stroke-width="2"/>

    <rect x="15" y="126" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="142" fill="#f8fafc" font-size="9" font-family="monospace">RESONANT TANK FREQ:</text>
    <text x="25" y="157" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace">f = 1 / (2π √LC)</text>
    <text x="25" y="171" fill="#cbd5e1" font-size="8.5" font-family="monospace">3.5 MHz to 7.0 MHz</text>
    <text x="25" y="181" fill="#94a3b8" font-size="8" font-family="monospace">40-meter / 80-meter HF band</text>

    <rect x="15" y="192" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="208" fill="#86efac" font-size="9.5" font-weight="bold" font-family="monospace">TICKLER COIL FEEDBACK:</text>
    <text x="25" y="224" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace">Inductive Self-Excitation</text>
    <text x="25" y="238" fill="#cbd5e1" font-size="8.5" font-family="monospace">Converts DC to pure sine RF</text>
    <text x="25" y="248" fill="#86efac" font-size="8" font-family="monospace">5 - 15 Watts RF output</text>

    <text x="100" y="268" fill="#f59e0b" font-size="9" font-family="monospace" text-anchor="middle">Continuous Wave (CW) Generator</text>
  </g>

  <!-- Module 3: Antenna & Modulation -->
  <g transform="translate(470, 25)">
    <rect x="0" y="0" width="200" height="275" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="100" y="24" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. ANTENNA &amp; VOICE</text>
    <text x="100" y="38" fill="#94a3b8" font-size="8.5" font-family="monospace" text-anchor="middle">Dipole &amp; Carbon Mic</text>

    <!-- Dipole antenna -->
    <line x1="50" y1="55" x2="100" y2="55" stroke="#10b981" stroke-width="3"/>
    <circle cx="100" cy="55" r="4" fill="#f59e0b"/>
    <line x1="100" y1="55" x2="150" y2="55" stroke="#10b981" stroke-width="3"/>
    <line x1="100" y1="55" x2="100" y2="100" stroke="#cbd5e1" stroke-width="2"/>
    <path d="M90 100 L110 100 L100 115 Z" fill="#94a3b8"/>

    <rect x="15" y="126" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="142" fill="#f8fafc" font-size="9" font-family="monospace">HALF-WAVE DIPOLE:</text>
    <text x="25" y="157" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace">Length (m) = 142.5 / f</text>
    <text x="25" y="171" fill="#cbd5e1" font-size="8.5" font-family="monospace">7 MHz = 20.3m span wire</text>
    <text x="25" y="181" fill="#94a3b8" font-size="8" font-family="monospace">Elevated 8m over ground</text>

    <rect x="15" y="192" width="170" height="60" rx="4" fill="#1e293b"/>
    <text x="25" y="208" fill="#86efac" font-size="9.5" font-weight="bold" font-family="monospace">AM VOICE MODULATION:</text>
    <text x="25" y="224" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">Carbon Granule Mic</text>
    <text x="25" y="238" fill="#cbd5e1" font-size="8.5" font-family="monospace">Sound varies battery flow</text>
    <text x="25" y="248" fill="#86efac" font-size="8" font-family="monospace">Transmits human speech!</text>

    <text x="100" y="268" fill="#10b981" font-size="9" font-family="monospace" text-anchor="middle">Global Transcontinental Reach</text>
  </g>

  <!-- Bottom Telecommunications Mandate -->
  <rect x="25" y="318" width="650" height="46" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
  <text x="350" y="336" fill="#86efac" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">IONOSPHERIC SKY-WAVE: 3.5 MHz (80m) and 7 MHz (40m) signals bounce off the ionosphere.</text>
  <text x="350" y="352" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">A modest 10-Watt transmitter reaches past line-of-sight to 500+ km night propagation.</text>
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
