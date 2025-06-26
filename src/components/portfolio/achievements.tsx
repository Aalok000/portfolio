import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, BookOpen, Shield, Users } from 'lucide-react';
import data from '@/data/portfolio.json';

const iconMap: { [key: string]: React.ReactNode } = {
  Trophy: <Trophy className="h-8 w-8 text-accent" />,
  BookOpen: <BookOpen className="h-8 w-8 text-accent" />,
  Shield: <Shield className="h-8 w-8 text-accent" />,
  Users: <Users className="h-8 w-8 text-accent" />,
};

const Achievements = ({ id }: { id: string }) => {
  const achievements = data.achievements;
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Achievements & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <Card key={index} className="text-center bg-card/50 hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">{iconMap[ach.icon]}</div>
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
