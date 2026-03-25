import React from 'react';

const SplitScrollingHero = () => {
  // Image sets from your provided URLs
  const row1 = [
    "https://cdn.prod.website-files.com/6777ca72cf24680980ebd1e0/677b437fee3f4ac080020810_Urban-restaurant-rGaXW5oB1GE-unsplash.avif",
    "https://cdn.prod.website-files.com/6777ca72cf24680980ebd1e0/677b3f5feaee5520bfe1d794_Urban-restaurant-lxKFrjLlieQ-unsplash.avif",
    "https://cdn.prod.website-files.com/6777ca72cf24680980ebd1e0/677b437e617aa1aeefa327e4_Urban-restaurant-Fo8UGw1XaPo-unsplash.avif",
  ];

  const row2 = [
    "https://cdn.prod.website-files.com/6777ca72cf24680980ebd1e0/677b3f5e9465aca5166c5bab_Urban-restaurant-b2jKJ4jAfkg-unsplash.avif",
    "https://cdn.prod.website-files.com/6777ca72cf24680980ebd1e0/678480d0d0e66fbd863bdc31_Urban%20Restaurant-FA8HEWO9Vd8-unsplash.avif",
    "https://cdn.prod.website-files.com/6777ca72cf24680980ebd1e0/677b437ea40b89e587af7e2d_Urban-restaurant-UoTlkEmUDMQ-unsplash.avif",
  ];

  return (
    <section className="bg-[#0A1F12] flex flex-col lg:flex-row min-h-screen overflow-hidden">
      
      {/* LEFT SIDE: Exactly 50% width, Sticky Content */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center p-8 md:p-16 lg:p-20 z-20 bg-[#0A1F12]">
        <div className="max-w-xl">
          <h2 className="text-[#B8975A] text-5xl md:text-7xl font-serif font-bold uppercase leading-[1.1] mb-8">
            Taste the City <br /> in Every Bite
          </h2>
          <p className="text-[#F0E0B0] text-lg md:text-xl font-light mb-10 opacity-80 leading-relaxed max-w-lg">
            Discover dishes that break the rules and celebrate flavor. From 
            street-inspired bites to modern classics, every plate is made to impress.
          </p>
          <button className="px-10 py-4 bg-[#1B3A2D] text-[#B8975A] border border-[#B8975A]/30 rounded-sm hover:bg-[#B8975A] hover:text-[#0A1F12] transition-all duration-500 font-bold uppercase tracking-widest text-sm shadow-2xl">
            Explore
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Exactly 50% width, Infinite Scroll Container */}
      <div className="w-full lg:w-1/2 relative flex flex-col justify-center gap-4 py-12 lg:py-0 overflow-hidden border-l border-[#B8975A]/10">
        
        {/* Row 1: Right to Left */}
        <div className="flex gap-4 animate-infinite-scroll">
          {/* We triple the array to ensure no gaps on wide screens */}
          {[...row1, ...row1, ...row1].map((src, i) => (
            <div key={i} className="shrink-0 w-70 md:w-100 aspect-4/3 rounded-lg overflow-hidden group">
              <img 
                src={src} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left (Faster Speed for parallax effect) */}
        <div className="flex gap-4 animate-infinite-scroll-fast">
          {[...row2, ...row2, ...row2].map((src, i) => (
            <div key={i} className="shrink-0 w-70 md:w-100 aspect-4/3 rounded-lg overflow-hidden group">
              <img 
                src={src} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>

        {/* Luxury Vignette/Shadow overlay to blend images into the left panel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0A1F12] to-transparent pointer-events-none z-10 hidden lg:block"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-infinite-scroll-fast {
          animation: scroll 12s linear infinite;
        }
        /* Stops on hover so users can admire the photos */
        .animate-infinite-scroll:hover, 
        .animate-infinite-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SplitScrollingHero;