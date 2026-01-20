
import { cn } from "@/lib/utils";

const galleryImports = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,gif,webp}', {
  eager: true,
  import: 'default',
});

const images = Object.values(galleryImports) as string[];

export function GalleryMarquee() {
  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-10 border-y border-border/50">
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
