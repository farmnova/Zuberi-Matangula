import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import { PartnershipEnquiry } from '../types';

interface PartnershipModalProps {
  initialInnovationInterest?: string;
  onClose: () => void;
  onSuccess?: () => void;
}

export const PartnershipModal: React.FC<PartnershipModalProps> = ({
  initialInnovationInterest = 'General Innovation Portfolio',
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    country: '',
    partnershipType: 'Technology Company' as PartnershipEnquiry['partnershipType'],
    innovationInterest: initialInnovationInterest,
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
    if (!formData.organization.trim()) newErrors.organization = 'Organization or institution is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate or academic email';
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
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#091122] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#060c18] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Partnership & Investment Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Africanvaris Technology. Your inquiry regarding{' '}
                <span className="text-cyan-400 font-medium">{formData.innovationInterest}</span> has been
                logged into our executive partnership pipeline. Our research and strategic collaboration team
                will review your dossier and initiate correspondence.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-slate-400 leading-relaxed">
                Africanvaris Technology collaborates with global venture investors, academic institutions,
                technology providers, and government entities to accelerate African scientific innovation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Your Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Kwame Mensah"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100"
                  />
                  {errors.name && <span className="text-red-400 text-[10px] mt-0.5 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Organization / Institution <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Pan-African Research Lab / Venture Fund"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100"
                  />
                  {errors.organization && (
                    <span className="text-red-400 text-[10px] mt-0.5 block">{errors.organization}</span>
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
                    placeholder="e.g. partner@institution.org"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100"
                  />
                  {errors.email && <span className="text-red-400 text-[10px] mt-0.5 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Country of Operation <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Tanzania, Kenya, UK, Germany, USA"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100"
                  />
                  {errors.country && <span className="text-red-400 text-[10px] mt-0.5 block">{errors.country}</span>}
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
                      setFormData({ ...formData, partnershipType: e.target.value as PartnershipEnquiry['partnershipType'] })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100"
                  >
                    {PARTNERSHIP_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Innovation of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.innovationInterest}
                    onChange={(e) => setFormData({ ...formData, innovationInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100 font-mono text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Collaboration Scope & Proposed Objectives <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your interest, proposed pilot testing grounds, research synergy, or co-investment scope..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1a] border border-slate-700 focus:border-cyan-400 focus:outline-none text-slate-100 resize-none leading-relaxed"
                />
                {errors.message && <span className="text-red-400 text-[10px] mt-0.5 block">{errors.message}</span>}
              </div>

              <div className="p-3 rounded-lg bg-[#060c18] border border-slate-800 text-[11px] text-slate-400 leading-normal">
                By submitting this form, you acknowledge that Africanvaris Technology maintains strict non-disclosure
                and intellectual property confidentiality for all technical and financial deliberations.
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting Dossier...' : 'Submit Partnership Dossier'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
