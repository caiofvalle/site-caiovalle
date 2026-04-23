import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "Atleta Profissional — Faixa Preta",
    academy: "Art of Jiu-Jitsu",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80",
    text: "O Caio tem uma capacidade única de capturar a essência de cada luta. Não é só uma foto — é um documento da sua jornada. Ele entende o jiu-jitsu de dentro para fora, e isso faz toda a diferença no resultado.",
    rating: 5,
  },
  {
    name: "Ana Carolina Lima",
    role: "Atleta — Faixa Roxa",
    academy: "Gracie Humaita SP",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "A consultoria de marca mudou completamente como eu me posiciono nas redes sociais. Em 3 meses meu Instagram cresceu 200% e comecei a receber propostas de patrocínio. Investimento que valeu cada centavo.",
    rating: 5,
  },
  {
    name: "Clube Spartan BJJ",
    role: "Academia",
    academy: "São Paulo, SP",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    text: "Contratamos o Caio para cobrir nosso torneio anual e ficamos impressionados. As fotos viraram material de marketing da academia e nos ajudaram a captar mais de 40 novos alunos em um mês.",
    rating: 5,
  },
  {
    name: "Thiago Borges",
    role: "Atleta IBJJF — Faixa Preta",
    academy: "Alliance São Paulo",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "Profissional impecável. Entrega no prazo, qualidade absurda e ainda entende o que você precisa antes de você mesmo pedir. Melhor investimento que fiz para minha carreira esportiva.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-orange w-[400px] h-[400px] top-10 left-0 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400/70 text-xs tracking-[0.4em] uppercase font-medium mb-4">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-t1 mb-5">
            O que dizem{" "}
            <span className="gradient-text">atletas e academias</span>
          </h2>
          <p className="text-t3 max-w-lg mx-auto text-base">
            Resultados reais de quem confiou no trabalho e transformou sua
            presença no universo do jiu-jitsu.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <Quote size={24} className="text-orange-500/30" />

              <p className="text-t2 text-sm leading-relaxed flex-1">{t.text}</p>

              <div className="section-divider" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-orange-500/20">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-t1 font-semibold text-sm">{t.name}</p>
                  <p className="text-t3 text-xs">{t.role}</p>
                  <p className="text-orange-400/60 text-xs">{t.academy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
