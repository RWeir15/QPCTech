"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { QPCLogo } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who we Are" },
  { href: "/contact", label: "Contact Us" },
];

const servicesLinks = [
  { href: "/services/managed-it-systems", label: "Managed IT Services" },
  { href: "/services/network-infrastructure", label: "Network Infrastructure" },
  { href: "/services/cybersecurity", label: "Cybersecurity" },
  { href: "/services/phone-systems", label: "Phone Systems" },
  { href: "/services/remote-support", label: "Remote Support" },
  { href: "/services/physical-security", label: "Physical Security" },
  { href: "/services/printing-and-scanning", label: "Printing & Scanning" },
  { href: "/services/community-work", label: "Community Work" },
];

export function Header() {
  const pathname = usePathname();

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
      {navLinks.slice(0, 1).map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary-foreground",
            pathname === href
              ? "text-primary-foreground"
              : "text-primary-foreground/70"
          )}
        >
          {label}
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "group text-sm font-medium transition-colors hover:bg-transparent hover:text-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0 px-2",
              pathname.startsWith("/services")
                ? "text-primary-foreground"
                : "text-primary-foreground/70"
            )}
          >
            Services
            <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 border-gray-700 text-primary-foreground">
          <DropdownMenuItem
            asChild
            className="cursor-pointer hover:!bg-black/20 focus:!bg-black/20"
          >
            <Link href="/services">All Services</Link>
          </DropdownMenuItem>
          {servicesLinks.map((link) => (
            <DropdownMenuItem
              key={link.href}
              asChild
              className="cursor-pointer hover:!bg-black/20 focus:!bg-black/20"
            >
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {navLinks.slice(1).map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary-foreground",
            pathname === href
              ? "text-primary-foreground"
              : "text-primary-foreground/70"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-background/10 bg-gray-800 text-gray-50">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <QPCLogo className="w-28 text-primary-foreground" />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <DesktopNav />
          <Button asChild>
            <Link
              href="https://qpctech.rmmservices.net/connect/#/9951961931"
              target="_blank"
              rel="noopener noreferrer"
            >
              Remote Support
            </Link>
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="mr-6 flex items-center gap-2">
                  <QPCLogo className="w-28" />
                </Link>
                <nav className="flex flex-col items-start gap-2 text-lg font-medium">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "transition-colors hover:text-primary w-full text-left p-2 rounded-md",
                          pathname === href
                            ? "text-primary bg-muted"
                            : "text-muted-foreground"
                        )}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          "transition-colors hover:text-primary w-full justify-between p-2 rounded-md text-muted-foreground hover:no-underline",
                          { "text-primary": pathname.startsWith("/services") }
                        )}
                      >
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-1 pl-4 mt-2">
                          <SheetClose asChild>
                            <Link
                              href="/services"
                              className={cn(
                                "transition-colors hover:text-primary p-2 rounded-md",
                                pathname === "/services"
                                  ? "text-primary bg-muted"
                                  : "text-muted-foreground"
                              )}
                            >
                              All Services
                            </Link>
                          </SheetClose>
                          {servicesLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                              <Link
                                href={link.href}
                                className={cn(
                                  "transition-colors hover:text-primary p-2 rounded-md",
                                  pathname === link.href
                                    ? "text-primary bg-muted"
                                    : "text-muted-foreground"
                                )}
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
                <Button asChild>
                  <Link
                    href="https://qpctech.rmmservices.net/connect/#/9951961931"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Remote Support
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
