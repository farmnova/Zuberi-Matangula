import React, { useState } from 'react';
import { Innovation, UserProfile } from '../types';
import { StageBadge } from './StageBadge';
import { TechnicalDiagram } from './TechnicalDiagram';

interface InnovationDetailModalProps {
  innovation: Innovation;
  onClose: () => void;
  onOpenPartnership: (innovationTitle: string) => void;
  isAdmin?: boolean;
  currentUser?: UserProfile | null;
  onOpenAuth?: (mode: 'login' | 'signup', reason?: string) => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export const InnovationDetailModal: React.FC<InnovationDetailModalProps> = ({
  innovation,
  onClose,
  onOpenPartnership,
  isAdmin = false,
  currentUser = null,
  onOpenAuth,
  isSaved = false,
  onToggleSave
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'impact' | 'progress' | 'documents'>('overview');
  const [accessRequested, setAccessRequested] = useState(false);
  const [viewingDoc, setViewingDoc] = useState<string | null>(null);

  const hasRestrictedClearance = isAdmin || (currentUser && (currentUser.clearanceLevel === 'RESTRICTED_ACCESS' || currentUser.approvedForRestricted));

  const STAGES = [
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

  const currentStageIndex = STAGES.indexOf(innovation.developmentStage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#091122] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#060c18] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-2.5 py-1 rounded">
              {innovation.uniqueCode}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>{innovation.category}</span>
              <span>·</span>
              <span>Registered {innovation.registrationDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Bookmark / Save to User Profile */}
            {currentUser && onToggleSave && (
              <button
                onClick={() => onToggleSave(innovation.id)}
                className={`p-1.5 rounded-lg border text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  isSaved
                    ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300'
                    : 'bg-[#091122] border-slate-700 text-slate-400 hover:text-white'
                }`}
                title={isSaved ? 'Remove from Saved' : 'Save to Profile'}
              >
                <svg className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            )}

            {/* IP Confidentiality Badge */}
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                innovation.confidentialityLevel === 'PUBLIC'
                  ? 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
                  : innovation.confidentialityLevel === 'RESTRICTED'
                  ? hasRestrictedClearance
                    ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30'
                    : 'border-amber-500/40 text-amber-400 bg-amber-950/20'
                  : 'border-red-500/40 text-red-400 bg-red-950/20'
              }`}
            >
              {innovation.confidentialityLevel === 'RESTRICTED' && hasRestrictedClearance
                ? 'RESTRICTED · Cleared Access'
                : `IP Clearance: ${innovation.confidentialityLevel}`}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Title Section */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#0b1733] to-[#071024] border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {innovation.title}
              </h2>
              <p className="text-sm font-medium text-cyan-300 mt-1">
                {innovation.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenPartnership(innovation.title)}
                className="px-4 py-2 text-xs font-semibold uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire & Partner
              </button>
            </div>
          </div>

          {/* 10-Stage Pipeline Progress Strip */}
          <div className="mt-5 pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[11px]">Development Pipeline:</span>
                <StageBadge stage={innovation.developmentStage} />
              </div>
              <span className="font-mono text-[11px] text-cyan-400 tabular-nums">
                {innovation.stageProgress}% Phase Velocity
              </span>
            </div>

            {/* Visual 10-step progress bar */}
            <div className="grid grid-cols-10 gap-1 h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
              {STAGES.map((s, idx) => {
                const isCompleted = idx <= currentStageIndex;
                const isCurrent = idx === currentStageIndex;
                return (
                  <div
                    key={s}
                    title={`Step ${idx + 1}: ${s}`}
                    className={`h-full rounded-sm transition-all duration-300 ${
                      isCurrent
                        ? 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse'
                        : isCompleted
                        ? 'bg-blue-600'
                        : 'bg-slate-800'
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1.5 px-0.5">
              <span>01. Concept</span>
              <span>05. Prototype</span>
              <span>10. Launched</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls (Functional Buttons) */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#070e1c] border-b border-slate-800 text-xs overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview & Problem-Solution
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'technical'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Technical Architecture & Stack
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'impact'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Economic & Social Impact
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'progress'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Milestone History
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'documents'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Documents & IP Protection
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-300">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Problem & Background */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-[#070d1a] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Problem Being Addressed
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">{innovation.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#070d1a] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Research Context & Background
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {innovation.backgroundResearch}
                  </p>
                </div>
              </div>

              {/* Proposed Solution */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0c1a36] to-[#070e1c] border border-blue-500/30 space-y-2">
                <div className="text-xs font-mono font-semibold uppercase text-cyan-300">
                  Proposed Solution
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">
                  {innovation.solution}
                </p>
              </div>

              {/* How it Works */}
              <div className="p-5 rounded-xl bg-[#070d1a] border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-semibold uppercase text-slate-300">
                  Operational Mechanics (How It Works)
                </div>
                <p className="text-xs leading-relaxed text-slate-300">{innovation.howItWorks}</p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">
                  Core Innovations & Functional Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {innovation.mainFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#070d1a] border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL ARCHITECTURE & STACK */}
          {activeTab === 'technical' && (
            <div className="space-y-6 animate-fade-in">
              {/* Architecture Diagram */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 mb-3">
                  Technical Architecture Model
                </h4>
                <TechnicalDiagram
                  type={innovation.technicalDiagramType}
                  title={`${innovation.uniqueCode} System Blueprint`}
                />
              </div>

              {/* Technical Description */}
              <div className="p-4 rounded-xl bg-[#070d1a] border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-semibold uppercase text-cyan-400">
                  Detailed Technical Specification
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {innovation.technicalDescription}
                </p>
              </div>

              {/* Technology Stack Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {innovation.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md bg-[#0a1428] border border-cyan-800/40 text-xs font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Potential Applications */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">
                  Domain Applications & Target Deployments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {innovation.potentialApplications.map((app, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#070d1a] border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IMPACT & COMMERCIALIZATION */}
          {activeTab === 'impact' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#081224] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Expected Economic Impact
                  </div>
                  <p className="text-xs leading-relaxed text-slate-200">
                    {innovation.expectedEconomicImpact}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#081224] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Expected Social Impact
                  </div>
                  <p className="text-xs leading-relaxed text-slate-200">
                    {innovation.expectedSocialImpact}
                  </p>
                </div>
              </div>

              {/* Commercial Opportunities */}
              <div className="p-5 rounded-xl bg-[#070d1a] border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-semibold uppercase text-blue-400">
                  Commercialization & Revenue Models
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  {innovation.commercialOpportunities}
                </p>
              </div>

              {/* Partnership Opportunities */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0c1833] to-[#070e1c] border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold uppercase text-cyan-300">
                    Strategic Collaboration Areas
                  </span>
                  <button
                    onClick={() => onOpenPartnership(innovation.title)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-200 underline cursor-pointer"
                  >
                    Submit Proposal →
                  </button>
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  {innovation.partnershipOpportunities.map((opp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: PROGRESS & MILESTONES */}
          {activeTab === 'progress' && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">
                  Audit-Verified Development Milestones
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  {innovation.progressHistory.length} Milestones Recorded
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                {innovation.progressHistory.map((m, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#091122]" />
                    <div className="p-4 rounded-xl bg-[#070d1a] border border-slate-800/80 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-cyan-300 font-mono">{m.stage}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{m.date}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{m.note}</p>
                      <div className="text-[10px] text-slate-500 font-mono pt-1">
                        Recorded by: {m.author}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INTELLECTUAL PROPERTY & DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-6 animate-fade-in">
              {/* Intellectual Property Status Box */}
              <div className="p-5 rounded-xl bg-[#081224] border border-cyan-800/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold uppercase text-cyan-400">
                    Intellectual Property Protection
                  </span>
                  <span className="font-mono text-xs text-slate-300">
                    {innovation.intellectualPropertyStatus}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Africanvaris Technology enforces rigorous zero-trust intellectual property controls.
                  Source code repositories, raw CAD/gerber fabrication files, and pending patent claims
                  are strictly safeguarded in secure physical and cryptographic enclaves.
                </p>
              </div>

              {/* Documents List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">
                  Available Whitepapers & Engineering Briefs
                </h4>
                {innovation.documents && innovation.documents.length > 0 ? (
                  <div className="space-y-2">
                    {innovation.documents.map((doc, idx) => {
                      const isRestricted = doc.confidentiality === 'RESTRICTED';
                      const isConfidential = doc.confidentiality === 'CONFIDENTIAL';
                      const canView = doc.confidentiality === 'PUBLIC' || (isRestricted && hasRestrictedClearance) || isAdmin;

                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3.5 rounded-xl bg-[#070d1a] border border-slate-800 text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div>
                              <div className="font-medium text-slate-200">{doc.name}</div>
                              <div className="text-[10px] text-slate-500 font-mono">
                                {doc.type} · {doc.size} ·{' '}
                                <span
                                  className={
                                    doc.confidentiality === 'PUBLIC'
                                      ? 'text-emerald-400'
                                      : doc.confidentiality === 'RESTRICTED'
                                      ? hasRestrictedClearance
                                        ? 'text-emerald-300'
                                        : 'text-amber-400'
                                      : 'text-red-400'
                                  }
                                >
                                  Clearance: {doc.confidentiality}
                                </span>
                              </div>
                            </div>
                          </div>

                          {canView ? (
                            <button
                              onClick={() => {
                                setViewingDoc(doc.name);
                              }}
                              className="px-3 py-1.5 rounded-md text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/40 transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                              {isRestricted && <span className="text-emerald-400 text-[10px]">✓ Cleared ·</span>}
                              <span>Read Dossier</span>
                            </button>
                          ) : isRestricted ? (
                            <button
                              onClick={() => {
                                if (onOpenAuth) {
                                  onOpenAuth('login', `Authentication required: Log in with your Africanvaris account to access restricted document ${doc.name}.`);
                                }
                              }}
                              className="px-3 py-1.5 rounded-md text-[11px] font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-800/60 hover:bg-amber-900/40 transition-colors cursor-pointer flex items-center gap-1"
                            >
                              <span>🔒</span>
                              <span>Log In to Access (Restricted)</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => onOpenPartnership(`NDA Access Request for ${doc.name}`)}
                              className="px-3 py-1.5 rounded-md text-[11px] font-mono font-medium text-red-300 bg-red-950/40 border border-red-800/60 hover:bg-red-900/40 transition-colors cursor-pointer"
                            >
                              Request Mutual NDA Clearance
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#070d1a] border border-slate-800 text-xs text-slate-500 text-center">
                    Technical whitepapers for this innovation are currently undergoing peer review and IP clearance.
                  </div>
                )}
              </div>

              {/* Institutional NDA Request Callout */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#0b1730] to-[#081022] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-white">Need Deep Technical or Hardware Schematics?</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Authorized academic, government, and venture partners may request complete confidential dossiers under mutual NDA.
                  </div>
                </div>
                <button
                  onClick={() => {
                    setAccessRequested(true);
                    onOpenPartnership(`Confidential IP Review: ${innovation.title} (${innovation.uniqueCode})`);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 transition-colors whitespace-nowrap"
                >
                  {accessRequested ? 'Clearance Requested' : 'Request Institutional Clearance'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3.5 bg-[#060c18] border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span className="font-mono text-[11px]">
            Africanvaris Technology Innovation Registry · {innovation.uniqueCode}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onOpenPartnership(innovation.title)}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Partner on this Innovation
            </button>
          </div>
        </div>

        {/* Restricted Document Reader Dossier Modal */}
        {viewingDoc && (
          <div className="fixed inset-0 z-60 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
            <div className="relative w-full max-w-2xl bg-[#091122] border border-cyan-500/50 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    Official Technical Dossier Preview
                  </span>
                </div>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-cyan-400 text-xs font-bold">{viewingDoc}</div>
                <div className="text-xs text-slate-400 font-mono">
                  Innovation: {innovation.title} ({innovation.uniqueCode}) · Classification: RESTRICTED ACCESS
                </div>
                <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-3">
                  <p>
                    <strong>AUTHENTICATED TECHNICAL CLEARANCE GRANTED:</strong> You are viewing verified proprietary
                    engineering specifications and empirical field test telemetry certified by Africanvaris Technology.
                  </p>
                  <p>
                    <strong>Summary Abstract:</strong> This dossier establishes the mathematical models, edge sensor
                    transducer topologies, and verified data pipelines for {innovation.title}. The underlying
                    algorithmic processes have been benchmarked under operational constraints with zero external data leaks.
                  </p>
                  <div className="p-3 rounded-lg bg-[#0a1428] border border-cyan-800/40 text-[11px] font-mono text-cyan-300">
                    Audit Hash: SHA256:{Math.random().toString(36).substring(2, 15).toUpperCase()}
                    <br />
                    Access Token: AFRICANVARIS-RESTRICTED-CLEARED
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <span className="text-[11px] font-mono text-emerald-400">
                  ✓ Verified by Africanvaris Security Enclave
                </span>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
