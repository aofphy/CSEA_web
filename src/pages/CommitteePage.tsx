import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommitteeSection } from "@/components/CommitteeSection";

const CommitteePage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>
        <CommitteeSection />
      </main>
      <Footer />
    </div>
  );
};

export default CommitteePage;
