'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-1 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-6">
            <div className="footer-widget">
              <Link href="/" className="d-inline-block mb-4">
                <Image src="/assets/imgs/template/image (17).png" alt="Codm" width={150} height={50} />
              </Link>
              <p className="mb-4">
                We deliver enterprise-scale solutions with futuristic thinking—helping businesses modernize, streamline, and scale with confidence using cutting-edge cloud and CRM technologies.
              </p>
              <div className="social-links">
                <Link href="#" className="me-3">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="me-3">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="me-3">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#" className="me-3">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-6">
            <div className="footer-widget">
              <h5 className="mb-4">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/SalesforceCRM.html">Salesforce CRM</Link>
                </li>
                <li className="mb-2">
                  <Link href="/BuildingLLM.html">Building LLM Agents</Link>
                </li>
                <li className="mb-2">
                  <Link href="/DotNetApplication.html">.NET Web Application</Link>
                </li>
                <li className="mb-2">
                  <Link href="/React-Application.html">React Web Application</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-6">
            <div className="footer-widget">
              <h5 className="mb-4">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/AboutUs.html">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/Services.html">Services</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact.html">Contact</Link>
                </li>
                <li className="mb-2">
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-6">
            <div className="footer-widget">
              <h5 className="mb-4">Contact Info</h5>
              <div className="contact-info">
                <div className="d-flex mb-3">
                  <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                  <p className="mb-0">123 Business Street, Tech City, TC 12345</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-phone me-3 mt-1"></i>
                  <p className="mb-0">+1 (555) 123-4567</p>
                </div>
                <div className="d-flex mb-3">
                  <i className="fas fa-envelope me-3 mt-1"></i>
                  <p className="mb-0">info@codmsoftware.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 CODM Software. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-links">
              <Link href="#" className="me-3">Privacy Policy</Link>
              <Link href="#" className="me-3">Terms of Service</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-0 z-0">
        <Image src="/assets/imgs/footer-1/line-bg.png" alt="Codm" width={300} height={200} />
      </div>
      <div className="position-absolute top-0 start-0 z-0">
        <Image src="/assets/imgs/footer-1/ellipse-left.png" alt="Codm" width={200} height={200} />
      </div>
      <div className="position-absolute top-0 end-0 z-0">
        <Image src="/assets/imgs/footer-1/ellipse-right.png" alt="Codm" width={200} height={200} />
      </div>
    </footer>
  )
} 