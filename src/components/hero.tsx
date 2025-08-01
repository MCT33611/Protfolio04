import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full min-h-[calc(100vh-5rem)] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                Fahmi - Creative Developer & Designer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                I craft beautiful, engaging, and accessible digital experiences. My passion lies in the intersection of design and technology.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild className="bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 transform hover:scale-105 group">
                <a href="#projects">
                  View My Work
                  <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-12 duration-1000">
             <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-full w-80 h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center shadow-2xl">
                <div className="bg-background rounded-full w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml">
                        <path d="m18 16 4-4-4-4"/>
                        <path d="m6 8-4 4 4 4"/>
                        <path d="m14.5 4-5 16"/>
                    </svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
