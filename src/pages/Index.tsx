import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { AboutSection } from "@/components/AboutSection";
import { MembershipBenefits } from "@/components/MembershipBenefits";
import { MembersSection } from "@/components/MembersSection";
import { PartnersSection } from "@/components/PartnersSection";
import { HallOfFameSection } from "@/components/HallOfFameSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <AboutSection />
        <PartnersSection />
        <MembershipBenefits />
        <MembersSection />
        <HallOfFameSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
};


export default Index;
