
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '@/data/portfolio.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/portfolio/footer';

export async function generateStaticParams() {
  return data.achievements.map((ach) => ({
    slug: ach.slug,
  }));
}

const AchievementPage = ({ params }: { params: { slug: string } }) => {
  const achievement = data.achievements.find((a) => a.slug === params.slug);

  if (!achievement) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
            <Button asChild variant="ghost">
                <Link href="/#achievements">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline mb-4 text-primary">{achievement.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{achievement.description}</p>
          
          <h2 className="text-3xl font-headline mb-8 text-center text-accent">Achievement Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(achievement.gallery || []).map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-border transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                <Image
                  src={photo.url}
                  alt={`${achievement.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  data-ai-hint={photo.aiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AchievementPage;
