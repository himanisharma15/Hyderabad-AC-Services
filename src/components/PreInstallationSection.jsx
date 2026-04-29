import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileSearch, ShieldCheck, GitBranch, Settings2 } from 'lucide-react'

// Isometric Room SVG Component
const IsometricRoomAndPipes = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.5 })

  // Room Wall Path (Isometric Cube outline/walls)
  const leftWall = "M50,150 L150,200 L150,300 L50,250 Z"
  const rightWall = "M150,200 L250,150 L250,250 L150,300 Z"
  const floor = "M50,250 L150,300 L250,250 L150,200 Z"

  // Pipe Paths mapping complex routes across the walls
  const pipe1 = "M 100,225 L 100,180 L 150,205 L 150,250 L 200,225"
  const pipe2 = "M 125,237 L 125,200 L 175,225"
  const pipe3 = "M 75,212 L 75,170 L 150,210"

  const strokeTransition = {
    duration: 2.5,
    ease: "easeInOut",
    delay: 0.5
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
      <motion.svg
        viewBox="0 0 300 350"
        className="w-full h-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Ghost Room Outlines */}
        <g stroke="#e5e7eb" strokeWidth="2" fill="none" className="transition-all duration-1000">
          <motion.path d={leftWall} fill="#f9fafb" fillOpacity="0.5" />
          <motion.path d={rightWall} fill="#f3f4f6" fillOpacity="0.5" />
          <motion.path d={floor} fill="#f3f4f6" fillOpacity="0.8" />
          
          {/* Wall Grid/Blueprint Lines */}
          <path d="M 50,200 L 150,250" stroke="#f3f4f6" strokeWidth="1" />
          <path d="M 50,225 L 150,275" stroke="#f3f4f6" strokeWidth="1" />
          <path d="M 150,250 L 250,200" stroke="#f3f4f6" strokeWidth="1" />
          <path d="M 150,275 L 250,225" stroke="#f3f4f6" strokeWidth="1" />
        </g>

        {/* X-Ray Copper Pipes */}
        <g stroke="#374151" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <motion.path
            d={pipe1}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 }
            }}
            transition={strokeTransition}
          />
          <motion.path
            d={pipe2}
            stroke="#4b5563"
            strokeWidth="3"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 }
            }}
            transition={{ ...strokeTransition, delay: 0.8 }}
          />
          <motion.path
            d={pipe3}
            stroke="#6b7280"
            strokeWidth="2"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 }
            }}
            transition={{ ...strokeTransition, delay: 1.1 }}
          />
          
          {/* Connection Nodes */}
          <motion.circle cx="100" cy="180" r="4" fill="#374151" stroke="none" 
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.3 }}
          />
          <motion.circle cx="200" cy="225" r="4" fill="#374151" stroke="none" 
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 2.5, duration: 0.3 }}
          />
        </g>
      </motion.svg>
    </div>
  )
}

const features = [
  {
    icon: FileSearch,
    title: 'Professional Planning',
    desc: 'Blueprint-level routing design',
    animationId: 'planning'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Wall Damage',
    desc: 'Non-invasive hidden integration',
    animationId: 'damage'
  },
  {
    icon: GitBranch,
    title: 'Optimized Routing',
    desc: 'Maximum cooling efficiency',
    animationId: 'routing'
  },
  {
    icon: Settings2,
    title: 'Full Accessory Setup',
    desc: 'Complete drainage & wiring',
    animationId: 'setup'
  }
]

export default function PreInstallationSection() {
  return (
    <section className="bg-white py-24 border-y border-gray-200">
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
                  className={`group relative p-6 border border-gray-200 hover:border-gray-800 transition-colors duration-300 bg-white shadow-sm flex flex-col gap-4 font-sans ${item.animationId === 'damage' ? 'hover:animate-pulse-subtle' : ''}`}
                >
                  <div className="text-gray-800">
                    <item.icon className={`h-8 w-8 stroke-[1.5px] ${item.animationId === 'damage' ? 'group-hover:animate-shake' : ''}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[15px] uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image / Animation */}
          <div className="relative bg-gray-50 border border-gray-200 p-8 flex items-center justify-center overflow-hidden min-h-[400px]">
            {/* Blueprint grid background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            <IsometricRoomAndPipes />
            
            <div className="absolute bottom-6 left-6 text-xs font-mono text-gray-400">
              FIG. 1: IN-WALL INFRASTRUCTURE
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) rotate(-3deg); }
          75% { transform: translateX(3px) rotate(3deg); }
        }
        @keyframes pulse-subtle {
          0%, 100% { background-color: #fff; border-color: #e5e7eb; }
          50% { background-color: #f9fafb; border-color: #9ca3af; }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
      `}} />
    </section>
  )
}
