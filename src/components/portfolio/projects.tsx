import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  {
    title: 'Autonomous Robots',
    description: "Constructed both a line-following and an object-avoidance robot using components like Arduino Uno and NodeMCU. These projects demonstrate skills in sensor integration, motor control, and programming logic for autonomous navigation.",
    image: 'https://placehold.co/600x400.png',
    tags: ['Arduino', 'NodeMCU', 'Robotics', 'Sensors'],
    github: 'https://github.com/Aalok000',
    aiHint: 'robot arduino'
  },
  {
    title: 'RFID Attendance System',
    description: "Engineered an automated attendance system with a NodeMCU, RFID reader, and LCD. This project streamlines attendance tracking by capturing card scans and displaying status information, demonstrating practical application of IoT in administration.",
    image: 'https://placehold.co/600x400.png',
    tags: ['NodeMCU', 'RFID', 'LCD', 'IoT'],
    github: 'https://github.com/Aalok000',
    aiHint: 'rfid project'
  },
  {
    title: 'IoT Smoke Detector',
    description: "Designed and built a smart smoke detection system using an ESP32, a smoke sensor, and an OLED display. The device provides real-time alerts and data visualization, enhancing fire safety measures through IoT technology.",
    image: 'https://placehold.co/600x400.png',
    tags: ['ESP32', 'IoT', 'Smoke Sensor', 'OLED'],
    github: 'https://github.com/Aalok000',
    aiHint: 'smoke detector circuit'
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
                  view a photos
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
