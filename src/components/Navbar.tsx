"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, languages } from "@/i18n/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLanguage();
  const tr = t[lang].navbar;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-subtle py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-10 flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <div className="relative overflow-hidden h-8 w-32 sm:h-10 sm:w-44">
            <Image
              src="/logocaiov.png"
              alt="Caio Valle BJJ Photographer"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language selector */}
          <div className="flex items-center gap-0.5 glass rounded-full px-1 py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[10px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-1 rounded-full transition-all duration-200 ${
                  lang === l.code ? "text-black" : "text-t3 hover:text-t1"
                }`}
                style={
                  lang === l.code
                    ? { background: "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)" }
                    : {}
                }
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={tr.themeAriaLabel}
            className="glass w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-t3 hover:text-t1 transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
