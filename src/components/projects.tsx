"use client"

import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern UI, product management, and a secure checkout process.",
    details: "Built with Next.js, TypeScript, and Stripe for payments. The backend is a custom Node.js API with a PostgreSQL database. Deployed on Vercel.",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website Builder",
    description: "A SaaS application that allows creatives to build and deploy their own portfolio websites without writing code.",
    details: "Leveraged server-side rendering for SEO and performance. Included a drag-and-drop interface and multiple templates.",
    tags: ["React", "SaaS", "Firebase", "Node.js"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website builder",
    liveUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An analytics dashboard for a marketing firm, displaying complex data through interactive charts and graphs.",
    details: "Used D3.js and Recharts to create dynamic and responsive visualizations. Data is fetched in real-time from a GraphQL API.",
    tags: ["Data Viz", "D3.js", "GraphQL", "React"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Creative Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of. Each card expands to show more details about the project.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {projectsData.map((project, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-none">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <AccordionTrigger className="p-0 [&[data-state=open]>div>div>svg]:rotate-180">
                    <CardContent className="p-6 w-full">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={600}
                          height={400}
                          data-ai-hint={project.imageHint}
                          className="rounded-lg object-cover"
                        />
                        <div className="space-y-4 text-left">
                          <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                          </div>
                          <p className="text-muted-foreground">{project.description}</p>
                          <div className="flex items-center text-sm font-medium text-accent">
                            Click to expand
                            <svg className="h-4 w-4 ml-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground mb-4">{project.details}</p>
                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent font-semibold hover:underline">
                        View Live Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
