"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "351925232484";
const WHATSAPP_MESSAGE =
  "Olá Caio! Vim pelo seu site e gostaria de conversar sobre seus serviços.";

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse rings */}
        <span className="absolute w-14 h-14 rounded-full bg-orange-500/20 animate-ping" />
        <span className="absolute w-14 h-14 rounded-full bg-orange-500/10" />

        {/* Button */}
        <div className="relative w-14 h-14 btn-primary rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
          <MessageCircle size={24} className="text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 glass text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Falar no WhatsApp
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-white/10 border-y-[5px] border-y-transparent" />
        </div>
      </div>
    </a>
  );
}
