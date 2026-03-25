import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const utilityLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const pageLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "/#menu" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Booking Page", href: "/booking-page" },
    { name: "Contact us", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#0A1F12] text-[#F0E0B0] pt-16 pb-6 px-6">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto border-b border-[#B8975A]/20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT: Navigation */}
        <div className="flex flex-col sm:flex-row gap-10">

          {/* Utility */}
          <div>
            <h4 className="text-[#B8975A] mb-4 uppercase text-xs tracking-[0.2em] font-bold">
              Utility
            </h4>
            <ul className="space-y-2 text-sm">
              {utilityLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="hover:text-[#B8975A] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[#B8975A] mb-4 uppercase text-xs tracking-[0.2em] font-bold">
              Quick Link
            </h4>
            <ul className="space-y-2 text-sm">
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

        {/* CENTER: Identity */}
        <div className="text-center flex flex-col items-center justify-center">
          <div className="mb-6 hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="Sky Lounge Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <a href="https://maps.app.goo.gl/eqpu4roRZYGDCD3KA" target="_blank" className="not-italic hover:text-[#B8975A] text-sm text-[#F0E0B0]/80 text-center leading-relaxed">
            63 Bedford St S, Leicester LE1 3JR,<br />
            United Kingdom
          </a>

          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a href="tel:+441163328639" className="hover:text-[#B8975A] transition-colors">
              +44 116 332 8639
            </a>
            <a href="mailto:info@skyloungeleicester.co.uk" className="hover:text-[#B8975A] transition-colors">
              info@skyloungeleicester.co.uk
            </a>
          </div>
        </div>

        {/* RIGHT: About & Social */}
        <div className="text-left md:text-right space-y-6">
          <div>
            <h4 className="text-[#B8975A] mb-3 uppercase text-xs tracking-[0.2em] font-bold">
              About Our Lounge
            </h4>
            <p className="text-sm text-[#F0E0B0]/80 leading-relaxed max-w-sm md:ml-auto">
              Established in the heart of Leicester, Sky Lounge is where premium shisha culture meets a warm, welcoming atmosphere.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end gap-4">
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com/skyloungeleicester/" },
              { Icon: FaInstagram, url: "https://www.instagram.com/skyloungeleicester/" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#B8975A]/40 flex items-center justify-center rounded-full text-[#B8975A] hover:bg-[#B8975A] hover:text-[#0A1F12] transition-all duration-300"
              >
                <social.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col items-center text-[10px] uppercase tracking-widest text-[#F0E0B0]/50 gap-2 text-center">
        <p>&copy; {new Date().getFullYear()} Sky Lounge. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Powered by <a href="https://www.ansely.co.uk/" target="_blank" className="text-[#B8975A] hover:text-[#beab87] duration-300 cursor-pointer font-bold">Ansely</a>
        </p>
      </div>
    </footer>
  );
}