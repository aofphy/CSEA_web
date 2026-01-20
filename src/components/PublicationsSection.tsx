import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const journals = [
  {
    title: "Bangmod Journal of Mathematics and Computational Science (Bangmod J-MCS)",
    description:
      "A peer-reviewed journal publishing original research in mathematics and computational science. Special issues often feature selected papers from ANSCSE.",
    url: "#",
    tags: ["Mathematics", "Computational Science"],
  },
  {
    title: "Computational Science and Engineering Journal",
    description:
      "Focuses on advanced computational methods and their applications in engineering and science projects.",
    url: "#",
    tags: ["Engineering", "Simulation"],
  },
];

export function PublicationsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-2">
                    Publications & Journals
                </h2>
                <p className="text-muted-foreground">
                    Supported journals and publication outlets for our community.
                </p>
            </div>
            <Button variant="outline" className="gap-2">
                View All Publications <BookOpen className="w-4 h-4"/>
            </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {journals.map((journal, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                        {journal.title}
                    </CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
                <div className="flex gap-2 mt-2">
                    {journal.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {journal.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
