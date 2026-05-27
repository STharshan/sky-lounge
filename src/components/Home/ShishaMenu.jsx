import React from "react";

const shishaItems = [
  {
    name: "SAVACCO",
    price: "£20.00",
    description:
      "REHEAD (£15.00) - Flavours: Black Mamba, Passionnova, G6, Picasso, Magna Carta",
  },
  {
    name: "PREMIUM",
    price: "£16.00",
    description:
      "REHEAD (£12.00) - Flavours: Frozen Apple, Paan, Irn Bru, Lychee, Blue Mist, Frozen Lemon, Skittles, Frozen Blueberry, Frozen Lime, Frozen Raspberry, Citru Mist, Mango Ice, Love 66, Strawberry Mojito, Pink Lemonade, Cola, Green Gummy Bear, Cubano Mojito, Passion",
  },
  {
    name: "AL FAKHER",
    price: "£13.00",
    description:
      "REHEAD (£9.00) - Flavours: Apple, Grape, Mint, Kiwi, Lemon, Strawberry, Coconut, Watermelon, Pomegranate, Spearmint Gum, Vanilla, Peach, Berry, Orange",
  },
];

const galleryImages = [
  { src: "/s1.png", alt: "Premium shisha presentation" },
  { src: "/s2.png", alt: "Shisha lounge atmosphere" },
  { src: "/s3.png", alt: "Shisha menu highlight" },
];

const showcaseCells = [
  { type: "image", image: galleryImages[0] },
  { type: "item", item: shishaItems[1] },
  { type: "image", image: galleryImages[1] },
  { type: "item", item: shishaItems[0] },
  { type: "image", image: galleryImages[2] },
  { type: "item", item: shishaItems[2] },
];

function ImageCell({ image }) {
  return (
    <div className="relative h-80 overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

function ItemCell({ item }) {
  return (
    <article
      className="
        group flex h-80 flex-col justify-between
        px-6 py-8 text-center
        bg-white text-[#2A2117]
        transition-all duration-500
        hover:bg-[#D8A24A] hover:text-[#22160B] active:bg-[#D8A24A] active:text-[#22160B]
      "
    >
      {/* Title */}
      <h3 className="font-serif text-[24px] uppercase tracking-[0.12em]">
        {item.name}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 line-clamp-4">
        {item.description}
      </p>

      {/* Price */}
      <p className="font-serif text-[34px] italic text-[#B8975A] transition-colors duration-500 group-hover:text-[#22160B]">
        {item.price}
      </p>
    </article>
  );
}

const ShishaMenu = () => {
  return (
    <section className="bg-[#0A1F12] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden">
        
        {/* Header */}
        <div className="border-b border-[#B8975A]/20 px-6 py-8 text-center">
          <h2 className="font-serif text-4xl font-bold uppercase leading-[0.8] tracking-tighter text-[#F0E0B0] sm:text-5xl">
            Shisha Menu
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseCells.map((cell, index) => (
            <div
              key={index}
            >
              {cell.type === "image" ? (
                <ImageCell image={cell.image} />
              ) : (
                <ItemCell item={cell.item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShishaMenu;
