import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MembershipBenefits } from "@/components/MembershipBenefits";

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>
        <MembershipBenefits />
      </main>
      <Footer />
    </div>
  );
};

export default MembershipPage;
