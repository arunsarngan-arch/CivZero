---
id: "t1-emergency-trauma-triage"
title: "Field Trauma Stabilization: Hemorrhage, Splinting, Airway & Chest Wounds"
tier: 1
category: "Emergency Medicine"
read_time: "16 min"
difficulty: "High"
summary: "Field protocol for managing immediate life-threatening injuries when emergency medical services are nonexistent: wound packing, three-sided chest seal for sucking chest wounds, improvised traction splints, and hypovolemic shock resuscitation."
tags: "trauma, first aid, tourniquet, chest seal, splint, shock, medical, emergency"
---

In a collapsed infrastructure environment, traumatic injury (from debris, falling timber, physical violence, or mechanical failure) is the leading cause of preventable mortality within the first 60 minutes. Without paramedics or surgical units, emergency first responders must execute the military **M.A.R.C.H.** protocol in strict sequence:

```
  THE M.A.R.C.H. TRIAGE SEQUENCE
┌────────────────────────────────────────────────────────┐
│ M - Massive Bleeding   → Occlude arterial hemorrhage   │
│ A - Airway             → Clear obstructions & position │
│ R - Respiration        → Seal open pneumothorax wounds │
│ C - Circulation        → Stabilize shock & splint breaks│
│ H - Hypothermia / Head → Insulate and preserve heat    │
└────────────────────────────────────────────────────────┘
```

---

### Step 1: Massive Hemorrhage Control

Blood loss from a lacerated femoral, brachial, or carotid artery can cause fatal hypovolemic shock within 90 to 180 seconds.

#### 1. Extremity Bleeding (Arms and Legs)
* **Primary Intervention:** Windlass Tourniquet applied 5–7 cm proximal to the wound (never over a joint). If the bleeding location is obscured by clothing or darkness, place the tourniquet "high and tight" at the root of the limb.
* **Tightening Metric:** Twist windlass until bright-red pulsatile bleeding ceases completely and the distal peripheral pulse (wrist radial or ankle tibial) is absent. Lock the windlass rod securely.

#### 2. Junctional Bleeding (Groin, Axilla/Armpit, Neck)
Tourniquets cannot compress junctional wounds.
* **Technique (Wound Packing):**
  1. Clear clotted blood from the wound cavity using fingers.
  2. Take clean sterile gauze (or strips of boiled cotton fabric).
  3. Form a small "ball" of gauze at the end of the roll and press it with a finger directly against the bleeding vessel bone interface at the base of the wound cavity.
  4. Continue feeding gauze tightly into the cavity under continuous finger pressure until the entire cavity is tightly packed like concrete.
  5. Apply full body-weight manual pressure directly over the packed cavity for a minimum of **3 continuous minutes** (for hemostatic gauze) or **10 continuous minutes** (for plain gauze).
  6. Secure with a compressive pressure wrap anchored with a tight knot.

---

### Step 2: Open Sucking Chest Wound & Tension Pneumothorax

Penetrating trauma to the thoracic cage (stab, shrapnel, puncture) disrupts negative intrapleural pressure. With every inhalation, atmospheric air is drawn through the chest wall into the pleural cavity rather than into the lung, collapsing the lung and creating pressure that eventually kinks the vena cava, causing cardiac arrest.

#### 1. The Vented Flutter Seal Blueprint

