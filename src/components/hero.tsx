import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:pl-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="space-y-4">
               <div className="text-primary font-medium tracking-widest">DEVELOPER</div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none font-headline text-foreground">
                Hey <br/> I'm <span className="text-primary">Fahmi</span>, <br/> Full-Stack Developer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                I build beautiful and functional websites.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 group">
                <Link href="/#contact">
                  Let's Talk
                  <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-12 duration-1000 flex items-center justify-center lg:justify-end">
            <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-primary rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-primary rounded-2xl"></div>
                <Card />
            </div>
             <div className="hidden lg:flex flex-col space-y-8 ml-12">
                <Stat value="04" label="Years Experience" />
                <Stat value="06" label="Happy Clients" />
                <Stat value="08" label="Projects Done" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card() {
    return (
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 w-80 shadow-2xl relative z-10">
            <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                    <Image src="https://placehold.co/80x80.png" alt="Fahmi" data-ai-hint="man portrait" width={80} height={80} className="rounded-full border-2 border-primary"/>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Fahmi</h3>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>
            </div>
            <div className="space-y-2 text-sm">
                <p><span className="font-semibold">EMAIL:</span> name@example.com</p>
                <p><span className="font-semibold">PHONE:</span> +1234567890</p>
                <p><span className="font-semibold">LOCATION:</span> Earth</p>
            </div>
            <Button className="w-full mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Download CV</Button>
        </div>
    )
}

function Stat({ value, label }: { value: string, label: string }) {
    return (
         <div className="relative flex items-center">
            <div className="text-5xl font-bold text-primary mr-4">{value}</div>
            <div className="text-muted-foreground leading-tight max-w-[5rem]">{label}</div>
        </div>
    )
}
