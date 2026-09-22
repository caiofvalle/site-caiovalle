"use client";

import { MapPin, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";

const WHATSAPP_NUMBER = "351925232484";

const events = [
  {
    id: 4,
    name: "Allstars Lisbon",
    date: "12 Jul 2026",
    location: "Lisboa, Portugal",
    venue: "Pavilhão Casal Vistoso",
    confirmed: true,
    highlight: true,
  },
  {
    id: 5,
    name: "GRANDSLAM FPJJB '26",
    date: "",
    location: "",
    venue: "",
    confirmed: true,
    highlight: false,
  },
  {
    id: 2,
    name: "ADCC IBERIAN OPEN Lisbon '26",
    date: "30 Mai 2026",
    location: "Lisboa, Portugal",
    venue: "Casal Vistoso Sports Complex",
    confirmed: true,
    highlight: false,
  },
  {
    id: 1,
    name: "MSC Championship BJJ 3rd Edition",
    date: "16 Mai 2026",
    location: "Seixal, Portugal",
    venue: "Pavilhão Municipal da Torre da Marinha",
    confirmed: true,
    highlight: false,
  },
  {
    id: 3,
    name: "AJP Sines",
    date: "13 Jun 2026",
    location: "Sines, Portugal",
    venue: "Pavilhão Multiusos, Sines",
    confirmed: true,
    highlight: false,
  },
];

export default function Events() {
  const { lang } = useLanguage();
  const tr = t[lang].events;

  const contactUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tr.whatsappMessage)}`;

  return (
    <section id="events" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-orange w-[500px] h-[500px] bottom-0 right-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-medium mb-4">
            {tr.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-t1 mb-5">
            {tr.headline1}<span className="gradient-text">{tr.headline2}</span>
          </h2>
          <p className="text-t3 max-w-lg mx-auto text-base">
            {tr.subtitle}
          </p>
        </div>

        {/* Events list */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6"
              style={event.highlight ? {
                border: "1px solid rgba(201,168,76,0.45)",
                boxShadow: "0 0 24px rgba(201,168,76,0.12), inset 0 0 24px rgba(201,168,76,0.04)",
              } : {}}
            >
              {/* Icon */}
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 items-center justify-center shrink-0">
                <ShieldCheck size={22} className="text-white" />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-[var(--glass-border)]" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-t1 font-bold text-base md:text-lg">{event.name}</h3>
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full shrink-0 ${
                      !event.confirmed ? "bg-[var(--glass-bg)] text-t3 border border-white/30" : ""
                    }`}
                    style={event.confirmed ? {
                      background: "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)",
                      color: "#000",
                    } : {}}
                  >
                    {event.confirmed ? tr.statusConfirmed : tr.statusPending}
                  </span>
                </div>
                <p className="text-t3 text-sm mb-3">{tr.eventDescription}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-t4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-white/40" />
                    <span className="text-t3">{event.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-white/40" />
                    <span className="text-t3">{event.location}</span>
                  </span>
                  <span>{event.venue}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl shrink-0 transition-all duration-200"
                style={event.highlight ? {
                  background: "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)",
                  color: "#000",
                } : {
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--t3)",
                }}
              >
                {tr.secureCoverage}
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-t4 text-sm mb-4">
            {tr.bottomQuestion}
          </p>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {tr.bottomCta}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
