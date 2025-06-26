import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

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
              I am a final-year BCA student with a deep-seated passion for cybersecurity. My journey is driven by a curiosity for ethical hacking, vulnerability assessment, and network security. I am actively involved in the cybersecurity community, constantly learning, and seeking to apply my skills to solve real-world security challenges.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-headline mb-4 text-accent flex items-center gap-2">
                <GraduationCap />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">BCA (Bachelor of Computer Applications)</h4>
                  <p className="text-muted-foreground">IMS University Courses Campus, Ghaziabad</p>
                  <p className="text-sm text-muted-foreground">2022 – 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Class XII (U.P Board)</h4>
                  <p className="text-muted-foreground">K.M.S. School, Pilkhuwa (Hapur)</p>
                  <p className="text-sm text-muted-foreground">2021 – 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
