import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, XCircle, RotateCcw, ChevronRight, HelpCircle } from 'lucide-react';

interface UniversalEdibilityWizardProps {
  nightVision: boolean;
}

const STAGES = [
  {
    stage: 1,
    title: 'Visual Botanical Exclusion Screen',
    instruction: 'Inspect the specimen. Do NOT proceed if the plant possesses any exclusion characteristics.',
    checks: [
      'NO milky or cloudy sap (latex)',
      'NO umbrella-shaped flower clusters (hemlock family)',
      'NO fine hairs or spines that pierce the skin',
      'NO bitter almond or peach-pit scent (cyanide)',
      'NO grains with black, distorted spurs (ergot fungus)'
    ]
  },
  {
    stage: 2,
    title: 'Separation & Fasting Window',
    instruction: 'Prepare one part only (leaves, root, or stem). Fast for 8 hours prior to test drinking only pure water.',
    checks: [
      'Tested only ONE anatomical plant component',
      'Completed 8-hour preliminary fasting window'
    ]
  },
  {
    stage: 3,
    title: 'Skin Contact Assay (15 Minutes)',
    instruction: 'Crush the plant piece and rub it vigorously into the soft inner crook of your elbow.',
    checks: [
      'Waited full 15 minutes',
      'NO redness, itching, burning, rash or hives observed'
    ]
  },
  {
    stage: 4,
    title: 'Lip Mucosal Membrane Test (3 Minutes)',
    instruction: 'Touch a piece of the prepared plant to the outer surface of your lip.',
    checks: [
      'Waited 3 minutes',
      'NO burning, stinging, tingling, or numbing sensation'
    ]
  },
  {
    stage: 5,
    title: 'Tongue Tip Assay (15 Minutes)',
    instruction: 'Place a small piece onto the tip of your tongue for 15 minutes. Do NOT chew or swallow.',
    checks: [
      'Waited full 15 minutes with piece on tongue tip',
      'NO bitterness, soapy taste, numbness, or irritation'
    ]
  },
  {
    stage: 6,
    title: 'Mastication & Spit Test (15 Minutes)',
    instruction: 'Chew the sample piece thoroughly and hold it in your mouth for 15 minutes. DO NOT SWALLOW SALIVA. Spit it out.',
    checks: [
      'Chewed and held in mouth for 15 minutes without swallowing',
      'Spit out cleanly with zero adverse reactions'
    ]
  },
  {
    stage: 7,
    title: 'The Swallow & 8-Hour Fasting Assay',
    instruction: 'Swallow ONE single teaspoon-sized cooked or raw portion. Drink water. Consume nothing else for 8 hours.',
    checks: [
      'Swallowed single small portion',
      'Waited full 8 hours with zero nausea, vomiting, stomach cramps, or diarrhea'
    ]
  },
  {
    stage: 8,
    title: 'Final Lot Clearance (Safe to Consume)',
    instruction: 'The tested plant part is confirmed non-toxic. Prepare a small batch (1/4 cup) in the exact same manner.',
    checks: [
      'Plant part confirmed caloric and non-toxic for survival consumption'
    ]
  }
];

export const UniversalEdibilityWizard: React.FC<UniversalEdibilityWizardProps> = ({ nightVision }) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [failed, setFailed] = useState(false);

  const currentStage = STAGES[currentStageIdx];

  const handleToggleCheck = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecksPassed = currentStage.checks.every((_, idx) => checkedItems[`${currentStageIdx}_${idx}`]);

  const handleNext = () => {
    if (currentStageIdx < STAGES.length - 1) {
      setCurrentStageIdx(prev => prev + 1);
    }
  };

  const handleFail = () => {
    setFailed(true);
  };

  const handleReset = () => {
    setCurrentStageIdx(0);
    setCheckedItems({});
    setFailed(false);
  };

  return (
    <div
      className={`p-5 rounded-2xl border space-y-4 transition-colors ${
        failed
          ? 'bg-red-950/40 border-red-600 text-red-200'
          : nightVision
          ? 'bg-[#120303] border-red-950 text-red-100'
          : 'bg-[#0d1117] border-zinc-800 text-zinc-100 shadow-xl'
      }`}
    >
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-mono tracking-tight">Universal Edibility Test (UET) Diagnostic</h3>
            <p className="text-xs text-zinc-400 font-mono">Australian &amp; US Army Botanical Toxicity Protocol</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white text-xs font-mono flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {failed ? (
        <div className="p-5 rounded-xl bg-red-950/80 border border-red-600 text-center space-y-3">
          <XCircle className="w-10 h-10 text-red-400 mx-auto" />
          <h4 className="text-base font-bold font-mono text-red-200">
            TEST FAILED — SPECIMEN IS POTENTIALLY TOXIC
          </h4>
          <p className="text-xs text-red-300 font-sans max-w-md mx-auto leading-relaxed">
            Immediately spit out any material, rinse mouth repeatedly with clean water, and induce vomiting if swallowed. Do NOT ingest this plant or other parts of this species.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-red-800 hover:bg-red-700 text-white font-mono text-xs font-bold"
          >
            Start Over With New Plant
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono text-zinc-400">
              <span>Stage {currentStage.stage} of {STAGES.length}</span>
              <span className="text-amber-400 font-bold">{currentStage.title}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div
                style={{ width: `${(currentStage.stage / STAGES.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
              />
            </div>
          </div>

          <p className="text-xs text-zinc-300 font-mono bg-black/40 p-3 rounded-lg border border-zinc-800">
            {currentStage.instruction}
          </p>

          {/* Checklist */}
          <div className="space-y-2">
            {currentStage.checks.map((check, idx) => {
              const key = `${currentStageIdx}_${idx}`;
              const isChecked = !!checkedItems[key];

              return (
                <div
                  key={idx}
                  onClick={() => handleToggleCheck(key)}
                  className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-emerald-950/40 border-emerald-600 text-emerald-200'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <span className="pr-2">{check}</span>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-emerald-500 border-emerald-400' : 'border-zinc-600'}`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleFail}
              className="px-3 py-2 rounded-lg border border-red-900 bg-red-950/40 text-red-400 hover:bg-red-900/60 font-mono text-xs flex items-center gap-1.5"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Report Reaction / Poisoning</span>
            </button>

            {currentStageIdx < STAGES.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!allChecksPassed}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${
                  allChecksPassed
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                }`}
              >
                <span>Proceed to Stage {currentStageIdx + 2}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SPECIMEN VERIFIED SAFE</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
