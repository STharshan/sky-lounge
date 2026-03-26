import React from 'react';

const SplitScrollingHero = () => {
  const row1 = ["t1.webp", "t2.webp", "t3.webp", "t4.webp", "t5.webp", "t6.webp",];
  const row2 = ["t7.webp", "t8.webp", "t9.webp", "t10.webp", "t11.webp", "t12.webp",];

  return (
    <section id='gallery' className="flex flex-col lg:flex-row min-h-screen overflow-hidden">

      {/* LEFT SIDE: Exactly 50% width, Sticky Content */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center p-8 md:p-16 lg:p-20 z-20 bg-[#1B3A2D]">
        <div className="max-w-xl">
          {/* Heading: Changed to Cormorant Garamond, 42pt scale, SemiBold 600 */}
          <h2 className="text-[#B8975A] text-5xl md:text-[42pt] font-serif font-semibold uppercase leading-[1.1] mb-8">
            Taste the Atmosphere <br /> in Every Visit
          </h2>
          {/* Description: Changed to Lato, Regular 400, 1.7 line-height */}
          <p className="text-[#F0E0B0] text-lg md:text-[16pt] font-sans font-normal mb-10 opacity-80 leading-[1.7] max-w-lg">
            Discover a space where premium shisha meets exceptional food and drink. From curated flavours to signature mocktails, every detail is crafted for the experience.
          </p>
          {/* CTA: Changed to Cinzel, Medium 500, 0.18em tracking */}
          <a href='/#menu' className="px-10 py-4 bg-[#1B3A2D] text-[#B8975A] border border-[#B8975A]/30 hover:bg-[#B8975A] hover:text-[#0A1F12] transition-all duration-500 font-serif font-medium uppercase tracking-[0.18em] text-[13px] shadow-2xl">
            Explore the Menu
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Exactly 50% width, Infinite Scroll Container */}
      <div className="w-full lg:w-1/2 relative flex flex-col justify-center gap-4 py-12 lg:py-0 overflow-hidden ">

        {/* Row 1: Right to Left */}
        <div className="flex gap-4 animate-infinite-scroll">
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

        {/* Row 2: Right to Left */}
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
        .animate-infinite-scroll:hover, 
        .animate-infinite-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SplitScrollingHero;