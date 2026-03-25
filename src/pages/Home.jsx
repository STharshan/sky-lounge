import React from 'react'
import Hero from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import MenuSection from '../components/MenuSection'
import Gallery from '../components/GallerySection'
import TestimonialSection from '../components/TestimonialSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutSection />
        <MenuSection />
        <Gallery />
        <TestimonialSection />
        <ContactSection />
    </div>
  )
}

export default Home