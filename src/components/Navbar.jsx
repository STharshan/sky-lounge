import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaXmark } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

export default function FullscreenNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { name: "Home", href: "/#" },
    { name: "Menu", href: "/#menu" },
    { name: "Testimonial", href: "/#testimonial" },
    { name: "Book your table", href: "/booking-page" },
    { name: "Get in touch", href: "/#contact" },
  ];

  const socials = [
    { icon: <FaFacebookF size={18} />, url: "https://www.facebook.com/skyloungeleicester/" },
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/skyloungeleicester/" },
  ];

  return (
    <div>
      {/* GLOBAL FIXED NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-10 lg:px-20 transition-all duration-500 z-[400] ${
          open 
            ? "bg-[#0A1F12] py-6 sm:py-8" 
            : scrolled 
              ? "bg-[#0A1F12] shadow-xl py-3 sm:py-4" 
              : "bg-transparent py-4 sm:py-6"
        }`}
      >
        {/* Logo */}
        <div className="transition-opacity hover:opacity-80">
          <img
            src="/logo.png"
            alt="Sky Lounge Logo"
            className="h-9 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* TOGGLE BUTTON - Always on top */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex items-center gap-3 sm:gap-4 group focus:outline-none cursor-pointer text-[#B8975A] hover:text-[#F0E0B0] transition-colors duration-300"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className={`${open ? "block" : "hidden min-[360px]:inline"} tracking-[0.18em] text-[12px] sm:text-[13px] font-semibold font-serif uppercase`}>
            {open ? "CLOSE" : "MENU"}
          </span>

          {open ? (
            <FaXmark className="text-2xl sm:text-3xl" aria-hidden="true" />
          ) : (
            <div className="flex flex-col gap-1.5 relative w-6 h-4 justify-center" aria-hidden="true">
              <span className="block h-0.5 bg-[#B8975A] absolute left-0 top-0 w-6 transition-all duration-300"></span>
              <span className="block h-0.5 bg-[#B8975A] absolute right-0 bottom-0 w-4 group-hover:w-6 transition-all duration-300"></span>
            </div>
          )}
        </button>
      </nav>

      {/* FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed top-0 left-0 w-full h-dvh bg-[#0A1F12] z-[100] transition-all duration-500 ease-in-out ${
          open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Added explicit top padding to push content safely below the active header layer */}
        <div className="flex h-full flex-col lg:flex-row pt-24 sm:pt-32 pb-10 overflow-y-auto">
          
          {/* NAVIGATION LINKS */}
          <div className="flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-20 py-4 space-y-3 sm:space-y-4">
            {links.map((link, i) => (
              <HashLink
                key={i}
                to={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
                className={`text-[clamp(2.2rem,7vw,4rem)] lg:text-[clamp(3rem,5vw,5rem)] leading-[1] font-serif font-bold tracking-normal relative group block transition-all duration-700 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="inline-block max-w-full break-words text-[#B8975A] transition duration-500 group-hover:translate-x-2 sm:group-hover:translate-x-4 group-hover:text-[#F0E0B0]">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#B8975A] group-hover:w-1/2 transition-all duration-500"></span>
              </HashLink>
            ))}
          </div>

          {/* CONTACT & SOCIALS */}
          <div className="flex flex-1 flex-col justify-start lg:justify-center items-start lg:items-end px-6 sm:px-10 lg:px-20 pt-6 pb-4 lg:pb-0 space-y-8 sm:space-y-10">
            <div
              className={`space-y-4 text-left lg:text-right transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="space-y-2 font-sans">
                <p className="text-[#B8975A] text-[10px] tracking-[0.14em] font-serif uppercase mb-1">Get in Touch</p>
                <a href="mailto:info@skyloungeleicester.co.uk" className="text-[#F0E0B0] font-light text-base sm:text-lg hover:text-white transition block break-all">
                  info@skyloungeleicester.co.uk
                </a>
                <a href="tel:+441163328639" className="text-[#F0E0B0] font-light text-base sm:text-lg hover:text-white transition block">
                  +44 116 332 8639
                </a>
              </div>
            </div>

            {/* Socials */}
            <div
              className={`flex gap-6 transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-[#B8975A]/40 rounded-full flex items-center justify-center text-[#B8975A] hover:bg-[#B8975A] hover:text-[#0A1F12] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
