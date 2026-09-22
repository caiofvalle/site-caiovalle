"use client";

import { Camera, Film, TrendingUp, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";

const WHATSAPP_NUMBER = "351925232484";

export default function Services() {
  const { lang } = useLanguage();
  const tr = t[lang].services;

  const services = [
    {
      icon: Camera,
      tag: tr.photoTag,
      title: tr.photoTitle,
      description: tr.photoDescription,
      features: [tr.photoF1, tr.photoF2, tr.photoF3, tr.photoF4],
      accent: "from-white/20 to-white/10",
      highlight: true,
      message: tr.photoMessage,
    },
    {
      icon: Film,
      tag: tr.videoTag,
      title: tr.videoTitle,
      description: tr.videoDescription,
      features: [tr.videoF1, tr.videoF2, tr.videoF3, tr.videoF4],
      accent: "from-white/20 to-white/10",
      highlight: false,
      message: tr.videoMessage,
    },
    {
      icon: TrendingUp,
      tag: tr.consultTag,
      title: tr.consultTitle,
      description: tr.consultDescription,
      features: [tr.consultF1, tr.consultF2, tr.consultF3, tr.consultF4],
      accent: "from-white/20 to-white/10",
      highlight: false,
      message: tr.consultMessage,
    },
  ];

  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-orange w-[500px] h-[500px] top-0 left-0 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-medium mb-4">
            {tr.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-t1 mb-5">
            {tr.headline1}
            <span className="gradient-text">{tr.headline2}</span>
          </h2>
          <p className="text-t3 max-w-xl mx-auto text-base leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`;

            return (
              <div
                key={service.tag}
                className="relative rounded-2xl p-8 flex flex-col transition-all duration-500 glass-card"
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="btn-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                      {tr.mostRequested}
                    </span>
                  </div>
                )}

                {/* Tag */}
                <p
                  className={`text-[11px] font-semibold tracking-[0.3em] uppercase mb-6 ${
                    service.highlight ? "text-white/60" : "text-t3"
                  }`}
                >
                  {service.tag}
                </p>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} p-0.5 mb-6`}
                >
                  <div className="w-full h-full rounded-[10px] bg-raised flex items-center justify-center">
                    <Icon size={22} className="text-t1" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-t1 leading-snug mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-t3 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="section-divider mb-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-t2"
                    >
                      <Check
                        size={14}
                        className="text-white/60 mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    service.highlight
                      ? "btn-primary text-white"
                      : "glass text-t2 hover:text-t1 hover:border-white/25"
                  }`}
                >
                  {tr.requestProposal}
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
