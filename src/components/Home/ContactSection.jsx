import React from 'react';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-[#1B3A2D] py-16 px-6 md:px-12 lg:px-24 text-[#F0E0B0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Contact Info */}
        <div className="space-y-10">
          <div>
            {/* Heading: Cormorant Garamond Bold 700 - 82pt scale */}
            <h2 className="font-serif font-bold text-4xl md:text-7xl text-[#B8975A] mb-7 leading-[1.1]">
              Sky Lounge Leicester
            </h2>
            <div className="space-y-2">
              {/* Address: Lato Regular 400 - 1.7 line-height rule */}
              <a href="https://maps.app.goo.gl/eqpu4roRZYGDCD3KA" target='_blank' className="font-sans font-normal text-3xl md:text-4xl transition-colors duration-300 hover:text-[#B8975A] leading-[1.7]">
                63 Bedford St S, Leicester LE1 3JR, United Kingdom
              </a>
              {/* Subtext: Lato Light 300 */}
              <p className="font-sans font-light text-[#F0E0B0]/70 mt-3 text-xl leading-[1.7]">
                Located in the heart of Leicester, near the city centre
              </p>
            </div>
          </div>

          {/* Operating Hours: Labels in Cinzel (Serif 500) / Times in Lato */}
          <div className="space-y-4 max-w-md text-2xl">
            <div className="flex justify-between pb-2">
              <span className="font-serif font-medium uppercase tracking-[0.14em] text-[18px] text-[#B8975A]">Monday – Thursday</span>
              <span className="font-sans font-light">4:00 PM – 1:00 AM</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="font-serif font-medium uppercase tracking-[0.14em] text-[18px] text-[#B8975A]">Friday</span>
              <span className="font-sans font-light">4:00 PM – 2:00 AM</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="font-serif font-medium uppercase tracking-[0.14em] text-[18px] text-[#B8975A]">Saturday</span>
              <span className="font-sans font-light">2:00 PM – 2:00 AM</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="font-serif font-medium uppercase tracking-[0.14em] text-[18px] text-[#B8975A]">Sunday</span>
              <span className="font-sans font-light">2:00 PM – 1:00 AM</span>
            </div>
          </div>

          {/* Interactive Buttons: Cinzel Style tracking */}
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            <a
              href="mailto:info@skyloungeleicester.co.uk"
              className="group relative inline-block font-serif font-medium uppercase tracking-[0.18em] text-[10px] transition-colors duration-300 hover:text-[#B8975A]"
            >
              <span>info@skyloungeleicester.co.uk</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B8975A] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>

            <a
              href="tel:+441163328639"
              className="group relative font-sans inline-block font-medium uppercase tracking-[0.18em] text-[14px] transition-colors duration-300 hover:text-[#B8975A]"
            >
              <span>Phone: +44 116 332 8639</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B8975A] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Map - Layout Fixed */}
        <div className="w-full h-103 md:h-183 rounded-lg overflow-hidden border border-[#B8975A]/20 shadow-2xl">
          <iframe
            title="Sky Lounge Leicester"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.1074679731473!2d-1.1290314!3d52.63997139999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761fbe26c59b9%3A0x549416e0b789a231!2sSky%20Lounge%20Leicester!5e0!3m2!1sen!2slk!4v1774460087993!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;