'use client'

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    image: '/assets/imgs/blogs/integrationframework.png',
    category: 'Integration',
    title: 'Building a Scalable Integration Framework in Salesforce',
    description: 'Learn how to design reusable, scalable integration patterns in Salesforce using REST, Apex, and external services.',
    link: '/integrationframework.html'
  },
  {
    image: '/assets/imgs/blogs/triggerframework.png',
    category: 'Architecture',
    title: 'Mastering the Trigger Framework in Salesforce',
    description: 'A deep dive into building a trigger framework to ensure scalability, maintainability, and best practices in Apex development.',
    link: '/triggerframework.html'
  },
  {
    image: '/assets/imgs/blogs/revenuecloud.png',
    category: 'Revenue Ops',
    title: 'From Salesforce CPQ to Revenue Cloud – The Journey',
    description: 'Explore how Salesforce CPQ connects seamlessly with Revenue Cloud to enable full-cycle revenue operations and automation.',
    link: '/revenueCloud.html'
  }
]

export default function Blog() {
  return (
    <section className="section-blog-1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-md-6 me-auto">
            <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
              <Image src="/assets/imgs/features-1/dots.png" alt="Codm" width={20} height={20} />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
            </div>
            <h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>
              Our Latest Articles
            </h3>
            <span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>
              Explore the insights and trends shaping our industry
            </span>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <Link href="#" className="ms-md-5 fw-bold text-primary">
              See all articles
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
                <path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 text-start">
              <div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={100 + (index * 100)}>
                <Image className="rounded-3" src={post.image} alt="Codm" width={400} height={250} />
                <div className="card-body p-0 bg-white">
                  <Link href={post.link} className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">{post.category}</span>
                  </Link>
                  <h6 className="my-3">{post.title}</h6>
                  <p>{post.description}</p>
                </div>
                <Link href={post.link} className="position-absolute bottom-0 start-0 end-0 top-0 z-0"></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 