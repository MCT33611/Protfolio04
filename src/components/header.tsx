"use client"
import React from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold font-headline text-primary">
          Fahmi
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Button key={link.href} variant="link" asChild className="text-lg font-medium text-foreground hover:text-accent hover:no-underline transition-colors">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>
        <Button asChild className="bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105">
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </header>
  );
}
