/**
 * Initial Innovation Portfolio Records for Africanvaris Technology
 *
 * NOTE: As per specifications, these are initial innovation records documenting
 * active research, prototypes, designs, and development stages. They are not
 * claims of commercially completed or universally deployed products.
 */

import { Innovation } from '../types';

export const INITIAL_INNOVATIONS: Innovation[] = [
  {
    id: 'farm-17',
    uniqueCode: 'AV-AGRI-017',
    title: 'FARM 17',
    subtitle: 'Smart Agriculture & Investment Platform',
    category: 'Smart Agriculture',
    registrationDate: '2025-01-15',
    problem:
      'African agricultural ecosystems face severe financing gaps, lack of reliable crop health telemetry, unstructured farmer-investor agreements, and recurring spatial conflicts between crop farmers and migratory pastoralist livestock keepers over grazing corridors.',
    backgroundResearch:
      'Over 60% of Sub-Saharan Africa relies on agriculture, yet over 78% of smallholder farmers lack credit histories or verifiable yield records. Traditional boundary markers trigger territorial disputes with nomadic herdsmen, leading to crop destruction and community unrest.',
    solution:
      'An integrated hardware-software ecosystem combining IoT soil and meteorological micro-stations, GPS-enabled digital pastoralist grazing corridor fences, verifiable micro-investment escrow contracts, and automated crop yield prediction models.',
    howItWorks:
      'Solar-powered ground probes monitor soil moisture and nutrient depletion while edge gateways transmit telemetry via LoRaWAN and cellular networks. Satellite imagery is cross-analyzed with geo-fenced grazing zones that send automated SMS / ultrasonic deterrent alerts when herds encroach cultivated boundaries. Investors finance verified farming units through milestone-based escrow contracts.',
    technicalDescription:
      'Distributed agro-sensing network integrated with edge compute micro-nodes (ESP32/STM32 architecture), multi-spectral NDVI satellite index synthesis, and a micro-contract ledger orchestrating automated payout milestones tied to verified soil and satellite NDVI maturity thresholds.',
    mainFeatures: [
      'Digital Agro-Escrow Investment Engine with transparent milestone payouts',
      'Satellite NDVI and Soil Moisture Sensor Fusion for continuous yield tracking',
      'Dynamic Pastoralist Grazing Corridor Geofencing with early conflict warning alerts',
      'Offline-capable Mobile Farm Ledger for agronomic record keeping',
      'Integrated Weather Micro-forecasting and Pest Outbreak Risk Modelling'
    ],
    techStack: [
      'LoRaWAN Mesh',
      'Edge IoT (ESP32/STM32)',
      'Sentinel-2 Satellite Telemetry',
      'Python GeoPandas',
      'React & Tailwind',
      'FastAPI Microservices',
      'PostgreSQL / PostGIS'
    ],
    potentialApplications: [
      'Commercial smallholder cooperative investment syndicates',
      'Regional agricultural ministries managing livestock-farmer buffer zones',
      'Micro-insurance providers issuing parametric drought insurance',
      'Outgrower export contract monitoring'
    ],
    expectedEconomicImpact:
      'Enables up to 35% reduction in post-sowing crop loss and unlocks previously unreachable diaspora micro-capital directly into verified farming clusters with verifiable 18-24% agricultural yield gains.',
    expectedSocialImpact:
      'Substantially mitigates deadly communal clashes between nomadic pastoralists and sedentary farming communities by establishing shared digital boundary transparency and peaceful grazing corridors.',
    commercialOpportunities:
      'B2B SaaS subscription for agricultural cooperatives, transaction fee on escrow investments, and hardware sales of solar LoRaWAN micro-stations to commercial agro-enterprises.',
    intellectualPropertyStatus: 'Patent Pending (ARIPO / PCT Filing Drafted)',
    developmentStage: 'Prototype',
    stageProgress: 52,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'Agricultural Research Institutes for crop-specific sensor calibration',
      'Rural Telecommunication Providers for subsidized LoRa gateway coverage',
      'Agricultural Development Banks & Impact Investment Funds'
    ],
    technicalDiagramType: 'agriculture_iot',
    documents: [
      {
        name: 'AV-AGRI-017_System_Architecture_Whitepaper.pdf',
        type: 'Technical Specification',
        size: '3.4 MB',
        confidentiality: 'PUBLIC'
      },
      {
        name: 'Grazing_Conflict_Mitigation_Field_Trial_Results.pdf',
        type: 'Research Report',
        size: '2.1 MB',
        confidentiality: 'RESTRICTED'
      }
    ],
    progressHistory: [
      {
        date: '2025-01-15',
        stage: 'Idea / Concept',
        note: 'Initial conceptualization following agro-pastoralist conflict field studies in East Africa.',
        author: 'Lead AgriTech Engineer'
      },
      {
        date: '2025-05-20',
        stage: 'Research',
        note: 'Completed sensor feasibility tests and satellite NDVI resolution threshold benchmarking.',
        author: 'Research Team'
      },
      {
        date: '2025-10-12',
        stage: 'Design',
        note: 'Finalized schematic design for solar LoRaWAN micro-stations and grazing corridor geo-hash logic.',
        author: 'Hardware & Systems Lead'
      },
      {
        date: '2026-03-01',
        stage: 'Prototype',
        note: 'Fabricated 15 prototype field sensor units for closed cooperative pilot testing.',
        author: 'Chief Innovation Officer'
      }
    ],
    isFeatured: true
  },
  {
    id: 'blackloya',
    uniqueCode: 'AV-LEGL-002',
    title: 'BLACKLOYA',
    subtitle: 'Digital Contracts & Property Transaction Management',
    category: 'Legal Tech & FinTech',
    registrationDate: '2024-11-04',
    problem:
      'Property transactions across African emerging markets are plagued by double-selling of real estate titles, fraudulent paper deeds, non-transparent installment payments, informal witness disputes, and prohibitive legal fees.',
    backgroundResearch:
      'Over 70% of land in African urban peripheries is transacted under customary or semi-formal paper agreements. Missing digital audit trails and lost handwritten witness signatures result in multi-year court litigations and loss of life savings.',
    solution:
      'A legally fortified digital contract management system engineered for property sales, installment agreements, biometric digital signatures, multi-party verified witnesses, payment escrow tracking, and tamper-evident cryptographic contract sealing.',
    howItWorks:
      'Buyer, seller, and certified witnesses verify identities using national ID and biometric verification. The platform generates legally binding, jurisdictional contract templates with custom installment schedules. Each milestone payment is cryptographically signed, linked to banking/mobile money receipts, and sealed onto an immutable audit record.',
    technicalDescription:
      'Cryptographic contract engine utilizing SHA-256 state hashing, RFC 3161 digital timestamping, asymmetric key signatures (ECDSA), and automated payment reconciliation pipelines connected to national property registries.',
    mainFeatures: [
      'Multi-Party Biometric & Digital Signature Execution',
      'Installment Schedule Engine with automated payment escrow milestones',
      'Independent Witness Verification Protocol with geolocation stamps',
      'Tamper-Evident SHA-256 Audit Trail and QR Title Verification Sheet',
      'Dispute Resolution Archival with immutable transaction timelines'
    ],
    techStack: [
      'TypeScript / React',
      'Node.js & Express',
      'PostgreSQL',
      'WebCrypto / Asymmetric ECDSA',
      'Mobile Money APIs',
      'Tailwind CSS'
    ],
    potentialApplications: [
      'Residential real estate parcel sales and land allocations',
      'Automotive and machinery hire-purchase agreements',
      'Commercial tenancy lease agreements with staggered deposits',
      'Municipal land board decentralized documentation'
    ],
    expectedEconomicImpact:
      'Protects property buyers from multi-million dollar double-allocation scams, shortens real estate closing timelines from 60 days to under 48 hours, and enables secure installment commerce.',
    expectedSocialImpact:
      'Democratizes access to formal legal protection for low-and-middle-income families purchasing family plots, preventing land grab evictions and family inheritance disputes.',
    commercialOpportunities:
      'Transaction processing fee (0.5% - 1.5% per completed property conveyance), monthly enterprise subscriptions for law firms, and licensing to real estate developers.',
    intellectualPropertyStatus: 'Trade Secret & Copyright Registered',
    developmentStage: 'Testing',
    stageProgress: 65,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'National Bar Associations and Law Societies for regulatory compliance endorsement',
      'Licensed Surveyors and Valuation Boards for cadastral data integration',
      'Commercial Banks offering mortgage and title financing'
    ],
    technicalDiagramType: 'smart_contracts',
    documents: [
      {
        name: 'BLACKLOYA_Legal_Compliance_Architecture.pdf',
        type: 'Legal Whitepaper',
        size: '1.8 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-11-04',
        stage: 'Idea / Concept',
        note: 'Conceived after reviewing hundreds of land dispute litigation case studies.',
        author: 'Lead Legal Tech Strategist'
      },
      {
        date: '2025-03-18',
        stage: 'Research',
        note: 'Completed comparative legal analysis of digital evidence admissibility acts.',
        author: 'Legal Counsel & Tech Team'
      },
      {
        date: '2025-08-30',
        stage: 'Development',
        note: 'Engineered multi-party signature cryptographic handshake and mobile money webhooks.',
        author: 'Full Stack Team'
      },
      {
        date: '2026-02-14',
        stage: 'Testing',
        note: 'Initiated simulated multi-party property conveyance tests with 20 practicing conveyancers.',
        author: 'Quality Assurance Lead'
      }
    ],
    isFeatured: true
  },
  {
    id: 'tuitor-ai',
    uniqueCode: 'AV-EDTC-003',
    title: 'TUITOR AI',
    subtitle: 'Artificial Intelligence Education Platform',
    category: 'Artificial Intelligence & EdTech',
    registrationDate: '2024-09-12',
    problem:
      'Severe teacher shortages, overcrowded classrooms (often 60+ pupils per teacher), lack of personalized learning pathways, and language barriers that leave students struggling with complex STEM concepts taught only in non-native languages.',
    backgroundResearch:
      'Educational cognitive studies prove students absorb core scientific principles 3x faster when explained in their mother tongue with contextual cultural metaphors before translating into formal academic terminology.',
    solution:
      'An intelligent pedagogical tutoring engine trained on national curricula (primary through university levels) delivering personalized, interactive conversational lessons with vernacular multilingual explanations and adaptive mastery evaluation.',
    howItWorks:
      'Students interact via audio, text, or photographed textbook exercises. The AI assesses the student’s conceptual baseline, breaks down complex topics step-by-step, switches smoothly between vernacular languages (e.g. Swahili, Hausa, Yoruba, Amharic) and English/French, and generates personalized practice quizzes.',
    technicalDescription:
      'Transformer-based conversational pedagogical engine with retrieval-augmented generation (RAG) over verified national syllabi, low-latency multilingual speech-to-speech synthesis, and Bayesian Knowledge Tracing (BKT) to dynamically calibrate curriculum difficulty.',
    mainFeatures: [
      'Multilingual Vernacular STEM Explanations with dialect adaptation',
      'Camera-Based Math & Science Homework Problem Diagnosis',
      'Adaptive Bayesian Knowledge Tracing adjusting to individual student pace',
      'Ultra-Low Bandwidth Audio Compression for 2G/3G mobile connectivity',
      'Teacher Analytics Portal highlighting specific classroom comprehension bottlenecks'
    ],
    techStack: [
      'Transformers / Neural LLMs',
      'PyTorch / ONNX Runtime',
      'Retrieval Augmented Generation (RAG)',
      'WebRTC & Low-bitrate Opus Audio',
      'React Native & Web Client',
      'Vector Databases (Qdrant)'
    ],
    potentialApplications: [
      'Self-paced home tutoring for primary and secondary school pupils',
      'Supplementary remedial tutoring in overcrowded public school computer labs',
      'Vocational training and technical exam preparation',
      'University level calculus, physics, and programming assistance'
    ],
    expectedEconomicImpact:
      'Brings private tutoring costs down by over 90%, enabling millions of low-income families to access top-tier pedagogical guidance previously reserved for elite private school attendees.',
    expectedSocialImpact:
      'Reduces regional dropout rates in secondary STEM education, boosts female student retention in science subjects, and bridges the educational divide between rural and urban schools.',
    commercialOpportunities:
      'Freemium student subscriptions (micro-daily bundles), enterprise school institutional licensing, and Ministry of Education sponsored national deployment contracts.',
    intellectualPropertyStatus: 'Patent Pending (Algorithmic Pedagogy & Speech Engine)',
    developmentStage: 'Prototype',
    stageProgress: 48,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'Ministries of Education for national curriculum syllabus alignment',
      'Telecom operators for zero-rated educational data access',
      'UNESCO and International EdTech Philanthropies'
    ],
    technicalDiagramType: 'education_ai',
    documents: [
      {
        name: 'TUITOR_AI_Pedagogical_Framework.pdf',
        type: 'Research Whitepaper',
        size: '2.7 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-09-12',
        stage: 'Idea / Concept',
        note: 'Project inception aimed at democratizing elite one-on-one tutoring across Africa.',
        author: 'EdTech Initiative Director'
      },
      {
        date: '2025-02-10',
        stage: 'Research',
        note: 'Benchmarked multilingual translation fidelity for secondary physics in Swahili and French.',
        author: 'NLP Research Fellow'
      },
      {
        date: '2025-09-04',
        stage: 'Development',
        note: 'Integrated national syllabus RAG pipeline and fine-tuned STEM pedagogical reasoning model.',
        author: 'AI Engineering Lead'
      },
      {
        date: '2026-01-20',
        stage: 'Prototype',
        note: 'Deployed prototype web app to 120 high school pilot students across 3 secondary schools.',
        author: 'Lead System Architect'
      }
    ],
    isFeatured: true
  },
  {
    id: 'smartfix-ai',
    uniqueCode: 'AV-DIAG-004',
    title: 'SMARTFIX AI',
    subtitle: 'AI-Based Phone Diagnostics & Repair Guidance',
    category: 'Hardware & Diagnostics',
    registrationDate: '2024-10-25',
    problem:
      'Millions of smartphones in emerging economies are discarded prematurely or ruined by unqualified technicians who lack sophisticated oscilloscopes, diagnostic tools, and authentic component schematics.',
    backgroundResearch:
      'Over 85% of mobile hardware repairs in informal markets rely on trial-and-error heating and reflowing, frequently damaging healthy motherboards and creating millions of tons of hazardous electronic waste.',
    solution:
      'An intelligent hardware-software diagnostic suite that turns any browser or test handset into a precision diagnostic station, identifying motherboard short circuits, battery degradation, audio transducer failures, sensor malfunctions, and display IC anomalies.',
    howItWorks:
      'The handset executes a sequence of automated hardware stress vectors: speaker sweep acoustic echo analysis, battery thermal discharge curve sampling, multi-touch capacitive latency sweeps, and accelerometer jitter tests. A computer vision module scans disassembled motherboard photos to detect cracked solder joints and burned MOSFETs.',
    technicalDescription:
      'Hybrid client-edge diagnostic agent utilizing Web Audio API acoustic sweep reflectometry, power curve impedance profiling, and a lightweight YOLO-v8 vision model trained on 40,000+ mobile motherboard schematics and thermal images.',
    mainFeatures: [
      'Acoustic Mic & Speaker Frequency Response Defect Identification',
      'Battery Internal Impedance and Thermal Runaway Health Evaluation',
      'Motherboard PCB Solder Joint & IC Fracture Optical Inspection',
      'Automated Hardware Component Verification against Manufacturer Serial Specs',
      'Step-by-Step Interactive Repair Guidance with Component Replacement Sourcing'
    ],
    techStack: [
      'Web Audio API & DSP',
      'Computer Vision (YOLOv8 Edge)',
      'TensorFlow Lite Web',
      'Hardware Sensor APIs',
      'Tailwind CSS & WebAssembly'
    ],
    potentialApplications: [
      'Informal repair shops and street technician kiosks',
      'Second-hand smartphone refurbishment and warranty grading centers',
      'Consumer pre-purchase diagnostic verification when buying used devices',
      'Insurance risk evaluation before mobile device policy activation'
    ],
    expectedEconomicImpact:
      'Empowers tens of thousands of micro-technicians to double their repair success rate, saves consumers hundreds of millions of dollars in unnecessary phone replacements, and formalizes the second-hand electronics economy.',
    expectedSocialImpact:
      'Significantly curtails hazardous e-waste in urban landfills, promotes the circular electronics economy, and provides technical skills training for young informal technicians.',
    commercialOpportunities:
      'Technician professional subscription tier ($10/month), per-test certificate generation fee for used device marketplaces, and OEM diagnostic integration licenses.',
    intellectualPropertyStatus: 'Trade Secret (Acoustic & Thermal Curve Algorithms)',
    developmentStage: 'Development',
    stageProgress: 42,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'Refurbished Device Marketplaces and e-Commerce Retailers',
      'Vocational Training Colleges for electronics repair curriculum',
      'Circular Economy and Environmental E-Waste Non-Profits'
    ],
    technicalDiagramType: 'diagnostics_hardware',
    documents: [
      {
        name: 'SMARTFIX_AI_Diagnostic_Acoustic_Paper.pdf',
        type: 'Research Article',
        size: '3.1 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-10-25',
        stage: 'Idea / Concept',
        note: 'Project initiated after surveying 50 mobile repair kiosks in urban repair centers.',
        author: 'Hardware Innovation Lead'
      },
      {
        date: '2025-04-11',
        stage: 'Research',
        note: 'Collected and labeled 8,000 thermal and optical images of smartphone PCB faults.',
        author: 'Computer Vision Engineer'
      },
      {
        date: '2025-11-09',
        stage: 'Development',
        note: 'Engineered Web Audio acoustic diagnostic sweep algorithms and battery impedance profiler.',
        author: 'Signal Processing Lead'
      }
    ],
    isFeatured: false
  },
  {
    id: 'ai-cctv-analysis',
    uniqueCode: 'AV-SECR-005',
    title: 'AI CCTV ANALYSIS',
    subtitle: 'Intelligent Video Surveillance & Natural-Language Investigation',
    category: 'Computer Vision & Security',
    registrationDate: '2024-12-01',
    problem:
      'Security teams, police investigators, and commercial premises are overwhelmed by petabytes of unwatched CCTV video. Finding an incident takes days of tedious manual scrubbing, while real-time threats and cash register tampering go unnoticed.',
    backgroundResearch:
      'Traditional security setups in commercial centers record 24/7 video that is only reviewed after an incident has occurred. Investigators spend an average of 14 hours searching footage to trace a single suspect vehicle or missing parcel.',
    solution:
      'A next-generation computer vision surveillance and forensic investigation platform that ingests live CCTV streams or recorded files, detects anomalous events, tracks objects and people, recognizes physical banknote values at cash counters, and allows investigators to search footage using natural language ("Show red delivery motorcycle that entered rear gate between 3 PM and 4 PM").',
    howItWorks:
      'Video frames pass through a multi-stage neural perception pipeline: optical flow background subtraction, object detection/tracking (DeepSORT), person re-identification, banknote denomination recognition (optical OCR and UV pattern verification), and dense multimodal video clip indexing.',
    technicalDescription:
      'Edge-accelerated video analytics pipeline utilizing TensorRT-optimized YOLO models, visual-language embeddings (CLIP/SigLIP) for natural-language temporal video retrieval, and high-throughput vector similarity search.',
    mainFeatures: [
      'Natural-Language Semantic Video Search across thousands of camera hours',
      'Automated Banknote Denomination Identification at retail and bank cash points',
      'Real-Time Multi-Object Counting (vehicles, foot traffic, freight containers)',
      'Perimeter Intrusion & Anomalous Loitering Detection with instant push alerts',
      'Privacy-First Face and License Plate Redaction for public compliance'
    ],
    techStack: [
      'CUDA / TensorRT',
      'YOLOv9 & ByteTrack',
      'Multimodal Embeddings (SigLIP)',
      'FastAPI & WebSockets',
      'Milvus / Qdrant Vector DB',
      'React & Tailwind CSS'
    ],
    potentialApplications: [
      'Municipal public safety and traffic flow optimization',
      'Commercial banks and forex bureaus monitoring teller cash transactions',
      'Port and warehouse logistics monitoring cargo container movement',
      'Private security command centers managing commercial real estate'
    ],
    expectedEconomicImpact:
      'Cuts video forensic investigation times by 95% (from days to minutes) and drastically minimizes retail till shrinkage and cash-handling pilferage in financial institutions.',
    expectedSocialImpact:
      'Accelerates search for missing persons and hit-and-run vehicles while safeguarding individual civil liberties through automated selective masking of unrelated bystanders.',
    commercialOpportunities:
      'Enterprise SaaS license per camera feed, turnkey appliance boxes for edge installation, and specialized forensic investigation software licenses for law enforcement agencies.',
    intellectualPropertyStatus: 'Patent Pending (Natural-Language Forensic Search Engine)',
    developmentStage: 'Prototype',
    stageProgress: 56,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'Commercial Security Firms and Armed Response Providers',
      'Port and Customs Authorities for automated cargo monitoring',
      'Banking Institutions for automated cash-teller audit trials'
    ],
    technicalDiagramType: 'video_surveillance',
    documents: [
      {
        name: 'AV-SECR-005_Semantic_Video_Search_Benchmark.pdf',
        type: 'Technical Benchmark',
        size: '4.2 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-12-01',
        stage: 'Idea / Concept',
        note: 'Project initiated to address forensic backlog in video incident investigation.',
        author: 'Computer Vision Lead'
      },
      {
        date: '2025-05-14',
        stage: 'Research',
        note: 'Trained and benchmarked currency recognition model on African regional banknotes.',
        author: 'Deep Learning Fellow'
      },
      {
        date: '2025-10-30',
        stage: 'Design',
        note: 'Architected distributed video streaming edge pipeline and vector indexing store.',
        author: 'Systems Architect'
      },
      {
        date: '2026-02-18',
        stage: 'Prototype',
        note: 'Deployed working 8-camera live natural-language search demo in security lab.',
        author: 'Chief Innovation Officer'
      }
    ],
    isFeatured: true
  },
  {
    id: 'smart-tailoring',
    uniqueCode: 'AV-DSGN-006',
    title: 'SMART TAILORING',
    subtitle: 'AI-Based Clothing Design, Drape & Personalization',
    category: 'Fashion & Design Tech',
    registrationDate: '2025-02-10',
    problem:
      'African bespoke fashion and tailoring is a multi-billion dollar cultural industry, yet it is bogged down by manual tape measurements, frequent tailoring errors requiring multiple fitting sessions, fabric waste, and difficulty visualizing custom Ankara/Kitenge prints on 3D human body types.',
    backgroundResearch:
      'Tailors report that over 30% of completed bespoke outfits require major adjustments or recuts due to inaccurate measurement interpretation or unexpected pattern alignment on African print textiles, causing client dissatisfaction and lost revenue.',
    solution:
      'An intelligent tailoring design system that converts two smartphone photos of a client into a high-precision 3D body avatar with 32 anatomical measurement points, applies digital fabric swatches with accurate cloth drape physics, generates automated sewing patterns, and simulates finished bespoke garments.',
    howItWorks:
      'The client or tailor captures a front and side photo with a standard mobile camera. Computer vision algorithms estimate 3D human pose and body morphology, calculating neck, chest, waist, inseam, and shoulder dimensions to millimetric tolerance. Users select or photograph custom fabrics (e.g. Kitenge, Kente, Linen), and the neural physics simulator visualizes the drape and pattern placement before generating printable PDF/DXF sewing pattern templates.',
    technicalDescription:
      'Monocular 3D body mesh reconstruction (SMPL-X neural mesh fitting), non-linear cloth drape physics simulation using WebGL, and parametric 2D garment pattern generation utilizing bezier curve spline flattening.',
    mainFeatures: [
      'Two-Photo 3D Anatomical Body Scan generating 32 precision measurements',
      'Real-Time Fabric Drape & Pattern Alignment Simulation for African textiles',
      'Automated 2D Sewing Pattern Cutting Template Generation (PDF/DXF)',
      'Client Wardrobe Style Recommendation Engine based on morphology',
      'Virtual Fitting Room for remote international diaspora clients'
    ],
    techStack: [
      'Three.js / WebGL',
      'SMPL-X Mesh Algorithms',
      'OpenCV & MediaPipe',
      'Python Flask API',
      'React & Tailwind CSS',
      'Vector PDF Pattern Generator'
    ],
    potentialApplications: [
      'Independent boutique fashion designers and neighbourhood tailoring studios',
      'E-commerce bespoke apparel brands catering to international diaspora customers',
      'Uniform manufacturing companies (schools, hospitals, security firms)',
      'Fashion design schools and vocational institutes'
    ],
    expectedEconomicImpact:
      'Reduces garment remakes and fabric waste by 75%, allowing local fashion designers to confidently sell custom-tailored apparel to high-value diaspora clients worldwide without physical fittings.',
    expectedSocialImpact:
      'Preserves and celebrates indigenous textile arts and craftsmanship while providing modern digital tools that elevate traditional tailoring into a high-earning digital business.',
    commercialOpportunities:
      'Subscription model for tailoring shops ($15-$40/month), per-pattern generation micropayments, and enterprise licensing to uniform manufacturers.',
    intellectualPropertyStatus: 'Trade Secret (3D Mesh to Pattern Flattening Algorithm)',
    developmentStage: 'Design',
    stageProgress: 35,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'Fashion Design Councils and National Textile Manufacturers',
      'African Fashion Week Organizers and Designer Collectives',
      'Diaspora e-Commerce Logistics and Delivery Platforms'
    ],
    technicalDiagramType: 'clothing_3d',
    documents: [
      {
        name: 'SMART_TAILORING_3D_Mesh_Accuracy_Report.pdf',
        type: 'Research Report',
        size: '2.5 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2025-02-10',
        stage: 'Idea / Concept',
        note: 'Conceptualized to empower traditional African tailors with precision digital sizing.',
        author: 'Design Tech Strategist'
      },
      {
        date: '2025-07-22',
        stage: 'Research',
        note: 'Completed validation of 3D body estimation against traditional physical tailor measurements.',
        author: 'Computer Vision Team'
      },
      {
        date: '2025-12-15',
        stage: 'Design',
        note: 'Completed 3D avatar viewport UI and parametric pattern flattening pipeline specs.',
        author: 'Lead UI/UX & Graphics Engineer'
      }
    ],
    isFeatured: false
  },
  {
    id: 'government-ai-system',
    uniqueCode: 'AV-GOVT-007',
    title: 'GOVERNMENT AI SYSTEM',
    subtitle: 'Intelligent Public Administration & Service Delivery Platform',
    category: 'Digital Governance',
    registrationDate: '2024-08-19',
    problem:
      'Public sector institutions face severe administrative backlogs, bureaucratic silos, opaque citizen service tracking, manual paper processing of permits and licenses, and slow response times that foster frustration and inefficiency.',
    backgroundResearch:
      'Citizens often travel hours to government offices only to find missing requirements, while civil servants spend up to 65% of their working hours manually sorting, routing, and checking paper files that could be verified instantaneously.',
    solution:
      'An enterprise institutional governance platform providing conversational citizen public service navigation, automated document prerequisite verification, cross-departmental workflow orchestration, and real-time public service delivery performance monitoring.',
    howItWorks:
      'Citizens access public services via a clean web or WhatsApp conversational interface in their local language, receiving exact requirements, pre-submitting verified documents, and tracking ticket progress in real-time. Civil service officers receive automated validation queues that flag inconsistencies, dispatch approvals, and aggregate department throughput metrics onto an executive dashboard.',
    technicalDescription:
      'Sovereign on-premises / government-cloud workflow engine with semantic document understanding (BERT/LayoutLM), role-based audit-logged task routing, national citizen identity registry connectors, and real-time SLA breach alerting.',
    mainFeatures: [
      'Conversational Citizen Public Service Guide (Multilingual / WhatsApp / Web)',
      'Automated Permit & Application Prerequisite Document Pre-screening',
      'Inter-Ministerial Workflow Routing & Encrypted Administrative Handshake',
      'Executive KPI & SLA Performance Dashboard for Ministry Leadership',
      'Immutable Public Service Audit Trail preventing undocumented bureaucratic bottlenecks'
    ],
    techStack: [
      'Enterprise TypeScript & Next.js/React',
      'PostgreSQL with Row-Level Security',
      'LayoutLM Document Parser',
      'Docker / Kubernetes (Sovereign Cloud)',
      'Kafka Event Streaming',
      'Tailwind CSS'
    ],
    potentialApplications: [
      'Municipal council licensing, building permits, and business registrations',
      'Ministry of Lands title deed verification and transfer tracking',
      'Public health facility patient queue triage and administrative tracking',
      'Civil registration (birth, marriage, death certificate issuance)'
    ],
    expectedEconomicImpact:
      'Eliminates hundreds of thousands of citizen travel hours, shortens commercial permit issuance from 4 weeks to 48 hours, and significantly elevates the Ease of Doing Business index.',
    expectedSocialImpact:
      'Brings radical transparency, accountability, and equal access to public services for all citizens regardless of social status or geographical distance from administrative capitals.',
    commercialOpportunities:
      'Government software procurement and annual sovereign maintenance contracts, bilateral development bank funded governance digitization programs.',
    intellectualPropertyStatus: 'Proprietary Software Architecture',
    developmentStage: 'Research',
    stageProgress: 28,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'National E-Government Authorities and Digital Ministries',
      'Public Administration Institutes and Civil Service Academies',
      'United Nations Development Programme (UNDP) Digital Governance Initiatives'
    ],
    technicalDiagramType: 'gov_infrastructure',
    documents: [
      {
        name: 'GovAI_Sovereign_Architecture_Whitepaper.pdf',
        type: 'Governance Brief',
        size: '3.8 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-08-19',
        stage: 'Idea / Concept',
        note: 'Formulated after municipal service delivery efficiency review.',
        author: 'Public Sector Innovation Advisor'
      },
      {
        date: '2025-03-05',
        stage: 'Research',
        note: 'Completed institutional workflow mapping across 8 key public services.',
        author: 'Governance Research Group'
      }
    ],
    isFeatured: false
  },
  {
    id: 'ai-laboratory',
    uniqueCode: 'AV-LABS-008',
    title: 'AI LABORATORY',
    subtitle: 'AI-Assisted Scientific Experiments & Virtual Learning',
    category: 'Scientific Research & Labs',
    registrationDate: '2025-01-08',
    problem:
      'More than 80% of secondary schools and universities across Africa lack functional science laboratories, essential chemical reagents, optical microscopes, and safety equipment, leaving millions of science students learning physics, chemistry, and biology purely as abstract rote memorization.',
    backgroundResearch:
      'Without hands-on laboratory experimentation, secondary school students score 40% lower on regional scientific examinations, and few proceed into engineering and physical science university degrees due to lack of practical familiarity.',
    solution:
      'An interactive, physics-accurate virtual laboratory platform powered by generative AI and scientific numerical solvers that simulates chemical reactions, electrical circuits, fluid dynamics, and cellular biology experiments in an engaging web browser environment without requiring costly hardware or dangerous chemicals.',
    howItWorks:
      'Students and researchers manipulate beakers, titration burettes, microscopes, and oscilloscope probes in an interactive 3D virtual workspace. Real-time mathematical solvers simulate chemical stoichiometry, thermodynamics, gas pressures, and reaction kinetics with authentic visual and audio feedback. An AI Lab Assistant guides learners through hypotheses, safety warnings, and experimental analysis.',
    technicalDescription:
      'WebGL-driven scientific canvas coupled with WebAssembly-compiled ODE (Ordinary Differential Equation) numerical chemical kinetics and electromagnetism solvers, combined with a pedagogical AI conversational tutor that evaluates experimental methodology.',
    mainFeatures: [
      'Thermodynamically Accurate Chemical Reaction Simulator (Reagents, pH, Precipitates)',
      'Virtual Optical & Electron Microscope Simulation with high-res cellular models',
      'Interactive Circuit & Electromagnetic Wave Virtual Breadboard',
      'AI Laboratory Safety Assistant answering "What happens if I mix X and Y?"',
      'Self-Grading Practical Lab Examination Modules with experimental log export'
    ],
    techStack: [
      'WebGL / Three.js',
      'WebAssembly (Rust ODE Solvers)',
      'Canvas API & GLSL Shaders',
      'TypeScript & React',
      'MathJax / KaTeX for Formulas',
      'Tailwind CSS'
    ],
    potentialApplications: [
      'Secondary schools lacking physical chemistry and biology labs',
      'Undergraduate engineering and physics virtual lab assignments',
      'Teacher training colleges demonstrating experimental safety procedures',
      'Curious independent learners and scientific hobbyists'
    ],
    expectedEconomicImpact:
      'Saves school boards tens of thousands of dollars per school in recurring chemical consumables and glass breakage, while scaling lab access from 30 students to 30,000 students overnight.',
    expectedSocialImpact:
      'Ignites scientific curiosity and practical STEM skills in underserved rural schools, producing a confident new generation of African doctors, chemists, and aerospace engineers.',
    commercialOpportunities:
      'Institutional school annual seat license ($2 per student/year), ministry-wide national STEM curriculum software package, and university research simulation modules.',
    intellectualPropertyStatus: 'Patent Pending (Real-Time Virtual Stoichiometry Engine)',
    developmentStage: 'Prototype',
    stageProgress: 45,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'National Examinations Councils and Secondary Education Boards',
      'University Science Faculties (Chemistry, Physics, Biology)',
      'International Science Education Foundations'
    ],
    technicalDiagramType: 'virtual_lab',
    documents: [
      {
        name: 'AI_Laboratory_Thermodynamic_Engine_Specs.pdf',
        type: 'Scientific Specification',
        size: '4.0 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2025-01-08',
        stage: 'Idea / Concept',
        note: 'Project launched to solve science lab deprivation across rural schools.',
        author: 'Chief Scientific Officer'
      },
      {
        date: '2025-06-19',
        stage: 'Research',
        note: 'Completed validation of 120 standard secondary chemistry experiments against chemical equilibrium equations.',
        author: 'Scientific Computing Team'
      },
      {
        date: '2025-11-28',
        stage: 'Design',
        note: 'Designed 3D interactive glassware interface and kinetic simulation shaders.',
        author: 'Graphics & Simulation Lead'
      },
      {
        date: '2026-02-05',
        stage: 'Prototype',
        note: 'Built functional prototype featuring titration, circuit assembly, and cell division modules.',
        author: 'Lead System Architect'
      }
    ],
    isFeatured: true
  },
  {
    id: 'smart-construction-device',
    uniqueCode: 'AV-ENGR-009',
    title: 'SMART CONSTRUCTION MONITORING DEVICE',
    subtitle: 'Engineering & Construction Quality Monitoring Hardware',
    category: 'Engineering & Construction',
    registrationDate: '2024-10-10',
    problem:
      'Building collapses, wall cracks, leaning masonry columns, and structural deficiencies cause tragic casualties and catastrophic financial losses across developing urban centers due to poor bricklaying alignment, uneven foundation settling, and lack of real-time site inspection tools.',
    backgroundResearch:
      'Investigations into urban structural failures reveal that over 68% of fatal building collapses trace back to substandard masonry plumbness, inaccurate right-angle joints, and mortar thickness inconsistencies that go unmeasured during construction.',
    solution:
      'A handheld and tripod-mountable intelligent hardware device combining multi-axis LiDAR, dual-axis digital inclinometers, and computer vision that projects laser leveling lines, measures brick-by-brick plumbness and mortar joint thickness in real-time, and flags structural misalignment before mortar cures.',
    howItWorks:
      'The device is positioned facing an active masonry wall or column. Its micro-LiDAR sweeps the plane while an integrated high-precision optical sensor analyzes courses of bricks. An onboard OLED display and audio feedback provide instant green/red leveling indicators ("Course 7 leaning 4mm forward; adjust left header"). All measurement sessions sync wirelessly to an engineer’s cloud dashboard for building inspection compliance certificates.',
    technicalDescription:
      'Embedded hardware unit featuring dual Time-of-Flight (ToF) laser rangefinders, Bosch MEMS 6-axis IMU with 0.05° precision, onboard Cortex-M7 microcontroller, Bluetooth Low Energy (BLE), and edge vision defect classification firmware.',
    mainFeatures: [
      'Multi-Axis Laser Plumbness & Right-Angle Optical Alignment Guide',
      'Real-Time Mortar Joint Thickness & Horizontal Course Leveling Sensor',
      'Ruggedized IP65 Shockproof & Dustproof Enclosure for harsh construction sites',
      'Instant Onboard Audio-Visual Correction Guidance for on-site bricklayers',
      'Automated Quality Compliance Certificate Generation for structural engineers'
    ],
    techStack: [
      'ARM Cortex-M7 Firmware (C/C++)',
      'Bosch MEMS IMU Sensor Fusion',
      'ToF Laser Distance Telemetry',
      'Bluetooth LE (BLE 5.2)',
      'React & Tailwind Web Dashboard',
      'FreeRTOS Embedded OS'
    ],
    potentialApplications: [
      'Commercial high-rise and residential masonry construction sites',
      'Civil engineering structural inspection and building audits',
      'Prefabricated building component assembly verification',
      'Technical vocational training for apprentice masons and builders'
    ],
    expectedEconomicImpact:
      'Prevents costly wall tear-downs and structural retrofits, saving building contractors an average of 12-18% in total rework costs while eliminating the catastrophic risk of structural failure.',
    expectedSocialImpact:
      'Protects innocent human lives from devastating building collapses, raises the professional standard of local construction craftsmanship, and restores public confidence in urban infrastructure.',
    commercialOpportunities:
      'Hardware unit sales ($320 - $550 per device), site inspector rental packages, and SaaS subscription for construction firms managing multi-site structural quality metrics.',
    intellectualPropertyStatus: 'Patent Pending (Optical Construction Plumbness Device)',
    developmentStage: 'Prototype',
    stageProgress: 50,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'National Engineers Registration Boards and Contractors Associations',
      'Cement and Building Materials Manufacturers for co-branded distribution',
      'Civil Engineering Faculties and Polytechnic Institutions'
    ],
    technicalDiagramType: 'construction_sensor',
    documents: [
      {
        name: 'SMART_CONSTRUCTION_Hardware_Schematic_Overview.pdf',
        type: 'Hardware Specification',
        size: '3.6 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-10-10',
        stage: 'Idea / Concept',
        note: 'Originated after tragic local building collapse inquiry highlighted preventable masonry plumb defects.',
        author: 'Lead Mechatronics Engineer'
      },
      {
        date: '2025-02-14',
        stage: 'Research',
        note: 'Tested MEMS inclinometer drift and laser optical triangulation in direct sunlight conditions.',
        author: 'Hardware R&D Team'
      },
      {
        date: '2025-08-20',
        stage: 'Design',
        note: 'Completed mechanical CAD casing and PCB circuitry routing for IP65 dust-sealed prototype.',
        author: 'Industrial Designer'
      },
      {
        date: '2026-01-15',
        stage: 'Prototype',
        note: 'Completed 5 functional hardware units deployed across 3 active residential construction test sites.',
        author: 'Chief Innovation Officer'
      }
    ],
    isFeatured: true
  },
  {
    id: 'ai-qr-paper-scanner',
    uniqueCode: 'AV-SCAN-010',
    title: 'AI QR PAPER SCANNER',
    subtitle: 'Intelligent Document Scanning & Examination Paper Management',
    category: 'Computer Vision & Security',
    registrationDate: '2024-11-20',
    problem:
      'National examination boards, universities, and administrative registries struggle with manual paper exam grading, lost student scripts, examination leaks, counterfeit student certificates, and weeks of tedious data entry that delay results by months.',
    backgroundResearch:
      'Examination grading in developing nations relies on vulnerable physical paper transit across hundreds of kilometers. Missing scripts, altered marks during transit, and grading fatigue compromise the integrity of high-stakes academic credentials.',
    solution:
      'A high-speed intelligent document digitization system that generates unique encrypted cryptographic QR anchor codes for every examination booklet, uses computer vision to deskew and digitize handwritten responses, detects candidate identity tampering, enables automated optical rubric grading, and records immutable ownership chain-of-custody.',
    howItWorks:
      'Exam papers are pre-printed with cryptographic micro-QR codes embedding encrypted student registration keys and question metadata. After completion, exam sheets are bulk scanned via mobile phones or flatbeds. The AI automatically deskews pages, masks candidate personal details for blind unbiased grading, transcribes handwritten answers using handwriting OCR, and tracks every physical sheet’s chain-of-custody.',
    technicalDescription:
      'Computer vision document geometry correction (homography transforms), cryptographic QR authentication with ECC signatures, transformer-based handwritten text recognition (HTR), and zero-knowledge student identity masking.',
    mainFeatures: [
      'Encrypted Micro-QR Candidate Anonymization for double-blind exam marking',
      'High-Speed Mobile & Bulk Document Scanner with auto-corner deskewing',
      'Handwritten Script Recognition & Automated Scoring for structured questions',
      'Cryptographic Paper Chain-of-Custody Audit Trail from exam hall to grading center',
      'Digital Examination Certificate Verification Portal with anti-counterfeiting seals'
    ],
    techStack: [
      'OpenCV & Python',
      'Transformer HTR (Handwriting OCR)',
      'QR Code Cryptographic ECC',
      'PostgreSQL',
      'React & Tailwind CSS',
      'FastAPI & PDF Processing'
    ],
    potentialApplications: [
      'National primary and secondary examination councils',
      'Universities and polytechnics conducting high-enrollment semester exams',
      'Professional certification bodies (accounting, nursing, law boards)',
      'Government registries digitizing archival historical records'
    ],
    expectedEconomicImpact:
      'Reduces national examination grading expenditure by up to 60%, shortens publication of exam results from 3 months to 7 days, and eliminates paper transport vulnerability.',
    expectedSocialImpact:
      'Guarantees fair, unbiased academic evaluation for all students, prevents examination tampering, and restores public trust in educational credentialing.',
    commercialOpportunities:
      'Per-candidate script processing fee ($0.20 - $0.50/exam), enterprise software deployment for national examination bodies, and document digitization contracts for archives.',
    intellectualPropertyStatus: 'Patent Pending (Cryptographic Physical-Digital Paper Audit System)',
    developmentStage: 'Testing',
    stageProgress: 60,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'National Examinations Councils and Ministries of Basic Education',
      'Higher Education Accreditation Agencies and Universities',
      'Security Printing Companies producing official examination stationery'
    ],
    technicalDiagramType: 'qr_paper_scanner',
    documents: [
      {
        name: 'AI_QR_Paper_Scanner_Security_Protocol.pdf',
        type: 'Security Specification',
        size: '2.8 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2024-11-20',
        stage: 'Idea / Concept',
        note: 'Project initiated after national exam scandal highlighted vulnerabilities in physical script transit.',
        author: 'Information Security Lead'
      },
      {
        date: '2025-04-02',
        stage: 'Research',
        note: 'Achieved 99.4% OCR accuracy on cursive handwritten numerals and short essays.',
        author: 'Machine Learning Fellow'
      },
      {
        date: '2025-09-18',
        stage: 'Development',
        note: 'Engineered automatic page deskewing and homographic perspective correction algorithms.',
        author: 'Vision Engineer'
      },
      {
        date: '2026-02-10',
        stage: 'Testing',
        note: 'Simulated 5,000 mock exam script scans with a regional secondary school.',
        author: 'QA & Operations Lead'
      }
    ],
    isFeatured: false
  },
  {
    id: 'ai-shop-accounting',
    uniqueCode: 'AV-FIN-011',
    title: 'AI SHOP ACCOUNTING',
    subtitle: 'Automated Retail Sales & Financial Monitoring',
    category: 'Legal Tech & FinTech',
    registrationDate: '2025-01-20',
    problem:
      'Small and medium retail shops, supermarkets, and wholesale kiosks suffer from severe inventory shrinkage, unrecorded cash sales, employee theft, and lack of accurate daily profit accounting due to tedious manual ledger entry.',
    backgroundResearch:
      'Retail kiosk studies across African cities reveal that over 75% of shop owners cannot calculate their exact weekly net profit or inventory stock levels, and inventory shrinkage drains between 8% to 22% of total shop revenues annually.',
    solution:
      'An intelligent retail visual accounting system that utilizes affordable existing shop cameras or a smartphone to automatically recognize products taken from shelves, monitor checkout register transactions, verify incoming cash and mobile money payments, and generate automated real-time financial profit/loss statements.',
    howItWorks:
      'An overhead camera or point-of-sale webcam monitors the transaction counter. The computer vision model recognizes retail items placed on the counter, calculates the itemized total based on the store catalog, logs whether payment was completed in cash or mobile money, reconciles this against the physical till drawer, and sends a daily financial summary to the shop owner’s phone.',
    technicalDescription:
      'Real-time edge visual item recognition (MobileNet/YOLO), automated cash register till open/close optical detection, integration with mobile money payment webhooks, and double-entry automated bookkeeping algorithms.',
    mainFeatures: [
      'Visual Product Recognition at checkout without tedious barcode scanning',
      'Automated Cash & Mobile Money Payment Reconciliation against drawer opens',
      'Real-Time Daily Profit & Loss, Revenue, and Margin Reporting',
      'Stock Depletion & Low-Inventory Reorder Alerts with supplier price comparison',
      'Anti-Shrinkage Tamper Alert when merchandise leaves counter unrecorded'
    ],
    techStack: [
      'YOLOv8 Edge Optimization',
      'Python & OpenCV',
      'React & Tailwind CSS',
      'SQLite / PostgreSQL',
      'Mobile Money USSD/Webhooks',
      'WebSockets'
    ],
    potentialApplications: [
      'Neighborhood retail kiosks (Duka / Spaza / Kiosks)',
      'Independent supermarkets and wholesale distribution depots',
      'Hardware and building supply stores',
      'Pharmacies and cosmetics retail outlets'
    ],
    expectedEconomicImpact:
      'Eliminates up to 80% of retail inventory shrinkage, provides small shop owners with credit-ready financial statements to qualify for formal bank loans, and saves 2 hours of daily manual stock-taking.',
    expectedSocialImpact:
      'Empowers small family-owned businesses to survive and scale profitably, building intergenerational wealth and formalizing urban neighborhood retail commerce.',
    commercialOpportunities:
      'Monthly SaaS subscription ($8 - $25/month depending on store size), hardware bundle sales (starter camera kits), and merchant micro-financing partnerships.',
    intellectualPropertyStatus: 'Trade Secret (Counter Top Optical Product Recognition)',
    developmentStage: 'Design',
    stageProgress: 38,
    confidentialityLevel: 'PUBLIC',
    partnershipOpportunities: [
      'Retail Trade Associations and Chambers of Commerce',
      'FMCG Distributors and Beverage Manufacturers (Unilever, Coca-Cola distributor networks)',
      'FinTechs and Micro-Finance Banks providing working capital loans'
    ],
    technicalDiagramType: 'retail_accounting',
    documents: [
      {
        name: 'AI_Shop_Accounting_Field_Pilot_Report.pdf',
        type: 'Market Feasibility Study',
        size: '1.9 MB',
        confidentiality: 'PUBLIC'
      }
    ],
    progressHistory: [
      {
        date: '2025-01-20',
        stage: 'Idea / Concept',
        note: 'Project conceived after extensive interviews with 40 retail shop owners.',
        author: 'FinTech Innovation Strategist'
      },
      {
        date: '2025-06-30',
        stage: 'Research',
        note: 'Collected and trained visual classification on 1,500 popular regional retail consumer packaged goods.',
        author: 'CV Research Engineer'
      },
      {
        date: '2025-12-05',
        stage: 'Design',
        note: 'Completed UI design for low-literacy shopkeeper dashboard and mobile money sync flow.',
        author: 'Lead UX Designer'
      }
    ],
    isFeatured: false
  }
];
