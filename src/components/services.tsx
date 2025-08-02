
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Server, Bot, Sheet, GitMerge, FileCode, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const servicesData = [
  {
    icons: [
      () => (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
          <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
          <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white" />
        </svg>
      ),
      () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#61DAFB">
          <path d="M31.208 15.13c-.36-1.18-1.03-2.22-1.92-3.13-2.73-2.79-6.53-4.34-10.4-4.57h-.1c-1.1-.07-2.23.02-3.32.3-1.07.28-2.1.75-3.04 1.4-2.8 1.9-4.5 4.8-4.93 8l-.19 1.42c-.36 1.18-1.03 2.22-1.92 3.13 2.73 2.79 6.53 4.34 10.4 4.57h.1c1.1.07 2.23-.02 3.32-.3 1.07-.28 2.1-.75 3.04-1.4 2.8-1.9 4.5-4.8 4.93-8l.19-1.42zm-15.34 9.17c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zM24.7 21.04c-1.34 2.4-3.84 4.14-6.68 4.8-1.4.34-2.88.5-4.33.43-1.45-.07-2.84-.37-4.13-.88-2.6-1.04-4.6-3-5.65-5.52.9-1.02 1.54-2.24 1.83-3.53-2.73-2.79-6.53-4.34-10.4-4.57h-.1c-1.1-.07-2.23.02-3.32.3-1.07.28-2.1.75-3.04 1.4C-2.8 1.9 4.5 4.8 4.93 8l.19 1.42c.36 1.18 1.03 2.22 1.92 3.13-2.73-2.79-6.53-4.34-10.4-4.57h-.1c-1.1-.07-2.23.02-3.32.3-1.07.28-2.1.75-3.04 1.4-2.8 1.9-4.5 4.8-4.93 8l-.19 1.42zM15.868 24.3c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zM24.7 21.04c-1.34 2.4-3.84 4.14-6.68 4.8-1.4.34-2.88.5-4.33.43-1.45-.07-2.84-.37-4.13-.88-2.6-1.04-4.6-3-5.65-5.52.9-1.02 1.54-2.24 1.83-3.53.53 1.62 1.4 3.1 2.5 4.35 1.15 1.3 2.53 2.33 4.08 3.03 2.8 1.25 5.82 1.5 8.65.65.52-.16.98-.37 1.4-.62l.02-.01zM28.16 6.3c1.34-2.4 3.84-4.14 6.68-4.8 1.4-.34 2.88-.5 4.33-.43 1.45.07 2.84.37 4.13.88 2.6 1.04 4.6 3 5.65 5.52-.9 1.02-1.54 2.24-1.83 3.53-.53-1.62-1.4-3.1-2.5-4.35-1.15-1.3-2.53-2.33-4.08-3.03-2.8-1.25-5.82-1.5-8.65-.65-.52.16-.98.37-1.4.62l-.02.01z" transform="rotate(30 16 16)" />
        </svg>
      ),
      () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
          <path fill="#5D2F8D" d="M12.23,25.42,3.36,22.2,2.08,8.88l8.7,4.45-.17,1.49-5.6-2.85.83,8.74,5.92,2.06.18-1.56Z"/>
          <path fill="#5D2F8D" d="M13.1,26.23,7.5,24.1l-1-10.6,5.4,1.87.2,1.55-2.7-.94.57,6.07,3.4,1.18.33-1.63Z"/>
          <path fill="#fff" d="m19.89,26.54-8.87-3.22.76-8.68,8.94,3.12-.83,8.78Zm-7.4-4.08,6.58,2.39.39-4.13-6.6-2.29-.37,4.03Z"/>
          <path fill="#fff" d="m20.8,27.35-8.87-3.22.76-8.68,8.94,3.12-.83,8.78Zm-7.4-4.08,6.58,2.39.39-4.13-6.6-2.29-.37,4.03Z"/>
        </svg>
      )
    ],
    title: "Full Stack Web Development",
    description: "Build powerful, scalable web applications using modern stacks like Angular or React with ASP.NET (Web API or MVC). Whether it's a service platform or e-commerce store, I deliver clean architecture, responsive designs, and seamless integrations from backend to frontend.",
  },
  {
    icons: [() => (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
          <path fill="#5D2F8D" d="M12.23,25.42,3.36,22.2,2.08,8.88l8.7,4.45-.17,1.49-5.6-2.85.83,8.74,5.92,2.06.18-1.56Z"/>
          <path fill="#5D2F8D" d="M13.1,26.23,7.5,24.1l-1-10.6,5.4,1.87.2,1.55-2.7-.94.57,6.07,3.4,1.18.33-1.63Z"/>
          <path fill="#fff" d="m19.89,26.54-8.87-3.22.76-8.68,8.94,3.12-.83,8.78Zm-7.4-4.08,6.58,2.39.39-4.13-6.6-2.29-.37,4.03Z"/>
          <path fill="#fff" d="m20.8,27.35-8.87-3.22.76-8.68,8.94,3.12-.83,8.78Zm-7.4-4.08,6.58,2.39.39-4.13-6.6-2.29-.37,4.03Z"/>
        </svg>
    )],
    title: ".NET Application Development",
    description: "Design and develop robust and secure applications with .NET MVC and Web API. I follow clean architecture principles using patterns like CQRS, Mediator, and Unit of Work to deliver reliable enterprise-level solutions.",
  },
  {
    icons: [() => (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#61DAFB">
          <path d="M31.208 15.13c-.36-1.18-1.03-2.22-1.92-3.13-2.73-2.79-6.53-4.34-10.4-4.57h-.1c-1.1-.07-2.23.02-3.32.3-1.07.28-2.1.75-3.04 1.4-2.8 1.9-4.5 4.8-4.93 8l-.19 1.42c-.36 1.18-1.03 2.22-1.92 3.13 2.73 2.79 6.53 4.34 10.4 4.57h.1c1.1.07 2.23-.02 3.32-.3 1.07-.28 2.1-.75 3.04-1.4 2.8-1.9 4.5-4.8 4.93-8l.19-1.42zm-15.34 9.17c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zM24.7 21.04c-1.34 2.4-3.84 4.14-6.68 4.8-1.4.34-2.88.5-4.33.43-1.45-.07-2.84-.37-4.13-.88-2.6-1.04-4.6-3-5.65-5.52.9-1.02 1.54-2.24 1.83-3.53-2.73-2.79-6.53-4.34-10.4-4.57h-.1c-1.1-.07-2.23.02-3.32.3-1.07.28-2.1.75-3.04 1.4C-2.8 1.9 4.5 4.8 4.93 8l.19 1.42c.36 1.18 1.03 2.22 1.92 3.13-2.73-2.79-6.53-4.34-10.4-4.57h-.1c-1.1-.07-2.23.02-3.32.3-1.07.28-2.1.75-3.04 1.4-2.8 1.9-4.5 4.8-4.93 8l-.19 1.42zM15.868 24.3c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zM24.7 21.04c-1.34 2.4-3.84 4.14-6.68 4.8-1.4.34-2.88.5-4.33.43-1.45-.07-2.84-.37-4.13-.88-2.6-1.04-4.6-3-5.65-5.52.9-1.02 1.54-2.24 1.83-3.53.53 1.62 1.4 3.1 2.5 4.35 1.15 1.3 2.53 2.33 4.08 3.03 2.8 1.25 5.82 1.5 8.65.65.52-.16.98-.37 1.4-.62l.02-.01zM28.16 6.3c1.34-2.4 3.84-4.14 6.68-4.8 1.4-.34 2.88-.5 4.33-.43 1.45.07 2.84.37 4.13.88 2.6 1.04 4.6 3 5.65 5.52-.9 1.02-1.54 2.24-1.83 3.53-.53-1.62-1.4-3.1-2.5-4.35-1.15-1.3-2.53-2.33-4.08-3.03-2.8-1.25-5.82-1.5-8.65-.65-.52.16-.98.37-1.4.62l-.02.01z" transform="rotate(30 16 16)" />
        </svg>
    )],
    title: "React App Development",
    description: "Create fast and interactive user interfaces with React. Ideal for modern SaaS platforms or single-page apps that prioritize user experience, responsiveness, and state management.",
  },
  {
    icons: [() => (
      <svg  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
        <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
        <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white" />
      </svg>
    )],
    title: "Angular App Development",
    description: "Develop dynamic and maintainable SPAs with Angular. Includes Angular Material UI, real-time updates via SignalR, and state management using NgRx. Perfect for dashboards, admin panels, and B2C platforms.",
  },
  {
    icons: [
      () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#e34f26" width="32" height="32"><path d="M4.333 26.634 6.643 3.328h18.714l-2.31 23.306-7.043 2.034-7.004-2.034zM16 5.432h-6.22l.334 3.33h5.886v.002zM12.22 12.1h-2.11l.223 2.22h1.887v.002zm-.334 3.33.223 2.22h3.89V15.43h-4.113zm4.113 4.44v2.22l-2.78.888-.11-.023-2.668-.865-.11-1.11h2.22l.11.555.445.11.445-.11.11-.777h-1.887v-2.22h4.332zM16 5.432v15.55l.022-.008 4.423-1.332.445-4.44h-2.11l-.222 2.22-2.555.777V5.433h-.001z"/></svg>,
      () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#1572b6" width="32" height="32"><path d="M6.643 3.328h18.714L23.047 28.67l-7.045 2.002-7.025-2.002L6.643 3.328zM16 17.77V5.433h6.108l-.444 4.44H16v2.222h3.22l-.333 3.333H16v2.345zm-1.11-8.885H9.558l.11 1.11h5.222v-1.11zm-.11 4.44H9.89l.11 1.11h4.89v-1.11z"/></svg>,
      () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#f7df1e" width="32" height="32"><path d="M32 0H0v32h32V0zM23.273 24.01c0 3.313-1.945 5.133-4.78 5.133-2.56 0-4.04-1.32-4.78-2.92l2.6-1.573c.5.88 1 1.64 2.053 1.64.973 0 1.707-.48 1.707-1.46v-5.12h-7.56v-2.44h9.76v9.74zM13.626 24.1c-2.513 0-3.92-1.187-4.7-2.654l2.6-1.573c.5.88 1 1.64 2.053 1.64.973 0 1.707-.48 1.707-1.46v-5.12h-7.56v-2.44h9.9v9.6c0 3.314-1.946 5.134-4.78 5.134z"/></svg>,
    ],
    title: "Static Web Design",
    description: "Craft simple, lightweight websites with blazing speed. Perfect for portfolios, landing pages, or NGOs. Technologies include HTML, CSS, Bootstrap, and Tailwind CSS with responsive and mobile-first layouts.",
  },
  {
    icons: [Server],
    title: "FTP & Deployment Management",
    description: "Manage seamless file transfers and deployments via FTP or cloud platforms. I handle everything from connecting to live servers, syncing code, and configuring domain setups for production-ready delivery.",
  },
  {
    icons: [Sheet],
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
            <Alert className="bg-primary/10 border-primary/30 text-primary-foreground">
              <AlertTriangle className="h-4 w-4 !text-primary" />
              <AlertTitle className="font-headline text-primary">Part-Time Availability Notice</AlertTitle>
              <AlertDescription className="text-primary/80">
                As a full-time developer at IBS Fulcro, Mumbai, I provide these services as part-time side hustles. I primarily work on these projects during weekends (Saturday & Sunday) and my free time at night. I enjoy this work and like to take the time to build things right. The prices or fees mentioned are rough market estimates and are always negotiable in my case.
              </AlertDescription>
            </Alert>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-4 rounded-full bg-primary/10 mb-4 transition-all duration-300 group-hover:scale-110 flex items-center justify-center gap-x-2">
                  {service?.icons?.map((Icon, idx) => (
                    <div key={idx} className={service.icons.length > 1 ? '-mx-1' : ''}>
                       <Icon />
                    </div>
                  ))}
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

    