import React from 'react';
import { InnovationStage } from '../types';

interface StageBadgeProps {
  stage: InnovationStage;
  className?: string;
  showStepIndex?: boolean;
}

const STAGE_ORDER: InnovationStage[] = [
  'Idea / Concept',
  'Research',
  'Design',
  'Development',
  'Prototype',
  'Testing',
  'MVP',
  'Pilot Implementation',
  'Commercialization',
  'Launched'
];

export const StageBadge: React.FC<StageBadgeProps> = ({
  stage,
  className = '',
  showStepIndex = true
}) => {
  const index = STAGE_ORDER.indexOf(stage);
  const stepNumber = index >= 0 ? index + 1 : 1;

  // Domain-refined text accent coloring
  const getStageColor = (idx: number) => {
    if (idx <= 2) return 'text-amber-400'; // Concept / Research / Design
    if (idx <= 5) return 'text-cyan-400'; // Development / Prototype / Testing
    if (idx <= 7) return 'text-blue-400'; // MVP / Pilot
    return 'text-emerald-400'; // Commercialization / Launched
  };

  const getStageDotColor = (idx: number) => {
    if (idx <= 2) return 'bg-amber-400';
    if (idx <= 5) return 'bg-cyan-400';
    if (idx <= 7) return 'bg-blue-400';
    return 'bg-emerald-400';
  };

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-tight ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${getStageDotColor(index)} shrink-0`} />
      {showStepIndex && (
        <span className="font-mono text-slate-400 text-[11px] tabular-nums">
          Stage {stepNumber}/10 ·
        </span>
      )}
      <span className={`font-semibold ${getStageColor(index)}`}>{stage}</span>
    </div>
  );
};
