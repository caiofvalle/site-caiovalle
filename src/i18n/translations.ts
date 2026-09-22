export type Lang = "en" | "pt" | "fr" | "es";

export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
];

export interface Translations {
  navbar: {
    gallery: string;
    events: string;
    about: string;
    contact: string;
    whatsappBtn: string;
    whatsappMobile: string;
    themeAriaLabel: string;
    whatsappMessage: string;
  };
  hero: {
    line1gradient: string;
    line1normal: string;
    line2normal: string;
    line2gradient: string;
    subtitle: string;
    scrollAriaLabel: string;
    instagramCta: string;
  };
  gallery: {
    sectionLabel: string;
    instagramCta: string;
    comingSoon: string;
    descEvents: string;
    descPortraits: string;
    descSeminars: string;
    moreGalleries: string;
  };
  events: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    statusConfirmed: string;
    statusPending: string;
    tbaEventName: string;
    eventDescription: string;
    secureCoverage: string;
    bottomQuestion: string;
    bottomCta: string;
    whatsappMessage: string;
  };
  about: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    p1: string;
    p2a: string;
    p2b: string;
    p2c: string;
    p3: string;
    p4a: string;
    p4b: string;
    badgeSubtitle: string;
    credPhotographerLabel: string;
    credPhotographerSub: string;
    credMediaLabel: string;
    credMediaSub: string;
    credCommunityLabel: string;
    credCommunitySub: string;
    credPortfolioLabel: string;
    credPortfolioSub: string;
  };
  services: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    mostRequested: string;
    requestProposal: string;
    photoTag: string;
    photoTitle: string;
    photoDescription: string;
    photoF1: string;
    photoF2: string;
    photoF3: string;
    photoF4: string;
    photoMessage: string;
    videoTag: string;
    videoTitle: string;
    videoDescription: string;
    videoF1: string;
    videoF2: string;
    videoF3: string;
    videoF4: string;
    videoMessage: string;
    consultTag: string;
    consultTitle: string;
    consultDescription: string;
    consultF1: string;
    consultF2: string;
    consultF3: string;
    consultF4: string;
    consultMessage: string;
  };
  cta: {
    badge: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    btn: string;
    response: string;
    whatsappMessage: string;
  };
  footer: {
    brandDescription: string;
    galleriesCategory: string;
    navigationCategory: string;
    navGallery: string;
    navEvents: string;
    navAbout: string;
    navContact: string;
    copyright: string;
    region: string;
    whatsappMessage: string;
  };
  whatsapp: {
    tooltip: string;
    ariaLabel: string;
    message: string;
  };
}

