import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import { sendFirebasePasswordReset } from '../services/firebase';
import { UserProfile } from '../types';

interface AuthModalProps {
  initialMode?: 'login' | 'signup' | 'forgot';
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
  restrictedReason?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  initialMode = 'login',
  onClose,
  onSuccess,
  restrictedReason
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: 'Research Specialist',
    country: ''
  });

  // Forgot Password State
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccessMessage, setResetSuccessMessage] = useState('');
  const [isResetSubmitting, setIsResetSubmitting] = useState(false);

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ROLES = [
    'Research Specialist / Fellow',
    'University Faculty / Academic',
    'Technology & Engineering Partner',
    'Venture / Institutional Investor',
    'Public Sector / Government Representative',
    'Independent Researcher',
    'Industry Specialist'
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!loginEmail.trim() || !loginPassword) {
      setError('Please provide both email and password.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const res = StorageService.loginUser(loginEmail, loginPassword);
      setIsSubmitting(false);
      if (res.success && res.user) {
        onSuccess(res.user);
        onClose();
      } else {
        setError(res.error || 'Authentication failed. Please verify credentials.');
      }
    }, 400);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!signUpData.name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!signUpData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpData.email)) {
      setError('Please enter a valid academic or professional email address.');
      return;
    }
    if (signUpData.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!signUpData.organization.trim()) {
      setError('Please specify your organization or university affiliation.');
      return;
    }
    if (!signUpData.country.trim()) {
      setError('Please enter your country.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const res = StorageService.registerUser({
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
        organization: signUpData.organization,
        role: signUpData.role,
        country: signUpData.country
      });
      setIsSubmitting(false);

      if (res.success && res.user) {
        onSuccess(res.user);
        onClose();
      } else {
        setError(res.error || 'Registration failed.');
      }
    }, 500);
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResetSuccessMessage('');

    const targetEmail = resetEmail.trim();
    if (!targetEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(targetEmail)) {
      setError('Please enter a valid email address to receive your password reset link.');
      return;
    }

    setIsResetSubmitting(true);
    try {
      const result = await sendFirebasePasswordReset(targetEmail);
      setIsResetSubmitting(false);

      if (result.success) {
        setResetSuccessMessage(result.message);
      } else {
        setError(result.message);
      }
    } catch {
      setIsResetSubmitting(false);
      setError('An error occurred during communication with Firebase Authentication services. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#091122] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#060c18] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Africanvaris Authentication Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close authentication modal"
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Restricted Reason Callout */}
        {restrictedReason && (
          <div className="px-6 py-2.5 bg-cyan-950/40 border-b border-cyan-800/40 text-xs text-cyan-300 flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>{restrictedReason}</span>
          </div>
        )}

        {/* Tab Controls (Login vs Sign Up vs Forgot Password) */}
        <div className="grid grid-cols-3 p-1.5 bg-[#060c18] border-b border-slate-800 text-xs font-medium">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
              setResetSuccessMessage('');
            }}
            className={`py-2 rounded-lg transition-colors cursor-pointer text-center ${
              mode === 'login'
                ? 'bg-[#091122] text-cyan-300 font-semibold shadow-sm border border-slate-700/80'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Account Login
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError('');
              setResetSuccessMessage('');
            }}
            className={`py-2 rounded-lg transition-colors cursor-pointer text-center ${
              mode === 'signup'
                ? 'bg-[#091122] text-cyan-300 font-semibold shadow-sm border border-slate-700/80'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => {
              if (loginEmail && !resetEmail) setResetEmail(loginEmail);
              setMode('forgot');
              setError('');
              setResetSuccessMessage('');
            }}
            className={`py-2 rounded-lg transition-colors cursor-pointer text-center ${
              mode === 'forgot'
                ? 'bg-[#091122] text-cyan-300 font-semibold shadow-sm border border-slate-700/80'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Forgot Password
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {error && (
            <div className="p-3 mb-4 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300 leading-snug">
              {error}
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="name@institution.org"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-slate-300 font-medium">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      if (loginEmail && !resetEmail) setResetEmail(loginEmail);
                      setMode('forgot');
                      setError('');
                      setResetSuccessMessage('');
                    }}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Access: Restricted Technical Data</span>
                <span className="text-cyan-400 font-mono">Restricted Clearance</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Verifying Identity...' : 'Log In & Access Restricted Data'}
              </button>

              {/* Demo Quick-Fill for instant verification */}
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                <div className="flex justify-between font-mono">
                  <span>Evaluation Demo User:</span>
                  <span className="text-cyan-400">Restricted Cleared</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setLoginEmail('amina.toure@africanresearch.org');
                    setLoginPassword('Researcher2026!');
                  }}
                  className="w-full py-1.5 rounded-lg bg-[#060c18] border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 font-mono text-[11px] transition-colors cursor-pointer"
                >
                  Quick Fill: amina.toure@africanresearch.org (Researcher2026!)
                </button>
              </div>
            </form>
          )}

          {/* SIGN UP FORM */}
          {mode === 'signup' && (
            <form onSubmit={handleSignUpSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={signUpData.name}
                  onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                  placeholder="e.g. Samuel Adeyemi"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Institutional / Corporate Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  value={signUpData.email}
                  onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                  placeholder="s.adeyemi@university.edu or name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Password <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="password"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    placeholder="Min 8 characters"
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Confirm Password <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="password"
                    value={signUpData.confirmPassword}
                    onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                    placeholder="Re-enter password"
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Organization / Entity <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={signUpData.organization}
                    onChange={(e) => setSignUpData({ ...signUpData, organization: e.target.value })}
                    placeholder="e.g. University of Nairobi"
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Country <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={signUpData.country}
                    onChange={(e) => setSignUpData({ ...signUpData, country: e.target.value })}
                    placeholder="e.g. Kenya, Tanzania, UK"
                    className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Professional Discipline / Category
                </label>
                <select
                  value={signUpData.role}
                  onChange={(e) => setSignUpData({ ...signUpData, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 rounded-lg bg-[#060c18] border border-slate-800 text-[11px] text-slate-400 leading-normal">
                ✓ Account registration automatically activates <strong className="text-cyan-300">Restricted Content Clearance</strong>, enabling you to inspect restricted engineering specifications, research pre-prints, and trial data across Africanvaris Technology.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Creating Cleared Account...' : 'Create Account & Unlock Clearance'}
              </button>
            </form>
          )}

          {/* FORGOT PASSWORD FORM (via Firebase Authentication Services) */}
          {mode === 'forgot' && (
            <form onSubmit={handleResetSubmit} className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#060c18] border border-cyan-800/40 text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold text-[11px] uppercase">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <span>Firebase Authentication Recovery</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Enter your registered institutional or corporate email address below. Africanvaris Technology will generate and dispatch a secure password reset link directly through Google Firebase Authentication services.
                </p>
              </div>

              {resetSuccessMessage ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/60 text-emerald-200 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="space-y-1">
                      <div className="font-semibold text-emerald-300">Password Reset Link Dispatched</div>
                      <p className="text-[11px] text-emerald-200/90 leading-relaxed">{resetSuccessMessage}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-emerald-900/50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setResetSuccessMessage('');
                        setError('');
                      }}
                      className="text-xs text-emerald-300 hover:text-emerald-100 font-medium underline cursor-pointer"
                    >
                      ← Return to Account Login
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setResetSuccessMessage('');
                      }}
                      className="text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      Send to another address
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Registered Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="name@institution.org or name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-slate-400">Firebase Auth · Secure Link</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setError('');
                      }}
                      className="text-cyan-400 hover:underline cursor-pointer"
                    >
                      Remember password? Log In
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isResetSubmitting}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isResetSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Dispatching Reset Link via Firebase...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Send Password Reset Link</span>
                      </>
                    )}
                  </button>

                  {/* Demo Quick Fill for testing */}
                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                    <div className="flex justify-between font-mono">
                      <span>Quick Fill Email for Test:</span>
                      <span className="text-cyan-400">Institutional Researcher</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setResetEmail('amina.toure@africanresearch.org')}
                      className="w-full py-1.5 rounded-lg bg-[#060c18] border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 font-mono text-[11px] transition-colors cursor-pointer"
                    >
                      amina.toure@africanresearch.org
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
