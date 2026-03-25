import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F12] text-[#F0E0B0] pt-16 pb-6 px-6">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto border-b border-[#B8975A]/20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row gap-10">
          
          {/* Utility */}
          <div>
            <h4 className="text-[#B8975A] mb-4 uppercase text-sm tracking-widest">
              Utility
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#B8975A] cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[#B8975A] mb-4 uppercase text-sm tracking-widest">
              Pages
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About",
                "Menu",
                "Gallery",
                "Contact us",
                "Booking Page",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#B8975A] cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CENTER */}
        <div className="text-center flex flex-col items-center justify-center">
          
          {/* Logo */}
          <h2 className="text-2xl font-semibold bg-linear-to-r from-[#B8975A] via-[#F0E0B0] to-[#B8975A] bg-clip-text text-transparent mb-6">
            Sky Lounge
          </h2>

          <p className="text-sm text-[#F0E0B0]/80">
            63 Bedford St S, Leicester LE1 3JR,<br />
            United Kingdom
          </p>

          <p className="mt-2 text-sm">+44 116 332 8639</p>
          <p className="text-sm">info@skyloungeleicester.co.uk</p>
        </div>

        {/* RIGHT */}
        <div className="text-left md:text-right space-y-6">
          
          <div>
            <h4 className="text-[#B8975A] mb-3 uppercase text-sm tracking-widest">
              About Our Restaurant
            </h4>
            <p className="text-sm text-[#F0E0B0]/80 leading-relaxed">
              Established in the heart of Leicester, Sky Lounge is where premium shisha culture meets a warm, welcoming atmosphere, a destination built for those who appreciate the finer things done right.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end gap-3">
            {[FaFacebookF, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-[#B8975A]/50 flex items-center justify-center rounded-full text-[#B8975A] hover:bg-[#B8975A] hover:text-black transition"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#F0E0B0]/70 gap-4">
        <p>&copy; {new Date().getFullYear()} Sky Lounge. All rights reserved.</p>
        <p>
          Powered by<span className="text-[#B8975A]"> Ansely</span>
        </p>
      </div>
    </footer>
  );
}