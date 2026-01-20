import { CheckCircle2, FileText, Users, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefits = [
  {
    icon: Users,
    title: "Professional Networking",
    description:
      "Join a network of researchers, academics, and students in computational science and engineering.",
  },
  {
    icon: FileText,
    title: "Conference Discounts",
    description:
      "Receive special rates for ANSCSE registration and other associated conferences.",
  },
  {
    icon: Award,
    title: "Research Grants",
    description:
      "Eligible to apply for research grants and funding opportunities provided by the association.",
  },
  {
    icon: CheckCircle2,
    title: "Voting Rights",
    description:
      "Participate in the association's decision-making process through voting rights.",
  },
];

export function MembershipBenefits() {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Membership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Become a part of the leading computational science community in Thailand
            and enjoy exclusive benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-sm bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 shadow-sm border">
          <h3 className="text-2xl font-bold mb-6 text-center">Membership Details</h3>
          
          <Tabs defaultValue="th" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="th">ภาษาไทย</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="th" className="space-y-6 animate-in fade-in-50">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">ประเภทสมาชิก</h4>
                <p className="text-muted-foreground">สมาชิกของสมาคมมี 3 ประเภท คือ</p>
                <ol className="list-decimal list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>สมาชิกสามัญประเภทสถาบัน</li>
                  <li>สมาชิกสามัญประเภทบุคคล</li>
                  <li>สมาชิกกิตติมศักดิ์</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">คุณสมบัติ</h4>
                <p className="text-muted-foreground leading-relaxed">
                  คุณสมบัติที่สำคัญของสมาชิก คือ ต้องเป็นผู้ที่สนใจและต้องการสนับสนุนการวิจัยด้านวิทยาการและวิศวกรรมเชิงคอมพิวเตอร์ 
                  หากท่านประสงค์จะสมัครเข้าเป็นสมาชิกสมาคมท่านสามารถยื่นใบสมัครได้ที่สมาคม โดยไม่ต้องเสียค่าลงทะเบียนครั้งแรก 
                  สมาชิกสามัญประเภทบุคคลต้องเสียค่าบำรุงสมาคมเป็นรายปี ๆ ละ 300 บาท หรือ ชำระครั้งเดียว 10 เท่าของค่าบำรุงรายปี (3,000 บาท)
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">การสมัครสมาชิก</h4>
                <p className="text-muted-foreground leading-relaxed">
                  การสมัครเข้าเป็นสมาชิกของสมาคม ให้ผู้ประสงค์จะสมัครเข้าเป็นสมาชิกของสมาคม หรือ ตัวแทนยื่นใบสมัครตามแบบของสมาคมต่อเลขานุการ 
                  โดยมีสมาชิกสามัญรับรองอย่างน้อย 1 คน และให้เลขานุการติดประกาศรายชื่อไว้ ณ สำนักงานของสมาคมเป็นเวลาไม่น้อยกว่า 15 วัน 
                  หากไม่มีสมาชิกของสมาคมคัดค้านการสมัครนั้นภายในระยะเวลาดังกล่าว เลขานุการจะนำใบสมัครเสนอต่อที่ประชุมคณะกรรมการเพื่อพิจารณารับเข้าเป็นสมาชิกของสมาคมต่อไป
                </p>
              </div>
            </TabsContent>

            <TabsContent value="en" className="space-y-6 animate-in fade-in-50">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Membership Types</h4>
                <p className="text-muted-foreground">There are three types of members in the association:</p>
                <ol className="list-decimal list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Institutional Ordinary Members</li>
                  <li>Individual Ordinary Members</li>
                  <li>Honorary Members</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Qualifications & Fees</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The key qualification for membership is a genuine interest in and support for research in the field of computational science and engineering. 
                  To apply for membership, individuals can submit an application to the association without having to pay an initial registration fee. 
                  Individual Ordinary Members are required to pay an annual membership fee of 300 baht or a one-time payment of 10 times the annual fee (3,000 baht).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Application Process</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To become a member of the association, interested individuals or representatives should submit the membership application 
                  according to the association’s prescribed form to the Secretary. The application must be endorsed by at least one Ordinary Member, 
                  and the Secretary shall publicly announce the list of applicants at the association’s office for a minimum of 15 days. 
                  If no objections are raised by existing members during that period, the Secretary will present the applications to the Committee 
                  for consideration and acceptance as new members of the association.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center border-t pt-8">
            <Button size="lg" variant="default" className="gap-2 shadow-md w-full sm:w-auto" asChild>
              <a href="/docs/CSEA-APPL-2023.doc" download>
                <Download className="w-4 h-4" />
                ใบสมัครสมาชิก (DOC)
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 shadow-sm w-full sm:w-auto" asChild>
              <a href="/docs/CSEA-regulation-1.pdf" download>
                <Download className="w-4 h-4" />
                ข้อบังคับสมาคม (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
