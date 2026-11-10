import React, { useState } from 'react';
import { Innovation } from '../types';

interface FutureInnovationsViewProps {
  innovations: Innovation[];
  onSelectInnovation: (innovation: Innovation) => void;
  onOpenPartnership: (interest?: string) => void;
}

export const FutureInnovationsView: React.FC<FutureInnovationsViewProps> = ({
  innovations,
  onSelectInnovation,
  onOpenPartnership
}) => {
  const futureConcepts = [
    {
      code: 'AV-FUTR-012',
      title: 'SOLAR COLD-CHAIN SMART VAULT',
      category: 'Smart Agriculture & Energy',
      timeline: '2026 - 2027 Research Phase',
      problem:
        'Over 45% of horticultural fresh produce in sub-Saharan rural hubs rots before reaching urban wholesale markets due to absence of off-grid decentralized refrigeration.',
      concept:
        'Decentralized phase-change material (PCM) thermal storage combined with micro-solar evaporative cooling and IoT slot booking via mobile money.',
      stage: 'Research Exploration',
      status: 'CONFIDENTIAL RESEARCH'
    },
    {
      code: 'AV-FUTR-013',
      title: 'AUTONOMOUS SWARM WEEDING ROBOT',
      category: 'Robotics & AgriTech',
      timeline: '2026 - 2028 Exploration',
      problem:
        'Smallholder farmers lose hundreds of hours to backbreaking manual weeding or overspend on toxic chemical herbicides that poison groundwater.',
      concept:
        'Solar-powered lightweight delta-arm weeding rovers utilizing edge neural vision to mechanically clip weeds without chemical contamination.',
      stage: 'Concept Modeling',
      status: 'IDEA / CONCEPT'
    },
    {
      code: 'AV-FUTR-014',
      title: 'INDIGENOUS LANGUAGE NEURAL HEALTH TRIAGE',
      category: 'Artificial Intelligence & Health',
      timeline: '2027 Research Target',
      problem:
        'Rural dispensary triage nurses lack clinical decision support tools available in local dialects for early infectious disease identification.',
      concept:
        'Edge acoustic cough and breath analysis coupled with conversational local-language medical protocol guidelines.',
      stage: 'Research Formulation',
      status: 'RESEARCH'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Africanvaris Frontier Horizon</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Future Innovations Pipeline
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          The future of African scientific breakthroughs. Our R&D division continuously registers,
          researches, and prototypes visionary technological concepts designed to tackle emerging
          generational challenges over the next decade.
        </p>
      </div>

      {/* Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {futureConcepts.map((item) => (
          <div
            key={item.code}
            className="p-6 rounded-2xl bg-[#091122] border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded text-[11px]">
                  {item.code}
                </span>
                <span className="text-[10px] font-mono text-amber-400 border border-amber-800/60 px-1.5 py-0.5 rounded">
                  {item.stage}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{item.category}</div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-500">Problem Horizon:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{item.problem}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-cyan-400">Proposed Solution:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{item.concept}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-slate-500">{item.timeline}</span>
              <button
                onClick={() => onOpenPartnership(`Frontier Co-Research on: ${item.title}`)}
                className="text-cyan-400 hover:text-white font-semibold transition-colors"
              >
                Co-Invest / Sponsor →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Idea Submission Callout */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0c1a38] via-[#070e1c] to-[#040812] border border-cyan-500/30 space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
          Open Innovation Registry
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Are You an African Inventor, Engineer, or Researcher?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Africanvaris Technology provides patent drafting, engineering prototyping, laboratory testing,
          and global investor syndication. If you have formulated an original technological innovation,
          submit your concept under our formal intellectual property non-disclosure protocol.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenPartnership('Open Innovation Concept Submission')}
            className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer"
          >
            Submit Innovation Idea for Evaluation
          </button>
        </div>
      </div>
    </div>
  );
};
