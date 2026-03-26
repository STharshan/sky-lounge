import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-[#1B3A2D] py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#B8975A] text-4xl md:text-5xl mb-12 font-serif">
          About us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Main Image - Controlled Height */}
          <div className="relative group overflow-hidden rounded-sm aspect-4/3 md:aspect-video lg:aspect-4/5 max-h-100 md:max-h-125 w-full">
            <img 
              src="/t6.webp" 
              alt="Culinary experience" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay effect */}
            <div className="absolute inset-0 border border-[#B8975A]/20 pointer-events-none"></div>
          </div>

          {/* Right Column: Content and Secondary Image */}
          <div className="flex flex-col space-y-8">
            
            {/* Secondary Image Container - Reduced Height */}
            <div className="relative self-end w-full md:w-4/5 lg:w-full overflow-hidden rounded-sm shadow-2xl aspect-video max-h-63 md:max-h-75]">
              <img 
                src="t8.webp" 
                alt="Paella dish" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 max-w-lg">
              <p className="text-[#F0E0B0] text-xl md:text-2xl font-medium leading-relaxed">
                Established in the heart of Leicester, Sky Lounge is where premium shisha culture meets a warm, welcoming atmosphere, a destination built for 
                those who appreciate <span className="text-[#B8975A]"> the finer things done right.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;