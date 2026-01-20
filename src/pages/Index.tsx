import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { AboutSection } from "@/components/AboutSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { MembershipBenefits } from "@/components/MembershipBenefits";
import { MembersSection } from "@/components/MembersSection";
import { PartnersSection } from "@/components/PartnersSection";
import { HallOfFameSection } from "@/components/HallOfFameSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { CommitteeSection } from "@/components/CommitteeSection";
import { Footer } from "@/components/Footer";
import { GalleryMarquee } from "@/components/GalleryMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>
        <HeroSection />
        <GalleryMarquee />
        <NewsSection />
        {/* AboutSection moved to /about */}
        <ActivitiesSection />
        <CommitteeSection />
        <PartnersSection />
        {/* MembershipBenefits moved to /membership */}
        {/* <MembersSection /> - Hiding redundant members section since we have committee section now */}
        <HallOfFameSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
};



export default Index;
