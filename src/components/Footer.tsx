import { Mail, Phone, MapPin, Facebook, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">CS</span>
              </div>
              <div>
                <p className="font-bold">CSEA Thailand</p>
                <p className="text-sm text-background/70">สมาคมวิทยาการคำนวณและวิศวกรรมศาสตร์</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-background/70">
              Computational Science and Engineering Association (CSEA) - 
              องค์กรเพื่อส่งเสริมและพัฒนาองค์ความรู้ด้านวิทยาการคำนวณ 
              วิทยาศาสตร์คอมพิวเตอร์ และวิศวกรรมศาสตร์เชิงคำนวณในประเทศไทย
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 transition-colors hover:text-background">
                  About Us
                </a>
              </li>
              <li>
                <a href="#committee" className="text-background/70 transition-colors hover:text-background">
                  Committee
                </a>
              </li>
              <li>
                <a href="#conferences" className="text-background/70 transition-colors hover:text-background">
                  Conferences
                </a>
              </li>
              <li>
                <a href="#membership" className="text-background/70 transition-colors hover:text-background">
                  Membership
                </a>
              </li>
              <li>
                <a href="#news" className="text-background/70 transition-colors hover:text-background">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/70" />
                <span className="text-background/70">
                  สมาคมวิทยาการคำนวณและวิศวกรรมศาสตร์แห่งประเทศไทย
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/70" />
                <a href="mailto:info@cseathai.org" className="text-background/70 transition-colors hover:text-background">
                  info@cseathai.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-background/70" />
                <a href="https://cseathai.org" target="_blank" rel="noopener noreferrer" className="text-background/70 transition-colors hover:text-background">
                  cseathai.org
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-background"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <Link
                to="/admin/login"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-background"
                title="Admin Login"
              >
                <Lock className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} CSEA Thailand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
