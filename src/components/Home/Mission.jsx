import React from 'react';

const MissionSection = () => {
  return (
    <section className="overflow-hidden border-t border-[#B8975A]/10 bg-[#0A1F12] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-6" data-aos="fade-up-right" data-aos-delay="50">
            <div className="space-y-5">
            <h2 className="max-w-xl font-serif text-4xl font-bold uppercase leading-[0.8] tracking-tighter text-[#F0E0B0] md:text-[42pt]">
              Our Mission
            </h2>

            <p className="max-w-2xl font-sans text-base font-normal leading-[1.7] text-[#F0E0B0] md:text-[16pt]">
              Our mission is simple: to give every guest an experience that
              goes beyond the ordinary. Whether you&apos;re unwinding after a
              long week or celebrating a special occasion, we make sure every
              visit feels personal, relaxed, and memorable.
            </p>
          </div>

          {/* <div className="grid grid-cols-2 gap-6 pt-4 sm:max-w-md">
            <div className="space-y-2 rounded-[1.5rem] border border-[#B8975A]/20 bg-[#132A1B] px-5 py-5">
              <p className="font-serif text-3xl text-[#F0E0B0] md:text-4xl">
                300+
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#B8975A]">
                Guests Weekly
              </p>
            </div>

            <div className="space-y-2 rounded-[1.5rem] border border-[#B8975A]/20 bg-[#132A1B] px-5 py-5">
              <p className="font-serif text-3xl text-[#F0E0B0] md:text-4xl">
                250+
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#B8975A]">
                Signature Nights
              </p>
            </div>
          </div> */}
        </div>

        <div className="relative min-h-70 sm:min-h-90 lg:min-h-125" data-aos="fade-up-left" data-aos-delay="120">
          <div className="absolute right-0 top-0 h-10 w-20 text-[#B8975A] sm:h-14 sm:w-28" data-aos="fade-left" data-aos-delay="240">
            <svg
              viewBox="0 0 112 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M12 44C20 26 26 16 34 6"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M44 48C56 28 68 16 84 10"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M76 50C88 34 98 26 108 22"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="absolute left-2 top-6 w-[90%] rotate-[4deg] overflow-hidden rounded-[1.75rem] border-2 border-[#F0E0B0]/20 bg-[#132A1B] shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:left-6 sm:top-10 sm:w-[88%] lg:left-10 lg:w-[84%]" data-aos="zoom-in" data-aos-delay="180">
            <img
              src="/t9.webp"
              alt="Sky Lounge mission"
              className="h-65 w-full object-cover sm:h-85 lg:h-108"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A1F12]/20 via-transparent to-[#F0E0B0]/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
