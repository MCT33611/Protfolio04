
"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern UI, product management, and a secure checkout process.",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website Builder",
    description: "A SaaS application that allows creatives to build and deploy their own portfolio websites without writing code.",
    tags: ["React", "SaaS", "Firebase", "Node.js"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website builder",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Data Visualization Dashboard",
    description: "An analytics dashboard for a marketing firm, displaying complex data through interactive charts and graphs.",
    tags: ["Data Viz", "D3.js", "GraphQL", "React"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
    liveUrl: "#",
    githubUrl: "#"
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:pl-24">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Projects & Highlights</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto lg:pl-24">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent>
                {projectsData.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                    <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden group h-full flex flex-col">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            data-ai-hint={project.imageHint}
                            className="rounded-t-2xl object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        />
                        <CardContent className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                            <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{project.description}</p>
                            <div className="flex items-center gap-4 mt-auto pt-4">
                                <Button asChild variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary/20">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> GitHub
                                    </a>
                                </Button>
                                <Button asChild variant="default" size="sm" className="rounded-full">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
             <div className="flex justify-center items-center gap-4 mt-8">
                <CarouselPrevious />
                <CarouselNext />
            </div>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
