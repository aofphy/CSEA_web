import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Research Network",
    description: "เชื่อมโยงนักวิจัย นักวิชาการ และนักศึกษาในสาขาวิทยาการคำนวณทั่วประเทศ",
  },
  {
    icon: BookOpen,
    title: "Academic Conference",
    description: "จัดงานประชุม ANSCSE ประจำปี เพื่อแลกเปลี่ยนองค์ความรู้และงานวิจัย",
  },
  {
    icon: Award,
    title: "Awards & Grants",
    description: "มอบรางวัล CSEA Pioneer Award และทุนสนับสนุนการวิจัย",
  },
  {
    icon: Globe,
    title: "International Collaboration",
    description: "สร้างความร่วมมือกับองค์กรวิชาการในระดับนานาชาติ",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              About CSEA
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              สมาคมวิทยาการคำนวณและวิศวกรรมศาสตร์แห่งประเทศไทย (Computational Science 
              and Engineering Association - CSEA) เป็นองค์กรที่ก่อตั้งขึ้นเพื่อส่งเสริม
              และพัฒนาองค์ความรู้ด้านวิทยาการคำนวณ
            </p>
            <p className="mb-8 text-muted-foreground">
              CSEA เป็นศูนย์กลางในการเชื่อมโยงนักวิจัย นักวิชาการ และนักศึกษา 
              ในสาขาที่เกี่ยวข้องกับการคำนวณเชิงวิทยาศาสตร์ วิทยาการข้อมูล 
              และวิศวกรรมศาสตร์เชิงคำนวณ
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-xl bg-muted/50 p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">27+</p>
                <p className="text-sm text-muted-foreground">Years of ANSCSE</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Institutions</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
