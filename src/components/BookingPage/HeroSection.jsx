import React, { useState } from 'react';

const ReservationHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <section className="bg-[#0A1F12] pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title with specified Color Gradient */}
          <h1 className="text-5xl md:text-7xl  font-bold mb-6 leading-tight bg-linear-to-r from-[#B8975A] via-[#F0E0B0] to-[#B8975A] bg-clip-text text-transparent">
            Restaurant Reservation
          </h1>
          
          {/* Divider */}
          <div className="w-24 h-px bg-[#B8975A] mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-[#F0E0B0] max-w-2xl mx-auto leading-relaxed">
            Select your table and reserve a memorable dining experience
          </p>
        </div>
      </section>
  );
};

export default ReservationHero;