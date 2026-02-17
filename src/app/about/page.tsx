import { Linkedin, Mail, Facebook } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Who we Are - QPCTech',
  description: 'Learn more about QPCTech, our mission, and our team.',
};

const teamMembers = [
    {
        name: 'Tim Lindley',
        position: 'Owner / Senior Technician',
        bio: 'Tim attended Jackson College, Spring Arbor University, and New Tribes Bible Institute.',
        certifications: [
            'MS Certified Technology Specialist',
            'MCTS 70-673',
            'MCTS 4-678',
            'ITIL V3 Foundations'
        ],
        socials: [
            { Icon: Linkedin, href: 'https://linkedin.com/' },
        ]
    },
    {
        name: 'Kimberly Lindley',
        position: 'Office Manager',
        bio: null,
        certifications: [],
        socials: [
            { Icon: Facebook, href: 'https://www.facebook.com/Qualitypcllc/' },
        ]
    },
    {
        name: 'Noah Pann',
        position: 'Technician',
        bio: 'Completed the cybersecurity program at Hillsdale Area Career Center.',
        certifications: [
            'CompTIA ITF+',
            'CompTIA PC Pro',
            'CompTIA Linux Pro',
            'CompTIA Security+',
            'CompTIA Networking Pro',
            'CompTIA CyberDefense Pro',
            'CompTIA Ethical Hacker'
        ],
        socials: [
             { Icon: Facebook, href: 'https://www.facebook.com/Qualitypcllc/' },
        ]
    },
    {
        name: 'Nolan Korman',
        position: 'IT System Specialist',
        bio: 'Completed the cybersecurity program at Jackson Area Career Center.',
        certifications: [
            'ITF+',
            'TestOut PC Pro',
            'TestOut Security Pro'
        ],
        socials: [
            { Icon: Mail, href: 'mailto:nolan@qpctech.com' },
        ]
    },
    {
        name: 'Jeremy Griffiths',
        position: 'Technician',
        bio: 'Completed the cybersecurity program at Hillsdale Area Career Center.',
        certifications: [
            'TestOut'
        ],
        socials: [
             { Icon: Facebook, href: 'https://www.facebook.com/Qualitypcllc/' },
        ]
    }
];

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Meet The Team
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          At QPCTech, our veteran staff embodies values such as professionalism, honesty, integrity, and education. We work diligently to create and maintain a meaningful relationship with you in order to quickly analyze technical issues and provide you with a more personal level of service. Read on to learn more about our hardworking team.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
              <CardDescription>{member.position}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col space-y-4">
              <div className="flex-grow">
                {member.bio && <p className="text-muted-foreground">{member.bio}</p>}
                {member.certifications && member.certifications.length > 0 && (
                  <div className="mt-4">
                    <p className="text-muted-foreground font-semibold">Certifications:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                      {member.certifications.map((cert) => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex gap-2 pt-4">
                {member.socials.map(({Icon, href}) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Icon className="h-5 w-5" />
                    </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
