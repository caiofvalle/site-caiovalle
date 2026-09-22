"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";

const featuredGalleryItems = [
  {
    id: 10,
    src: "/ajploures.jpg",
    alt: "AJP Loures",
    category: "AJP Loures",
    descKey: "descEvents" as const,
    href: "https://galerias.thevallesfotografia.com/ajploures/",
  },
  {
    id: 6,
    src: "/ajpsines-300.jpg",
    alt: "AJP Sines",
    category: "AJP Sines",
    descKey: "descEvents" as const,
    href: "https://galerias.thevallesfotografia.com/ajpsines/",
  },
  {
    id: 5,
    src: "/adcc-212.jpg",
    alt: "ADCC Iberian Lisbon '26",
    category: "ADCC Iberian Lisbon '26",
    descKey: "descEvents" as const,
    href: "https://galerias.thevallesfotografia.com/adcciberianlisbonopen/",
  },
];

const moreGalleryItems = [
  {
    id: 9,
    category: "Allstars Lisbon",
    href: null,
  },
  {
    id: 8,
    category: "GRANDSLAM FPJJB '26",
    href: "https://galerias.thevallesfotografia.com/grandslam/",
  },
  {
    id: 7,
    category: "Torredembarra",
    href: "https://galerias.thevallesfotografia.com/torredembarrachallenge/",
  },
  {
    id: 1,
    category: "SJJIF European '26",
    href: "https://galerias.thevallesfotografia.com/sjjifeuropean/",
  },
  {
    id: 2,
    category: "Mafra Cup '26",
    href: "https://galerias.thevallesfotografia.com/mafracup26/",
  },
  {
    id: 3,
    category: "Campeonato Português | FPJJB '26",
    href: "https://galerias.thevallesfotografia.com/fpjjb/",
  },
  {
    id: 4,
    category: "MSC Championship '26",
    href: "https://galerias.thevallesfotografia.com/mscchampionship26/",
  },
];

export default function Gallery() {
  const { lang } = useLanguage();
  const tr = t[lang].gallery;

  return (
    <section id="gallery" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-amber w-[400px] h-[400px] top-20 right-0 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-medium mb-2">{tr.sectionLabel}</p>
        </div>

        {/* gallery photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGalleryItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[3/4]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-60"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />

              {/* Permanent bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Bottom info */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl leading-tight mb-1">
                  {item.category}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* More galleries list */}
        <div className="mt-10">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {tr.moreGalleries}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {moreGalleryItems.map((item) =>
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-t1 text-sm font-medium underline underline-offset-4 decoration-white/30 hover:decoration-t1 transition-colors"
                >
                  {item.category}
                </a>
              ) : (
                <span key={item.id} className="text-white/40 text-sm font-medium">
                  {item.category} ({tr.comingSoon})
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
