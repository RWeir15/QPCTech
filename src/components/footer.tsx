import Link from "next/link";
import { QPCLogo } from "./icons";

export function Footer() {
  return (
    <footer className="border-t bg-gray-800 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
                 <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="flex items-center gap-2 mb-2">
                       <QPCLogo className="w-28" />
                    </Link>
                    <p className="text-sm text-center md:text-left text-white/70">
                    &copy; {new Date().getFullYear()} QPCTech. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="md:col-span-9">
                 <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Services</h3>
                        <Link href="/services/network-infrastructure" className="text-white/70 hover:text-white">Network Infrastructure</Link>
                        <Link href="/services/cybersecurity" className="text-white/70 hover:text-white">Cybersecurity</Link>
                        <Link href="/services/managed-it-systems" className="text-white/70 hover:text-white">Managed IT Systems</Link>
                        <Link href="/services/phone-systems" className="text-white/70 hover:text-white">Phone Systems</Link>
                        <Link href="/services/remote-support" className="text-white/70 hover:text-white">Remote Support</Link>
                        <Link href="/services/physical-security" className="text-white/70 hover:text-white">Physical Security</Link>
                        <Link href="/services/printing-and-scanning" className="text-white/70 hover:text-white">Printing & Scanning</Link>
                        <Link href="/services/community-work" className="text-white/70 hover:text-white">Community Work</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Office</h3>
                        <p className="text-white/70">37 Waldron St<br />Hillsdale, MI 49242</p>
                        <div className="w-full h-px bg-border my-2"></div>
                        <h3 className="font-semibold text-white">Contact Us</h3>
                        <a href="tel:5176105372" className="text-white/70 hover:text-white">(517) 610-5372</a>
                        <a href="mailto:support@qpctech.com" className="text-white/70 hover:text-white">support@qpctech.com</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Links</h3>
                        <Link href="#" className="text-white/70 hover:text-white">NinjaOne Portal</Link>
                        <Link href="#" className="text-white/70 hover:text-white">Huntress Portal</Link>
                        <Link href="#" className="text-white/70 hover:text-white">UniFi Portal</Link>
                        <Link href="#" className="text-white/70 hover:text-white">ConnectWise Portal</Link>
                        <Link href="#" className="text-white/70 hover:text-white">Q-BITS Landing Page</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
