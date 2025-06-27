'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="row content align-items-center">
          <div className="col-lg-6 col-md-12 mb-lg-0 mb-5 mt-5">
            <div className="pe-2 mt-5 pt-5">
              <Link href="#!" className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 mt-5 py-1">
                AgentForce
              </Link>
              <h3 className="ds-6 mt-5 pt-5 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>
                Delivering enterprise-scale solutions with futuristic thinking.
              </h3>
              <p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>
                We deliver enterprise-scale solutions with futuristic thinking—helping businesses modernize, streamline, and scale with confidence using cutting-edge cloud and CRM technologies. Our development approach is grounded in SOLID principles, ensuring clean, maintainable, and scalable architecture from day one.
              </p>
              <Link href="/Services.html" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={300}>
                Explore Now
                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact.html" className="ms-md-3 mt-3 mt-md-0 btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={500}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact Us
              </Link>
              <div className="row mt-8 mb-3">
                <h6 className=""></h6>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
                  <div className="d-flex">
                    <Image src="/assets/imgs/hero-1/avatar-1.png" alt="Codm" width={40} height={40} />
                    <Image className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="Codm" width={40} height={40} />
                    <Image className="avt-hero" src="/assets/imgs/hero-1/avatar-3.png" alt="Codm" width={40} height={40} />
                  </div>
                  <span className="fs-6 fw-bold">
                    4.8/5 <span className="text-secondary fw-medium">(2k Reviews)</span>
                  </span>
                </div>
                <div className=""></div>
                <div className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
                  <Image src="/assets/imgs/hero-1/image (16).png" alt="Codm" width={100} height={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative justify-content-center">
            <Image className="hero-img" src="/assets/imgs/hero-1/background.png" alt="Codm" width={600} height={400} />
            <div className="shape-1 position-absolute">
              <Image className="rightToLeft" src="" alt="" data-aos="zoom-in" data-aos-delay={500} width={100} height={100} />
            </div>
            <div className="shape-2 position-absolute">
              <Image src="/assets/imgs/hero-1/img-agent-1.webp" alt="agent" data-aos="zoom-in" data-aos-delay={200} width={200} height={200} />
            </div>
            <div className="shape-3 position-absolute d-none d-md-block">
              <Image src="" data-aos="zoom-in" data-aos-delay={300} width={100} height={100} />
            </div>
            <div className="">
              <Image src="" alt="" width={100} height={100} />
              <h6 className="mt-3"></h6>
              <p className="fs-7 text-700"></p>
              <Link href="#" className="">
                <span className=""></span>
                <span className=""></span>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none"></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 