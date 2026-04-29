import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight, Plus, Minus, MessageCircle, PenTool, Video, Camera, Heart, Image as ImageIcon, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLanguage, Language } from './i18n';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <iframe
          src="https://player.vimeo.com/video/1173190488?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1#t=3s"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-60"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[28px] leading-snug sm:text-4xl md:text-[83px] md:leading-[93px] font-serif mb-6 md:mb-6"
        >
          {t('hero.titleLine1')} <br className="hidden md:block" />
          <span className="italic block md:inline mt-2 md:mt-0">{t('hero.titleLine2')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[10px] md:text-base tracking-widest uppercase font-sans mb-8 md:mb-12 max-w-2xl text-white/90 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-5 md:gap-6"
        >
          <a href="#contact" className="bg-white text-black px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300">
            {t('hero.checkDate')}
          </a>
          <a href="#galleries" className="text-white border-b border-white/30 pb-1 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:border-white transition-colors duration-300">
            {t('hero.viewWork')}
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest">{t('hero.scroll')}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

function Storytelling() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <FadeIn>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="https://bhweddingphoto.com/wp-content/uploads/2026/01/SP-KC-39.jpg" 
              alt="Emotional wedding moment" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
        
        <div className="flex flex-col justify-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
              {t('story.title')}
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-sm md:text-base text-black/70 font-light leading-relaxed mb-12">
              <p>{t('story.p1')}</p>
              <ul className="space-y-2 font-serif font-bold text-[1.1em] text-black/90">
                <li>{t('story.li1')}</li>
                <li>{t('story.li2')}</li>
                <li>{t('story.li3')}</li>
              </ul>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
              <p className="font-medium text-black">{t('story.p4')}</p>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-2 hover:border-black transition-colors duration-300">
              {t('story.scheduleCall')} <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <FadeIn>
            <p className="text-[10px] tracking-widest uppercase text-black/40 mb-6">{t('about.subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
              {t('about.title')}
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-sm md:text-base text-black/70 font-light leading-relaxed mb-12">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p className="font-medium text-black">{t('about.p3')}</p>
            </div>
            
            <a href="#galleries" className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-2 hover:border-black transition-colors duration-300">
              {t('about.viewPortfolio')} <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>

        <FadeIn className="order-1 md:order-2">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://bhweddingphoto.com/wp-content/uploads/2026/02/bhweddingphoto-home.jpg" 
              alt="BH Wedding Photo - Meet the Photographers" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useLanguage();
  const pillars = [
    {
      title: t('why.p1Title'),
      desc: t('why.p1Desc')
    },
    {
      title: t('why.p2Title'),
      desc: t('why.p2Desc')
    },
    {
      title: t('why.p3Title'),
      desc: t('why.p3Desc')
    },
    {
      title: t('why.p4Title'),
      desc: t('why.p4Desc')
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-20 whitespace-pre-line">
            {t('why.title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col border-t border-black/10 pt-6">
                <span className="text-[10px] text-black/40 mb-4 font-mono">0{idx + 1}</span>
                <h3 className="text-lg font-serif mb-4">{pillar.title as string}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{pillar.desc as string}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="flex justify-center">
          <a href="#contact" className="border border-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300">
            {t('why.inquire')}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Galleries() {
  const { t } = useLanguage();

  const blogGalleries = [
    { name: "Andreia & José", link: "https://bhweddingphoto.com/andreia-jose/", img: "https://bhweddingphoto.com/wp-content/uploads/2025/01/AZ-Sessao-Noivos-11-scaled.jpg" },
    { name: "Sruti & Srijith", link: "https://bhweddingphoto.com/sruti-srijith/", img: "https://bhweddingphoto.com/wp-content/uploads/2025/01/SS_20_p-15-scaled.jpg" },
    { name: "Francisca & Inês", link: "https://bhweddingphoto.com/francisca-ines/", img: "https://bhweddingphoto.com/wp-content/uploads/2025/02/FI-3-23-scaled.jpg" },
    { name: "Gloria & Patrick", link: "https://bhweddingphoto.com/gloria-patrick/", img: "https://bhweddingphoto.com/wp-content/uploads/2025/02/06072024-DSC05601-scaled.jpg" },
    { name: "Cindy & David", link: "https://bhweddingphoto.com/cindy-david/", img: "https://bhweddingphoto.com/wp-content/uploads/2025/10/CD_4-11-scaled.jpg" },
    { name: "Alicia & Sebastien", link: "https://bhweddingphoto.com/alicia-sebastien-2/", img: "https://bhweddingphoto.com/wp-content/uploads/2026/01/W_AS05-53-scaled.jpg" },
    { name: "Diana João & Luís", link: "https://bhweddingphoto.com/diana-luis/", img: "https://bhweddingphoto.com/wp-content/uploads/2026/02/DL_06-1-scaled.jpg" },
  ];

  const videos = [
    "https://bhphotosessions.pic-time.com/-carol5031/featuredvideo/433184?videoview=AAAAAI0AAAAcy4Ge4DyTNaCqnEOxuHOCe5U7tojDQi7mr2doj9s,&transparentbg=true",
    "https://bhphotosessions.pic-time.com/-lauramarco/featuredvideo/419445?videoview=AAAAAKIAAADoVH-N6fQSk_YjQpTmv5Qtf0qK19ybI00eUsehr5M,&transparentbg=true",
    "https://bhphotosessions.pic-time.com/-sandrasimon/featuredvideo/483292?videoview=AAAAAOgAAAD_J6aE1Npp4zx6udqm2LuP07fwtov8S4kWwaZpF2w,&transparentbg=true",
    "https://bhphotosessions.pic-time.com/-karinaepedro/featuredvideo/491113?videoview=AAAAAH8AAADSmEcvabFli5mnN2hiNlcO8W1BHyr6QJBXEr1-wAA,&transparentbg=true",
    "https://bhphotosessions.pic-time.com/-renata6sergio/featuredvideo/598095?videoview=AAAAABYBAABwfblCEJwt8VzYnSoei6Vpe51KDnDUfQCdYU8GU4o,&transparentbg=true",
    "https://bhphotosessions.pic-time.com/-claudiafabio/featuredvideo/391947?videoview=AAAAADUAAAA1yucMPC-aJSixAhtM7Upbr5vMwqc0tGdr82zLBsM,&transparentbg=true"
  ];

  return (
    <section id="galleries" className="py-24 md:py-40 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto mb-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-4xl md:text-5xl font-serif">
              {t('galleries.title')}
            </h2>
            <a href="https://bhweddingphoto.com/blog/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-colors duration-300">
              {t('galleries.viewAll')}
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal Slider for Blog Galleries */}
      <div className="w-full overflow-x-auto lg:overflow-hidden mb-32 relative scrollbar-hide snap-x snap-mandatory flex">
        <div className="flex w-max lg:animate-marquee hover:[animation-play-state:paused] gap-4 lg:gap-6 px-4 lg:px-6">
          {[...blogGalleries, ...blogGalleries].map((gallery, idx) => (
            <a 
              key={idx} 
              href={gallery.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex-none w-[85vw] sm:w-[60vw] lg:w-[30vw] aspect-[16/10] lg:aspect-[4/5] group overflow-hidden rounded-2xl snap-center block"
            >
              <img 
                src={gallery.img} 
                alt={gallery.name} 
                className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 lg:bg-black/20 lg:group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl lg:text-3xl font-serif mb-4 text-center px-4 drop-shadow-md">{gallery.name}</h3>
                <span className="text-white text-[10px] lg:text-xs tracking-[0.2em] uppercase border-b border-white/50 pb-1 flex items-center gap-2 drop-shadow-md">
                  {t('galleries.viewGallery')} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <FadeIn>
          <h3 className="text-2xl md:text-3xl font-serif mb-12 text-center text-black/80">{t('galleries.videosTitle')}</h3>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {videos.map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group w-full aspect-video relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-500 bg-black/5">
                <iframe 
                  src={src}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen 
                  allowtransparency="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase drop-shadow-md">
                    {[
                      "Carolina & Filipe",
                      "Laura & Marco",
                      "Sandra & Simon",
                      "Karina & Pedro",
                      "Renata & Sérgio",
                      "Claudia & Fábio",
                    ][idx]}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useLanguage();
  const steps = [
    { title: t('exp.s1Title'), desc: t('exp.s1Desc'), icon: PenTool },
    { title: t('exp.s2Title'), desc: t('exp.s2Desc'), icon: Video },
    { title: t('exp.s3Title'), desc: t('exp.s3Desc'), icon: Camera },
    { title: t('exp.s4Title'), desc: t('exp.s4Desc'), icon: Heart },
    { title: t('exp.s5Title'), desc: t('exp.s5Desc'), icon: ImageIcon },
  ];

  return (
    <section className="py-24 md:py-40 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-24 whitespace-pre-line">
            {t('exp.title')}
          </h2>
        </FadeIn>

        <div className="space-y-16 mb-24 relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 md:-translate-x-1/2" />
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 w-full pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-[10px] text-white/40 font-mono mb-2 block">STEP 0{idx + 1}</span>
                  <h3 className="text-xl font-serif mb-3">{step.title as string}</h3>
                  <p className="text-sm text-white/60 font-light">{step.desc as string}</p>
                </div>
                
                <div className="absolute left-0 md:relative md:left-auto w-8 h-8 rounded-full bg-black border border-white/30 flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: idx * 0.1 + 0.3 }}
                  >
                    <step.icon className="w-4 h-4 text-white/80" strokeWidth={1.5} />
                  </motion.div>
                </div>
                
                <div className="hidden md:block flex-1" />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex justify-center">
          <a href="#contact" className="bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300">
            {t('exp.checkAvailability')}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Catarina P.",
      country: "Our choice was more than correct.",
      text: "When we first met Beatriz and Henrique, we were already enchanted by the work we had seen and immediately identified with... But from then on, it was always uphill! Always available, everything flowed incredibly smoothly! And on top of that, they helped us immensely throughout the wedding. We felt like we were surrounded by good friends! We really couldn't have chosen better!",
      img: "https://bhweddingphoto.com/wp-content/uploads/2025/01/gu_1146763.webp"
    },
    {
      name: "Francisca V.",
      country: "The perfect pair for our perfect day.",
      text: "From the first day we met Bea and Henrique, we knew we were a perfect match, both because of their shared sense of humor and the care they have for what they do and for their clients. We can only thank them for being part of our craziness, for accepting our silly ideas, and for being part of our special day. Much more than photographers, we are sure they will be friends for life.",
      img: "https://bhweddingphoto.com/wp-content/uploads/2025/01/gu_1854681.webp"
    },
    {
      name: "Catarina R.",
      country: "The Best!",
      text: "If you're wondering about photographers... Beatriz and Henrique are the perfect choice!! Tireless from day one! Extremely kind, with a huge sensitivity in capturing the best moments!! They are truly an incredible couple! Super professional, with contagious joy. I dare say that without them the day wouldn't have gone so well! Among the best you can find!! Thank you",
      img: "https://bhweddingphoto.com/wp-content/uploads/2026/02/Captura-de-Tela-2026-02-10-as-14.53.22.png"
    },
    {
      name: "Carolina",
      country: "Feedback on BH",
      text: "We were very pleased with the service provided by BH before, during, and after our wedding. The team, led by Henrique and Beatriz, is composed of excellent professionals who gave us confidence from the very first moment. They are meticulous, approachable, have positive energy, and were flexible to all our requests and preferences. We highly recommend them!",
      img: "https://bhweddingphoto.com/wp-content/uploads/2026/02/Captura-de-Tela-2026-02-10-as-14.53.07.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-[10px] tracking-widest uppercase text-black/40 mb-12">{t('test.kindWords')}</p>
          
          <div className="relative h-[480px] sm:h-[380px] md:h-[320px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h2 className="text-base sm:text-lg md:text-xl font-serif leading-relaxed italic mb-8 px-4 text-gray-800 max-w-3xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </h2>
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src={testimonials[currentIndex].img} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border border-black/10 shadow-sm"
                  />
                  <div className="text-center">
                    <p className="text-xs tracking-widest uppercase font-medium">{testimonials[currentIndex].name}</p>
                    <p className="text-xs text-black/50 font-serif italic">{testimonials[currentIndex].country}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8 relative z-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-black w-8" : "bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Destination() {
  const { t } = useLanguage();
  const [locationIndex, setLocationIndex] = useState(0);
  const locations = [
    { name: "Portugal", img: "/1.jpg" },
    { name: "Porto", img: "/2.jpg" },
    { name: "Lisbon", img: "/3.jpg" },
    { name: "the Algarve", img: "/4.jpg" },
    { name: "Northern Portugal", img: "/5.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-0 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:h-screen items-center">
        <div className="order-2 md:order-1 flex flex-col justify-center pr-0 md:pr-20 py-12 md:py-0">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-10 leading-tight">
              {t('dest.title')}
              <span className="inline-flex relative h-[1.2em] w-[200px] md:w-[280px] lg:w-[340px] overflow-hidden align-bottom justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={locationIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute italic text-black/80 whitespace-nowrap"
                  >
                    {locations[locationIndex].name}
                  </motion.span>
                </AnimatePresence>
              </span><br className="hidden md:block" />
              {t('dest.title2')}
            </h2>
            <div className="space-y-4 text-sm md:text-base text-black/70 font-light leading-relaxed">
              <p>{t('dest.p1')}</p>
              <p>{t('dest.p2')}</p>
              <p>{t('dest.p3')}</p>
            </div>
          </FadeIn>
        </div>
        
        <div className="order-1 md:order-2 h-[60vh] md:h-full w-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img 
              key={locationIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              src={locations[locationIndex].img} 
              alt={locations[locationIndex].name} 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useLanguage();
  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 whitespace-pre-line">
          {t('faq.title')}
        </h2>
      </FadeIn>

      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="border-b border-black/10">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-lg md:text-xl pr-8">{faq.q as string}</span>
                {openIdx === idx ? <Minus className="w-5 h-5 text-black/50 shrink-0" /> : <Plus className="w-5 h-5 text-black/50 shrink-0" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-black/60 font-light leading-relaxed">
                      {faq.a as string}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Availability() {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-black text-white px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight whitespace-pre-line">
            {t('avail.title')}
          </h2>
          <p className="text-sm md:text-base text-white/70 font-light mb-12 max-w-xl mx-auto">
            {t('avail.desc')}
          </p>
          <a href="#contact" className="bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300">
            {t('avail.contact')}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjllbak", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        if (typeof window !== 'undefined') {
          // Update URL without reloading the page so it can be used for conversion tracking
          window.history.pushState({}, '', window.location.pathname + '?lead=success#contact');
          
          if (window.fbq) {
            window.fbq('track', 'Lead');
          }
          if (window.gtag) {
            window.gtag('event', 'generate_lead', {
              event_category: 'engagement',
              event_label: 'Contact Form Selected'
            });
          }
        }
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setErrorMsg(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMsg("There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setErrorMsg("There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "px-4 py-3 bg-black/5 border-b border-black/40 text-black focus:outline-none focus:border-black focus:bg-black/10 transition-all rounded-t-md font-sans text-sm placeholder:text-black/30";
  const labelClass = "text-[11px] tracking-widest uppercase text-black/80 font-semibold mb-1";

  return (
    <section id="contact" className="py-24 md:py-40 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 whitespace-pre-line">
            {t('contact.title')}
          </h2>
          <p className="text-sm text-black/60 font-light">{t('contact.subtitle')}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Honeypot field for Formspree to prevent bot spam without using recaptcha limits */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className={labelClass}>{t('contact.name')}</label>
              <input name="Name" type="text" required placeholder={t('contact.namePlaceholder')} className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>{t('contact.partnerName')}</label>
              <input name="Partner Name" type="text" placeholder={t('contact.partnerPlaceholder')} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className={labelClass}>{t('contact.email')}</label>
              <input name="Email" type="email" required placeholder={t('contact.emailPlaceholder')} className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>{t('contact.date')}</label>
              {/* Using proper date type for native calendar picker */}
              <input name="Wedding Date" type="date" className={`${inputClass} uppercase`} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className={labelClass}>{t('contact.venue')}</label>
              <input name="Venue" type="text" placeholder={t('contact.venuePlaceholder')} className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>{t('contact.guests')}</label>
              <input name="Guest Count" type="number" placeholder={t('contact.guestsPlaceholder')} className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>{t('contact.message')}</label>
            <textarea 
              name="Message" 
              rows={4} 
              required 
              placeholder={t('contact.messagePlaceholder')} 
              className={`${inputClass} resize-none`}
            ></textarea>
          </div>

          <div className="pt-8 text-center flex flex-col items-center">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#8fbc8f]/20 text-[#2e4c2e] p-8 rounded-lg border border-[#8fbc8f]/40 w-full"
              >
                <p className="font-serif text-2xl mb-2">{t('contact.successTitle')}</p>
                <p className="text-sm">{t('contact.successMessage')}</p>
              </motion.div>
            ) : (
              <>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-black text-white px-10 py-5 text-xs tracking-[0.2em] uppercase hover:bg-black/80 transition-colors duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.button')}
                </button>
                {errorMsg && (
                  <p className="text-red-500 text-sm mt-4">{errorMsg}</p>
                )}
              </>
            )}
          </div>
        </form>

        <div className="mt-20 text-center border-t border-black/10 pt-12">
          <p className="text-sm text-black/60 font-light mb-4">{t('contact.quickText')}</p>
          <a href="https://wa.me/351911932129" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-colors duration-300" onClick={() => {
            if (typeof window !== 'undefined') {
              if (window.fbq) window.fbq('trackCustom', 'WhatsAppClick');
              if (window.gtag) window.gtag('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'WhatsApp Text Link' });
            }
          }}>
            <MessageCircle className="w-4 h-4" /> {t('contact.whatsapp')}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-16 px-6 border-t border-black/10 text-center flex flex-col items-center gap-8 bg-white">
      <a href="https://bhweddingphoto.com/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://bhweddingphoto.com/wp-content/uploads/2024/01/Untitled-design-2024-01-23T064322.326.png" 
          alt="BH Wedding Photo" 
          className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </a>
      
      <div className="flex flex-wrap justify-center gap-6 text-[11px] tracking-widest uppercase text-black/60">
        <a href="https://bhweddingphoto.com/sobre-nos/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">About Us</a>
        <a href="https://bhweddingphoto.com/foto-casamento/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Portfolio</a>
        <a href="https://bhweddingphoto.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Galleries</a>
        <a href="https://bhweddingphoto.com/contacto/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Contact</a>
      </div>

      <div className="flex gap-6 text-[11px] tracking-widest uppercase text-black/60">
        <a href="https://www.instagram.com/bhweddingphotography" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
        <a href="https://www.facebook.com/bhphotosessions" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-[10px] text-black/40 uppercase tracking-widest mt-4">
        <a href="https://bhweddingphoto.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Privacy Policy</a>
        <span className="hidden md:inline">|</span>
        <a href="https://bhweddingphoto.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Terms & Conditions</a>
        <span className="hidden md:inline">|</span>
        <a href="https://bhweddingphoto.com/cookies-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{t('footer.cookie')}</a>
      </div>

      <p className="text-[10px] text-black/40 uppercase tracking-widest mt-2">
        &copy; {new Date().getFullYear()} {t('footer.rights')}
      </p>
    </footer>
  );
}

function WhatsAppFloat() {
  const { t } = useLanguage();
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      if (window.fbq) {
        window.fbq('trackCustom', 'WhatsAppClick');
      }
      if (window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: 'WhatsApp Floating Button'
        });
      }
    }
  };

  return (
    <motion.a 
      href="https://wa.me/351911932129"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      animate={{ scale: [1, 1.1, 1] }} 
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="fixed bottom-6 right-6 z-50 bg-[#D4A5A5] text-white p-4 rounded-full shadow-lg hover:bg-[#c49393] flex items-center justify-center"
      title={t('contact.whatsapp')}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="block">
          <img 
            src="https://bhweddingphoto.com/wp-content/uploads/2024/01/Untitled-design-2024-01-23T064322.326.png" 
            alt="BH Wedding Photo" 
            className={`h-[42px] md:h-[52px] w-auto object-contain transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
            referrerPolicy="no-referrer"
          />
        </a>
          <a 
          href="#contact" 
          className={`text-[10px] tracking-[0.2em] uppercase border px-4 py-2 transition-colors duration-300 ${
            isScrolled 
              ? 'border-black text-black hover:bg-black hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}
        >
          {t('why.inquire')}
        </a>
      </div>
    </header>
  );
}

function LanguageFloat() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2 bg-white p-1.5 rounded-lg shadow-xl border border-black/5 flex flex-col gap-0.5"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-1.5 px-2 py-1 rounded border-none outline-none text-[10px] transition-colors ${
                  language === lang.code ? 'bg-black/5 font-medium' : 'hover:bg-black/5'
                }`}
              >
                <span className="text-xs">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-1.5 md:px-2.5 md:py-1.5 rounded-full shadow-lg hover:bg-black/80 transition-all flex items-center justify-center gap-1.5"
        aria-label="Change Language"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="hidden md:inline-block text-[9px] uppercase tracking-widest font-medium">
          {language.toUpperCase()}
        </span>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-black/10">
      <Header />
      <main>
        <Hero />
        <Storytelling />
        <AboutUs />
        <WhyUs />
        <Galleries />
        <Experience />
        <Testimonials />
        <Destination />
        <FAQ />
        <Availability />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <LanguageFloat />
    </div>
  );
}
