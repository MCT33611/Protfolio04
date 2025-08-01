import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {

  return (
    <footer className="bg-secondary/20 mt-20">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Fahmi. All rights reserved.
        </p>
         <div className="text-sm text-muted-foreground">
          Designed by <a href="#" className="text-primary hover:underline">Fahmi</a>
        </div>
      </div>
    </footer>
  );
}
