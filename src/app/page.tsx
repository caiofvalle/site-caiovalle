"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, languages } from "@/i18n/translations";
import { home } from "@/i18n/home";
import "lenis/dist/lenis.css";

const evelinsStyle = `
  @font-face {
    font-family: 'Evellins';
    src: url('/evelins.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const WHATSAPP = "351925232484";
const WHATSAPP_DISPLAY = "+351 925 232 484";
const INSTAGRAM = "caiovalle.photo";

const galleries = [
  { name: "Roma Open + European Nogi", href: "https://galerias.thevallesfotografia.com/romaopeneuropeannogi26/", img: "/hero-roma.jpg" },
  { name: "Lisbon Open + European Kids Nogi", href: "https://galerias.thevallesfotografia.com/lisboninternationalopenibjjf26/" },
  { name: "AJP Loures", href: "https://galerias.thevallesfotografia.com/ajptour/", img: "/ajploures.jpg" },
  { name: "AJP Sines", href: "https://galerias.thevallesfotografia.com/ajpsines/", img: "/ajpsines-300.jpg" },
  { name: "ADCC Iberian Lisbon '26", href: "https://galerias.thevallesfotografia.com/adcciberianlisbonopen/", img: "/adcc-212.jpg" },
  { name: "Grandslam FPJJB '26", href: "https://galerias.thevallesfotografia.com/grandslam/", img: "/grandslam-65.jpg" },
];

const FEATURED = galleries[0];

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.856L.057 23.215c-.112.388.249.749.637.637l5.358-1.478A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.703-.504-5.254-1.385l-.377-.217-3.899 1.075 1.076-3.899-.217-.377A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function useLisbonClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Lisbon" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | undefined;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.09 });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  const { lang, setLang } = useLanguage();
  const tr = t[lang];
  const h = home[lang];
  const time = useLisbonClock();
  useSmoothScroll();
  useReveal();

  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(tr.navbar.whatsappMessage)}`;
  const tagline = `${tr.hero.line1gradient}${tr.hero.line1normal} ${tr.hero.line2normal}${tr.hero.line2gradient}`.toLowerCase();

  // floating preview that follows the cursor over the gallery index
  const [preview, setPreview] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const movePreview = (e: React.MouseEvent) => {
    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 120}px, 0)`;
    }
  };

  const ringText = `${h.latest} • ${h.viewPhotos} • `.toUpperCase();

  return (
    <div className="home min-h-screen w-full">
      <style>{evelinsStyle}</style>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <a href={FEATURED.href} target="_blank" rel="noopener noreferrer" aria-label={`${FEATURED.name} – ${h.latest}`} className="absolute inset-0">
          <Image
            src="/hero-roma.jpg"
            alt={FEATURED.name}
            fill
            preload
            sizes="100vw"
            className="home-kenburns object-cover object-[50%_55%]"
          />
        </a>
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0) 22%, rgba(10,10,10,0) 45%, rgba(10,10,10,0.9) 88%, #0a0a0a 100%)" }} />

        {/* Z1 → Z2: identity left, utilities right */}
        <header className="absolute inset-x-0 top-0 z-20 px-5 sm:px-10 pt-5 sm:pt-7 grid grid-cols-[1fr_auto] sm:grid-cols-3 items-center">
          <a href="#" className="relative h-7 w-28 sm:h-8 sm:w-36" aria-label="Caio Valle">
            <Image src="/logocaiov.png" alt="Caio Valle" fill sizes="144px" className="object-contain object-left" />
          </a>
          <div className="hidden sm:flex justify-center gap-6 f-mono text-white/80">
            <span>Lisboa · PT</span>
            <span suppressHydrationWarning>{time}</span>
          </div>
          <nav className="flex justify-end gap-1 f-mono" aria-label="Language">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1.5 rounded-full transition-colors ${lang === l.code ? "text-black" : "text-white/60 hover:text-white"}`}
                style={lang === l.code ? { background: "var(--gold-grad)" } : undefined}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </header>

        {/* role, top-left under the logo */}
        <p className="pointer-events-none absolute left-5 sm:left-10 top-[4.75rem] sm:top-24 z-10 f-mono text-white/70">
          {h.role}
        </p>

        {/* Z3 → Z4: the event on the left, the action on the right */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 sm:px-10 pb-8 sm:pb-12 flex flex-col-reverse sm:flex-row items-end justify-between gap-4 sm:gap-6">
          <div className="min-w-0 w-full sm:w-auto">
            <p className="f-mono text-white/80 flex items-center gap-2 mb-4 sm:mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "var(--gold)" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} />
              </span>
              (01) {h.latest}
            </p>
            <h1 className="f-display text-[clamp(2.1rem,7.4vw,9rem)]">
              <span className="block">Roma Open</span>
              <span className="block">
                <span className="whitespace-nowrap"><span className="text-gold-grad">+</span>&nbsp;European</span> Nogi
              </span>
            </h1>
          </div>

          <a
            href={FEATURED.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto group relative shrink-0 w-[5.5rem] h-[5.5rem] sm:w-36 sm:h-36"
            aria-label={h.viewPhotos}
          >
            <svg viewBox="0 0 100 100" className="home-spin absolute inset-0 w-full h-full" aria-hidden>
              <defs>
                <path id="ring" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
              </defs>
              <text className="f-mono" style={{ fontSize: 8.6, letterSpacing: 2.2, fill: "rgba(247,247,245,0.85)" }}>
                <textPath href="#ring">{ringText}</textPath>
              </text>
            </svg>
            <span
              className="absolute inset-[26%] rounded-full flex items-center justify-center text-black transition-transform duration-500 group-hover:scale-110"
              style={{ background: "var(--gold-grad)" }}
            >
              <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </a>
        </div>

        {/* scroll cue */}
        <div className="pointer-events-none hidden sm:flex absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex-col items-center gap-2 f-mono text-white/50">
          <span>{h.scroll}</span>
          <span className="block w-px h-8 bg-white/50 home-cue" />
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="relative overflow-hidden border-y py-5 sm:py-7" style={{ borderColor: "var(--line)" }} aria-hidden>
        <div className="home-marquee flex w-max whitespace-nowrap f-display text-[clamp(2.5rem,8vw,7rem)]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="flex items-center">
                  <span className={i % 2 ? "text-outline" : ""}>{h.findPhotos}</span>
                  <span className="text-gold-grad mx-[0.35em]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main>
        {/* ── GALLERIES INDEX ─────────────────────────────── */}
        <section id="galleries" className="px-5 sm:px-10 pt-20 sm:pt-32 pb-20 sm:pb-28" onMouseMove={movePreview}>
          <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="f-display text-[clamp(2.5rem,7vw,6rem)]">
              {h.galleries}
              <sup className="f-mono align-top ml-2 sm:ml-3 text-[11px] sm:text-xs tracking-[0.16em]" style={{ color: "var(--gold)" }}>
                ({String(galleries.length).padStart(2, "0")})
              </sup>
            </h2>
            <p className="max-w-xs text-sm sm:text-base" style={{ color: "var(--muted)" }}>{h.galleriesSub}</p>
          </div>

          <ul className="border-t" style={{ borderColor: "var(--line)" }} onMouseLeave={() => setPreview(null)}>
            {galleries.map((g, i) => (
              <li key={g.href} className="reveal border-b" style={{ borderColor: "var(--line)", transitionDelay: `${i * 60}ms` }}>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setPreview(g.img ?? null)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[5rem_1fr_auto] items-center gap-3 py-6 sm:py-8"
                >
                  <span className="f-mono" style={{ color: "var(--muted)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="f-display text-[clamp(1.3rem,3.6vw,3.4rem)] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#e8c873]">
                    {g.name}
                    {i === 0 && (
                      <span className="f-mono align-middle ml-3 hidden sm:inline-block px-2.5 py-1 rounded-full text-black" style={{ background: "var(--gold-grad)", fontSize: 10 }}>
                        {h.latest}
                      </span>
                    )}
                  </span>
                  <span
                    className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border transition-all duration-500 group-hover:border-transparent group-hover:text-black group-hover:rotate-45"
                    style={{ borderColor: "var(--line-strong)" }}
                  >
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gold-grad)" }} />
                    <ArrowUpRight className="relative w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            ref={previewRef}
            className="home-preview pointer-events-none fixed left-0 top-0 z-40 w-56 aspect-[4/5] rounded-xl overflow-hidden transition-[opacity,scale] duration-300"
            style={{ opacity: preview ? 1 : 0, scale: preview ? "1" : "0.9", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
            aria-hidden
          >
            {galleries.filter((g) => g.img).map((g) => (
              <Image
                key={g.img}
                src={g.img!}
                alt=""
                fill
                sizes="224px"
                className="object-cover transition-opacity duration-300"
                style={{ opacity: preview === g.img ? 1 : 0 }}
              />
            ))}
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────── */}
        <section className="px-5 sm:px-10 pb-24 sm:pb-36">
          <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="f-display text-[clamp(2.5rem,7vw,6rem)]">{h.contact}</h2>
            <p className="max-w-xs text-sm sm:text-base" style={{ color: "var(--muted)" }}>{h.contactSub}</p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {[
              { href: `https://www.instagram.com/${INSTAGRAM}`, label: "Instagram", hint: h.instagramHint, value: `@${INSTAGRAM}`, icon: <InstagramIcon /> },
              { href: waUrl, label: "WhatsApp", hint: h.whatsappHint, value: WHATSAPP_DISPLAY, icon: <WhatsAppIcon /> },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative overflow-hidden rounded-2xl border px-5 py-5 sm:px-8 sm:py-7 flex items-center gap-4 sm:gap-6 transition-colors duration-500 hover:border-[rgba(217,178,95,0.55)]"
                style={{ borderColor: "var(--line)", background: "var(--panel)", transitionDelay: `${i * 80}ms` }}
              >
                <span
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "radial-gradient(600px 160px at 15% 50%, rgba(217,178,95,0.14), transparent 70%)" }}
                />
                <span className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border text-[#e8c873]" style={{ borderColor: "var(--line)" }}>
                  {c.icon}
                </span>
                <span className="relative flex-1 min-w-0">
                  <span className="block f-mono mb-1.5" style={{ color: "var(--muted)" }}>{c.hint}</span>
                  <span className="block f-display text-2xl sm:text-4xl">{c.label}</span>
                </span>
                <span className="relative hidden sm:block text-base" style={{ color: "var(--muted)" }}>{c.value}</span>
                <span
                  className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-500 group-hover:rotate-45 group-hover:text-black group-hover:border-transparent"
                  style={{ borderColor: "var(--line-strong)" }}
                >
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gold-grad)" }} />
                  <ArrowUpRight className="relative w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER: giant signature ─────────────────────── */}
      <footer className="relative overflow-hidden border-t px-5 sm:px-10 pt-10 sm:pt-14 pb-6" style={{ borderColor: "var(--line)" }}>
        <p className="reveal f-script text-2xl sm:text-4xl mb-6 sm:mb-10 text-gold-grad">{tagline}</p>
        <svg viewBox="0 0 1000 140" className="reveal w-full h-auto" aria-label="Caio Valle">
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="f-display"
            style={{ fontSize: 170, fill: "var(--paper)" }}
          >
            CAIO VALLE
          </text>
        </svg>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 f-mono" style={{ color: "var(--muted)" }}>
          <span>© {new Date().getFullYear()} Caio Valle</span>
          <span>Lisboa · Portugal</span>
          <a href="#" className="hover:text-white transition-colors">↑ Top</a>
        </div>
      </footer>
    </div>
  );
}
