'use client';

import React, { useState, useEffect } from 'react';
import HackerAnimation from './hacker-animation';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [name, setName] = useState('');
  const fullName = 'Aalok Tomer';
  const [isNameDeleting, setIsNameDeleting] = useState(false);
  
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = 'Ethical Hacker & Cybersecurity Student';
  const [isSubtitleDeleting, setIsSubtitleDeleting] = useState(false);

  // Effect for typing/deleting name in a loop
  useEffect(() => {
    const handleTyping = () => {
      if (!isNameDeleting) {
        // Typing
        if (name.length < fullName.length) {
          setName(fullName.slice(0, name.length + 1));
        } else {
          // Pause and then start deleting
          setTimeout(() => setIsNameDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (name.length > 0) {
          setName(name.slice(0, -1));
        } else {
          // Finished deleting, start typing again
          setIsNameDeleting(false);
        }
      }
    };
    
    const typingSpeed = isNameDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [name, isNameDeleting, fullName]);

  // Effect for typing/deleting subtitle in a loop
  useEffect(() => {
    const handleTyping = () => {
      if (!isSubtitleDeleting) {
        // Typing
        if (subtitle.length < fullSubtitle.length) {
          setSubtitle(fullSubtitle.slice(0, subtitle.length + 1));
        } else {
          // Pause and then start deleting
          setTimeout(() => setIsSubtitleDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (subtitle.length > 0) {
          setSubtitle(subtitle.slice(0, -1));
        } else {
          // Finished deleting, start typing again
          setIsSubtitleDeleting(false);
        }
      }
    };
    
    const typingSpeed = isSubtitleDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [subtitle, isSubtitleDeleting, fullSubtitle]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <HackerAnimation />
      <div className="relative z-10 p-4 bg-background/50 backdrop-blur-sm rounded-lg">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-foreground min-h-[5rem] md:min-h-[6rem] lg:min-h-[7.5rem]">
          {name}
          <span className="text-accent animate-pulse ml-2">|</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-accent font-code min-h-[2rem] md:min-h-[2.25rem]">
          {subtitle}
          <span className="animate-pulse ml-1">|</span>
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
