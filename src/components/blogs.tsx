
"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MoveLeft, MoveRight } from 'lucide-react';

const blogsData = [
  {
    title: "What does it take to become a web developer?",
    description: "Explore the journey of becoming a web developer, from learning the basics to landing your first job. This post covers essential skills, resources, and tips for aspiring developers.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "coding on laptop",
    liveUrl: "#",
  },
  {
    title: "My Favorite UI/UX Design Trends for 2024",
    description: "A look into the most exciting UI/UX design trends that are shaping the digital landscape in 2024. From brutalism to glassmorphism, we cover it all.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "design trends",
    liveUrl: "#",
  },
    {
    title: "A Deep Dive into React Server Components",
    description: "Understand the power of React Server Components and how they are changing the way we build modern web applications with frameworks like Next.js.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "react code",
    liveUrl: "#",
  },
];

export function Blogs() {
  return (
    <section id="blogs" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Blogs</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My thoughts on design, development, and everything in between.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogsData.slice(0, 2).map((blog, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden group">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={600}
                        height={400}
                        data-ai-hint={blog.imageHint}
                        className="rounded-t-2xl object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                    />
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-headline mb-2">{blog.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{blog.description}</p>
                        <a href={blog.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:underline">
                            Read More <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </CardContent>
                </Card>
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 mt-12">
                <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/20">
                    <MoveLeft />
                </Button>
                 <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/20">
                    View All
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/20">
                    <MoveRight />
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
