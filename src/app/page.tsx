import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  const features = [
    {
      Icon: Zap,
      title: "Proactive Support",
      description: "We identify and resolve IT issues before they impact your business, ensuring maximum uptime.",
    },
    {
      Icon: ShieldCheck,
      title: "Ironclad Security",
      description: "Our multi-layered security approach protects your critical data from ever-evolving threats.",
    },
    {
      Icon: Cpu,
      title: "Expert Team",
      description: "Access a dedicated team of certified IT professionals with extensive industry experience.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Reliable IT Solutions for Modern Business
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            QPCTech delivers expert IT services that drive growth, enhance
            security, and boost efficiency. Let us handle your technology, so you
            can focus on what you do best.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/recommendation">
                Get Started <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Comprehensive IT solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
              return (
                <Card key={service.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    {serviceImage && (
                      <div className="aspect-video relative">
                        <Image
                          src={serviceImage.imageUrl}
                          alt={serviceImage.description}
                          width={600}
                          height={400}
                          className="object-cover"
                          data-ai-hint={serviceImage.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <service.Icon className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-xl">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild variant="link" className="px-0 font-semibold">
                      <Link href={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Partner with QPCTech?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're more than just an IT provider; we're your strategic partner in technology, committed to your success.
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <feature.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 w-full lg:h-96">
                <Image
                    src="https://picsum.photos/seed/200/600/400"
                    alt="Team of professionals working"
                    className="rounded-xl object-cover"
                    fill
                    data-ai-hint="teamwork collaboration"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
