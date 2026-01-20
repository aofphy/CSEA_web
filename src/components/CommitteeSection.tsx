import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const committeeMembers = [
  {
    name: "ดร.สุภาวดี หาญเมืองรักษ์",
    position: "นายกสมาคมฯ",
    role: "president"
  },
  {
    name: "รศ.ดร. สุวิทย์ สุธีรากุล",
    position: "อุปนายก",
    role: "vice-president"
  },
  {
    name: "ผศ.ดร. ณัฐธพล ยอดศิลป์",
    position: "เลขานุการ",
    role: "secretary"
  },
  {
    name: "รศ.ดร. ธัญญาดา รุ่งโรจน์มงคล",
    position: "เหรัญญิก",
    role: "treasurer"
  },
  {
    name: "อ.ดร. ทินกร แช่หลี",
    position: "นายทะเบียน",
    role: "registrar"
  },
  {
    name: "รศ.ดร. บุญเดช เบ็กฟ้า",
    position: "ประชาสัมพันธ์",
    role: "pr"
  },
  {
    name: "ผศ.ดร. อิทธิพล ฟองแก้ว",
    position: "ประชาสัมพันธ์",
    role: "pr"
  },
  {
    name: "รศ.ดร. นาวี กังวาลย์",
    position: "ปฏิคม",
    role: "receptionist"
  },
  {
    name: "ดร. วุฒิไกร บูนยาพร",
    position: "ปฏิคม",
    role: "receptionist"
  },
  {
    name: "ศ.ดร. ภูมิ คำเอม",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
  {
    name: "รศ.ดร. ศุภฤกษ์ ประเสริฐธรรม",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
  {
    name: "ผศ.ดร. ศุภกิจ พฤกษอรุณ",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
  {
    name: "ดร. สมบูรณ์ โอตรวรรณะ",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
  {
    name: "ดร. ยุทธนา วงษ์หนองหว้า",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
  {
    name: "รศ.ดร. ประภาศิริ พงษ์ประยูร",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
  {
    name: "ผศ.ดร. มนัสวี สุทธิพงษ์",
    position: "กรรมการบริหารสมาคมฯ",
    role: "member"
  },
];

export function CommitteeSection() {
  return (
    <section id="committee" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Executive Committee
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            รายชื่อคณะกรรมการบริหารสมาคมวิทยาการคำนวณและวิศวกรรมศาสตร์แห่งประเทศไทย (CSEA)
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">CSEA Committee</CardTitle>
                    <p className="text-sm text-muted-foreground">คณะกรรมการบริหารสมาคมฯ</p>
                  </div>
                </div>
                <Badge variant="secondary">{committeeMembers.length} ท่าน</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {committeeMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                  >
                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <UserCircle className="h-6 w-6 text-primary" />
                     </div>
                     <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium text-primary/80 mt-1">
                            {member.position}
                        </p>
                     </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
