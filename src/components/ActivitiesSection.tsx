
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Presentation } from "lucide-react";

export function ActivitiesSection() {
  const activities = [
    {
      title: "ANSCSE",
      fullTitle: "International Annual Symposium on Computational Science and Engineering",
      description: "งานประชุมวิชาการระดับนานาชาติประจำปีด้านวิทยาการคำนวณและวิศวกรรมศาสตร์ เวทีแลกเปลี่ยนองค์ความรู้และงานวิจัยล่าสุด",
      icon: Presentation,
      link: "https://www.facebook.com/ANSCSE",
      color: "text-blue-500",
    },
    {
      title: "Thai Summer School",
      fullTitle: "Thai Summer School in Computational",
      description: "โครงการอบรมเชิงปฏิบัติการด้านวิทยาการคำนวณ สำหรับนิสิต นักศึกษา และผู้สนใจ เพื่อพัฒนาทักษะการคำนวณขั้นสูง",
      icon: GraduationCap,
      link: "https://www.facebook.com/profile.php?id=61565925853669",
      color: "text-green-500",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            กิจกรรมหลักของเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Main Activities of CSEA
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
          {activities.map((activity) => (
            <Card key={activity.title} className="flex flex-col h-full border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background shadow-sm ${activity.color}`}>
                  <activity.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{activity.title}</CardTitle>
                <CardDescription className="text-base font-medium text-foreground/80">
                  {activity.fullTitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={activity.link} target="_blank" rel="noopener noreferrer" className="group">
                    ติดตามข่าวสาร
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
