export default function Hero() {
  return (
    <section id="#" className="relative h-screen w-full overflow-hidden bg-[#0A1F12]">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* linear Overlay (luxury feel) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A1F12]/80 via-transparent to-[#0A1F12]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

        {/* Heading */}
        <h1 className=" font-semibold leading-tight pt-20 
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
          bg-linear-to-r from-[#B8975A] via-[#F0E0B0] to-[#B8975A]
          bg-clip-text text-transparent
        ">
          Indulge in the Art of <br />
          Shisha & Flavour
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg uppercase text-[#F0E0B0]/80 leading-relaxed">
          Tuesday - Thursday & Monday: 4PM - 1AM<br />
          Friday: 4PM - 2AM · Saturday: 2PM - 2AM <br />
          Sunday: 2PM - 1AM
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-3 border border-[#B8975A] text-[#F0E0B0] 
          hover:bg-[#B8975A] hover:text-black transition duration-300 tracking-widest uppercase text-sm">
          Book a Table
        </button>
      </div>
    </section>
  );
}