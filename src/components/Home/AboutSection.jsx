import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="border-t border-[#B8975A]/10 bg-[#0A1F12] px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="space-y-8" data-aos="fade-bottom" data-aos-delay="60">
          <p className="font-serif text-4xl font-bold leading-[0.8] tracking-tighter text-[#D4B87A] md:text-[42pt]">
            About Us
          </p>

          <div className="space-y-6">
            <h2 className="max-w-xl font-serif text-4xl font-bold uppercase leading-[0.8] tracking-tighter text-[#F0E0B0] md:text-[42pt]">
              Premium Shisha
              <br />
              Lounge
              <br />
              Experience.
            </h2>

            <p className="max-w-xl font-sans text-base font-normal leading-[1.7] text-[#F0E0B0] md:text-[16pt]">
              Established in the heart of Leicester, Sky Lounge is where premium
              shisha culture meets a warm, welcoming atmosphere. We are a
              destination built for those who appreciate{' '}
              <span className="font-medium text-[#B8975A]">
                the finer things done right.
              </span>
            </p>
          </div>
        </div>

        <div className="relative min-h-90 sm:min-h-107 lg:min-h-140" data-aos="fade-top" data-aos-delay="140">
          <div className="absolute right-2 top-3 h-32 w-[64%] rotate-[8deg] overflow-hidden rounded-[1.35rem] border-2 border-[#F0E0B0]/25 bg-[#132A1B] shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:right-8 sm:h-44 sm:w-[52%] sm:rounded-[1.8rem] md:h-56" data-aos="zoom-in-down" data-aos-delay="220">
            <img
              src="/t8.webp"
              alt="Sky Lounge shisha details"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F0E0B0]/10" />
          </div>

          <div className="absolute left-0 top-32 z-20 text-[#B8975A] sm:top-40" data-aos="fade-bottom" data-aos-delay="280">
            <svg
              width="54"
              height="96"
              viewBox="0 0 74 132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_8px_16px_rgba(184,151,90,0.25)] sm:h-33 sm:w-18"
            >
              <path
                d="M47.765 1.378c1.832-.976 3.859 1.064 2.812 2.855L31.488 39.19a2 2 0 0 0 2.6 2.817l20.602-9.34c1.779-.807 3.536 1.044 2.703 2.811L24.308 130.69c-.846 1.814-3.573 1.117-3.457-.884l3.181-54.587a2 2 0 0 0-2.881-1.92L3.519 81.98C1.646 82.82-.079 80.8.898 78.97L47.765 1.378Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute left-8 top-27 z-10 w-[84%] -rotate-[8deg] overflow-hidden rounded-[1.6rem] border-2 border-[#F0E0B0]/25 bg-[#132A1B] shadow-[0_30px_100px_rgba(0,0,0,0.38)] sm:left-12 sm:top-48 sm:w-[82%] sm:rounded-4xl" data-aos="zoom-in-up" data-aos-delay="180">
            <img
              src="/t6.webp"
              alt="Sky Lounge Leicester interior"
              className="h-full max-h-63 w-full object-cover sm:max-h-88"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A1F12]/16 via-transparent to-[#F0E0B0]/10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