export const t: Record<Lang, Translations> = {
  en: {
    navbar: {
      gallery: "Gallery",
      events: "Schedule",
      about: "About",
      contact: "Contact",
      whatsappBtn: "WhatsApp",
      whatsappMobile: "Talk on WhatsApp",
      themeAriaLabel: "Toggle theme",
      whatsappMessage:
        "Hello Caio! I saw your website and would like to know more about jiu-jitsu photography.",
    },
    hero: {
      line1gradient: "FIND",
      line1normal: " YOUR",
      line2normal: "PHOTOS IN THE ",
      line2gradient: "GALLERIES BELOW",
      subtitle: "I tell the stories that happen on the mat.",
      scrollAriaLabel: "View galleries",
      instagramCta: "See more on my Instagram",
    },
    gallery: {
      sectionLabel: "Available Galleries",
      instagramCta: "See more on Instagram",
      comingSoon: "Coming Soon",
      descEvents: "Event and championship coverage",
      descPortraits: "Individual portraits and shoots",
      descSeminars: "Photography and video for seminars",
      moreGalleries: "More galleries available",
    },
    events: {
      sectionLabel: "Schedule",
      headline1: "Upcoming ",
      headline2: "confirmed events",
      subtitle:
        "We'll be present at the main championships. If your event is on this list, get in touch to secure your coverage.",
      statusConfirmed: "Confirmed",
      statusPending: "Awaiting Confirmation",
      tbaEventName: "Next event to be announced",
      eventDescription: "Photo coverage of athletes and the championship.",
      secureCoverage: "Secure coverage",
      bottomQuestion: "Will you be at any of these events?",
      bottomCta: "Get in touch to secure your photo coverage",
      whatsappMessage:
        "Hello Caio! I saw you cover IBJJF events. I'd like more information about coverage for my event.",
    },
    about: {
      sectionLabel: "Who I am",
      headline1: "Passionate about jiu-jitsu, ",
      headline2: "obsessed with the image",
      p1: "As a jiu-jitsu practitioner, I always felt that the stories behind every fight deserved to be preserved with the same intensity they were lived.",
      p2a: "I turned that passion into purpose: ",
      p2b: "to be the bridge between the martial art and the visual narrative",
      p2c: " that puts athletes and academies on the map.",
      p3: "It's a privilege to photograph and document great names in the sport — and today I offer that same level of professionalism to those who are building their story.",
      p4a: "My mission is simple: ",
      p4b: "faithfully preserve every moment jiu-jitsu produces — and return it in images you'll want to keep forever.",
      badgeSubtitle: "Brazilian Jiu-Jitsu Photographer",
      credPhotographerLabel: "Professional Photographer",
      credPhotographerSub: "Specialist in martial arts",
      credMediaLabel: "Media Pass",
      credMediaSub: "Access to international events",
      credCommunityLabel: "BJJ Community",
      credCommunitySub: "Practitioner and enthusiast",
      credPortfolioLabel: "Pixieset Portfolio",
      credPortfolioSub: "Private galleries for clients",
    },
    services: {
      sectionLabel: "What we offer",
      headline1: "Photography that ",
      headline2: "transforms careers",
      subtitle:
        "Each service was designed with the reality of the athlete and the academy in mind.",
      mostRequested: "Most Requested",
      requestProposal: "Request a proposal",
      photoTag: "Highlight — Photography",
      photoTitle: "Images that tell the story behind the dedication",
      photoDescription:
        "Professional photo coverage of championships, seminars, and training sessions. Every frame tells the story of your journey with the precision and intensity the sport demands.",
      photoF1: "IBJJF championship coverage",
      photoF2: "Athlete and academy photo shoots",
      photoF3: "Professional editing within 48h",
      photoF4: "High resolution for digital and print use",
      photoMessage: "Hello! I'd like to know more about jiu-jitsu photography.",
      videoTag: "Video",
      videoTitle: "Productions that elevate your professionalism",
      videoDescription:
        "From highlight reels to academy documentaries — we create audiovisual content that drives engagement, attracts students, and takes athletes to the next level.",
      videoF1: "Highlight reels for athletes",
      videoF2: "Institutional videos for academies",
      videoF3: "Live event coverage",
      videoF4: "Full post-production",
      videoMessage:
        "Hello! I'd like to know more about video production for jiu-jitsu.",
      consultTag: "Image Consulting",
      consultTitle: "Strategic positioning for athletes and academies",
      consultDescription:
        "Far beyond the camera. We develop the visual identity, narrative, and content strategy so you become a recognized reference in jiu-jitsu — on and off the mat.",
      consultF1: "Social media content strategy",
      consultF2: "Visual identity and creative direction",
      consultF3: "Positioning and authority mentoring",
      consultF4: "Custom website creation",
      consultMessage:
        "Hello! I'm interested in brand positioning consulting. I'd like to know more.",
    },
    cta: {
      badge: "Available for new projects",
      headline1: "Want to capture ",
      headline2: "your moment on the mat?",
      subtitle:
        "Whether it's a championship, individual shoot, or seminar coverage — get in touch and let's make sure every moment is captured with quality.",
      btn: "Talk on WhatsApp now",
      response: "Response within 24 hours",
      whatsappMessage:
        "Hello Caio! I came from your website and would like to discuss photography for my event/shoot.",
    },
    footer: {
      brandDescription:
        "Professional Brazilian Jiu-Jitsu photography — championships, athletes, and seminars.",
      galleriesCategory: "Galleries",
      navigationCategory: "Navigation",
      navGallery: "Gallery",
      navEvents: "Schedule",
      navAbout: "About",
      navContact: "Contact",
      copyright: "All rights reserved.",
      region: "Portugal & Europe",
      whatsappMessage: "Hello Caio! I'd like more information.",
    },
    whatsapp: {
      tooltip: "Talk on WhatsApp",
      ariaLabel: "Talk on WhatsApp",
      message:
        "Hello Caio! I came from your website and would like to discuss your services.",
    },
  },

  pt: {
    navbar: {
      gallery: "Galeria",
      events: "Agenda",
      about: "Sobre",
      contact: "Contato",
      whatsappBtn: "WhatsApp",
      whatsappMobile: "Falar no WhatsApp",
      themeAriaLabel: "Alternar tema",
      whatsappMessage:
        "Olá Caio! Vi seu site e gostaria de saber mais sobre fotografia de jiu-jitsu.",
    },
    hero: {
      line1gradient: "ENCONTRE",
      line1normal: " SUAS",
      line2normal: "FOTOS NAS ",
      line2gradient: "GALERIAS ABAIXO",
      subtitle: "Eu conto as histórias que acontecem no tatame.",
      scrollAriaLabel: "Ver galerias",
      instagramCta: "Ver mais no meu Instagram",
    },
    gallery: {
      sectionLabel: "Galerias Disponíveis",
      instagramCta: "Ver mais no Instagram",
      comingSoon: "Em Breve",
      descEvents: "Cobertura em eventos e campeonatos",
      descPortraits: "Ensaios e retratos individuais",
      descSeminars: "Fotografia e vídeo para seminários",
      moreGalleries: "Mais galerias disponíveis",
    },
    events: {
      sectionLabel: "Agenda",
      headline1: "Próximos ",
      headline2: "eventos confirmados",
      subtitle:
        "Estaremos presentes nos principais campeonatos. Se seu evento está nessa lista, entre em contato para garantir sua cobertura.",
      statusConfirmed: "Confirmado",
      statusPending: "Aguardando Confirmação",
      tbaEventName: "Próximo evento a anunciar",
      eventDescription: "Cobertura fotográfica dos atletas e do campeonato.",
      secureCoverage: "Garantir cobertura",
      bottomQuestion: "Vai estar em algum desses eventos?",
      bottomCta: "Entre em contacto para obter sua cobertura fotográfica",
      whatsappMessage:
        "Olá Caio! Vi que você cobre eventos IBJJF. Gostaria de mais informações sobre cobertura do meu evento.",
    },
    about: {
      sectionLabel: "Quem sou eu",
      headline1: "Apaixonado pelo jiu-jitsu, ",
      headline2: "obcecado pela imagem",
      p1: "Como praticante de jiu-jitsu, sempre senti que as histórias por trás de cada luta mereciam ser preservadas com a mesma intensidade com que eram vividas.",
      p2a: "Transformei essa paixão em propósito: ",
      p2b: "ser a ponte entre a arte marcial e a narrativa visual",
      p2c: " que coloca atletas e academias no mapa.",
      p3: "É um privilégio ter a oportunidade de fotografar e documentar grandes nomes do esporte — e hoje ofereço esse mesmo nível de profissionalismo para quem está construindo sua história.",
      p4a: "Minha missão é simples: ",
      p4b: "preservar com fidelidade cada momento que o jiu-jitsu produz — e devolver isso em imagens que você vai querer guardar para sempre.",
      badgeSubtitle: "Fotógrafo de Brazilian Jiu-Jitsu",
      credPhotographerLabel: "Fotógrafo Profissional",
      credPhotographerSub: "Especialista em artes marciais",
      credMediaLabel: "Passe de Mídia",
      credMediaSub: "Acesso a eventos internacionais",
      credCommunityLabel: "Comunidade BJJ",
      credCommunitySub: "Praticante e entusiasta",
      credPortfolioLabel: "Portfólio Pixieset",
      credPortfolioSub: "Galerias privadas para clientes",
    },
    services: {
      sectionLabel: "O que oferecemos",
      headline1: "A fotografia que ",
      headline2: "transforma carreiras",
      subtitle:
        "Cada serviço foi desenhado pensando na realidade do atleta e da academia.",
      mostRequested: "Mais Procurado",
      requestProposal: "Solicitar proposta",
      photoTag: "Destaque — Fotografia",
      photoTitle: "Imagens que contam a história por trás da dedicação",
      photoDescription:
        "Cobertura fotográfica profissional de campeonatos, seminários e treinos. Cada frame conta a história da sua jornada com a precisão e intensidade que o esporte exige.",
      photoF1: "Cobertura de campeonatos IBJJF",
      photoF2: "Ensaios para atletas e academias",
      photoF3: "Edição profissional em 48h",
      photoF4: "Alta resolução para uso digital e impresso",
      photoMessage: "Olá! Quero saber mais sobre fotografia para jiu-jitsu.",
      videoTag: "Vídeo",
      videoTitle: "Produções que elevam seu nível de profissionalismo",
      videoDescription:
        "De highlight reels a documentários de academia — criamos conteúdo audiovisual que gera engajamento, atrai alunos e projeta atletas para o próximo nível.",
      videoF1: "Highlight reels para atletas",
      videoF2: "Vídeos institucionais de academias",
      videoF3: "Cobertura de eventos ao vivo",
      videoF4: "Pós-produção completa",
      videoMessage:
        "Olá! Quero saber mais sobre produção de vídeo para jiu-jitsu.",
      consultTag: "Consultoria de Imagem",
      consultTitle: "Posicionamento estratégico para atletas e academias",
      consultDescription:
        "Muito além da câmera. Desenvolvemos a identidade visual, narrativa e estratégia de conteúdo para que você seja reconhecido como referência no jiu-jitsu — dentro e fora do tatame.",
      consultF1: "Estratégia de conteúdo para redes sociais",
      consultF2: "Identidade visual e direção criativa",
      consultF3: "Mentoria de posicionamento e autoridade",
      consultF4: "Criação de sites personalizados",
      consultMessage:
        "Olá! Tenho interesse na consultoria de posicionamento de marca. Quero saber mais.",
    },
    cta: {
      badge: "Disponível para novos projetos",
      headline1: "Quer registar ",
      headline2: "o seu momento no tatame?",
      subtitle:
        "Seja para um campeonato, ensaio individual ou cobertura de seminário — entre em contacto e vamos garantir que cada momento fica registado com qualidade.",
      btn: "Falar no WhatsApp agora",
      response: "Resposta em até 24 horas",
      whatsappMessage:
        "Olá Caio! Vim pelo seu site e gostaria de conversar sobre fotografia para o meu evento/ensaio.",
    },
    footer: {
      brandDescription:
        "Fotografia profissional de Brazilian Jiu-Jitsu — campeonatos, atletas e seminários.",
      galleriesCategory: "Galerias",
      navigationCategory: "Navegação",
      navGallery: "Galeria",
      navEvents: "Agenda",
      navAbout: "Sobre",
      navContact: "Contato",
      copyright: "Todos os direitos reservados.",
      region: "Portugal & Europa",
      whatsappMessage: "Olá Caio! Gostaria de mais informações.",
    },
    whatsapp: {
      tooltip: "Falar no WhatsApp",
      ariaLabel: "Falar no WhatsApp",
      message:
        "Olá Caio! Vim pelo seu site e gostaria de conversar sobre seus serviços.",
    },
  },

  fr: {
    navbar: {
      gallery: "Galerie",
      events: "Agenda",
      about: "À propos",
      contact: "Contact",
      whatsappBtn: "WhatsApp",
      whatsappMobile: "Parler sur WhatsApp",
      themeAriaLabel: "Changer le thème",
      whatsappMessage:
        "Bonjour Caio ! J'ai vu votre site et j'aimerais en savoir plus sur la photographie jiu-jitsu.",
    },
    hero: {
      line1gradient: "TROUVEZ",
      line1normal: " VOS",
      line2normal: "PHOTOS DANS LES ",
      line2gradient: "GALERIES CI-DESSOUS",
      subtitle: "Je raconte les histoires qui se déroulent sur le tatami.",
      scrollAriaLabel: "Voir les galeries",
      instagramCta: "Voir plus sur mon Instagram",
    },
    gallery: {
      sectionLabel: "Galeries Disponibles",
      instagramCta: "Voir plus sur Instagram",
      comingSoon: "Bientôt",
      descEvents: "Couverture d'événements et de championnats",
      descPortraits: "Portraits et séances individuels",
      descSeminars: "Photographie et vidéo pour séminaires",
      moreGalleries: "Plus de galeries disponibles",
    },
    events: {
      sectionLabel: "Agenda",
      headline1: "Prochains ",
      headline2: "événements confirmés",
      subtitle:
        "Nous serons présents aux principaux championnats. Si votre événement figure sur cette liste, contactez-nous pour assurer votre couverture.",
      statusConfirmed: "Confirmé",
      statusPending: "En attente de Confirmation",
      tbaEventName: "Prochain événement à annoncer",
      eventDescription: "Couverture photo des athlètes et du championnat.",
      secureCoverage: "Réserver la couverture",
      bottomQuestion: "Vous serez à l'un de ces événements ?",
      bottomCta: "Contactez-nous pour votre couverture photo",
      whatsappMessage:
        "Bonjour Caio ! J'ai vu que vous couvrez les événements IBJJF. J'aimerais plus d'informations sur la couverture de mon événement.",
    },
    about: {
      sectionLabel: "Qui suis-je",
      headline1: "Passionné de jiu-jitsu, ",
      headline2: "obsédé par l'image",
      p1: "En tant que pratiquant de jiu-jitsu, j'ai toujours senti que les histoires derrière chaque combat méritaient d'être préservées avec la même intensité qu'elles étaient vécues.",
      p2a: "J'ai transformé cette passion en vocation : ",
      p2b: "être le pont entre l'art martial et la narration visuelle",
      p2c: " qui met les athlètes et les académies sur la carte.",
      p3: "C'est un privilège de photographier et de documenter les grands noms du sport — et aujourd'hui j'offre ce même niveau de professionnalisme à ceux qui construisent leur histoire.",
      p4a: "Ma mission est simple : ",
      p4b: "préserver fidèlement chaque moment que le jiu-jitsu produit — et le restituer en images que vous voudrez garder pour toujours.",
      badgeSubtitle: "Photographe de Brazilian Jiu-Jitsu",
      credPhotographerLabel: "Photographe Professionnel",
      credPhotographerSub: "Spécialiste en arts martiaux",
      credMediaLabel: "Pass Média",
      credMediaSub: "Accès aux événements internationaux",
      credCommunityLabel: "Communauté BJJ",
      credCommunitySub: "Pratiquant et passionné",
      credPortfolioLabel: "Portfolio Pixieset",
      credPortfolioSub: "Galeries privées pour clients",
    },
    services: {
      sectionLabel: "Ce que nous offrons",
      headline1: "La photographie qui ",
      headline2: "transforme les carrières",
      subtitle:
        "Chaque service a été conçu en pensant à la réalité de l'athlète et de l'académie.",
      mostRequested: "Le Plus Demandé",
      requestProposal: "Demander un devis",
      photoTag: "En vedette — Photographie",
      photoTitle: "Des images qui racontent l'histoire derrière la dévotion",
      photoDescription:
        "Couverture photo professionnelle de championnats, séminaires et entraînements. Chaque image raconte l'histoire de votre parcours avec la précision et l'intensité qu'exige le sport.",
      photoF1: "Couverture des championnats IBJJF",
      photoF2: "Séances photo pour athlètes et académies",
      photoF3: "Retouches professionnelles en 48h",
      photoF4: "Haute résolution pour usage numérique et imprimé",
      photoMessage:
        "Bonjour ! Je voudrais en savoir plus sur la photographie jiu-jitsu.",
      videoTag: "Vidéo",
      videoTitle: "Des productions qui élèvent votre professionnalisme",
      videoDescription:
        "Des highlight reels aux documentaires d'académie — nous créons du contenu audiovisuel qui génère de l'engagement, attire des élèves et propulse les athlètes au niveau supérieur.",
      videoF1: "Highlight reels pour athlètes",
      videoF2: "Vidéos institutionnelles pour académies",
      videoF3: "Couverture d'événements en direct",
      videoF4: "Post-production complète",
      videoMessage:
        "Bonjour ! Je voudrais en savoir plus sur la production vidéo jiu-jitsu.",
      consultTag: "Conseil en Image",
      consultTitle: "Positionnement stratégique pour athlètes et académies",
      consultDescription:
        "Bien au-delà de la caméra. Nous développons l'identité visuelle, la narration et la stratégie de contenu pour que vous soyez reconnu comme référence dans le jiu-jitsu — sur et hors du tatami.",
      consultF1: "Stratégie de contenu pour réseaux sociaux",
      consultF2: "Identité visuelle et direction créative",
      consultF3: "Mentorat en positionnement et autorité",
      consultF4: "Création de sites web personnalisés",
      consultMessage:
        "Bonjour ! Je suis intéressé par le conseil en positionnement de marque. J'aimerais en savoir plus.",
    },
    cta: {
      badge: "Disponible pour de nouveaux projets",
      headline1: "Vous voulez immortaliser ",
      headline2: "votre moment sur le tatami ?",
      subtitle:
        "Que ce soit pour un championnat, une séance individuelle ou la couverture d'un séminaire — contactez-nous et assurons-nous que chaque moment est capturé avec qualité.",
      btn: "Parler sur WhatsApp maintenant",
      response: "Réponse sous 24 heures",
      whatsappMessage:
        "Bonjour Caio ! Je viens de votre site et j'aimerais discuter de photographie pour mon événement/séance.",
    },
    footer: {
      brandDescription:
        "Photographie professionnelle de Brazilian Jiu-Jitsu — championnats, athlètes et séminaires.",
      galleriesCategory: "Galeries",
      navigationCategory: "Navigation",
      navGallery: "Galerie",
      navEvents: "Agenda",
      navAbout: "À propos",
      navContact: "Contact",
      copyright: "Tous droits réservés.",
      region: "Portugal & Europe",
      whatsappMessage: "Bonjour Caio ! J'aimerais plus d'informations.",
    },
    whatsapp: {
      tooltip: "Parler sur WhatsApp",
      ariaLabel: "Parler sur WhatsApp",
      message:
        "Bonjour Caio ! Je viens de votre site et j'aimerais discuter de vos services.",
    },
  },

  es: {
    navbar: {
      gallery: "Galería",
      events: "Agenda",
      about: "Sobre mí",
      contact: "Contacto",
      whatsappBtn: "WhatsApp",
      whatsappMobile: "Hablar por WhatsApp",
      themeAriaLabel: "Cambiar tema",
      whatsappMessage:
        "¡Hola Caio! Vi tu sitio web y me gustaría saber más sobre fotografía de jiu-jitsu.",
    },
    hero: {
      line1gradient: "ENCUENTRA",
      line1normal: " TUS",
      line2normal: "FOTOS EN LAS ",
      line2gradient: "GALERÍAS ABAJO",
      subtitle: "Cuento las historias que suceden en el tatami.",
      scrollAriaLabel: "Ver galerías",
      instagramCta: "Ver más en mi Instagram",
    },
    gallery: {
      sectionLabel: "Galerías Disponibles",
      instagramCta: "Ver más en Instagram",
      comingSoon: "Próximamente",
      descEvents: "Cobertura de eventos y campeonatos",
      descPortraits: "Retratos y sesiones individuales",
      descSeminars: "Fotografía y vídeo para seminarios",
      moreGalleries: "Más galerías disponibles",
    },
    events: {
      sectionLabel: "Agenda",
      headline1: "Próximos ",
      headline2: "eventos confirmados",
      subtitle:
        "Estaremos presentes en los principales campeonatos. Si tu evento está en esta lista, contáctanos para asegurar tu cobertura.",
      statusConfirmed: "Confirmado",
      statusPending: "Pendiente de Confirmación",
      tbaEventName: "Próximo evento por anunciar",
      eventDescription: "Cobertura fotográfica de los atletas y el campeonato.",
      secureCoverage: "Asegurar cobertura",
      bottomQuestion: "¿Estarás en alguno de estos eventos?",
      bottomCta: "Contáctanos para obtener tu cobertura fotográfica",
      whatsappMessage:
        "¡Hola Caio! Vi que cubres eventos IBJJF. Me gustaría más información sobre la cobertura de mi evento.",
    },
    about: {
      sectionLabel: "Quién soy",
      headline1: "Apasionado por el jiu-jitsu, ",
      headline2: "obsesionado con la imagen",
      p1: "Como practicante de jiu-jitsu, siempre sentí que las historias detrás de cada combate merecían ser preservadas con la misma intensidad con que se vivían.",
      p2a: "Transformé esa pasión en propósito: ",
      p2b: "ser el puente entre el arte marcial y la narrativa visual",
      p2c: " que pone a los atletas y academias en el mapa.",
      p3: "Es un privilegio fotografiar y documentar a grandes nombres del deporte — y hoy ofrezco ese mismo nivel de profesionalismo a quienes están construyendo su historia.",
      p4a: "Mi misión es simple: ",
      p4b: "preservar con fidelidad cada momento que el jiu-jitsu produce — y devolvérselo en imágenes que querrás guardar para siempre.",
      badgeSubtitle: "Fotógrafo de Brazilian Jiu-Jitsu",
      credPhotographerLabel: "Fotógrafo Profesional",
      credPhotographerSub: "Especialista en artes marciales",
      credMediaLabel: "Pase de Prensa",
      credMediaSub: "Acceso a eventos internacionales",
      credCommunityLabel: "Comunidad BJJ",
      credCommunitySub: "Practicante y entusiasta",
      credPortfolioLabel: "Portafolio Pixieset",
      credPortfolioSub: "Galerías privadas para clientes",
    },
    services: {
      sectionLabel: "Lo que ofrecemos",
      headline1: "La fotografía que ",
      headline2: "transforma carreras",
      subtitle:
        "Cada servicio fue diseñado pensando en la realidad del atleta y la academia.",
      mostRequested: "Más Solicitado",
      requestProposal: "Solicitar propuesta",
      photoTag: "Destacado — Fotografía",
      photoTitle: "Imágenes que cuentan la historia detrás de la dedicación",
      photoDescription:
        "Cobertura fotográfica profesional de campeonatos, seminarios y entrenamientos. Cada frame cuenta la historia de tu recorrido con la precisión e intensidad que exige el deporte.",
      photoF1: "Cobertura de campeonatos IBJJF",
      photoF2: "Sesiones fotográficas para atletas y academias",
      photoF3: "Edición profesional en 48h",
      photoF4: "Alta resolución para uso digital e impreso",
      photoMessage:
        "¡Hola! Me gustaría saber más sobre fotografía de jiu-jitsu.",
      videoTag: "Vídeo",
      videoTitle: "Producciones que elevan tu nivel de profesionalismo",
      videoDescription:
        "Desde highlight reels hasta documentales de academia — creamos contenido audiovisual que genera engagement, atrae alumnos y proyecta atletas al siguiente nivel.",
      videoF1: "Highlight reels para atletas",
      videoF2: "Vídeos institucionales de academias",
      videoF3: "Cobertura de eventos en vivo",
      videoF4: "Post-producción completa",
      videoMessage:
        "¡Hola! Me gustaría saber más sobre producción de vídeo para jiu-jitsu.",
      consultTag: "Consultoría de Imagen",
      consultTitle: "Posicionamiento estratégico para atletas y academias",
      consultDescription:
        "Mucho más allá de la cámara. Desarrollamos la identidad visual, narrativa y estrategia de contenido para que seas reconocido como referencia en el jiu-jitsu — dentro y fuera del tatami.",
      consultF1: "Estrategia de contenido para redes sociales",
      consultF2: "Identidad visual y dirección creativa",
      consultF3: "Mentoría de posicionamiento y autoridad",
      consultF4: "Creación de sitios web personalizados",
      consultMessage:
        "¡Hola! Estoy interesado en la consultoría de posicionamiento de marca. Me gustaría saber más.",
    },
    cta: {
      badge: "Disponible para nuevos proyectos",
      headline1: "¿Quieres inmortalizar ",
      headline2: "tu momento en el tatami?",
      subtitle:
        "Ya sea para un campeonato, sesión individual o cobertura de seminario — contáctanos y asegurémonos de que cada momento queda registrado con calidad.",
      btn: "Hablar por WhatsApp ahora",
      response: "Respuesta en menos de 24 horas",
      whatsappMessage:
        "¡Hola Caio! Vine desde tu sitio web y me gustaría hablar sobre fotografía para mi evento/sesión.",
    },
    footer: {
      brandDescription:
        "Fotografía profesional de Brazilian Jiu-Jitsu — campeonatos, atletas y seminarios.",
      galleriesCategory: "Galerías",
      navigationCategory: "Navegación",
      navGallery: "Galería",
      navEvents: "Agenda",
      navAbout: "Sobre mí",
      navContact: "Contacto",
      copyright: "Todos los derechos reservados.",
      region: "Portugal & Europa",
      whatsappMessage: "¡Hola Caio! Me gustaría más información.",
    },
    whatsapp: {
      tooltip: "Hablar por WhatsApp",
      ariaLabel: "Hablar por WhatsApp",
      message:
        "¡Hola Caio! Vine desde tu sitio web y me gustaría hablar sobre tus servicios.",
    },
  },
};
