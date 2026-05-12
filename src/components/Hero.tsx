import { ArrowDown } from "lucide-react";

const WHATSAPP_NUMBER = "351925232484";
const WHATSAPP_MESSAGE =
  "Olá Caio! Vi seu site e quero saber mais sobre seus serviços.";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      {/* Background orbs */}
      <div className="orb orb-orange w-[600px] h-[600px] -top-40 -right-40" />
      <div className="orb orb-amber w-[400px] h-[400px] bottom-0 -left-20" />
      <div className="orb orb-orange w-[300px] h-[300px] top-1/2 left-1/3 opacity-[0.08]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.92] tracking-tight mb-6 max-w-5xl mt-8">
          <span className="text-t1">ENCONTRE AS SUAS</span>
          <br />
          <span className="text-t1">FOTOS NAS </span>
          <span className="gradient-text">GALERIAS ABAIXO</span>
        </h1>

        <a
          href="#gallery"
          className="mt-8 w-14 h-14 rounded-full border border-orange-500/40 flex items-center justify-center text-orange-400 hover:bg-orange-500/10 transition-all duration-300 animate-bounce"
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
