"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { QPCLogo } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Who we Are" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();

  const DesktopNavLinks = () => (
    <nav className={cn("flex items-center gap-4 lg:gap-6")}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
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
    <header className="sticky top-0 z-50 w-full border-b border-background/10 bg-foreground">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <QPCLogo className="w-28 text-primary-foreground" />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <DesktopNavLinks />
           <Button asChild>
            <Link href="https://qpctech.rmmservices.net/connect/#/9951961931" target="_blank" rel="noopener noreferrer">
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
                <nav className="flex flex-col items-start gap-4">
                    {navLinks.map(({ href, label }) => (
                        <Link
                        key={href}
                        href={href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                        >
                        {label}
                        </Link>
                    ))}
                </nav>
                <Button asChild>
                    <Link href="https://qpctech.rmmservices.net/connect/#/9951961931" target="_blank" rel="noopener noreferrer">
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
