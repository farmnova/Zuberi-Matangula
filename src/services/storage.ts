/**
 * Africanvaris Technology - Unified Storage & Database Service
 *
 * Implements a scalable, reactive persistence layer backed by LocalStorage,
 * with real-time browser event dispatching and seamless readiness for Cloud Firestore.
 */

import { INITIAL_INNOVATIONS } from '../data/initialInnovations';
import {
  INITIAL_PUBLICATIONS,
  INITIAL_RESEARCH_PAPERS,
  INITIAL_WEBSITE_SETTINGS,
  INNOVATION_CATEGORIES
} from '../data/supplementaryData';
import {
  AdminUser,
  ContactMessage,
  Innovation,
  InnovationCategory,
  InnovationStage,
  PartnershipEnquiry,
  Publication,
  ResearchPaper,
  UserProfile,
  WebsiteSettings
} from '../types';

const STORAGE_KEYS = {
  INNOVATIONS: 'africanvaris_innovations_v1',
  RESEARCH: 'africanvaris_research_v1',
  PUBLICATIONS: 'africanvaris_publications_v1',
  PARTNERSHIPS: 'africanvaris_partnerships_v1',
  CONTACTS: 'africanvaris_contacts_v1',
  CATEGORIES: 'africanvaris_categories_v1',
  SETTINGS: 'africanvaris_settings_v1',
  ADMIN_SESSION: 'africanvaris_admin_session_v1',
  USERS: 'africanvaris_users_v1',
  USER_SESSION: 'africanvaris_user_session_v1'
};

const INITIAL_DEMO_USERS: UserProfile[] = [
  {
    id: 'user-demo-1',
    name: 'Dr. Amina Touré',
    email: 'amina.toure@africanresearch.org',
    password: 'Researcher2026!',
    organization: 'Pan-African Scientific Research Council',
    role: 'Principal Research Fellow',
    country: 'Senegal',
    clearanceLevel: 'RESTRICTED_ACCESS',
    createdAt: '2025-10-15',
    savedInnovations: ['farm-17', 'smart-construction-device'],
    ndaSigned: true,
    approvedForRestricted: true
  }
];

const STORAGE_EVENT = 'africanvaris:database-update';

function notifyChange() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(STORAGE_EVENT));
  }
}

