import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import data from '@/data/portfolio.json';


const About = ({ id }: { id: string }) => {
  const { description, imageUrl, imageAiHint, education } = data.about;
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">About Me</h2>
      <Card className="bg-card/30">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 p-6">
            <Image
              src={imageUrl}
              alt="Aalok Tomer"
              width={400}
              height={400}
              className="rounded-full shadow-lg mx-auto aspect-square object-cover"
              data-ai-hint={imageAiHint}
            />
          </div>
          <div className="md:col-span-2 p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-headline mb-4 text-accent flex items-center gap-2">
                <GraduationCap />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                   <div key={index}>
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
