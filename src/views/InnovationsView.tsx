import React, { useState, useMemo } from 'react';
import { StageBadge } from '../components/StageBadge';
import { Innovation, InnovationCategory, InnovationStage, UserProfile } from '../types';

interface InnovationsViewProps {
  innovations: Innovation[];
  categories: InnovationCategory[];
  onSelectInnovation: (innovation: Innovation) => void;
  onOpenPartnership: (interest?: string) => void;
  currentUser?: UserProfile | null;
}

export const InnovationsView: React.FC<InnovationsViewProps> = ({
  innovations,
  categories,
  onSelectInnovation,
  onOpenPartnership,
  currentUser = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stages: InnovationStage[] = [
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

  const filteredInnovations = useMemo(() => {
    return innovations.filter((inv) => {
      // Category filter
      if (selectedCategory !== 'All' && inv.category !== selectedCategory) return false;
      // Stage filter
      if (selectedStage !== 'All' && inv.developmentStage !== selectedStage) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = inv.title.toLowerCase().includes(q);
        const matchesCode = inv.uniqueCode.toLowerCase().includes(q);
        const matchesProblem = inv.problem.toLowerCase().includes(q);
        const matchesTech = inv.techStack.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCode && !matchesProblem && !matchesTech) return false;
      }
      return true;
    });
  }, [innovations, selectedCategory, selectedStage, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header & Slogan */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Innovation Management & Showcase Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Innovations Portfolio
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            A comprehensive catalog of original African technological and scientific innovations.
            Each project undergoes rigorous empirical validation across our 10-stage development pipeline.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenPartnership('General Innovation Co-Investment')}
            className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md cursor-pointer whitespace-nowrap"
          >
            Inquire as Co-Investor
          </button>
        </div>
      </div>

      {/* Filter and Search Bar Controls (Interactive Buttons and Inputs) */}
      <div className="space-y-4 p-5 rounded-2xl bg-[#091122] border border-slate-800">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by innovation code (e.g. AV-AGRI-017), title, keyword, or tech stack..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#060c18] border border-slate-700/80 focus:border-cyan-400 focus:outline-none text-slate-100 text-xs placeholder:text-slate-500"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-4 top-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-slate-400 hover:text-white text-xs font-mono"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Tabs (Segmented Buttons) */}
        <div>
          <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
            Filter by Technology Category:
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'bg-[#070d1a] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories ({innovations.length})
            </button>
            {categories.map((cat) => {
              const count = innovations.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'bg-[#070d1a] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Filter Selector */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-mono uppercase text-slate-400">Development Stage:</span>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-cyan-400"
          >
            <option value="All">All Stages (Idea to Launched)</option>
            {stages.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
          {(selectedCategory !== 'All' || selectedStage !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStage('All');
                setSearchQuery('');
              }}
              className="text-xs text-cyan-400 hover:underline ml-auto font-mono cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Active Results Summary */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>
          Showing {filteredInnovations.length} of {innovations.length} verified innovations
        </span>
        <span className="text-[11px] text-slate-500">
          Click any innovation card to inspect full technical dossiers, schematics & whitepapers
        </span>
      </div>

      {/* Innovations Grid */}
      {filteredInnovations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInnovations.map((inv) => (
            <div
              key={inv.id}
              onClick={() => onSelectInnovation(inv)}
              className="group p-6 rounded-2xl bg-[#091122] hover:bg-[#0c162e] border border-slate-800 hover:border-cyan-500/50 shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer space-y-4"
            >
              <div className="space-y-3">
                {/* Code & Confidentiality Header */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded text-[11px]">
                      {inv.uniqueCode}
                    </span>
                    {inv.confidentialityLevel === 'RESTRICTED' && (
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                          currentUser && (currentUser.clearanceLevel === 'RESTRICTED_ACCESS' || currentUser.approvedForRestricted)
                            ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300'
                            : 'bg-amber-950/50 border-amber-500/50 text-amber-300'
                        }`}
                      >
                        {currentUser && (currentUser.clearanceLevel === 'RESTRICTED_ACCESS' || currentUser.approvedForRestricted)
                          ? '✓ Restricted Cleared'
                          : '🔒 Restricted Access'}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    Reg. {inv.registrationDate}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {inv.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">{inv.subtitle}</div>
                </div>

                {/* Stage Indicator */}
                <div className="pt-1">
                  <StageBadge stage={inv.developmentStage} />
                </div>

                {/* Problem Statement Snippet */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {inv.problem}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {inv.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060c18] border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {inv.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{inv.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-medium">{inv.category}</span>
                <span className="font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Dedicated Profile →
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl bg-[#091122] border border-slate-800 space-y-3">
          <p className="text-slate-400 text-sm">No innovations match the selected criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedStage('All');
              setSearchQuery('');
            }}
            className="text-xs text-cyan-400 hover:underline font-mono"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Development Stage Notice */}
      <div className="p-5 rounded-xl bg-[#060c18] border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
        <span className="font-semibold text-slate-300">Important Development Disclosure:</span> The innovation
        records published above reflect active research, engineering design, prototype fabrication, and
        controlled field trials. Africanvaris Technology maintains a strict policy of verifiable engineering
        truth: no project is described as commercially complete or operational without certified audit deployment.
      </div>
    </div>
  );
};
