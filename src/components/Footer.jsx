import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const utilityLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const pageLinks = [
    { name: "Home", href: "/#" },
    { name: "Menu", href: "/#menu" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Booking Page", href: "/booking-page" },
    { name: "Contact us", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#0A1F12] text-[#F0E0B0] pt-16 md:pt-20 pb-10 px-6 font-['Lato']">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION: Responsive Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-0 border-b border-[#B8975A]/20 pb-12 md:pb-0">

          {/* Using Lato 11pt Regular for address/meta per guide */}
          <div className="order-first md:order-2 flex flex-col items-center justify-center text-center px-4 md:px-10 md:border-x pb-15 border-[#B8975A]/20">
            <div className="mb-6 md:mb-8 hover:opacity-80 transition-opacity">
              <img
                src="/logo.png"
                alt="Sky Lounge Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            <div className="space-y-2 text-[11px] font-normal leading-relaxed uppercase tracking-widest">
              <p className="max-w-63 mx-auto">63 Bedford St S, Leicester LE1 3JR, United Kingdom</p>
              <a href="tel:+441163328639" className="block hover:text-[#B8975A] transition-colors">
                +44 116 332 8639
              </a>
              <a href="mailto:info@skyloungeleicester.co.uk" className="block hover:text-[#B8975A] transition-colors">
                info@skyloungeleicester.co.uk
              </a>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS (Left on Desktop) */}
          <div className="order-2 md:order-1 flex flex-row justify-between md:justify-start md:gap-20 md:pr-10">
            <div>
              {/* Titles: Cinzel 14pt (Footer column titles) */}
              <h4 className="font-['Cinzel'] text-[#B8975A] mb-6 uppercase text-[14px] tracking-[0.18em] font-semibold">
                Utility
              </h4>
              {/* Links: Cinzel 13pt Regular */}
              <ul className="space-y-3 font-['Cinzel'] text-[13px] tracking-[0.14em] uppercase">
                {utilityLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="hover:text-[#B8975A] transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-['Cinzel'] text-[#B8975A] mb-6 uppercase text-[14px] tracking-[0.18em] font-semibold">
                Pages
              </h4>
              <ul className="space-y-3 font-['Cinzel'] text-[13px] tracking-[0.14em] uppercase">
                {pageLinks.map((link, i) => (
                  <li key={i}>
                    <HashLink to={link.href} className="hover:text-[#B8975A] transition-colors duration-300">
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. ABOUT & SOCIALS (Right on Desktop) */}
          <div className="order-3 md:order-3 flex flex-col items-center md:items-start text-center md:text-left md:pl-22">
            <h4 className="font-['Cinzel'] text-[#B8975A] mb-6 uppercase text-[14px] tracking-[0.18em] font-semibold">
              About Our Lounge
            </h4>
            {/* Body: Lato 16pt Regular, Line-height 1.6-1.7 */}
            <p className="text-[16px] font-normal leading-[1.7] max-w-xs mb-8 text-[#F0E0B0]">
              Established in the heart of Leicester, Sky Lounge is where premium shisha culture meets a warm, welcoming atmosphere.
            </p>

            <div className="flex gap-3 justify-center md:justify-end">
              {[
                { Icon: FaFacebookF, url: "https://www.facebook.com/skyloungeleicester/" },
                { Icon: FaInstagram, url: "https://www.instagram.com/skyloungeleicester/" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#B8975A]/30 flex items-center justify-center rounded-full text-[#F0E0B0] hover:bg-[#B8975A] hover:text-[#0A1F12] transition-all duration-300"
                >
                  <social.Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Style: Lato 11pt, Sage Green #3D7A5E */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 items-center text-[11px] uppercase tracking-[0.2em] text-[#3D7A5E] text-center md:text-left gap-4">
          <div className="md:col-span-1">
            <p>© {new Date().getFullYear()} Sky Lounge. All rights reserved.</p>
          </div>

          <div className="md:col-span-1 text-center">
            <p>
              Powered by <a href="https://www.ansely.co.uk/" target="_blank" className="text-[#B8975A] hover:underline font-bold">Ansely</a>
            </p>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </footer>
  );
}