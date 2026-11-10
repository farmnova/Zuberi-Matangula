/**
 * Africanvaris Technology - Data Types & Interfaces
 * Smarter Africa. Global Innovation.
 */

export type InnovationStage =
  | 'Idea / Concept'
  | 'Research'
  | 'Design'
  | 'Development'
  | 'Prototype'
  | 'Testing'
  | 'MVP'
  | 'Pilot Implementation'
  | 'Commercialization'
  | 'Launched';

export type VisibilityLevel = 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'ARCHIVED';

export type InnovationCategory =
  | 'Smart Agriculture'
  | 'Legal Tech & FinTech'
  | 'Artificial Intelligence & EdTech'
  | 'Hardware & Diagnostics'
  | 'Computer Vision & Security'
  | 'Fashion & Design Tech'
  | 'Digital Governance'
  | 'Scientific Research & Labs'
  | 'Engineering & Construction';

export interface ProgressMilestone {
  date: string;
  stage: InnovationStage;
  note: string;
  author: string;
}

export interface TechnicalDocument {
  name: string;
  type: string;
  size: string;
  confidentiality: VisibilityLevel;
}

export interface Innovation {
  id: string;
  uniqueCode: string; // e.g. "AV-AGRI-017"
  title: string;
  subtitle: string;
  category: InnovationCategory;
  registrationDate: string;
  problem: string;
  backgroundResearch: string;
  solution: string;
  howItWorks: string;
  technicalDescription: string;
  mainFeatures: string[];
  techStack: string[];
  potentialApplications: string[];
  expectedEconomicImpact: string;
  expectedSocialImpact: string;
  commercialOpportunities: string;
  intellectualPropertyStatus: string; // e.g. "Patent Pending (ARIPO / PCT)", "Proprietary Trade Secret"
  developmentStage: InnovationStage;
  stageProgress: number; // 0-100 percentage
  confidentialityLevel: VisibilityLevel;
  partnershipOpportunities: string[];
  technicalDiagramType:
    | 'agriculture_iot'
    | 'smart_contracts'
    | 'education_ai'
    | 'diagnostics_hardware'
    | 'video_surveillance'
    | 'clothing_3d'
    | 'gov_infrastructure'
    | 'virtual_lab'
    | 'construction_sensor'
    | 'qr_paper_scanner'
    | 'retail_accounting';
  imagePath?: string;
  documents?: TechnicalDocument[];
  progressHistory: ProgressMilestone[];
  isFeatured?: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  category: string;
  abstract: string;
  authors: string[];
  date: string;
  publicationStatus: 'Peer-Reviewed' | 'Whitepaper' | 'Technical Preprint' | 'Internal Research';
  methodology: string;
  keyFindings: string[];
  isApproved: boolean;
  readTime: string;
}

export interface Publication {
  id: string;
  title: string;
  category: 'Company Announcement' | 'Technology Insight' | 'Scientific Advance' | 'Industry Report';
  date: string;
  author: string;
  excerpt: string;
  content: string;
  readTime: string;
  isArchived: boolean;
}

export interface PartnershipEnquiry {
  id: string;
  date: string;
  name: string;
  organization: string;
  email: string;
  country: string;
  partnershipType:
    | 'Investor'
    | 'Research Institution'
    | 'University'
    | 'Technology Company'
    | 'Government Institution'
    | 'Development Organization'
    | 'Engineering Partner'
    | 'Innovation Collaborator';
  innovationInterest: string;
  message: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Partnered';
  notes?: string;
}

export interface ContactMessage {
  id: string;
  date: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'Unread' | 'Replied';
}

export interface AdminUser {
  email: string;
  name: string;
  role: 'Chief Innovation Officer' | 'Lead System Architect' | 'IP & Research Director';
  isAuthenticated: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  password?: string;
  organization: string;
  role: string;
  country: string;
  clearanceLevel: 'RESTRICTED_ACCESS' | 'STANDARD' | 'ADMIN';
  createdAt: string;
  savedInnovations?: string[];
  ndaSigned: boolean;
  approvedForRestricted: boolean;
}

export interface WebsiteSettings {
  companyName: string;
  slogan: string;
  officialEmail: string;
  whatsappLink: string;
  enablePublicSubmissions: boolean;
  maintenanceMode: boolean;
  lastUpdated: string;
}

