import React from 'react';
import HackerAnimation from './hacker-animation';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <HackerAnimation />
      <div className="relative z-10 p-4 bg-background/50 backdrop-blur-sm rounded-lg">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
          Aalok Tomer
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-muted-foreground">
          Cybersecurity Enthusiast & Full-Stack Developer
        </p>
        <div className="mt-8">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="#about">
              Discover More <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
