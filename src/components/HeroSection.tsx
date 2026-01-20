import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Computational Science and Engineering Association
        </h1>
        
        <p className="mb-4 text-xl font-medium text-primary-foreground/90">
          สมาคมวิทยาการคำนวณและวิศวกรรมศาสตร์แห่งประเทศไทย
        </p>
        
        <p className="mb-8 max-w-2xl text-primary-foreground/80">
          ส่งเสริมและพัฒนาองค์ความรู้ด้านวิทยาการคำนวณ วิทยาศาสตร์คอมพิวเตอร์ 
          และวิศวกรรมศาสตร์เชิงคำนวณในประเทศไทย
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="gap-2">
            About Us
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
