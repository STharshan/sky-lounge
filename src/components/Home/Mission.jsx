import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-[#1B3A2D] py-20 px-6 sm:px-10 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with Reveal Effect */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://cdn.prod.website-files.com/65bdcf95c34a1734a4d3768e/65e1bb7a11ceadd8214e08ab_mission.jpg"
                alt="Our Culinary Mission"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle Luxury Overlay */}
              <div className="absolute inset-0 border-px border-[#B8975A]/20 m-4 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#B8975A] text-4xl md:text-5xl  tracking-tight">
                Our Mission
              </h3>
              <div className="h-px w-20 bg-linear-to-r from-[#B8975A] via-[#F0E0B0] to-[#B8975A]"></div>
            </div>

            <div className="space-y-6">
              <p className="text-[#F0E0B0] text-lg leading-relaxed font-light italic">
                Our mission is simple: to give every guest an experience that goes beyond the ordinary. Whether you're unwinding after a long week or celebrating a special occasion, we make sure every visit feels personal, relaxed, and memorable.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white flex items-center gap-1">
                  300
                  <span className="text-[#B8975A]">+</span>
                </div>
                <div className="text-[#B8975A] text-xs uppercase tracking-[0.2em] font-medium">
                  Guests welcomed every week
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white flex items-center gap-1">
                  250
                  <span className="text-[#B8975A]">+</span>
                </div>
                <div className="text-[#B8975A] text-xs uppercase tracking-[0.2em] font-medium">
                  Unforgettable evenings and counting
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