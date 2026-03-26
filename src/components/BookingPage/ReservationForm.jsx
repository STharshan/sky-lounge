import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    people: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsApp = () => {
    const { name, phone, date, time, people } = formData;
    const message = `*New Reservation Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Guests:* ${people}`;
    const whatsappUrl = `https://wa.me/441555123c4567?text=${message}`; // Replace with restaurant's number
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-[#1B3A2D] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-xl shadow-2xl border-2 p-8 md:p-12 transition-all duration-500"
          style={{ backgroundColor: '#1B3A2D', borderColor: '#B8975A' }}
        >
          {/* Section Heading: Cormorant Garamond 42pt (Size Scale H2) */}
          <h2 className="font-['Cormorant_Garamond'] text-[32px] md:text-[42px] font-semibold mb-10 text-center" style={{ color: '#B8975A' }}>
            Your Reservation Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {/* Form Fields: Labels use Cinzel 10pt Category style */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-bold mb-3" style={{ color: '#F0E0B0' }}>Full Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Enter Your Name" 
                onChange={handleChange}
                className="font-['Lato'] text-[14px] md:text-[16px] px-4 py-4 border-2 rounded-lg bg-[#0A1F12]/50 text-[#F0E0B0] border-[#B8975A]/40 placeholder:opacity-30 focus:outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A] transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-bold mb-3" style={{ color: '#F0E0B0' }}>Phone Number</label>
              <input 
                id="phone" 
                type="tel" 
                placeholder="Enter Your Phone Number" 
                onChange={handleChange}
                className="font-['Lato'] text-[14px] md:text-[16px] px-4 py-4 border-2 rounded-lg bg-[#0A1F12]/50 text-[#F0E0B0] border-[#B8975A]/40 focus:outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A] transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-bold mb-3" style={{ color: '#F0E0B0' }}>Email Address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Enter Your Email" 
                onChange={handleChange}
                className="font-['Lato'] text-[14px] md:text-[16px] px-4 py-4 border-2 rounded-lg bg-[#0A1F12]/50 text-[#F0E0B0] border-[#B8975A]/40 focus:outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A] transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className="font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-bold mb-3" style={{ color: '#F0E0B0' }}>Date</label>
              <input 
                id="date" 
                type="date" 
                onChange={handleChange}
                className="font-['Lato'] text-[14px] md:text-[16px] px-4 py-4 border-2 rounded-lg bg-[#0A1F12]/50 text-[#F0E0B0] border-[#B8975A]/40 focus:outline-none focus:border-[#B8975A] transition-all scheme:dark"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-bold mb-3" style={{ color: '#F0E0B0' }}>Time</label>
              <input 
                id="time" 
                type="time" 
                onChange={handleChange}
                className="font-['Lato'] text-[14px] md:text-[16px] px-4 py-4 border-2 rounded-lg bg-[#0A1F12]/50 text-[#F0E0B0] border-[#B8975A]/40 focus:outline-none focus:border-[#B8975A] transition-all scheme:dark"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="people" className="font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-bold mb-3" style={{ color: '#F0E0B0' }}>Number of People</label>
              <select 
                id="people" 
                onChange={handleChange}
                className="font-['Lato'] text-[14px] md:text-[16px] px-4 py-4 border-2 rounded-lg bg-[#0A1F12]/50 text-[#F0E0B0] border-[#B8975A]/40 focus:outline-none focus:border-[#B8975A] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#0A1F12]">Select guests</option>
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num} className="bg-[#0A1F12]">{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Divider and Button */}
          <div className="mt-10 pt-8 border-t border-[#B8975A]/30">
            {/* CTA Button: Cinzel 13pt Medium, Tracked 0.18em */}
            <button 
              onClick={handleWhatsApp}
              className="font-['Cinzel'] w-full py-5 px-6 rounded-sm font-medium text-[13px] uppercase tracking-[0.18em] transition-all duration-300 transform hover:scale-[1.01] active:scale-95 shadow-xl"
              style={{ backgroundColor: '#B8975A', color: '#0A1F12' }}
            >
              Send via WhatsApp
            </button>
            {/* Footer Text: Lato 11pt Regular */}
            <p className="font-['Lato'] text-center mt-4 text-[11px] uppercase tracking-widest opacity-50" style={{ color: '#F0E0B0' }}>
              Your data is encrypted and sent directly to our hosting team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;