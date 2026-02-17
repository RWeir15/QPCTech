import Link from "next/link";
import { QPCLogo } from "./icons";

export function Footer() {
  return (
    <footer className="border-t bg-gray-800 text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
                 <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="flex items-center gap-2 mb-2 text-primary-foreground">
                       <QPCLogo className="w-28" />
                    </Link>
                    <p className="text-sm text-center md:text-left text-muted-foreground">
                    &copy; {new Date().getFullYear()} QPCTech. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="md:col-span-9">
                 <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-foreground">Services</h3>
                        <Link href="/services/network-infrastructure" className="text-muted-foreground hover:text-primary">Network Infrastructure</Link>
                        <Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary">Cybersecurity</Link>
                        <Link href="/services/managed-it-systems" className="text-muted-foreground hover:text-primary">Managed IT Systems</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Phone Systems</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Remote Support</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Physical Security</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Printing & Scanning</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Community Work</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-foreground">Office</h3>
                        <p className="text-muted-foreground">37 Waldron St<br />Hillsdale, MI 49242</p>
                        <div className="w-full h-px bg-border my-2"></div>
                        <h3 className="font-semibold text-primary-foreground">Contact Us</h3>
                        <a href="tel:5176105372" className="text-muted-foreground hover:text-primary">(517) 610-5372</a>
                        <a href="mailto:support@qpctech.com" className="text-muted-foreground hover:text-primary">support@qpctech.com</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-foreground">Links</h3>
                        <Link href="#" className="text-muted-foreground hover:text-primary">NinjaOne Portal</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Huntress Portal</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">UniFi Portal</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">ConnectWise Portal</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">Q-BITS Landing Page</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
