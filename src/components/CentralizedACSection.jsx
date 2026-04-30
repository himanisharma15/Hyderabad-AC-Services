import { motion } from 'framer-motion'
import { Compass, Layers, Server, SlidersHorizontal, Activity, ArrowRight } from 'lucide-react'
import { useRef, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const capabilities = [
  {
    icon: Compass,
    title: 'Engineering & Design',
    desc: 'Bespoke system design and precision layout planning.',
    pulse: false,
  },
  {
    icon: Layers,
    title: 'Infrastructure',
    desc: 'Expert AC duct installation with high-grade thermal insulation.',
    pulse: false,
  },
  {
    icon: Server,
    title: 'Advanced Systems',
    desc: 'Seamless setup for VRV/VRF, Chillers, and Ducted Split units.',
    pulse: false,
  },
  {
    icon: SlidersHorizontal,
    title: 'Smart Controls',
    desc: 'Precision zoning and integrated control panel installation.',
    pulse: true,
  },
  {
    icon: Activity,
    title: 'Performance',
    desc: 'Comprehensive commissioning, testing, and system optimization.',
    pulse: false,
  }
]

// Simple SVG approximations of the logos
const DaikinLogo = () => (
  <svg viewBox="0 0 160 30" className="h-6 filter transition-opacity">
    <g fill="#4b5563">
      <polygon points="10,0 25,0 9,30 0,30" />
      <polygon points="35,0 42,0 25,30 18,30" />
      <text x="45" y="24" fontSize="25" fontWeight="900" fontFamily="sans-serif" fontStyle="italic" letterSpacing="0.5">DAIKIN</text>
    </g>
  </svg>
)

const BlueStarLogo = () => (
  <svg viewBox="0 0 200 30" className="h-6 filter transition-opacity">
    <g fill="#4b5563">
      <path d="M15,0 L19,10 L30,10 L21,17 L24,28 L15,22 L6,28 L9,17 L0,10 L11,10 Z" />
      <text x="38" y="24" fontSize="24" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">BLUE STAR</text>
    </g>
  </svg>
)

const CarrierLogo = () => (
  <svg viewBox="0 0 140 30" className="h-6 filter transition-opacity">
    <text x="0" y="24" fontSize="30" fontWeight="600" fontFamily="serif" fontStyle="italic" letterSpacing="-0.5" fill="#4b5563">Carrier</text>
  </svg>
)

const VoltasLogo = () => (
  <svg viewBox="0 0 140 30" className="h-6 filter transition-opacity">
    <text x="0" y="26" fontSize="28" fontWeight="800" fontFamily="sans-serif" fontStyle="italic" letterSpacing="-0.5" fill="#4b5563">VOLTAS</text>
  </svg>
)

export default function CentralizedACSection() {
  const gridRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridRef.current) return
      const cards = gridRef.current.getElementsByClassName('bento-card')
      for (const card of cards) {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="bg-white min-h-screen py-24 sm:py-32 flex flex-col justify-center border-y border-gray-200 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Header Section */}
        <motion.div 
          className="max-w-3xl mb-16 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <span className="inline-block text-[0.65rem] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">
            Industrial Grade Climate Control
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 uppercase leading-[1.2] font-['Inter','Montserrat',sans-serif]">
            Our End-To-End Capabilities
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-gray-500 max-w-2xl mx-auto">
            From initial blueprint to final optimization, we manage every stage of your climate control infrastructure.
          </p>
        </motion.div>

        {/* 2. CAPABILITIES (INFOGRAPHIC TIMELINE) */}
        <div className="scrap-services-shell max-w-[1100px] mx-auto">
          <div className="scrap-services-path" aria-hidden="true">
            <svg
              viewBox="0 0 300 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="arcGradCentral" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1d5eff" />
                </linearGradient>
                <filter id="nodeGlowCentral" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Smooth vertical arc */}
              <path
                d="M 298 20 A 280 280 0 0 0 298 580"
                fill="none"
                stroke="url(#arcGradCentral)"
                strokeWidth="42"
                strokeLinecap="round"
                opacity="0.35"
              />

              {/* S-curve connecting 5 nodes */}
              <path
                d="M 230 60 C 190 90, 150 140, 155 180 C 160 220, 200 260, 195 300 C 190 340, 140 380, 145 420 C 150 460, 190 510, 185 540"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2"
                strokeDasharray="4 10"
                opacity="0.4"
              />

              {/* 5 nodes aligned to cards */}
              {[
                [230, 60],
                [155, 180],
                [195, 300],
                [145, 420],
                [185, 540],
              ].map(([cx, cy], i) => (
                <g key={i} filter="url(#nodeGlowCentral)">
                  <circle cx={cx} cy={cy} r="13" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r="6"  fill="#0ea5e9" />
                </g>
              ))}
            </svg>
          </div>

          <div className="scrap-services-timeline flex flex-col gap-8 py-4">
            {capabilities.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="scrap-offer-card scrap-timeline-step central-infographic-card"
              >
                <div className="scrap-offer-meta flex items-center flex-1">
                  <span className="scrap-step-badge">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="scrap-offer-copy ml-4">
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="offer-icon w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <item.icon className="h-5 w-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          className="flex justify-center mt-20 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="group relative inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-black hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] animate-glow rounded-sm">
            <span>Begin Consultation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Brands We Work With */}
        <motion.div 
          className="border-t border-gray-200 pt-16 flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-[0.15em] text-[#7d93a8] uppercase">
            BRANDS WE WORK WITH
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 group">
            <BlueStarLogo />
            <DaikinLogo />
            <CarrierLogo />
            <VoltasLogo />
          </div>
        </motion.div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .scrap-services-shell {
          display: grid;
          grid-template-columns: 280px 1fr;
          align-items: center;
          position: relative;
        }
        .scrap-services-path {
          position: relative;
          height: 560px;
        }
        .scrap-services-path svg {
          position: absolute;
          top: 0; left: -16px;
          width: calc(100% + 16px);
          height: 560px;
        }
        .central-infographic-card {
          position: relative;
          display: flex;
          align-items: center;
          height: 80px;
          border-radius: 60px;
          padding: 0 1.4rem 0 5.2rem;
          background: linear-gradient(100deg, #0d2f5a 0%, #1e293b 60%, #0f172a 100%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .central-infographic-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 16px 36px rgba(0,0,0,0.25);
        }
        .scrap-step-badge {
          position: absolute;
          left: -1.8rem;
          top: 50%;
          transform: translateY(-50%);
          width: 72px; height: 72px;
          border-radius: 50%;
          display: grid; place-items: center;
          background: #ffffff;
          color: #0f172a;
          font-size: 1.1rem; font-weight: 900;
          border: 4px solid #0d2f5a;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          z-index: 2;
        }
        @media (max-width: 1024px) {
          .scrap-services-shell { grid-template-columns: 1fr; }
          .scrap-services-path { display: none; }
          .scrap-services-timeline { padding-left: 3.5rem; }
        }
        @media (max-width: 768px) {
          .central-infographic-card { height: auto; min-height: 72px; padding: 0.8rem 1rem 0.8rem 3.8rem; border-radius: 40px; }
          .scrap-step-badge { width: 52px; height: 52px; left: -1.3rem; font-size: 0.85rem; }
        }
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(0,0,0,0.05); }
          50% { box-shadow: 0 0 25px rgba(0,0,0,0.2); }
        }
        .animate-glow {
          animation: subtle-glow 3s infinite;
        }
      `}} />
    </section>
  )
}
