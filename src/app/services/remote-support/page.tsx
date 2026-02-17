import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Remote Support - QPCTech",
  description: "Access the QPCTech remote support portal to get fast and reliable assistance from our experts.",
};

export default function RemoteSupportPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
          Remote Support Portal
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Click the button below to access our secure remote support portal. Please have your support key ready if one was provided by our technicians.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link
              href="https://qpctech.rmmservices.net/connect/#/9951961931"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Remote Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
