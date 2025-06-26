import React from 'react';

const experiences = [
  {
    role: 'Cybersecurity Analyst Intern',
    company: 'SecureNet Solutions',
    duration: 'June 2023 - August 2023',
    description: [
      'Assisted in vulnerability assessments and penetration testing for client web applications.',
      'Monitored security alerts and helped investigate potential security incidents.',
      'Contributed to the development of internal security tools using Python.',
    ],
  },
  {
    role: 'IT Support Volunteer',
    company: 'Community Tech Center',
    duration: 'September 2022 - May 2023',
    description: [
      'Provided technical support and troubleshooting for hardware and software issues.',
      'Assisted in setting up and maintaining the center\'s local network.',
      'Conducted workshops on basic computer literacy and online safety for the community.',
    ],
  },
];

const Experience = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-12 text-center text-primary">Experience</h2>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="p-6 rounded-lg shadow-lg bg-card border border-border hover:border-primary/50 transition-colors duration-300">
                  <h3 className="font-headline text-xl text-accent">{exp.role}</h3>
                  <p className="font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
