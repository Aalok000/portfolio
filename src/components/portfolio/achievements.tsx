import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, BookOpen, Shield, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-accent" />,
    title: '1st Place in Project NOVA 2k24',
    description: 'Awarded first prize at the Project NOVA 2k24 event held at IPEM College.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-accent" />,
    title: '2nd Place in SQARD OF IOT',
    description: 'Secured second position in the HACK-A-THON 2K24 at IMS Ghaziabad.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-accent" />,
    title: '3rd Place in Cross Road 2k24',
    description: 'Achieved third position at the Cross Road 2k24 event at HI-Tech College.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    title: 'Cyber Security Certifications',
    description: 'Completed certifications from Coursera (Cyber Security Roles) and IIT Delhi (Cyber Forensics & CTF).',
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Ethical Hacking Certification',
    description: 'Certified in Ethical Hacking from WsCubeTech, covering key principles and techniques.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Core-Coordinator MARKFEST 2K23',
    description: 'Served as a Core-Coordinator for the annual college fest at IMS Ghaziabad.',
  },
];

const Achievements = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Achievements & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <Card key={index} className="text-center bg-card/50 hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">{ach.icon}</div>
              <CardTitle className="font-headline text-xl">{ach.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ach.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
