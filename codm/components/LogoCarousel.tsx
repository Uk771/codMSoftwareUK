'use client'

import Image from 'next/image'

const logos = [
  '/assets/imgs/CLI logo/191-1914774_dynamic-signal-logo-electric-blue-clipart.png',
  '/assets/imgs/CLI logo/absa-logo-red-bg.png',
  '/assets/imgs/CLI logo/bellhop.png',
  '/assets/imgs/CLI logo/Coventry University.png',
  '/assets/imgs/CLI logo/change-machine-logo-large.png',
  '/assets/imgs/CLI logo/Phase_Trust.png',
  '/assets/imgs/CLI logo/amcor (1).png',
  '/assets/imgs/CLI logo/Yamaha-Logo.png',
]

export default function LogoCarousel() {
  return (
    <div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
      <div className="container">
        <div className="row mask-image">
          <div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
            <ul className="carouselTicker__list">
              {logos.map((logo, index) => (
                <li key={index} className="carouselTicker__item">
                  <Image src={logo} alt="Client Logo" width={120} height={60} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 