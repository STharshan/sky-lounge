import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-[#1B3A2D] py-20 px-6 sm:px-10 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Scaled Image Container */}
          <div className="w-full lg:w-5/12 relative group">
            {/* aspect-[16/9] makes the image shorter.
                max-h-[300px] ensures it never gets too tall on large screens.
                lg:w-11/12 pulls it slightly away from the center for a cleaner look.
            */}
            <div className="relative overflow-hidden rounded-sm aspect-video md:aspect-2/3 max-h-75 md:max-h-100 lg:w-11/12 shadow-2xl">
              <img
                src="/t9.webp"
                alt="Our Culinary Mission"
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle Luxury Overlay */}
              <div className="absolute inset-0 border border-[#B8975A]/20 m-3 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#B8975A] text-4xl md:text-5xl tracking-tight">
                Our Mission
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-[#F0E0B0] text-lg md:text-xl leading-relaxed font-light opacity-90">
                Our mission is simple: to give every guest an experience that goes beyond the ordinary. Whether you're unwinding after a long week or celebrating a special occasion, we make sure every visit feels personal, relaxed, and memorable.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
              <div className="space-y-5">
                <div className="text-4xl md:text-5xl  text-white flex items-center gap-1">
                  300
                  <span className="text-white">+</span>
                </div>
                <div className="text-[#B8975A] text-sm uppercase font-semibold">
                  Guests welcomed every week
                </div>
              </div>

              <div className="space-y-5">
                <div className="text-4xl md:text-5xl  text-white flex items-center gap-1">
                  250
                  <span className="text-white">+</span>
                </div>
                <div className="text-[#B8975A] text-sm uppercase font-semibold">
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