import React from 'react';

interface AfricanvarisLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  className?: string;
}

export const AfricanvarisLogo: React.FC<AfricanvarisLogoProps> = ({
  size = 'md',
  showWordmark = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 32, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 40, text: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 54, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 72, text: 'text-3xl', sub: 'text-sm' }
  };

  const config = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Raven-Inspired Technology Emblem */}
      <div
        className="relative shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0c1a3a] to-[#070f24] p-1.5 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        style={{ width: config.icon, height: config.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform -rotate-1"
        >
          <defs>
            <linearGradient id="ravenPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* Raven Crest & Beak - Geometric Cybernetic Wings */}
          {/* Main Head and Beak Profile */}
          <path
            d="M 50 18 L 68 28 L 86 38 L 70 42 L 56 42 L 64 54 L 46 68 L 32 64 L 20 48 L 30 32 Z"
            fill="url(#ravenPrimary)"
            opacity="0.95"
          />

          {/* Sharp Keen Raven Beak Tip */}
          <path
            d="M 68 28 L 92 40 L 68 42 Z"
            fill="#38bdf8"
          />

          {/* Outer Forward Wing Plumage */}
          <path
            d="M 46 68 L 60 76 L 44 88 L 32 78 L 22 84 L 20 62 L 32 64 Z"
            fill="#1d4ed8"
          />

          {/* Secondary Feather Facet */}
          <path
            d="M 30 32 L 20 48 L 12 40 L 22 26 Z"
            fill="#0284c7"
            opacity="0.8"
          />

          {/* Cybernetic Intelligence Node (Eye of the Raven) */}
          <circle cx="58" cy="34" r="3.5" fill="#ffffff" />
          <circle cx="58" cy="34" r="5" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />

          {/* Subtle Scientific Circuit Traces across wing */}
          <path
            d="M 58 34 L 44 48 L 34 50 M 44 48 L 48 62"
            stroke="url(#circuitGlow)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="34" cy="50" r="2" fill="#38bdf8" />
          <circle cx="48" cy="62" r="2" fill="#38bdf8" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col tracking-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-tight text-white ${config.text} font-sans`}
            >
              AFRICANVARIS
            </span>
            <span
              className={`font-semibold tracking-wider text-cyan-400 ${config.text} font-sans`}
            >
              TECHNOLOGY
            </span>
          </div>
          <span
            className={`font-medium tracking-[0.16em] uppercase text-slate-400 ${config.sub}`}
          >
            Smarter Africa · Global Innovation
          </span>
        </div>
      )}
    </div>
  );
};
