import { FileSearch, ShieldCheck, GitBranch, Settings2 } from 'lucide-react'

const features = [
  {
    icon: FileSearch,
    tag: 'Survey',
    title: 'Professional Planning',
    desc: 'Blueprint-level routing design',
    details: ['Site measurement and wall route marking', 'Indoor-to-outdoor unit distance planning'],
    animationId: 'planning'
  },
  {
    icon: ShieldCheck,
    tag: 'Protection',
    title: 'Zero Wall Damage',
    desc: 'Non-invasive hidden integration',
    details: ['Clean core-cut points with protected edges', 'Concealed pipe paths before finishing work'],
    animationId: 'damage'
  },
  {
    icon: GitBranch,
    tag: 'Efficiency',
    title: 'Optimized Routing',
    desc: 'Maximum cooling efficiency',
    details: ['Short refrigerant line route for faster cooling', 'Drain slope check to prevent leakage'],
    animationId: 'routing'
  },
  {
    icon: Settings2,
    tag: 'Complete',
    title: 'Full Accessory Setup',
    desc: 'Complete drainage & wiring',
    details: ['Copper pipe, insulation, and drain line setup', 'Power wiring and bracket alignment checks'],
    animationId: 'setup'
  }
]

export default function PreInstallationSection() {
  return (
    <section className="bg-white pb-24 pt-10 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold tracking-widest text-gray-500 uppercase border border-gray-300 px-3 py-1 rounded-full">
                Engineering Grade
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                Advanced<br />Infrastructure<br />Pre-Installation
              </h2>
              <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                Seamlessly embed superior connectivity directly into your architecture. 
                Our underlying pipe networks ensure aesthetic perfection and optimized system lifespan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div 
                  key={i} 
                  className="preinstall-feature-card group relative flex flex-col gap-4 overflow-hidden border border-gray-200 bg-white p-6 font-sans shadow-sm"
                  style={{ '--card-delay': `${i * 90}ms` }}
                >
                  <div className="preinstall-feature-card__top">
                    <div className="preinstall-feature-card__icon text-gray-800">
                      <item.icon className="h-8 w-8 stroke-[1.5px]" />
                    </div>
                    <span className="preinstall-feature-card__tag">{item.tag}</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-gray-900 text-[15px] uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>
                  </div>
                  <ul className="preinstall-feature-card__details">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detail} style={{ '--detail-delay': `${detailIndex * 70}ms` }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-[430px] overflow-hidden rounded-sm bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <video
                className="aspect-[9/16] w-full object-cover"
                src="/background.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Copper pipe installation video"
              />
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .preinstall-feature-card {
          min-height: 248px;
          isolation: isolate;
          transform: translateY(18px);
          opacity: 0;
          animation: preinstall-card-enter 680ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--card-delay);
          transition:
            border-color 280ms ease,
            box-shadow 280ms ease,
            transform 280ms ease;
        }
        .preinstall-feature-card::before {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(120deg, transparent 22%, rgba(21, 71, 105, 0.13) 42%, transparent 62%);
          content: "";
          opacity: 0;
          transform: translateX(-120%);
          transition: opacity 260ms ease, transform 640ms ease;
          pointer-events: none;
        }
        .preinstall-feature-card::after {
          position: absolute;
          inset: 0;
          z-index: 0;
          border: 1px solid transparent;
          background:
            linear-gradient(#ffffff, #ffffff) padding-box,
            linear-gradient(135deg, rgba(21, 71, 105, 0.85), rgba(16, 55, 84, 0.1), rgba(21, 71, 105, 0.85)) border-box;
          content: "";
          opacity: 0;
          transition: opacity 280ms ease;
        }
        .preinstall-feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(21, 71, 105, 0.32);
          box-shadow: 0 24px 48px rgba(16, 55, 84, 0.14);
        }
        .preinstall-feature-card:hover::before {
          opacity: 1;
          transform: translateX(120%);
        }
        .preinstall-feature-card:hover::after {
          opacity: 1;
        }
        .preinstall-feature-card__top {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
        }
        .preinstall-feature-card__icon {
          position: relative;
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 8px;
          background: rgba(21, 71, 105, 0.08);
          color: #172033;
          transition:
            background-color 260ms ease,
            color 260ms ease,
            transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .preinstall-feature-card:hover .preinstall-feature-card__icon {
          transform: translateY(-3px) rotate(-6deg) scale(1.08);
          background: #154769;
          color: #ffffff;
        }
        .preinstall-feature-card__tag {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          border: 1px solid rgba(21, 71, 105, 0.16);
          border-radius: 999px;
          background: rgba(21, 71, 105, 0.08);
          padding: 0 10px;
          color: #154769;
          font-size: 0.67rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition:
            background-color 260ms ease,
            color 260ms ease,
            transform 260ms ease;
        }
        .preinstall-feature-card:hover .preinstall-feature-card__tag {
          transform: translateY(-2px);
          background: #103754;
          color: #ffffff;
        }
        .preinstall-feature-card__details {
          position: relative;
          z-index: 10;
          display: grid;
          gap: 8px;
          margin: 2px 0 0;
          padding: 0;
          list-style: none;
        }
        .preinstall-feature-card__details li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #627087;
          font-size: 0.82rem;
          line-height: 1.45;
          opacity: 0.78;
          transform: translateX(0);
          transition:
            color 260ms ease,
            opacity 260ms ease,
            transform 260ms ease;
          transition-delay: var(--detail-delay);
        }
        .preinstall-feature-card__details li::before {
          flex: 0 0 auto;
          width: 6px;
          height: 6px;
          margin-top: 7px;
          border-radius: 999px;
          background: #154769;
          content: "";
          opacity: 0.45;
          transition:
            opacity 260ms ease,
            transform 260ms ease;
        }
        .preinstall-feature-card:hover .preinstall-feature-card__details li {
          color: #172033;
          opacity: 1;
          transform: translateX(6px);
        }
        .preinstall-feature-card:hover .preinstall-feature-card__details li::before {
          opacity: 1;
          transform: scale(1.24);
        }
        @keyframes preinstall-card-enter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .preinstall-feature-card {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .preinstall-feature-card,
          .preinstall-feature-card::before,
          .preinstall-feature-card::after,
          .preinstall-feature-card__icon,
          .preinstall-feature-card__tag,
          .preinstall-feature-card__details li,
          .preinstall-feature-card__details li::before {
            transition: none;
          }
        }
      `}} />
    </section>
  )
}
