import React from 'react';
import { NavSection } from '../components/Navbar';

interface TechnologyViewProps {
  onNavigate: (section: NavSection) => void;
  onOpenPartnership: (interest?: string) => void;
}

export const TechnologyView: React.FC<TechnologyViewProps> = ({ onNavigate, onOpenPartnership }) => {
  const techCategories = [
    {
      title: 'Multimodal Edge Artificial Intelligence',
      badge: 'Neural Systems',
      desc: 'Optimized transformer architectures and quantized neural networks running locally on low-power ARM microcontrollers and embedded Linux gateways without cloud latency.',
      specs: ['TensorRT & ONNX Runtime', 'Vision-Language SigLIP Embeddings', 'Low-power 8-bit Integer Quantization', 'Sub-15ms edge inference']
    },
    {
      title: 'Precision Metrology & Laser Telemetry',
      badge: 'Hardware Engineering',
      desc: 'Dual Time-of-Flight (ToF) laser rangefinders paired with 6-axis Bosch MEMS inertial measurement units providing real-time construction quality verification under harsh direct sunlight.',
      specs: ['0.05° Angular Inclinometer Accuracy', 'IP65 Dust & Shockproof Shells', 'Kalman Filter Sensor Fusion', 'BLE 5.2 Mesh Sync']
    },
    {
      title: 'Agro-Satellite Telemetry & LoRaWAN',
      badge: 'Agronomic IoT',
      desc: 'Ground-to-space integration combining solar-powered soil matric capacitance probes with Sentinel-2 multi-spectral NDVI orbital passes to predict crop yields and monitor grazing corridors.',
      specs: ['14km Non-Line-of-Sight Range', 'Solar-harvesting ESP32/STM32 Nodes', 'Sentinel-2 10m Multi-Spectral Indices', 'Autonomous Conflict Geofencing']
    },
    {
      title: 'Decentralized Cryptography & Legal Proofs',
      badge: 'Legal Jurisprudence',
      desc: 'Asymmetric elliptic curve cryptography (ECDSA) and RFC 3161 cryptographic timestamping engineered to create unforgeable property deeds and milestone escrow settlements.',
      specs: ['SHA-256 Merkle Audit Trees', 'Biometric GPS-Stamped Witnessing', 'Mobile Money USSD Webhooks', 'Court-Admissible Legal Packaging']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Africanvaris Scientific & Engineering Stack</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technology & Science Stack
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          The proprietary hardware architectures, neural perception algorithms, and cryptographic
          foundations powering Africanvaris Technology innovations.
        </p>
      </div>

      {/* Tech Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techCategories.map((tech) => (
          <div
            key={tech.title}
            className="p-8 rounded-2xl bg-[#081122] border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-semibold">{tech.badge}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">{tech.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tech.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-[10px] font-mono uppercase text-slate-500">
                Key Engineering Parameters:
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {tech.specs.map((sp, i) => (
                  <div key={i} className="flex items-center gap-1.5 truncate">
                    <span className="text-cyan-400">▹</span>
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lab Infrastructure Callout */}
      <div className="p-8 rounded-2xl bg-[#060c18] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Have a Hardware or AI Engineering Query?</h3>
          <p className="text-xs text-slate-400 mt-1">
            Connect with our system architects regarding joint development and technical specifications.
          </p>
        </div>
        <button
          onClick={() => onOpenPartnership('Engineering & Technology Synergy')}
          className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap"
        >
          Contact Engineering Team
        </button>
      </div>
    </div>
  );
};
