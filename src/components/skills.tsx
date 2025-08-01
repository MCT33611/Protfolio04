import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush, Database, Server, Component, Settings, BrainCircuit, Sheet, Network, GitBranch } from 'lucide-react';
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
      { name: "Angular", level: 75 },
      { name: "TypeScript", level: 75 },
    ]
  },
  {
    category: "Backend & Databases",
    Icon: Database,
    skills: [
        { name: ".NET", level: 95 },
        { name: "C#", level: 95 },
        { name: "SQL Server", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 70 },
    ]
  },
  {
    category: "UI/UX Design",
    Icon: Brush,
    skills: [
      { name: "Figma", level: 90 },
    ]
  },
];

const otherSkills = [
  { name: "API Development", Icon: Settings },
  { name: "Excel Sheet", Icon: Sheet },
];

export function Skills() {
  return (
    <section 
      id="skills" 
      className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20 relative"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/codepen.png")`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-6 relative lg:pl-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Tech Proficiency</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              My technical level and experience in various fields.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
               {skillsData.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3"><category.Icon className="w-6 h-6 text-primary"/> {category.category}</h3>
                    <div className="space-y-5">
                      {category.skills.map(skill => (
                        <div key={skill.name} className="flex items-center gap-4">
                          <span className="w-28 text-muted-foreground text-right">{skill.name}</span>
                          <div className="flex-1 h-2 bg-secondary rounded-full">
                            <div className="h-2 bg-primary rounded-full animate-in fade-in-right" style={{ width: `${skill.level}%`, animationDelay: `${skill.level * 5}ms`, animationDuration: '1s' }}></div>
                          </div>
                          <span className="w-10 text-left text-muted-foreground">{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
            <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3"><GitBranch className="w-6 h-6 text-primary" /> Tools & Other Skills</h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {otherSkills.map((skill) => (
                        <Card key={skill.name} className="bg-card/50 backdrop-blur-sm border-primary/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center hover:bg-primary/10 transition-colors">
                            <skill.Icon className="w-8 h-8 text-primary mb-2" />
                            <h4 className="text-md font-semibold">{skill.name}</h4>
                        </Card>
                      ))}
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
