import { Award, Camera, Globe, Users } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: Camera,
    label: "Fotógrafo Profissional",
    sub: "Especialista em artes marciais",
  },
  {
    icon: Globe,
    label: "Passe de Mídia",
    sub: "Acesso a eventos internacionais",
  },
  {
    icon: Users,
    label: "Comunidade BJJ",
    sub: "Praticante e entusiasta",
  },
  {
    icon: Award,
    label: "Especialista em Imagem",
    sub: "Estratégias para atletas",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-amber w-[400px] h-[400px] top-0 left-1/2 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto md:mx-0">
              <Image
                src="/c971071e-9ccd-47f2-9dd7-929dd5979cbc.JPG"
                alt="Caio Valle — Fotógrafo BJJ"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Photo badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-bold text-base">Caio Valle</p>
                  <p className="text-orange-400 text-xs tracking-wide">
                    Fotógrafo & Especialista em Imagem
                  </p>
                </div>
              </div>
            </div>

            {/* Floating credential card */}
            <div className="absolute -right-4 md:-right-10 top-1/3 glass-warm rounded-2xl p-4 animate-float">
              <p className="text-orange-400 text-2xl font-black">5+</p>
              <p className="text-t2 text-xs">Anos de experiência</p>
              <p className="text-t3 text-[10px]">em fotografia</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-2xl border border-orange-500/20 -z-10" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-2xl border border-orange-500/10 -z-10" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-orange-400/70 text-xs tracking-[0.4em] uppercase font-medium mb-4">
              Quem sou eu
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-t1 leading-tight mb-6">
              Apaixonado pelo jiu-jitsu,{" "}
              <span className="gradient-text">obcecado pela imagem</span>
            </h2>

            <div className="flex flex-col gap-5 text-t2 text-base leading-relaxed mb-10">
              <p>
                Como praticante de jiu-jitsu,
                sempre senti que as histórias por trás de cada luta mereciam ser
                preservadas com a mesma intensidade com que eram vividas.
              </p>
              <p>
                Transformei essa paixão em propósito:{" "}
                <span className="text-t1">
                  ser a ponte entre a arte marcial e a narrativa visual
                </span>{" "}
                que coloca atletas e academias no mapa.
              </p>
              <p>
                É um privilégio ter a oportunidade de fotografar e documentar
                grandes nomes do esporte — e hoje ofereço esse mesmo nível de
                profissionalismo para quem está construindo sua história.
              </p>
              <p>
                <span className="text-orange-400">
                  Minha missão é simples:
                </span>{" "}
                fazer com que sua marca, seu atleta ou sua academia seja vista,
                lembrada e respeitada.
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
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
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
