import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

interface AnscseEvent {
  edition: number;
  host: string;
  date: string;
  theme?: string;
}

const anscseHistory: AnscseEvent[] = [
  { edition: 26, host: "King Mongkut's University of Technology Thonburi (KMUTT)", date: "กรกฎาคม 2566 (July 2023)", theme: "Modern Computational Approaches for Decarbonized Society" },
  { edition: 25, host: "Khon Kaen University", date: "8-11 มิถุนายน 2565 (June 8-11, 2022)", theme: "Activating the BCG Model for a Sustainable Recovery from Covid-19" },
  { edition: 24, host: "Kasetsart University, Kamphaeng Saen Campus (Online)", date: "28-30 เมษายน 2564 (April 28-30, 2021)", theme: "Confronting the Global Challenges" },
  { edition: 23, host: "Faculty of Science, Chiang Mai University", date: "27-29 มิถุนายน 2562 (June 27-29, 2019)", theme: "55th Anniversary of Science, Chiang Mai University: Study@Science Expanding Your Mind" },
  { edition: 22, host: "Chulalongkorn University", date: "2-3 สิงหาคม 2561 (August 2-3, 2018)", theme: "Bigger and Faster!" },
  { edition: 21, host: "National Nanotechnology Center (NANOTEC)", date: "3-4 สิงหาคม 2560 (August 3-4, 2017)", theme: "Computational Science & Big Data For Sustainable and Innovation Future" },
  { edition: 20, host: "Kasetsart University", date: "27-29 กรกฎาคม 2559 (July 27-29, 2016)", theme: "50th Anniversary of the Faculty of Science, Kasetsart University & 20th Anniversary of ANSCSE" },
  { edition: 19, host: "Ubon Ratchathani University", date: "17-19 มิถุนายน 2558 (June 17-19, 2015)" },
  { edition: 18, host: "Kasetsart University, Sriracha Campus", date: "17-19 มีนาคม 2557 (March 17-19, 2014)" },
  { edition: 17, host: "Khon Kaen University", date: "27-29 มีนาคม 2556 (March 27-29, 2013)" },
  { edition: 16, host: "Chiang Mai University", date: "23-25 พฤษภาคม 2555 (May 23-25, 2012)" },
  { edition: 15, host: "Bangkok University", date: "30 มีนาคม - 2 เมษายน 2554 (March 30 - April 2, 2011)" },
  { edition: 14, host: "Mae Fah Luang University", date: "23-26 มีนาคม 2553 (March 23-26, 2010)" },
  { edition: 13, host: "Kasetsart University", date: "25-27 มีนาคม 2552 (March 25-27, 2009)" },
  { edition: 12, host: "Ubon Ratchathani University", date: "27-29 มีนาคม 2551 (March 27-29, 2008)" },
  { edition: 11, host: "Prince of Songkla University", date: "28-30 มีนาคม 2550 (March 28-30, 2007)" },
  { edition: 10, host: "Chiang Mai University", date: "22-24 พฤษภาคม 2549 (May 22-24, 2006)" },
  { edition: 9, host: "Mahidol University", date: "22-23 มีนาคม 2548 (March 22-23, 2005)" },
  { edition: 8, host: "Suranaree University", date: "21-23 กรกฎาคม 2547 (July 21-23, 2004)" },
  { edition: 7, host: "Chulalongkorn University", date: "24-26 มีนาคม 2546 (March 24-26, 2003)" },
  { edition: 6, host: "Walailak University", date: "3-5 เมษายน 2545 (April 3-5, 2002)" },
  { edition: 5, host: "NECTEC", date: "19-20 มิถุนายน 2544 (June 19-20, 2001)" },
  { edition: 4, host: "Kasetsart University", date: "27-29 มีนาคม 2543 (March 27-29, 2000)" },
  { edition: 3, host: "Chulalongkorn University", date: "24-26 มีนาคม 2542 (March 24-26, 1999)" },
  { edition: 2, host: "NECTEC", date: "26-28 มีนาคม 2541 (March 26-28, 1998)" },
  { edition: 1, host: "NECTEC", date: "20-21 มีนาคม 2540 (March 20-21, 1997)" },
];

export default function AnscseHistoryPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="mb-4 text-4xl font-bold">ANSCSE History</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          ย้อนรอยการประชุมวิชาการ Annual Symposium on Computational Science and Engineering (ANSCSE)
          ตั้งแต่ครั้งที่ 1 จนถึงครั้งล่าสุด (ดูข่าวสาร ANSCSE 27 ขึ้นไปได้ที่หน้าข่าวสาร)
        </p>

        <div className="space-y-4 max-w-3xl">
          {anscseHistory.map((event) => (
            <Card key={event.edition}>
              <CardContent className="p-6 flex gap-6 items-start">
                <div className="shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{event.edition}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    ANSCSE{event.edition} — {event.host}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                  {event.theme && (
                    <p className="text-sm text-primary/80 italic mt-2">"{event.theme}"</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
