import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import data from '@/data/portfolio.json';

const Projects = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Project Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-card/50 transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg aspect-[3/2] object-cover"
                data-ai-hint={project.aiHint}
              />
              <CardTitle className="font-headline pt-4">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={`/projects/${project.slug}`}>
                  View Photos
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
