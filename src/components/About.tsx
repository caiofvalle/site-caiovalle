"use client";

import { Award, Camera, Globe, Users } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/i18n/translations";

export default function About() {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  const credentials = [
    { icon: Camera, label: tr.credPhotographerLabel, sub: tr.credPhotographerSub },
    { icon: Globe, label: tr.credMediaLabel, sub: tr.credMediaSub },
    { icon: Users, label: tr.credCommunityLabel, sub: tr.credCommunitySub },
    { icon: Award, label: tr.credPortfolioLabel, sub: tr.credPortfolioSub },
  ];

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-amber w-[400px] h-[400px] top-0 left-1/2 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto md:mx-0">
              <Image
                src="/c971071e-9ccd-47f2-9dd7-929dd5979cbc.JPG"
                alt="Caio Valle — BJJ Photographer"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Photo badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl px-4 py-3" style={{
                  background: "linear-gradient(135deg, rgba(139,105,20,0.7) 0%, rgba(255,215,0,0.25) 50%, rgba(218,165,32,0.6) 100%)",
                  border: "1px solid rgba(201,168,76,0.5)",
                  backdropFilter: "blur(12px)",
                }}>
                  <p className="font-bold text-base text-white">Caio Valle</p>
                  <p className="text-white/70 text-xs tracking-wide">
                    {tr.badgeSubtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-2xl border border-white/15 -z-10" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-2xl border border-white/8 -z-10" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-medium mb-4">
              {tr.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-t1 leading-tight mb-6">
              {tr.headline1}
              <span className="gradient-text">{tr.headline2}</span>
            </h2>

            <div className="flex flex-col gap-5 text-t2 text-base leading-relaxed mb-10">
              <p>{tr.p1}</p>
              <p>
                {tr.p2a}
                <span className="text-t1">{tr.p2b}</span>
                {tr.p2c}
              </p>
              <p>{tr.p3}</p>
              <p>
                <span className="text-white">{tr.p4a}</span>
                {tr.p4b}
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-3">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="glass-card rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-t1 text-sm font-semibold leading-tight">
                        {cred.label}
                      </p>
                      <p className="text-t3 text-xs">{cred.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
