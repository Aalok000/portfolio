import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const EmploymentExpress = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
       <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center text-primary">Featured Experience</h2>
      <Card className="border-accent shadow-lg shadow-accent/10">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-3">
                 <Briefcase className="w-8 h-8 text-accent"/>
                <CardTitle className="font-headline text-2xl text-accent">Cyber Security Intern</CardTitle>
              </div>
              <CardDescription className="mt-1">Employment Express Verband LLP | June 2024 - July 2024</CardDescription>
            </div>
            <Badge variant="outline" className="border-accent text-accent">Priority for Recruiters</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            During my internship, I immersed myself in the dynamic field of cybersecurity, focusing on practical vulnerability assessment and penetration testing.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>
              <strong>Vulnerability Assessment:</strong> Performed assessments on internal applications using TryHackMe labs to identify and understand security weaknesses.
            </li>
            <li>
              <strong>Hands-on Pentesting:</strong> Practiced identifying XSS, SQLi, and IDOR vulnerabilities and utilized tools like Nmap, Burp Suite, and Metasploit for simulated testing.
            </li>
            <li>
              <strong>Project Presentation:</strong> Developed and delivered a comprehensive PowerPoint presentation on key cybersecurity topics as a part of my internship project.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default EmploymentExpress;
