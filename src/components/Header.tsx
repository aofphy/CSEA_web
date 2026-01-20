import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Committee", href: "#committee" },
  {
    label: "Conferences",
    href: "#conferences",
    children: [
      { label: "ANSCSE", href: "https://www.facebook.com/ANSCSE" },
      { label: "Thai summer School in Computational", href: "https://www.facebook.com/profile.php?id=61565925853669" },
      { label: "ANSCSE27", href: "#anscse27" },
      { label: "ANSCSE26", href: "#anscse26" },
      { label: "TS2C2", href: "#ts2c2" },
    ],
  },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/csea-logo.png"
            alt="CSEA Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">CSEA Thailand</p>
            <p className="text-xs text-muted-foreground">สมาคมวิทยาการคอมพิวเตอร์</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger className="bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {child.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button>Join Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Button className="w-full">Join Us</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
