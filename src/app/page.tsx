"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const evelinsStyle = `
  @font-face {
    font-family: 'Evellins';
    src: url('/evelins.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const WHATSAPP = "351925232484";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fcb045" />
          <stop offset="50%" stopColor="#fd1d1d" />
          <stop offset="100%" stopColor="#833ab4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#igGrad)" />
      <circle cx="12" cy="12" r="4" stroke="url(#igGrad)" />
      <circle cx="17.5" cy="6.5" r="1" fill="url(#igGrad)" />
    </svg>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.856L.057 23.215c-.112.388.249.749.637.637l5.358-1.478A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.703-.504-5.254-1.385l-.377-.217-3.899 1.075 1.076-3.899-.217-.377A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

const GOLD = "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)";

const FEATURED = {
  name: "Roma Open + European Nogi",
  href: "https://galerias.thevallesfotografia.com/romaopeneuropeannogi26/",
};

const galleries = [
  { id: 12, name: FEATURED.name, href: FEATURED.href, span: true },
  { id: 11, name: "Lisbon Open + European Kids Nogi", href: "https://galerias.thevallesfotografia.com/lisboninternationalopenibjjf26/", span: true },
  { id: 10, name: "AJP Loures", href: "https://galerias.thevallesfotografia.com/ajptour/" },
  { id: 6,  name: "AJP Sines", href: "https://galerias.thevallesfotografia.com/ajpsines/" },
  { id: 5,  name: "ADCC Iberian Lisbon '26", href: "https://galerias.thevallesfotografia.com/adcciberianlisbonopen/" },
  { id: 8,  name: "GRANDSLAM FPJJB '26", href: "https://galerias.thevallesfotografia.com/grandslam/" },
];

export default function Home() {
  const { lang } = useLanguage();
  const tr = t[lang];
  const waMsg = encodeURIComponent(tr.navbar.whatsappMessage);

  return (
    <>
      <style>{evelinsStyle}</style>
      <Navbar />

      {/* Hero */}
      <section className="px-4 sm:px-10 pt-20 sm:pt-28">
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mx-auto w-full max-w-6xl rounded-[22px] p-[2px] transition-shadow duration-500 shadow-[0_0_24px_rgba(201,168,76,0.25)] hover:shadow-[0_0_40px_rgba(201,168,76,0.45)]"
          style={{ background: GOLD }}
        >
          <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[20px] overflow-hidden" style={{ background: "var(--bg-base)" }}>
            <Image
              src="/hero-roma.jpg"
              alt={FEATURED.name}
              fill
              preload
              sizes="(min-width: 1232px) 1152px, 100vw"
              className="object-cover object-[50%_60%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,0) 60%)" }}
            />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {FEATURED.name.split(" + ").map((part, i) => (
                  <span key={part} className="block">
                    {i > 0 && <span className="font-light" style={{ color: "#DAA520" }}>+ </span>}
                    {part}
                  </span>
                ))}
              </h1>

              <span
                className="w-full sm:w-auto sm:min-w-[260px] shrink-0 rounded-xl px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 backdrop-blur-md"
                style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(201,168,76,0.45)" }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
                <span className="flex-1 min-w-0 text-white font-semibold text-sm sm:text-base">{tr.hero.galleryAvailable}</span>
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ background: GOLD }}
                >
                  <ArrowUpRight size={16} />
                </span>
              </span>
            </div>
          </div>
        </a>
      </section>

      <main className="max-w-5xl mx-auto px-6 sm:px-10 pb-32 pt-10 sm:pt-14">

        {/* Social links */}
        <div className="grid grid-cols-1 gap-4 mb-20 max-w-md mx-auto">
          <a
            href="https://www.instagram.com/caiovalle.photo"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl px-7 py-6 flex items-center gap-5 group"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
              <InstagramIcon size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-t1 font-semibold text-base">Instagram</p>
              <p className="text-t4 text-sm mt-0.5 truncate">@caiovalle.photo</p>
            </div>
            <ArrowUpRight size={16} className="text-white/25 group-hover:text-white/70 transition-colors shrink-0" />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl px-7 py-6 flex items-center gap-5 group"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
              <WhatsAppIcon size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-t1 font-semibold text-base">WhatsApp</p>
              <p className="text-t4 text-sm mt-0.5 truncate">{tr.navbar.whatsappBtn}</p>
            </div>
            <ArrowUpRight size={16} className="text-white/25 group-hover:text-white/70 transition-colors shrink-0" />
          </a>
        </div>

        {/* Galleries */}
        <div id="galleries" className="scroll-mt-24">
          <p className="text-white/35 text-xs font-medium mb-8">
            {tr.gallery.sectionLabel}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "var(--glass-border)" }}>
            {galleries.map((g) => (
              g.href ? (
                <a
                  key={g.id}
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-7 py-8 transition-all duration-200"
                  style={{ background: "var(--bg-base)", gridColumn: g.span ? "1 / -1" : undefined }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--glass-bg)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--bg-base)")}
                >
                  <span className="text-t2 text-lg font-semibold group-hover:text-t1 transition-colors">{g.name}</span>
                  <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-4" />
                </a>
              ) : (
                <div
                  key={g.id}
                  className="flex items-center justify-between px-7 py-8"
                  style={{ background: "var(--bg-base)", gridColumn: g.span ? "1 / -1" : undefined }}
                >
                  <span className="text-t4 text-lg font-semibold">{g.name}</span>
                  <span
                    className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shrink-0 ml-4"
                    style={{ background: "linear-gradient(135deg, #8B6914, #FFD700, #DAA520)", color: "#000" }}
                  >
                    {tr.gallery.comingSoon}
                  </span>
                </div>
              )
            ))}
          </div>
        </div>

      </main>
    </>
  );
}
