import Link from "next/link";
import {
  Wrench,
  Laptop,
  Cpu,
  Printer,
  KeyRound,
  Hammer,
  Bug,
  Monitor,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const inStoreServices = [
  {
    Icon: Wrench,
    title: "Computer Repair",
    description: "We repair desktop and laptop PCs. We do not repair phones or tablets.",
  },
  {
    Icon: Laptop,
    title: "Computer Sales",
    description: "We purchase and refurbish computers and ensure they meet our quality standards.",
  },
  {
    Icon: Cpu,
    title: "Windows OS Upgrade",
    description: "Operating Systems need to stay up-to-date to ensure security vulnerabilities get patched.",
  },
  {
    Icon: Printer,
    title: "Printer Sales",
    description: "We have partnered with Printer Source Plus and sell quality EPSON printers.",
    href: "https://printersourceplus.com/",
  },
  {
    Icon: KeyRound,
    title: "Password Reset",
    description: "Forgot your computer login password? We have the tools to reset your password.",
  },
  {
    Icon: Hammer,
    title: "Hardware Installation / Upgrade",
    description: "Have a computer part that you don't feel comfortable to install yourself? Let our professional technicians handle the daunting task!",
  },
  {
    Icon: Bug,
    title: "Virus Removal",
    description: "We can detect and remove footholds created by viruses.",
  },
  {
    Icon: Monitor,
    title: "Custom PC Builds",
    description: "We build custom computers for gaming or specialized workloads. Contact us to plan a new build!",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="in-store-services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              In Store Services
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {inStoreServices.map((service) => {
              const cardContent = (
                <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <service.Icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="font-headline text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
              
              if (service.href) {
                return (
                  <Link href={service.href} key={service.title} target="_blank" rel="noopener noreferrer">
                    {cardContent}
                  </Link>
                )
              }

              return <div key={service.title}>{cardContent}</div>;
            })}
          </div>
        </div>
      </section>

      <section id="location" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where we are Located
            </h2>
          </div>
          <div className="aspect-video">
            <iframe
              loading="lazy"
              className="w-full h-full rounded-xl"
              src="https://maps.google.com/maps?q=QPCTech&t=m&z=16&output=embed&iwloc=near"
              title="QPCTech"
              aria-label="QPCTech"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
