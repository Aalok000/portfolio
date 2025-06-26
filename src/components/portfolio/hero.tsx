'use client';

import React, { useState, useEffect } from 'react';
import HackerAnimation from './hacker-animation';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [name, setName] = useState('');
  const fullName = 'Aalok Tomer';
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = 'Ethical Hacker & Cybersecurity Student';

  const [nameTypingDone, setNameTypingDone] = useState(false);

  useEffect(() => {
    if (!nameTypingDone) {
      if (name.length < fullName.length) {
        const timer = setTimeout(() => {
          setName(fullName.slice(0, name.length + 1));
        }, 150);
        return () => clearTimeout(timer);
      } else {
        // Add a small delay before starting the subtitle
        setTimeout(() => setNameTypingDone(true), 300);
      }
    }
  }, [name, fullName, nameTypingDone]);

  useEffect(() => {
    if (nameTypingDone) {
      if (subtitle.length < fullSubtitle.length) {
        const timer = setTimeout(() => {
          setSubtitle(fullSubtitle.slice(0, subtitle.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [nameTypingDone, subtitle, fullSubtitle]);


  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <HackerAnimation />
      <div className="relative z-10 p-4 bg-background/50 backdrop-blur-sm rounded-lg">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
          {name}
          {!nameTypingDone && <span className="text-accent animate-pulse ml-2">|</span>}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-muted-foreground font-code min-h-[2rem]">
          {subtitle}
          {nameTypingDone && <span className="text-accent animate-pulse ml-1">|</span>}
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
