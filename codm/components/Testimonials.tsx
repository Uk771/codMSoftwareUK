'use client'

import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    text: 'Working with CodM was a turning point for us. Their expertise in building customised CRM solutions has transformed our customer interactions.',
    avatar: '/assets/imgs/testimonial-1/avatar-1.png',
    name: 'Kendrick Shaw',
    flag: '/assets/imgs/testimonial-1/flag-1.png',
    role: ''
  },
  {
    text: 'CodM has given our company a strategic boost. Customised solutions improved our workflows and supply chain management.',
    avatar: '/assets/imgs/testimonial-1/avatar-2.png',
    name: 'Emily Davis',
    flag: '/assets/imgs/testimonial-1/flag-2.png',
    role: 'Healthcare'
  },
  {
    text: 'Thanks to CodM, our marketing efforts skyrocketed. The personalized CRM solution enhanced our targeting, resulting in higher conversion rates.',
    avatar: '/assets/imgs/testimonial-1/avatar-3.png',
    name: 'Sarah Thompson',
    flag: '/assets/imgs/testimonial-1/flag-3.png',
    role: 'Manufacturing Director'
  },
  {
    text: 'CodM transformed our customer service. Their CRM solution centralized information, enabling prompt and personalized support.',
    avatar: '/assets/imgs/testimonial-1/avatar-4.png',
    name: 'Emily Adams',
    flag: '/assets/imgs/testimonial-1/flag-4.png',
    role: 'Finance Manager'
  }
]

export default function Testimonials() {
  return (
    <section className="section-testimonial-1 pb-120 position-relative">
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-4">
            <div className="pe-8 mt-10">
              <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                <Image src="/assets/imgs/features-1/dots.png" alt="Codm" width={20} height={20} />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
              </div>
              <h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>
                What our clients say
              </h3>
              <span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={300}>
                Our clients consistently praise our dedication, technical expertise, and timely delivery. Their positive feedback reflects our commitment to quality and long-term partnerships
              </span>
              <div className="d-flex flex-wrap align-items-center mt-8">
                <Link href="/!#" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Contact Us
                </Link>
                <Link href="#" className="ms-5 ms-md-5 mt-5 mt-md-0 fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>
                  Help Center
                  <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
                    <path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={100 + (index * 100)}>
                <p className="text-900">{testimonial.text}</p>
                <div className="d-flex align-items-center mt-5">
                  <Image className="avatar-lg" src={testimonial.avatar} alt="Codm" width={60} height={60} />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">{testimonial.name}</h6>
                    <div className="flag ms-3">
                      {testimonial.flag && <Image src={testimonial.flag} alt="Codm" width={20} height={15} />}
                      {testimonial.role && <span className="fs-8">{testimonial.role}</span>}
                    </div>
                  </div>
                </div>
                <Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0"></Link>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            {testimonials.slice(2, 4).map((testimonial, index) => (
              <div key={index} className={`bg-neutral-100 p-5 ${index === 0 ? 'mt-5 mt-lg-0' : 'mt-5'} rounded-3 position-relative card-hover`} data-aos="fade-zoom-in" data-aos-delay={300 + (index * 100)}>
                <p className="text-900">{testimonial.text}</p>
                <div className="d-flex align-items-center mt-5">
                  <Image className="avatar-lg" src={testimonial.avatar} alt="Codm" width={60} height={60} />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">{testimonial.name}</h6>
                    <div className="flag ms-3">
                      {testimonial.flag && <Image src={testimonial.flag} alt="Codm" width={20} height={15} />}
                      {testimonial.role && <span className="fs-8">{testimonial.role}</span>}
                    </div>
                  </div>
                </div>
                <Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0"></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-0 z-0">
        <Image src="/assets/imgs/testimonial-1/bg-line.png" alt="Codm" width={300} height={200} />
      </div>
    </section>
  )
} 