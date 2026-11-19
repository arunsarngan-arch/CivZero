---
id: "t3-savonius-wind-turbine"
title: "Vertical-Axis Savonius Wind Turbine & Permanent Magnet Dynamo"
tier: 4
category: "Kinetic Power"
read_time: "17 min"
difficulty: "High"
summary: "How to construct a rugged, omnidirectional vertical-axis wind turbine from salvaged 55-gallon steel drums paired with a hand-wound axial-flux permanent magnet alternator (PMA) to generate off-grid 12V/24V battery power in turbulent wind conditions."
tags: "wind, turbine, savonius, generator, electricity, alternator, offgrid, energy"
---

While high-speed horizontal-axis wind turbines (HAWT, traditional 3-blade props) boast high aerodynamic efficiency, they require complex mechanical yaw gears to face shifting winds, sophisticated blade pitch controllers to survive storm gusts, and high-altitude towers to escape turbulent ground air.

The **Savonius Vertical-Axis Wind Turbine (VAWT)** is a high-torque, drag-driven aerodynamic machine. It requires **zero yaw mechanism** (accepts wind from any azimuth angle instantaneously), functions effectively in low and turbulent winds near trees and buildings, generates immense low-speed starting torque, and mounts the heavy generator and electronics directly on the ground at ground level for effortless maintenance.

```
                  SAVONIUS S-ROTOR ADVANTAGES
┌────────────────────────────────────────────────────────┐
│ • Omnidirectional: Operates in turbulent multi-winds   │
│ • Low-Tech Salvage: Constructed from 55-gallon drums   │
│ • High Starting Torque: Spins at low wind speeds       │
│ • Ground-Level Generator: Zero climbing for repairs    │
│ • Low Noise & Bird-Safe: Low Tip-Speed Ratio (TSR < 1) │
└────────────────────────────────────────────────────────┘
```

---

### Aerodynamic Architecture: The Split S-Rotor

The Savonius rotor consists of two semi-cylindrical aerodynamic scoops offset along a central axis forming an "S" shape. 

The convex scoop facing the wind experiences lower aerodynamic drag ($C_d \approx 0.38$), while the concave scoop cups the airflow ($C_d \approx 1.42$). The resulting net differential drag generates continuous rotational torque. Crucially, incoming air deflected by the returning blade is funneled through the central overlap gap, creating a secondary jet that pushes the driving blade from behind.

#### 1. Rotor Geometry Blueprint

