import { MessageCircle, ArrowRight, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "351925232484";
const WHATSAPP_MESSAGE =
  "Olá Caio! Vim pelo seu site e gostaria de conversar sobre uma proposta para meu projeto/evento.";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function CTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-orange w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />
      <div className="orb orb-amber w-[400px] h-[400px] top-0 right-0 opacity-[0.07]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-warm rounded-3xl p-10 md:p-16 text-center glow-orange">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-orange-300 tracking-widest uppercase font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Disponível para novos projetos
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black text-t1 leading-tight mb-6">
            Pronto para elevar{" "}
            <span className="gradient-text">sua imagem no desporto?</span>
          </h2>

          {/* Subtext */}
          <p className="text-t2 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Seja para um campeonato, ensaio, produção de vídeo ou uma
            consultoria completa de posicionamento — vamos construir juntos uma
            presença que te diferencia no tatame e fora dele.
          </p>

          {/* Main CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-5 rounded-full mb-6"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp agora
            <ArrowRight size={18} />
          </a>

          <p className="text-t4 text-xs mb-12">
            Resposta em até 24 horas · Sem compromisso
          </p>

          <div className="section-divider mb-10" />

          {/* Secondary contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-t3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <InstagramIcon size={16} />
              @caiovalle.bjj
            </a>
            <span className="hidden sm:block text-t4">·</span>
            <a
              href="mailto:contato@caiovalle.com"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Mail size={16} />
              contato@caiovalle.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
