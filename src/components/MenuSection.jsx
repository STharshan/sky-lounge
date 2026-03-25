import React, { useState } from 'react';

const MenuSection = () => {
  const [category, setCategory] = useState('SHISHA');

  const menuData = {
    SHISHA: [
      { name: 'KAPPA', japanese: 'かっぱ', price: '$9', description: 'Crisp cucumber rolled with sushi' },
      { name: 'TEKKA', japanese: 'てっか', price: '$12', description: 'Lean tuna wrapped in sushi' },
      { name: 'NEGITORO', japanese: 'ネギトロ', price: '$22', description: 'Minced fatty tuna with green onion' },
      { name: 'DRAGON', japanese: 'ドラゴン', price: '$27', description: 'Eel and cucumber inside' },
    ],
    DRINKS: [
      { name: 'SUNTORY WHISKY', japanese: 'サントリー', price: '$15', description: 'Premium Japanese highball' },
      { name: 'ASAHI SUPER DRY', japanese: 'アサヒ', price: '$8', description: 'Crisp, clean lager' },
      { name: 'MATCHA LATTE', japanese: '抹茶ラテ', price: '$7', description: 'Ceremonial grade green tea with milk' },
      { name: 'SAKE FLIGHT', japanese: '日本酒', price: '$25', description: 'Selection of three seasonal sakes' },
    ]
  };

  return (
    <section className="bg-[#0A1F12] flex flex-col lg:flex-row min-h-screen">
      
      {/* LEFT SIDE: Fixed Image Column (Hidden on mobile scroll, sticky on desktop) */}
      <div className="w-full lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex flex-col border-r border-[#B8975A]/20">
        <div className="h-1/3 w-full">
          <img 
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800" 
            alt="Sushi Prep" className="w-full h-full object-cover" 
          />
        </div>
        <div className="h-1/3 w-full border-y border-[#B8975A]/20">
          <img 
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800" 
            alt="Sushi Plate" className="w-full h-full object-cover" 
          />
        </div>
        <div className="h-1/3 w-full">
          <img 
            src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=800" 
            alt="Nigiri" className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* RIGHT SIDE: Scrollable Menu Content */}
      <div className="w-full lg:w-2/3 p-8 md:p-16 lg:p-24 bg-[#1B3A2D]">
        
        <header className="mb-16">
          <h1 className="text-[#B8975A] text-7xl md:text-9xl font-serif font-bold tracking-tighter">
            MENU
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Category Navigation */}
          <nav className="flex flex-row md:flex-col gap-8 md:min-w-38">
            <button 
              onClick={() => setCategory('SHISHA')}
              className={`text-2xl font-bold tracking-widest transition-all text-left ${
                category === 'SHISHA' 
                ? 'text-[#B8975A] border-b-2 border-[#B8975A]' 
                : 'text-[#F0E0B0]/40 hover:text-[#F0E0B0]'
              }`}
            >
              SHISHA
            </button>
            <button 
              onClick={() => setCategory('DRINKS')}
              className={`text-2xl font-bold tracking-widest transition-all text-left ${
                category === 'DRINKS' 
                ? 'text-[#B8975A] border-b-2 border-[#B8975A]' 
                : 'text-[#F0E0B0]/40 hover:text-[#F0E0B0]'
              }`}
            >
              DRINKS
            </button>
          </nav>

          {/* Dynamic Menu List */}
          <div className="grow space-y-12">
            {menuData[category].map((item, index) => (
              <div key={index} className="group animate-fadeIn">
                <div className="flex justify-between items-end border-b border-[#B8975A]/20 pb-2 group-hover:border-[#B8975A]/60 transition-colors">
                  <span className="text-[#B8975A] text-2xl font-medium tracking-tight">
                    {item.price}
                  </span>
                  <div className="text-right">
                    <h3 className="text-[#F0E0B0] text-xl md:text-2xl font-serif">
                      {item.japanese} <span className="opacity-80 italic">({item.name})</span>
                    </h3>
                  </div>
                </div>
                <p className="text-[#F0E0B0]/60 text-sm mt-3 uppercase tracking-[0.2em] font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Luxury Divider */}
        <div className="mt-24 w-full h-px bg-linear-to-r from-transparent via-[#B8975A] to-transparent"></div>
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