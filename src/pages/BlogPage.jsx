import { useEffect } from 'react'
import './BlogPage.css'

const blogImage = '/Air%20Conditioner%20Maintenance%20in%20The%20Winter%20(1).jpeg'

const insights = [
  {
    title: 'How to keep your AC efficient through summer',
    description:
      'Simple maintenance routines that reduce breakdowns, improve airflow, and keep electricity bills under control.',
    tag: 'Maintenance',
    meta: '6 min read',
    image: blogImage,
  },
  {
    title: 'Why timely servicing improves indoor air quality',
    description:
      'Understand how clogged filters and neglected coils affect comfort, health, and cooling performance.',
    tag: 'Air Quality',
    meta: '4 min read',
    image: blogImage,
    featured: true,
  },
  {
    title: 'Choosing the right AC capacity for your space',
    description:
      'A quick guide to matching tonnage with room size so your system cools faster without excess load.',
    tag: 'Buying Guide',
    meta: '5 min read',
    image: blogImage,
  },
]

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Blog - Hyderabad AC Services'
  }, [])

  return (
    <div className="blog-page">
      <main className="blog-page__main">
        <section className="blog-hero" aria-labelledby="blog-hero-title">
          <video className="blog-hero__video" autoPlay muted loop playsInline preload="metadata">
            <source src="/services.mp4" type="video/mp4" />
          </video>

          <div className="blog-hero__overlay" />

          <div className="blog-hero__content">
            <div className="blog-hero__card">
              <p className="blog-hero__eyebrow">B2B Insights Hub</p>
              <h1 id="blog-hero-title">Insights &amp; Resources for Smart Cooling Solutions</h1>
              <p className="blog-hero__text">
                Actionable HVAC intelligence for enterprises and homeowners to reduce downtime,
                improve efficiency, and optimize cooling performance.
              </p>

              <div className="blog-hero__actions">
                <a href="/contact" className="blog-hero__button blog-hero__button--primary">
                  Get AC Quote
                </a>
                <a href="#latest-insights" className="blog-hero__button blog-hero__button--secondary">
                  Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-insights" id="latest-insights">
          <div className="blog-insights__header">
            <div className="blog-insights__heading-block">
              <p className="blog-insights__eyebrow">Latest Insights</p>
              <h2>Helpful articles for better cooling decisions</h2>
              <p>
                Browse maintenance tips, expert recommendations, and practical guides for homes,
                offices, and commercial spaces.
              </p>
            </div>
          </div>

          <div className="blog-grid">
            {insights.map((item) => (
              <article key={item.title} className={`blog-card ${item.featured ? 'blog-card--featured' : ''}`}>
                <div className="blog-card__image-wrap">
                  <img className="blog-card__image" src={item.image} alt={item.title} />
                </div>

                <div className="blog-card__body">
                  <span className="blog-card__tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="blog-card__footer">
                  <span className="blog-card__meta">{item.meta}</span>
                  <span className="blog-card__meta">Read more</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default BlogPage
