
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, User, Lightbulb, Briefcase, Mail, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', Icon: Home },
    { href: '/about', label: 'About', Icon: User },
    { href: '/#skills', label: 'Skills', Icon: Lightbulb },
    { href: '/#projects', label: 'Projects', Icon: Briefcase },
    { href: '/#contact', label: 'Contact', Icon: Mail },
  ];
  
  const socialLinks = [
    { name: 'GitHub', Icon: Github, url: 'https://github.com/MCT33611' },
    { name: 'LinkedIn', Icon: Linkedin, url: 'https://www.linkedin.com/in/muhammed-fahmi-p/' },
  ];
  
  const NavContent = () => (
    <>
      <Link href="/" className="text-3xl font-bold font-headline text-primary mb-12 hidden lg:block">
        F
      </Link>
      <nav className="flex flex-col items-center gap-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start gap-4 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-full",
                "lg:w-auto lg:justify-center lg:h-12 lg:w-12",
                isActive && "text-primary bg-primary/10",
              )}
            >
              <Link href={link.href} title={link.label}>
                <link.Icon className="h-5 w-5" />
                <span className="lg:hidden">{link.label}</span>
              </Link>
            </Button>
          )
        })}
      </nav>
      <div className="flex-grow" />
      <div className="flex-col items-center gap-2 mb-4 hidden lg:flex">
          {socialLinks.map(({ name, Icon, url }) => (
            <Button key={name} variant="ghost" size="icon" asChild className="text-muted-foreground rounded-full transition-all duration-300 ease-in-out hover:text-primary hover:bg-primary/10 hover:shadow-md hover:scale-105">
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
      </div>
    </>
  );

  if (!isClient) return null;

  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <header className="fixed top-1/2 -translate-y-1/2 left-4 z-40 text-foreground hidden lg:flex flex-col items-center p-4 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 shadow-lg">
        <NavContent />
      </header>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-lg p-2 flex items-center gap-2">
            {navLinks.map(link => {
               const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
               return (
                <Button key={link.href} variant="ghost" size="icon" asChild className={cn("rounded-full transition-all duration-300 ease-in-out hover:text-primary hover:bg-primary/10 hover:shadow-md hover:scale-105", isActive && "bg-primary/20 text-primary")}>
                    <Link href={link.href}>
                        <link.Icon />
                    </Link>
                </Button>
               )
            })}
        </div>
      </div>
    </>
  );
}
