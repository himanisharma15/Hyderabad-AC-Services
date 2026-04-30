import { useEffect } from 'react'
import './BasementExhaust.css'

const ductSystemImage = 'https://images.pexels.com/photos/162568/air-conditioner-air-conditioning-outside-air-conditioners-162568.jpeg?auto=compress&cs=tinysrgb&w=1200'

const benefits = [
  {
    icon: 'smoke',
    title: 'Removes Smoke & Fumes',
    text: 'Extracts trapped fumes before they spread through the building.',
  },
  {
    icon: 'air',
    title: 'Improves Air Quality',
    text: 'Keeps enclosed basement zones cleaner and easier to breathe in.',
  },
  {
    icon: 'moisture',
    title: 'Prevents Moisture & Mold',
    text: 'Controls damp air that can lead to odor, stains, and mold growth.',
  },
  {
    icon: 'safety',
    title: 'Enhances Safety',
    text: 'Reduces air stagnation and supports safer underground spaces.',
  },
  {
    icon: 'circulation',
    title: 'Supports Proper Air Circulation',
    text: 'Balances airflow for consistent ventilation performance.',
  },
]

const idealSpaces = [
  'Residential Buildings',
  'Parking Basements',
  'Commercial Complexes',
  'Industrial Facilities',
]

const processSteps = [
  { icon: 'inspect', label: 'Site Inspection' },
  { icon: 'design', label: 'System Design' },
  { icon: 'install', label: 'Installation' },
  { icon: 'test', label: 'Airflow Testing' },
  { icon: 'support', label: 'Maintenance Support' },
]

function ServiceIcon({ type }) {
  const icons = {
    smoke: (
      <>
        <path d="M7 17c2-2 1.5-3.7.1-5.2C5.8 10.4 5.6 8.7 7 7" />
        <path d="M12 18c2.4-2.2 2.1-4.2.4-6-1.6-1.7-1.7-3.5.2-5.7" />
        <path d="M17 17c1.4-1.6 1.3-3.1.1-4.4-1-1.1-1-2.5.1-3.8" />
      </>
    ),
    air: (
      <>
        <path d="M3 9h10.5a3.5 3.5 0 1 0-3.1-5.1" />
        <path d="M3 14h14.5a3 3 0 1 1-2.7 4.4" />
        <path d="M4 19h6" />
      </>
    ),
    moisture: (
      <>
        <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" />
        <path d="M9.5 15.2a3.4 3.4 0 0 0 4.8 2.2" />
      </>
    ),
    safety: (
      <>
        <path d="M12 3 19 6v5.2c0 4.4-2.8 7.9-7 9.8-4.2-1.9-7-5.4-7-9.8V6l7-3Z" />
        <path d="m9.4 12.1 1.8 1.8 3.8-4" />
      </>
    ),
    circulation: (
      <>
        <path d="M12 5v5l3.5-3.5" />
        <path d="M19 12a7 7 0 0 1-11.9 5" />
        <path d="M12 19v-5l-3.5 3.5" />
        <path d="M5 12a7 7 0 0 1 11.9-5" />
      </>
    ),
    inspect: (
      <>
        <path d="M10 4h4" />
        <path d="M8 4h-.01" />
        <path d="M6 8h12" />
        <path d="M6 12h8" />
        <path d="M6 16h6" />
        <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      </>
    ),
    design: (
      <>
        <path d="M4 19.5 14.7 8.8" />
        <path d="m13.3 7.4 3.3 3.3" />
        <path d="M16.5 3.7a2.3 2.3 0 0 1 3.3 3.3l-1.3 1.3-3.3-3.3 1.3-1.3Z" />
        <path d="M4 19.5 3.4 22l2.5-.6" />
      </>
    ),
    install: (
      <>
        <path d="M7 7h10v10H7z" />
        <path d="M4 12h3" />
        <path d="M17 12h3" />
        <path d="M12 4v3" />
        <path d="M12 17v3" />
      </>
    ),
    test: (
      <>
        <path d="M4 14h5" />
        <path d="M4 9h12.5a3 3 0 1 0-2.7-4.3" />
        <path d="M4 19h13a3 3 0 1 0-2.7-4.3" />
      </>
    ),
    support: (
      <>
        <path d="M12 3 19 6v5.2c0 4.4-2.8 7.9-7 9.8-4.2-1.9-7-5.4-7-9.8V6l7-3Z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </>
    ),
  }

  return (
    <svg className="basement-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  )
}

export default function BasementExhaustPageDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="basement-exhaust-page">
      <section className="basement-hero" aria-labelledby="basement-hero-title">
        <div className="basement-container basement-hero__grid">
          <div className="basement-hero__copy basement-reveal">
            <p className="basement-eyebrow">Basement &amp; Cellar Exhaust Services in Hyderabad</p>
            <h1 id="basement-hero-title" className="basement-hero__title">
              Ensure Fresh Air &amp; Safe Ventilation in Your Basement
            </h1>
            <p className="basement-hero__text">
              Engineered exhaust systems that remove fumes, control damp air, and keep enclosed
              basement spaces safer for homes, commercial sites, and parking areas.
            </p>
            <a className="basement-button basement-button--primary" href="/contact">
              Contact Us
            </a>
          </div>

          <div className="basement-hero__visual basement-reveal" style={{ '--delay': '120ms' }}>
            <div className="basement-image-card">
              <img src={ductSystemImage} alt="Basement ventilation duct system" />
              <div className="basement-image-card__label">
                <span>Industrial-grade ducting</span>
                <strong>Balanced airflow</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="basement-section" aria-labelledby="basement-benefits-title">
        <div className="basement-container">
          <div className="basement-section__header basement-reveal">
            <p className="basement-kicker">Key Benefits</p>
            <h2 id="basement-benefits-title">Why Basement Ventilation Matters</h2>
          </div>

          <div className="basement-benefit-grid">
            {benefits.map((benefit, index) => (
              <article
                className="basement-benefit-card basement-reveal"
                key={benefit.title}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="basement-benefit-card__icon">
                  <ServiceIcon type={benefit.icon} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="basement-section basement-section--compact" aria-labelledby="basement-ideal-title">
        <div className="basement-container">
          <div className="basement-section__header basement-reveal">
            <p className="basement-kicker">Applications</p>
            <h2 id="basement-ideal-title">Ideal For</h2>
          </div>

          <div className="basement-ideal-grid">
            {idealSpaces.map((space, index) => (
              <div
                className="basement-ideal-card basement-reveal"
                key={space}
                style={{ '--delay': `${index * 65}ms` }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{space}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="basement-section" aria-labelledby="basement-process-title">
        <div className="basement-container">
          <div className="basement-section__header basement-reveal">
            <p className="basement-kicker">Workflow</p>
            <h2 id="basement-process-title">Our Ventilation Process</h2>
          </div>

          <div className="basement-process basement-reveal">
            {processSteps.map((step, index) => (
              <div className="basement-process__item" key={step.label}>
                <div className="basement-process__node">
                  <ServiceIcon type={step.icon} />
                </div>
                <span>Step {index + 1}</span>
                <strong>{step.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
