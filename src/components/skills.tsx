import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush, Database, Server, Component, Settings, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
};

const skillsData: { category: string, Icon: LucideIcon, skills: Skill[] }[] = [
  {
    category: "Web Development",
    Icon: Code,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ]
  },
   {
    category: "UI/UX Design",
    Icon: Brush,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Sketch", level: 80 },
      { name: "Adobe XD", level: 75 },
    ]
  },
  {
    category: "Backend",
    Icon: Server,
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Python", level: 65 },
      { name: "PHP", level: 60 },
      { name: "SQL", level: 75 },
    ]
  },
];

const otherSkills = [
  { name: "API Development", Icon: Settings },
  { name: "App Development", Icon: Component },
];


export function Skills() {
  return (
    <section 
      id="skills" 
      className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20 relative"
      style={{
        backgroundImage: `url('https://placehold.co/1920x1080.png')`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Skills</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              My technical level and experience in various fields.
            </p>
          </div>

          <div className="flex-1 w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {otherSkills.map((skill) => (
                  <Card key={skill.name} className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl flex items-center p-6 gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <skill.Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </Card>
              ))}
            </div>

            <div className="mt-8 space-y-6">
               {skillsData.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.skills.map(skill => (
                        <div key={skill.name} className="flex items-center gap-4">
                          <span className="w-24 text-muted-foreground">{skill.name}</span>
                          <div className="flex-1 h-2 bg-secondary rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                          </div>
                          <span className="w-10 text-right text-muted-foreground">{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}