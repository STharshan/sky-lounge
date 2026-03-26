import React from 'react';

const ReservationHero = () => {
  return (
      <section className="bg-[#0A1F12] pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Hero H1: Cormorant Garamond, 72pt, Bold 700, Gold #B8975A */}
          <h1 className="font-['Cormorant_Garamond'] text-[56px] md:text-[72px] font-bold mb-6 leading-[1.1] text-[#B8975A]">
            Restaurant Reservation
          </h1>
          
          {/* Divider: Gold #B8975A at 20% opacity as per common brand borders */}
          <div className="w-24 h-px bg-[#B8975A]/40 mx-auto mb-10"></div>

          <p className="font-['Lato'] text-[16px] md:text-[18px] text-[#F0E0B0] max-w-2xl mx-auto leading-[1.7] font-normal">
            Select your table and reserve a memorable dining experience
          </p>
        </div>
      </section>
  );
};

export default ReservationHero;