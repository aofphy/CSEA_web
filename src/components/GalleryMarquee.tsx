
import { cn } from "@/lib/utils";

const images = [
  "/gallery/20604394_10154602575166513_103539804688226458_n-768x576.jpg",
  "/gallery/20604507_10154602610866513_9043060053624615318_n-768x483.jpg",
  "/gallery/20604563_10154602610456513_6200665106361909303_n-768x513.jpg",
  "/gallery/20622094_10154602653436513_8209444658319555815_n-768x576.jpg",
  "/gallery/20638297_10154603037186513_2434812010368585828_n-768x506.jpg",
  "/gallery/20663604_10154602611516513_2054082576132574765_n-768x511.jpg",
  "/gallery/38477-2-768x1024.jpg",
  "/gallery/521797-1-2048x922.jpg",
  "/gallery/ANSCSE-CONF.jpg",
];

export function GalleryMarquee() {
  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-10 border-y border-border/50">
      <div className="container mx-auto px-4 mb-4">
        <h2 className="text-2xl font-bold text-center mb-2">Our Activities Gallery</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex w-full overflow-hidden mask-linear-gradient">
            {/* First copy of images */}
            <div className="flex animate-marquee gap-4 min-w-full shrink-0 items-center justify-around pr-4">
            {images.map((src, index) => (
                <div 
                    key={`1-${index}`} 
                    className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl border border-border bg-muted shadow-sm hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
                >
                <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                </div>
            ))}
            </div>
            {/* Second copy of images for seamless loop */}
            <div className="flex animate-marquee gap-4 min-w-full shrink-0 items-center justify-around pr-4" aria-hidden="true">
            {images.map((src, index) => (
                <div 
                    key={`2-${index}`} 
                    className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl border border-border bg-muted shadow-sm hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
                >
                <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                </div>
            ))}
            </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
      </div>
    </div>
  );
}
