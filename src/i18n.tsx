import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt' | 'es' | 'fr';

interface TransformedContext {
  language: Language;
  setLanguage: (lang: Language) => void;
  // t returns ReactNode because we are decoding some simple HTML tags
  t: (key: string) => any;
}

const LanguageContext = createContext<TransformedContext | undefined>(undefined);

export const translations = {
  en: {
    hero: {
      titleLine1: "Destination Wedding",
      titleLine2: "Photo & Video in Portugal",
      subtitle: "Editorial storytelling with Photography, Videography & Aerial Drone coverage for couples traveling from around the world.",
      checkDate: "Check Your Wedding Date",
      viewWork: "View Our Work",
      scroll: "Scroll"
    },
    story: {
      title: "Planning a Wedding in <span class=\"italic\">Portugal</span> from Abroad?",
      p1: "Planning a destination wedding is exciting, but it also comes with uncertainty.",
      li1: "Different time zones.",
      li2: "Vendors you've never met.",
      li3: "Locations you've only seen online.",
      p2: "Many couples worry about choosing the right photographer without meeting in person.",
      p3: "At BH Wedding Photo, we specialize in destination weddings and guide couples through the entire experience.",
      p4: "Our goal is simple: capture not just how your wedding looked, but how it truly felt.",
      scheduleCall: "Schedule a Discovery Call"
    },
    about: {
      subtitle: "The Photographers",
      title: "Meet the faces behind <br class=\"hidden md:block\" /><span class=\"italic\">BH Wedding Photo</span>",
      p1: "At BH Wedding Photo, we document weddings in Portugal and across the world, following each story with a calm, observant and editorial approach.",
      p2: "Our focus is not on staging moments, but on capturing them as they are.",
      p3: "So that, years from now, you don’t just see your day — you feel it.",
      viewPortfolio: "View Our Portfolio"
    },
    why: {
      title: "Why International Couples <br class=\"hidden md:block\" /><span class=\"italic\">Choose BH Wedding Photo</span>",
      p1Title: "Human Connection",
      p1Desc: "We believe the best images come from trust, presence, and genuine connection — allowing you to feel completely at ease throughout your day.",
      p2Title: "Photo, Video & Drone",
      p2Desc: "Comprehensive coverage of your day with photography, cinematic videography, and stunning aerial drone footage.",
      p3Title: "Editorial + Documentary Style",
      p3Desc: "Elegant imagery inspired by fashion editorials while preserving authentic emotions.",
      p4Title: "Seamless Communication",
      p4Desc: "Planning a wedding abroad becomes easier when your photographer understands your expectations.",
      inquire: "Inquire About Your Wedding"
    },
    galleries: {
      title: "Featured <span class=\"italic\">Weddings</span>",
      viewAll: "View All Stories",
      viewGallery: "View Gallery",
      videosTitle: "Wedding Films"
    },
    exp: {
      title: "Our Destination <span class=\"italic\">Wedding Experience</span>",
      s1Title: "Inquiry",
      s1Desc: "Tell us about your wedding plans.",
      s2Title: "Discovery Call",
      s2Desc: "We schedule a video call to understand your vision.",
      s3Title: "Tailored Collection",
      s3Desc: "A photography collection adapted to your wedding.",
      s4Title: "Wedding Day",
      s4Desc: "We capture every moment naturally and discreetly.",
      s5Title: "Gallery Delivery",
      s5Desc: "You receive a curated gallery with timeless memories.",
      checkAvailability: "Check Availability"
    },
    test: {
      kindWords: "Kind Words"
    },
    cookie: {
      message: "We use cookies to improve your experience and analyze our traffic. By clicking 'Accept', you consent to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
      policy: "Cookie Policy"
    },
    dest: {
      title: "Photographing in ",
      title2: "or wherever your story takes us",
      p1: "From the terraced <span class=\"font-serif font-bold text-[1.1em] text-black\">Douro vineyards</span> to historic cities like <span class=\"font-serif font-bold text-[1.1em] text-black\">Porto and Lisbon</span>, we capture weddings all across Portugal.",
      p2: "But our passports are always ready. We are truly passionate about international destination weddings and would be honored to travel to your chosen country.",
      p3: "Whether you're celebrating locally or planning a faraway adventure, we'll bring our editorial documentary approach to you."
    },
    faq: {
      title: "Frequently Asked <span class=\"italic\">Questions</span>",
      q1: "Do you photograph weddings across Portugal?",
      a1: "Yes, we travel throughout Portugal, including Porto, the Douro Valley, Lisbon, Sintra, and the Algarve.",
      q2: "Can we book without visiting Portugal first?",
      a2: "Absolutely. Most of our international couples book us before visiting. We handle everything via video calls and email to ensure a seamless process.",
      q3: "Do you speak English?",
      a3: "Yes, we are fluent in English and communicate seamlessly with couples and vendors from around the world.",
      q4: "How far in advance should we book?",
      a4: "We recommend booking 12 to 18 months in advance, especially for peak wedding season (May to October).",
      q5: "What is included in your photography collections?",
      a5: "Our collections are tailored to your needs, typically including full-day coverage, a curated online gallery, high-resolution images, and an optional engagement session or second photographer.",
      q6: "How do payments work for international couples?",
      a6: "We accept international bank transfers (via Wise or direct wire) and major credit cards, making the payment process simple and secure regardless of your location.",
      q7: "Do you travel internationally for destination weddings?",
      a7: "Yes! While we are based in Portugal, we are passionate about traveling and have passports ready. We frequently capture love stories across Europe and worldwide. Wherever your celebration takes you, we'd be honored to document it with our editorial approach."
    },
    seo: {
      title: "Destination Wedding Photographer & Videographer in Portugal | BH Wedding Photo",
      description: "Editorial storytelling with photography, cinematic videography, and drone coverage for destination weddings in Portugal and worldwide."
    },
    avail: {
      title: "Taking bookings for <span class=\"italic\">2026 & 2027</span>",
      desc: "We try to reply to all inquiries within 48 hours. If you haven't heard from us, please check your spam folder.",
      contact: "Contact Us Today"
    },
    footer: {
      links: "Links",
      connect: "Connect",
      cookie: "Cookie Policy",
      rights: "BH Wedding Photo. All rights reserved."
    },
    contact: {
      title: "Let's capture your story",
      subtitle: "We take on a limited number of weddings each year to ensure every couple receives our full creative dedication. Please share as much detail as possible about your vision.",
      name: "Name *",
      namePlaceholder: "Your full name",
      partnerName: "Partner Name",
      partnerPlaceholder: "Their full name",
      email: "Email *",
      emailPlaceholder: "you@example.com",
      date: "Wedding Date",
      venue: "Venue (If known)",
      venuePlaceholder: "Where are you celebrating?",
      guests: "Estimated Guest Count",
      guestsPlaceholder: "e.g. 100",
      message: "Message *",
      messagePlaceholder: "Tell us about your combined vision, your style, and what's most important to you both for your day...",
      button: "Check Availability & Collections",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We have received your contact successfully and will be in touch shortly.",
      quickText: "Prefer something quick?",
      whatsapp: "Chat with us on WhatsApp"
    }
  },
  pt: {
    hero: {
      titleLine1: "Destination Wedding",
      titleLine2: "Foto e Vídeo em Portugal",
      subtitle: "Contar histórias editoriais com Fotografia, Videografia e cobertura de Drone para casais de todo o mundo.",
      checkDate: "Verifique a Sua Data",
      viewWork: "Veja o Nosso Trabalho",
      scroll: "Rolar"
    },
    story: {
      title: "A planear um casamento em <span class=\"italic\">Portugal</span> do estrangeiro?",
      p1: "Planear um casamento no destino é emocionante, mas também traz incertezas.",
      li1: "Diferentes fusos horários.",
      li2: "Fornecedores que nunca conheceu.",
      li3: "Locais que só viu online.",
      p2: "Muitos casais preocupam-se em escolher o fotógrafo certo sem se encontrarem pessoalmente.",
      p3: "Na BH Wedding Photo, somos especialistas em casamentos de destino e orientamos os casais em toda a experiência.",
      p4: "O nosso objetivo é simples: captar não apenas a aparência do seu casamento, mas como ele foi verdadeiramente sentido.",
      scheduleCall: "Marque uma Chamada de Descoberta"
    },
    about: {
      subtitle: "Os Fotógrafos",
      title: "Conheça os rostos por trás da <br class=\"hidden md:block\" /><span class=\"italic\">BH Wedding Photo</span>",
      p1: "Na BH Wedding Photo, documentamos casamentos em Portugal e no mundo, acompanhando cada história com uma abordagem calma, observadora e editorial.",
      p2: "O nosso foco não é encenar momentos, mas captá-los como eles são.",
      p3: "Para que, anos depois, não veja apenas o seu dia - sinta-o.",
      viewPortfolio: "Ver o Nosso Portefólio"
    },
    why: {
      title: "Por que os Casais Internacionais <br class=\"hidden md:block\" /><span class=\"italic\">Escolhem a BH Wedding Photo</span>",
      p1Title: "Conexão Humana",
      p1Desc: "Acreditamos que as melhores imagens vêm da confiança, presença e conexão genuína - permitindo que se sinta completamente à vontade durante o seu dia.",
      p2Title: "Foto, Vídeo e Drone",
      p2Desc: "Cobertura completa do seu dia com fotografia, videografia cinematográfica e impressionantes imagens aéreas de drone.",
      p3Title: "Estilo Editorial + Documental",
      p3Desc: "Imagens elegantes inspiradas em editoriais de moda, preservando as emoções autênticas.",
      p4Title: "Comunicação Clara",
      p4Desc: "Planear um casamento no estrangeiro torna-se mais fácil quando o seu fotógrafo compreende as suas expectativas.",
      inquire: "Pergunte Sobre o Seu Casamento"
    },
    galleries: {
      title: "<span class=\"italic\">Casamentos</span> em Destaque",
      viewAll: "Ver Todas as Histórias",
      viewGallery: "Ver Galeria",
      videosTitle: "Filmes de Casamento"
    },
    exp: {
      title: "A Nossa <span class=\"italic\">Experiência de Casamento</span>",
      s1Title: "Consulta",
      s1Desc: "Fale-nos sobre os seus planos de casamento.",
      s2Title: "Chamada de Descoberta",
      s2Desc: "Agendamos uma chamada de vídeo para compreender a sua visão.",
      s3Title: "Coleção Personalizada",
      s3Desc: "Uma coleção de fotografia adaptada ao seu casamento.",
      s4Title: "Dia do Casamento",
      s4Desc: "Capturamos cada momento de forma natural e discreta.",
      s5Title: "Entrega da Galeria",
      s5Desc: "Recebe uma galeria cuidadosamente curada com memórias intemporais.",
      checkAvailability: "Verificar Disponibilidade"
    },
    test: {
      kindWords: "Palavras de Carinho"
    },
    cookie: {
      message: "Utilizamos cookies para melhorar a sua experiência e analisar o nosso tráfego. Ao clicar em 'Aceitar', consente a nossa utilização de cookies.",
      accept: "Aceitar",
      decline: "Recusar",
      policy: "Política de Cookies"
    },
    dest: {
      title: "A Fotografar em ",
      title2: "ou onde a sua história nos levar",
      p1: "Desde as vinhas em socalcos do <span class=\"font-serif font-bold text-[1.1em] text-black\">Douro</span> até cidades históricas como <span class=\"font-serif font-bold text-[1.1em] text-black\">Porto e Lisboa</span>, capturamos casamentos em todo o país.",
      p2: "Mas os nossos passaportes estão sempre prontos. Somos verdadeiramente apaixonados por casamentos internacionais no destino e teríamos a honra de viajar para o país escolhido.",
      p3: "Quer esteja a celebrar localmente ou a planear uma aventura distante, levaremos a nossa abordagem documental editorial até si."
    },
    faq: {
      title: "<span class=\"italic\">Perguntas</span> Frequentes",
      q1: "Fotografam casamentos em todo o Portugal?",
      a1: "Sim, viajamos por todo o Portugal, incluindo Porto, Vale do Douro, Lisboa, Sintra e Algarve.",
      q2: "Podemos reservar sem visitar Portugal primeiro?",
      a2: "Absolutamente. A maioria dos nossos casais internacionais reserva-nos antes de nos visitar. Lidamos com tudo através de videochamadas e e-mail para garantir um processo perfeito.",
      q3: "Falam inglês?",
      a3: "Sim, somos fluentes em inglês e comunicamos facilmente com casais e fornecedores de todo o mundo.",
      q4: "Com quanta antecedência devemos reservar?",
      a4: "Recomendamos a reserva com 12 a 18 meses de antecedência, especialmente na época alta dos casamentos (maio a outubro).",
      q5: "O que está incluído nas vossas coleções de fotografia?",
      a5: "As nossas coleções são adaptadas às suas necessidades, incluindo tipicamente cobertura de todo o dia, uma galeria online curada, imagens de alta resolução e uma sessão de noivado opcional ou segundo fotógrafo.",
      q6: "Como funcionam os pagamentos para casais internacionais?",
      a6: "Aceitamos transferências bancárias internacionais (através de Wise ou transferência direta) e os principais cartões de crédito, tornando o processo de pagamento simples e seguro, independentemente da sua localização.",
      q7: "Viajam internacionalmente para casamentos no estrangeiro?",
      a7: "Sim! Embora estejamos sediados em Portugal, somos apaixonados por viajar e temos os passaportes sempre prontos. Já documentámos histórias de amor por toda a Europa e noutras partes do mundo. Onde quer que a sua celebração o leve, teríamos muito gosto em acompanhá-lo com a nossa abordagem editorial."
    },
    seo: {
      title: "Fotógrafo e Videógrafo de Casamento (Destination Wedding) em Portugal | BH Wedding Photo",
      description: "Narrativa editorial com fotografia, videografia e cobertura de drone para casamentos em Portugal e no mundo."
    },
    avail: {
      title: "A aceitar reservas para <span class=\"italic\">2026 e 2027</span>",
      desc: "Tentamos responder a todas as questões num prazo de 48 horas. Se não tiver notícias nossas, verifique a sua pasta de spam.",
      contact: "Contacte-nos Hoje"
    },
    footer: {
      links: "Links",
      connect: "Conectar",
      cookie: "Política de Cookies",
      rights: "BH Wedding Photo. Todos os direitos reservados."
    },
    contact: {
      title: "Vamos registar a sua história",
      subtitle: "Aceitamos um número limitado de casamentos por ano para garantir que cada casal receba a nossa total dedicação criativa. Partilhe o máximo possível de detalhes sobre a sua visão.",
      name: "Nome *",
      namePlaceholder: "Seu nome completo",
      partnerName: "Nome do(a) Parceiro(a)",
      partnerPlaceholder: "Nome completo dele(a)",
      email: "E-mail *",
      emailPlaceholder: "seu@email.com",
      date: "Data do Casamento",
      venue: "Local (Se souber)",
      venuePlaceholder: "Onde irão celebrar?",
      guests: "Nº Estimado de Convidados",
      guestsPlaceholder: "Ex: 100",
      message: "Mensagem *",
      messagePlaceholder: "Conte-nos sobre a visão de vocês, o estilo e o que é mais importante para o seu grande dia...",
      button: "Ver Disponibilidade e Coleções",
      sending: "A enviar...",
      successTitle: "Obrigado!",
      successMessage: "Recebemos o seu contato. Entraremos em contato em breve.",
      quickText: "Prefere algo rápido?",
      whatsapp: "Fale connosco no WhatsApp"
    }
  },
  es: {
    hero: {
      titleLine1: "Destination Wedding",
      titleLine2: "Foto y Video en Portugal",
      subtitle: "Telling historias editoriales con cobertura de fotografía, videografía y drones aéreos para parejas que viajan de todo el mundo.",
      checkDate: "Revisa Tu Fecha",
      viewWork: "Mira Nuestro Trabajo",
      scroll: "Desplazar"
    },
    story: {
      title: "¿Planeando una Boda en <span class=\"italic\">Portugal</span> desde el Extranjero?",
      p1: "Planear una boda de destino es emocionante, pero también conlleva incertidumbre.",
      li1: "Distintos husos horarios.",
      li2: "Proveedores que nunca has conocido.",
      li3: "Lugares que solo has visto en línea.",
      p2: "A muchas parejas les preocupa elegir el fotógrafo adecuado sin conocerse en persona.",
      p3: "En BH Wedding Photo, nos especializamos en bodas de destino y guiamos a las parejas en toda la experiencia.",
      p4: "Nuestro objetivo es simple: capturar no solo cómo se vio tu boda, sino cómo se sintió verdaderamente.",
      scheduleCall: "Programa una Llamada de Descubrimiento"
    },
    about: {
      subtitle: "Los Fotógrafos",
      title: "Conoce las caras detrás de <br class=\"hidden md:block\" /><span class=\"italic\">BH Wedding Photo</span>",
      p1: "En BH Wedding Photo, documentamos bodas en Portugal y en todo el mundo, siguiendo cada historia con un enfoque tranquilo, observador y editorial.",
      p2: "Nuestro enfoque no es escenificar momentos, sino capturarlos tal como son.",
      p3: "Para que, años después, no solo veas tu día, sino que lo sientas.",
      viewPortfolio: "Ver Nuestro Portafolio"
    },
    why: {
      title: "¿Por qué las Parejas Internacionales <br class=\"hidden md:block\" /><span class=\"italic\">Eligen a BH Wedding Photo</span>?",
      p1Title: "Conexión Humana",
      p1Desc: "Creemos que las mejores imágenes provienen de la confianza, la presencia y la conexión genuina, lo que te permite sentirte completamente a gusto durante tu día.",
      p2Title: "Foto, Video y Drone",
      p2Desc: "Cobertura completa de tu día con fotografía, videografía cinematográfica y asombrosas tomas aéreas con drones.",
      p3Title: "Estilo Editorial + Documental",
      p3Desc: "Imágenes elegantes inspiradas en editoriales de moda, conservando las emociones auténticas.",
      p4Title: "Comunicación Sin Problemas",
      p4Desc: "Planear una boda en el extranjero es más fácil cuando tu fotógrafo entiende tus expectativas.",
      inquire: "Pregunta Sobre Tu Boda"
    },
    galleries: {
      title: "<span class=\"italic\">Bodas</span> Destacadas",
      viewAll: "Ver Todas las Historias",
      viewGallery: "Ver Galería",
      videosTitle: "Películas de Bodas"
    },
    exp: {
      title: "Nuestra Experiencia de <span class=\"italic\">Bodas de Destino</span>",
      s1Title: "Consulta",
      s1Desc: "Cuéntanos sobre tus planes de boda.",
      s2Title: "Llamada de Descubrimiento",
      s2Desc: "Programamos una videollamada para comprender tu visión.",
      s3Title: "Colección a Medida",
      s3Desc: "Una colección de fotografía adaptada a tu boda.",
      s4Title: "Día de la Boda",
      s4Desc: "Capturamos cada momento de manera natural y discreta.",
      s5Title: "Entrega de la Galería",
      s5Desc: "Recibes una galería cuidadosamente seleccionada con recuerdos atemporales.",
      checkAvailability: "Consultar Disponibilidad"
    },
    test: {
      kindWords: "Palabras Amables"
    },
    cookie: {
      message: "Utilizamos cookies para mejorar su experiencia y analizar nuestro tráfico. Al hacer clic en 'Aceptar', acepta nuestro uso de cookies.",
      accept: "Aceptar",
      decline: "Rechazar",
      policy: "Política de Cookies"
    },
    dest: {
      title: "Fotografiando en ",
      title2: "o donde sea que nos lleve tu historia",
      p1: "Desde los viñedos en terrazas del <span class=\"font-serif font-bold text-[1.1em] text-black\">Douro</span> hasta ciudades históricas como <span class=\"font-serif font-bold text-[1.1em] text-black\">Oporto y Lisboa</span>, capturamos bodas en todo Portugal.",
      p2: "Pero nuestros pasaportes siempre están listos. Nos apasionan verdaderamente las bodas de destino internacionales y sería un honor viajar al país que elijas.",
      p3: "Ya sea que estés celebrando localmente o planeando una aventura lejana, te llevaremos nuestro enfoque documental editorial."
    },
    faq: {
      title: "<span class=\"italic\">Preguntas</span> Frecuentes",
      q1: "¿Fotografían bodas en todo Portugal?",
      a1: "Sí, viajamos por todo Portugal, incluyendo Oporto, el Valle del Duero, Lisboa, Sintra y el Algarve.",
      q2: "¿Podemos reservar sin visitar Portugal primero?",
      a2: "Totalmente. La mayoría de nuestras parejas internacionales nos reservan antes de visitarnos. Manejamos todo a través de videollamadas y correos electrónicos para asegurar un proceso sin contratiempos.",
      q3: "¿Hablan inglés?",
      a3: "Sí, hablamos inglés fluidamente y nos comunicamos a la perfección con parejas y proveedores de todo el mundo.",
      q4: "¿Con cuánta anticipación debemos reservar?",
      a4: "Recomendamos reservar con 12 a 18 meses de anticipación, especialmente para la temporada alta de bodas (mayo a octubre).",
      q5: "¿Qué se incluye en sus colecciones de fotografía?",
      a5: "Nuestras colecciones se adaptan a tus necesidades, generalmente incluyendo cobertura de todo el día, una galería en línea seleccionada, imágenes de alta resolución y una sesión de compromiso opcional o segundo fotógrafo.",
      q6: "¿Cómo funcionan los pagos para parejas internacionales?",
      a6: "Aceptamos transferencias bancarias internacionales (a través de Wise o transferencia directa) y las principales tarjetas de crédito, haciendo que el proceso de pago sea sencillo y seguro sin importar tu ubicación.",
      q7: "¿Viajan internacionalmente para bodas en el extranjero?",
      a7: "¡Sí! Aunque tenemos nuestra base en Portugal, nos apasiona viajar y tenemos los pasaportes listos. A menudo capturamos historias de amor en toda Europa y en cualquier lugar del mundo. Dondequiera que te lleve tu celebración, sería un honor documentarla con nuestro enfoque editorial."
    },
    seo: {
      title: "Fotógrafo y Videógrafo de Bodas de Destino en Portugal | BH Wedding Photo",
      description: "Narrativa editorial con fotografía, videografía cinematográfica y cobertura con drones para bodas de destino en Portugal y en todo el mundo."
    },
    avail: {
      title: "Aceptando reservas para <span class=\"italic\">2026 y 2027</span>",
      desc: "Intentamos responder a todas las consultas en un plazo de 48 horas. Si no has tenido noticias nuestras, por favor revisa tu carpeta de spam.",
      contact: "Contáctanos Hoy"
    },
    footer: {
      links: "Enlaces",
      connect: "Conectar",
      cookie: "Política de Cookies",
      rights: "BH Wedding Photo. Todos los derechos reservados."
    },
    contact: {
      title: "Capturemos tu historia",
      subtitle: "Aceptamos un número limitado de bodas cada año para asegurar que cada pareja reciba nuestra completa dedicación. Por favor, comparte tantos detalles como sea posible sobre tu visión.",
      name: "Nombre *",
      namePlaceholder: "Tu nombre completo",
      partnerName: "Nombre de tu pareja",
      partnerPlaceholder: "Su nombre completo",
      email: "Correo electrónico *",
      emailPlaceholder: "tu@email.com",
      date: "Fecha de la Boda",
      venue: "Lugar (Si lo sabes)",
      venuePlaceholder: "¿Dónde lo van a celebrar?",
      guests: "Estimación de Invitados",
      guestsPlaceholder: "Ej: 100",
      message: "Mensaje *",
      messagePlaceholder: "Cuéntanos sobre su visión combinada, estilo y qué es lo más importante para ustedes en su día...",
      button: "Ver Disponibilidad y Colecciones",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "Hemos recibido tu mensaje con éxito y nos pondremos en contacto pronto.",
      quickText: "¿Prefieres algo más rápido?",
      whatsapp: "Escríbenos por WhatsApp"
    }
  },
  fr: {
    hero: {
      titleLine1: "Destination Wedding",
      titleLine2: "Photo et Vidéo au Portugal",
      subtitle: "Des récits éditoriaux avec couverture photographique, vidéographique et aérienne par drone pour les couples voyageant du monde entier.",
      checkDate: "Vérifiez Votre Date",
      viewWork: "Voir Notre Travail",
      scroll: "Faire Défiler"
    },
    story: {
      title: "Vous planifiez un mariage au <span class=\"italic\">Portugal</span> depuis l'étranger?",
      p1: "Organiser un mariage de destination est passionnant, mais comporte aussi son lot d'incertitudes.",
      li1: "Différences de fuseau horaire.",
      li2: "Prestataires que vous n'avez jamais rencontrés.",
      li3: "Lieux que vous n'avez vus qu'en ligne.",
      p2: "Beaucoup de couples s'inquiètent de choisir le bon photographe sans se rencontrer en personne.",
      p3: "Chez BH Wedding Photo, nous sommes spécialisés dans les mariages de destination et guidons les couples tout au long de l'expérience.",
      p4: "Notre objectif est simple: capturer non seulement l'apparence de votre mariage, mais aussi ce que vous avez vraiment ressenti.",
      scheduleCall: "Planifier un Appel Découverte"
    },
    about: {
      subtitle: "Les Photographes",
      title: "Rencontrez les visages derrière <br class=\"hidden md:block\" /><span class=\"italic\">BH Wedding Photo</span>",
      p1: "Chez BH Wedding Photo, nous documentons les mariages au Portugal et dans le monde entier, suivant chaque histoire avec une approche calme, observatrice et éditoriale.",
      p2: "Notre objectif n'est pas de mettre en scène des moments, mais de les capturer tels qu'ils sont.",
      p3: "Pour que, des années plus tard, vous ne voyiez pas seulement votre journée — vous la ressentiez.",
      viewPortfolio: "Voir Notre Portfolio"
    },
    why: {
      title: "Pourquoi les Couples Internationaux <br class=\"hidden md:block\" /><span class=\"italic\">Choisissent BH Wedding Photo</span>",
      p1Title: "Connexion Humaine",
      p1Desc: "Nous croyons que les meilleures images naissent de la confiance, de la présence et d'une connexion sincère — ce qui vous permet de vous sentir parfaitement à l'aise pendant toute votre journée.",
      p2Title: "Photo, Vidéo et Drone",
      p2Desc: "Couverture complète de votre journée avec photographie, vidéographie cinématographique et superbes prises de vue aériennes par drone.",
      p3Title: "Style Éditorial + Documentaire",
      p3Desc: "Des images élégantes inspirées des éditoriaux de mode tout en préservant les émotions authentiques.",
      p4Title: "Communication Fluide",
      p4Desc: "Planifier un mariage à l'étranger devient plus facile lorsque votre photographe comprend vos attentes.",
      inquire: "Renseignez-vous sur Votre Mariage"
    },
    galleries: {
      title: "<span class=\"italic\">Mariages</span> en Vedette",
      viewAll: "Voir Toutes les Histoires",
      viewGallery: "Voir la Galerie",
      videosTitle: "Films de Mariage"
    },
    exp: {
      title: "Notre Expérience de <span class=\"italic\">Mariage de Destination</span>",
      s1Title: "Demande",
      s1Desc: "Parlez-nous de vos projets de mariage.",
      s2Title: "Appel Découverte",
      s2Desc: "Nous planifions un appel vidéo pour comprendre votre vision.",
      s3Title: "Collection Sur Mesure",
      s3Desc: "Une collection de photographies adaptée à votre mariage.",
      s4Title: "Jour du Mariage",
      s4Desc: "Nous capturons chaque instant naturellement et discrètement.",
      s5Title: "Livraison de la Galerie",
      s5Desc: "Vous recevez une galerie soigneusement sélectionnée avec des souvenirs intemporels.",
      checkAvailability: "Vérifier la Disponibilité"
    },
    test: {
      kindWords: "Mots Doux"
    },
    cookie: {
      message: "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. En cliquant sur « Accepter », vous consentez à notre utilisation des cookies.",
      accept: "Accepter",
      decline: "Refuser",
      policy: "Politique de Cookies"
    },
    dest: {
      title: "Photographier au ",
      title2: "ou partout où votre histoire nous mène",
      p1: "Des vignobles en terrasses du <span class=\"font-serif font-bold text-[1.1em] text-black\">Douro</span> aux villes historiques comme <span class=\"font-serif font-bold text-[1.1em] text-black\">Porto et Lisbonne</span>, nous capturons des mariages dans tout le Portugal.",
      p2: "Mais nos passeports sont toujours prêts. Nous sommes véritablement passionnés par les mariages internationaux à destination et serions honorés de voyager dans le pays de votre choix.",
      p3: "Que vous célébriez localement ou que vous planifiiez une aventure lointaine, nous vous apporterons notre approche documentaire éditoriale."
    },
    faq: {
      title: "<span class=\"italic\">Questions</span> Fréquentes",
      q1: "Photographiez-vous des mariages dans tout le Portugal?",
      a1: "Oui, nous voyageons dans tout le Portugal, y compris Porto, la vallée du Douro, Lisbonne, Sintra et l'Algarve.",
      q2: "Pouvons-nous réserver sans visiter le Portugal d'abord?",
      a2: "Absolument. La plupart de nos couples internationaux nous réservent avant de nous rendre visite. Nous gérons tout via des appels vidéo et des e-mails pour garantir un processus fluide.",
      q3: "Parlez-vous anglais?",
      a3: "Oui, nous parlons couramment l'anglais et communiquons facilement avec les couples et les prestataires du monde entier.",
      q4: "Combien de temps à l'avance devons-nous réserver?",
      a4: "Nous recommandons de réserver 12 à 18 mois à l'avance, en particulier pour la haute saison des mariages (de mai à octobre).",
      q5: "Qu'est-ce qui est inclus dans vos collections de photographies?",
      a5: "Nos collections sont adaptées à vos besoins, comprenant généralement une couverture toute la journée, une galerie en ligne sélectionnée, des images haute résolution et une séance d'engagement facultative ou un deuxième photographe.",
      q6: "Comment fonctionnent les paiements pour les couples internationaux?",
      a6: "Nous acceptons les virements bancaires internationaux (via Wise ou virement direct) et les principales cartes de crédit, ce qui rend le processus de paiement simple et sécurisé, peu importe où vous vous trouvez.",
      q7: "Voyagez-vous à l'international pour des mariages à l'étranger ?",
      a7: "Oui ! Bien que nous soyons basés au Portugal, nous sommes passionnés par les voyages et nos passeports sont toujours prêts. Nous capturons fréquemment des histoires d'amour à travers l'Europe et dans le monde entier. Où que votre célébration vous mène, ce serait un honneur de la documenter avec notre approche éditoriale."
    },
    seo: {
      title: "Photographe et Vidéaste de Mariage (Destination Wedding) au Portugal | BH Wedding Photo",
      description: "Récits éditoriaux avec photographie, vidéographie et couverture par drone pour les mariages à destination au Portugal et dans le monde entier."
    },
    avail: {
      title: "Prise de réservations pour <span class=\"italic\">2026 et 2027</span>",
      desc: "Nous essayons de répondre à toutes les demandes dans les 48 heures. Si vous n'avez pas de nos nouvelles, veuillez vérifier vos courriers indésirables.",
      contact: "Contactez-nous Aujourd'hui"
    },
    footer: {
      links: "Liens",
      connect: "Connecter",
      cookie: "Politique relative aux cookies",
      rights: "BH Wedding Photo. Tous droits réservés."
    },
    contact: {
      title: "Capturons votre histoire",
      subtitle: "Nous acceptons un nombre limité de mariages chaque année pour nous assurer que chaque couple reçoive notre dévouement créatif total. Partagez autant de détails que possible sur votre vision.",
      name: "Nom *",
      namePlaceholder: "Votre nom complet",
      partnerName: "Nom du/de la partenaire",
      partnerPlaceholder: "Son nom complet",
      email: "Adresse e-mail *",
      emailPlaceholder: "vous@exemple.com",
      date: "Date du mariage",
      venue: "Lieu (Si connu)",
      venuePlaceholder: "Où célébrez-vous ?",
      guests: "Nombre d'invités estimé",
      guestsPlaceholder: "Ex: 100",
      message: "Message *",
      messagePlaceholder: "Parlez-nous de votre vision commune, de votre style et de ce qui est le plus important pour votre grand jour...",
      button: "Vérifier la disponibilité et nos collections",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous avons bien reçu votre message et vous contacterons sous peu.",
      quickText: "Vous préférez quelque chose de plus rapide ?",
      whatsapp: "Discutez avec nous sur WhatsApp"
    }
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Update HTML lang attribute when language changes
  React.useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translations[language].seo.description);
    }
  }, [language]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        let fallback: any = translations['en'];
        for (const fbK of keys) {
            if (fallback && typeof fallback === 'object' && fbK in fallback) {
                fallback = fallback[fbK];
            } else {
                return key;
            }
        }
        
        // Check if result contains HTML tags we use
        if (typeof fallback === 'string' && (fallback.includes('<span') || fallback.includes('<br'))) {
          return <span dangerouslySetInnerHTML={{ __html: fallback }} />;
        }
        return fallback as string;
      }
    }
    
    // Check if result contains HTML tags we use
    if (typeof result === 'string' && (result.includes('<span') || result.includes('<br'))) {
      return <span dangerouslySetInnerHTML={{ __html: result }} />;
    }
    
    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
