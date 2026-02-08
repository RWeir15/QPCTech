"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { QPCLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/recommendation", label: "Recommendation Tool" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(href)
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <QPCLogo className="h-6 w-auto" />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <NavLinks />
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="mr-6 flex items-center gap-2">
                  <QPCLogo className="h-6 w-auto" />
                </Link>
                <NavLinks className="flex-col items-start space-x-0 space-y-2" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
