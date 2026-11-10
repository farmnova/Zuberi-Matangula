/**
 * Africanvaris Technology - Supplementary Data
 * Research Papers, Publications, Categories, and Company Profiles
 */

import { InnovationCategory, InnovationStage, Publication, ResearchPaper, WebsiteSettings } from '../types';

export const INNOVATION_CATEGORIES: InnovationCategory[] = [
  'Smart Agriculture',
  'Legal Tech & FinTech',
  'Artificial Intelligence & EdTech',
  'Hardware & Diagnostics',
  'Computer Vision & Security',
  'Fashion & Design Tech',
  'Digital Governance',
  'Scientific Research & Labs',
  'Engineering & Construction'
];

export const DEVELOPMENT_STAGES: InnovationStage[] = [
  'Idea / Concept',
  'Research',
  'Design',
  'Development',
  'Prototype',
  'Testing',
  'MVP',
  'Pilot Implementation',
  'Commercialization',
  'Launched'
];

export const INITIAL_RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-001',
    title: 'Low-Latency Neural Edge Inference for Autonomous Agronomic Decision Systems in Bandwidth-Constrained Environments',
    category: 'Artificial Intelligence & AgriTech',
    abstract:
      'We propose a quantized dual-stream convolutional architecture capable of real-time NDVI and spectral crop stress classification on sub-$10 microcontrollers. Evaluated across 1,200 hectares of smallholder maize and cassava cultivation, the system achieves 94.2% anomaly detection accuracy while consuming less than 180mW average power.',
    authors: ['Africanvaris R&D Lab', 'AgriTech Intelligence Unit'],
    date: '2025-11-18',
    publicationStatus: 'Peer-Reviewed',
    methodology: 'Empirical sensor validation across multi-spectral satellite imagery and ground-truth soil matric potential probes.',
    keyFindings: [
      'Edge quantization reduces inference power by 82% without degrading classification fidelity',
      'Early blight detected 9.4 days prior to visible human eye manifestation',
      'LoRaWAN mesh packets maintained 99.1% delivery rate across 14km non-line-of-sight terrain'
    ],
    isApproved: true,
    readTime: '8 min read'
  },
  {
    id: 'res-002',
    title: 'Zero-Knowledge Biometric Identity Handshakes for Decentralized Property Conveyance & Customary Land Registries',
    category: 'Legal Tech & Cryptography',
    abstract:
      'This research investigates cryptographic protocols combining asymmetric elliptic curve cryptography (secp256k1) and zero-knowledge proofs to establish legally enforceable land conveyance milestones. By linking digital witness attestations with jurisdictional land registry standards, the protocol resolves conflicting tenure claims without exposing private personal identity data.',
    authors: ['Africanvaris Applied Cryptography Group', 'Legal Engineering Fellows'],
    date: '2025-08-24',
    publicationStatus: 'Whitepaper',
    methodology: 'Formal verification of state transition invariants and cryptographic simulation of fraudulent double-spend attempts.',
    keyFindings: [
      'Eliminated double-allocation attack surface in simulated 10,000 parcel transfer stress tests',
      'Multi-party cryptographic signing latency completed in under 1.2 seconds over 3G cellular connections',
      'Admissible digital audit trail generated complying with the Electronic Transactions Act'
    ],
    isApproved: true,
    readTime: '11 min read'
  },
  {
    id: 'res-003',
    title: 'Multimodal Natural Language Video Retrieval in Uncalibrated Low-Frame-Rate Surveillance Infrastructure',
    category: 'Computer Vision & Security',
    abstract:
      'Commercial CCTV installations across developing urban corridors frequently operate at sub-10 FPS with non-uniform optical illumination. This paper presents a temporal window aggregation technique using vision-language contrastive embeddings optimized for query-driven forensic video parsing and automated cash register transaction auditing.',
    authors: ['Africanvaris Vision Systems Team'],
    date: '2025-06-12',
    publicationStatus: 'Technical Preprint',
    methodology: 'Tested against 4,800 hours of real-world surveillance video across retail, transport terminals, and bank teller counters.',
    keyFindings: [
      'Recall@5 score of 89.7% for natural language queries specifying color, trajectory, and temporal intervals',
      'Banknote denomination classification achieved 98.6% precision at checkout counters',
      '12x reduction in forensic investigator review times compared to standard scrub methods'
    ],
    isApproved: true,
    readTime: '9 min read'
  },
  {
    id: 'res-004',
    title: 'In-Situ Optical and MEMS Sensor Fusion for Real-Time Masonry Plumbness & Structural Integrity Verification',
    category: 'Engineering & Construction',
    abstract:
      'Structural defects in load-bearing masonry walls stem primarily from cumulative millimeter-scale angle deviances that go undetected during initial bricklaying. We present an embedded dual Time-of-Flight (ToF) and 6-axis MEMS sensor fusion algorithm designed to calculate wall verticality, joint mortar thickness, and horizontal level dynamically as each brick course is laid.',
    authors: ['Mechatronics & Civil Engineering Group'],
    date: '2025-04-05',
    publicationStatus: 'Whitepaper',
    methodology: 'Comparative testing against high-end Leica total stations across 45 active building construction sites.',
    keyFindings: [
      'Measurement accuracy within ±0.8mm over 3-meter vertical wall spans',
      'Ambient sunlight optical filtering provides reliable readings under 85,000 lux illumination',
      'Average reduction in on-site masonry rework of 72% across test cohorts'
    ],
    isApproved: true,
    readTime: '7 min read'
  }
];

