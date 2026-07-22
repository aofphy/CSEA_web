import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight, MessageCircle } from "lucide-react";
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

        <div className="mb-12 flex flex-col sm:flex-row items-center gap-6 rounded-2xl border bg-background p-6 shadow-sm max-w-3xl mx-auto">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Flin.ee%2FQwupO6n"
            alt="QR Code เพิ่มเพื่อน LINE Official CSEA Thailand"
            className="h-28 w-28 shrink-0 rounded-lg border"
            width={140}
            height={140}
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start gap-2 font-semibold text-foreground">
              <MessageCircle className="h-5 w-5 text-primary" />
              พบกับข่าวสารล่าสุดทาง LINE! เฉพาะสมาชิก LINE OFFICIAL เท่านั้น
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              เพิ่มบัญชีทางการ CSEA Thailand เป็นเพื่อนผ่านลิงก์หรือสแกน QR Code
            </p>
          </div>
          <Button className="gap-2 shrink-0" asChild>
            <a href="https://lin.ee/QwupO6n" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              เพิ่มเพื่อน LINE
            </a>
          </Button>
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

