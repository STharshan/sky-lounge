import { FaFacebookF, FaInstagram } from "react-icons/fa";

const galleryItems = [
  { id: 1, src: "t1.webp", alt: "sky lounge gallery image 1" },
  { id: 2, src: "t2.webp", alt: "sky lounge gallery image 2" },
  { id: 3, src: "t3.webp", alt: "sky lounge gallery image 3" },
  { id: 4, src: "t4.webp", alt: "sky lounge gallery image 4" },
  { id: 5, src: "t5.webp", alt: "sky lounge gallery image 5" },
  { id: 7, src: "t7.webp", alt: "sky lounge gallery image 7" },
  { id: 8, src: "t8.webp", alt: "sky lounge gallery image 8" },
  { id: 9, src: "t9.webp", alt: "sky lounge gallery image 9" },
  { id: 10, src: "t10.webp", alt: "sky lounge gallery image 10" },
  { id: 11, src: "t11.webp", alt: "sky lounge gallery image 11" },
  { id: 12, src: "t12.webp", alt: "sky lounge gallery image 12" },
];

const marqueeItems = [...galleryItems, ...galleryItems];
const pairedItems = [];
for (let i = 0; i < marqueeItems.length; i += 2) {
  pairedItems.push(marqueeItems.slice(i, i + 2));
}

export default function GothamGallerySection() {
  return (
    /* Background updated to Forest Green (#1B3A2D) */
    <section className="overflow-hidden bg-[#1B3A2D] text-[#F0E0B0]">
      <style>{`
        @keyframes marqueeMove {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .gotham-marquee {
          width: max-content;
          display: flex;
          align-items: flex-end;
          animation: marqueeMove 38s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-480 px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:px-8 lg:pt-6">

        {/* Heading - Antique Gold (#B8975A) */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="max-w-225 pt-10 font-serif text-center text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#B8975A] sm:pt-12 sm:text-[38px] lg:pt-14 lg:text-[52px]">
            Taste the Atmosphere in Every Visit
          </h2>
        </div>

        {/* Social Links - Champagne (#F0E0B0) */}
        <div className="mt-5 flex justify-center sm:absolute sm:right-6 sm:top-37 sm:mt-0 lg:right-8 lg:top-35">
          <div className="flex items-center gap-4 text-[18px] text-[#F0E0B0]">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/skyloungeleicester/"
              target="_blank"
              aria-label="Facebook"
              className="text-[#B8975A] transition-transform duration-300 hover:scale-110 hover:text-[#F0E0B0]"
            >
              <FaFacebookF size={20} />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/skyloungeleicester/"
              target="_blank"
              aria-label="Instagram"
              className="text-[#B8975A] transition-transform duration-300 hover:scale-110 hover:text-[#F0E0B0]"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-8 overflow-hidden sm:mt-10 lg:mt-12">
          <div className="gotham-marquee gap-4 sm:gap-5 lg:gap-6">
            {pairedItems.map((pair, idx) => (
              <div
                key={idx}
                className="
                  group relative shrink-0 overflow-hidden bg-[#0A1F12]
                  w-45 h-53
                  sm:w-63 sm:h-75
                  md:w-75 md:h-90
                  lg:w-85 lg:h-98
                  rounded-t-[54px]
                  sm:rounded-t-[72px]
                  md:rounded-t-[88px]
                  lg:rounded-t-[98px]
                  rounded-b-none
                  border border-[#B8975A]/20
                "
              >
                <div className="flex h-full w-full gap-1 sm:gap-1.5">
                  {pair.map((item, imgIdx) => (
                    <div
                      key={`${item.id}-${imgIdx}-${idx}`}
                      className="relative h-full flex-1 overflow-hidden"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] grayscale-20 group-hover:grayscale-0"
                        draggable="false"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}