import React, { useState } from 'react';

const MenuSection = () => {
  const [category, setCategory] = useState('SHISHA');

const menuData = {
  SHISHA: [
    { name: 'Fish & Chips', japanese: 'Fish & Chips', price: '$12', description: 'Crispy battered fish served with golden fries' },
    { name: 'Full English Breakfast', japanese: 'Full English Breakfast', price: '$15', description: 'Eggs, bacon, sausage, beans, tomato, and toast' },
    { name: 'Shepherd’s Pie', japanese: 'Shepherd’s Pie', price: '$14', description: 'Savory minced lamb topped with creamy mashed potatoes' },
    { name: 'Bangers & Mash', japanese: 'Bangers & Mash', price: '$13', description: 'Grilled sausages served with mashed potatoes and onion gravy' },
  ],
  DRINKS: [
    { name: 'Pimm’s Cup', japanese: 'Pimm’s Cup', price: '$10', description: 'Refreshing gin cocktail with fruit and cucumber' },
    { name: 'English Ale', japanese: 'English Ale', price: '$7', description: 'Traditional crisp and malty beer' },
    { name: 'Earl Grey Tea', japanese: 'Earl Grey Tea', price: '$5', description: 'Classic black tea with bergamot' },
    { name: 'Gin & Tonic', japanese: 'Gin & Tonic', price: '$12', description: 'Premium gin mixed with tonic and lime' },
  ]
};
  return (
    <section id='menu' className="bg-[#1B3A2D] flex flex-col lg:flex-row min-h-screen">
      
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
          <h1 className="text-[#B8975A] text-7xl md:text-9xl  font-bold tracking-tighter">
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
                    <h3 className="text-[#F0E0B0] text-xl md:text-2xl ">
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