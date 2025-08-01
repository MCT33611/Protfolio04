import Image from 'next/image';
import { Button } from './ui/button';
import { Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-12 duration-1000 relative">
               <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl transform -rotate-3"></div>
                    <Image
                    src="https://placehold.co/600x750.png"
                    alt="About Me"
                    width={600}
                    height={750}
                    data-ai-hint="man programming"
                    className="rounded-2xl object-cover relative z-10"
                    />
               </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-right-12 duration-1000">
                <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">About Me</h2>
                    <h3 className="text-2xl font-semibold">Hello!</h3>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    I'm a passionate Full-Stack Developer with a love for creating beautiful and functional web experiences. I thrive on solving complex problems and turning ideas into reality. My journey in tech has been driven by a constant curiosity and a desire to learn and grow.
                    </p>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/20">
                        View More
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        Download CV
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
