import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services - QPCTech",
  description: "Explore the comprehensive IT services offered by QPCTech.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our IT Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From managed IT and cybersecurity to cloud solutions, we provide the
            expertise to keep your business ahead of the curve.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {services.map((service) => {
            return (
              <Card key={service.id} className="flex flex-col transition-shadow duration-300 hover:shadow-xl">
                 <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.Icon className="w-10 h-10 text-primary" />
                    <div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-1">{service.shortDescription}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                </CardContent>
                <CardFooter>
                   <Button asChild className="w-full font-semibold">
                    <Link href={`/services/${service.slug}`}>
                        View Details <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
