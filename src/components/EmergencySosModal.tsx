import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldAlert,
  X,
  HeartPulse,
  Flame,
  Wind,
  Droplet,
  ThermometerSnowflake,
  Sun,
  Volume2,
  VolumeX,
  AlertTriangle,
  Play,
  Square,
  ChevronRight,
  ExternalLink,
  Syringe
} from 'lucide-react';
import { getBestAmericanVoices } from '../utils/speechUtils';

interface EmergencySosModalProps {
  isOpen: boolean;
  onClose: () => void;
  nightVision: boolean;
  onOpenGuideById?: (id: string) => void;
}

interface Protocol {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  icon: any;
  urgency: 'CRITICAL' | 'HIGH';
  goldenRule: string;
  steps: string[];
  doNot: string[];
  relatedGuideId?: string;
}

const PROTOCOLS: Protocol[] = [
  {
    id: 'bleeding',
    tabLabel: 'BLEEDING',
    title: 'ARTERIAL BLEEDING & TOURNIQUET',
    subtitle: 'Bright red spurting or heavy pooling blood',
    icon: Droplet,
    urgency: 'CRITICAL',
    goldenRule: 'DIRECT COMPRESSION & TOURNIQUET WITHIN 60 SECONDS PREVENTS EXSANGUINATION.',
    steps: [
      'APPLY DIRECT PRESSURE: Place clean dressing, gauze, or cloth directly over the bleeding site and press down with full body weight.',
      'APPLY TOURNIQUET: If bleeding is on an arm or leg and does not stop, place tourniquet 2 to 3 inches ABOVE the wound (between wound and heart). Never place over a joint (elbow/knee).',
      'TIGHTEN WINDLASS ROD: Twist the windlass rod until the arterial spurting STOPS COMPLETELY and the distal pulse disappears.',
      'LOCK & MARK TIME: Secure the rod in the windlass clip. Write "T" and current military time (e.g., T-14:30) on the patient\'s forehead.',
      'NEVER LOOSEN: Do NOT loosen, release, or periodically remove the tourniquet in the field. Keep patient warm and elevate legs to prevent hypovolemic shock.'
    ],
    doNot: [
      'NEVER place tourniquet directly over a joint (elbow or knee).',
      'NEVER loosen a tourniquet once secured—this releases lethal toxins and causes sudden cardiac arrest.',
      'NEVER remove impaled objects from the wound; stabilize them in place.'
    ],
    relatedGuideId: 't1-first-aid-trauma'
  },
  {
    id: 'cpr',
    tabLabel: 'CPR 110',
    title: 'CPR & CARDIAC ARREST (110 BPM)',
    subtitle: 'Unresponsive patient with absent or abnormal/agonal breathing',
    icon: HeartPulse,
    urgency: 'CRITICAL',
    goldenRule: 'EARLY HARD & FAST COMPRESSIONS AT 100-120 BPM KEEP THE BRAIN ALIVE.',
    steps: [
      'CHECK RESPONSIVENESS: Tap shoulders firmly and shout: "Can you hear me?" Check for normal breathing for 5-10 seconds.',
      'HAND POSITION: Place heel of one hand in the dead center of the bare chest (lower half of breastbone). Interlock fingers of second hand on top.',
      '30 CHEST COMPRESSIONS: Lock elbows straight, push HARD & FAST (at least 2 to 2.4 inches / 5-6 cm deep). Follow the 110 BPM pulse below. Allow full chest recoil after every push.',
      '2 RESCUE BREATHS: Tilt head back, lift chin, pinch nose shut. Deliver 2 normal breaths (1 second each) watching for chest rise.',
      'CYCLE RATIO: Maintain 30 compressions followed by 2 breaths. If untrained or solo, perform CONTINUOUS hands-only chest compressions without stopping.'
    ],
    doNot: [
      'NEVER pause compressions for more than 10 seconds.',
      'NEVER lean on the chest between pushes; full recoil allows the heart to refill with blood.',
      'NEVER waste time searching for a pulse if patient is unresponsive and not breathing normally.'
    ],
    relatedGuideId: 't1-first-aid-trauma'
  },
  {
    id: 'choking',
    tabLabel: 'CHOKING',
    title: 'SEVERE CHOKING & AIRWAY BLOCK',
    subtitle: 'Silent, clutching throat, unable to speak, breathe, or cough',
    icon: Wind,
    urgency: 'CRITICAL',
    goldenRule: 'RELIEVE AIRWAY OBSTRUCTION IMMEDIATELY BEFORE HYPOXIC COLLAPSE.',
    steps: [
      'STAND BEHIND: Position yourself behind the choking person. Wrap arms around their waist. Lean them slightly forward.',
      '5 BACK BLOWS: Deliver 5 firm, heel-of-hand blows between their shoulder blades.',
      '5 ABDOMINAL THRUSTS (HEIMLICH): Make a fist with thumb knuckle against the abdomen, slightly above the navel (below the ribcage). Grasp fist with other hand and thrust inward and UPWARD with rapid, sharp force.',
      'REPEAT CYCLE: Alternate 5 back blows and 5 abdominal thrusts until the object is expelled or patient becomes unconscious.',
      'IF PATIENT COLLAPSES UNCONSCIOUS: Lower them gently to the floor. Start CPR chest compressions immediately. Look into the mouth before giving breaths; remove visible object ONLY if seen (no blind sweeps).'
    ],
    doNot: [
      'NEVER perform blind finger sweeps in the throat; this pushes the foreign body deeper.',
      'NEVER slap the back while the person is upright and coughing effectively (encourage them to cough).',
      'NEVER use abdominal thrusts on infants under 1 year (use 5 back slaps and 2-finger chest thrusts).'
    ],
    relatedGuideId: 't1-first-aid-trauma'
  },
  {
    id: 'anaphylaxis',
    tabLabel: 'ALLERGY',
    title: 'ALLERGY & ANAPHYLAXIS (AIRWAY SWELLING)',
    subtitle: 'Severe food allergy (nuts, seafood), insect stings, swollen throat/esophagus & suffocation',
    icon: Syringe,
    urgency: 'CRITICAL',
    goldenRule: 'INJECT EPINEPHRINE IMMEDIATELY INTO OUTER THIGH. SWOLLEN AIRWAYS CAN CLOSE IN MINUTES.',
    steps: [
      'INJECT EPINEPHRINE (EPIPEN): Jab auto-injector firmly into the outer mid-thigh at a 90-degree angle (through clothing if needed). Hold firmly for 3 to 10 seconds, then massage the injection site for 10 seconds.',
      'POSITIONING (PREVENT EMPTY HEART SYNDROME): If struggling to breathe due to swollen throat/esophagus, allow patient to sit upright leaning slightly forward. If pale, dizzy, or in shock, lay them flat with legs elevated. DO NOT let them stand up or walk!',
      'SECOND EPINEPHRINE DOSE: If breathing difficulty or throat swelling does not improve after 5 to 10 minutes, inject a second epinephrine dose into the opposite outer thigh.',
      'RESCUE INHALER FOR WHEEZING: If bronchial constriction, wheezing, or chest tightness is present, administer 4 to 6 puffs of an Albuterol / Salbutamol rescue inhaler (preferably with a spacer).',
      'SECONDARY MEDICATION (CONSCIOUS ONLY): Fast-acting antihistamine (Diphenhydramine / Benadryl 25-50mg) can be given ONLY IF patient is fully alert and able to swallow without choking. (WARNING: Antihistamines do NOT reverse life-threatening airway closure—only epinephrine does).',
      'PREPARE FOR CARDIAC ARREST: If the airway fully obstructs and patient collapses or stops breathing, immediately start continuous CPR chest compressions to maintain vital cerebral circulation.'
    ],
    doNot: [
      'NEVER wait to see if throat swelling improves on its own—food allergy laryngeal edema can cause complete suffocation in under 15 minutes.',
      'NEVER allow the patient to abruptly stand up or walk; sudden standing causes immediate fatal blood pressure collapse ("empty heart syndrome").',
      'NEVER force oral pills or water down the throat if the patient is stridulous, wheezing heavily, or drooling.',
      'NEVER rely solely on antihistamines (Benadryl) or inhalers for throat swelling; epinephrine is the only medication that constricts dilated vessels and reverses vocal cord edema.'
    ],
    relatedGuideId: 't1-first-aid-trauma'
  },
  {
    id: 'burns',
    tabLabel: 'BURNS',
    title: 'SEVERE BURNS & CHEMICAL INJURY',
    subtitle: 'Thermal fire, scalding water, electrical arc, or corrosive acids',
    icon: Flame,
    urgency: 'HIGH',
    goldenRule: 'COOL WITH RUNNING WATER FOR 10-20 MINUTES. NEVER USE ICE OR OINTMENTS.',
    steps: [
      'STOP THE BURNING: Extinguish flames (Stop, Drop & Roll), cut power sources, or brush off dry chemical powders before washing.',
      'COOL WATER FLUSH: Irrigate the burn immediately with clean, cool running water for a minimum of 10 to 20 minutes.',
      'REMOVE CONSTRICTING ITEMS: Gently take off rings, watches, bracelets, and tight clothing before tissue swelling starts.',
      'COVER CLEANLY: Cover loosely with a sterile, non-adherent dressing, clean sheet, or plastic wrap. Keep it dry and clean.',
      'HYDRATE ORS: For large burns exceeding palm-size, administer small, frequent sips of clean water mixed with Oral Rehydration Salts (ORS).'
    ],
    doNot: [
      'NEVER apply ice or ice-cold water—this causes severe vasoconstriction and deep tissue necrosis.',
      'NEVER pop or puncture blistered skin (blisters are natural sterile bandages).',
      'NEVER peel off melted clothing or fabric adhered to charred skin (cut around it).'
    ],
    relatedGuideId: 't1-first-aid-trauma'
  },
  {
    id: 'hypothermia',
    tabLabel: 'COLD / HYPO',
    title: 'HYPOTHERMIA & SEVERE COLD EXPOSURE',
    subtitle: 'Core body temperature dropping below 35°C (95°F), shivering stops, lethargy',
    icon: ThermometerSnowflake,
    urgency: 'HIGH',
    goldenRule: 'INSULATE FROM GROUND AND REWARM THE BODY CORE (CHEST & TRUNK) FIRST.',
    steps: [
      'INSULATE FROM GROUND: Move patient onto a thick sleeping pad, foam, dry leaves, or pack. The ground leaches heat 25x faster than air.',
      'REMOVE WET CLOTHES: Gently cut or strip off wet garments while sheltering from wind. Do not allow rough handling (can trigger ventricular fibrillation).',
      'VAPOR BARRIER & SHELTER: Wrap the patient in windproof tarps, blankets, or sleeping bags, enclosing head and neck (leave face clear).',
      'CORE REWARMING: Apply warm water bottles (wrapped in cloth) directly to the torso, armpits, and groin. Never apply bare extreme heat.',
      'WARM SWEET LIQUIDS: If conscious, alert, and able to swallow normally, provide warm sugary drinks. Do not force fluids if lethargic.'
    ],
    doNot: [
      'NEVER rewarm the hands and feet first (causes "afterdrop" of cold, acidic blood to heart causing cardiac arrest).',
      'NEVER rub or massage frostbitten tissue (causes permanent mechanical crystal damage).',
      'NEVER give alcohol or caffeine; both dilate peripheral blood vessels and hasten heat loss.'
    ],
    relatedGuideId: 't1-survival-shelter'
  },
  {
    id: 'heatstroke',
    tabLabel: 'HEAT STROKE',
    title: 'HEAT STROKE & HYPERTHERMIA',
    subtitle: 'Hot flushed dry or sweaty skin, confusion, staggering, temperature > 40°C (104°F)',
    icon: Sun,
    urgency: 'HIGH',
    goldenRule: 'HEAT STROKE IS A MEDICAL EMERGENCY. COOL AGGRESSIVELY AND RAPIDLY.',
    steps: [
      'MOVE TO SHADE: Immediately extract patient from direct sunlight into shade or shelter. Strip off excess clothing.',
      'RAPID COOLING: Douse the patient with water (any temperature available) and fan them aggressively to induce rapid evaporative heat loss.',
      'ICE / COLD PACKS ON ARTERIES: Place cold wet cloths or ice packs on carotid arteries (neck), armpits, and groin.',
      'ELEVATE LEGS: Position patient on their back with feet slightly elevated (6-12 inches) to sustain blood flow to vital organs.',
      'MONITOR CONSCIOUSNESS: If unconscious, place in recovery position (on side) to maintain an open airway. Do NOT force liquids.'
    ],
    doNot: [
      'NEVER administer aspirin or acetaminophen—they do not work for environmental heat stroke and damage the liver.',
      'NEVER give fluids if patient is delirious, confused, vomiting, or unable to sit upright.',
      'NEVER leave a heat stroke victim unattended; core temperature can rebound quickly.'
    ],
    relatedGuideId: 't1-first-aid-trauma'
  }
];

