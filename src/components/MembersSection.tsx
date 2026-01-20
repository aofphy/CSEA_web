import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User } from "lucide-react";

const individualMembers = [
  {
    name: "ดร.สุภาวดี หาญเมืองรักษ์",
    position: "นายกสมาคมฯ",
  },
  {
    name: "รศ.ดร. สุวิทย์ สุธีรากุล",
    position: "อุปนายก",
  },
  {
    name: "ผศ.ดร. ณัฐธพล ยอดศิลป์",
    position: "เลขานุการ",
  },
  {
    name: "รศ.ดร. ธัญญาดา รุ่งโรจน์มงคล",
    position: "เหรัญญิก",
  },
  {
    name: "อ.ดร. ทินกร แช่หลี",
    position: "นายทะเบียน",
  },
  {
    name: "รศ.ดร. บุญเดช เบ็กฟ้า",
    position: "ประชาสัมพันธ์",
  },
  {
    name: "ผศ.ดร. อิทธิพล ฟองแก้ว",
    position: "ประชาสัมพันธ์",
  },
  {
    name: "รศ.ดร. นาวี กังวาลย์",
    position: "ปฏิคม",
  },
  {
    name: "ดร. วุฒิไกร บูนยาพร",
    position: "ปฏิคม",
  },
  {
    name: "ศ.ดร. ภูมิ คำเอม",
    position: "กรรมการบริหารสมาคมฯ",
  },
  {
    name: "รศ.ดร. ศุภฤกษ์ ประเสริฐธรรม",
    position: "กรรมการบริหารสมาคมฯ",
  },
  {
    name: "ผศ.ดร. ศุภกิจ พฤกษารอรุณ",
    position: "กรรมการบริหารสมาคมฯ",
  },
  {
    name: "ดร. สมบูรณ์ โอตรวรรณะ",
    position: "กรรมการบริหารสมาคมฯ",
  },
  {
    name: "ดร. ยุทธนา วงษ์หนองหว้า",
    position: "กรรมการบริหารสมาคมฯ",
  },
  {
    name: "รศ.ดร. ประภาศิริ พงษ์ประยูร",
    position: "กรรมการบริหารสมาคมฯ",
  },
  {
    name: "ผศ.ดร. มนัสวี สุทธิพงษ์",
    position: "กรรมการบริหารสมาคมฯ",
  },
];


export function MembersSection() {
  return (
    <section id="membership" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Membership
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            รายชื่อสมาชิกประจำปี 2566 ที่ได้รับการอนุมัติจากคณะกรรมการบริหารสมาคม
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Individual Members */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Individual Members</CardTitle>
                    <p className="text-sm text-muted-foreground">สมาชิกประเภทบุคคล</p>
                  </div>
                </div>
                <Badge variant="secondary">{individualMembers.length} ท่าน</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <ul className="space-y-2">
                  {individualMembers.map((member, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-start gap-2 rounded-lg bg-muted/50 px-4 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          {index + 1}
                        </span>
                        <span className="font-medium">{member.name}</span>
                      </div>
                      <span className="pl-9 text-muted-foreground sm:pl-0 sm:text-right">
                        {member.position}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