```svg
<svg viewBox="0 0 820 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Grid -->
    <pattern id="vawtGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.6"/>
    </pattern>

    <!-- Gradients -->
    <linearGradient id="vawtScoopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>

    <!-- Markers -->
    <marker id="vawtArrowAir" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="vawtArrowTorque" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="460" fill="#070a0f"/>
  <rect width="820" height="460" fill="url(#vawtGrid)"/>

  <!-- Tactical Header -->
  <rect x="25" y="14" width="770" height="38" rx="6" fill="#0b1322" stroke="#1e293b" stroke-width="1.2"/>
  <circle cx="45" cy="33" r="5" fill="#10b981"/>
  <text x="60" y="30" fill="#10b981" font-size="12" font-weight="bold" font-family="monospace" letter-spacing="1.5">OMNIDIRECTIONAL SAVONIUS VAWT &amp; AXIAL-FLUX ALTERNATOR</text>
  <text x="60" y="44" fill="#64748b" font-size="9" font-family="monospace">SPLIT 55-GAL DRUM ROTOR (e = 0.18D OVERLAP) • LOW-RPM COG-FREE AXIAL PMA • GROUND-LEVEL GENERATION</text>

  <!-- Ground Plane -->
  <line x1="25" y1="365" x2="795" y2="365" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- ================= SECTION A: TOP-DOWN S-ROTOR AERODYNAMICS ================= -->
  <g transform="translate(40, 65)">
    <rect width="360" height="285" rx="8" fill="#0b1322" stroke="#10b981" stroke-width="1.5"/>
    <text x="180" y="24" fill="#10b981" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">ROTOR AERODYNAMIC CROSS-SECTION</text>
    <text x="180" y="38" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Differential Drag &amp; Overlap Secondary Jet</text>

    <!-- Wind Inflow Streamlines -->
    <g stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,3">
      <line x1="20" y1="95" x2="80" y2="95"/>
      <line x1="20" y1="150" x2="80" y2="150"/>
      <line x1="20" y1="205" x2="80" y2="205"/>
    </g>
    <line x1="80" y1="95" x2="95" y2="95" stroke="#38bdf8" stroke-width="2" marker-end="url(#vawtArrowAir)"/>
    <line x1="80" y1="150" x2="95" y2="150" stroke="#38bdf8" stroke-width="2" marker-end="url(#vawtArrowAir)"/>
    <line x1="80" y1="205" x2="95" y2="205" stroke="#38bdf8" stroke-width="2" marker-end="url(#vawtArrowAir)"/>
    <text x="50" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Wind Vector</text>

    <!-- Central Axle Shaft (25mm Steel) -->
    <circle cx="210" cy="150" r="16" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <circle cx="210" cy="150" r="6" fill="#f8fafc"/>
    <text x="210" y="130" fill="#cbd5e1" font-size="7.5" font-family="monospace" text-anchor="middle">25mm Shaft</text>

    <!-- Left Scoop: Driving Concave Blade (High Drag Cd = 1.42) -->
    <path d="M 115 150 A 55 55 0 0 1 210 95" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <path d="M 115 150 A 55 55 0 0 0 195 150" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <rect x="105" y="160" width="85" height="20" rx="3" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
    <text x="147" y="174" fill="#fde68a" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">DRIVE SCOOP</text>

    <!-- Right Scoop: Returning Convex Blade (Low Drag Cd = 0.38) -->
    <path d="M 305 150 A 55 55 0 0 1 210 205" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
    <path d="M 305 150 A 55 55 0 0 0 225 150" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
    <rect x="225" y="160" width="90" height="20" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="270" y="174" fill="#7dd3fc" font-size="8" font-weight="bold" font-family="monospace" text-anchor="middle">RETURN SCOOP</text>

    <!-- Overlap Jet Funnel (e = 0.18 D) -->
    <path d="M 185 145 Q 210 135 235 165" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="3,2"/>
    <text x="210" y="185" fill="#a7f3d0" font-size="7.5" font-family="monospace" text-anchor="middle">Overlap Jet (e = 0.18D)</text>

    <!-- Clockwise Torque Rotation Arrow -->
    <path d="M 160 70 A 90 90 0 0 1 270 85" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#vawtArrowTorque)"/>
    <text x="220" y="60" fill="#a7f3d0" font-size="8.5" font-weight="bold" font-family="monospace">HIGH TORQUE</text>

    <!-- Drum Dimension Metric Box -->
    <rect x="15" y="225" width="330" height="46" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="242" fill="#f8fafc" font-size="8.5" font-family="monospace">• Split 55-gallon steel drum: 90cm high × 110cm span</text>
    <text x="25" y="258" fill="#fde68a" font-size="8.5" font-family="monospace">• Stack 2 tiers 90° out-of-phase (zero dead spots!)</text>
  </g>

  <!-- ================= SECTION B: AXIAL-FLUX PERMANENT MAGNET ALTERNATOR ================= -->
  <g transform="translate(425, 65)">
    <rect width="360" height="285" rx="8" fill="#0b1322" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="180" y="24" fill="#38bdf8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">AXIAL-FLUX PERMANENT MAGNET DYNAMO</text>
    <text x="180" y="38" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">Coreless Stator • Zero Magnetic Cogging</text>

    <!-- Alternator Assembly Diagram: Dual Rotors + Stator Sandwich -->
    <g transform="translate(45, 55)">
      <!-- Top Magnet Disc (Rotor 1) -->
      <rect x="30" y="15" width="210" height="14" rx="2" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
      <!-- Neodymium Magnets Top -->
      <rect x="50" y="29" width="22" height="10" fill="#ef4444"/>
      <rect x="100" y="29" width="22" height="10" fill="#3b82f6"/>
      <rect x="150" y="29" width="22" height="10" fill="#ef4444"/>
      <rect x="200" y="29" width="22" height="10" fill="#3b82f6"/>
      <text x="61" y="38" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">N</text>
      <text x="111" y="38" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">S</text>
      <text x="161" y="38" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">N</text>
      <text x="211" y="38" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">S</text>
      <text x="250" y="25" fill="#cbd5e1" font-size="7.5" font-family="monospace">Rotor 1</text>

      <!-- Center Stationary Resin Stator with 9 Copper Coils -->
      <rect x="20" y="47" width="230" height="18" rx="2" fill="#ca8a04" fill-opacity="0.3" stroke="#eab308" stroke-width="1.2"/>
      <!-- Copper Coils Inside Stator -->
      <ellipse cx="61" cy="56" rx="9" ry="5" fill="#b45309" stroke="#f59e0b" stroke-width="1"/>
      <ellipse cx="111" cy="56" rx="9" ry="5" fill="#b45309" stroke="#f59e0b" stroke-width="1"/>
      <ellipse cx="161" cy="56" rx="9" ry="5" fill="#b45309" stroke="#f59e0b" stroke-width="1"/>
      <ellipse cx="211" cy="56" rx="9" ry="5" fill="#b45309" stroke="#f59e0b" stroke-width="1"/>
      <text x="258" y="58" fill="#fde68a" font-size="7.5" font-weight="bold" font-family="monospace">Copper Stator</text>

      <!-- Bottom Magnet Disc (Rotor 2) -->
      <rect x="50" y="73" width="22" height="10" fill="#3b82f6"/>
      <rect x="100" y="73" width="22" height="10" fill="#ef4444"/>
      <rect x="150" y="73" width="22" height="10" fill="#3b82f6"/>
      <rect x="200" y="73" width="22" height="10" fill="#ef4444"/>
      <text x="61" y="81" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">S</text>
      <text x="111" y="81" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">N</text>
      <text x="161" y="81" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">S</text>
      <text x="211" y="81" fill="#ffffff" font-size="7" font-weight="bold" font-family="monospace" text-anchor="middle">N</text>
      <rect x="30" y="83" width="210" height="14" rx="2" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
      <text x="250" y="93" fill="#cbd5e1" font-size="7.5" font-family="monospace">Rotor 2</text>
    </g>

    <!-- Alternator Specs Box -->
    <rect x="15" y="165" width="330" height="106" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="183" fill="#38bdf8" font-size="9" font-weight="bold" font-family="monospace">AXIAL PMA SPECIFICATIONS:</text>
    <text x="25" y="199" fill="#f8fafc" font-size="8.5" font-family="monospace">• 12 Neodymium N52 magnets per disc (opposing poles attract)</text>
    <text x="25" y="213" fill="#f8fafc" font-size="8.5" font-family="monospace">• 9 Coils: 16 AWG enameled wire, 110 turns per coil</text>
    <text x="25" y="227" fill="#86efac" font-size="8.5" font-family="monospace">• Coreless resin cast: Zero iron cogging = starts in 2 m/s breeze</text>
    <text x="25" y="241" fill="#fde68a" font-size="8.5" font-family="monospace">• 3-Phase AC output ➔ 35A diode bridge ➔ 12V / 24V DC battery bank</text>
    <text x="25" y="255" fill="#38bdf8" font-size="8.5" font-family="monospace">• Vehicle wheel hub tapered bearings carry all rotor weight at ground</text>
  </g>

  <!-- ================= BOTTOM STORM SHUNT DUMP LOAD MANDATE ================= -->
  <g transform="translate(25, 388)">
    <rect width="770" height="58" rx="6" fill="#0b1322" stroke="#ef4444" stroke-width="1.2"/>
    <text x="20" y="22" fill="#ef4444" font-size="9.5" font-weight="bold" font-family="monospace">CRITICAL STORM RUNAWAY DIVERSION MANDATE (DUMP LOAD):</text>
    <text x="20" y="38" fill="#cbd5e1" font-size="8.5" font-family="monospace">Never disconnect a wind turbine from its electrical load during high winds. An unloaded turbine will free-wheel to destructive speeds.</text>
    <text x="20" y="50" fill="#fca5a5" font-size="8" font-family="monospace">Use a diversion charge controller with a water-heating resistor dump load to maintain continuous electromagnetic braking.</text>
  </g>
</svg>
```

