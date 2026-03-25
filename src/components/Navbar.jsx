import { useState } from "react";

export default function FullscreenNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "Menu",
    "Events",
    "Book your table",
    "Get in touch",
  ];

  return (
    <div>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-5 bg-[#0A1F12] text-[#F0E0B0] z-100">
        
        {/* Logo */}
        <h1 className="text-xl font-bold bg-linear-to-r from-[#B8975A] via-[#F0E0B0] to-[#B8975A] bg-clip-text text-transparent">
          GOMA
        </h1>

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3"
        >
          <span className="tracking-widest text-sm">
            {open ? "CLOSE" : "MENU"}
          </span>

          {/* Animated Hamburger → X */}
          <div className="flex flex-col gap-1 relative">
            <span
              className={`block h-0.5 bg-[#F0E0B0] transition-all duration-300 ${
                open
                  ? "rotate-45 translate-y-1.25 w-6"
                  : "w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-[#F0E0B0] transition-all duration-300 ${
                open
                  ? "-rotate-45 -translate-y-1.25 w-6"
                  : "w-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0A1F12] z-90 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          
          {/* LEFT LINKS */}
          <div className="flex-1 flex flex-col justify-center px-10 md:px-20 space-y-6">
            {links.map((link, i) => (
              <a
                key={i}
                href="#"
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`text-3xl md:text-5xl font-serif tracking-wide relative group 
                transition-all duration-500
                ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <span className="block group-hover:translate-x-2 transition duration-300">
                  {link}
                </span>

                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#B8975A] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col justify-end md:justify-center items-start md:items-end px-10 md:px-20 pb-10 md:pb-0 space-y-6">

            {/* Contact */}
            <div
              className={`space-y-2 text-sm transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-[#F0E0B0]/70">info@goma.com</p>
              <p className="text-[#F0E0B0]/70">+45 12 12 12 12</p>
            </div>

            {/* Social */}
            <div
              className={`flex gap-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {["FB", "IG", "TW"].map((s, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border border-[#B8975A] flex items-center justify-center text-[#B8975A] hover:bg-[#B8975A] hover:text-black transition"
                >
                  {s}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}