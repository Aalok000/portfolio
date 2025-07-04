
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '@/data/portfolio.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github } from 'lucide-react';
import Footer from '@/components/portfolio/footer';
import { Badge } from '@/components/ui/badge';

// This function can be used by Next.js to generate static pages at build time
export async function generateStaticParams() {
  return data.projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = data.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
            <Button asChild variant="ghost">
                <Link href="/#projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
            {project.github && (
                <Button variant="outline" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github />
                    </a>
                </Button>
            )}
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline mb-4 text-primary">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
          
          <div className="space-y-4 text-lg text-foreground/80 mb-12">
            {(project as any).longDescription ? (
              (project as any).longDescription.map((paragraph: string, index: number) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            ) : (
              <p>{project.description}</p>
            )}
          </div>
          
          <h2 className="text-3xl font-headline mb-8 text-center text-accent">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(project.gallery || []).map((photo: any, index) => {
              const aspectRatio = photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]';
              const width = photo.orientation === 'portrait' ? 600 : 800;
              const height = photo.orientation === 'portrait' ? 800 : 600;
              return (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-border transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
                  <Image
                    src={photo.url}
                    alt={`${project.title} - Image ${index + 1}`}
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

export default ProjectPage;
