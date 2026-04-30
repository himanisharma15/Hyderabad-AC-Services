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

        {/* 5-Column Bento Grid */}
        <motion.div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilities.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bento-card relative flex flex-col p-6 rounded-xl border border-gray-200 bg-linear-to-b from-gray-50 to-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group min-h-[280px]"
            >
              {/* Magic Mouse Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                   style={{ background: 'radial-gradient(circle 250px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(15, 23, 42, 0.03), transparent 80%)' }}>
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-white border border-gray-200 text-gray-800 shadow-sm transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900">
                  <item.icon className={`h-5 w-5 stroke-[1.5px] ${item.pulse ? 'icon-pulse' : ''}`} />
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-gray-900 mb-3 font-['Inter','Montserrat',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div 
          className="flex justify-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
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
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(0,0,0,0.05); }
          50% { box-shadow: 0 0 25px rgba(0,0,0,0.2); }
        }
        @keyframes icon-glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(100, 100, 100, 0)); opacity: 0.8; }
          50% { filter: drop-shadow(0 0 6px rgba(100, 100, 100, 0.5)); opacity: 1; stroke: #3b82f6; }
        }
        .animate-glow {
          animation: subtle-glow 3s infinite;
        }
        .icon-pulse {
          animation: icon-glow-pulse 2s ease-in-out infinite;
        }
      `}} />
    </section>
  )
}
