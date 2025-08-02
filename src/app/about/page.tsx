
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-foreground animate-in fade-in duration-1000">
      <section 
        className="w-full py-20 md:py-32 lg:py-40"
        style={{
          backgroundImage: `url("/background-pattern.svg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:pl-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-12 duration-1000 relative">
               <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl transform -rotate-3"></div>
                    <Image
                      src="/profile.jpeg"
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
                        I'm Muhammed Fahmi, a passionate and detail-oriented Full Stack Developer with a strong focus on building scalable and maintainable web applications. I specialize in ASP.NET and Angular, blending back-end efficiency with front-end elegance. Currently, I work full-time as an Associate Software Developer at IBS Fulcro, Mumbai, where I contribute to building enterprise-grade software solutions for diverse clients. At IBS, I'm constantly sharpening my skills in real-world projects, collaborating with experienced teams, and adhering to industry best practices for clean code, agile development, and CI/CD pipelines.
                    </p>
                    <p className="text-muted-foreground md:text-lg">
                        My journey into web development started with curiosity and quickly evolved into a committed career path. After completing my training at Brototype, where I specialized in Full Stack Web Development using ASP.NET and Angular, I developed a strong foundation in software engineering principles. During this time, I built multiple real-world projects from scratch, including Craftify and Plant Palace, which reflect not only my technical skills but also my problem-solving ability, UI/UX sensibility, and a strong understanding of scalable system design.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:pl-24">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">More About My Work</h2>
            <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground">
               <p>
                  Craftify is a feature-rich service marketplace platform where users can book professional services from verified workers. It includes real-time communication using SignalR, secure payments via Razorpay, and admin dashboards with data visualization. The application is built using Clean Architecture, CQRS, Mediator pattern, and NGRX for state management, with deployments on AWS and Vercel.
                </p>
                <p>
                  Plant Palace is a full-fledged e-commerce platform for gardening products, built using the .NET MVC stack. It features a product filtering system, wishlist, cart, review system, Stripe integration, and an admin panel with interactive charts and jQuery-powered tables.
                </p>
                <p>
                  Beyond my full-time role, I actively pursue side hustles by collaborating with international clients on freelance projects. This gives me exposure to different project management styles, user expectations, and tech stacks, making me more adaptable and resourceful. These experiences have allowed me to build strong communication skills and a client-focused approach to development.
                </p>
                 <p>
                  My mini projects, such as Ashmi Fitness Challenge (AFC) and Tha’avun, show my ability to rapidly build and deploy static and semi-dynamic websites using React, Tailwind CSS, Bootstrap, and API integrations like Google Drive API. These projects are live and publicly available, demonstrating my commitment to real-world usability and performance optimization.
                </p>
                <p>
                  Technically, I’m proficient in C#, TypeScript, JavaScript, HTML/CSS, and SQL, with deep experience in ASP.NET (MVC & Web API), Angular, Entity Framework Core, and UI libraries like Angular Material UI. I follow best practices such as Repository Pattern, Unit of Work, and Clean Architecture to ensure modular, testable, and maintainable codebases.
                </p>
                <p>
                  I consider myself a lifelong learner, continuously exploring new tools and patterns to stay updated in this ever-evolving tech landscape. My ultimate goal is to keep building meaningful software that solves real problems while growing both technically and creatively in the process.
                </p>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 lg:pl-24">
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
