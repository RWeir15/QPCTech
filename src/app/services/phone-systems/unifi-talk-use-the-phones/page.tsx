import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "UniFi Talk - Use the Phones - QPCTech",
  description: "Learn how to use UniFi Talk phones.",
};

export default function UniFiTalkPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                UniFi Talk - Use the Phones
            </h1>
        </header>

        <div className="text-black space-y-8">
            <p className="text-lg text-center">
            Content for this page is coming soon.
            </p>
        </div>

        <nav className="mt-12" aria-label="Page navigation">
          <Button asChild variant="outline">
            <Link href="/services/phone-systems">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Phone Systems
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
