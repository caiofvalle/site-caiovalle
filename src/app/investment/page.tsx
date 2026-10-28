"use client";

import Link from "next/link";

const WHATSAPP = "351925232484";
const WA_MSG = encodeURIComponent("Olá Caio! Vi os teus packs e gostaria de garantir cobertura para o meu evento.");

export default function InvestmentPage() {
  return (
    <>
    <style>{`
      @font-face {
        font-family: 'Bellaboo';
        src: url('/bellaboo.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `}</style>
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "#00141D", color: "#f5f5f5" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          caiovalle.com
        </Link>
        <span
          className="text-base font-normal"
          style={{ color: "#8E4B00", fontFamily: "'Bellaboo', cursive", fontWeight: 400 }}
        >
          Lets Make History
        </span>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 pb-24">

        {/* Hero */}
        <section className="text-center py-20 md:py-28">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase font-medium mb-4">Athlete Coverage</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
            PACKS
          </h1>
          <p className="text-white/50 max-w-md mx-auto text-base leading-relaxed">
            I tell the stories that unfold on the mat. Photography is so much more than a frozen image — it&apos;s about the sweat, the struggle, and everything that comes before the result.
          </p>
        </section>

        {/* Divider */}
        <div className="w-full h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Packs */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Single Match */}
          <div
            className="rounded-3xl p-8 flex flex-col gap-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium mb-1">Pack 01</p>
                <h2 className="text-2xl font-black text-white leading-tight">SINGLE MATCH</h2>
                <p className="text-white/50 text-sm mt-1">15 Photos</p>
              </div>
              <span className="text-4xl font-black text-white shrink-0">65€</span>
            </div>
            <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <p className="text-white/50 text-sm leading-relaxed">
              Complete coverage of a single match, from the first grip to the official winner&apos;s announcement.
            </p>
          </div>

          {/* All Matches */}
          <div
            className="rounded-3xl p-8 flex flex-col gap-4 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(142,75,0,0.12) 0%, rgba(0,0,0,0) 100%)",
              border: "1px solid rgba(142,75,0,0.5)",
              boxShadow: "0 0 40px rgba(142,75,0,0.12)",
            }}
          >
            <div className="absolute top-4 right-4">
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: "#8E4B00", color: "#fff" }}
              >
                Most Popular
              </span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium mb-1">Pack 02</p>
                <h2 className="text-2xl font-black text-white leading-tight">ALL MATCHES</h2>
                <p className="text-white/50 text-sm mt-1">Unlimited Photos</p>
              </div>
              <span className="text-4xl font-black text-white shrink-0">250€</span>
            </div>
            <div className="w-full h-px" style={{ background: "rgba(142,75,0,0.3)" }} />
            <p className="text-white/50 text-sm leading-relaxed">
              Your championship story, in high resolution, with personalized coverage of every match and every moment off the mat.
            </p>
          </div>

        </section>

        {/* Add-on */}
        <div
          className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium mb-1">Add-on</p>
            <h3 className="text-lg font-bold text-white">+ Additional Open Class</h3>
            <p className="text-white/40 text-sm mt-0.5">Add to any pack</p>
          </div>
          <span className="text-3xl font-black text-white">65€</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Video note */}
        <div
          className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium mb-1">Video Coverage</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              For me, video is an art, and we limit our photo coverage to guarantee the best result. That&apos;s why I wholeheartedly recommend the work of my friend Maurilio.
            </p>
          </div>
          <a
            href="https://www.bjjsharing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-lg hover:opacity-70 transition-opacity shrink-0"
          >
            @BJJSharing
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p
            className="text-4xl md:text-5xl font-normal mb-8 leading-tight"
            style={{ fontFamily: "'Bellaboo', cursive", fontWeight: 400 }}
          >
            Lets Make History
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-105"
            style={{
              background: "#8E4B00",
              color: "#fff",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.856L.057 23.215c-.112.388.249.749.637.637l5.358-1.478A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.703-.504-5.254-1.385l-.377-.217-3.899 1.075 1.076-3.899-.217-.377A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Garantir Cobertura
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t px-6 py-6 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="text-white/25 text-xs">© 2026 Caio Valle · BJJ Photographer · Portugal & Europe</p>
      </footer>
    </main>
    </>
  );
}
