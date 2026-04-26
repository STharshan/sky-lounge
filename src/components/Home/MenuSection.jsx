import { useState } from 'react';

const MenuSection = () => {
  const [category, setCategory] = useState('GRILL');

  const menuData = {
   GRILL: [
      { name: 'Lamb Shish', price: '£19.00', description: 'Tender cubes of marinated lamb, grilled to perfection over charcoal.' },
      { name: 'Chicken Shish', price: '£15.50', description: 'Juicy chunks of chicken breast, seasoned and flame-grilled for a smoky finish.' },
      { name: 'Chicken Wings (7)', price: '£15.50', description: 'Seven succulent wings marinated in our house blend, grilled for a crispy, charred edge.' },
      { name: 'Lamb Ribs (6)', price: '£17.00', description: 'Six slow-cooked lamb ribs, chargrilled and glazed in our signature spices.' },
      { name: 'Adana Kofte', price: '£18.00', description: 'Spiced minced lamb skewer, grilled to perfection.' },
      { name: 'Lamb Chops (4)', price: '£20.00', description: 'Juicy flame-grilled lamb chops bursting with flavour.' },
      { name: 'Mix Plater', price: '£52.00', description: 'Lamb Shish, Lamb Ribs (6), Chicken Shish, Chicken Wings (7)' },
      { name: 'Sky Plater', price: '£76.00', description: 'Lamb Shish, Adana, Lamb Ribs (6), Chicken Shish, Chicken Wings (7), Lamb Chops (4)' },
    ],
  };

  return (
    <section id='menu' className="bg-[#0A1F12] flex flex-col lg:flex-row min-h-screen">

      {/* LEFT SIDE: Fixed Image Column (Layout Kept Exactly Same) */}
      <div className="w-full lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex flex-col border-r border-[#B8975A]/20">
        <div className="h-1/3 w-full">
          <img src="/t11.webp" alt="Menu 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/3 w-full border-y border-[#B8975A]/20">
          <img src="/t12.webp" alt="Menu 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/3 w-full">
          <img src="/t7.webp" alt="Menu 3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* RIGHT SIDE: Scrollable Menu Content */}
      <div className="w-full lg:w-2/3 p-8 md:p-16 lg:p-24 bg-[#0A1F12]">

        <header className="mb-16">
          <h1 className="text-[#B8975A] text-7xl md:text-9xl font-serif font-bold tracking-tighter uppercase">
            Menu
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">

          {/* Category Navigation - Cinzel Style */}
          <nav className="flex flex-row md:flex-col gap-8 md:min-w-38">
            {['GRILL'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-serif text-[14px] tracking-[0.18em] transition-all text-left uppercase ${
                  category === cat
                  ? 'text-[#B8975A] border-b-2 w-17 border-[#B8975A]'
                  : 'text-[#F0E0B0]/40 hover:text-[#F0E0B0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Dynamic Menu List */}
          <div className="grow space-y-12">
            {(menuData[category] || []).map((item, index) => (
              <div key={index} className="group animate-fadeIn">
                
                {/* Item Name Container */}
                <div className="pb-2">
                  <div className="text-right">
                    <h3 className="text-[#F0E0B0] text-xl md:text-[14pt] font-sans font-bold uppercase tracking-wide">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Price and Description Row */}
                <div className='flex justify-between items-baseline'>
                  {/* PRICE - Cormorant Italic Signature */}
                  <span className="text-[#B8975A] text-2xl md:text-[22pt] font-serif italic">
                    {item.price}
                  </span>
                  
                  {/* Description - Lato Light Sage */}
                  <p className="text-[#6EA880] font-sans font-light text-sm md:text-[13pt] mt-3 text-right pb-5 leading-relaxed max-w-63 md:max-w-xs">
                    {item.description}
                  </p>
                </div>
                
                <div className='border-b border-[#B8975A]/20'></div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;
