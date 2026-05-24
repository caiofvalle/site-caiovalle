"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const galleryItems = [
  {
    id: 1,
    src: "/sjjif-7.jpg",
    alt: "SJJIF European '26",
    category: "SJJIF European '26",
    descKey: "descEvents" as const,
    href: "https://galerias.thevallesfotografia.com/sjjifeuropean/",
  },
  {
    id: 2,
    src: "/mafracup.jpg",
    alt: "Mafra Cup '26",
    category: "Mafra Cup '26",
    descKey: "descEvents" as const,
    href: "https://galerias.thevallesfotografia.com/mafracup26/",
    position: "70% center",
  },
  {
    id: 3,
    src: "/fpjjb.jpg",
    alt: "Campeonato Português | FPJJB '26",
    category: "Campeonato Português | FPJJB '26",
    descKey: "descPortraits" as const,
    href: "https://galerias.thevallesfotografia.com/fpjjb/",
  },
  {
    id: 4,
    src: "/msc.jpg",
    alt: "MSC Championship '26",
    category: "MSC Championship '26",
    descKey: "descEvents" as const,
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

        {/* 4 vertical photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/5]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-60"
                style={"position" in item ? { objectPosition: (item as { position?: string }).position } : {}}
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />

              {/* Permanent bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="glass text-white/80 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-bold text-base leading-tight mb-1">
                  {item.category}
                </p>
                <div className="flex items-center gap-1.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white/60 text-xs">{tr[item.descKey]}</p>
                  <ArrowRight size={12} className="text-white/60 shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="flex items-center justify-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-3 px-8 py-4 rounded-2xl text-t3 hover:text-t1 transition-all duration-300 group"
          >
            <InstagramIcon size={20} />
            <span className="text-sm font-medium">
              {tr.instagramCta}
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
