import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá Caio! Gostaria de mais informações.";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const footerLinks = {
  Serviços: [
    { label: "Fotografia", href: "#services" },
    { label: "Produção de Vídeo", href: "#services" },
    { label: "Posicionamento de Imagem", href: "#services" },
  ],
  Navegação: [
    { label: "Galeria", href: "#gallery" },
    { label: "Próximos Eventos", href: "#events" },
    { label: "Sobre", href: "#about" },
  ],
};

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="relative border-t border-subtle pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-6">
              <div className="relative overflow-hidden h-16 w-72">
                <Image
                  src="/logo2.png"
                  alt="Caio Valle BJJ Photographer"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
            <p className="text-t3 text-sm leading-relaxed max-w-xs mb-6">
              Fotografia e Posicionamento de Imagem para o universo do Jiu-Jitsu.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-t3 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-t3 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:contato@caiovalle.com"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-t3 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-t4 text-[11px] tracking-[0.3em] uppercase font-medium mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-t3 hover:text-t1 text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-t4 text-xs">
            © {new Date().getFullYear()} Caio Valle BJJ Photographer. Todos os
            direitos reservados.
          </p>
          <p className="text-t4 text-xs opacity-60">
            Portugal & Europa
          </p>
        </div>
      </div>
    </footer>
  );
}
