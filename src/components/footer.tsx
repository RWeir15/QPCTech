import Link from "next/link";
import { QPCLogo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <QPCLogo className="h-6 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} QPCTech. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Company</h3>
              <Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Tools</h3>
              <Link href="/recommendation" className="text-muted-foreground hover:text-primary">Recommendation Tool</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Legal</h3>
              <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
