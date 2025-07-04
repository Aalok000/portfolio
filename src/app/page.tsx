'use client';

import { useState, useEffect, useMemo, FC } from 'react';
import Header from '@/components/portfolio/header';
import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Skills from '@/components/portfolio/skills';
import Projects from '@/components/portfolio/projects';
import Experience from '@/components/portfolio/experience';
import Achievements from '@/components/portfolio/achievements';
import EmploymentExpress from '@/components/portfolio/employment-express';
import VisitorProfileSelector from '@/components/portfolio/visitor-profile-selector';
import Footer from '@/components/portfolio/footer';
import { personalizeContent, PersonalizeContentOutput } from '@/ai/flows/personalize-content';
import { getCookie, setCookie } from '@/lib/cookies';
import { Skeleton } from '@/components/ui/skeleton';

interface SectionProps {
  id: string;
}

const sectionConfig: Record<string, { component: FC<SectionProps>; id: string }> = {
  'About Me': { component: About, id: 'about' },
  'Skills': { component: Skills, id: 'skills' },
  'Projects': { component: Projects, id: 'projects' },
  'Experience': { component: Experience, id: 'experience' },
  'Achievements': { component: Achievements, id: 'achievements' },
  'Employment Express Verband LLP': { component: EmploymentExpress, id: 'e-express' },
};

const defaultSectionOrder: (keyof typeof sectionConfig)[] = [
  'About Me',
  'Skills',
  'Projects',
  'Experience',
  'Achievements',
];

const SectionSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <Skeleton className="h-8 w-1/4 mb-4" />
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

export default function Home() {
  const [sectionOrder, setSectionOrder] = useState<string[]>(defaultSectionOrder);
  const [loading, setLoading] = useState(true);
  const [activeProfile, setActiveProfile] = useState<string | null>(null);

  useEffect(() => {
    // On initial load, get the profile from the cookie
    const savedProfile = getCookie('visitorProfile');
    setActiveProfile(savedProfile);
  }, []);

  useEffect(() => {
    const fetchAndSetOrder = async () => {
      setLoading(true);
      if (activeProfile) {
        try {
          const result: PersonalizeContentOutput = await personalizeContent({ visitorProfile: activeProfile });
          const aiPrioritized = result.prioritizedSections.filter(section => section in sectionConfig);
          const allSections = Object.keys(sectionConfig);
          const orderedSections = [
            ...aiPrioritized,
            ...allSections.filter(section => !aiPrioritized.includes(section))
          ];
          setSectionOrder(orderedSections as (keyof typeof sectionConfig)[]);
        } catch (error) {
          console.error("Failed to personalize content:", error);
          setSectionOrder(defaultSectionOrder);
        }
      } else {
        setSectionOrder(defaultSectionOrder);
      }
      setLoading(false);
    };

    fetchAndSetOrder();
  }, [activeProfile]);
  
  const handleProfileUpdate = (newProfile: string) => {
    setCookie('visitorProfile', newProfile, 30);
    setActiveProfile(newProfile);
  };

  const renderedSections = useMemo(() => {
    return sectionOrder.map((key) => {
      const config = sectionConfig[key as keyof typeof sectionConfig];
      if (!config) return null;
      const Component = config.component;
      return <Component key={config.id} id={config.id} />;
    });
  }, [sectionOrder]);

  const navItems = useMemo(() => sectionOrder.map(key => {
    const config = sectionConfig[key as keyof typeof sectionConfig];
    return { title: key, id: config.id };
  }), [sectionOrder]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header sections={navItems} />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4">
          <VisitorProfileSelector onProfileUpdate={handleProfileUpdate} initialProfile={activeProfile} />
        </div>
        <div className="py-12 md:py-20 space-y-20 md:space-y-32">
          {loading ? (
            <div className="space-y-20 md:space-y-32">
              {[...Array(3)].map((_, i) => <SectionSkeleton key={i} />)}
            </div>
          ) : (
            renderedSections
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
