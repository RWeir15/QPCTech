import Link from "next/link";
import { QPCLogo } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-gray-800 text-gray-200">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
                 <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="flex items-center gap-2 mb-2">
                       <QPCLogo className="w-28" />
                    </Link>
                    <p className="text-sm text-center md:text-left text-gray-400">
                    &copy; {new Date().getFullYear()} QPCTech. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="md:col-span-9">
                 <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-gray-50">Services</h3>
                        <Link href="/services/network-infrastructure" className="hover:text-gray-50">Network Infrastructure</Link>
                        <Link href="/services/cybersecurity" className="hover:text-gray-50">Cybersecurity</Link>
                        <Link href="/services/managed-it" className="hover:text-gray-50">Managed IT Systems</Link>
                        <Link href="#" className="hover:text-gray-50">Phone Systems</Link>
                        <Link href="#" className="hover:text-gray-50">Remote Support</Link>
                        <Link href="#" className="hover:text-gray-50">Physical Security</Link>
                        <Link href="#" className="hover:text-gray-50">Printing & Scanning</Link>
                        <Link href="#" className="hover:text-gray-50">Community Work</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-gray-50">Office</h3>
                        <p>37 Waldron St<br />Hillsdale, MI 49242</p>
                        <div className="w-full h-px bg-gray-700 my-2"></div>
                        <h3 className="font-semibold text-gray-50">Contact Us</h3>
                        <a href="tel:5176105372" className="hover:text-gray-50">(517) 610-5372</a>
                        <a href="mailto:support@qpctech.com" className="hover:text-gray-50">support@qpctech.com</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-gray-50">Links</h3>
                        <Link href="#" className="hover:text-gray-50">NinjaOne Portal</Link>
                        <Link href="#" className="hover:text-gray-50">Huntress Portal</Link>
                        <Link href="#" className="hover:text-gray-50">UniFi Portal</Link>
                        <Link href="#" className="hover:text-gray-50">ConnectWise Portal</Link>
                        <Link href="#" className="hover:text-gray-50">Q-BITS Landing Page</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
