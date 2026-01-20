import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground sm:text-5xl mb-6">About CSEA</h2>
          <blockquote className="text-xl text-muted-foreground italic font-light leading-relaxed border-l-4 border-primary/20 pl-6 py-2 my-8">
            "Science and engineering, powered by computational tools and ingenuity, unlock the door to new discoveries, endless possibilities, and a deeper understanding of our world."
          </blockquote>
        </div>

        {/* Main Content Tabs */}
        <div className="max-w-4xl mx-auto mb-20">
          <Tabs defaultValue="th" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[300px] grid-cols-2">
                <TabsTrigger value="th">ภาษาไทย</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="th" className="space-y-8 animate-in fade-in-50">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">ประวัติความเป็นมา</h3>
                <div className="prose prose-muted dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p className="indent-8">
                    วิทยาการเชิงคอมพิวเตอร์ หรือ Computational Science เป็นการนำการจำลองด้วยคอมพิวเตอร์มาศึกษาวิทยาศาสตร์สาขาต่างๆ เช่น ฟิสิกส์ เคมี และ ชีววิทยา การจำลองด้วยคอมพิวเตอร์สามารถแทนที่การทดลองบางอย่างได้ หรือ ทำให้สามารถศึกษาผลของทฤษฎีต่างๆ ได้ดีกว่าการวิเคราะห์ทางทฤษฎีเพียงอย่างเดียว วิศวกรรมเชิงคอมพิวเตอร์ก็เป็นการนำการจำลองด้วยคอมพิวเตอร์มาใช้เช่นเดียวกัน แต่เป็นการนำมาเพื่อช่วยการศึกษาและออกแบบทางวิศวกรรม วิทยาการและวิศวกรรมเชิงคอมพิวเตอร์สามารถช่วยให้งานวิจัยดำเนินไปอย่างมีประสิทธิภาพและประสิทธิผลมากขึ้น กล่าวคือช่วยประหยัดงบประมาณในการวิจัย และ ช่วยให้เกิดความเข้าใจเชิงลึก นำไปสู่องค์ความรู้ที่จำเป็นต่อการพัฒนาวิทยาการขั้นสูง
                  </p>
                  <p className="indent-8 mt-4">
                    ในประเทศไทย นักวิจัยในสาขาวิทยาการและวิศวกรรมเชิงคอมพิวเตอร์ ได้มีการรวมตัวกันเป็นกลุ่มนักวิจัยอย่างไม่เป็นทางการตั้งแต่ราวปีพ.ศ. 2541 มีทั้งนักเคมีเชิงคำนวณ นักชีววิทยาเชิงคำนวณ นักฟิสิกส์เชิงคำนวณ นอกจากนี้ยังมีนักวิจัยด้านวิทยาการคอมพิวเตอร์ และ วิศวกรรมคอมพิวเตอร์ ที่สนใจการวิจัยเพื่อสนับสนุนวิทยาการและวิศวกรรมคอมพิวเตอร์ โดยเฉพาะอย่างยิ่งในด้านการคำนวณสมรรถนะสูง หรือ high performance computing อีกด้วย
                  </p>
                  <p className="indent-8 mt-4">
                    กลุ่มนักวิจัยนี้ได้มีการทำงานร่วมกัน เช่น การดำเนินโครงการวิจัยต่างๆ ร่วมกัน การจัดการสัมมนา โดยเฉพาะอย่างยิ่งการจัดงานประชุมวิชาการ ANSCSE หรือ Annual Symposium on Computational Science and Engineering เป็นประจำทุกปี จนกระทั่งกลุ่มนักวิจัยมีการพัฒนาความร่วมมือกันมากขึ้น จึงเห็นสมควรที่จะมีการจดทะเบียนเป็นนิติบุคคลอย่างเป็นทางการในรูปแบบสมาคม จึงได้มีการประชุมเพื่อจัดตั้งสมาคมขึ้นและได้รับอนุญาตให้จดทะเบียนเป็นสมาคมอย่างเป็นทางการในวันที่ 14 กันยายน 2550
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-2xl font-semibold text-primary">วัตถุประสงค์</h3>
                <p className="text-muted-foreground leading-relaxed">
                  สมาคมวิทยาการและวิศวกรรมเชิงคอมพิวเตอร์มีวัตถุประสงค์เพื่อสนับสนุนและส่งเสริม การวิจัย การศึกษา การพัฒนาบุคลากร และความร่วมมือระหว่างนักวิจัย และสถาบันต่าง ๆ ในสาขาวิทยาการและวิศวกรรมเชิงคอมพิวเตอร์ โดยนิยามของคำว่า วิทยาการและวิศวกรรมเชิงคอมพิวเตอร์ คือ ศาสตร์ที่นำคอมพิวเตอร์ การคำนวณเชิงตัวเลข และวิทยาการหลากสาขา เพื่อเป็นเครื่องมือหลักในการค้นคว้าทางวิทยาศาสตร์ และวิศวกรรม รวมไปถึงการวิจัยและพัฒนาเครื่องมือสำหรับการค้นคว้าดังกล่าว
                </p>
              </div>
            </TabsContent>

            <TabsContent value="en" className="space-y-8 animate-in fade-in-50">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">History</h3>
                <div className="prose prose-muted dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p className="indent-8">
                    Computational Science, also known as Computer Science, is the application of computer simulations to study various branches of science such as physics, chemistry, and biology. Computer simulations can replace some experiments or provide a better understanding of the effects of different theories compared to purely theoretical analysis. Similarly, Computer Engineering utilizes computer simulations for study and design purposes. Computational Science and Engineering can enhance the efficiency and effectiveness of research, leading to cost savings and deeper understanding. It contributes to the necessary knowledge for the advancement of higher-level scientific development.
                  </p>
                  <p className="indent-8 mt-4">
                    In Thailand, researchers in the field of computational science and engineering have come together unofficially as a group since around year 1998. This group comprises computational chemists, computational biologists, computational physicists, as well as researchers in computer science and computer engineering. They are interested in research that supports computational science and engineering, particularly in the area of high-performance computing.
                  </p>
                  <p className="indent-8 mt-4">
                    This group of researchers has collaborated in various ways, such as conducting joint research projects and organizing conferences and seminars. In particular, the Annual Symposium on Computational Science and Engineering (ANSCSE) has been held every year. As their collaboration and cooperation increased, it was deemed appropriate to officially register as a legal entity in the form of an association. Therefore, a meeting was convened to establish the association, and on September 14, 2007, official registration as an association was granted.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-2xl font-semibold text-primary">Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Association of Computational Science and Engineering aims to support and promote research, education, and professional development, as well as foster collaboration between researchers and institutions in the field of computational science and engineering. The term “computational science and engineering” is defined as a discipline that utilizes computers, numerical computation, and various branches of science as tools for scientific exploration and engineering. This includes research and development of tools for the aforementioned scientific investigation.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Stats & Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Card */}
          <div className="lg:col-span-1 space-y-4">
             <Card className="bg-primary/5 border-none h-full">
              <CardContent className="h-full flex flex-col justify-center gap-8 p-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">27+</p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years of ANSCSE</p>
                </div>
                <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Members</p>
                </div>
                <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Institutions</p>
                </div>
              </CardContent>
             </Card>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

