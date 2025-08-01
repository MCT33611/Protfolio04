"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Menu, X, Home, User, Briefcase, BotMessageSquare, Send } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', Icon: Home },
    { href: '#about', label: 'About', Icon: User },
    { href: '#skills', label: 'Skills', Icon: BotMessageSquare },
    { href: '#blogs', label: 'Blogs', Icon: Briefcase },
    { href: '#contact', label: 'Contact', Icon: Send },
  ];

    const socialLinks = [
    { name: 'GitHub', Icon: Github, url: '#' },
    { name: 'LinkedIn', Icon: Linkedin, url: '#' },
    { name: 'Twitter', Icon: Twitter, url: '#' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card text-foreground hover:bg-primary/20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar */}
      <header className={`fixed top-0 left-0 h-full z-40 bg-card text-foreground flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-20`}>
        <div className="flex flex-col items-center">
            <a href="#" className="text-2xl font-bold font-headline text-primary mt-8 mb-12">
            F
            </a>
            <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/20">
                <a href={link.href} title={link.label}>
                    <link.Icon className="h-5 w-5" />
                </a>
                </Button>
            ))}
            </nav>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          {socialLinks.map(({ name, Icon, url }) => (
            <Button key={name} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary rounded-full transition-colors">
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </header>
       {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
