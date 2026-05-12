import { ArrowDown } from "lucide-react";

const WHATSAPP_NUMBER = "351925232484";
const WHATSAPP_MESSAGE =
  "Olá Caio! Vi seu site e quero saber mais sobre seus serviços.";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.92] tracking-tight mb-6 max-w-5xl mt-8">
          <span
            style={{
              background: "linear-gradient(135deg, #8B6914 0%, #FFD700 35%, #F5C842 60%, #DAA520 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(201,168,76,0.35))",
            }}
          >ENCONTRE</span>
          <span className="text-t1"> SUAS</span>
          <br />
          <span className="text-t1">FOTOS NAS </span>
          <span className="gradient-text">GALERIAS ABAIXO</span>
        </h1>

        <p className="text-t3 text-base md:text-lg mt-4 mb-2 tracking-wide">
          O Tatame conta a história. Eu a registo.
        </p>

        <a
          href="#gallery"
          className="mt-8 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 animate-bounce"
          aria-label="Ver galerias"
        >
          <ArrowDown size={20} />
        </a>

        {/* Stats bar — hidden */}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 hero-fade" />
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-2xl font-black gradient-text-subtle">{value}</span>
      </div>
      <span className="text-xs text-t3 tracking-wide uppercase">{label}</span>
    </div>
  );
}
