import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush, Database, Server, Component } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Skill = {
  name: string;
  Icon: LucideIcon;
};

const skillsData: { category: string, Icon: LucideIcon, skills: Skill[] }[] = [
  {
    category: "Frontend",
    Icon: Brush,
    skills: [
      { name: "React", Icon: Component },
      { name: "Next.js", Icon: Component },
      { name: "HTML5", Icon: Code },
      { name: "CSS3 & Tailwind", Icon: Code },
      { name: "TypeScript", Icon: Code },
    ]
  },
  {
    category: "Backend",
    Icon: Server,
    skills: [
      { name: "Node.js", Icon: Server },
      { name: "Express", Icon: Server },
      { name: "Python", Icon: Code },
      { name: "GraphQL", Icon: Database },
      { name: "REST APIs", Icon: Database },
    ]
  },
  {
    category: "Databases",
    Icon: Database,
    skills: [
      { name: "PostgreSQL", Icon: Database },
      { name: "MongoDB", Icon: Database },
      { name: "Firebase", Icon: Database },
    ]
  },
];


export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies and tools I'm proficient with.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card key={category.category} className="animate-in fade-in zoom-in-95 duration-500 delay-150">
              <CardHeader className="flex flex-row items-center gap-4">
                <category.Icon className="w-8 h-8 text-accent" />
                <CardTitle className="font-headline">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm transition-all hover:bg-accent/20 hover:scale-105 cursor-pointer">
                      <skill.Icon className="w-4 h-4 text-muted-foreground" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
