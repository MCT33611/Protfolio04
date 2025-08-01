
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background/80 backdrop-blur-sm text-foreground animate-in fade-in duration-1000 lg:pl-24">
      <section 
        className="w-full py-20 md:py-32 lg:py-40"
        style={{
          backgroundImage: `url("/background-pattern.svg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
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
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-primary">About Fahmi</h1>
                    <p className="text-muted-foreground md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-muted-foreground md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">Skills Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 rounded-full bg-primary/10">
                        <div className="p-2 rounded-full bg-primary/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml w-8 h-8 text-primary"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                        </div>
                    </div>
                    <p className="font-semibold">Web Development</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 rounded-full bg-primary/10">
                        <div className="p-2 rounded-full bg-primary/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-8 h-8 text-primary"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
                        </div>
                    </div>
                    <p className="font-semibold">Databases</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 rounded-full bg-primary/10">
                        <div className="p-2 rounded-full bg-primary/20">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-figma w-8 h-8 text-primary"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                        </div>
                    </div>
                    <p className="font-semibold">UI/UX Design</p>
                </div>
                 <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 rounded-full bg-primary/10">
                        <div className="p-2 rounded-full bg-primary/20">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sheet w-8 h-8 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                        </div>
                    </div>
                    <p className="font-semibold">Excel</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
