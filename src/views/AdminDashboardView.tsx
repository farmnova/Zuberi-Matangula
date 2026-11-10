import React, { useState } from 'react';
import { StageBadge } from '../components/StageBadge';
import { StorageService } from '../services/storage';
import {
  AdminUser,
  ContactMessage,
  Innovation,
  InnovationCategory,
  InnovationStage,
  PartnershipEnquiry,
  Publication,
  ResearchPaper,
  VisibilityLevel
} from '../types';

interface AdminDashboardViewProps {
  innovations: Innovation[];
  categories: InnovationCategory[];
  researchPapers: ResearchPaper[];
  publications: Publication[];
  partnershipEnquiries: PartnershipEnquiry[];
  contactMessages: ContactMessage[];
  adminUser: AdminUser | null;
  onLogin: (user: AdminUser) => void;
  onLogout: () => void;
  onSelectInnovation: (innovation: Innovation) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  innovations,
  categories,
  researchPapers,
  publications,
  partnershipEnquiries,
  contactMessages,
  adminUser,
  onLogin,
  onLogout,
  onSelectInnovation
}) => {
  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'innovations' | 'enquiries' | 'messages' | 'publications' | 'settings'>('innovations');

  // Stage Update Modal State
  const [stageModalInnovation, setStageModalInnovation] = useState<Innovation | null>(null);
  const [newStage, setNewStage] = useState<InnovationStage>('Prototype');
  const [newProgress, setNewProgress] = useState(50);
  const [stageNote, setStageNote] = useState('');

  // New Innovation Modal State
  const [isAddingInnovation, setIsAddingInnovation] = useState(false);
  const [newInv, setNewInv] = useState<Partial<Innovation>>({
    uniqueCode: `AV-NEW-${String(innovations.length + 1).padStart(3, '0')}`,
    title: '',
    subtitle: '',
    category: 'Artificial Intelligence & EdTech',
    registrationDate: new Date().toISOString().split('T')[0],
    problem: '',
    backgroundResearch: '',
    solution: '',
    howItWorks: '',
    technicalDescription: '',
    mainFeatures: [''],
    techStack: ['Python', 'TypeScript', 'Neural Network'],
    potentialApplications: ['Commercial industry', 'Public service'],
    expectedEconomicImpact: '',
    expectedSocialImpact: '',
    commercialOpportunities: '',
    intellectualPropertyStatus: 'Patent Pending (Drafted)',
    developmentStage: 'Idea / Concept',
    stageProgress: 10,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: ['Academic validation', 'Co-investment'],
    technicalDiagramType: 'education_ai'
  });

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const result = StorageService.loginAdmin(loginEmail, loginPassword);
    if (result.success && result.user) {
      onLogin(result.user);
    } else {
      setLoginError(result.error || 'Access denied.');
    }
  };

  const handleStageUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stageModalInnovation) return;
    StorageService.updateInnovationStage(
      stageModalInnovation.id,
      newStage,
      newProgress,
      stageNote || `Stage updated to ${newStage} via Administrator Console`,
      adminUser?.name || 'Administrator'
    );
    setStageModalInnovation(null);
    setStageNote('');
  };

  const handleCreateInnovation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInv.title?.trim() || !newInv.problem?.trim() || !newInv.solution?.trim()) {
      alert('Please fill out the Title, Problem, and Solution fields.');
      return;
    }
    const id = newInv.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const completeInnovation: Innovation = {
      ...(newInv as Innovation),
      id: `inv-${Date.now()}-${id}`,
      uniqueCode: newInv.uniqueCode || `AV-${Date.now().toString().slice(-4)}`,
      mainFeatures: newInv.mainFeatures?.filter((f) => f.trim()) || ['Core algorithmic execution'],
      techStack: newInv.techStack?.filter((t) => t.trim()) || ['TypeScript'],
      potentialApplications: newInv.potentialApplications?.filter((a) => a.trim()) || ['Enterprise'],
      partnershipOpportunities: newInv.partnershipOpportunities?.filter((p) => p.trim()) || ['Research'],
      progressHistory: [
        {
          date: new Date().toISOString().split('T')[0],
          stage: newInv.developmentStage || 'Idea / Concept',
          note: 'Initial innovation registered into Africanvaris Technology official catalog.',
          author: adminUser?.name || 'Authorized Administrator'
        }
      ]
    };
    StorageService.saveInnovation(completeInnovation);
    setIsAddingInnovation(false);
  };

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

  // If Not Logged In, Render Secure Auth Portal
  if (!adminUser || !adminUser.isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 animate-fade-in">
        <div className="p-8 rounded-2xl bg-[#091122] border border-slate-700/80 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Africanvaris Admin Portal
            </h2>
            <p className="text-xs text-slate-400">
              Authorized access point for executive management, IP oversight, and innovation lifecycle control.
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Admin Email Address
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@africanvaris.tech"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer"
            >
              Authenticate Clearance
            </button>
          </form>

          {/* Quick Demo Helper for Evaluation */}
          <div className="p-3.5 rounded-xl bg-[#060c18] border border-slate-800 space-y-2 text-xs">
            <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">
              Evaluation Demo Credentials:
            </div>
            <div className="font-mono text-[11px] text-slate-400">
              Email: <span className="text-slate-200">admin@africanvaris.tech</span>
            </div>
            <div className="font-mono text-[11px] text-slate-400">
              Password: <span className="text-slate-200">VarisInnovate2026!</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setLoginEmail('admin@africanvaris.tech');
                setLoginPassword('VarisInnovate2026!');
              }}
              className="w-full py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 text-[11px] font-mono hover:bg-cyan-900/40 transition-colors"
            >
              Fill Demo Credentials
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
      {/* Top Admin Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#091122] border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold font-mono">
            AV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">{adminUser.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                {adminUser.role}
              </span>
            </div>
            <div className="text-xs text-slate-400 font-mono">{adminUser.email}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddingInnovation(true)}
            className="px-4 py-2 rounded-lg text-xs font-semibold uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all cursor-pointer"
          >
            + Register New Innovation
          </button>
          <button
            onClick={onLogout}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white bg-[#060c18] border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Admin Tab Switcher */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 text-xs">
        <button
          onClick={() => setActiveTab('innovations')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'innovations'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Innovations Portfolio ({innovations.length})
        </button>
        <button
          onClick={() => setActiveTab('enquiries')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'enquiries'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Partnership Enquiries ({partnershipEnquiries.length})
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'messages'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Contact Messages ({contactMessages.length})
        </button>
        <button
          onClick={() => setActiveTab('publications')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'publications'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Research & News ({researchPapers.length + publications.length})
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          System & Settings
        </button>
      </div>

      {/* TAB 1: INNOVATIONS MANAGEMENT */}
      {activeTab === 'innovations' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400">
              Manage innovation development stages, visibility clearance, and audit records.
            </span>
            <span className="text-cyan-400 font-mono">{innovations.length} total records</span>
          </div>

          <div className="bg-[#091122] rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#060c18] border-b border-slate-800 text-[11px] font-mono uppercase text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Code / ID</th>
                    <th className="px-4 py-3">Innovation Title</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Stage</th>
                    <th className="px-4 py-3">Velocity</th>
                    <th className="px-4 py-3">Clearance</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-mono text-xs">
                  {innovations.map((inv) => (
                    <tr key={inv.id} className="hover:bg-[#0c162c] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-cyan-400 whitespace-nowrap">
                        {inv.uniqueCode}
                      </td>
                      <td className="px-4 py-3.5 font-sans font-semibold text-white whitespace-nowrap">
                        {inv.title}
                      </td>
                      <td className="px-4 py-3.5 text-slate-400 font-sans whitespace-nowrap">
                        {inv.category}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <StageBadge stage={inv.developmentStage} showStepIndex={false} />
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap tabular-nums text-slate-300">
                        {inv.stageProgress}%
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <select
                          value={inv.confidentialityLevel}
                          onChange={(e) => {
                            const updated = {
                              ...inv,
                              confidentialityLevel: e.target.value as VisibilityLevel
                            };
                            StorageService.saveInnovation(updated);
                          }}
                          className={`text-[11px] rounded px-2 py-1 bg-[#060c18] border ${
                            inv.confidentialityLevel === 'PUBLIC'
                              ? 'border-emerald-500/50 text-emerald-400'
                              : inv.confidentialityLevel === 'RESTRICTED'
                              ? 'border-amber-500/50 text-amber-400'
                              : 'border-red-500/50 text-red-400'
                          }`}
                        >
                          <option value="PUBLIC">PUBLIC</option>
                          <option value="RESTRICTED">RESTRICTED</option>
                          <option value="CONFIDENTIAL">CONFIDENTIAL</option>
                          <option value="ARCHIVED">ARCHIVED</option>
                        </select>
                      </td>
                      <td className="px-4 py-3.5 text-right whitespace-nowrap space-x-2">
                        <button
                          onClick={() => {
                            setStageModalInnovation(inv);
                            setNewStage(inv.developmentStage);
                            setNewProgress(inv.stageProgress);
                          }}
                          className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800 text-blue-300 hover:bg-blue-900/60 transition-colors"
                        >
                          Update Stage
                        </button>
                        <button
                          onClick={() => onSelectInnovation(inv)}
                          className="px-2.5 py-1 rounded bg-[#060c18] border border-slate-700 text-slate-300 hover:text-white transition-colors"
                        >
                          Inspect
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Archive ${inv.title}?`)) {
                              StorageService.archiveInnovation(inv.id);
                            }
                          }}
                          className="px-2 py-1 rounded text-red-400 hover:bg-red-950/40"
                        >
                          Archive
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PARTNERSHIP ENQUIRIES */}
      {activeTab === 'enquiries' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400">
              Inbound investor, university, and institutional partnership dossiers.
            </span>
            <span className="text-cyan-400 font-mono">{partnershipEnquiries.length} Enquiries</span>
          </div>

          <div className="space-y-4">
            {partnershipEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="p-6 rounded-2xl bg-[#091122] border border-slate-800 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{enq.name}</span>
                    <span className="text-slate-400">({enq.organization})</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400">{enq.country}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-500 text-[11px]">{enq.date}</span>
                    <select
                      value={enq.status}
                      onChange={(e) =>
                        StorageService.updatePartnershipStatus(
                          enq.id,
                          e.target.value as PartnershipEnquiry['status']
                        )
                      }
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#060c18] border border-slate-700 text-cyan-400"
                    >
                      <option value="New">New</option>
                      <option value="In Review">In Review</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Partnered">Partnered</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs font-mono text-cyan-400">
                  Target: {enq.innovationInterest} · Type: {enq.partnershipType} · Email:{' '}
                  <a href={`mailto:${enq.email}`} className="underline text-slate-300">
                    {enq.email}
                  </a>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-[#060c18] p-3 rounded-lg border border-slate-800">
                  {enq.message}
                </p>

                {enq.notes && (
                  <div className="text-[11px] text-amber-300/80 font-mono">
                    Admin Notes: {enq.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CONTACT MESSAGES */}
      {activeTab === 'messages' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400">Inbound public website transmissions.</span>
            <span className="text-cyan-400 font-mono">{contactMessages.length} Messages</span>
          </div>

          <div className="space-y-3">
            {contactMessages.map((msg) => (
              <div
                key={msg.id}
                className="p-5 rounded-2xl bg-[#091122] border border-slate-800 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{msg.name}</span>
                    <span className="text-slate-400">({msg.email})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 font-mono text-[11px]">{msg.date}</span>
                    <button
                      onClick={() =>
                        StorageService.updateContactStatus(
                          msg.id,
                          msg.status === 'Unread' ? 'Replied' : 'Unread'
                        )
                      }
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        msg.status === 'Unread'
                          ? 'border-amber-500/40 text-amber-400 bg-amber-950/20'
                          : 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
                      }`}
                    >
                      {msg.status}
                    </button>
                  </div>
                </div>
                <div className="font-semibold text-cyan-300">{msg.subject}</div>
                <p className="text-slate-300 leading-relaxed bg-[#060c18] p-3 rounded-lg border border-slate-800">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: PUBLICATIONS & RESEARCH */}
      {activeTab === 'publications' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-slate-400">
              Published scientific papers and official press communications.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#091122] border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Research Papers ({researchPapers.length})
              </h3>
              <div className="space-y-3">
                {researchPapers.map((p) => (
                  <div key={p.id} className="p-3 rounded-lg bg-[#060c18] border border-slate-800 text-xs space-y-1">
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-[11px] font-mono text-cyan-400">{p.publicationStatus} · {p.date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#091122] border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                News Publications ({publications.length})
              </h3>
              <div className="space-y-3">
                {publications.map((n) => (
                  <div key={n.id} className="p-3 rounded-lg bg-[#060c18] border border-slate-800 text-xs space-y-1">
                    <div className="font-semibold text-white">{n.title}</div>
                    <div className="text-[11px] font-mono text-slate-400">{n.category} · {n.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SYSTEM & SETTINGS */}
      {activeTab === 'settings' && (
        <div className="p-8 rounded-2xl bg-[#091122] border border-slate-800 space-y-6 max-w-2xl text-xs">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white">System Settings & Data Management</h3>
            <p className="text-slate-400 text-xs mt-0.5">Configure institutional defaults and database state.</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-slate-400 font-mono mb-1">Company Legal Entity</label>
              <input
                type="text"
                disabled
                value="AFRICANVARIS TECHNOLOGY"
                className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-300 font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-mono mb-1">Official Public Email</label>
              <input
                type="text"
                disabled
                value="zuberimatangula@gmail.com"
                className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-300 font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-mono mb-1">WhatsApp Internal Link</label>
              <input
                type="text"
                disabled
                value="https://wa.me/255650362025"
                className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-300 font-mono"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-xs">Reset All Data to Factory Seed:</span>
            <button
              onClick={() => {
                if (confirm('Reset database to initial 11 innovations and factory seeds?')) {
                  StorageService.resetToDefaults();
                  alert('Database reset to official initial state.');
                }
              }}
              className="px-4 py-2 rounded-lg bg-red-950/60 border border-red-800 text-red-300 hover:bg-red-900/60 transition-colors text-xs font-mono"
            >
              Reset Database State
            </button>
          </div>
        </div>
      )}

      {/* UPDATE STAGE MODAL */}
      {stageModalInnovation && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-lg bg-[#091122] border border-slate-700 rounded-2xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-mono uppercase">
                Update Stage: {stageModalInnovation.title}
              </h3>
              <button
                onClick={() => setStageModalInnovation(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleStageUpdateSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Target Development Stage</label>
                <select
                  value={newStage}
                  onChange={(e) => setNewStage(e.target.value as InnovationStage)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  {ALL_STAGES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1">
                  <span>Phase Progress Velocity</span>
                  <span className="font-mono text-cyan-400">{newProgress}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newProgress}
                  onChange={(e) => setNewProgress(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Milestone Progress Note</label>
                <textarea
                  rows={3}
                  value={stageNote}
                  onChange={(e) => setStageNote(e.target.value)}
                  placeholder="Record verification parameters, lab test results, or transition notes..."
                  className="w-full px-3.5 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setStageModalInnovation(null)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  Save Stage Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* REGISTER NEW INNOVATION MODAL */}
      {isAddingInnovation && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-3xl bg-[#091122] border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white font-mono uppercase">
                Register New Innovation Project
              </h3>
              <button
                onClick={() => setIsAddingInnovation(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateInnovation} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Innovation Code</label>
                  <input
                    type="text"
                    value={newInv.uniqueCode}
                    onChange={(e) => setNewInv({ ...newInv, uniqueCode: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 font-mono"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-medium mb-1">Innovation Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SOLAR WATER PURIFICATION DESALINATOR"
                    value={newInv.title}
                    onChange={(e) => setNewInv({ ...newInv, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Subtitle / Descriptor</label>
                <input
                  type="text"
                  placeholder="e.g. Clean Energy Hydro-Thermal Desalination System"
                  value={newInv.subtitle}
                  onChange={(e) => setNewInv({ ...newInv, subtitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Category</label>
                  <select
                    value={newInv.category}
                    onChange={(e) =>
                      setNewInv({ ...newInv, category: e.target.value as InnovationCategory })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Initial Stage</label>
                  <select
                    value={newInv.developmentStage}
                    onChange={(e) =>
                      setNewInv({ ...newInv, developmentStage: e.target.value as InnovationStage })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                  >
                    {ALL_STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Visibility Level</label>
                  <select
                    value={newInv.confidentialityLevel}
                    onChange={(e) =>
                      setNewInv({ ...newInv, confidentialityLevel: e.target.value as VisibilityLevel })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                  >
                    <option value="PUBLIC">PUBLIC</option>
                    <option value="RESTRICTED">RESTRICTED</option>
                    <option value="CONFIDENTIAL">CONFIDENTIAL</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Problem Being Addressed *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe the authentic African or global challenge..."
                  value={newInv.problem}
                  onChange={(e) => setNewInv({ ...newInv, problem: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Proposed Solution *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Detail the scientific / technological solution..."
                  value={newInv.solution}
                  onChange={(e) => setNewInv({ ...newInv, solution: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Operational Mechanics (How It Works)</label>
                <textarea
                  rows={2}
                  placeholder="Step-by-step description of operational workflow..."
                  value={newInv.howItWorks}
                  onChange={(e) => setNewInv({ ...newInv, howItWorks: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddingInnovation(false)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold uppercase"
                >
                  Register Innovation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
