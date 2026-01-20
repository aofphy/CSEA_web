import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function NewsSection() {
  const { news } = useData();
  const recentNews = news.slice(0, 4);

  return (
    <section id="news" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            News & Events
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            ติดตามข่าวสารล่าสุด การประชุมวิชาการ และกิจกรรมต่างๆ ของสมาคม
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {recentNews.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`} className="block h-full">
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden flex flex-col h-full">
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
                <div className="item-description mb-4 line-clamp-3 text-sm text-muted-foreground prose prose-sm dark:prose-invert">
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

        <div className="mt-10 text-center">
          <Button variant="outline" className="gap-2" asChild>
            <Link to="/news">
              View All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

