import React, { useState } from 'react';
import { ResearchPaper, UserProfile } from '../types';

interface ResearchViewProps {
  researchPapers: ResearchPaper[];
  onOpenPartnership: (interest?: string) => void;
  currentUser?: UserProfile | null;
  onOpenAuth?: (mode: 'login' | 'signup', reason?: string) => void;
}

export const ResearchView: React.FC<ResearchViewProps> = ({
  researchPapers,
  onOpenPartnership,
  currentUser = null,
  onOpenAuth
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePaper, setActivePaper] = useState<ResearchPaper | null>(null);

  const hasRestrictedClearance = currentUser && (currentUser.clearanceLevel === 'RESTRICTED_ACCESS' || currentUser.approvedForRestricted);

  const categories = [
    'All',
    'Artificial Intelligence & AgriTech',
    'Legal Tech & Cryptography',
    'Computer Vision & Security',
    'Engineering & Construction'
  ];

  const filteredPapers = selectedCategory === 'All'
    ? researchPapers
    : researchPapers.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Africanvaris Research & Scientific Labs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Innovation Research & Scientific Inquiry
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Pioneering research across artificial intelligence, agricultural engineering, scientific
          experimentation, digital jurisprudence, and automated metrology. We anchor every technological
          solution in peer-reviewed scientific methodology.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'bg-[#081122] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Research Papers Grid */}
      <div className="space-y-6">
        {filteredPapers.map((paper) => (
          <div
            key={paper.id}
            className="p-6 sm:p-8 rounded-2xl bg-[#091122] border border-slate-800 space-y-5 hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 font-semibold">{paper.publicationStatus}</span>
                <span>·</span>
                <span>{paper.category}</span>
                <span>·</span>
                <span>{paper.date}</span>
              </div>
              <span className="font-mono text-slate-500">{paper.readTime}</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {paper.title}
              </h2>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                Authors: {paper.authors.join(' · ')}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                Abstract
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {paper.abstract}
              </p>
            </div>

            {/* Methodology & Key Findings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800/80 space-y-1.5">
                <div className="text-xs font-mono font-semibold uppercase text-blue-400">
                  Methodology & Testbed
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {paper.methodology}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800/80 space-y-1.5">
                <div className="text-xs font-mono font-semibold uppercase text-emerald-400">
                  Key Scientific Findings
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {paper.keyFindings.map((finding: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-mono text-[11px]">
                Africanvaris Technology Scientific Pre-Print Series · Ref: {paper.id.toUpperCase()}
              </span>
              <div className="flex items-center gap-2">
                {hasRestrictedClearance ? (
                  <button
                    onClick={() => setActivePaper(paper)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/50 hover:bg-emerald-900/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>✓</span>
                    <span>View Empirical Dataset (Restricted Cleared)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (onOpenAuth) {
                        onOpenAuth('login', `Authentication required: Log in to view restricted research datasets and pre-prints for: ${paper.title}`);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-800/60 hover:bg-amber-900/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>🔒</span>
                    <span>Log In to View Restricted Data</span>
                  </button>
                )}
                <button
                  onClick={() => onOpenPartnership(`Academic Research Collaboration on: ${paper.title}`)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-400 hover:text-white bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/40 transition-colors cursor-pointer"
                >
                  Inquire →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Paper Restricted Dataset Reader Modal */}
      {activePaper && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#091122] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>RESTRICTED RESEARCH TELEMETRY CLEARED</span>
                <span>·</span>
                <span>{activePaper.publicationStatus}</span>
              </div>
              <button
                onClick={() => setActivePaper(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activePaper.title}
              </h2>
              <div className="text-xs text-slate-400 font-mono mt-1">
                Primary Investigators: {activePaper.authors.join(', ')} · Published {activePaper.date}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-3">
              <div className="font-mono text-cyan-400 font-bold uppercase text-[11px]">
                Authorized Peer Research Methodology
              </div>
              <p>{activePaper.methodology}</p>
              
              <div className="font-mono text-emerald-400 font-bold uppercase text-[11px] pt-2">
                Empirical Testbed Telemetry & Validation
              </div>
              <ul className="space-y-1.5">
                {activePaper.keyFindings.map((finding: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">▹</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-lg bg-[#0a1428] border border-cyan-800/40 text-[11px] font-mono text-cyan-300 mt-3">
                Clearance Token: {currentUser ? `${currentUser.name} (${currentUser.organization})` : 'Authorized User'}
                <br />
                Status: VALIDATED_EMPIRICAL_PREPRINT_DATA
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
              <button
                onClick={() => {
                  setActivePaper(null);
                  onOpenPartnership(`Research Co-Authorship for: ${activePaper.title}`);
                }}
                className="text-cyan-400 hover:underline font-mono"
              >
                Propose Joint Publication / Field Co-Authorship →
              </button>
              <button
                onClick={() => setActivePaper(null)}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium"
              >
                Close Dataset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Academic Collaboration Call */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0a1530] to-[#070e1c] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-lg font-bold text-white">
            Are You a University or Research Institution?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Africanvaris Technology welcomes joint research grants, PhD candidate field placements,
            and peer-review collaborations across our laboratories.
          </p>
        </div>
        <button
          onClick={() => onOpenPartnership('University / Academic Research Partnership')}
          className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md shrink-0 cursor-pointer"
        >
          Propose Research Collaboration
        </button>
      </div>
    </div>
  );
};
