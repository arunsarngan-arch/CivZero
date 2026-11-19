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

<svg viewBox="0 0 700 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="700" height="380" fill="#0d1117" rx="12"/>
  <rect x="20" y="20" width="660" height="340" fill="#161b22" rx="8" stroke="#30363d" stroke-width="1"/>
  
  <text x="350" y="45" font-family="monospace" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">SAVONIUS ROTOR TOP-DOWN AERODYNAMIC CROSS-SECTION</text>
  
  <!-- Wind Direction Vectors -->
  <g stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3">
    <line x1="60" y1="120" x2="160" y2="120"/>
    <line x1="60" y1="180" x2="160" y2="180"/>
    <line x1="60" y1="240" x2="160" y2="240"/>
  </g>
  <polygon points="170,120 158,116 158,124" fill="#38bdf8"/>
  <polygon points="170,180 158,176 158,184" fill="#38bdf8"/>
  <polygon points="170,240 158,236 158,244" fill="#38bdf8"/>
  <text x="90" y="105" font-family="monospace" font-size="11" fill="#7dd3fc">Incoming Wind Flow</text>
  
  <!-- Central Shaft -->
  <circle cx="350" cy="190" r="14" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
  <text x="350" y="194" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="middle">SHAFT</text>
  
  <!-- Left Scoop (Concave Driving Blade - High Drag) -->
  <path d="M 230 190 A 60 60 0 0 1 350 130" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
  <path d="M 230 190 A 60 60 0 0 0 325 190" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
  <text x="240" y="150" font-family="monospace" font-size="11" fill="#fbbf24" font-weight="bold">DRIVING SCOOP</text>
  <text x="240" y="165" font-family="monospace" font-size="8" fill="#cbd5e1">Traps wind (Cd = 1.42)</text>
  
  <!-- Right Scoop (Convex Returning Blade - Low Drag) -->
  <path d="M 470 190 A 60 60 0 0 1 350 250" fill="none" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
  <path d="M 470 190 A 60 60 0 0 0 375 190" fill="none" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
  <text x="440" y="235" font-family="monospace" font-size="11" fill="#60a5fa" font-weight="bold">RETURNING SCOOP</text>
  <text x="440" y="250" font-family="monospace" font-size="8" fill="#cbd5e1">Deflects wind (Cd = 0.38)</text>
  
  <!-- Overlap Jet Funnel -->
  <path d="M 320 185 Q 350 170 380 205" fill="none" stroke="#34d399" stroke-width="2.5" stroke-dasharray="3,2"/>
  <polygon points="383,212 376,202 384,204" fill="#34d399"/>
  <text x="350" y="225" font-family="monospace" font-size="9" fill="#34d399" text-anchor="middle">Overlap Jet (e = 0.20 D)</text>
  
  <!-- Rotation Vector -->
  <path d="M 310 90 A 110 110 0 0 1 430 110" fill="none" stroke="#ef4444" stroke-width="3"/>
  <polygon points="438,115 426,108 434,103" fill="#ef4444"/>
  <text x="380" y="85" font-family="monospace" font-size="11" fill="#f87171" font-weight="bold">TORQUE ROTATION (Clockwise)</text>
  
  <!-- Dimension Legend -->
  <text x="350" y="320" font-family="monospace" font-size="10" fill="#94a3b8" text-anchor="middle">Built from split 55-gallon (200L) steel oil drum. Height: 90 cm, Diameter: 110 cm</text>
</svg>

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
