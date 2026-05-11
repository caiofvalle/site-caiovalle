import { ArrowRight, Camera, Film, TrendingUp, ShieldCheck, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "351925232484";
const WHATSAPP_MESSAGE =
  "Olá Caio! Vi seu site e quero saber mais sobre seus serviços.";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-grid">
      {/* Background orbs */}
      <div className="orb orb-orange w-[600px] h-[600px] -top-40 -right-40" />
      <div className="orb orb-amber w-[400px] h-[400px] bottom-0 -left-20" />
      <div className="orb orb-orange w-[300px] h-[300px] top-1/2 left-1/3 opacity-[0.08]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-6 max-w-5xl mt-8">
          <span className="text-t1">The mat reveals.</span>
          <br />
          <span className="gradient-text">I register.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-t2 text-lg md:text-xl max-w-2xl leading-relaxed mb-4">
          O tatame conta a história, eu a registo. — Caio Valle | BJJ Photographer
        </p>


        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full text-base"
          >
            Falar no WhatsApp
            <ArrowRight size={18} />
          </a>
          <a
            href="#gallery"
            className="flex items-center gap-2 glass text-t2 hover:text-t1 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:border-orange-500/25"
          >
            Ver Galerias
          </a>
        </div>

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