#### 2. Fabrication Protocol
1. **Drum Splitting:** Procure a clean 55-gallon (200-liter) steel drum. Cut precisely down the longitudinal center line with an angle grinder, cold chisel, or plasma torch, creating two symmetrical halves.
2. **Circular End Plates:** Cut two circles of 15 mm marine plywood or 3 mm steel sheet, 110 cm in diameter.
3. **Mounting with Overlap:** Bolt the two drum halves between the top and bottom circular plates. Offset them so the inner edges overlap the center axis. Maintain an **overlap ratio ($e/d$) of 15% to 20%**:
   $$e \approx 0.18 \times D_{\text{drum}}$$
   *Failure to leave an overlap gap reduces aerodynamic efficiency by over 30%.*
4. **Stacked Stages (90° Offset):** Build two stacked 2-tier rotor stages. Mount the top stage rotated **90° out of phase** relative to the bottom stage. This eliminates starting dead-spots, guaranteeing smooth starting torque regardless of wind azimuth.
5. **Bearings & Shaft:** Thread a 25 mm (1-inch) high-carbon steel shaft through the center. Mount bottom into a salvaged vehicle wheel hub assembly (tapered roller bearings absorb massive radial and axial thrust loads).

---

### Electrical Generation: The Axial-Flux Permanent Magnet Alternator

