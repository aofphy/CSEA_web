import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

export default function NewsPage() {
  const { news } = useData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold">News & Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`} className="block h-full">
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col overflow-hidden">
                 {item.image && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant={item.category === "Conference" ? "default" : "secondary"} className="text-xs">
                      {item.category}
                    </Badge>
                    {item.isNew && (
                      <span className="text-xs font-medium text-primary">NEW</span>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 line-clamp-3 text-sm text-muted-foreground prose prose-sm dark:prose-invert">
                    <Markdown remarkPlugins={[remarkGfm]}>{item.description}</Markdown>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                    <CalendarDays className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
