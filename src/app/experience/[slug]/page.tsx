
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '@/data/portfolio.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/portfolio/footer';
import { Badge } from '@/components/ui/badge';

// This function can be used by Next.js to generate static pages at build time
export async function generateStaticParams() {
  return data.experience.map((exp) => ({
    slug: exp.slug,
  }));
}

const ExperiencePage = ({ params }: { params: { slug: string } }) => {
  const experience = data.experience.find((p) => p.slug === params.slug);

  if (!experience) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
            <Button asChild variant="ghost">
                <Link href="/#experience">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline mb-2 text-primary">{experience.role}</h1>
          <p className="text-xl text-muted-foreground mb-4">{experience.company}</p>
          <p className="text-md text-muted-foreground mb-12">{experience.duration}</p>
          
          <div className="mb-12 space-y-2 text-lg">
            {experience.description.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <h2 className="text-3xl font-headline mb-8 text-center text-accent">Experience Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(experience.gallery || []).map((photo: any, index) => {
              const aspectRatio = photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]';
              const width = photo.orientation === 'portrait' ? 600 : 800;
              const height = photo.orientation === 'portrait' ? 800 : 600;
              return (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-border transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                  <Image
                    src={photo.url}
                    alt={`${experience.role} - Image ${index + 1}`}
                    width={width}
                    height={height}
                    className={`w-full h-auto object-cover ${aspectRatio}`}
                    data-ai-hint={photo.aiHint}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
