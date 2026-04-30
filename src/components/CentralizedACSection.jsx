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
    imageName: 'Engineering & Design.jpg',
  },
  {
    icon: Layers,
    title: 'Infrastructure',
    desc: 'Expert AC duct installation with high-grade thermal insulation.',
    pulse: false,
    imageName: 'Infrastructure.jpg',
  },
  {
    icon: Server,
    title: 'Advanced Systems',
    desc: 'Seamless setup for VRV/VRF, Chillers, and Ducted Split units.',
    pulse: false,
    imageName: 'Advanced Systems.jpg',
  },
  {
    icon: SlidersHorizontal,
    title: 'Smart Controls',
    desc: 'Precision zoning and integrated control panel installation.',
    pulse: true,
    imageName: 'Smart Controls.jpg',
  },
  {
    icon: Activity,
    title: 'Performance',
    desc: 'Comprehensive commissioning, testing, and system optimization.',
    pulse: false,
    imageName: 'Performance AC.jpg',
  }
]

// Logo components using real image files
const DaikinLogo = () => (
  <img src="/Daikin.jpeg" alt="Daikin" className="h-32 object-contain filter transition-opacity" />
)

const BlueStarLogo = () => (
  <div className="overflow-hidden bg-transparent leading-none">
    <img src="/bluestar.jpeg" alt="Blue Star" className="block h-32 w-auto object-contain border-0 bg-transparent shadow-none outline-none filter transition-opacity" />
  </div>
)

const CarrierLogo = () => (
  <img src="/carrier.jpeg" alt="Carrier" className="h-32 object-contain filter transition-opacity" />
)

const VoltasLogo = () => (
  <img src="/voltas.jpeg" alt="Voltas" className="h-32 object-contain filter transition-opacity" />
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
    <section className="bg-white flex flex-col font-sans">
      {/* Header Section */}
      <motion.div 
        className="relative w-screen min-h-[72vh] text-center flex flex-col items-center justify-center overflow-visible py-16 sm:py-20"
        style={{
          backgroundImage: 'url(/header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <span className="inline-block text-[0.65rem] font-bold tracking-[0.3em] text-[#0d2f5a] uppercase mb-3">
          Industrial Grade Climate Control
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0d2f5a] uppercase leading-[1.15] font-['Inter','Montserrat',sans-serif]">
          Our End-To-End Capabilities
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[#0d2f5a]/85 max-w-2xl mx-auto px-6">
          From initial blueprint to final optimization, we manage every stage of your climate control infrastructure.
        </p>

        {/* 5-Column Bento Grid */}
        <motion.div 
          ref={gridRef}
          className="absolute left-1/2 bottom-0 z-20 w-full max-w-350 -translate-x-1/2 translate-y-1/2 px-6 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bento-card relative flex min-h-70 flex-col overflow-hidden rounded-xl border border-gray-200 bg-linear-to-b from-gray-50 to-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group"
              >
                {/* Magic Mouse Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                     style={{ background: 'radial-gradient(circle 250px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(15, 23, 42, 0.03), transparent 80%)' }}>
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="mb-5 h-32 w-full overflow-hidden rounded-lg">
                    <img
                      src={encodeURI(`/${item.imageName || `${item.title}.jpg`}`)}
                      alt={item.title}
                      className="block h-full w-full object-cover"
                    />
                  </div>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-800 shadow-sm transition-colors duration-300 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white">
                    <item.icon className={`h-5 w-5 stroke-[1.5px] ${item.pulse ? 'icon-pulse' : ''}`} />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="mb-3 font-['Inter','Montserrat',sans-serif] text-[13px] font-bold uppercase tracking-widest text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-350 mx-auto w-full border-y border-gray-200 px-6 pt-48 pb-24 sm:pt-56 sm:pb-32 lg:px-12">

        {/* Brands We Work With */}
        <motion.div 
          className="border-t border-gray-200 pt-8 flex flex-col items-center gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 uppercase">
            Brands We Work With
          </h3>
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
