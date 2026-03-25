import React from 'react';

const ContactSection = () => {
  return (
    <section id='contact' className="bg-[#1B3A2D] py-16 px-6 md:px-12 lg:px-24 text-[#F0E0B0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl  font-bold text-[#B8975A] mb-4">
              Sky Lounge Leicester
            </h2>
            <div className="space-y-2">
              <h4 className="text-xl font-medium">
                63 Bedford St S, Leicester LE1 3JR, United Kingdom
              </h4>
              <p className="text-[#F0E0B0]/70">
                Located in the heart of Leicester, near the city centre
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4 max-w-sm">
            <div className="flex justify-between border-b border-[#B8975A]/20 pb-2">
              <span className="font-semibold text-[#B8975A]">Monday – Thursday</span>
              <span>4:00 PM – 1:00 AM</span>
            </div>
            <div className="flex justify-between border-b border-[#B8975A]/20 pb-2">
              <span className="font-semibold text-[#B8975A]">Friday</span>
              <span>4:00 PM – 2:00 AM</span>
            </div>
            <div className="flex justify-between border-b border-[#B8975A]/20 pb-2">
              <span className="font-semibold text-[#B8975A]">Saturday</span>
              <span>2:00 PM – 2:00 AM</span>
            </div>
            <div className="flex justify-between border-b border-[#B8975A]/20 pb-2">
              <span className="font-semibold text-[#B8975A]">Sunday</span>
              <span>2:00 PM – 1:00 AM</span>
            </div>
          </div>

          {/* Interactive Buttons with Fixed Hover Animation */}
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            {/* Email Link */}
            <a 
              href="mailto:info@skyloungeleicester.co.uk" 
              className="group relative inline-block text-lg transition-colors duration-300 hover:text-[#B8975A]"
            >
              <span>info@skyloungeleicester.co.uk</span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B8975A] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
            
            {/* Phone Link */}
            <a 
              href="tel:+441163328639" 
              className="group relative inline-block text-lg transition-colors duration-300 hover:text-[#B8975A]"
            >
              <span>Phone: +44 116 332 8639</span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B8975A] origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Map */}
        <div className="w-full h-113 rounded-sm overflow-hidden border border-[#B8975A]/20 shadow-2xl">
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