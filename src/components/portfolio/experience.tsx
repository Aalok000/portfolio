import React from 'react';

const experiences = [
    {
    role: 'Member of BSides Noida',
    company: 'Cybersecurity Community',
    duration: 'December 2024 - Present',
    description: [
      'Active member of the BSides Noida cybersecurity community.',
      'Participate in various discussions, workshops, and networking sessions.',
      'Engage with industry experts to learn about real-world security challenges.',
      'Contribute to knowledge sharing and collaborative learning.',
    ],
  },
  {
    role: 'FCRF Summit 2k25 Volunteer',
    company: 'Cybersecurity Event',
    duration: 'February 2025',
    description: [
      'Assisted in organizing the FCRF Summit 2K25, a cybersecurity-focused event.',
      'Involved in event planning, speaker coordination, and technical support.',
      'Helped facilitate ethical hacking challenges and Capture The Flag (CTF) events.',
    ],
  },
];

const Experience = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-headline mb-12 text-center text-primary">Community & Volunteer Experience</h2>
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
