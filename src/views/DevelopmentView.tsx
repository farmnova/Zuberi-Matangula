import React, { useState } from 'react';
import { StageBadge } from '../components/StageBadge';
import { Innovation, InnovationStage } from '../types';

interface DevelopmentViewProps {
  innovations: Innovation[];
  onSelectInnovation: (innovation: Innovation) => void;
  onOpenPartnership: (interest?: string) => void;
}

export const DevelopmentView: React.FC<DevelopmentViewProps> = ({
  innovations,
  onSelectInnovation,
  onOpenPartnership
}) => {
  const [selectedStageTab, setSelectedStageTab] = useState<InnovationStage | 'All'>('All');

  const ALL_STAGES: InnovationStage[] = [
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

  const getStageInnovations = (stage: InnovationStage) => {
    return innovations.filter((i) => i.developmentStage === stage);
  };

  const displayedInnovations =
    selectedStageTab === 'All'
      ? innovations
      : innovations.filter((i) => i.developmentStage === selectedStageTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Africanvaris 10-Stage Pipeline Tracking</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Projects in Development
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Every innovation at Africanvaris Technology is mapped to a verified, audit-governed development
          stage. We maintain full transparency regarding the maturity and active testing phase of each product.
        </p>
      </div>

      {/* 10-Stage Visual Matrix Strip */}
      <div className="p-6 rounded-2xl bg-[#081122] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-cyan-400 uppercase font-semibold">
            Institutional 10-Stage Lifecycle Pipeline
          </span>
          <span className="text-slate-500 font-mono text-[11px]">
            Stage distribution of current active innovations
          </span>
        </div>

        {/* Scrollable Stage Columns / Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
          {ALL_STAGES.map((stage, idx) => {
            const count = getStageInnovations(stage).length;
            const isActiveTab = selectedStageTab === stage;
            return (
              <button
                key={stage}
                onClick={() => setSelectedStageTab(isActiveTab ? 'All' : stage)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isActiveTab
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-md'
                    : count > 0
                    ? 'bg-[#060c18] border-slate-700/80 hover:border-cyan-500/40'
                    : 'bg-[#050914] border-slate-900 opacity-60'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-400">0{idx + 1}.</div>
                <div className="text-xs font-bold text-white leading-tight mt-1 truncate">
                  {stage.split('/')[0].trim()}
                </div>
                <div className="mt-2 text-[11px] font-mono font-semibold text-cyan-400">
                  {count} {count === 1 ? 'Project' : 'Projects'}
                </div>
              </button>
            );
          })}
        </div>

        {selectedStageTab !== 'All' && (
          <div className="flex items-center justify-between pt-2 text-xs">
            <span className="text-slate-400 font-mono">
              Filtered to: <span className="text-cyan-400 font-semibold">{selectedStageTab}</span>
            </span>
            <button
              onClick={() => setSelectedStageTab('All')}
              className="text-cyan-400 hover:underline font-mono"
            >
              Show All Stages
            </button>
          </div>
        )}
      </div>

      {/* Projects List Under Development */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight">
          Active Engineering & Testing Pipeline ({displayedInnovations.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedInnovations.map((inv) => (
            <div
              key={inv.id}
              onClick={() => onSelectInnovation(inv)}
              className="p-6 rounded-2xl bg-[#091122] border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer space-y-4 group"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded text-[11px]">
                  {inv.uniqueCode}
                </span>
                <StageBadge stage={inv.developmentStage} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {inv.title}
                </h3>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{inv.subtitle}</div>
              </div>

              {/* Progress velocity bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Development Velocity:</span>
                  <span className="text-cyan-400 tabular-nums">{inv.stageProgress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                    style={{ width: `${inv.stageProgress}%` }}
                  />
                </div>
              </div>

              {/* Latest milestone note */}
              {inv.progressHistory && inv.progressHistory[0] && (
                <div className="p-3 rounded-lg bg-[#060c18] border border-slate-800/80 space-y-1 text-xs">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>LATEST MILESTONE:</span>
                    <span>{inv.progressHistory[0].date}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {inv.progressHistory[0].note}
                  </p>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{inv.category}</span>
                <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Inspect Dossier →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
