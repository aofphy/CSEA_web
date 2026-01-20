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
import { useData } from "@/context/DataContext";
import Markdown from "react-markdown";

export function PublicationsSection() {
  const { publications } = useData();

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
          {publications.map((journal) => (
            <a key={journal.id} href={journal.url} target="_blank" rel="noreferrer" className="block">
              <Card className="group hover:border-primary/50 transition-colors h-full">
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
                  <div className="line-clamp-3 text-sm text-muted-foreground prose prose-sm dark:prose-invert">
                    <Markdown>{journal.description}</Markdown>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

