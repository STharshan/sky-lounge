import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

export default function FullscreenNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-5 z-100 transition-all duration-500 ${
          scrolled || open 
            ? "bg-[#0A1F12] shadow-xl py-4" 
            : "bg-transparent py-6"
        }`}
      >
        {/* Logo */}
        <div className="transition-opacity hover:opacity-80">
          <img
            src="/logo.png"
            alt="Sky Lounge Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 group focus:outline-none z-110"
        >
          <span className="tracking-[0.3em] text-xs font-bold text-[#B8975A]">
            {open ? "CLOSE" : "MENU"}
          </span>

          <div className="flex flex-col gap-1.5 relative">
            <span
              className={`block h-0.5 bg-[#B8975A] transition-all duration-300 ${
                open ? "rotate-45 translate-y-2 w-6" : "w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-[#B8975A] transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0 w-6" : "w-4 self-end"
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0A1F12] z-90 transition-all duration-700 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col md:flex-row h-full pt-24">
          {/* NAVIGATION LINKS */}
          <div className="flex-1 flex flex-col justify-center px-10 md:px-20 space-y-6">
            {links.map((link, i) => (
              <HashLink
                key={i}
                to={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 100}ms` : "0ms" }}
                className={`text-4xl md:text-6xl font-serif tracking-tight relative group block transition-all duration-700 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="inline-block group-hover:translate-x-4 text-[#B8975A] transition duration-500 group-hover:text-[#F0E0B0]">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-2 w-0 h-px bg-linear-to-r from-[#B8975A] to-transparent group-hover:w-full transition-all duration-500"></span>
              </HashLink>
            ))}
          </div>

          {/* CONTACT & SOCIALS */}
          <div className="flex-1 flex flex-col justify-end md:justify-center items-start md:items-end px-10 md:px-20 pb-16 md:pb-0 space-y-10">
            <div
              className={`space-y-4 pt-10 text-left md:text-right transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="space-y-1">
                <a href="mailto:info@skyloungeleicester.co.uk" className="text-[#F0E0B0] hover:text-white transition block">
                  info@skyloungeleicester.co.uk
                </a>
              </div>
              <div className="space-y-1">
                <a href="tel:+441163328639" className="text-[#F0E0B0] hover:text-white transition block">
                  +44 116 332 8639
                </a>
              </div>
            </div>

            <div
              className={`flex gap-6 transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-[#B8975A]/40 rounded-full flex items-center justify-center text-[#B8975A] hover:bg-[#B8975A] hover:text-[#0A1F12] transition-all duration-300 shadow-lg"
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