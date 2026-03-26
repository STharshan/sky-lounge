import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-[#0A1F12] py-16 px-6 md:py-24 border-t border-[#B8975A]/10">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading - Cormorant Garamond H2 (42pt) */}
        <h2 className="text-[#D4B87A] text-4xl md:text-[42pt] mb-12 font-serif font-semibold leading-tight">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Main Image */}
          <div className="relative group overflow-hidden rounded-sm aspect-4/3 md:aspect-video lg:aspect-4/5 max-h-100 md:max-h-125 w-full shadow-2xl">
            <img 
              src="/t6.webp" 
              alt="Sky Lounge Leicester Interior" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Brand Border Overlay */}
            <div className="absolute inset-0 border border-[#B8975A]/20 pointer-events-none m-4"></div>
          </div>

          {/* Right Column: Content and Secondary Image */}
          <div className="flex flex-col space-y-12">
            
            {/* Secondary Image - Architectural Framing */}
            <div className="relative self-end w-full md:w-4/5 lg:w-full overflow-hidden rounded-sm shadow-2xl aspect-video max-h-63 md:max-h-75">
              <img 
                src="t8.webp" 
                alt="Sky Lounge Shisha Details" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1F12]/20"></div>
            </div>

            {/* Text Content - Lato Body (16pt / 1.7 line-height) */}
            <div className="space-y-6 max-w-lg">
              <p className="font-sans text-[#F0E0B0] text-base md:text-[16pt] leading-[1.7] font-normal">
                Established in the heart of Leicester, Sky Lounge is where premium shisha culture 
                meets a warm, welcoming atmosphere. We are a destination built for 
                those who appreciate <span className="text-[#B8975A] font-medium">the finer things done right.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;