```svg
<svg viewBox="0 0 820 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Blueprint Coordinate Grid -->
    <pattern id="chestGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>

    <!-- Chest Wall Skin Gradient -->
    <linearGradient id="chestSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#292524"/>
      <stop offset="50%" stop-color="#44403c"/>
      <stop offset="100%" stop-color="#1c1917"/>
    </linearGradient>

    <!-- Occlusive Plastic Foil Gradient -->
    <linearGradient id="plasticFoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Adhesive Duct Tape Gradient -->
    <linearGradient id="ductTapeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="40%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Canvas & Grid -->
  <rect x="0" y="0" width="820" height="450" fill="#070a0f"/>
  <rect x="0" y="0" width="820" height="450" fill="url(#chestGrid)"/>
  <rect x="10" y="10" width="800" height="430" rx="10" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- ================= 1. THORACIC CHEST WALL ================= -->
  <!-- Torso Surface Representation -->
  <rect x="180" y="60" width="460" height="320" rx="12" fill="url(#chestSkinGrad)" stroke="#57534e" stroke-width="2.5"/>

  <!-- Rib Cage Contour Lines (Behind Skin) -->
  <g stroke="#78716c" stroke-width="2" opacity="0.35" fill="none">
    <path d="M 210 110 Q 410 130 610 110"/>
    <path d="M 200 170 Q 410 190 620 170"/>
    <path d="M 200 230 Q 410 250 620 230"/>
    <path d="M 210 290 Q 410 310 610 290"/>
    <path d="M 230 350 Q 410 365 590 350"/>
  </g>

  <!-- ================= 2. PENETRATING SUCKING WOUND ================= -->
  <!-- Pneumothorax Puncture Hole -->
  <ellipse cx="410" cy="210" rx="22" ry="32" fill="#7f1d1d" stroke="#ef4444" stroke-width="3"/>
  <ellipse cx="410" cy="210" rx="12" ry="18" fill="#450a0a"/>
  
  <!-- Sucking Air Whistle Vectors -->
  <g stroke="#fca5a5" stroke-width="1.5" stroke-linecap="round" opacity="0.8">
    <line x1="395" y1="200" x2="380" y2="190"/>
    <line x1="425" y1="200" x2="440" y2="190"/>
    <line x1="410" y1="185" x2="410" y2="170"/>
  </g>

  <!-- Wound Callout Badge -->
  <rect x="25" y="195" width="235" height="38" rx="6" fill="#1c1917" stroke="#ef4444" stroke-width="1.2"/>
  <circle cx="40" cy="214" r="7" fill="#ef4444"/>
  <text x="40" y="218" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
  <text x="140" y="208" fill="#fecaca" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">SUCKING CHEST WOUND</text>
  <text x="140" y="222" fill="#f87171" font-size="9" font-family="monospace" text-anchor="middle">Disrupts negative pleural vacuum</text>
  <line x1="260" y1="214" x2="388" y2="210" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2"/>

  <!-- ================= 3. IMPERVOUS PLASTIC MEMBRANE ================= -->
  <!-- Square Occlusive Barrier (15cm x 15cm) extending 5cm past wound -->
  <rect x="290" y="110" width="240" height="200" rx="6" fill="url(#plasticFoilGrad)" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
  
  <!-- Plastic Sheet Callout Badge -->
  <rect x="25" y="90" width="235" height="38" rx="6" fill="#0c1929" stroke="#38bdf8" stroke-width="1.2"/>
  <circle cx="40" cy="109" r="7" fill="#0284c7"/>
  <text x="40" y="113" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2</text>
  <text x="140" y="103" fill="#e0f2fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">AIRTIGHT PLASTIC FOIL</text>
  <text x="140" y="117" fill="#7dd3fc" font-size="9" font-family="monospace" text-anchor="middle">MRE wrapper, freezer bag, tape</text>
  <line x1="260" y1="109" x2="290" y2="125" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="2,2"/>

  <!-- ================= 4. THREE-SIDED ADHESIVE TAPE SEALS ================= -->
  <!-- Top Sealed Tape Strip -->
  <rect x="275" y="100" width="270" height="20" rx="3" fill="url(#ductTapeGrad)" stroke="#a16207" stroke-width="1.2"/>
  <text x="410" y="114" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">SEALED (TOP TAPE STRIP)</text>

  <!-- Left Sealed Tape Strip -->
  <rect x="275" y="120" width="20" height="190" rx="3" fill="url(#ductTapeGrad)" stroke="#a16207" stroke-width="1.2"/>

  <!-- Right Sealed Tape Strip -->
  <rect x="525" y="120" width="20" height="190" rx="3" fill="url(#ductTapeGrad)" stroke="#a16207" stroke-width="1.2"/>

  <!-- Tape Callout Badge -->
  <rect x="560" y="90" width="235" height="38" rx="6" fill="#1c1917" stroke="#eab308" stroke-width="1.2"/>
  <circle cx="575" cy="109" r="7" fill="#ca8a04"/>
  <text x="575" y="113" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
  <text x="680" y="103" fill="#fef08a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3 SIDES HERMETICALLY TAPED</text>
  <text x="680" y="117" fill="#fde68a" font-size="9" font-family="monospace" text-anchor="middle">Duct tape, medical tape, or grease</text>
  <line x1="560" y1="109" x2="545" y2="115" stroke="#eab308" stroke-width="1.2" stroke-dasharray="2,2"/>

  <!-- ================= 5. OPEN BOTTOM FLUTTER VALVE (4TH SIDE) ================= -->
  <!-- Untaped Bottom Edge with Flap Gap -->
  <line x1="295" y1="310" x2="525" y2="310" stroke="#22c55e" stroke-width="3.5" stroke-dasharray="6,4"/>

  <!-- Exhaling / Venting Air Exhaust Vectors (Downward Flutter) -->
  <g stroke="#4ade80" stroke-width="2.5" fill="none" stroke-linecap="round">
    <path d="M 370 290 Q 370 320 360 340"/>
    <polygon points="360,345 356,335 364,336" fill="#4ade80"/>
    <path d="M 410 290 Q 410 325 410 345"/>
    <polygon points="410,350 406,340 414,340" fill="#4ade80"/>
    <path d="M 450 290 Q 450 320 460 340"/>
    <polygon points="460,345 456,336 464,335" fill="#4ade80"/>
  </g>

  <!-- Flutter Valve Callout Badge -->
  <rect x="560" y="295" width="235" height="48" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.2"/>
  <circle cx="575" cy="319" r="7" fill="#22c55e"/>
  <text x="575" y="323" fill="#000" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4</text>
  <text x="680" y="311" fill="#86efac" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">ONE-WAY FLUTTER VENT (OPEN)</text>
  <text x="680" y="325" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">Inhale: Vacuum seals flap flat</text>
  <text x="680" y="337" fill="#bbf7d0" font-size="8.5" font-family="monospace" text-anchor="middle">Exhale: Trapped pleural air escapes</text>
  <line x1="560" y1="319" x2="525" y2="310" stroke="#22c55e" stroke-width="1.2" stroke-dasharray="2,2"/>

  <!-- ================= 6. EMERGENCY "BURPING" PROTOCOL ================= -->
  <!-- Tension Pneumothorax Warning Card -->
  <rect x="25" y="295" width="235" height="48" rx="6" fill="#1c1917" stroke="#ea580c" stroke-width="1.2"/>
  <circle cx="40" cy="319" r="7" fill="#ea580c"/>
  <text x="40" y="323" fill="#fff" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">5</text>
  <text x="140" y="311" fill="#fed7aa" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">"BURP THE SEAL" ALERT</text>
  <text x="140" y="325" fill="#fdba74" font-size="9" font-family="monospace" text-anchor="middle">If patient deteriorates or lips turn blue,</text>
  <text x="140" y="337" fill="#fca5a5" font-size="8.5" font-family="monospace" text-anchor="middle">peel flap 2 sec to release trapped gas</text>

  <!-- ================= FOOTER CLINICAL NOTE ================= -->
  <rect x="25" y="405" width="770" height="26" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="410" y="422" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">PNEUMOTHORAX MECHANISM: Atmospheric air entering the pleural space collapses the lung and kinks the vena cava. Flutter seal vents pressure safely.</text>
</svg>
```

