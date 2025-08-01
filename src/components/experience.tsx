import { Building, GraduationCap, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const experienceData = [
  {
    type: 'work',
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    date: "2020 - Present",
    description: "Led the development of scalable web applications using React and Next.js. Mentored junior developers and improved code quality across the team."
  },
  {
    type: 'work',
    title: "UI/UX Designer",
    company: "Creative Minds Agency",
    date: "2018 - 2020",
    description: "Designed user-centric interfaces for mobile and web applications. Conducted user research and usability testing to inform design decisions."
  },
  {
    type: 'education',
    title: "B.Sc. in Computer Science",
    company: "University of Technology",
    date: "2014 - 2018",
    description: "Graduated with honors. Focused on human-computer interaction, software engineering, and artificial intelligence."
  }
];

export function About() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my professional and educational background.
            </p>
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border rounded-full"></div>
          {experienceData.map((item, index) => (
            <div key={index} className={`relative mb-8 flex items-center w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 200}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <Card className={`transition-all duration-300 hover:shadow-xl hover:border-accent ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <CardHeader>
                    <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {item.type === 'work' ? <Building className="w-6 h-6 text-accent" /> : <GraduationCap className="w-6 h-6 text-accent" />}
                        <CardTitle className="text-xl font-bold font-headline">{item.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{item.company}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-3 h-3"/>
                      <span>{item.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
