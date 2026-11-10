import React, { useState, useEffect } from 'react';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { InnovationDetailModal } from './components/InnovationDetailModal';
import { Navbar, NavSection } from './components/Navbar';
import { PartnershipModal } from './components/PartnershipModal';
import { UserProfileModal } from './components/UserProfileModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { StorageService } from './services/storage';
import {
  AdminUser,
  ContactMessage,
  Innovation,
  InnovationCategory,
  PartnershipEnquiry,
  Publication,
  ResearchPaper,
  UserProfile
} from './types';
import { AboutView } from './views/AboutView';
import { AdminDashboardView } from './views/AdminDashboardView';
import { ContactView } from './views/ContactView';
import { DevelopmentView } from './views/DevelopmentView';
import { FutureInnovationsView } from './views/FutureInnovationsView';
import { HomeView } from './views/HomeView';
import { InnovationsView } from './views/InnovationsView';
import { NewsView } from './views/NewsView';
import { PartnershipsView } from './views/PartnershipsView';
import { ResearchView } from './views/ResearchView';
import { TechnologyView } from './views/TechnologyView';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [innovations, setInnovations] = useState<Innovation[]>([]);
  const [categories, setCategories] = useState<InnovationCategory[]>([]);
  const [researchPapers, setResearchPapers] = useState<ResearchPaper[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [partnershipEnquiries, setPartnershipEnquiries] = useState<PartnershipEnquiry[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Modals
  const [selectedInnovation, setSelectedInnovation] = useState<Innovation | null>(null);
  const [partnershipModalOpen, setPartnershipModalOpen] = useState(false);
  const [partnershipInterest, setPartnershipInterest] = useState<string>('General Strategic Partnership');

  // User Auth & Profile Modals
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [authReason, setAuthReason] = useState<string | undefined>(undefined);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Load and sync data from StorageService
  const reloadData = () => {
    setInnovations(StorageService.getInnovations());
    setCategories(StorageService.getCategories());
    setResearchPapers(StorageService.getResearchPapers());
    setPublications(StorageService.getPublications());
    setPartnershipEnquiries(StorageService.getPartnershipEnquiries());
    setContactMessages(StorageService.getContactMessages());
    setAdminUser(StorageService.getAdminSession());
    setCurrentUser(StorageService.getCurrentUser());
  };

  useEffect(() => {
    StorageService.init();
    reloadData();

    // URL Hash Routing synchronization
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavSection;
      const validSections: NavSection[] = [
        'home',
        'about',
        'innovations',
        'research',
        'development',
        'future',
        'technology',
        'partnerships',
        'news',
        'contact',
        'admin'
      ];
      if (validSections.includes(hash)) {
        setCurrentSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // Storage update event listener
    const unsubscribe = StorageService.subscribe(() => {
      reloadData();
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      unsubscribe();
    };
  }, []);

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPartnership = (interest?: string) => {
    setPartnershipInterest(interest || 'General Strategic Partnership');
    setPartnershipModalOpen(true);
  };

  const handleOpenAuth = (mode: 'login' | 'signup' | 'forgot', reason?: string) => {
    setAuthMode(mode);
    setAuthReason(reason);
    setAuthModalOpen(true);
  };

  const handleOpenProfile = () => {
    setProfileModalOpen(true);
  };

  const handleLogoutUser = () => {
    StorageService.logoutUser();
    setCurrentUser(null);
    reloadData();
  };

  const handleToggleSave = (id: string) => {
    StorageService.toggleSaveInnovation(id);
    reloadData();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070d1a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans">
      {/* Top Navigation Bar with Sign Up, Login, and Profile Clearance */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isAdminLoggedIn={adminUser?.isAuthenticated}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onOpenProfile={handleOpenProfile}
        onLogoutUser={handleLogoutUser}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentSection === 'home' && (
          <HomeView
            innovations={innovations}
            researchPapers={researchPapers}
            onNavigate={handleNavigate}
            onSelectInnovation={(inv) => setSelectedInnovation(inv)}
            onOpenPartnership={handleOpenPartnership}
          />
        )}

        {currentSection === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenPartnership={handleOpenPartnership}
          />
        )}

        {currentSection === 'innovations' && (
          <InnovationsView
            innovations={innovations}
            categories={categories}
            onSelectInnovation={(inv) => setSelectedInnovation(inv)}
            onOpenPartnership={handleOpenPartnership}
            currentUser={currentUser}
          />
        )}

        {currentSection === 'research' && (
          <ResearchView
            researchPapers={researchPapers}
            onOpenPartnership={handleOpenPartnership}
            currentUser={currentUser}
            onOpenAuth={handleOpenAuth}
          />
        )}

        {currentSection === 'development' && (
          <DevelopmentView
            innovations={innovations}
            onSelectInnovation={(inv) => setSelectedInnovation(inv)}
            onOpenPartnership={handleOpenPartnership}
          />
        )}

        {currentSection === 'future' && (
          <FutureInnovationsView
            innovations={innovations}
            onSelectInnovation={(inv) => setSelectedInnovation(inv)}
            onOpenPartnership={handleOpenPartnership}
          />
        )}

        {currentSection === 'technology' && (
          <TechnologyView
            onNavigate={handleNavigate}
            onOpenPartnership={handleOpenPartnership}
          />
        )}

        {currentSection === 'partnerships' && (
          <PartnershipsView innovations={innovations} />
        )}

        {currentSection === 'news' && (
          <NewsView publications={publications} />
        )}

        {currentSection === 'contact' && <ContactView />}

        {currentSection === 'admin' && (
          <AdminDashboardView
            innovations={innovations}
            categories={categories}
            researchPapers={researchPapers}
            publications={publications}
            partnershipEnquiries={partnershipEnquiries}
            contactMessages={contactMessages}
            adminUser={adminUser}
            onLogin={(user) => {
              setAdminUser(user);
              reloadData();
            }}
            onLogout={() => {
              StorageService.logoutAdmin();
              setAdminUser(null);
              reloadData();
            }}
            onSelectInnovation={(inv) => setSelectedInnovation(inv)}
          />
        )}
      </main>

      {/* Quiet Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Official WhatsApp Floating Widget (Always Present at Bottom-Right) */}
      <WhatsAppWidget />

      {/* Innovation Dedicated Profile Modal with Restricted Clearance */}
      {selectedInnovation && (
        <InnovationDetailModal
          innovation={selectedInnovation}
          isAdmin={adminUser?.isAuthenticated}
          currentUser={currentUser}
          onOpenAuth={handleOpenAuth}
          isSaved={currentUser?.savedInnovations?.includes(selectedInnovation.id)}
          onToggleSave={handleToggleSave}
          onClose={() => setSelectedInnovation(null)}
          onOpenPartnership={(interest) => {
            setSelectedInnovation(null);
            handleOpenPartnership(interest);
          }}
        />
      )}

      {/* Partnership & Investor Inquiry Modal */}
      {partnershipModalOpen && (
        <PartnershipModal
          initialInnovationInterest={partnershipInterest}
          onClose={() => setPartnershipModalOpen(false)}
        />
      )}

      {/* User Registration & Login Authentication Modal */}
      {authModalOpen && (
        <AuthModal
          initialMode={authMode}
          restrictedReason={authReason}
          onClose={() => setAuthModalOpen(false)}
          onSuccess={(user) => {
            setCurrentUser(user);
            reloadData();
          }}
        />
      )}

      {/* User Profile Management Modal */}
      {profileModalOpen && currentUser && (
        <UserProfileModal
          user={currentUser}
          innovations={innovations}
          onClose={() => setProfileModalOpen(false)}
          onLogout={handleLogoutUser}
          onSelectInnovation={(inv) => setSelectedInnovation(inv)}
          onOpenPartnership={handleOpenPartnership}
        />
      )}
    </div>
  );
}
