import React, { useRef } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { motion, useScroll, useTransform } from 'framer-motion';

const PortfolioHero = () => {
  const containerRef = useRef(null);

  // Track scroll progress over the 200vh height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ANIMATION SETTINGS:
  // Text/Badge flies UP (-400px) and fades to 0 as we scroll
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0px", "-300px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Background stays still (0px movement)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);

  return (
    /* h-[200vh] provides the "track" for the scroll animation */
    <section ref={containerRef} className="relative h-[200vh] w-full font-sans">
      
      {/* STICKY WRAPPER - Stays pinned while scrolling through the 200vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A1F12]">

        {/* 1. Background Image - Remains Fixed */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full z-0">
          <img
            src="/t6.webp"
            alt="Sky Lounge Hero"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0A1F12] via-transparent to-transparent opacity-90" />
        </motion.div>

        {/* 2. ANIMATED CONTENT LAYER (Mobile & Desktop) */}
        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 h-full w-full"
        >
          {/* --- MOBILE LAYOUT --- */}
          <div className="lg:hidden relative px-6 h-full pb-8 flex flex-col justify-end gap-6">
            {/* Mobile Badge */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path id="mobilePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  <text className="fill-[#B8975A] font-serif text-[7px] uppercase font-medium tracking-[0.25em]">
                    <textPath href="#mobilePath">Working Worldwide • Based in Paris • Working Worldwide • Based in Paris •</textPath>
                  </text>
                </svg>
              </div>
              <div className="text-[#B8975A] opacity-90">
                <AiOutlineGlobal size={60} />
              </div>
            </div>

            {/* Mobile Tagline */}
            <p className="text-[#F0E0B0] text-xl font-serif font-medium leading-tight max-w-64">
              Indulge in the Art of Shisha & Flavour
            </p>

            {/* Mobile Title */}
            <h1 className="text-[#B8975A] font-serif text-[14vw] leading-[0.8] font-bold tracking-tighter">
              Sky Lounge
            </h1>
          </div>

          {/* --- DESKTOP LAYOUT --- */}
          <div className="hidden lg:block h-full w-full">
            {/* Desktop Badge */}
            <div className="absolute top-44 left-16">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path id="desktopPath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                    <text className="fill-[#B8975A] font-serif text-[7px] uppercase font-medium tracking-[0.25em]">
                      <textPath href="#desktopPath">Working Worldwide • Based in Paris • Working Worldwide • Based in Paris •</textPath>
                    </text>
                  </svg>
                </div>
                <div className="text-[#B8975A] opacity-90">
                  <AiOutlineGlobal size={120} />
                </div>
              </div>
            </div>

            {/* Desktop Tagline */}
            <div className="absolute top-1/2 right-16 -translate-y-1/2 max-w-64 text-left">
              <p className="text-[#F0E0B0] font-serif text-xl leading-snug font-semibold tracking-tight">
                Indulge in the Art of Shisha & Flavour 
              </p>
            </div>

            {/* Desktop Title */}
            <div className="absolute bottom-10 w-full px-16">
              <h1 className="text-[#B8975A] font-serif text-[14vw] lg:text-[16vw] leading-[0.8] font-semibold tracking-tighter select-none">
                Sky Lounge
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default PortfolioHero;