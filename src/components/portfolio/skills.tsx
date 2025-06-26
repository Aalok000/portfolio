import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Terminal, ShieldCheck, GitBranch, Cpu } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import data from '@/data/portfolio.json';


interface Skill {
  name: string;
  level: number;
}

const icons: { [key: string]: React.ReactNode } = {
  programming: <Code className="h-6 w-6 text-primary" />,
  tools: <GitBranch className="h-6 w-6 text-primary" />,
  os: <Terminal className="h-6 w-6 text-primary" />,
  cybersecurity: <ShieldCheck className="h-6 w-6 text-primary" />,
  hardware: <Cpu className="h-6 w-6 text-primary" />,
};

const SkillCategory = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: Skill[] }) => (
  <Card className="bg-card/50 hover:border-primary/50 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_5px_hsl(var(--primary))]">
    <CardHeader>
      <div className="flex items-center gap-4">
        {icon}
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      {skills.map(skill => (
        <div key={skill.name}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2 [&>*]:bg-accent" />
        </div>
      ))}
    </CardContent>
  </Card>
);

const Skills = ({ id }: { id: string }) => {
  const skillsData = data.skills;
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Skills Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([key, category]) => (
          <SkillCategory key={key} title={category.title} icon={icons[key]} skills={category.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