Standard car alternators require high RPM (1,800+ RPM) and an active 12V field coil excitation current. A Savonius rotor turns slowly (60 to 200 RPM). You must construct a **Low-RPM Axial-Flux Permanent Magnet Alternator (PMA)** that starts generating power without external grid excitation.

#### 1. Alternator Architecture
* **Rotor (Dual Steel Discs):** Two 30 cm diameter x 6 mm thick steel discs keyed to the drive shaft.
* **Magnets:** 12 rare-earth neodymium ($N42$ / $N52$) or ceramic ferrite blocks mounted around the perimeter of each steel disc with alternating polarities: $N - S - N - S - N - S$. The two discs face each other across a 15 mm air gap with opposing magnets attracting ($N$ facing $S$).
* **Stator (Non-Magnetic Copper Core):** Stationary resin disc placed between the two rotating magnet discs containing 9 hand-wound copper wire coils configured for 3-phase AC output.

#### 2. Stator Coil Winding Math & Specifications
* **Wire Gauge:** 16 AWG or 18 AWG heavy-enameled magnet wire.
* **Turns per Coil:** 100 to 120 turns per coil wound tightly around a wooden wedge former.
* **3-Phase Grouping:**
  - Phase A: Coils 1, 4, 7 (wired in series).
  - Phase B: Coils 2, 5, 8 (wired in series).
  - Phase C: Coils 3, 6, 9 (wired in series).
* **Casting in Epoxy:** Cast the coils inside fiberglass cloth and liquid polyester or epoxy resin. *Metal cores cannot be used in the stator, as iron stator cores cause "magnetic cogging" that stops wind turbines from starting in light breezes.*

---

### Power Rectification & Battery Bank Connection

The alternator produces variable-frequency, variable-voltage 3-Phase Alternating Current (AC).

```
┌──────────────────┐    3-Phase AC    ┌──────────────────────┐   Smoothed DC   ┌──────────────────┐
│  Axial-Flux PMA  │ ═══════════════> │ 6-Diode Bridge Block │ ══════════════> │ Lead-Acid Bank   │
│ (Variable Hz/V)  │  (3 Wires)       │ (35A / 1000V KBPC)   │  (2 Wires +/-)  │ (12V / 24V Deep) │
└──────────────────┘                  └──────────────────────┘                 └──────────────────┘
                                                 │
                                                 ▼ (Shunt Dump Load)
                                      ┌──────────────────────┐
                                      │ High-Watt Resistors  │ (Heats water when
                                      │ (Dump Diversion)     │  battery is full)
                                      └──────────────────────┘
```

#### 1. Diode Bridge Rectification
Connect the three phase leads ($A, B, C$) to a 3-phase bridge rectifier (or two standard monolithic bridge rectifiers). The diodes rectify AC into clean Direct Current (DC).

#### 2. Shunt Diversion Dump Load (Storm Protection)
Unlike solar panels, **a wind turbine must NEVER be disconnected from its load** during high winds. If disconnected, the turbine enters an unloaded free-wheel condition, spinning to destructive speeds that shatter bearings.
* Connect a voltage-sensing diversion charge controller.
* When battery voltage reaches $14.4\,\text{V}$ (100% full), the controller shunts electrical current into a resistive water-heating element or ceramic resistor bank, converting excess storm energy into hot water while maintaining continuous electromagnetic braking load on the turbine.
