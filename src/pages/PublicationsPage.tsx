import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PublicationsPage() {
  const { publications } = useData();

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="mb-4 text-4xl font-bold">Publications & Journals</h1>
        <p className="text-muted-foreground mb-12">
             Supported journals and publication outlets for our community.
        </p>

        <div className="grid gap-6">
          {publications.map((journal) => (
            <a key={journal.id} href={journal.url} target="_blank" rel="noreferrer" className="block">
              <Card className="group hover:border-primary/50 transition-colors flex flex-col md:flex-row overflow-hidden">
                {journal.image && (
                  <div className="w-full md:w-1/4 aspect-video md:aspect-auto flex-shrink-0">
                    <img 
                      src={journal.image} 
                      alt={journal.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'; // Hide if fails in list view to maintain layout
                      }}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-2xl leading-tight group-hover:text-primary transition-colors">
                            {journal.title}
                        </CardTitle>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <div className="flex gap-2 mt-2">
                        {journal.tags.map(tag => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground prose prose-sm dark:prose-invert">
                      <Markdown remarkPlugins={[remarkGfm]}>{journal.description}</Markdown>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
