import React from 'react';
import { NavSection } from '../components/Navbar';

interface AboutViewProps {
  onNavigate: (section: NavSection) => void;
  onOpenPartnership: (interest?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenPartnership }) => {
  const coreValues = [
    {
      title: 'Innovation',
      desc: 'Pursuing novel, original thinking to create unprecedented solutions rather than replicating legacy systems.'
    },
    {
      title: 'Scientific Excellence',
      desc: 'Anchoring every engineering architecture in rigorous empirical data, mathematical models, and verifiable testing.'
    },
    {
      title: 'Integrity',
      desc: 'Enforcing zero-trust intellectual property protection, honest development stage accounting, and transparent reporting.'
    },
    {
      title: 'Creativity',
      desc: 'Synthesizing diverse multidisciplinary fields—from African textile geometries to satellite NDVI physics—to discover breakthrough solutions.'
    },
    {
      title: 'Collaboration',
      desc: 'Building institutional bridges between researchers, farmers, builders, legal scholars, and global investment syndicates.'
    },
    {
      title: 'Sustainability',
      desc: 'Designing resource-efficient hardware, ultra-low power edge sensors, and circular technology economies.'
    },
    {
      title: 'Global Impact',
      desc: 'Engineering solutions tailored specifically for African operating realities that possess transformative worldwide application.'
    }
  ];

  const objectives = [
    'Develop original technological innovations across AI, hardware, and digital systems.',
    'Research emerging technologies and their practical socio-economic applications.',
    'Transform theoretical concepts into tested prototypes and commercially viable products.',
    'Connect African inventors, engineers, and researchers with strategic capital and institutions.',
    'Promote African scientific and technological development on the global stage.',
    'Commercialize and protect intellectual property through recognized international patent frameworks.',
    'Create scalable technological solutions with worldwide commercial and social impact.'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Company Profile · Africanvaris Technology</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Smarter Africa. Global Innovation.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Africanvaris Technology is an African technology and science innovation company focused on
          developing intelligent solutions through artificial intelligence, engineering, scientific
          research, digital technologies, and technological innovation.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0c1836] to-[#070e1c] border border-cyan-500/40 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Our Vision
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            To become a globally recognized African technology and science innovation company.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Establishing Africa as a premier epicenter of frontier scientific research, original hardware
            inventions, and world-class artificial intelligence ecosystems.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0a1630] to-[#060c18] border border-blue-500/40 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            Our Mission
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            To develop intelligent, practical and transformative technological solutions through research, creativity and engineering.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Bridging fundamental scientific theory and immediate economic needs, delivering scalable technologies
            that protect human lives, formalize commerce, and build generational prosperity.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-xl bg-[#081122] border border-slate-800 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">{val.title}</span>
                <span className="text-xs font-mono text-cyan-400">0{idx + 1}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Objectives */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#070e1c] border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400">
            Strategic Roadmap
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Institutional Objectives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#091326] border border-slate-800/80 text-xs text-slate-300 leading-relaxed"
            >
              <span className="font-mono text-cyan-400 font-bold shrink-0">{i + 1}.</span>
              <span>{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Research Philosophy & Commitment to Africa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#081224] border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white">Our Research Philosophy</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            At Africanvaris Technology, innovation does not happen in isolated ivory towers. We embrace
            ground-truth engineering: our engineers walk agricultural fields alongside farmers, test
            acoustic diagnostics on bustling street repair kiosks, and calibrate laser metrology in the
            heat and dust of active construction scaffolds.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            By coupling deep empirical field research with world-class computational mathematics, we ensure
            that every technology we patent solves authentic structural bottlenecks with unmatched durability.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#081224] border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white">Commitment to African Development</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            African scientific and technological self-reliance is the cornerstone of sustainable prosperity.
            We are dedicated to building sovereign digital infrastructures, protecting African intellectual
            property, and proving to the world that the next generation of transformative technological
            breakthroughs is being authored here.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenPartnership('Institutional Research Collaboration')}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer"
            >
              Collaborate With Africanvaris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
