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
<svg viewBox="0 0 700 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="700" height="360" fill="#090d16"/>

  <!-- Antenna Tower / Long Wire -->
  <line x1="80" y1="40" x2="80" y2="150" stroke="#f59e0b" stroke-width="3"/>
  <path d="M40 40 L80 80 L120 40" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <path d="M55 55 L80 80 L105 55" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <text x="80" y="25" fill="#fde68a" font-size="11" font-family="monospace" text-anchor="middle">Long Wire Antenna (30m+)</text>

  <!-- Tuning Inductor (Coil) -->
  <g transform="translate(180, 100)">
    <rect x="0" y="0" width="60" height="130" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
    <!-- Wire windings -->
    <line x1="0" y1="20" x2="60" y2="20" stroke="#e0e7ff" stroke-width="2"/>
    <line x1="0" y1="35" x2="60" y2="35" stroke="#e0e7ff" stroke-width="2"/>
    <line x1="0" y1="50" x2="60" y2="50" stroke="#e0e7ff" stroke-width="2"/>
    <line x1="0" y1="65" x2="60" y2="65" stroke="#e0e7ff" stroke-width="2"/>
    <line x1="0" y1="80" x2="60" y2="80" stroke="#e0e7ff" stroke-width="2"/>
    <line x1="0" y1="95" x2="60" y2="95" stroke="#e0e7ff" stroke-width="2"/>
    <line x1="0" y1="110" x2="60" y2="110" stroke="#e0e7ff" stroke-width="2"/>
    <!-- Slider contact -->
    <circle cx="60" cy="50" r="5" fill="#ef4444"/>
    <text x="30" y="150" fill="#a5f3fc" font-size="10" font-family="monospace" text-anchor="middle">Slider Coil</text>
  </g>

  <!-- Ground Connection -->
  <line x1="210" y1="230" x2="210" y2="290" stroke="#10b981" stroke-width="3"/>
  <line x1="190" y1="290" x2="230" y2="290" stroke="#10b981" stroke-width="3"/>
  <line x1="195" y1="297" x2="225" y2="297" stroke="#10b981" stroke-width="2.5"/>
  <line x1="202" y1="304" x2="218" y2="304" stroke="#10b981" stroke-width="2"/>
  <text x="210" y="325" fill="#34d399" font-size="11" font-family="monospace" text-anchor="middle">Cold Water Pipe / Earth Rod</text>

  <!-- Galena / Diode Detector -->
  <g transform="translate(350, 110)">
    <rect x="0" y="0" width="110" height="70" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <!-- Crystal Mount -->
    <rect x="15" y="40" width="25" height="15" fill="#64748b"/>
    <!-- Cat's whisker wire -->
    <path d="M90 25 Q60 20 40 43" fill="none" stroke="#fde047" stroke-width="2.5"/>
    <text x="55" y="20" fill="#fde68a" font-size="10" font-family="monospace" text-anchor="middle">Cat Whisker</text>
    <text x="55" y="62" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Galena Crystal (PbS)</text>
  </g>

  <!-- Circuit Trace Lines -->
  <line x1="80" y1="150" x2="180" y2="150" stroke="#f59e0b" stroke-width="3"/>
  <line x1="240" y1="150" x2="350" y2="150" stroke="#cbd5e1" stroke-width="3"/>
  <line x1="460" y1="150" x2="540" y2="150" stroke="#cbd5e1" stroke-width="3"/>

  <!-- High-Z Magnetic Earpiece (2000 Ohms) -->
  <circle cx="580" cy="150" r="30" fill="#334155" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="580" cy="150" r="16" fill="#0f172a"/>
  <text x="580" y="154" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">Audio</text>
  <text x="580" y="200" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">2kΩ Piezo Headphone</text>
  <path d="M580 180 L580 260 L210 260" stroke="#94a3b8" stroke-width="2" fill="none"/>

  <!-- Schematic Note -->
  <rect x="360" y="225" width="280" height="50" rx="4" fill="#111827" stroke="#475569" stroke-width="1.5"/>
  <text x="370" y="245" fill="#38bdf8" font-size="11" font-family="monospace">ZERO BATTERY POWER NEEDED.</text>
  <text x="370" y="262" fill="#94a3b8" font-size="10" font-family="monospace">Picks up AM waves strictly on RF power.</text>
</svg>
```

## Construction & Alignment
1. **The Antenna & Ground (70% of Performance):** String at least 25 to 50 meters of insulated copper or fencing wire as high as possible in the trees. The ground lead must clamp directly to a copper stake driven 2 meters into moist earth or cold-water copper plumbing.
2. **The Inductor:** Wrap 120 turns of 24 AWG enameled magnet wire tightly around a 5 cm (2-inch) cardboard toilet roll tube or PVC pipe. Sand the enamel insulation off a linear track along the top so a sliding brass wiper contacts individual turns.
3. **The Detector:** Mount a natural specimen of lead sulfide ore (Galena) or germanium diode (1N34A). A safety pin lightly touching a flame-blued razor blade also forms an effective semiconductor Schottky barrier.
4. **Listening:** Plug in high-impedance headphones (2000 ohms or ceramic piezo element; modern 32-ohm earbuds require an audio impedance matching transformer like 10k:8 ohm).

