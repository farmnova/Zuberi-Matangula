import React from 'react';
import { AfricanvarisLogo } from './AfricanvarisLogo';
import { NavSection } from './Navbar';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050914] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <AfricanvarisLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              Africanvaris Technology is an African technology and science innovation company
              focused on developing intelligent solutions through artificial intelligence,
              engineering, scientific research, digital technologies, and technological innovation.
            </p>
            <div className="pt-2">
              <span className="block text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                Official Correspondence:
              </span>
              <a
                href="mailto:zuberimatangula@gmail.com"
                className="text-slate-200 hover:text-cyan-400 transition-colors font-medium text-xs flex items-center gap-1.5 mt-1"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                zuberimatangula@gmail.com
              </a>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Slogan: Smarter Africa. Global Innovation.
            </div>
          </div>

          {/* Column 3: Innovations Portfolio */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Innovations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  FARM 17 (Smart Agriculture)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  BLACKLOYA (Digital Contracts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  TUITOR AI (Education Platform)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  AI CCTV ANALYSIS (Video Intelligence)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  SMART CONSTRUCTION DEVICE
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  All 11 Active Innovations →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Research & Development */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Research & Science
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Artificial Intelligence Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Embedded IoT & Mechatronics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('development')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  10-Stage Pipeline Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('future')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Future Innovations Pipeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Scientific Computing Stack
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Institutional & Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Engage & Admin
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('partnerships')}
                  className="hover:text-cyan-300 transition-colors text-left text-cyan-400 font-medium"
                >
                  Investor & Partnership Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  About Africanvaris
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  News & Publications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Contact Section
                </button>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('admin')}
                  className="hover:text-cyan-300 transition-colors text-left text-slate-500 font-mono flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Administrator Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Intellectual Property Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AFRICANVARIS TECHNOLOGY. All intellectual property, trademarks,
            and research rights reserved.
          </div>
          <div className="text-[11px] text-slate-500 max-w-xl text-center md:text-right">
            Innovations cataloged reflect active scientific research, development, and prototypes.
            Public documentation does not constitute a solicitation or claim of universal commercial completion.
          </div>
        </div>
      </div>
    </footer>
  );
};
