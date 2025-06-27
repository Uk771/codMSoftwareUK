'use client'

import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LogoCarousel from '../components/LogoCarousel'
import Features from '../components/Features'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    }
    
    initAOS()
    
    // Hide preloader
    const preloader = document.getElementById('preloader')
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 1000)
    }
  }, [])

  return (
    <main>
      {/* Preloader */}
      <div id="preloader">
        <div id="loader" className="loader">
          <div className="loader-container text-center">
            <div className="loader-icon">
              <img src="/assets/imgs/template/image (17).png" alt="Preloader" style={{ height: '60px' }} />
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <Hero />
      <LogoCarousel />
      <Features />
      <Services />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </main>
  )
} 