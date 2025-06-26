import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import data from '@/data/portfolio.json';

const EmploymentExpress = ({ id }: { id: string }) => {
  const exp = data.employmentExpress;
  return (
    <section id={id} className="container mx-auto px-4 py-8">
       <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Featured Experience</h2>
      <Card className="border-accent shadow-lg shadow-accent/10">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-3">
                 <Briefcase className="w-8 h-8 text-accent"/>
                <CardTitle className="font-headline text-2xl text-accent">{exp.title}</CardTitle>
              </div>
              <CardDescription className="mt-1">{exp.company} | {exp.duration}</CardDescription>
            </div>
            <Badge variant="outline" className="border-accent text-accent">Priority for Recruiters</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {exp.description}
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            {exp.points.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default EmploymentExpress;
