import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Terminal, Server, ShieldCheck, Database, GitBranch, Cloud } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
}

const skillsData = {
  programming: {
    title: 'Programming & Databases',
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'SQL / NoSQL', level: 80 },
      { name: 'Bash', level: 75 },
    ],
  },
  tools: {
    title: 'Frameworks & Tools',
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Git / GitHub', level: 95 },
    ],
  },
  os: {
    title: 'Operating Systems & Cloud',
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Linux (Debian/Arch)', level: 95 },
      { name: 'Windows Server', level: 80 },
      { name: 'macOS', level: 70 },
      { name: 'Firebase / GCP', level: 75 },
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity Concepts',
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Network Security', level: 85 },
      { name: 'Penetration Testing (Wireshark, Nmap)', level: 80 },
      { name: 'Cryptography', level: 75 },
      { name: 'Digital Forensics', level: 70 },
    ],
  },
};

const SkillCategory = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: Skill[] }) => (
  <Card className="bg-card/50 hover:border-primary/50 transition-colors duration-300">
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
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Skills Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <SkillCategory {...skillsData.programming} />
        <SkillCategory {...skillsData.tools} />
        <SkillCategory {...skillsData.os} />
        <SkillCategory {...skillsData.cybersecurity} />
      </div>
    </section>
  );
};

export default Skills;
