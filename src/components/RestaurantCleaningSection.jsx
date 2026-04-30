import { useEffect } from 'react'
import './RestaurantCleaningSection.css'

const ductSystemImage = '/DUCTING CONSTRUCTORS.jpg'

const importanceCards = [
  {
    icon: 'grease',
    title: 'Removes Grease & Smoke',
    text: 'Clears sticky buildup from high-use kitchen exhaust paths.',
  },
  {
    icon: 'fire',
    title: 'Prevents Fire Hazards',
    text: 'Reduces combustible deposits in hoods, ducts, and fans.',
  },
  {
    icon: 'air',
    title: 'Improves Air Quality',
    text: 'Helps remove heat, odor, fumes, and stale kitchen air.',
  },
  {
    icon: 'efficiency',
    title: 'Boosts System Efficiency',
    text: 'Restores smooth airflow and lowers stress on equipment.',
  },
]

const cleaningItems = [
  {
    icon: 'hood',
    title: 'Kitchen Hood',
    text: 'Surface degreasing and hygiene cleaning.',
  },
  {
    icon: 'duct',
    title: 'Exhaust Ducts',
    text: 'Internal duct grease and soot removal.',
  },
  {
    icon: 'filter',
    title: 'Filters',
    text: 'Deep wash for better capture and airflow.',
  },
  {
    icon: 'fan',
    title: 'Exhaust Fans',
    text: 'Fan blades, casing, and outlet cleaning.',
  },
]

const cleaningSteps = [
  { icon: 'inspect', label: 'Inspection' },
  { icon: 'remove', label: 'Grease Removal' },
  { icon: 'deep', label: 'Deep Cleaning' },
  { icon: 'test', label: 'Final Testing' },
]

function CleanIcon({ type }) {
  const icons = {
    grease: (
      <>
        <path d="M5 5h14" />
        <path d="M7 5v11a5 5 0 0 0 10 0V5" />
        <path d="M9 10h6" />
        <path d="M9 14h6" />
        <path d="M10 20c-2 1.2-4.7.8-6-1" />
      </>
    ),
    fire: (
      <>
        <path d="M12 22a7 7 0 0 0 7-7c0-3.8-2.2-6.1-4.1-8.1-.7 2.8-2.3 4.1-4.2 5.5.2-2.9-1.1-5.4-3.1-7.4C6.4 8.4 5 10.8 5 15a7 7 0 0 0 7 7Z" />
        <path d="M12 18a3 3 0 0 0 3-3c0-1.2-.5-2.1-1.3-2.9-.4 1.2-1.1 1.8-2 2.4.1-1.1-.4-2.1-1.2-3A4.8 4.8 0 0 0 9 15a3 3 0 0 0 3 3Z" />
      </>
    ),
    air: (
      <>
        <path d="M3 8h12.5a3 3 0 1 0-2.7-4.3" />
        <path d="M3 13h17" />
        <path d="M3 18h10.5a3 3 0 1 1-2.7 4.3" />
      </>
    ),
    efficiency: (
      <>
        <path d="M4 14a8 8 0 1 1 16 0" />
        <path d="M12 14 16 9" />
        <path d="M7 20h10" />
        <path d="M9 17h6" />
      </>
    ),
    hood: (
      <>
        <path d="M9 4h6l1 5H8l1-5Z" />
        <path d="M5 9h14l-3 8H8L5 9Z" />
        <path d="M7 17h10" />
        <path d="M10 13h4" />
      </>
    ),
    duct: (
      <>
        <path d="M4 8h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11" />
        <path d="M5 6v4" />
        <path d="M9 6v4" />
        <path d="M15 18v4" />
        <path d="M19 18v4" />
      </>
    ),
    filter: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 4v16" />
        <path d="M12 4v16" />
        <path d="M16 4v16" />
        <path d="M4 9h16" />
        <path d="M4 15h16" />
      </>
    ),
    fan: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10c.4-3 2-5 4-5a3 3 0 0 1 2.5 4.7C17.4 11.4 14.8 12 12 12" />
        <path d="M10.3 13c-2.8 1.2-5.4.9-6.4-.8A3 3 0 0 1 7 7.7c2 .2 3.4 2.5 5 4.3" />
        <path d="M13.5 13.2c2.4 1.8 3.4 4.2 2.4 5.9a3 3 0 0 1-5.4-.2C9.7 17.1 10.6 14.6 12 12" />
      </>
    ),
    inspect: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
        <path d="M8 10.5h5" />
      </>
    ),
    remove: (
      <>
        <path d="M5 7h14" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M7 7l1 14h8l1-14" />
        <path d="M9 7V4h6v3" />
      </>
    ),
    deep: (
      <>
        <path d="M12 3s5 5.4 5 9.2a5 5 0 0 1-10 0C7 8.4 12 3 12 3Z" />
        <path d="M8 20h8" />
        <path d="M10 16.5a3.2 3.2 0 0 0 4.2-2" />
      </>
    ),
    test: (
      <>
        <path d="M4 12h4l2-5 4 10 2-5h4" />
        <path d="M5 20h14" />
        <path d="M6 4h12" />
      </>
    ),
  }

  return (
    <svg className="restaurant-clean-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  )
}