#### 2. Improvised Dressing Procedure
1. Find any clean, airtight plastic sheet: heavy-duty plastic packaging, resealable freezer bag, or clean laminated foil.
2. Cut into a square (approx. 15x15 cm) that extends at least 5 cm beyond the wound perimeter in all directions.
3. Clean gross blood and sweat from skin around the wound.
4. Place plastic square over the wound.
5. Apply heavy adhesive tape (duct tape, surgical tape) along **three sides only**. Leave the bottom edge completely open.
6. **Operating Dynamics:**
   - On **Inhalation**, negative pressure draws the plastic flat against the chest wall, hermetically sealing the wound and preventing air entry into the pleural space.
   - On **Exhalation**, escaping pleural air and blood force the unsealed bottom flap outward, allowing pressurized air to vent freely.
7. **Needle Decompression Fallback:** If the patient develops severe cyanosis, tracheal deviation away from the affected side, and absent breath sounds (tension pneumothorax), vent the flap immediately. If still unrelieved, insert a sterile, large-bore needle (14-gauge) into the 2nd intercostal space along the mid-clavicular line directly above the 3rd rib to vent trapped high-pressure gas.

---

### Step 3: Musculoskeletal Fracture Immobilization & Splinting

Unstable bone fractures lacerate neighboring arteries and sever nerve trunks during movement. Rigid splinting eliminates micro-movement, alleviates agony, and prevents closed fractures from piercing the skin into compound injuries.

