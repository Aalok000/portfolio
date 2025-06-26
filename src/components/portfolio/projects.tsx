import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Raspberry Pi Pico Rubber Ducky',
    description: 'Built a custom USB Rubber Ducky using a Raspberry Pi Pico to simulate Human Interface Device (HID) attacks. Developed and tested various payloads for task automation, reverse shells, and proof-of-concept demonstrations.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Raspberry Pi', 'Python', 'HID Attack', 'Payloads'],
    github: 'https://github.com/Aalok000',
    aiHint: 'raspberry pi circuit'
  },
  {
    title: 'Web App VAPT on DVWA',
    description: 'Conducted comprehensive vulnerability testing on the Damn Vulnerable Web Application (DVWA). Identified and exploited common web vulnerabilities such as SQL Injection, XSS, and CSRF to understand attack vectors and mitigation strategies.',
    image: 'https://placehold.co/600x400.png',
    tags: ['VAPT', 'DVWA', 'SQLi', 'XSS', 'Web Security'],
    github: 'https://github.com/Aalok000',
    aiHint: 'web security'
  },
];

const Projects = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Project Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-card/50 hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg"
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
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
