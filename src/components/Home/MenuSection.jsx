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
    SIDES: [
      { name: 'Chicken Salad', price: '£8.00', description: 'Lettuce, tomato, cucumber, chicken, olive oil, pomegranate sauce & vinegar' },
      { name: 'Chips', price: '£3.00', description: '' },
      { name: 'Chips + Cheese', price: '£4.00', description: '' },
      { name: 'Masala Chips', price: '£5.00', description: '' },
      { name: 'Chicken Wrap', price: '£9.00', description: '' },
      { name: 'Loaded Fries', price: '£8.00', description: '' },
    ],
    COFFEE_TEAS: [
      { name: 'Latte', price: '£3.50', description: '' },
      { name: 'Mocha', price: '£3.50', description: '' },
      { name: 'Espresso', price: '£3.00', description: '' },
      { name: 'Iced Latte', price: '£3.00', description: '' },
      { name: 'Macchiato', price: '£3.00', description: '' },
      { name: 'Flat White', price: '£3.00', description: '' },
      { name: 'Cappuccino', price: '£3.00', description: 'Syrup +£0.50p' },
      { name: 'English Breakfast / Hot Chocolate / Green Tea / Black Tea / Mint Tea / Karak Chai / Chai Latte', price: '£2.50', description: '' },
    ],
    MILKSHAKES: [
      { name: 'Oreo / Kinder / Ferrero Rocher / Strawberry / Chocolate / Snickers / Banana / Vanilla', price: '£6.50', description: '' },
    ],
    DESSERTS: [
      { name: 'Cakes', price: '£6.50', description: '' },
      { name: 'Waffle', price: '£7.50', description: '' },
      { name: 'Cookie Dough', price: '£7.50', description: '' },
    ],
    MOCKTAILS_SOFT_DRINKS: [
      { name: 'Classic Mojito', price: '£6.50', description: 'Classic, Strawberry, Cherry, Kiwi, Passionfruit, Mango & Black Currant' },
      { name: 'Watermelon / Ginger Fizz', price: '£6.50', description: '' },
      { name: 'Strawberry / Rhubarb Fizz', price: '£6.50', description: '' },
      { name: 'Pomegranate & Ginger Fizz', price: '£6.50', description: '' },
      { name: 'Mango / Coconut Fizz', price: '£6.50', description: '' },
      { name: 'Watermelon Fizz', price: '£6.50', description: '' },
      { name: 'Orange / Mango Refresher', price: '£6.50', description: '' },
      { name: 'Rhubarb / Grapefruit Soda', price: '£6.50', description: '' },
      { name: 'Pina Colada', price: '£6.50', description: '' },
      { name: 'Redbull', price: '£3.00', description: '' },
      { 
        name: 'Britvic Orange Juice / Schwp Lemonade / Schwp Ginger Ale / J20 Apple Raspberry / J20 Orange Passion / J20 Apple Mango / Coca Cola Classic / Coca Cola Diet / Fanta Orange / Rio Tropical / Redbull Sugar Free / Cranberry Juice', 
        price: '£2.50', 
        description: '' 
      },
    ],
    SHISHA: [
    { 
      name: 'PREMIUM', 
      price: '£16.00', 
      description: 'REHEAD (£12.00) - Flavours: Frozen Apple, Paan, Irn Bru, Lychee, Blue Mist, Frozen Lemon, Skittles, Frozen Blueberry, Frozen Lime, Frozen Raspberry, Citru Mist, Mango Ice, Love 66, Strawberry Mojito, Pink Lemonade, Cola, Green Gummy Bear, Cubano Mojito, Passion' 
    },
    { 
      name: 'SAVACCO', 
      price: '£20.00', 
      description: 'REHEAD (£15.00) - Flavours: Black Mamba, Passionnova, G6, Picasso, Magna Carta' 
    },
    { 
      name: 'AL FAKHER', 
      price: '£13.00', 
      description: 'REHEAD (£9.00) - Flavours: Apple, Grape, Mint, Kiwi, Lemon, Strawberry, Coconut, Watermelon, Pomegranate, Spearmint Gum, Vanilla, Peach, Berry, Orange' 
    },
  ],
  BURGERS: [
    { 
      name: 'Chicken Burger', 
      price: '£9.50', 
      description: 'Chicken breast, lettuce, tomato, burger sauce & cheddar cheese.' 
    },
    { 
      name: 'Lamb Burger', 
      price: '£9.50', 
      description: '5oz patty, lettuce, burger sauce, caramelised onions & cheddar cheese.' 
    },
    { 
      name: 'Beef Burger', 
      price: '£9.50', 
      description: 'Beefy, juicy, and made to satisfy' 
    },
  ],
  PIZZA: [
    { 
      name: 'Chicken', 
      price: '£11.99', 
      description: 'Tomato base, chicken pieces, ground basil, mozzarella & cheddar cheese' 
    },
    { 
      name: 'Pepperoni', 
      price: '£11.99', 
      description: 'Tomato base, pepperoni pieces, ground basil, mozzarella & cheddar cheese' 
    },
    { 
      name: 'Spicy Vegetarian', 
      price: '£11.99', 
      description: 'Tomato base, onions, peppers, jalapenos, red chilli, sweetcorn, mozzarella & cheddar cheese' 
    },
    { 
      name: 'Margherita', 
      price: '£11.99', 
      description: 'Cheese, fresh basil, olive oil, tomato base, mozzarella & cheddar cheese' 
    },
  ],
  };

  return (
    <section id='menu' className="bg-[#0A1F12] flex flex-col lg:flex-row min-h-screen">

      {/* LEFT SIDE: Fixed Image Column (Layout Kept Exactly Same) */}
      <div className="w-full lg:w-1/3 h-[18rem] sm:h-[24rem] lg:h-screen lg:sticky lg:top-0 flex flex-col border-b lg:border-b-0 lg:border-r border-[#B8975A]/20">
        <div className="h-1/3 w-full min-h-0">
          <img src="/t11.webp" alt="Menu 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/3 w-full min-h-0 border-y border-[#B8975A]/20">
          <img src="/t12.webp" alt="Menu 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/3 w-full min-h-0">
          <img src="/t7.webp" alt="Menu 3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* RIGHT SIDE: Scrollable Menu Content */}
      <div className="w-full lg:w-2/3 px-4 py-8 sm:px-6 md:p-16 lg:p-24 bg-[#0A1F12] overflow-hidden">

        <header className="mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-[#B8975A] text-5xl sm:text-6xl md:text-9xl font-serif font-bold tracking-tight uppercase">
            Menu
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">

          {/* Category Navigation - Cinzel Style */}
          <nav className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-col md:gap-8 md:overflow-visible md:px-0 md:pb-0 md:min-w-[10rem] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {['GRILL', 'SIDES', 'COFFEE_TEAS', 'MILKSHAKES', 'DESSERTS', 'MOCKTAILS_SOFT_DRINKS', 'SHISHA', 'BURGERS', 'PIZZA'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-serif text-xs sm:text-[13px] tracking-[0.18em] transition-all text-left uppercase md:w-full md:rounded-none md:border-0 md:px-0 md:py-0 ${
                  category === cat
                  ? 'text-[#B8975A] border-[#B8975A] bg-[#B8975A]/10 md:border-b-2 md:w-fit'
                  : 'text-[#F0E0B0]/60 border-[#B8975A]/20 hover:text-[#F0E0B0] hover:border-[#B8975A]/50'
                }`}
              >
                {cat.replaceAll('_', ' ')}
              </button>
            ))}
          </nav>

          {/* Dynamic Menu List */}
          <div className="grow space-y-8 sm:space-y-10 md:space-y-12 min-w-0">
            {(menuData[category] || []).map((item, index) => (
              <div key={index} className="group animate-fadeIn">
                
                {/* Item Name Container */}
                <div className="pb-2">
                  <div className="text-left sm:text-right">
                    <h3 className="text-[#F0E0B0] text-lg sm:text-xl md:text-[14pt] font-sans font-bold uppercase tracking-wide break-words">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Price and Description Row */}
                <div className='flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between'>
                  {/* PRICE - Cormorant Italic Signature */}
                  <span className="shrink-0 text-[#B8975A] text-xl sm:text-2xl md:text-[22pt] font-serif italic">
                    {item.price}
                  </span>
                  
                  {/* Description - Lato Light Sage */}
                  <p className="text-[#6EA880] font-sans font-light text-sm md:text-[13pt] text-left sm:text-right pb-5 leading-relaxed w-full sm:max-w-xs md:max-w-sm break-words">
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
