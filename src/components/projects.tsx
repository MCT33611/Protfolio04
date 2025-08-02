
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
import { ProjectPreview } from './project-preview';


const projectsData = [
  {
    title: "Craftify - Service Marketplace Platform",
    description:
      "A full-stack service marketplace with roles for customers, workers, and admins. Features include real-time chat using SignalR, Razorpay integration, admin dashboard with charts, and a robust backend with CQRS, Mediator, and Clean Architecture.",
    tags: ["Angular", "ASP.NET Web API", "Tailwind CSS", "SignalR", "NGRX", "CQRS", "AWS", "Chart.js"],
    imageUrl: "https://placehold.co/600x400.png?text=Craftify",
    imageHint: "service marketplace",
    liveUrl: "https://app.craftify.life",
    githubUrl: "https://github.com/MCT33611/Ng-Craftify.git"
  },
  {
    title: "Plant Palace - E-Commerce Platform",
    description:
      "A full-featured .NET MVC e-commerce platform for plants and gardening items. Features include wishlist, cart, category-based search, product reviews, Stripe payment gateway, and admin dashboard with analytics.",
    tags: [".NET MVC", "Razor Pages", "SQL Server", "EF Core", "Bootstrap", "jQuery", "Stripe", "Chart.js"],
    imageUrl: "https://placehold.co/600x400.png?text=Plant+Palace",
    imageHint: "online plant shopping",
    liveUrl: "http://plantpalace.craftify.life",
    githubUrl: "https://github.com/MCT33611/PlantPalace.git"
  },
  {
    title: "AFC - Ashmi Fitness Challenge Website",
    description:
      "A responsive landing page for Ashmi Fitness Challenge built with React and Tailwind CSS. Includes trainer profiles, registration, smooth scrolling, and dynamic content rendering. Hosted on Vercel.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    imageUrl: "https://placehold.co/600x400.png?text=Ashmi+Fitness",
    imageHint: "fitness website",
    liveUrl: "https://ashmifitness.com",
    githubUrl: "https://github.com/MCT33611/AFC.git"
  },
  {
    title: "Tha’avun - Community Organization Website",
    description:
      "A static website for a community organization using HTML, CSS, and Bootstrap. Integrated Google Drive API for dynamic content updates and hosted on GitHub Pages.",
    tags: ["HTML", "CSS", "Bootstrap", "Google Drive API"],
    imageUrl: "https://placehold.co/600x400.png?text=Thaavun",
    imageHint: "community organization",
    liveUrl: "https://thaavun.online",
    githubUrl: "https://github.com/MCT33611/thaavan.git"
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="lg:pl-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
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
            <div className="max-w-5xl mx-auto">
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
                            <ProjectPreview 
                                liveUrl={project.liveUrl}
                                imageUrl={project.imageUrl}
                                imageHint={project.imageHint}
                                title={project.title}
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
      </div>
    </section>
  );
}
