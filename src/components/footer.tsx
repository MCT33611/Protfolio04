import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', Icon: Github, url: '#' },
    { name: 'LinkedIn', Icon: Linkedin, url: '#' },
    { name: 'Twitter', Icon: Twitter, url: '#' },
  ];

  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Fahmi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, Icon, url }) => (
            <Button key={name} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-colors">
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
