export const metadata = {
  title: "Who we Are - QPCTech",
  description: "Learn more about QPCTech, our mission, and our team.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Who We Are
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are QPCTech, a dedicated team of IT professionals committed to providing reliable technology solutions.
        </p>
      </div>
    </div>
  );
}
