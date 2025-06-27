'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100 z-999" style={{ position: 'relative', top: 'auto' }}>
        <div className="container">
          <Link className="navbar-brand d-flex main-logo align-items-center" href="/">
            <Image
              src="/assets/imgs/template/image (17).png"
              alt="Codm"
              width={150}
              height={50}
              priority
            />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/AboutUs.html">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Services.html">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
} 