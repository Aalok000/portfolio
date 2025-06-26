'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';

interface HeaderProps {
  sections: { title: string; id: string }[];
}

const Header = ({ sections }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="text-accent" />
          <span className="font-headline">Aalok Tomer</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {sections.map(section => (
            <Button key={section.id} variant="ghost" asChild>
              <a href={`#${section.id}`}>{section.title}</a>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
