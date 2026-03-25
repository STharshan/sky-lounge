import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-[#1B3A2D] py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#B8975A] text-4xl md:text-5xl  mb-12">
          About us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Main Image */}
          <div className="relative group overflow-hidden rounded-sm">
            <img 
              src="https://cdn.prod.website-files.com/65bdcf95c34a1734a4d3768e/65e1b846656ce2ed5bacee41_About-1.jpg" 
              alt="Culinary experience" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay effect */}
            <div className="absolute inset-0 border border-[#B8975A]/20 pointer-events-none"></div>
          </div>

          {/* Right Column: Content and Secondary Image */}
          <div className="flex flex-col space-y-8">
            
            {/* Secondary Image Container */}
            <div className="relative self-end w-full md:w-4/5 lg:w-full overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://cdn.prod.website-files.com/65bdcf95c34a1734a4d3768e/65e1b86ab056510190724155_About-2.jpg" 
                alt="Paella dish" 
                className="w-full h-auto object-cover"
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