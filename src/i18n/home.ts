import type { Lang } from "./translations";

type HomeCopy = {
  role: string;
  latest: string;
  viewPhotos: string;
  findPhotos: string;
  galleries: string;
  galleriesSub: string;
  contact: string;
  contactSub: string;
  instagramHint: string;
  whatsappHint: string;
  scroll: string;
  signature: string;
};

export const home: Record<Lang, HomeCopy> = {
  en: {
    role: "Jiu-Jitsu photographer",
    latest: "Gallery available",
    viewPhotos: "View photos",
    findPhotos: "Find your photos",
    galleries: "Galleries",
    galleriesSub: "Pick your event and find your photos.",
    contact: "Let's talk",
    contactSub: "Bookings, events and questions.",
    instagramHint: "Follow the work",
    whatsappHint: "Talk to me",
    scroll: "(Scroll)",
    signature: "on the mat",
  },
  pt: {
    role: "Fotógrafo de Jiu-Jitsu",
    latest: "Galeria disponível",
    viewPhotos: "Ver fotos",
    findPhotos: "Encontra as tuas fotos",
    galleries: "Galerias",
    galleriesSub: "Escolhe o teu evento e encontra as tuas fotos.",
    contact: "Fala comigo",
    contactSub: "Marcações, eventos e dúvidas.",
    instagramHint: "Acompanha o trabalho",
    whatsappHint: "Fala comigo",
    scroll: "(Scroll)",
    signature: "no tatame",
  },
  fr: {
    role: "Photographe de Jiu-Jitsu",
    latest: "Galerie disponible",
    viewPhotos: "Voir les photos",
    findPhotos: "Trouve tes photos",
    galleries: "Galeries",
    galleriesSub: "Choisis ton événement et trouve tes photos.",
    contact: "Parlons-en",
    contactSub: "Réservations, événements et questions.",
    instagramHint: "Suivre le travail",
    whatsappHint: "Me parler",
    scroll: "(Scroll)",
    signature: "sur le tatami",
  },
  es: {
    role: "Fotógrafo de Jiu-Jitsu",
    latest: "Galería disponible",
    viewPhotos: "Ver fotos",
    findPhotos: "Encuentra tus fotos",
    galleries: "Galerías",
    galleriesSub: "Elige tu evento y encuentra tus fotos.",
    contact: "Hablemos",
    contactSub: "Reservas, eventos y dudas.",
    instagramHint: "Sigue el trabajo",
    whatsappHint: "Háblame",
    scroll: "(Scroll)",
    signature: "en el tatami",
  },
};
