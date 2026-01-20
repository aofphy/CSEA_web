import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import Markdown from "react-markdown";

export function NewsSection() {
  const { news } = useData();

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
          {news.map((item) => (
            <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3">
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
              <CardContent>
                <div className="item-description mb-4 line-clamp-3 text-sm text-muted-foreground prose prose-sm dark:prose-invert">
                  <Markdown>{item.description}</Markdown>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="gap-2">
            View All News
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

