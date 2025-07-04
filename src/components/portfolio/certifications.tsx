import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import data from '@/data/portfolio.json';

const Certifications = ({ id }: { id: string }) => {
  const { certifications } = data;
  
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Licenses & Certifications</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="bg-card/50 p-4 transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
            <div className="flex items-start gap-4">
              <Image
                src={cert.logoUrl}
                alt={`${cert.issuer} logo`}
                width={60}
                height={60}
                className="rounded-sm"
                data-ai-hint={cert.logoAiHint}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
                
                <Button asChild variant="outline" className="mt-4">
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    Show credential <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    <span className="font-bold">Skills:</span> {cert.skills.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
