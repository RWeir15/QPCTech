import { RecommendationForm } from "./recommendation-form";

export const metadata = {
  title: "Service Recommendation Tool - QPCTech",
  description: "Use our AI-powered tool to find the perfect IT services for your business needs.",
};

export default function RecommendationPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Find the Right Solution
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Not sure where to start? Let our AI assistant guide you to the QPCTech
          services that best match your goals.
        </p>
      </div>

      <div className="mt-12">
        <RecommendationForm />
      </div>
    </div>
  );
}
