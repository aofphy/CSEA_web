import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Committee", href: "/#committee" },
  {
    label: "Conferences",
    href: "#conferences",
    children: [
      { label: "ANSCSE", href: "https://www.facebook.com/ANSCSE" },
      { label: "Thai summer School in Computational", href: "https://www.facebook.com/profile.php?id=61565925853669" },
      { label: "ANSCSE27", href: "/#anscse27" },
      { label: "ANSCSE26", href: "/#anscse26" },
      { label: "TS2C2", href: "/#ts2c2" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isExternal = (url: string) => url.startsWith("http");

  // Helper to render Link or a tag
  const NavLink = ({ item, className, children }: { item: { href: string }, className?: string, children: React.ReactNode }) => {
    if (isExternal(item.href)) {
        return <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
    }
    // If it's a hash link and we are on home page, simple anchor might be better for smooth scroll?
    // Actually Link with hash works fine in most modern routers if configured, but let's stick to Link
    return <Link to={item.href} className={className}>{children}</Link>
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/csea-logo.png"
            alt="CSEA Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">CSEA Thailand</p>
            <p className="text-xs text-muted-foreground">สมาคมวิทยาการคำนวณและวิศวกรรมศาสตร์</p>
          </div>
        </Link>

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
                            <NavLink
                              item={child}
                              className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {child.label}
                            </NavLink>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      item={item}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      {item.label}
                    </NavLink>
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
                  <NavLink
                    item={item}
                    className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavLink
                            item={child}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.label}
                          </NavLink>
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
