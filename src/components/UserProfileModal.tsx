import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import { Innovation, UserProfile } from '../types';

interface UserProfileModalProps {
  user: UserProfile;
  innovations: Innovation[];
  onClose: () => void;
  onLogout: () => void;
  onSelectInnovation: (innovation: Innovation) => void;
  onOpenPartnership: (interest?: string) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  user,
  innovations,
  onClose,
  onLogout,
  onSelectInnovation,
  onOpenPartnership
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    organization: user.organization,
    role: user.role,
    country: user.country
  });

  const [message, setMessage] = useState('');

  const savedList = (user.savedInnovations || [])
    .map((id) => innovations.find((inv) => inv.id === id || inv.uniqueCode === id))
    .filter(Boolean) as Innovation[];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.updateUserProfile(user.id, formData);
    setIsEditing(false);
    setMessage('Profile successfully updated.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#091122] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#060c18] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Africanvaris User Profile & Clearance
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300">
          {message && (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-300">
              {message}
            </div>
          )}

          {/* User Identity Overview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-br from-[#0c1938] to-[#070e1c] border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-lg font-bold font-mono text-cyan-300 shadow-inner">
                {user.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{user.name}</h4>
                <div className="text-slate-400">{user.email}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Member since {user.createdAt}
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/50 text-emerald-400 font-mono text-xs font-semibold">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Restricted Clearance Active
              </span>
              <div className="text-[10px] text-slate-400 font-mono mt-1">
                Authorized for Restricted Dossiers
              </div>
            </div>
          </div>

          {/* Clearance Scope Card */}
          <div className="p-4 rounded-xl bg-[#060c18] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">
                Access Permissions Summary
              </span>
              <span className="text-[10px] font-mono text-slate-500">Security Policy v2.4</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded bg-[#091122]">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-slate-200">Public Innovations & Schematics</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#091122]">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-slate-200">Restricted Technical Whitepapers</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#091122]">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-slate-200">Empirical Research Datasets</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#091122]">
                <span className="text-amber-400 font-bold">🔒</span>
                <span className="text-slate-400">Confidential IP (Requires NDA)</span>
              </div>
            </div>
          </div>

          {/* Profile Details (View or Edit) */}
          <div className="p-5 rounded-xl bg-[#081224] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h5 className="font-semibold text-white">Institutional Affiliation Details</h5>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
              >
                {isEditing ? 'Cancel Editing' : 'Edit Profile'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Organization / University</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Professional Role</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#060c18] border border-slate-700 text-slate-100"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs"
                  >
                    Save Profile Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Organization:</span>
                  <span className="font-medium text-white">{user.organization}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Professional Role:</span>
                  <span className="font-medium text-white">{user.role}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Country:</span>
                  <span className="font-medium text-white">{user.country}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Institutional NDA Status:</span>
                  <span className="font-medium text-emerald-400">Mutual Standard NDA Executed</span>
                </div>
              </div>
            )}
          </div>

          {/* Saved / Bookmarked Innovations */}
          <div className="space-y-3">
            <h5 className="font-semibold text-white flex items-center justify-between">
              <span>Saved Innovation Dossiers ({savedList.length})</span>
              <span className="text-[11px] font-mono text-slate-500">Quick Access Vault</span>
            </h5>

            {savedList.length > 0 ? (
              <div className="space-y-2">
                {savedList.map((inv) => (
                  <div
                    key={inv.id}
                    onClick={() => {
                      onClose();
                      onSelectInnovation(inv);
                    }}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#060c18] border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-cyan-400 font-bold">{inv.uniqueCode}</span>
                      <span className="text-slate-200 font-medium">{inv.title}</span>
                      <span className="text-slate-500">·</span>
                      <span className="text-slate-400">{inv.category}</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">Inspect Dossier →</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-[#060c18] border border-slate-800 text-slate-500 text-center">
                You have not bookmarked any innovation dossiers yet. You can save innovations from their profile view.
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 bg-[#060c18] border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenPartnership(`Confidential NDA Elevation: ${user.name} (${user.organization})`);
            }}
            className="text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
          >
            Request Confidential IP NDA Clearance →
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-xs"
            >
              Close
            </button>
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-red-950/40 border border-red-800 text-red-300 hover:bg-red-900/40 text-xs font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