export const EmergencySosModal: React.FC<EmergencySosModalProps> = ({
  isOpen,
  onClose,
  nightVision,
  onOpenGuideById
}) => {
  const [activeProtocolId, setActiveProtocolId] = useState<string>('bleeding');
  const [metronomeActive, setMetronomeActive] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const metronomeIntervalRef = useRef<number | null>(null);

  const activeProtocol = PROTOCOLS.find(p => p.id === activeProtocolId) || PROTOCOLS[0];

  // 110 BPM Metronome for CPR
  useEffect(() => {
    if (metronomeActive) {
      const intervalMs = (60 / 110) * 1000; // ~545ms per beat
      metronomeIntervalRef.current = window.setInterval(() => {
        setPulseCount(c => (c + 1) % 30);
        playBeep();
      }, intervalMs);
    } else {
      if (metronomeIntervalRef.current) {
        clearInterval(metronomeIntervalRef.current);
        metronomeIntervalRef.current = null;
      }
      setPulseCount(0);
    }

    return () => {
      if (metronomeIntervalRef.current) {
        clearInterval(metronomeIntervalRef.current);
      }
    };
  }, [metronomeActive]);

  // Clean up audio on close
  useEffect(() => {
    if (!isOpen) {
      setMetronomeActive(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    }
  }, [isOpen]);

  const playBeep = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pulseCount === 0 ? 880 : 440, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // ignore
    }
  };

  const handleSpeakProtocol = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = `${activeProtocol.title}. Priority: ${activeProtocol.goldenRule}. Steps: ${activeProtocol.steps.join('. ')}. Critical Warnings: ${activeProtocol.doNot.join('. ')}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    const voices = getBestAmericanVoices();
    if (voices.female || voices.male) {
      utterance.voice = voices.female || voices.male;
    }
    utterance.rate = 0.9;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex flex-col bg-black/95 text-white overflow-hidden animate-fadeIn select-none">
      {/* Top Urgent Emergency Header Bar */}
      <div className="bg-red-600 px-4 py-3 flex items-center justify-between shadow-xl flex-shrink-0 border-b border-red-500">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-black text-red-500 animate-pulse">
            <ShieldAlert className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-mono font-black tracking-wider uppercase text-black">
              EMERGENCY SOS TRIAGE
            </h1>
            <p className="text-[11px] font-mono text-black/80 font-bold">
              Immediate Critical Field Protocols • 0ms Delay
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-black/80 text-white hover:bg-black font-mono text-xs font-bold transition-all flex items-center gap-1 active:scale-95"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">CLOSE</span>
        </button>
      </div>

      {/* Protocol Selector Tabs */}
      <div className="flex items-center gap-2 p-3 bg-zinc-950 border-b border-zinc-800 overflow-x-auto scrollbar-none flex-shrink-0">
        {PROTOCOLS.map(p => {
          const Icon = p.icon;
          const isActive = activeProtocolId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                setActiveProtocolId(p.id);
                if (p.id !== 'cpr') setMetronomeActive(false);
              }}
              className={`px-3 py-2 rounded-xl border flex items-center gap-2 flex-shrink-0 font-mono text-xs transition-all ${
                isActive
                  ? 'bg-red-600 border-red-500 text-white font-bold shadow-lg shadow-red-950'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{p.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-4xl w-full mx-auto space-y-5">
        {/* Protocol Title & Audio Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30 uppercase">
                {activeProtocol.urgency} PROTOCOL
              </span>
              <span className="text-xs text-zinc-400 font-mono">{activeProtocol.subtitle}</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black font-mono tracking-tight text-white mt-1">
              {activeProtocol.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleSpeakProtocol}
              className={`px-3 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                isPlayingAudio
                  ? 'bg-red-600 text-white border-red-400 animate-pulse'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:text-white'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'STOP VOICE' : 'READ ALOUD'}</span>
            </button>

            {activeProtocol.id === 'cpr' && (
              <button
                onClick={() => setMetronomeActive(!metronomeActive)}
                className={`px-3 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  metronomeActive
                    ? 'bg-amber-500 text-black border-amber-400 shadow-lg'
                    : 'bg-zinc-800 border-zinc-700 text-amber-400 hover:bg-zinc-700'
                }`}
              >
                {metronomeActive ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{metronomeActive ? 'STOP 110 BPM' : 'START 110 BPM'}</span>
              </button>
            )}
          </div>
        </div>

        {/* CPR 110 BPM Metronome Visualizer (Active only when CPR is selected) */}
        {activeProtocol.id === 'cpr' && (
          <div className="p-4 rounded-2xl bg-zinc-950 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Pulsing CPR Target Ring */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full border-4 border-amber-500 transition-all duration-100 ${
                    metronomeActive ? 'scale-110 opacity-100 bg-amber-500/20' : 'scale-100 opacity-40'
                  }`}
                />
                <HeartPulse
                  className={`w-8 h-8 text-amber-400 transition-transform duration-100 ${
                    metronomeActive ? 'scale-125' : 'scale-100'
                  }`}
                />
              </div>

              <div>
                <div className="text-sm font-bold font-mono text-amber-400">
                  {metronomeActive ? `COMPRESSION ${pulseCount + 1} / 30` : '110 BPM CADENCE READY'}
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  Stayin' Alive rhythm: 30 hard pushes &rarr; 2 rescue breaths
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
                Depth: 2.0 to 2.4 inches
              </span>
            </div>
          </div>
        )}

        {/* Golden Rule Banner */}
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-600/80 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-mono font-black uppercase text-red-300 tracking-wider block">
              CARDINAL SURVIVAL DIRECTIVE
            </span>
            <p className="text-xs sm:text-sm font-bold text-white leading-relaxed mt-0.5">
              {activeProtocol.goldenRule}
            </p>
          </div>
        </div>

        {/* Numbered Action Steps */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            ACTION PROTOCOL (FOLLOW IN ORDER):
          </h3>
          <div className="space-y-2.5">
            {activeProtocol.steps.map((step, idx) => {
              const [lead, ...rest] = step.split(':');
              return (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white font-black font-mono text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed text-zinc-200">
                    <strong className="text-amber-400 uppercase font-mono mr-1">{lead}:</strong>
                    <span>{rest.join(':')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Critical Warnings (What NOT to do) */}
        <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
            <X className="w-4 h-4 text-red-500" />
            CRITICAL PROHIBITIONS (DO NOT DO THIS):
          </h4>
          <ul className="space-y-1.5 text-xs text-zinc-300 font-sans list-disc list-inside">
            {activeProtocol.doNot.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Open Full Technical Guide Link */}
        {activeProtocol.relatedGuideId && onOpenGuideById && (
          <div className="pt-2 pb-6">
            <button
              onClick={() => {
                onClose();
                onOpenGuideById(activeProtocol.relatedGuideId!);
              }}
              className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>View Full Technical Manual in Encyclopedia</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
