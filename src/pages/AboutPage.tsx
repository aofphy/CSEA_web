import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
