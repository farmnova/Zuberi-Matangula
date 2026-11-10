import React, { useState } from 'react';
import { UserProfile } from '../types';
import { AfricanvarisLogo } from './AfricanvarisLogo';

export type NavSection =
  | 'home'
  | 'about'
  | 'innovations'
  | 'research'
  | 'development'
  | 'future'
  | 'technology'
  | 'partnerships'
  | 'news'
  | 'contact'
  | 'admin';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  isAdminLoggedIn?: boolean;
  currentUser: UserProfile | null;
  onOpenAuth: (mode: 'login' | 'signup' | 'forgot') => void;
  onOpenProfile: () => void;
  onLogoutUser: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  isAdminLoggedIn = false,
  currentUser,
  onOpenAuth,
  onOpenProfile,
  onLogoutUser
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // 4 Primary core single-line links in header top bar contract
  const primaryLinks: { id: NavSection; label: string }[] = [
    { id: 'innovations', label: 'Innovations' },
    { id: 'research', label: 'Research' },
    { id: 'development', label: 'Pipeline' },
    { id: 'technology', label: 'Science & Tech' },
    { id: 'about', label: 'About' }
  ];

  // Secondary items accessible via "More" dropdown
  const secondaryLinks: { id: NavSection; label: string; desc: string }[] = [
    { id: 'future', label: 'Future Innovations', desc: 'Conceptual blueprints & frontier exploration' },
    { id: 'partnerships', label: 'Partnerships & Investment', desc: 'Co-development & institutional syndicates' },
    { id: 'news', label: 'News & Publications', desc: 'Announcements, press releases & insights' },
    { id: 'contact', label: 'Contact Us', desc: 'Official communications & enquiries' }
  ];

  const handleLinkClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070d1a]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark / Emblem */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg shrink-0"
          >
            <AfricanvarisLogo size="md" />
          </button>

          {/* Zone 2: 4-5 Nav Links (Single-Line, Clean Typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {primaryLinks.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* "More" Section Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className={`flex items-center gap-1.5 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  secondaryLinks.some((l) => l.id === currentSection)
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>More</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#0a1224] border border-slate-700/80 shadow-2xl p-2 z-50 animate-fade-in">
                  {secondaryLinks.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleLinkClick(sub.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                        currentSection === sub.id
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'hover:bg-slate-800/60 text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-semibold">{sub.label}</div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{sub.desc}</div>
                    </button>
                  ))}
                  <div className="border-t border-slate-800 my-1 pt-1">
                    <button
                      onClick={() => handleLinkClick('admin')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-cyan-300 hover:bg-slate-800/40 transition-colors"
                    >
                      {isAdminLoggedIn ? 'Admin Console (Active)' : 'Administrator Login'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: User Auth / Clearance & Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenProfile}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c1836] border border-cyan-500/40 hover:border-cyan-400 text-xs text-slate-200 transition-colors cursor-pointer group"
                >
                  <span className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold flex items-center justify-center">
                    {currentUser.name.charAt(0)}
                  </span>
                  <span className="font-medium max-w-[120px] truncate">{currentUser.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Restricted Clearance Active" />
                </button>
                <button
                  onClick={onLogoutUser}
                  className="text-slate-400 hover:text-red-400 text-xs px-1.5 py-1 transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Login
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Sign Up
                </button>
              </div>
            )}

            <button
              onClick={() => handleLinkClick('partnerships')}
              className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d1a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-1">
          {currentUser ? (
            <div className="p-3 mb-2 rounded-xl bg-[#091122] border border-cyan-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-cyan-950 text-cyan-300 font-bold flex items-center justify-center font-mono">
                  {currentUser.name.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold text-white truncate max-w-[160px]">{currentUser.name}</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Restricted Clearance Active</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className="text-xs text-cyan-400 font-mono hover:underline"
              >
                Profile →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mb-3 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="py-2 text-center text-xs font-semibold text-slate-200 bg-[#0a1428] border border-slate-700 rounded-lg"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="py-2 text-center text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          )}

          <div className="text-[11px] font-mono uppercase text-slate-500 px-3 py-1">Main Navigation</div>
          {[...primaryLinks, ...secondaryLinks.map((s) => ({ id: s.id, label: s.label }))].map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === item.id
                  ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('partnerships')}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase text-white bg-blue-600 rounded-lg"
            >
              Partner With Us
            </button>
            <button
              onClick={() => handleLinkClick('admin')}
              className="w-full py-2 text-center text-xs text-slate-400 hover:text-cyan-300"
            >
              {isAdminLoggedIn ? 'Administrator Console' : 'Admin Login'}
            </button>
            {currentUser && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogoutUser();
                }}
                className="w-full py-2 text-center text-xs text-red-400 hover:underline font-mono"
              >
                Sign Out Account
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
