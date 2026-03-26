import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0A1F12]">

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

      {/* Linear Overlay (luxury feel) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A1F12]/80 via-transparent to-[#0A1F12]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        
        {/* Heading - Using Cormorant Garamond (Hero H1) */}
        <h1 className="font-serif font-bold leading-[1.1] pt-4 
          text-5xl md:text-7xl lg:text-8xl
          bg-linear-to-r from-[#B8975A] via-[#F0E0B0] to-[#B8975A]
          bg-clip-text text-transparent max-w-5xl
        ">
          Indulge in the Art of <br />
          Shisha & Flavour
        </h1>

        {/* Description - Using Lato (Body Style) */}
        <p className="mt-8 font-sans font-light text-[#F0E0B0] text-sm md:text-base leading-relaxed tracking-wide">
          Mon - Thu: 4PM - 1AM <span className="mx-2 text-[#B8975A]">·</span> Fri: 4PM - 2AM <br />
          Sat: 2PM - 2AM <span className="mx-2 text-[#B8975A]">·</span> Sun: 2PM - 1AM
        </p>

        {/* CTA Button - Using Cinzel (CTA Button Style) */}
        <Link 
          to="/booking-page" 
          className="mt-10 px-10 py-4 bg-[#B8975A] text-[#0A1F12] 
          font-serif font-medium text-[13px] tracking-[0.18em] uppercase
          hover:bg-[#F0E0B0] transition-all duration-500 shadow-2xl"
        >
          Book a Table
        </Link>
      </div>
    </section>
  );
}