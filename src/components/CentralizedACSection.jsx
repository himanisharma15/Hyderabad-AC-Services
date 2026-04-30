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
    <section className="bg-[#fcfdfd] font-sans w-full pt-12 pb-6 sm:pt-16 sm:pb-10 overflow-hidden border-b border-gray-100">
      {/* Hero Section with Text Left, Image Right */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-40 items-center justify-between">

          {/* Left Side: Content & Capabilities */}
          <motion.div
            className="lg:w-[45%] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">
              Industrial Grade Climate Control
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d2f5a] mb-6 leading-[1.1]">
              Centralized AC <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-xl mb-12">
              From initial blueprint to final optimization, we manage every stage of your climate control infrastructure with precision engineering and advanced technology.
            </p>

            {/* Capabilities Grid - Moved to Left Side Below Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                      <item.icon className={`h-6 w-6 stroke-[1.5px] ${item.pulse ? 'icon-pulse' : ''}`} />
                    </div>
                    <h3 className="font-bold text-[14px] uppercase tracking-wider text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-16">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <a
                href="https://api.whatsapp.com/send/?phone=918712322475&text=Hi%2C%20I'm%20interested%20in%20Centralized%20AC%20Solutions&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-10 py-4 bg-[#0d2f5a] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10 active:scale-95"
              >
                DISCUSS YOUR PROJECT
              </a>
            </div>
          </motion.div>

          {/* Right Side: Image Display */}
          <motion.div
            className="lg:w-[45%] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(13,47,90,0.15)] border border-gray-100">
                <img
                  src="/header.jpg"
                  alt="Centralized AC System"
                  className="w-full h-[650px] object-cover object-center"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Quality Guaranteed</p>
                      <p className="text-sm font-bold text-[#0d2f5a]">Industry-Leading HVAC Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-8 sm:py-10">

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
      <style dangerouslySetInnerHTML={{
        __html: `
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