export default function RestaurantCleaningSection() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="restaurant-clean-page">
      <section className="restaurant-clean-hero" aria-labelledby="restaurant-clean-title">
        <div className="restaurant-clean-container restaurant-clean-hero__grid">
          <div className="restaurant-clean-hero__content restaurant-clean-reveal">
            <p className="restaurant-clean-eyebrow">Commercial Kitchen Hygiene</p>
            <h1 id="restaurant-clean-title">Restaurant Exhaust Cleaning Services in Hyderabad</h1>
            <h2>Keep Your Kitchen Safe, Hygienic &amp; Fire-Free</h2>
            <p>
              Premium hood, duct, filter, and exhaust fan cleaning for busy commercial kitchens
              that need clean airflow, safer operation, and a sharper hygiene standard.
            </p>
            <a className="restaurant-clean-button restaurant-clean-button--primary" href="/contact">
              Book Cleaning
            </a>
          </div>

          <div className="restaurant-clean-hero__media restaurant-clean-reveal" style={{ '--delay': '120ms' }}>
            <div className="restaurant-clean-image-card">
              <img src={ductSystemImage} alt="Industrial kitchen exhaust duct system" />
              <div className="restaurant-clean-image-card__badge">
                <span>Deep degreasing</span>
                <strong>Commercial exhaust care</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="restaurant-clean-section" aria-labelledby="restaurant-clean-importance-title">
        <div className="restaurant-clean-container">
          <div className="restaurant-clean-heading restaurant-clean-reveal">
            <span>Why It Matters</span>
            <h2 id="restaurant-clean-importance-title">Why Exhaust Cleaning is Important</h2>
          </div>

          <div className="restaurant-clean-card-grid restaurant-clean-card-grid--four">
            {importanceCards.map((card, index) => (
              <article
                className="restaurant-clean-card restaurant-clean-reveal"
                key={card.title}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="restaurant-clean-card__icon">
                  <CleanIcon type={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="restaurant-clean-section restaurant-clean-section--soft" aria-labelledby="restaurant-clean-grid-title">
        <div className="restaurant-clean-container">
          <div className="restaurant-clean-heading restaurant-clean-reveal">
            <span>Service Areas</span>
            <h2 id="restaurant-clean-grid-title">What We Clean</h2>
          </div>

          <div className="restaurant-clean-card-grid restaurant-clean-card-grid--visual">
            {cleaningItems.map((item, index) => (
              <article
                className="restaurant-clean-visual-card restaurant-clean-reveal"
                key={item.title}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="restaurant-clean-visual-card__icon">
                  <CleanIcon type={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="restaurant-clean-section" aria-labelledby="restaurant-clean-process-title">
        <div className="restaurant-clean-container">
          <div className="restaurant-clean-heading restaurant-clean-reveal">
            <span>Process</span>
            <h2 id="restaurant-clean-process-title">Our Cleaning Process</h2>
          </div>

          <div className="scrap-services-shell max-w-[900px] mx-auto mt-12">
            <div className="scrap-services-path" aria-hidden="true" style={{ height: '448px' }}>
              <svg
                viewBox="0 0 300 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id="arcGradRest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                
                <path
                  d="M 298 20 A 240 240 0 0 0 298 428"
                  fill="none"
                  stroke="url(#arcGradRest)"
                  strokeWidth="38"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                
                {[60, 172, 284, 396].map((cy, i) => (
                  <g key={i}>
                    <circle cx="210" cy={cy} r="12" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="210" cy={cy} r="5"  fill="#f59e0b" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="scrap-services-timeline flex flex-col gap-8 py-2">
              {cleaningSteps.map((step, idx) => (
                <div className="scrap-offer-card restaurant-infographic-card" key={idx}>
                  <div className="scrap-offer-meta flex items-center flex-1">
                    <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="scrap-offer-copy ml-4">
                      <h3 className="text-white text-sm font-bold uppercase">{step.label}</h3>
                      <p className="text-white/80 text-[11px] leading-4">Professional kitchen hygiene step {idx + 1}.</p>
                    </div>
                  </div>
                  <div className="offer-icon w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                    <CleanIcon type={step.icon} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="restaurant-clean-cta" aria-labelledby="restaurant-clean-cta-title">
        <div className="restaurant-clean-container restaurant-clean-cta__inner restaurant-clean-reveal">
          <h2 id="restaurant-clean-cta-title">Keep Your Kitchen Safe &amp; Compliant</h2>
          <a className="restaurant-clean-button restaurant-clean-button--light" href="/contact">
            Schedule Cleaning
          </a>
        </div>
      </section>
    </main>
  )
}
