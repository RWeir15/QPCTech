import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-primary-foreground/70">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
                 <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="flex items-center gap-2 mb-2">
                       <Image src="https://www.qpctech.com/wp-content/uploads/2024/03/QPCTech-logo-white.png" alt="QPCTech Logo" width={120} height={64} />
                    </Link>
                    <p className="text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} QPCTech. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="md:col-span-9">
                 <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-foreground">Services</h3>
                        <Link href="/services/network-infrastructure" className="hover:text-primary-foreground">Network Infrastructure</Link>
                        <Link href="/services/cybersecurity" className="hover:text-primary-foreground">Cybersecurity</Link>
                        <Link href="/services/managed-it" className="hover:text-primary-foreground">Managed IT Systems</Link>
                        <Link href="#" className="hover:text-primary-foreground">Phone Systems</Link>
                        <Link href="#" className="hover:text-primary-foreground">Remote Support</Link>
                        <Link href="#" className="hover:text-primary-foreground">Physical Security</Link>
                        <Link href="#" className="hover:text-primary-foreground">Printing & Scanning</Link>
                        <Link href="#" className="hover:text-primary-foreground">Community Work</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-foreground">Office</h3>
                        <p>37 Waldron St<br />Hillsdale, MI 49242</p>
                        <div className="w-full h-px bg-border my-2"></div>
                        <h3 className="font-semibold text-primary-foreground">Contact Us</h3>
                        <a href="tel:5176105372" className="hover:text-primary-foreground">(517) 610-5372</a>
                        <a href="mailto:support@qpctech.com" className="hover:text-primary-foreground">support@qpctech.com</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-primary-foreground">Links</h3>
                        <Link href="#" className="hover:text-primary-foreground">NinjaOne Portal</Link>
                        <Link href="#" className="hover:text-primary-foreground">Huntress Portal</Link>
                        <Link href="#" className="hover:text-primary-foreground">UniFi Portal</Link>
                        <Link href="#" className="hover:text-primary-foreground">ConnectWise Portal</Link>
                        <Link href="#" className="hover:text-primary-foreground">Q-BITS Landing Page</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
