import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fb38b36ed8d244fffadd179bb37229fcc%2F623bf500355d4f2bbc100b3d36d24461?format=webp&width=96" alt="Seminant logo" className="h-9 w-9 rounded-sm object-contain" loading="eager" fetchPriority="high" />
          <span className="text-lg font-bold tracking-tight">Seminant Business Setup & Auditing</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/why-middle-east"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )
            }
          >
            Why Middle East
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              Sectors <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link to="/setup">Business Setup</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/compliance">Compliance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/tax-legal">Tax & Legal</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/ip">Brand & IP</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            to="/sectors"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )
            }
          >
            Sectors Overview
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                isActive && "text-foreground",
              )
            }
          >
            Blogs
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white/95 px-4 py-3 md:hidden dark:bg-background">
          <div className="container mx-auto grid gap-2">
            <Link to="/why-middle-east" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Why Middle East</Link>
            <div className="rounded-md px-2 py-2 text-xs font-semibold uppercase text-muted-foreground">Sectors</div>
            <Link to="/setup" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Business Setup</Link>
            <Link to="/compliance" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Compliance</Link>
            <Link to="/tax-legal" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Tax & Legal</Link>
            <Link to="/ip" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Brand & IP</Link>
            <Link to="/sectors" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Sectors Overview</Link>
            <Link to="/services" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Services</Link>
            <Link to="/blogs" className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent">Blogs</Link>
            <Button asChild size="sm" className="justify-self-start">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
