import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-[#0A1F12] py-20 px-6 sm:px-10 md:px-20 overflow-hidden border-t border-[#B8975A]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Image Container */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="relative overflow-hidden rounded-sm aspect-video md:aspect-2/3 max-h-75 md:max-h-125 lg:w-11/12 shadow-2xl">
              <img
                src="/t9.webp"
                alt="Sky Lounge Mission"
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Brand Gold Border Overlay */}
              <div className="absolute inset-0 border border-[#B8975A]/20 m-4 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-2">
              {/* Section Heading - Cormorant Garamond */}
              <h3 className="font-serif font-semibold text-[#D4B87A] text-4xl md:text-[42pt] leading-tight">
                Our Mission
              </h3>
            </div>

            <div className="space-y-6">
              {/* Body Text - Lato Regular 16pt with 1.7 line-height */}
              <p className="font-sans text-[#F0E0B0] text-base md:text-[16pt] leading-[1.7] font-normal opacity-90">
                Our mission is simple: to give every guest an experience that goes beyond the ordinary. 
                Whether you're unwinding after a long week or celebrating a special occasion, 
                we make sure every visit feels personal, relaxed, and memorable.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
              {/* Stat 01 */}
              <div className="space-y-3">
                <div className="font-serif text-4xl md:text-5xl text-white flex items-center gap-1">
                  300
                  <span className=" not-italic">+</span>
                </div>
                {/* Stat Label - Cinzel Style */}
                <div className="font-serif text-[#B8975A] text-[11px] tracking-[0.14em] uppercase">
                  Guests welcomed every week
                </div>
              </div>

              {/* Stat 02 */}
              <div className="space-y-3">
                <div className="font-serif text-4xl md:text-5xl text-white flex items-center gap-1">
                  250
                  <span className="not-italic">+</span>
                </div>
                <div className="font-serif text-[#B8975A] text-[11px] tracking-[0.14em] uppercase">
                  Unforgettable evenings
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;