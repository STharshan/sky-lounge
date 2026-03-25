import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-[#1B3A2D] py-16 px-6 md:px-12 lg:px-24 text-[#F0E0B0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#B8975A] mb-4">
              La Mansa Restaurant.
            </h2>
            <div className="space-y-2">
              <h4 className="text-xl font-medium">
                1234 Culinary Avenue. Downtown Cityscape, CA 90210
              </h4>
              <p className="text-[#F0E0B0]/70">
                Located in the heart of Downtown, near Central Park
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4 max-w-sm">
            <div className="flex justify-between border-b border-[#B8975A]/20 pb-2">
              <span className="font-semibold text-[#B8975A]">Monday - Friday</span>
              <span>11:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-[#B8975A]/20 pb-2">
              <span className="font-semibold text-[#B8975A]">Saturday - Sunday</span>
              <span>10:00 AM - 11:00 PM</span>
            </div>
          </div>

          {/* Interactive Buttons with Fixed Hover Animation */}
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            {/* Email Link */}
            <a 
              href="mailto:example@lamansa.com" 
              className="group relative inline-block text-lg transition-colors duration-300 hover:text-[#B8975A]"
            >
              <span>example@lamansa.com</span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B8975A] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
            
            {/* Phone Link */}
            <a 
              href="tel:5551234567" 
              className="group relative inline-block text-lg transition-colors duration-300 hover:text-[#B8975A]"
            >
              <span>Phone: (555) 123-4567</span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B8975A] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Map */}
        <div className="w-full h-113 rounded-sm overflow-hidden border border-[#B8975A]/20 shadow-2xl">
          <iframe
            title="La Mansa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.243683!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1ad313%3A0xb449fdad8ef1001!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1715800000000!5m2!1sen!2sus"
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