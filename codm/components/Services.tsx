'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: '/assets/imgs/service-1/icon-1.svg',
    title: 'Salesforce CRM',
    description: 'Salesforce CRM (Customer Relationship Management) is a cloud-based platform that helps businesses manage their sales, marketing, customer service, and support operations. It centralizes customer data, automates workflows, and provides tools for tracking leads, opportunities, and customer interactions, enhancing overall customer experience and business efficiency',
    link: '/SalesforceCRM.html'
  },
  {
    icon: '/assets/imgs/service-1/icon-2.svg',
    title: 'Building LLM Agents',
    description: 'Creating a Large Language Model involves training a neural network on vast amounts of text data to understand and generate human-like language. It starts with collecting high-quality datasets, followed by tokenizing the text into understandable units. The model then learns patterns, grammar, context, and meaning through deep learning techniques using powerful hardware like GPUs or TPUs. Once trained, the LLM can perform tasks like answering questions, writing code, summarizing content, and much more — transforming how we interact with technology',
    link: '/BuildingLLM.html'
  },
  {
    icon: '/assets/imgs/service-1/icon-3.svg',
    title: '.NET Web Application',
    description: 'A .NET web application is a software program developed using Microsoft\'s .NET framework. It supports multiple languages like C# and VB.NET and is used to build a wide range of applications—from web and desktop apps to mobile and cloud-based solutions. The framework provides a large library, runtime environment, and tools for secure, scalable, and high-performance development',
    link: '/DotNetApplication.html'
  },
  {
    icon: '/assets/imgs/service-1/icon-4.svg',
    title: 'Data Integration / Migration',
    description: 'Data Integration involves combining data from different sources into a unified view for better analysis and decision-making.Data Migration is the process of moving data from one system, format, or storage to another—commonly done during system upgrades, cloud adoption, or database changes—ensuring data accuracy, consistency, and minimal downtime.',
    link: '/D.I-D.M.html'
  },
  {
    icon: '/assets/imgs/service-1/icon-5.svg',
    title: 'React Web Application',
    description: 'React Web Application refers to embedding or combining React, a popular JavaScript library for building user interfaces, into existing applications or with other technologies (like APIs, backends, or third-party libraries). It allows for creating dynamic, reusable components and enhancing the interactivity of web applications with efficient UI updates and data flow',
    link: '/React-Application.html'
  },
  {
    icon: '/assets/imgs/service-1/icon-6.svg',
    title: 'Technical Support',
    description: 'Technical support involves assisting users in resolving hardware, software, or system-related issues. It includes troubleshooting problems, providing guidance on using technology, performing system maintenance, and ensuring smooth IT operations. Support can be delivered via phone, chat, email, or remote access, and is essential for maintaining productivity and minimizing downtime.',
    link: '/Technical-Support.html'
  }
]

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
            <Image src="/assets/imgs/features-1/dots.png" alt="Codm" width={20} height={20} />
            <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
          </div>
          <h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>
            Explore Our Services
          </h3>
          <p data-aos="fade-zoom-in" data-aos-delay={100}>
            We specialize in automation, AI development, software engineering, and tailored tech stacks.
          </p>
        </div>
        <div className="row mt-6 position-relative">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4">
              <div className={`p-2 ${index === 0 || index === 4 ? 'mt-lg-8' : 'mt-5'} rounded-4 shadow-1 bg-white position-relative z-1 hover-up`} data-aos="fade-zoom-in" data-aos-delay={100 + (index * 100)}>
                <div className="card-service bg-white p-6 border rounded-4">
                  <Image src={service.icon} alt="Codm" width={60} height={60} />
                  <h6 className="my-3">{service.title}</h6>
                  <p className="mb-6">{service.description}</p>
                  <Link href={service.link} className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
                    <svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_226_5470)">
                        <path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
                      </g>
                      <defs>
                        <clipPath id="clip0_226_5470">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
                      <path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="position-absolute top-50 start-50 translate-middle z-0">
          <Image src="/assets/imgs/service-1/img-bg.png" alt="Codm" width={400} height={400} />
        </div>
      </div>
    </section>
  )
} 