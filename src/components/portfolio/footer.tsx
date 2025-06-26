import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-8 px-4 text-center">
        <h3 className="font-headline text-2xl mb-4">Get in Touch</h3>
        <div className="flex justify-center gap-4 mb-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/Aalok000" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/aalok-tomer-58691b25a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:aalok.tomer@example.com" aria-label="Email">
              <Mail />
            </a>
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Aalok Tomer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
