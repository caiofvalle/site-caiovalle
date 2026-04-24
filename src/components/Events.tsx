import { MapPin, Calendar, ExternalLink } from "lucide-react";

const events = [
  {
    id: 1,
    name: "MSC Championship BJJ 3rd Edition",
    date: "16 Mai 2026",
    location: "Seixal, Portugal",
    venue: "Pavilhão Municipal da Torre da Marinha",
    status: "Confirmado",
    highlight: true,
    description: "Cobertura fotográfica e audiovisual de atletas e do campeonato.",
  },
  {
    id: 2,
    name: "European Jiu-Jitsu Championship",
    date: "23-24 Mai 2026",
    location: "Setúbal, Portugal",
    venue: "Pavilhão Municipal das Manteigadas",
    status: "Confirmado",
    highlight: false,
    description: "Cobertura fotográfica e audiovisual do campeonato europeu.",
  },
];

const WHATSAPP_NUMBER = "351925232484";

export default function Events() {
  const contactUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá Caio! Vi que você cobre eventos IBJJF. Gostaria de mais informações sobre cobertura do meu evento."
  )}`;

  return (
    <section id="events" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-orange w-[500px] h-[500px] bottom-0 right-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400/70 text-xs tracking-[0.4em] uppercase font-medium mb-4">
            Agenda
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-t1 mb-5">
            Próximos <span className="gradient-text">eventos confirmados</span>
          </h2>
          <p className="text-t3 max-w-lg mx-auto text-base">
            Estaremos presentes nos principais campeonatos. Se seu evento está
            nessa lista, entre em contato para garantir sua cobertura.
          </p>
        </div>

        {/* Events list */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 ${
                event.highlight ? "border-orange-500/25 glow-orange-sm" : ""
              }`}
            >
              {/* Index */}
              <div className="hidden md:flex w-12 h-12 rounded-xl items-center justify-center shrink-0">
                <span className="gradient-text text-2xl font-black leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-[var(--glass-border)]" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-t1 font-bold text-lg">{event.name}</h3>
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      event.status === "Confirmado"
                        ? "bg-orange-500/15 text-orange-400"
                        : "bg-[var(--glass-bg)] text-t3"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <p className="text-t3 text-sm mb-3">{event.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-t4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-orange-400/60" />
                    <span className="text-t3">{event.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-orange-400/60" />
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
                className="flex items-center gap-2 glass text-t3 hover:text-t1 text-xs font-medium px-5 py-2.5 rounded-xl transition-all duration-200 hover:border-orange-500/20 shrink-0"
              >
                Garantir cobertura
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-t4 text-sm mb-4">
            Seu evento não está na lista?
          </p>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors underline underline-offset-4"
          >
            Entre em contato para solicitar cobertura personalizada
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
