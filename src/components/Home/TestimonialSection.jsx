import { useEffect, useRef } from "react";

export default function TestimonialSection() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  // Data matching your image content
  const testimonialGroups = [
    {
      mainImg: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      review1: {
        text: "Every dish felt like a piece of art. The flavors, the presentation, the service — perfection",
        author: "Farzana Rahman"
      },
      rating: "4.5",
      review2: {
        text: "Dining at Pistroa is more than just enjoying exquisite food — it’s a journey of taste, texture, and emotion. Every plate feels like a work of art.",
        author: "Nadia & Arif Hasan"
      }
    },
    {
      mainImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      review1: {
        text: "The atmosphere is electric yet refined. A must-visit for anyone craving authentic flavors.",
        author: "James Wong"
      },
      rating: "4.9",
      review2: {
        text: "Exceptional attention to detail. From the moment we walked in, we felt like royalty. The sake selection is world-class.",
        author: "Elena Rossi"
      }
    }
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let scrollAmount = 0;

    const step = () => {
      if (!container) return;
      if (!isHovered.current) {
        scrollAmount += 0.8; // High speed as requested
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="testimonial" className="bg-[#1B3A2D] py-20 overflow-hidden">
      <div
        ref={scrollRef}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
        className="flex gap-4 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {/* Loop twice for seamless transition */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4 shrink-0 items-start">
            {testimonialGroups.map((group, index) => (
              <div key={index} className="flex gap-4 shrink-0">
                
                {/* 1. LARGE IMAGE (Matches your image left side) */}
                <div className="w-88 md:w-125 h-113 md:h-150 shrink-0">
                  <img
                    src={group.mainImg}
                    alt="Food presentation"
                    className="w-full h-full object-cover rounded-sm shadow-2xl"
                  />
                </div>

                {/* 2. MIDDLE COLUMN (Vertical Stack: Review + Rating) */}
                <div className="flex flex-col gap-4 w-75 md:w-95 shrink-0">
                  {/* Top Green Card */}
                  <div className="bg-[#1B3A2D] p-8 h-80 flex flex-col justify-center rounded-sm border border-[#B8975A]/10">
                    <span className="text-[#B8975A] text-2xl mb-4">"</span>
                    <p className="text-[#B8975A] text-sm mb-2">★★★★★</p>
                    <p className="text-[#F0E0B0] text-lg leading-relaxed font-light">
                      {group.review1.text}
                    </p>
                    <p className="mt-6 text-xs text-[#F0E0B0]/60 uppercase tracking-widest">
                      {group.review1.author}
                    </p>
                  </div>
                  
                  {/* Bottom Gold Rating Card */}
                  <div className="bg-[#B8975A] p-8 h-66 flex flex-col justify-center rounded-sm">
                    <h2 className="text-[#0A1F12] text-7xl  font-bold italic leading-none">
                      {group.rating}
                    </h2>
                    <p className="text-[#0A1F12] text-sm mt-2">★★★★★</p>
                    <p className="text-[#0A1F12]/70 text-xs mt-1 font-bold uppercase tracking-tighter">
                      Based on 567 reviews
                    </p>
                  </div>
                </div>

                {/* 3. RIGHT COLUMN (Tall Review Card) */}
                <div className="w-75 md:w-95 bg-[#1B3A2D] p-10 h-138 md:h-150 flex flex-col justify-start rounded-sm border border-[#B8975A]/10 shrink-0">
                   <span className="text-[#B8975A] text-4xl  mb-6 opacity-40">"</span>
                   <p className="text-[#B8975A] text-sm mb-2">★★★★★</p>
                   <p className="text-[#F0E0B0] text-xl leading-relaxed font-light">
                    {group.review2.text}
                   </p>
                   <p className="mt-auto text-xs text-[#F0E0B0]/60 uppercase tracking-widest">
                    {group.review2.author}
                   </p>
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}