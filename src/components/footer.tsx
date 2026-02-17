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
                    <p className="text-sm text-center md:text-left text-white">
                    &copy; {new Date().getFullYear()} QPCTech. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="md:col-span-9">
                 <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Services</h3>
                        <Link href="/services/network-infrastructure" className="text-white hover:text-gray-300">Network Infrastructure</Link>
                        <Link href="/services/cybersecurity" className="text-white hover:text-gray-300">Cybersecurity</Link>
                        <Link href="/services/managed-it-systems" className="text-white hover:text-gray-300">Managed IT Systems</Link>
                        <Link href="/services/phone-systems" className="text-white hover:text-gray-300">Phone Systems</Link>
                        <Link href="/services/remote-support" className="text-white hover:text-gray-300">Remote Support</Link>
                        <Link href="/services/physical-security" className="text-white hover:text-gray-300">Physical Security</Link>
                        <Link href="/services/printing-and-scanning" className="text-white hover:text-gray-300">Printing & Scanning</Link>
                        <Link href="/services/community-work" className="text-white hover:text-gray-300">Community Work</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Office</h3>
                        <p className="text-white">37 Waldron St<br />Hillsdale, MI 49242</p>
                        <div className="w-full h-px bg-border my-2"></div>
                        <h3 className="font-semibold text-white">Contact Us</h3>
                        <a href="tel:5176105372" className="text-white hover:text-gray-300">(517) 610-5372</a>
                        <a href="mailto:support@qpctech.com" className="text-white hover:text-gray-300">support@qpctech.com</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white">Links</h3>
                        <Link href="#" className="text-white hover:text-gray-300">NinjaOne Portal</Link>
                        <Link href="#" className="text-white hover:text-gray-300">Huntress Portal</Link>
                        <Link href="#" className="text-white hover:text-gray-300">UniFi Portal</Link>
                        <Link href="#" className="text-white hover:text-gray-300">ConnectWise Portal</Link>
                        <Link href="#" className="text-white hover:text-gray-300">Q-BITS Landing Page</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
