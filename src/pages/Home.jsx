import React from 'react'
import Hero from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import MenuSection from '../components/Home/MenuSection'
import Gallery from '../components/Home/GallerySection'
import TestimonialSection from '../components/Home/TestimonialSection'
import ContactSection from '../components/Home/ContactSection'
import MissionSection from '../components/Home/Mission'

const Home = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <div className="relative z-10 bg-black">
        <AboutSection />
        <MissionSection />
        <MenuSection />
        <Gallery />
        <TestimonialSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default Home