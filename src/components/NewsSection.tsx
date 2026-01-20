import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "ANSCSE27: Faculty of Engineering, Chulalongkorn University",
    description: "We are delighted to extend an invitation for you to participate in the 27th International Annual Symposium on Computational Science and Engineering (ANSCSE27).",
    date: "2024",
    category: "Conference",
    isNew: true,
  },
  {
    id: 2,
    title: "ANSCSE26: Special issue Bangmod J-MCS",
    description: "Special issue including selected papers presented to ANSCSE26. Participants are invited to submit their contributions to Bangmod J-MCS.",
    date: "มีนาคม 2023",
    category: "Publication",
    isNew: false,
  },
  {
    id: 3,
    title: "CSEA Pioneer Award 2023: Prof. Dr. Supot Hannongbua",
    description: "Professor Dr. Supot HANNONGBUA is a renowned computational chemist and materials scientist in Thailand with over 205 publications.",
    date: "2023",
    category: "Award",
    isNew: false,
  },
  {
    id: 4,
    title: "ประกาศรายชื่อสมาชิกประเภทบุคคล ประจำปี 2566",
    description: "รายชื่อสมาชิกที่ได้รับการอนุมัติจากคณะกรรมการบริหารสมาคม ประจำปี 2566 จำนวน 20 ท่าน",
    date: "2023",
    category: "Announcement",
    isNew: false,
  },
];

export function NewsSection() {
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
          {newsItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant={item.isNew ? "default" : "secondary"} className="text-xs">
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
                <CardDescription className="mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
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
