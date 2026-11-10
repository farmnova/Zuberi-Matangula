import React from 'react';
import { NavSection } from '../components/Navbar';
import { StageBadge } from '../components/StageBadge';
import { Innovation, ResearchPaper } from '../types';

interface HomeViewProps {
  innovations: Innovation[];
  researchPapers: ResearchPaper[];
  onNavigate: (section: NavSection) => void;
  onSelectInnovation: (innovation: Innovation) => void;
  onOpenPartnership: (interest?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  innovations,
  researchPapers,
  onNavigate,
  onSelectInnovation,
  onOpenPartnership
}) => {
  const featuredInnovations = innovations.slice(0, 4);
  const topResearch = researchPapers.slice(0, 2);

  const pillars = [
    {
      title: 'Artificial Intelligence & Neural Systems',
      desc: 'Multimodal vision, natural language retrieval, and edge machine learning tailored to real African environments.'
    },
    {
      title: 'Precision Agro-Tech & Soil Science',
      desc: 'IoT telemetry, multi-spectral satellite synthesis, and conflict mitigation corridors protecting rural food systems.'
    },
    {
      title: 'Digital Jurisprudence & Cryptography',
      desc: 'Tamper-evident contract sealing, biometric multi-party signatures, and transparent property conveyance.'
    },
    {
      title: 'Embedded Hardware & Metrology',
      desc: 'Custom LiDAR, MEMS sensors, and ruggedized edge devices guaranteeing structural construction integrity.'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION (1440px desktop balance with high-fidelity asset) */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>AFRICANVARIS TECHNOLOGY</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">SMARTER AFRICA. GLOBAL INNOVATION.</span>
              </div>

              {/* Exact Hero Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl">
                Engineering the Future Through African Innovation.
              </h1>

              {/* Exact Hero Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Discover intelligent technologies, scientific research and innovative solutions
                developed to address challenges in Africa and across the world.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('innovations')}
                  className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-cyan-500/20 active:scale-95 transition-all duration-150 cursor-pointer"
                >
                  Explore Our Innovations
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 bg-[#0a1428] hover:bg-[#0f1d3a] border border-slate-700/80 hover:border-cyan-500/40 transition-all cursor-pointer"
                >
                  Discover Africanvaris
                </button>
                <button
                  onClick={() => onOpenPartnership('General Strategic Partnership')}
                  className="px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors cursor-pointer"
                >
                  Partner With Us →
                </button>
              </div>

              {/* Trust Invariant Strip */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-xs">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                    11
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Active Innovations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                    10-Stage
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Audit Pipeline</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400 tabular-nums">
                    Zero-Trust
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">IP Protection</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Carrier */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-cyan-950/40 aspect-[4/3] group">
                <img
                  src="/src/assets/images/hero_african_tech_innovation_1794300519695.jpg"
                  alt="Africanvaris Technology Innovation Institute & Research Center"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-[#070d1a]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#091122]/90 backdrop-blur-md border border-slate-700/80">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-semibold">Africanvaris R&D Enclave</span>
                    <span className="text-slate-400 text-[10px]">Pioneering African Science</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Transforming bold scientific research into patented, high-impact industrial technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0a1329] via-[#070e1e] to-[#050a16] border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
              Institutional Mandate
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Africanvaris Technology is an African technology and science innovation company.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We focus on developing intelligent solutions through artificial intelligence, engineering,
              scientific research, digital technologies, and technological innovation. The company aims
              to solve real-world challenges in Africa and worldwide through rigorous research, creativity,
              and engineering excellence.
            </p>
            <div className="pt-4 flex items-center gap-4 text-xs font-medium text-cyan-400">
              <button
                onClick={() => onNavigate('about')}
                className="hover:underline flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                Read our Vision, Mission & Core Values →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED INNOVATIONS (Flagship Portfolio Highlights) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
              Active Innovation Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Engineered for Impact. Governed by Science.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('innovations')}
            className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            View All 11 Innovations ({innovations.length}) →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredInnovations.map((inv) => (
            <div
              key={inv.id}
              onClick={() => onSelectInnovation(inv)}
              className="group p-6 rounded-2xl bg-[#091122] hover:bg-[#0c162e] border border-slate-800 hover:border-cyan-500/40 shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded">
                    {inv.uniqueCode}
                  </span>
                  <StageBadge stage={inv.developmentStage} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {inv.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">{inv.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {inv.problem}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <span>{inv.category}</span>
                  <span>·</span>
                  <span className="font-mono">{inv.techStack[0]}</span>
                </div>
                <span className="font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Full Technical Profile →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SCIENTIFIC PILLARS (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
            Research Disciplines
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Core Scientific & Engineering Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#081020] border border-slate-800/80 hover:border-slate-700 space-y-3"
            >
              <div className="font-mono text-xs font-semibold text-cyan-400">0{idx + 1}.</div>
              <h3 className="text-base font-bold text-white leading-snug">{pil.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{pil.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RESEARCH HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
              Scientific Publications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Latest Research & Whitepapers
            </h2>
          </div>
          <button
            onClick={() => onNavigate('research')}
            className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-200 transition-colors"
          >
            All Papers →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topResearch.map((res) => (
            <div
              key={res.id}
              onClick={() => onNavigate('research')}
              className="p-6 rounded-2xl bg-[#070e1c] border border-slate-800 hover:border-cyan-500/30 transition-all cursor-pointer space-y-4"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-cyan-400">{res.publicationStatus}</span>
                <span>{res.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug hover:text-cyan-300 transition-colors">
                {res.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {res.abstract}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{res.category}</span>
                <span>{res.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PARTNERSHIPS CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0b1733] via-[#091228] to-[#070d1a] border border-cyan-500/30 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Institutional Collaboration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Partner With Africanvaris Technology
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We collaborate with venture investors, universities, agricultural ministries, engineering
              contractors, and technology leaders to co-develop, validate, and commercialize intellectual
              property.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenPartnership('General Institutional Collaboration')}
                className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg cursor-pointer"
              >
                Submit Partnership Enquiry
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 bg-[#070d1a] hover:bg-slate-800 border border-slate-700 cursor-pointer"
              >
                Official Contact Channel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
