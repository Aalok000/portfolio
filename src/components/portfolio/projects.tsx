import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'SecureAuth Vault',
    description: 'A full-stack web application for securely storing and managing user credentials with end-to-end encryption. Features role-based access control and detailed audit logs.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Cryptography', 'Docker'],
    github: 'https://github.com/aaloktomer/secureauth-vault',
    aiHint: 'secure application'
  },
  {
    title: 'PacketGuardian IDS',
    description: 'A lightweight, rule-based Intrusion Detection System (IDS) written in Python. Monitors network traffic for suspicious patterns and sends real-time alerts.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Scapy', 'Socket', 'Network Security'],
    github: 'https://github.com/aaloktomer/packetguardian-ids',
    aiHint: 'network security'
  },
  {
    title: 'Cyber-Threat Dashboard',
    description: 'A real-time dashboard that visualizes global cyber threats using various public APIs. Built with React and D3.js for dynamic data visualization.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'API Integration', 'Data Visualization'],
    github: 'https://github.com/aaloktomer/cyber-threat-dashboard',
    aiHint: 'cyber dashboard'
  },
];

const Projects = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Project Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
