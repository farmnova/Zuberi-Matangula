import React from 'react';
import { Innovation } from '../types';

interface TechnicalDiagramProps {
  type: Innovation['technicalDiagramType'];
  title: string;
}

export const TechnicalDiagram: React.FC<TechnicalDiagramProps> = ({ type, title }) => {
  return (
    <div className="w-full bg-[#060c18] rounded-xl border border-slate-800 p-5 overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
            System Architecture Schematic
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400 font-mono text-[11px]">{title}</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
          Africanvaris R&D Patent Architecture
        </span>
      </div>

      <div className="relative w-full aspect-[21/9] min-h-[220px] max-h-[340px] flex items-center justify-center">
        {type === 'agriculture_iot' && (
          <svg viewBox="0 0 800 280" className="w-full h-full text-slate-300">
            {/* Grid background lines */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="800" height="280" fill="url(#grid)" />

            {/* Block 1: Field Sensing Nodes */}
            <g transform="translate(40, 70)">
              <rect width="130" height="130" rx="8" fill="#0b1730" stroke="#0284c7" strokeWidth="1.5" />
              <text x="65" y="32" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Field IoT Nodes</text>
              <text x="65" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Soil Moisture (FDR)</text>
              <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Micro-Weather Probes</text>
              <text x="65" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Solar Harvest Unit</text>
              <circle cx="65" cy="115" r="4" fill="#38bdf8" />
            </g>

            {/* Connection: LoRa Mesh */}
            <path d="M 170 135 L 240 135" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
            <text x="205" y="125" textAnchor="middle" fill="#0284c7" fontSize="8" fontFamily="monospace">LoRaWAN Mesh</text>

            {/* Block 2: Multi-Modal Fusion Engine */}
            <g transform="translate(240, 50)">
              <rect width="160" height="170" rx="8" fill="#0e1d3d" stroke="#2563eb" strokeWidth="1.5" />
              <text x="80" y="28" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="bold">Agro-Data Fusion</text>
              <text x="80" y="50" textAnchor="middle" fill="#cbd5e1" fontSize="9">Sentinel-2 Satellite NDVI</text>
              <text x="80" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="9">Grazing Corridor Geofence</text>
              <text x="80" y="90" textAnchor="middle" fill="#cbd5e1" fontSize="9">Soil Depletion Index</text>
              <line x1="20" y1="105" x2="140" y2="105" stroke="#1e293b" />
              <text x="80" y="125" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="600">Yield Risk Predictor</text>
              <text x="80" y="145" textAnchor="middle" fill="#22c55e" fontSize="9">Pastoralist Warning API</text>
            </g>

            {/* Arrow to Escrow & Cloud */}
            <path d="M 400 135 L 470 135" stroke="#2563eb" strokeWidth="2" />
            <polygon points="470,135 460,130 460,140" fill="#2563eb" />

            {/* Block 3: Smart Escrow & Contracts */}
            <g transform="translate(470, 70)">
              <rect width="130" height="130" rx="8" fill="#0b1730" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="65" y="32" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Escrow Ledger</text>
              <text x="65" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Milestone Verification</text>
              <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Agro-Capital Payouts</text>
              <text x="65" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Tamper-Proof Audit</text>
              <circle cx="65" cy="115" r="4" fill="#06b6d4" />
            </g>

            {/* Arrow to Stakeholders */}
            <path d="M 600 135 L 660 135" stroke="#06b6d4" strokeWidth="2" />
            <polygon points="660,135 650,130 650,140" fill="#06b6d4" />

            {/* Block 4: Cooperative & Investor UI */}
            <g transform="translate(660, 80)">
              <rect width="105" height="110" rx="8" fill="#131e38" stroke="#334155" strokeWidth="1.5" />
              <text x="52" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Portals</text>
              <text x="52" y="52" textAnchor="middle" fill="#38bdf8" fontSize="9">Farmer App</text>
              <text x="52" y="72" textAnchor="middle" fill="#22c55e" fontSize="9">Investor Web</text>
              <text x="52" y="92" textAnchor="middle" fill="#e2e8f0" fontSize="9">SMS Gateways</text>
            </g>
          </svg>
        )}

        {type === 'smart_contracts' && (
          <svg viewBox="0 0 800 280" className="w-full h-full text-slate-300">
            <g transform="translate(40, 75)">
              <rect width="130" height="120" rx="8" fill="#0b1730" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="65" y="35" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Parties Verification</text>
              <text x="65" y="60" textAnchor="middle" fill="#94a3b8" fontSize="9">National ID Check</text>
              <text x="65" y="80" textAnchor="middle" fill="#94a3b8" fontSize="9">Biometric Liveness</text>
              <text x="65" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">Witness GPS Stamp</text>
            </g>
            <path d="M 170 135 L 240 135" stroke="#38bdf8" strokeWidth="2" />
            <g transform="translate(240, 55)">
              <rect width="150" height="160" rx="8" fill="#0e1d3d" stroke="#2563eb" strokeWidth="1.5" />
              <text x="75" y="32" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="bold">Legal Engine</text>
              <text x="75" y="58" textAnchor="middle" fill="#cbd5e1" fontSize="9">Jurisdictional Clauses</text>
              <text x="75" y="78" textAnchor="middle" fill="#cbd5e1" fontSize="9">Installment Milestones</text>
              <text x="75" y="98" textAnchor="middle" fill="#cbd5e1" fontSize="9">Cadastral Boundary Link</text>
              <text x="75" y="125" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Asymmetric ECDSA</text>
              <text x="75" y="145" textAnchor="middle" fill="#22c55e" fontSize="9">RFC 3161 Timestamp</text>
            </g>
            <path d="M 390 135 L 460 135" stroke="#2563eb" strokeWidth="2" />
            <g transform="translate(460, 65)">
              <rect width="140" height="140" rx="8" fill="#0b1730" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="70" y="32" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Financial Escrow</text>
              <text x="70" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Mobile Money Webhooks</text>
              <text x="70" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Bank Transfer Tracing</text>
              <text x="70" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Auto-Reconciliation</text>
              <text x="70" y="115" textAnchor="middle" fill="#22c55e" fontSize="9">Title Release Lock</text>
            </g>
            <path d="M 600 135 L 670 135" stroke="#06b6d4" strokeWidth="2" />
            <g transform="translate(670, 75)">
              <rect width="100" height="120" rx="8" fill="#131e38" stroke="#334155" strokeWidth="1.5" />
              <text x="50" y="32" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Output</text>
              <text x="50" y="55" textAnchor="middle" fill="#38bdf8" fontSize="9">QR Title Deed</text>
              <text x="50" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="9">Audit Vault</text>
              <text x="50" y="95" textAnchor="middle" fill="#22c55e" fontSize="9">Court Ready</text>
            </g>
          </svg>
        )}

        {type === 'video_surveillance' && (
          <svg viewBox="0 0 800 280" className="w-full h-full text-slate-300">
            <g transform="translate(40, 75)">
              <rect width="120" height="120" rx="8" fill="#0b1730" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="60" y="32" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Video Ingest</text>
              <text x="60" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">RTSP Feeds (CCTV)</text>
              <text x="60" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Recorded Footage</text>
              <text x="60" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Cash Counter Feeds</text>
            </g>
            <path d="M 160 135 L 230 135" stroke="#38bdf8" strokeWidth="2" />
            <g transform="translate(230, 50)">
              <rect width="170" height="170" rx="8" fill="#0e1d3d" stroke="#2563eb" strokeWidth="1.5" />
              <text x="85" y="28" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="bold">Neural Processing</text>
              <text x="85" y="52" textAnchor="middle" fill="#cbd5e1" fontSize="9">YOLOv9 Edge TensorRT</text>
              <text x="85" y="72" textAnchor="middle" fill="#cbd5e1" fontSize="9">Banknote Denomination</text>
              <text x="85" y="92" textAnchor="middle" fill="#cbd5e1" fontSize="9">Multi-Object Tracking</text>
              <line x1="20" y1="108" x2="150" y2="108" stroke="#1e293b" />
              <text x="85" y="128" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">SigLIP Video Embedding</text>
              <text x="85" y="148" textAnchor="middle" fill="#22c55e" fontSize="9">Temporal Clip Indexing</text>
            </g>
            <path d="M 400 135 L 470 135" stroke="#2563eb" strokeWidth="2" />
            <g transform="translate(470, 70)">
              <rect width="130" height="130" rx="8" fill="#0b1730" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="65" y="32" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Vector Store</text>
              <text x="65" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Dense Space Search</text>
              <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">HNSW Index</text>
              <text x="65" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Milvus / Qdrant</text>
              <text x="65" y="115" textAnchor="middle" fill="#38bdf8" fontSize="9">Sub-Second Lookup</text>
            </g>
            <path d="M 600 135 L 670 135" stroke="#06b6d4" strokeWidth="2" />
            <g transform="translate(670, 75)">
              <rect width="105" height="120" rx="8" fill="#131e38" stroke="#334155" strokeWidth="1.5" />
              <text x="52" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Investigation</text>
              <text x="52" y="52" textAnchor="middle" fill="#38bdf8" fontSize="9">NL Search</text>
              <text x="52" y="72" textAnchor="middle" fill="#cbd5e1" fontSize="9">Till Audit</text>
              <text x="52" y="92" textAnchor="middle" fill="#22c55e" fontSize="9">Evidence Export</text>
            </g>
          </svg>
        )}

        {type === 'construction_sensor' && (
          <svg viewBox="0 0 800 280" className="w-full h-full text-slate-300">
            <g transform="translate(40, 75)">
              <rect width="130" height="120" rx="8" fill="#0b1730" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="65" y="32" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Hardware Sensor</text>
              <text x="65" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Dual ToF Laser Emitter</text>
              <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">6-Axis Bosch IMU</text>
              <text x="65" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Optical Line Scanner</text>
            </g>
            <path d="M 170 135 L 240 135" stroke="#38bdf8" strokeWidth="2" />
            <g transform="translate(240, 50)">
              <rect width="160" height="170" rx="8" fill="#0e1d3d" stroke="#2563eb" strokeWidth="1.5" />
              <text x="80" y="28" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="bold">ARM Cortex-M7</text>
              <text x="80" y="52" textAnchor="middle" fill="#cbd5e1" fontSize="9">Kalman Filter Fusion</text>
              <text x="80" y="72" textAnchor="middle" fill="#cbd5e1" fontSize="9">Brick Plumbness Math</text>
              <text x="80" y="92" textAnchor="middle" fill="#cbd5e1" fontSize="9">Mortar Joint Thickness</text>
              <line x1="20" y1="108" x2="140" y2="108" stroke="#1e293b" />
              <text x="80" y="128" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">0.05° Angle Accuracy</text>
              <text x="80" y="148" textAnchor="middle" fill="#38bdf8" fontSize="9">Instant Audio-OLED Cues</text>
            </g>
            <path d="M 400 135 L 470 135" stroke="#2563eb" strokeWidth="2" />
            <g transform="translate(470, 70)">
              <rect width="130" height="130" rx="8" fill="#0b1730" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="65" y="32" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Telemetry Sync</text>
              <text x="65" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">BLE 5.2 / Mesh</text>
              <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Site Coordinates</text>
              <text x="65" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Floor Level Tracking</text>
              <text x="65" y="115" textAnchor="middle" fill="#38bdf8" fontSize="9">Cloud Quality Vault</text>
            </g>
            <path d="M 600 135 L 670 135" stroke="#06b6d4" strokeWidth="2" />
            <g transform="translate(670, 75)">
              <rect width="100" height="120" rx="8" fill="#131e38" stroke="#334155" strokeWidth="1.5" />
              <text x="50" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Audits</text>
              <text x="50" y="55" textAnchor="middle" fill="#38bdf8" fontSize="9">Compliance Cert</text>
              <text x="50" y="75" textAnchor="middle" fill="#22c55e" fontSize="9">Zero Collapse</text>
              <text x="50" y="95" textAnchor="middle" fill="#cbd5e1" fontSize="9">Eng Dashboard</text>
            </g>
          </svg>
        )}

        {/* Generic high-tech schematic fallback for other innovations */}
        {!['agriculture_iot', 'smart_contracts', 'video_surveillance', 'construction_sensor'].includes(type) && (
          <svg viewBox="0 0 800 280" className="w-full h-full text-slate-300">
            <g transform="translate(50, 75)">
              <rect width="130" height="120" rx="8" fill="#0b1730" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="65" y="35" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Input Layer</text>
              <text x="65" y="60" textAnchor="middle" fill="#94a3b8" fontSize="9">Raw Data Ingestion</text>
              <text x="65" y="80" textAnchor="middle" fill="#94a3b8" fontSize="9">Sensor / Media Feed</text>
              <text x="65" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">Pre-processing</text>
            </g>
            <path d="M 180 135 L 250 135" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
            <g transform="translate(250, 50)">
              <rect width="170" height="170" rx="8" fill="#0e1d3d" stroke="#2563eb" strokeWidth="1.5" />
              <text x="85" y="30" textAnchor="middle" fill="#60a5fa" fontSize="13" fontWeight="bold">Africanvaris Engine</text>
              <text x="85" y="55" textAnchor="middle" fill="#cbd5e1" fontSize="9">Deep Neural Inference</text>
              <text x="85" y="75" textAnchor="middle" fill="#cbd5e1" fontSize="9">Contextual Knowledge Engine</text>
              <text x="85" y="95" textAnchor="middle" fill="#cbd5e1" fontSize="9">Algorithmic Optimization</text>
              <line x1="20" y1="110" x2="150" y2="110" stroke="#1e293b" />
              <text x="85" y="130" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Proprietary IP Logic</text>
              <text x="85" y="150" textAnchor="middle" fill="#22c55e" fontSize="9">State Consistency Guard</text>
            </g>
            <path d="M 420 135 L 490 135" stroke="#2563eb" strokeWidth="2" />
            <g transform="translate(490, 70)">
              <rect width="130" height="130" rx="8" fill="#0b1730" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="65" y="32" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">Execution Node</text>
              <text x="65" y="55" textAnchor="middle" fill="#94a3b8" fontSize="9">Automated Action</text>
              <text x="65" y="75" textAnchor="middle" fill="#94a3b8" fontSize="9">Verification Pipeline</text>
              <text x="65" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Distributed DB Sync</text>
              <circle cx="65" cy="115" r="4" fill="#06b6d4" />
            </g>
            <path d="M 620 135 L 680 135" stroke="#06b6d4" strokeWidth="2" />
            <g transform="translate(680, 75)">
              <rect width="90" height="120" rx="8" fill="#131e38" stroke="#334155" strokeWidth="1.5" />
              <text x="45" y="32" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Outcome</text>
              <text x="45" y="55" textAnchor="middle" fill="#38bdf8" fontSize="9">User Portal</text>
              <text x="45" y="75" textAnchor="middle" fill="#22c55e" fontSize="9">Verified Impact</text>
              <text x="45" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">Audit Vault</text>
            </g>
          </svg>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Data Bus
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Neural / Hardware Processing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified Execution
          </span>
        </div>
        <span className="font-mono text-slate-500">Confidentiality Protected · Africanvaris Core</span>
      </div>
    </div>
  );
};
