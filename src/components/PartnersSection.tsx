import { Card, CardContent } from "@/components/ui/card";

// Placeholder data for universities. 
const partners = [
  {
    name: "National Science and Technology Development Agency",
    code: "NSTDA",
    image: "/partners/nstda.png",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Chulalongkorn University",
    code: "CU",
    image: "/partners/cu.png",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "KMUTT",
    code: "KMUTT",
    image: "/partners/kmutt.png",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "KMUTNB",
    code: "KMUTNB",
    image: null,
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Kasetsart University",
    code: "KU",
    image: "/partners/ku.png",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Mahidol University",
    code: "MU",
    image: "/partners/mu.png",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Khon Kaen University",
    code: "KKU",
    image: "/partners/kku.png",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Suranaree University of Technology",
    code: "SUT",
    image: "/partners/sut.png",
    color: "bg-orange-100 text-orange-600",
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
          Trusted by Leading Academic Institutions
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {partners.map((partner) => (
            <div
              key={partner.code}
              className="flex flex-col items-center group cursor-pointer"
            >
              {partner.image ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${partner.color} mb-2 font-bold text-sm sm:text-base border-2 border-transparent group-hover:scale-110 transition-transform`}
                >
                  {partner.code}
                </div>
              )}
              <span className="text-xs text-muted-foreground max-w-[100px] text-center hidden group-hover:block transition-all absolute mt-20 bg-background/90 p-1 rounded shadow-sm border z-10">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
