import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Zap } from 'lucide-react';

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
                <CardTitle className="font-headline text-2xl text-accent">Employment Express Verband LLP</CardTitle>
              </div>
              <CardDescription className="mt-1">Full-Stack Development Intern | Jan 2024 - Present</CardDescription>
            </div>
            <Badge variant="outline" className="border-accent text-accent">Priority for Recruiters</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            As a full-stack intern, I contributed to a high-impact project for a major client, focusing on enhancing application security and performance. My key responsibilities and achievements include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>
              <strong>Security Hardening:</strong> Implemented Content Security Policy (CSP) headers and other security best practices, reducing the risk of XSS attacks by 90%.
            </li>
            <li>
              <strong>AI Integration:</strong> Developed and integrated a GenAI-powered feature using Firebase and Google AI to personalize user content, resulting in a 25% increase in user engagement.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Refactored backend services and optimized database queries, leading to a 40% reduction in API response times.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default EmploymentExpress;
