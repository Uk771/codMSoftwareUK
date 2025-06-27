'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
  return (
    <section>
      <div className="container-fluid position-relative bg-primary-light section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
              <Image src="/assets/imgs/features-2/icon-1.svg" alt="Codm" className="hover-up" width={60} height={60} />
              <h2 className="text-white mt-3 mb-4 fw-medium hover-up">
                How Can We Help Your Business?.
              </h2>
              <ul className="list-unstyled phase-items">
                <li>
                  <Link href="#" className="phase-item d-flex align-items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
                      <path d="M11.5 0C5.15 0 0 5.15 0 11.5C0 17.85 5.15 23 11.5 23C17.85 23 23 17.85 23 11.5C23 5.15 17.85 0 11.5 0Z" fill="white" />
                      <path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
                    </svg>
                    <p className="text-white mb-0 ms-3">Success Accelerators</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="phase-item d-flex align-items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
                      <path d="M11.5 0C5.15 0 0 5.15 0 11.5C0 17.85 5.15 23 11.5 23C17.85 23 23 17.85 23 11.5C23 5.15 17.85 0 11.5 0Z" fill="white" />
                      <path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
                    </svg>
                    <p className="text-white mb-0 ms-3">Started politician Club</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="phase-item d-flex align-items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
                      <path d="M11.5 0C5.15 0 0 5.15 0 11.5C0 17.85 5.15 23 11.5 23C17.85 23 23 17.85 23 11.5C23 5.15 17.85 0 11.5 0Z" fill="white" />
                      <path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
                    </svg>
                    <p className="text-white mb-0 ms-3">Transformational Strategy</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
              <div className="position-relative d-inline-block z-2 hover-up">
                <Image className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/ChatGPT Image Apr 25, 2025, 04_09_58 PM.png" alt="AgentForce" width={300} height={200} />
                <div className="">
                  <Link href="/#" className="">
                    <span className=""></span>
                    <span className=""></span>
                  </Link>
                  <h6 className="mt-3"></h6>
                  <p className="fs-7 text-700"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-8">
              <div className="px-lg-8">
                <Image src="/assets/imgs/features-2/icon-2.svg" alt="Codm" className="hover-up" width={60} height={60} />
                <div data-aos="fade-zoom-in" data-aos-delay={100}>
                  <h5 className="text-white mt-3 mb-3">Transform</h5>
                  <p className="text-white border-bottom pb-3">We transform businesses through expert Salesforce development.</p>
                </div>
                <div data-aos="fade-zoom-in" data-aos-delay={4200}>
                  <h5 className="text-white mt-8 mb-3">Increase</h5>
                  <p className="text-white">Our solutions increase efficiency across your organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bg-rotate z-0">
          <Image className="rotate-center" src="/assets/imgs/features-2/bg-img-favicon.png" alt="Codm" width={200} height={200} />
        </div>
        <div className="position-absolute top-0 end-0 z-1 p-8">
          <div className="bloom"></div>
        </div>
      </div>
    </section>
  )
} 