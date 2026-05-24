"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="igHeroGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fcb045" />
          <stop offset="50%" stopColor="#fd1d1d" />
          <stop offset="100%" stopColor="#833ab4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#igHeroGrad)" />
      <circle cx="12" cy="12" r="4" stroke="url(#igHeroGrad)" />
      <circle cx="17.5" cy="6.5" r="1" fill="url(#igHeroGrad)" />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">

        {/* Instagram pill */}
        <a
          href="https://instagram.com/caiovalle.bjj"
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex items-center gap-2.5 px-5 py-2.5 rounded-full text-t2 hover:text-t1 transition-all duration-300 group mb-10 mt-8"
          style={{ borderColor: "rgba(131,58,180,0.25)" }}
        >
          <InstagramIcon size={16} />
          <span className="text-sm font-medium">{tr.instagramCta}</span>
          <ArrowRight size={13} className="opacity-50 group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.92] tracking-tight mb-6 max-w-5xl">
          <span
            style={{
              background: "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(201,168,76,0.35))",
            }}
          >{tr.line1gradient}</span>
          <span className="text-t1">{tr.line1normal}</span>
          <br />
          <span className="text-t1">{tr.line2normal}</span>
          <span className="gradient-text">{tr.line2gradient}</span>
        </h1>

        <p className="text-t3 text-base md:text-lg mt-4 mb-2 tracking-wide">
          {tr.subtitle}
        </p>

        <a
          href="#gallery"
          className="hero-gold-btn mt-8 w-14 h-14 rounded-full flex items-center justify-center animate-bounce"
          aria-label={tr.scrollAriaLabel}
        >
          <ArrowDown size={20} />
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 hero-fade" />
    </section>
  );
}