#### 1. Splinting Rules of Order
* **Check Distal Circulation, Sensation, and Motor (CSM) function** at fingers or toes before and after applying any splint. If pulse disappears after splinting, loosen the lashing immediately.
* **Immobilize the joint above AND the joint below** the fracture site (e.g., for a mid-shaft tibia fracture, immobilize both the knee and the ankle).
* **Pad All Voids:** Wrap dense padding (clothing, dry moss, foam) between the splint and bony prominences (ankles, knees, elbows) to prevent pressure necrosis.

#### 2. Fracture Variants & Improvised Splints
* **Rigid Branch/Board Splint:** Place two straight, sturdy wooden slats on the lateral and medial sides of the limb. Anchor with at least four circumferential cloth ties (two above the break, two below the break).
* **Anatomic (Buddy) Splinting:** When no materials exist, bind the fractured limb to the patient's healthy anatomy:
  - Fractured finger taped to adjacent healthy finger.
  - Fractured leg bound firmly to the uninjured leg using four wide cloth wraps.
  - Fractured arm bound against the torso using a sling and swathe wrap.
* **Improvised Hare Traction Splint (for Femur Fractures):**
  - A fractured femur causes violent spasms of the large quadriceps muscle, driving broken bone ends past each other with massive internal hemorrhage (1–2 liters).
  - Notch a long branch (extending from hip to 20 cm past the foot). Anchor top to pelvis with a groin strap. Anchor bottom to ankle hitch. Use a Spanish windlass stick at the foot to exert continuous longitudinal axial traction until limb lengths are symmetrical.

---

### Step 4: Hypovolemic Shock Management & Oral Hydration

Shock is acute systemic hypoperfusion where cellular metabolic demands exceed tissue oxygen delivery.

#### 1. Early Warning Diagnostics
* Heart rate $>100\,\text{bpm}$ with weak, thready pulse.
* Capillary refill time $>2$ seconds (press fingernail bed until white; time to pink return).
* Cold, pale, clammy skin; rapid shallow respiration; confusion or restlessness.

#### 2. Resuscitation Protocol
1. **Arrest All Bleeding:** Re-check tourniquets and pressure dressings.
2. **Thermal Conservation:** Strip wet clothing. Wrap patient in dry blankets, wool, or space blankets. Insulate underneath the patient from the cold ground using pine boughs or sleeping pads. *Hypothermic blood cannot form stable fibrin clots.*
3. **Trendelenburg / Recovery Positioning:** Elevate legs 20–30 cm above heart level (autotransfusion of 300–500 mL venous reserve) unless chest trauma or head injury is present.
4. **WHO Oral Rehydration Salt (ORS) Formulation:** If patient is conscious and can swallow, avoid pure water (which causes hyponatremia and cellular swelling). Administer isotonic ORS:
   $$\text{Water: } 1.0\,\text{Liter} \quad|\quad \text{Table Salt } (NaCl)\text{: } 2.5\,\text{g (0.5 tsp)} \quad|\quad \text{Sugar/Honey: } 30.0\,\text{g (6 tsp)}$$
   The sodium-glucose co-transport mechanism in the intestinal mucosa rapidly absorbs water and sodium directly into the bloodstream without osmotic diarrhea.
