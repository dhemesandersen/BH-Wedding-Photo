import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight, Plus, Minus, MessageCircle, PenTool, Video, Camera, Heart, Image as ImageIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

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

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <iframe
          src="https://player.vimeo.com/video/1173190488?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1#t=3s"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-60"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
        >
          Destination Wedding <br className="hidden md:block" />
          <span className="italic">Photo & Video in Portugal</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-base tracking-widest uppercase font-sans mb-12 max-w-2xl text-white/90 leading-relaxed"
        >
          Editorial storytelling with Photography, Videography & Aerial Drone coverage for couples traveling from around the world.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#contact" className="bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300">
            Check Your Wedding Date
          </a>
          <a href="#galleries" className="text-white border-b border-white/30 pb-1 text-xs tracking-[0.2em] uppercase hover:border-white transition-colors duration-300">
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

function Storytelling() {
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
              Planning a Wedding in <span className="italic">Portugal</span> from Abroad?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-sm md:text-base text-black/70 font-light leading-relaxed mb-12">
              <p>Planning a destination wedding is exciting, but it also comes with uncertainty.</p>
              <ul className="space-y-2 font-serif font-bold text-[1.1em] text-black/90">
                <li>Different time zones.</li>
                <li>Vendors you've never met.</li>
                <li>Locations you've only seen online.</li>
              </ul>
              <p>Many couples worry about choosing the right photographer without meeting in person.</p>
              <p>At BH Wedding Photo, we specialize in destination weddings and guide couples through the entire experience.</p>
              <p className="font-medium text-black">Our goal is simple: capture not just how your wedding looked, but how it truly felt.</p>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-2 hover:border-black transition-colors duration-300">
              Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <FadeIn>
            <p className="text-[10px] tracking-widest uppercase text-black/40 mb-6">The Photographers</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
              Meet the faces behind <br className="hidden md:block" />
              <span className="italic">BH Wedding Photo</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-sm md:text-base text-black/70 font-light leading-relaxed mb-12">
              <p>We are passionate about telling authentic stories through an editorial lens. With years of experience photographing couples across Portugal and Europe, we blend documentary honesty with timeless elegance.</p>
              <p>Our approach is calm, unobtrusive, and deeply focused on the connection between you and your loved ones. We believe the best images happen when you are truly present in the moment.</p>
            </div>
            
            <a href="#galleries" className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-2 hover:border-black transition-colors duration-300">
              View Our Portfolio <ArrowRight className="w-4 h-4" />
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
  const pillars = [
    {
      title: "Portugal Expertise",
      desc: "From Porto and the Douro Valley to the Algarve coastline."
    },
    {
      title: "Photo, Video & Drone",
      desc: "Comprehensive coverage of your day with photography, cinematic videography, and stunning aerial drone footage."
    },
    {
      title: "Editorial + Documentary Style",
      desc: "Elegant imagery inspired by fashion editorials while preserving authentic emotions."
    },
    {
      title: "Seamless Communication",
      desc: "Planning a wedding abroad becomes easier when your photographer understands your expectations."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-20">
            Why International Couples <br className="hidden md:block" />
            <span className="italic">Choose BH Wedding Photo</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col border-t border-black/10 pt-6">
                <span className="text-[10px] text-black/40 mb-4 font-mono">0{idx + 1}</span>
                <h3 className="text-lg font-serif mb-4">{pillar.title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="flex justify-center">
          <a href="#contact" className="border border-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300">
            Inquire About Your Wedding
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Galleries() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embedding.pic-time.com/pictures/scripts/compiled/artgalleryembed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const blogGalleries = [
    { name: "Andreia & José", link: "https://bhweddingphoto.com/andreia-jose/", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" },
    { name: "Sruti & Srijith", link: "https://bhweddingphoto.com/sruti-srijith/", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
    { name: "Francisca & Inês", link: "https://bhweddingphoto.com/francisca-ines/", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop" },
    { name: "Gloria & Patrick", link: "https://bhweddingphoto.com/gloria-patrick/", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop" },
    { name: "Cindy & David", link: "https://bhweddingphoto.com/cindy-david/", img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop" },
    { name: "Alicia & Sebastien", link: "https://bhweddingphoto.com/alicia-sebastien-2/", img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop" },
    { name: "Diana João & Luís", link: "https://bhweddingphoto.com/diana-luis/", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" },
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
              Featured <span className="italic">Weddings</span>
            </h2>
            <a href="https://bhweddingphoto.com/blog/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-colors duration-300">
              View All Stories
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal Slider for Blog Galleries */}
      <div className="w-full overflow-hidden mb-32 relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 md:gap-6 px-4 md:px-6">
          {[...blogGalleries, ...blogGalleries].map((gallery, idx) => (
            <a 
              key={idx} 
              href={gallery.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] aspect-[4/5] group overflow-hidden rounded-2xl"
            >
              <img 
                src={gallery.img} 
                alt={gallery.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-2xl md:text-3xl font-serif mb-4 text-center px-4">{gallery.name}</h3>
                <span className="text-white text-xs tracking-[0.2em] uppercase border-b border-white/50 pb-1 flex items-center gap-2">
                  Ver Galeria <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <FadeIn>
          <h3 className="text-2xl md:text-3xl font-serif mb-12 text-center italic text-black/80">Wedding Films</h3>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {videos.map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="w-full aspect-video relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-500 bg-black/5">
                <iframe 
                  src={src}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen 
                  allowTransparency
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const steps = [
    { title: "Inquiry", desc: "Tell us about your wedding plans.", icon: PenTool },
    { title: "Discovery Call", desc: "We schedule a video call to understand your vision.", icon: Video },
    { title: "Tailored Collection", desc: "A photography collection adapted to your wedding.", icon: Camera },
    { title: "Wedding Day", desc: "We capture every moment naturally and discreetly.", icon: Heart },
    { title: "Gallery Delivery", desc: "You receive a curated gallery with timeless memories.", icon: ImageIcon },
  ];

  return (
    <section className="py-24 md:py-40 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-24">
            Our Destination <span className="italic">Wedding Experience</span>
          </h2>
        </FadeIn>

        <div className="space-y-16 mb-24 relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 md:-translate-x-1/2" />
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 w-full pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-[10px] text-white/40 font-mono mb-2 block">STEP 0{idx + 1}</span>
                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                  <p className="text-sm text-white/60 font-light">{step.desc}</p>
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
            Check Availability
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Michael",
      country: "United States",
      text: "Choosing BH for our destination wedding in the Algarve was the best decision we made. They captured the light and our love perfectly. Even planning from across the Atlantic, they made us feel completely at ease. The final gallery exceeded all our expectations!",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Alicia & Sebastien",
      country: "France",
      text: "We don't live in the same country, we don't speak the same language, and yet, while looking for a photography style that resembles us, I came across their page and it was obvious. The photos received a few weeks later are magnificent! Thank you BH Wedding Photography.",
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Emma & James",
      country: "United Kingdom",
      text: "The editorial style of their photography is simply breathtaking. They managed to capture the essence of our celebration in Porto with such elegance and authenticity. They were a calming presence throughout the day, and the video brings us to tears every time we watch it.",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=150&auto=format&fit=crop"
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
          <p className="text-[10px] tracking-widest uppercase text-black/40 mb-12">Kind Words</p>
          
          <div className="relative h-[450px] sm:h-[350px] md:h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h2 className="text-xl md:text-3xl font-serif leading-relaxed italic mb-10 px-4">
                  "{testimonials[currentIndex].text}"
                </h2>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].img} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border border-black/10"
                  />
                  <div>
                    <p className="text-sm tracking-widest uppercase">{testimonials[currentIndex].name}</p>
                    <p className="text-xs text-black/50 font-serif italic">{testimonials[currentIndex].country}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
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
  const [locationIndex, setLocationIndex] = useState(0);
  const locations = [
    { name: "Portugal", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop" },
    { name: "Porto", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" },
    { name: "Lisbon", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop" },
    { name: "the Algarve", img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop" },
    { name: "Northern Portugal", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop" }
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
              Why{' '}
              <span className="inline-flex relative h-[1.2em] w-[180px] md:w-[260px] lg:w-[320px] overflow-hidden align-bottom justify-center">
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
              </span>{' '}
              is One of the Most Beautiful Places for a Destination Wedding
            </h2>
            <div className="space-y-4 text-sm md:text-base text-black/70 font-light leading-relaxed">
              <p>From the terraced <span className="font-serif font-bold text-[1.1em] text-black">Douro vineyards</span> to historic cities like <span className="font-serif font-bold text-[1.1em] text-black">Porto and Lisbon</span>, Portugal offers an unmatched backdrop for your celebration.</p>
              <p>The dramatic <span className="font-serif font-bold text-[1.1em] text-black">Algarve coastline</span>, warm climate, and unique natural light create cinematic moments effortlessly.</p>
              <p>With easy travel from Europe and the US, it's the perfect gathering place for your loved ones.</p>
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
  const faqs = [
    { q: "Do you photograph weddings across Portugal?", a: "Yes, we travel throughout Portugal, including Porto, the Douro Valley, Lisbon, Sintra, and the Algarve." },
    { q: "Can we book without visiting Portugal first?", a: "Absolutely. Most of our international couples book us before visiting. We handle everything via video calls and email to ensure a seamless process." },
    { q: "Do you speak English?", a: "Yes, we are fluent in English and communicate seamlessly with couples and vendors from around the world." },
    { q: "How far in advance should we book?", a: "We recommend booking 12 to 18 months in advance, especially for peak wedding season (May to October)." },
    { q: "What is included in your photography collections?", a: "Our collections are tailored to your needs, typically including full-day coverage, a curated online gallery, high-resolution images, and an optional engagement session or second photographer." },
    { q: "How do payments work for international couples?", a: "We accept international bank transfers (via Wise or direct wire) and major credit cards, making the payment process simple and secure regardless of your location." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">
          Frequently Asked <span className="italic">Questions</span>
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
                <span className="font-serif text-lg md:text-xl pr-8">{faq.q}</span>
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
                      {faq.a}
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
  return (
    <section className="py-24 md:py-32 bg-black text-white px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            We Take on a Limited Number of <br className="hidden md:block" />
            <span className="italic">Destination Weddings Each Year</span>
          </h2>
          <p className="text-sm md:text-base text-white/70 font-light mb-12 max-w-xl mx-auto">
            To ensure every couple receives our full attention, we accept a limited number of destination weddings annually.
          </p>
          <a href="#contact" className="bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300">
            Secure Your Date
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Let's Talk About Your <br className="hidden md:block" />
            <span className="italic">Wedding in Portugal</span>
          </h2>
          <p className="text-sm text-black/60 font-light">Fill out the form below and we'll get back to you within 48 hours.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-black/60">Name</label>
              <input type="text" className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-black/60">Partner Name</label>
              <input type="text" className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-black/60">Email</label>
              <input type="email" className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-black/60">Wedding Date</label>
              <input type="text" placeholder="DD/MM/YYYY or Season" className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-black/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-black/60">Venue (if known)</label>
              <input type="text" className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-black/60">Estimated Guest Count</label>
              <input type="text" className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-widest uppercase text-black/60">Message</label>
            <textarea rows={4} placeholder="Tell us about your vision, style, and what's most important to you..." className="border-b border-black/20 pb-2 bg-transparent focus:outline-none focus:border-black transition-colors resize-none placeholder:text-black/20"></textarea>
          </div>

          <div className="pt-8 text-center">
            <button type="submit" className="bg-black text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-black/80 transition-colors duration-300 w-full md:w-auto">
              Check Availability & Collections
            </button>
          </div>
        </form>

        <div className="mt-20 text-center border-t border-black/10 pt-12">
          <p className="text-sm text-black/60 font-light mb-4">Prefer something quick?</p>
          <a href="#" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-black/20 pb-1 hover:border-black transition-colors duration-300">
            <MessageCircle className="w-4 h-4" /> Chat with us on WhatsApp
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
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
        <a href="https://bhweddingphoto.com/sobre-nos/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Sobre Nós</a>
        <a href="https://bhweddingphoto.com/foto-casamento/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Portefólio</a>
        <a href="https://bhweddingphoto.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Galerias</a>
        <a href="https://bhweddingphoto.com/contacto/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Contacto</a>
      </div>

      <div className="flex gap-6 text-[11px] tracking-widest uppercase text-black/60">
        <a href="https://www.instagram.com/bhweddingphotography" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
        <a href="https://www.facebook.com/bhphotosessions" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-[10px] text-black/40 uppercase tracking-widest mt-4">
        <a href="https://bhweddingphoto.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Política de Privacidade</a>
        <span className="hidden md:inline">|</span>
        <a href="https://bhweddingphoto.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Termos e Condições</a>
        <span className="hidden md:inline">|</span>
        <a href="https://bhweddingphoto.com/cookies-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Política de Cookies</a>
      </div>

      <p className="text-[10px] text-black/40 uppercase tracking-widest mt-2">
        &copy; {new Date().getFullYear()} BH Wedding Photo. All rights reserved.
      </p>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <motion.a 
      href="https://wa.me/351911932129"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ scale: [1, 1.1, 1] }} 
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="fixed bottom-6 right-6 z-50 bg-[#D4A5A5] text-white p-4 rounded-full shadow-lg hover:bg-[#c49393] flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            className={`h-8 md:h-10 w-auto object-contain transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
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
          Inquire
        </a>
      </div>
    </header>
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
    </div>
  );
}
