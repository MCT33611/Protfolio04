
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, User, Lightbulb, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

export function Header() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/', label: 'Home', Icon: Home, id: 'home' },
    { href: '/#about', label: 'About', Icon: User, id: 'about' },
    { href: '/#skills', label: 'Skills', Icon: Lightbulb, id: 'skills' },
    { href: '/#projects', label: 'Projects', Icon: Briefcase, id: 'projects' },
    { href: '/#contact', label: 'Contact', Icon: Mail, id: 'contact' },
  ];

  const activeId = useScrollSpy(navLinks.map(link => link.id));
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialLinks = [
    { name: 'GitHub', Icon: Github, url: 'https://github.com/MCT33611' },
    { name: 'LinkedIn', Icon: Linkedin, url: 'https://www.linkedin.com/in/muhammed-fahmi-p/' },
  ];
  
  const NavContent = ({ isMobile = false }: { isMobile?: boolean}) => (
    <>
      {!isMobile && (
         <Link href="/" className="text-3xl font-bold font-headline text-primary mb-12 hidden lg:block">
          F
        </Link>
      )}
      <nav className={cn("flex items-center gap-2", isMobile ? "justify-around w-full" : "flex-col")}>
        {navLinks.map((link) => {
          const isActive = (activeId === link.id && pathname !== '/about') || (pathname === '/about' && link.id === 'about');
          return (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "relative group rounded-full transition-all duration-300 ease-in-out",
                "text-muted-foreground hover:text-primary",
                isMobile 
                  ? "h-12 w-12" 
                  : "w-full justify-start gap-4 lg:w-12 lg:h-12 lg:justify-center",
                isActive && "text-primary"
              )}
            >
              <Link href={link.href} title={link.label}>
                 <div className={cn(
                  "absolute inset-0 rounded-full bg-primary/20 transition-all duration-300 ease-in-out transform scale-0 opacity-0",
                  "group-hover:scale-100 group-hover:opacity-100",
                  isActive && "scale-100 opacity-100"
                )}></div>
                <div className={cn(
                  "absolute inset-0 rounded-full bg-primary/10 transition-all duration-300 ease-in-out transform scale-0 opacity-0 animate-pulse",
                   "group-hover:scale-125 group-hover:opacity-100",
                   isActive && "scale-125 opacity-100"
                )}></div>
                 <link.Icon className={cn("h-5 w-5 relative z-10 transition-transform duration-300 ease-in-out", "group-hover:scale-110", isActive && "scale-110")} />
                <span className={cn("lg:hidden relative z-10", isMobile && "hidden")}>{link.label}</span>
              </Link>
            </Button>
          )
        })}
      </nav>
      {!isMobile && (
         <>
            <div className="flex-grow" />
            <div className="flex-col items-center gap-2 mb-4 hidden lg:flex">
                {socialLinks.map(({ name, Icon, url }) => (
                  <Button key={name} variant="ghost" size="icon" asChild className="relative group text-muted-foreground rounded-full transition-all duration-300 ease-in-out hover:text-primary">
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                      <div className="absolute inset-0 rounded-full bg-primary/20 transition-all duration-300 ease-in-out transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"></div>
                      <div className="absolute inset-0 rounded-full bg-primary/10 transition-all duration-300 ease-in-out transform scale-0 opacity-0 animate-pulse group-hover:scale-125 group-hover:opacity-100"></div>
                      <Icon className="h-5 w-5 relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    </a>
                  </Button>
                ))}
            </div>
        </>
      )}
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
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-2rem)] max-w-md">
        <div className="bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-lg p-2 flex items-center gap-2">
            <NavContent isMobile={true}/>
        </div>
      </div>
    </>
  );
}
