import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Terminal, ShieldCheck, GitBranch } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
}

const skillsData = {
  programming: {
    title: 'Languages & Scripting',
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Shell Scripting', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'C', level: 70 },
    ],
  },
  tools: {
    title: 'Security Tools & Frameworks',
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Burp Suite', level: 90 },
      { name: 'Nmap', level: 85 },
      { name: 'Metasploit', level: 80 },
      { name: 'Wireshark', level: 75 },
      { name: 'Nessus', level: 70 },
      { name: 'OWASP ZAP', level: 70 },
    ],
  },
  os: {
    title: 'Operating Systems',
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Kali Linux', level: 95 },
      { name: 'Windows', level: 80 },
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity Concepts',
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'VAPT', level: 90 },
      { name: 'Web Application Security', level: 85 },
      { name: 'OWASP Top 10', level: 85 },
      { name: 'Network Security', level: 80 },
      { name: 'Manual Testing', level: 75 },
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
