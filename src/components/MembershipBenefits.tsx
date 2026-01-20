import { CheckCircle2, FileText, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Professional Networking",
    description:
      "Join a network of researchers, academics, and students in computational science and engineering.",
  },
  {
    icon: FileText,
    title: "Conference Discounts",
    description:
      "Receive special rates for ANSCSE registration and other associated conferences.",
  },
  {
    icon: Award,
    title: "Research Grants",
    description:
      "Eligible to apply for research grants and funding opportunities provided by the association.",
  },
  {
    icon: CheckCircle2,
    title: "Voting Rights",
    description:
      "Participate in the association's decision-making process through voting rights.",
  },
];

export function MembershipBenefits() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Why Join CSEA?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Become a part of the leading computational science community in Thailand
            and enjoy exclusive benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-sm bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to become a member?</h3>
          <p className="text-muted-foreground mb-6">
            Apply now to start your journey with CSEA Thailand.
            <br />
            Download the application form or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              Download Application Form
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Membership Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
