import { Camera, Film, TrendingUp, Check, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const services = [
  {
    icon: Camera,
    tag: "Destaque — Fotografia",
    title: "Imagens que capturam a essência do jiu-jitsu",
    description:
      "Cobertura fotográfica profissional de campeonatos, seminários e treinos. Cada frame conta a história da sua jornada com a precisão e intensidade que o esporte exige.",
    features: [
      "Cobertura de campeonatos IBJJF",
      "Ensaios para atletas e academias",
      "Edição profissional em 48h",
      "Alta resolução para uso digital e impresso",
    ],
    accent: "from-amber-400 to-orange-500",
    highlight: true,
    message: "Olá! Quero saber mais sobre fotografia para jiu-jitsu.",
  },
  {
    icon: Film,
    tag: "Vídeo",
    title: "Produções que elevam seu nível de profissionalismo",
    description:
      "De highlight reels a documentários de academia — criamos conteúdo audiovisual que gera engajamento, atrai alunos e projeta atletas para o próximo nível.",
    features: [
      "Highlight reels para atletas",
      "Vídeos institucionais de academias",
      "Cobertura de eventos ao vivo",
      "Pós-produção completa",
    ],
    accent: "from-orange-500 to-red-600",
    highlight: false,
    message: "Olá! Quero saber mais sobre produção de vídeo para jiu-jitsu.",
  },
  {
    icon: TrendingUp,
    tag: "Consultoria de Marca",
    title: "Posicionamento estratégico para atletas e academias",
    description:
      "Muito além da câmera. Desenvolvemos a identidade visual, narrativa e estratégia de conteúdo para que você seja reconhecido como referência no jiu-jitsu — dentro e fora do tatame.",
    features: [
      "Estratégia de conteúdo para redes sociais",
      "Identidade visual e direção criativa",
      "Mentoria de posicionamento e autoridade",
      "Acompanhamento mensal de resultados",
    ],
    accent: "from-amber-400 via-orange-500 to-red-500",
    highlight: false,
    message:
      "Olá! Tenho interesse na consultoria de posicionamento de marca. Quero saber mais.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-orange w-[500px] h-[500px] top-0 left-0 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400/70 text-xs tracking-[0.4em] uppercase font-medium mb-4">
            O que oferecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-t1 mb-5">
            A fotografia que{" "}
            <span className="gradient-text">transforma carreiras</span>
          </h2>
          <p className="text-t3 max-w-xl mx-auto text-base leading-relaxed">
            Cada serviço foi desenhado pensando na realidade do atleta e da academia.
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
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-500 ${
                  service.highlight
                    ? "glass-warm glow-orange border border-orange-500/20"
                    : "glass-card"
                }`}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="btn-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                      Mais Procurado
                    </span>
                  </div>
                )}

                {/* Tag */}
                <p
                  className={`text-[11px] font-semibold tracking-[0.3em] uppercase mb-6 ${
                    service.highlight ? "text-orange-400" : "text-t3"
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
                        className="text-orange-400 mt-0.5 shrink-0"
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
                      : "glass text-t2 hover:text-t1 hover:border-orange-500/30"
                  }`}
                >
                  Solicitar proposta
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
