import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import { Innovation, PartnershipEnquiry } from '../types';

interface PartnershipsViewProps {
  innovations: Innovation[];
}

export const PartnershipsView: React.FC<PartnershipsViewProps> = ({ innovations }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    country: '',
    partnershipType: 'Investor' as PartnershipEnquiry['partnershipType'],
    innovationInterest: 'FARM 17 (AV-AGRI-017)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const PARTNERSHIP_TYPES: PartnershipEnquiry['partnershipType'][] = [
    'Investor',
    'Research Institution',
    'University',
    'Technology Company',
    'Government Institution',
    'Development Organization',
    'Engineering Partner',
    'Innovation Collaborator'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid corporate or institutional email is required';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.message.trim() || formData.message.length < 20) {
      newErrors.message = 'Please provide detailed partnership context (at least 20 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      StorageService.submitPartnershipEnquiry(formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const partnerPillars = [
    {
      role: 'Venture & Impact Investors',
      desc: 'Participate in co-financing high-impact African innovations with intellectual property protections and clear commercialization roadmaps.'
    },
    {
      role: 'Research Institutions & Universities',
      desc: 'Collaborate on multi-site scientific trials, joint grant proposals, PhD placements, and academic peer-reviewed publications.'
    },
    {
      role: 'Government & Public Sector',
      desc: 'Deploy sovereign digital governance, agricultural conflict resolution corridors, and public infrastructure monitoring systems.'
    },
    {
      role: 'Technology & Engineering Partners',
      desc: 'Integrate sensors, hardware manufacturing, cellular connectivity, and specialized compute hardware into Africanvaris solutions.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Strategic Alliances · Africanvaris Technology</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Investors & Strategic Partnerships
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Africanvaris Technology connects African inventors, researchers, and engineers with global
          capital, public institutions, and industrial leaders. We do not make speculative return claims;
          we build solid, patented, scientifically verified technologies.
        </p>
      </div>

      {/* Partner Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {partnerPillars.map((p, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#081122] border border-slate-800 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold">0{idx + 1}.</span>
              <h3 className="text-base font-bold text-white">{p.role}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Formal Enquiry Form */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#091122] border border-slate-800 max-w-3xl mx-auto space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Initiate a Strategic Partnership
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Complete the official dossier below. All technical, financial, and collaborative proposals
            are logged into our administrator pipeline under mutual confidentiality.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Dossier Successfully Logged</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been registered in the Africanvaris Technology executive system. Our leadership
              team will review your institutional credentials and respond via official channels.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  organization: '',
                  email: '',
                  country: '',
                  partnershipType: 'Investor',
                  innovationInterest: 'FARM 17 (AV-AGRI-017)',
                  message: ''
                });
              }}
              className="text-xs text-cyan-400 hover:underline font-mono"
            >
              Submit another proposal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Kwame Mensah"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
                {errors.name && <span className="text-red-400 text-[10px] block mt-0.5">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Organization / Entity <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Frontier Agro Venture Fund"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
                {errors.organization && (
                  <span className="text-red-400 text-[10px] block mt-0.5">{errors.organization}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Corporate / Academic Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. director@fund.org"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
                {errors.email && <span className="text-red-400 text-[10px] block mt-0.5">{errors.email}</span>}
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Country of Residence / HQ <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. Tanzania, South Africa, UK, USA"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
                {errors.country && <span className="text-red-400 text-[10px] block mt-0.5">{errors.country}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Partnership Category <span className="text-cyan-400">*</span>
                </label>
                <select
                  value={formData.partnershipType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      partnershipType: e.target.value as PartnershipEnquiry['partnershipType']
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  {PARTNERSHIP_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Innovation of Interest
                </label>
                <select
                  value={formData.innovationInterest}
                  onChange={(e) => setFormData({ ...formData, innovationInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 font-mono text-xs"
                >
                  <option value="General Innovation Portfolio">General Innovation Portfolio</option>
                  {innovations.map((inv) => (
                    <option key={inv.id} value={`${inv.title} (${inv.uniqueCode})`}>
                      {inv.title} ({inv.uniqueCode})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Detailed Collaboration Scope <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your collaborative proposal, testbed availability, funding structure, or technical alignment..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 resize-none leading-relaxed"
              />
              {errors.message && <span className="text-red-400 text-[10px] block mt-0.5">{errors.message}</span>}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Registering Proposal...' : 'Submit Partnership Proposal'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
