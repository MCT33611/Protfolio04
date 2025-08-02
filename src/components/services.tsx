
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Server, Bot, Sheet, GitMerge, FileCode, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const servicesData = [
  {
    icon: FileCode,
    title: "Full Stack Web Development",
    description: "Build powerful, scalable web applications using modern stacks like Angular or React with ASP.NET (Web API or MVC). Whether it's a service platform or e-commerce store, I deliver clean architecture, responsive designs, and seamless integrations from backend to frontend.",
  },
  {
    icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
    ),
    title: ".NET Application Development",
    description: "Design and develop robust and secure applications with .NET MVC and Web API. I follow clean architecture principles using patterns like CQRS, Mediator, and Unit of Work to deliver reliable enterprise-level solutions.",
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="4" ry="10"></ellipse>
         <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)"></ellipse>
      </svg>
    ),
    title: "React App Development",
    description: "Create fast and interactive user interfaces with React. Ideal for modern SaaS platforms or single-page apps that prioritize user experience, responsiveness, and state management.",
  },
   {
    icon: () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
            <path d="M12 2v20"></path>
            <path d="M12 12L2 7"></path>
            <path d="M12 12l10-5"></path>
         </svg>
    ),
    title: "Angular App Development",
    description: "Develop dynamic and maintainable SPAs with Angular. Includes Angular Material UI, real-time updates via SignalR, and state management using NgRx. Perfect for dashboards, admin panels, and B2C platforms.",
  },
  {
    icon: Code,
    title: "Static Web Design",
    description: "Craft simple, lightweight websites with blazing speed. Perfect for portfolios, landing pages, or NGOs. Technologies include HTML, CSS, Bootstrap, and Tailwind CSS with responsive and mobile-first layouts.",
  },
  {
    icon: Server,
    title: "FTP & Deployment Management",
    description: "Manage seamless file transfers and deployments via FTP or cloud platforms. I handle everything from connecting to live servers, syncing code, and configuring domain setups for production-ready delivery.",
  },
  {
    icon: Sheet,
    title: "Excel Data Management",
    description: "Automate and optimize spreadsheet workflows. I provide Excel-based tools, dashboards, and data formatting services that simplify complex tasks, from reports to imports/exports and analytics.",
  }
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="lg:pl-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                     <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Services I Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From full-stack web solutions to static websites and app development — I help bring your digital ideas to life with precision and performance.
                </p>
              </div>
            </div>
             <div className="max-w-4xl mx-auto mb-12">
                <Alert variant="destructive" className="bg-destructive/10 border-destructive/30 text-destructive-foreground">
                  <AlertTriangle className="h-4 w-4 !text-destructive" />
                  <AlertTitle className="font-headline text-destructive">Part-Time Availability Notice</AlertTitle>
                  <AlertDescription className="text-destructive/80">
                    As a full-time developer at IBS Fulcro, Mumbai, I provide these services as part-time side hustles. I primarily work on these projects during weekends (Saturday & Sunday) and my free time at night. I enjoy this work and like to take the time to build things right. The prices or fees mentioned are rough market estimates and are always negotiable in my case.
                  </AlertDescription>
                </Alert>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                    <div className="p-4 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:scale-110">
                        <service.icon />
                    </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-headline mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
}
