import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">About Me</h2>
      <Card className="bg-card/30">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 p-6">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Aalok Tomer"
              width={400}
              height={400}
              className="rounded-full shadow-lg mx-auto"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="md:col-span-2 p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate and driven cybersecurity enthusiast with a strong foundation in full-stack development. My journey into tech began with a fascination for how things work, which quickly evolved into a deep interest in protecting digital systems. I thrive on challenges, from building secure web applications to participating in competitive hackathons.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              With hands-on experience in various technologies and a constant desire to learn, I am dedicated to creating robust, secure, and efficient solutions. I am actively seeking opportunities to apply my skills in a professional environment and contribute to meaningful projects in the cybersecurity domain.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
