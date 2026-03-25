import { useEffect, useRef } from "react";

export default function TestimonialSection() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  // Data matching your image content
  const testimonialGroups = [
    {
      mainImg: "t1.webp",
      review1: {
        text: "A great vibe here, loved the shisha, very smooth and great attentive service. A versatile range of grilled meats on offer here too, really enjoyed the chicken shish and chicken wings in particular, they were spot on..",
        author: "Niken Patel"
      },
      rating: "5.0",
      review2: {
        text: "Sky Lounge in Leicester is easily one of the best places in the city for both food and shisha. From the moment you walk in, the atmosphere is welcoming, relaxed, and perfect whether you’re catching up with friends or just looking to unwind in the evening.",
        author: "So Lazy"
      }
    },
    {
      mainImg: "t2.webp",
      review1: {
        text: "I had a wonderful experience at this place. The shisha was excellent, with smooth flavor and great quality. The food was delicious, and the mocktails were especially tasty and refreshing. ",
        author: "Marta Bondarieva"
      },
      rating: "5.0",
      review2: {
        text: "From the moment I walked in, the vibe was warm, inviting, and stylish. The lounge has just the right mix of soft lighting, comfortable seating, and relaxing music that makes you want to stay for hours.",
        author: "Albbi Albania"
      }
    },
    {
      mainImg: "t3.webp",
      review1: {
        text: "The male staff member was very helpful and kindly allowed us to bring outside food into the cafe, which I really appreciated....",
        author: "USIF"
      },
      rating: "5.0",
      review2: {
        text: "Great shisha lounge with lovely atmosphere and super friendly staff. I used to go aljumeria but now visit sky and it feels the same......",
        author: "Ramzan Javid"
      }
    },
    {
      mainImg: "t4.webp",
      review1: {
        text: "Sky Lounge was great, the Shisha selection was impressive and the atmosphere was very relaxed and comfortable....",
        author: "R R"
      },
      rating: "5.0",
      review2: {
        text: "Great place with Amazing food and service. Their loaded fries are my favourite and you must try them!",
        author: "Abdul"
      }
    },
    {
      mainImg: "t5.webp",
      review1: {
        text: "Great place, staff are accommodating, chilled great atmosphere. Highly recommended!",
        author: "R “Bluemarble AI” T"
      },
      rating: "5.0",
      review2: {
        text: "Amazing service. Especially Milo, great server and made sure we was comfortable and the shisha was PERFECT. Milo is a great asset to have.",
        author: "Ibraheem Yusuf"
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
                      Based on 126 reviews
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