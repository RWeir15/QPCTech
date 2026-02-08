import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, DollarSign } from "lucide-react";
import { services } from "@/lib/data";
import type { Service } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceSummary } from "./service-summary";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) {
        return {
            title: "Service Not Found"
        }
    }
    return {
        title: `${service.title} - QPCTech`,
        description: service.shortDescription,
    }
}

const AISummarySkeleton = () => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-48" />
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </CardContent>
    </Card>
)

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { Icon, title, longDescription, benefits, pricing, imageId } = service;
  const serviceImage = PlaceHolderImages.find((p) => p.id === imageId);

  return (
    <div className="container py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-start gap-4 mb-6">
            <Icon className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Service</p>
              <h1 className="font-headline text-4xl font-bold">{title}</h1>
            </div>
          </div>
          
          {serviceImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                data-ai-hint={serviceImage.imageHint}
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p>{longDescription}</p>
          </div>
        </div>
        <aside className="lg:col-span-2 space-y-8">
            <Suspense fallback={<AISummarySkeleton />}>
                <ServiceSummary description={longDescription} />
            </Suspense>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span>Key Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <DollarSign className="h-6 w-6 text-primary" />
                <span>Pricing Model</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-lg">{pricing.model}</h4>
              <p className="text-muted-foreground mt-1">{pricing.details}</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
