import React, { useState } from 'react';
import { StorageService } from '../services/storage';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const officialEmail = 'zuberimatangula@gmail.com';
  const whatsappUrl =
    'https://wa.me/255650362025?text=' +
    encodeURIComponent(
      'Hello Africanvaris Technology. I would like to learn more about your innovations and technology solutions.'
    );

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      StorageService.submitContactMessage(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Official Corporate Communications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Contact Africanvaris Technology
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Connect directly with our executive office, research laboratories, and intellectual property
          licensing division.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Information & Official Communication Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Primary Official Email Box */}
          <div className="p-6 rounded-2xl bg-[#091122] border border-cyan-500/40 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Primary Official Email
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              For institutional inquiries, patent deliberations, executive correspondence, and press
              relations:
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${officialEmail}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#060c18] border border-cyan-500/50 hover:border-cyan-400 text-sm font-semibold text-white hover:text-cyan-300 transition-all shadow-md group"
              >
                <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{officialEmail}</span>
              </a>
            </div>
            <div className="text-[11px] text-slate-500 font-mono pt-1">
              Guaranteed institutional review within 24–48 business hours.
            </div>
          </div>

          {/* Instant WhatsApp Direct Channel (Strict Privacy Mode: NO phone number printed) */}
          <div className="p-6 rounded-2xl bg-[#081224] border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Direct WhatsApp Channel
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Open an encrypted real-time consultation with Africanvaris Technology. Click below to launch
              a direct conversation with our technical team:
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Launch Direct WhatsApp Chat</span>
              </a>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              Pre-filled message: "Hello Africanvaris Technology. I would like to learn more about your innovations and technology solutions."
            </div>
          </div>

          {/* Configurable Details Notice */}
          <div className="p-6 rounded-2xl bg-[#070e1c] border border-slate-800 space-y-2 text-xs text-slate-400">
            <span className="font-mono text-cyan-400 text-[11px] uppercase font-semibold">
              Corporate Registry & Physical Locations
            </span>
            <p className="leading-relaxed">
              Africanvaris Technology physical research campus details, laboratory addresses, and regional
              liaison offices remain configurable in our central registry and will be published upon
              scheduled facility commissioning.
            </p>
          </div>
        </div>

        {/* Right Interactive Web Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#091122] border border-slate-800 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Send a Direct Message</h2>
              <p className="text-xs text-slate-400 mt-1">
                Your communication will be encrypted and delivered directly to the appropriate research or
                executive desk.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you. Your message has been received and routed to our communications coordinator.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-cyan-400 hover:underline font-mono pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Adeyemi"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                    {errors.name && <span className="text-red-400 text-[10px] block mt-0.5">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. s.adeyemi@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                    {errors.email && <span className="text-red-400 text-[10px] block mt-0.5">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Subject Line <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Technical collaboration inquiry on Smart Construction Device"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  />
                  {errors.subject && <span className="text-red-400 text-[10px] block mt-0.5">{errors.subject}</span>}
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Message Body <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your inquiry, question, or proposal..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400 resize-none leading-relaxed"
                  />
                  {errors.message && <span className="text-red-400 text-[10px] block mt-0.5">{errors.message}</span>}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Transmission...' : 'Transmit Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
