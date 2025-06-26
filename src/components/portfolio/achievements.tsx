import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-accent" />,
    title: 'Hack-a-Thon 2023 Winner',
    description: '1st place for developing an innovative secure file-sharing platform within a 24-hour timeframe.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Certified Ethical Hacker (CEH)',
    description: 'Completed the CEH v11 certification, demonstrating knowledge in penetration testing and ethical hacking techniques.',
  },
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: 'Dean\'s List for Academic Excellence',
    description: 'Recognized for outstanding academic performance for three consecutive semesters.',
  },
];

const Achievements = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Achievements & Awards</h2>
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