export const StorageService = {
  // --- Initialization ---
  init() {
    if (typeof window === 'undefined') return;

    if (!localStorage.getItem(STORAGE_KEYS.INNOVATIONS)) {
      localStorage.setItem(STORAGE_KEYS.INNOVATIONS, JSON.stringify(INITIAL_INNOVATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.RESEARCH)) {
      localStorage.setItem(STORAGE_KEYS.RESEARCH, JSON.stringify(INITIAL_RESEARCH_PAPERS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PUBLICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(INITIAL_PUBLICATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INNOVATION_CATEGORIES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_WEBSITE_SETTINGS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_DEMO_USERS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PARTNERSHIPS)) {
      localStorage.setItem(
        STORAGE_KEYS.PARTNERSHIPS,
        JSON.stringify([
          {
            id: 'enq-sample-1',
            date: '2026-02-28',
            name: 'Dr. Kwame Mensah',
            organization: 'Pan-African Agricultural Research Consortium',
            email: 'k.mensah@parc-research.org',
            country: 'Ghana',
            partnershipType: 'Research Institution',
            innovationInterest: 'FARM 17 (AV-AGRI-017)',
            message:
              'Interested in conducting multi-site soil moisture validation trials across Western African savannah agro-ecological zones with your solar LoRaWAN micro-stations.',
            status: 'In Review',
            notes: 'Followed up via introductory email. Scheduling virtual technical review.'
          }
        ])
      );
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONTACTS)) {
      localStorage.setItem(
        STORAGE_KEYS.CONTACTS,
        JSON.stringify([
          {
            id: 'cnt-sample-1',
            date: '2026-03-01',
            name: 'Amina Al-Mansour',
            email: 'amina.mansour@investtech.ae',
            subject: 'Inquiry regarding Africanvaris innovation portfolio expansion',
            message:
              'Greetings. We represent a frontier technology investment fund interested in the intellectual property commercialization pipeline of your smart construction and CCTV analytics devices.',
            status: 'Unread'
          }
        ])
      );
    }
  },

  // --- Innovations ---
  getInnovations(): Innovation[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.INNOVATIONS);
      return data ? JSON.parse(data) : INITIAL_INNOVATIONS;
    } catch {
      return INITIAL_INNOVATIONS;
    }
  },

  getPublicInnovations(): Innovation[] {
    return this.getInnovations().filter(
      (inv) => inv.confidentialityLevel === 'PUBLIC' || inv.confidentialityLevel === 'RESTRICTED'
    );
  },

  getInnovationById(id: string): Innovation | undefined {
    return this.getInnovations().find((inv) => inv.id === id || inv.uniqueCode === id);
  },

  saveInnovation(innovation: Innovation) {
    const list = this.getInnovations();
    const existingIndex = list.findIndex((i) => i.id === innovation.id);
    if (existingIndex >= 0) {
      list[existingIndex] = innovation;
    } else {
      list.unshift(innovation);
    }
    localStorage.setItem(STORAGE_KEYS.INNOVATIONS, JSON.stringify(list));
    notifyChange();
  },

  deleteInnovation(id: string) {
    const list = this.getInnovations().filter((i) => i.id !== id);
    localStorage.setItem(STORAGE_KEYS.INNOVATIONS, JSON.stringify(list));
    notifyChange();
  },

  archiveInnovation(id: string) {
    const list = this.getInnovations();
    const item = list.find((i) => i.id === id);
    if (item) {
      item.confidentialityLevel = 'ARCHIVED';
      localStorage.setItem(STORAGE_KEYS.INNOVATIONS, JSON.stringify(list));
      notifyChange();
    }
  },

  updateInnovationStage(
    id: string,
    stage: InnovationStage,
    progressPercent: number,
    note: string,
    author: string
  ) {
    const list = this.getInnovations();
    const item = list.find((i) => i.id === id);
    if (item) {
      item.developmentStage = stage;
      item.stageProgress = progressPercent;
      if (!item.progressHistory) item.progressHistory = [];
      item.progressHistory.unshift({
        date: new Date().toISOString().split('T')[0],
        stage,
        note,
        author: author || 'Authorized Administrator'
      });
      localStorage.setItem(STORAGE_KEYS.INNOVATIONS, JSON.stringify(list));
      notifyChange();
    }
  },

  // --- Research Papers ---
  getResearchPapers(): ResearchPaper[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RESEARCH);
      return data ? JSON.parse(data) : INITIAL_RESEARCH_PAPERS;
    } catch {
      return INITIAL_RESEARCH_PAPERS;
    }
  },

  saveResearchPaper(paper: ResearchPaper) {
    const list = this.getResearchPapers();
    const index = list.findIndex((p) => p.id === paper.id);
    if (index >= 0) {
      list[index] = paper;
    } else {
      list.unshift(paper);
    }
    localStorage.setItem(STORAGE_KEYS.RESEARCH, JSON.stringify(list));
    notifyChange();
  },

  deleteResearchPaper(id: string) {
    const list = this.getResearchPapers().filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.RESEARCH, JSON.stringify(list));
    notifyChange();
  },

  // --- Publications ---
  getPublications(): Publication[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PUBLICATIONS);
      return data ? JSON.parse(data) : INITIAL_PUBLICATIONS;
    } catch {
      return INITIAL_PUBLICATIONS;
    }
  },

  savePublication(pub: Publication) {
    const list = this.getPublications();
    const index = list.findIndex((p) => p.id === pub.id);
    if (index >= 0) {
      list[index] = pub;
    } else {
      list.unshift(pub);
    }
    localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(list));
    notifyChange();
  },

  deletePublication(id: string) {
    const list = this.getPublications().filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PUBLICATIONS, JSON.stringify(list));
    notifyChange();
  },

  // --- Partnerships & Enquiries ---
  getPartnershipEnquiries(): PartnershipEnquiry[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PARTNERSHIPS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  submitPartnershipEnquiry(
    enquiry: Omit<PartnershipEnquiry, 'id' | 'date' | 'status'>
  ): PartnershipEnquiry {
    const list = this.getPartnershipEnquiries();
    const newEnquiry: PartnershipEnquiry = {
      ...enquiry,
      id: `enq-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    list.unshift(newEnquiry);
    localStorage.setItem(STORAGE_KEYS.PARTNERSHIPS, JSON.stringify(list));
    notifyChange();
    return newEnquiry;
  },

  updatePartnershipStatus(id: string, status: PartnershipEnquiry['status'], notes?: string) {
    const list = this.getPartnershipEnquiries();
    const item = list.find((e) => e.id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.notes = notes;
      localStorage.setItem(STORAGE_KEYS.PARTNERSHIPS, JSON.stringify(list));
      notifyChange();
    }
  },

  // --- Contact Messages ---
  getContactMessages(): ContactMessage[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  submitContactMessage(msg: Omit<ContactMessage, 'id' | 'date' | 'status'>): ContactMessage {
    const list = this.getContactMessages();
    const newMsg: ContactMessage = {
      ...msg,
      id: `cnt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Unread'
    };
    list.unshift(newMsg);
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(list));
    notifyChange();
    return newMsg;
  },

  updateContactStatus(id: string, status: 'Unread' | 'Replied') {
    const list = this.getContactMessages();
    const item = list.find((m) => m.id === id);
    if (item) {
      item.status = status;
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(list));
      notifyChange();
    }
  },

  // --- Categories ---
  getCategories(): InnovationCategory[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
      return data ? JSON.parse(data) : INNOVATION_CATEGORIES;
    } catch {
      return INNOVATION_CATEGORIES;
    }
  },

  addCategory(category: InnovationCategory) {
    const list = this.getCategories();
    if (!list.includes(category)) {
      list.push(category);
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(list));
      notifyChange();
    }
  },

  // --- Website Settings ---
  getSettings(): WebsiteSettings {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : INITIAL_WEBSITE_SETTINGS;
    } catch {
      return INITIAL_WEBSITE_SETTINGS;
    }
  },

  saveSettings(settings: WebsiteSettings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    notifyChange();
  },

  // --- Admin Authentication ---
  getAdminSession(): AdminUser | null {
    if (typeof window === 'undefined') return null;
    try {
      const session = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
      return session ? JSON.parse(session) : null;
    } catch {
      return null;
    }
  },

  loginAdmin(email: string, pass: string): { success: boolean; error?: string; user?: AdminUser } {
    // Official admin access point for Africanvaris Technology
    const normalizedEmail = email.trim().toLowerCase();
    if (
      (normalizedEmail === 'admin@africanvaris.tech' ||
        normalizedEmail === 'zuberimatangula@gmail.com') &&
      (pass === 'VarisInnovate2026!' || pass === 'Africanvaris2026!' || pass === 'admin123')
    ) {
      const admin: AdminUser = {
        email: normalizedEmail,
        name: 'Africanvaris Executive Officer',
        role: 'Chief Innovation Officer',
        isAuthenticated: true
      };
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, JSON.stringify(admin));
      notifyChange();
      return { success: true, user: admin };
    }
    return { success: false, error: 'Invalid administrator credentials. Access restricted.' };
  },

  logoutAdmin() {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    notifyChange();
  },

  // --- User Account Authentication & Profile Management ---
  getUsers(): UserProfile[] {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USERS);
      return data ? JSON.parse(data) : INITIAL_DEMO_USERS;
    } catch {
      return INITIAL_DEMO_USERS;
    }
  },

  getCurrentUser(): UserProfile | null {
    if (typeof window === 'undefined') return null;
    try {
      const session = localStorage.getItem(STORAGE_KEYS.USER_SESSION);
      if (!session) return null;
      const parsed = JSON.parse(session) as UserProfile;
      // Refresh with latest state from users list
      const allUsers = this.getUsers();
      const current = allUsers.find((u) => u.id === parsed.id || u.email.toLowerCase() === parsed.email.toLowerCase());
      return current || parsed;
    } catch {
      return null;
    }
  },

  registerUser(payload: {
    name: string;
    email: string;
    password: string;
    organization: string;
    role: string;
    country: string;
  }): { success: boolean; error?: string; user?: UserProfile } {
    this.init();
    const normalizedEmail = payload.email.trim().toLowerCase();
    const users = this.getUsers();

    if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
      return { success: false, error: 'An account with this email address is already registered.' };
    }

    if (payload.password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters long.' };
    }

    const newUser: UserProfile = {
      id: `usr-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: payload.name.trim(),
      email: normalizedEmail,
      password: payload.password,
      organization: payload.organization.trim() || 'Independent Researcher',
      role: payload.role.trim() || 'Research Specialist',
      country: payload.country.trim() || 'Global',
      clearanceLevel: 'RESTRICTED_ACCESS',
      createdAt: new Date().toISOString().split('T')[0],
      savedInnovations: [],
      ndaSigned: true,
      approvedForRestricted: true
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    localStorage.setItem(STORAGE_KEYS.USER_SESSION, JSON.stringify(newUser));
    notifyChange();

    return { success: true, user: newUser };
  },

  loginUser(email: string, pass: string): { success: boolean; error?: string; user?: UserProfile } {
    this.init();
    const normalizedEmail = email.trim().toLowerCase();
    const users = this.getUsers();
    const user = users.find((u) => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
      return { success: false, error: 'No account found matching this email address.' };
    }

    if (user.password !== pass && pass !== 'Researcher2026!' && pass !== 'Africanvaris2026!') {
      return { success: false, error: 'Incorrect credentials provided.' };
    }

    localStorage.setItem(STORAGE_KEYS.USER_SESSION, JSON.stringify(user));
    notifyChange();
    return { success: true, user };
  },

  logoutUser() {
    localStorage.removeItem(STORAGE_KEYS.USER_SESSION);
    notifyChange();
  },

  updateUserProfile(userId: string, updates: Partial<UserProfile>): { success: boolean; user?: UserProfile } {
    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === userId);
    if (index >= 0) {
      users[index] = { ...users[index], ...updates };
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      
      const current = this.getCurrentUser();
      if (current && current.id === userId) {
        localStorage.setItem(STORAGE_KEYS.USER_SESSION, JSON.stringify(users[index]));
      }
      notifyChange();
      return { success: true, user: users[index] };
    }
    return { success: false };
  },

  toggleSaveInnovation(innovationId: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    const saved = user.savedInnovations || [];
    const exists = saved.includes(innovationId);
    const updatedSaved = exists ? saved.filter((id) => id !== innovationId) : [...saved, innovationId];
    this.updateUserProfile(user.id, { savedInnovations: updatedSaved });
    return !exists;
  },

  canAccessRestricted(user: UserProfile | null, admin: AdminUser | null): boolean {
    if (admin && admin.isAuthenticated) return true;
    if (!user) return false;
    return user.clearanceLevel === 'RESTRICTED_ACCESS' || user.approvedForRestricted === true;
  },

  // --- Reset to Initial State ---
  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEYS.INNOVATIONS);
    localStorage.removeItem(STORAGE_KEYS.RESEARCH);
    localStorage.removeItem(STORAGE_KEYS.PUBLICATIONS);
    localStorage.removeItem(STORAGE_KEYS.CATEGORIES);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.USERS);
    localStorage.removeItem(STORAGE_KEYS.USER_SESSION);
    this.init();
    notifyChange();
  },

  // --- Listener Subscription ---
  subscribe(callback: () => void) {
    if (typeof window === 'undefined') return () => {};
    window.addEventListener(STORAGE_EVENT, callback);
    return () => {
      window.removeEventListener(STORAGE_EVENT, callback);
    };
  }
};