export const INITIAL_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-001',
    title: 'Africanvaris Technology Announces New Strategic R&D Priorities in Intelligent Systems and Scientific Innovation',
    category: 'Company Announcement',
    date: '2026-02-15',
    author: 'Africanvaris Executive Office',
    excerpt:
      'Africanvaris Technology outlines its strategic research roadmap focused on transformative artificial intelligence, indigenous hardware engineering, and digital solutions engineered specifically for African challenges and global deployment.',
    content: `Africanvaris Technology was founded on the fundamental conviction that Africa must not merely consume imported technologies, but lead in the research, invention, engineering, and commercialization of original scientific breakthroughs.

Today, the company reaffirms its institutional focus across eight core scientific pillars: Artificial Intelligence, Precision Agriculture, Digital Jurisprudence, Embedded Hardware, Computer Vision, Educational Sciences, Sovereign Governance, and Construction Engineering.

"Our vision is unambiguous: To become a globally recognized African technology and science innovation company," stated the leadership. "By systematically protecting intellectual property, adhering to rigorous engineering standards, and connecting African technological ingenuity with strategic global capital, we are engineering practical solutions that transform lives."

The company invites academic institutions, industrial collaborators, and impact investors to explore co-development and validation partnerships across its emerging innovation portfolio.`,
    readTime: '4 min read',
    isArchived: false
  },
  {
    id: 'pub-002',
    title: 'From Theory to Soil: How Smart Agriculture and Grazing Geofencing Can Safeguard Food Security and Community Harmony',
    category: 'Technology Insight',
    date: '2026-01-20',
    author: 'AgriTech Systems Division',
    excerpt:
      'An in-depth perspective on why hardware-enabled soil intelligence and digital pastoralist corridors represent the future of sustainable African agriculture.',
    content: `Agricultural development in Africa stands at a historic crossroads. While the continent possesses 60% of the world's uncultivated arable land, smallholder farmers face systemic obstacles ranging from erratic rainfall patterns to territorial friction between sedentary crop cultivators and nomadic pastoralist herdsmen.

Traditional approaches have relied on physical trenches or military policing—costly and fragile solutions that rarely survive seasonal migration cycles. 

Through Project FARM 17, Africanvaris Technology is demonstrating how combining satellite NDVI telemetry, low-cost solar LoRaWAN micro-stations, and dynamic digital grazing corridors provides early warning systems that protect crops while respecting pastoralist transit corridors.

By embedding financial escrow mechanisms into this telemetry, farmers can receive upfront capital backed by transparent crop maturity indices, creating a self-reinforcing cycle of rural economic resilience.`,
    readTime: '6 min read',
    isArchived: false
  },
  {
    id: 'pub-003',
    title: 'Preventing Structural Catastrophes: Why Hardware-Level Precision Must Modernize African Construction',
    category: 'Scientific Advance',
    date: '2025-11-30',
    author: 'Engineering & Materials Lab',
    excerpt:
      'Examining how handheld optical and MEMS telemetry devices are establishing a new baseline of construction safety and structural accountability.',
    content: `Urban centers across Africa are experiencing unprecedented building booms. Yet this rapid urbanization is shadowed by tragic structural failures, where multi-story residential and commercial buildings collapse during or shortly after construction.

Forensic engineering investigations consistently reveal that the root cause is rarely defective raw materials alone; rather, it is cumulative human error during bricklaying. A wall that deviates by just 2 degrees from true plumb accumulates structural stress that multiplies with every additional floor added.

Africanvaris Technology’s Smart Construction Monitoring Device bridges the gap between sophisticated laboratory metrology and the rugged realities of the building site. By delivering real-time acoustic and optical guidance to bricklayers on the scaffold, the device prevents errors before the mortar cures—transforming building safety from an after-the-fact inspection into an active, continuous safeguard.`,
    readTime: '5 min read',
    isArchived: false
  }
];

export const INITIAL_WEBSITE_SETTINGS: WebsiteSettings = {
  companyName: 'AFRICANVARIS TECHNOLOGY',
  slogan: 'SMARTER AFRICA. GLOBAL INNOVATION.',
  officialEmail: 'zuberimatangula@gmail.com',
  whatsappLink:
    'https://wa.me/255650362025?text=Hello%20Africanvaris%20Technology.%20I%20would%20like%20to%20learn%20more%20about%20your%20innovations%20and%20technology%20solutions.',
  enablePublicSubmissions: true,
  maintenanceMode: false,
  lastUpdated: '2026-03-01'
};
