---
id: t4-crystal-radio-receiver
tier: 6
tier_name: Tier 4 - Advanced Reference
title: Zero-Power Galena Crystal Radio
category: "Telecommunications"
read_time: 5 min
difficulty: Medium
tags: radio, communications, galena, diode, inductor, antenna, receiver
summary: Receive amplitude-modulated (AM) emergency broadcast transmissions across 500kHz–1600kHz with ZERO battery or external electrical power using electromagnetic resonance.
---

## Physical Resonance & Detection
An unpowered crystal radio operates solely on the minuscule microwatts of electromagnetic energy captured by a long-wire antenna. An LC tuned tank circuit (Inductor $L$ + Variable Capacitor $C$) resonates at a specific carrier frequency ($f = \frac{1}{2\pi\sqrt{LC}}$). A point-contact semiconductor diode (natural galena crystal or iron pyrite touched by a fine phosphor bronze "cat's whisker" wire) rectifies the high-frequency RF carrier wave, demultiplexing audible audio frequencies directly to high-impedance headphones.

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="radioGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>
    <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
    <marker id="arrowSky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Obsidian Background & Tactical Grid -->
  <rect x="0" y="0" width="820" height="460" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="460" fill="url(#radioGrid)"/>

  <!-- Blueprint Header Title -->
  <rect x="25" y="15" width="770" height="32" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="40" y="36" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">ZERO-POWER GALENA CRYSTAL RADIO RECEIVER — SCHEMATIC</text>
  <text x="770" y="36" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">EMERGENCY AM BROADCAST DEMODULATOR</text>

  <!-- STAGE 1: ANTENNA & EARTH GROUND SYSTEM (LEFT) -->
  <g id="antennaGround" transform="translate(30, 60)">
    <rect x="0" y="0" width="165" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Antenna T-mast symbol & Long-Wire -->
    <line x1="82" y1="45" x2="82" y2="160" stroke="#f59e0b" stroke-width="3"/>
    <path d="M 40 45 L 82 85 L 124 45" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 55 60 L 82 85 L 109 60" stroke="#f59e0b" stroke-width="2" fill="none"/>
    <line x1="20" y1="45" x2="144" y2="45" stroke="#f59e0b" stroke-width="3"/>

    <!-- Inbound RF Wave Vector -->
    <path d="M 12 110 Q 22 100 32 110 T 52 110" fill="none" stroke="#fde047" stroke-width="2"/>
    <text x="82" y="105" fill="#fde68a" font-size="8.5" font-family="monospace" text-anchor="middle">30–50m Long-Wire</text>
    <text x="82" y="118" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Tree / Ridge Aerial</text>

    <!-- Antenna Downlead connection -->
    <path d="M 82 160 L 165 160" stroke="#f59e0b" stroke-width="3"/>

    <!-- Ground System -->
    <line x1="82" y1="210" x2="82" y2="280" stroke="#10b981" stroke-width="3"/>
    <line x1="55" y1="280" x2="110" y2="280" stroke="#10b981" stroke-width="3.5"/>
    <line x1="62" y1="287" x2="102" y2="287" stroke="#10b981" stroke-width="2.5"/>
    <line x1="72" y1="294" x2="92" y2="294" stroke="#10b981" stroke-width="2"/>
    <line x1="78" y1="301" x2="86" y2="301" stroke="#10b981" stroke-width="1.5"/>

    <!-- Callout Pill Badges -->
    <rect x="10" y="10" width="145" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="20" cy="20" r="7" fill="#d97706"/>
    <text x="20" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
    <text x="82" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">ANTENNA &amp; GROUND</text>

    <text x="82" y="318" fill="#34d399" font-size="8" font-family="monospace" text-anchor="middle">2m Deep Copper Stake</text>
  </g>

  <!-- STAGE 2: LC RESONANT TUNING TANK (CENTER-LEFT) -->
  <g id="tuningTank" transform="translate(210, 60)">
    <rect x="0" y="0" width="180" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Solenoid Inductor Coil Form (5cm PVC pipe) -->
    <rect x="40" y="55" width="80" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    
    <!-- Copper Wire Windings (120 Turns) -->
    <g stroke="#f59e0b" stroke-width="2">
      <line x1="40" y1="70" x2="120" y2="70"/>
      <line x1="40" y1="82" x2="120" y2="82"/>
      <line x1="40" y1="94" x2="120" y2="94"/>
      <line x1="40" y1="106" x2="120" y2="106"/>
      <line x1="40" y1="118" x2="120" y2="118"/>
      <line x1="40" y1="130" x2="120" y2="130"/>
      <line x1="40" y1="142" x2="120" y2="142"/>
      <line x1="40" y1="154" x2="120" y2="154"/>
      <line x1="40" y1="166" x2="120" y2="166"/>
      <line x1="40" y1="178" x2="120" y2="178"/>
      <line x1="40" y1="190" x2="120" y2="190"/>
    </g>

    <!-- Sanded Wiper Track & Slider Wiper Contact -->
    <line x1="120" y1="70" x2="120" y2="190" stroke="#fef08a" stroke-width="3" stroke-dasharray="2,3"/>
    <circle cx="120" cy="118" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
    <path d="M 126 118 L 180 118" stroke="#ef4444" stroke-width="2.5"/>
    <text x="135" y="112" fill="#fca5a5" font-size="8" font-family="monospace">Slider</text>

    <!-- Ground Bus Line below coil -->
    <path d="M 0 210 L 80 210 L 80 195" stroke="#10b981" stroke-width="3"/>
    <path d="M 80 210 L 180 210" stroke="#10b981" stroke-width="3"/>

    <!-- Callout Pill Badges -->
    <rect x="10" y="10" width="160" height="20" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="1.2"/>
    <circle cx="20" cy="20" r="7" fill="#0284c7"/>
    <text x="20" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
    <text x="90" y="24" fill="#bae6fd" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">120-TURN TUNING COIL</text>

    <!-- Resonance Formula Pill -->
    <rect x="15" y="245" width="150" height="48" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-dasharray="2,2"/>
    <text x="90" y="263" fill="#38bdf8" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">f = 1 / [2π√(LC)]</text>
    <text x="90" y="278" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Tuning: 500–1600 kHz AM</text>
  </g>

  <!-- STAGE 3: GALENA CRYSTAL DIODE DETECTOR (CENTER-RIGHT) -->
  <g id="detector" transform="translate(405, 60)">
    <rect x="0" y="0" width="195" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- Inbound line from slider wiper -->
    <path d="M 0 118 L 35 118" stroke="#ef4444" stroke-width="2.5"/>

    <!-- Galena Crystal Mount & Ore Specimen -->
    <rect x="35" y="85" width="125" height="95" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <!-- Lead sulfide ore chunk -->
    <polygon points="50,145 65,115 95,120 105,150 70,160" fill="url(#crystalGrad)" stroke="#cbd5e1" stroke-width="1"/>
    <text x="80" y="172" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">Galena Specimen (PbS)</text>

    <!-- Phosphor Bronze Cat-Whisker Spring -->
    <path d="M 145 105 Q 115 90 90 125" fill="none" stroke="#fde047" stroke-width="2.5"/>
    <circle cx="90" cy="125" r="3" fill="#ef4444"/>
    <text x="135" y="98" fill="#fde68a" font-size="8" font-family="monospace">Cat-Whisker</text>

    <!-- Rectified Signal Output Line -->
    <path d="M 90 125 L 145 125 L 195 125" stroke="#38bdf8" stroke-width="3"/>

    <!-- Ground line passthrough -->
    <path d="M 0 210 L 195 210" stroke="#10b981" stroke-width="3"/>

    <!-- Callout Pill Badges -->
    <rect x="10" y="10" width="175" height="20" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="1.2"/>
    <circle cx="20" cy="20" r="7" fill="#d97706"/>
    <text x="20" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
    <text x="97" y="24" fill="#fde68a" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">GALENA CRYSTAL DETECTOR</text>

    <!-- Semiconductor Physics Note -->
    <rect x="15" y="245" width="165" height="48" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
    <text x="97" y="263" fill="#fde68a" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">POINT-CONTACT SCHOTTKY</text>
    <text x="97" y="278" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Rectifies RF → Audio Envelope</text>
  </g>

  <!-- STAGE 4: HIGH-IMPEDANCE EARPIECE & RF BYPASS (RIGHT) -->
  <g id="audioOut" transform="translate(615, 60)">
    <rect x="0" y="0" width="175" height="325" rx="8" fill="#0d1526" stroke="#475569" stroke-width="1.5"/>

    <!-- RF Bypass Ceramic Capacitor (1000pF) in parallel -->
    <path d="M 0 125 L 45 125 L 45 150" stroke="#38bdf8" stroke-width="2.5"/>
    <line x1="35" y1="150" x2="55" y2="150" stroke="#38bdf8" stroke-width="2"/>
    <line x1="35" y1="156" x2="55" y2="156" stroke="#38bdf8" stroke-width="2"/>
    <path d="M 45 156 L 45 210 L 0 210" stroke="#10b981" stroke-width="2.5"/>
    <text x="45" y="174" fill="#64748b" font-size="7" font-family="monospace" text-anchor="middle">1000pF</text>

    <!-- High-Z Headphone Earpiece (2000 Ohm) -->
    <path d="M 45 125 L 115 125 L 115 145" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="115" cy="175" r="26" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="115" cy="175" r="14" fill="#070a0f" stroke="#f59e0b" stroke-width="1.5"/>
    <path d="M 115 201 L 115 210 L 45 210" stroke="#10b981" stroke-width="3"/>

    <!-- Acoustic Wave Indicators -->
    <path d="M 148 165 Q 158 175 148 185" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <path d="M 154 158 Q 168 175 154 192" fill="none" stroke="#38bdf8" stroke-width="2"/>

    <!-- Callout Pill Badges -->
    <rect x="10" y="10" width="155" height="20" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
    <circle cx="20" cy="20" r="7" fill="#10b981"/>
    <text x="20" y="23" fill="#ffffff" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
    <text x="88" y="24" fill="#86efac" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">2000Ω PIEZO EARPIECE</text>

    <rect x="15" y="245" width="145" height="50" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
    <text x="87" y="263" fill="#86efac" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">HIGH IMPEDANCE LOAD</text>
    <text x="87" y="278" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">Audible voice microwatts</text>
    <text x="87" y="289" fill="#94a3b8" font-size="7" font-family="monospace" text-anchor="middle">(32Ω requires 10k:8 transformer)</text>
  </g>

  <!-- ZERO POWER BANNER FOOTER -->
  <rect x="25" y="402" width="770" height="42" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/>
  <circle cx="45" cy="423" r="10" fill="#10b981"/>
  <text x="45" y="427" fill="#0f172a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">✓</text>
  <text x="65" y="421" fill="#86efac" font-size="10.5" font-weight="bold" font-family="monospace">100% PASSIVE RECEIVER — ZERO BATTERIES OR EXTERNAL POWER REQUIRED</text>
  <text x="65" y="435" fill="#cbd5e1" font-size="8.5" font-family="monospace">Operates indefinitely on ambient RF electromagnetic field energy radiated by AM transmitting towers up to 100+ miles.</text>
</svg>
```

## Construction & Alignment
1. **The Antenna & Ground (70% of Performance):** String at least 25 to 50 meters of insulated copper or fencing wire as high as possible in the trees. The ground lead must clamp directly to a copper stake driven 2 meters into moist earth or cold-water copper plumbing.
2. **The Inductor:** Wrap 120 turns of 24 AWG enameled magnet wire tightly around a 5 cm (2-inch) cardboard toilet roll tube or PVC pipe. Sand the enamel insulation off a linear track along the top so a sliding brass wiper contacts individual turns.
3. **The Detector:** Mount a natural specimen of lead sulfide ore (Galena) or germanium diode (1N34A). A safety pin lightly touching a flame-blued razor blade also forms an effective semiconductor Schottky barrier.
4. **Listening:** Plug in high-impedance headphones (2000 ohms or ceramic piezo element; modern 32-ohm earbuds require an audio impedance matching transformer like 10k:8 ohm).

