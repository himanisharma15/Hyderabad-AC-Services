import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Clock,
  Fan,
  Flame,
  ShieldCheck,
  Sparkles,
  Star,
  Thermometer,
  Wrench,
  Waves,
  Wind,
  MessageCircle,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

const technicianImage = 'https://images.pexels.com/photos/4126064/pexels-photo-4126064.jpeg?auto=compress&cs=tinysrgb&w=600'

export default function ACServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <motion.section initial="hidden" whileInView="show" variants={containerVariants} className="relative bg-linear-to-br from-[#103754] via-[#154769]/30 to-white px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Left Column */}
            <motion.div variants={fadeUp} className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#154769]/40 bg-white/15 px-4 py-2.5 backdrop-blur w-fit">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  <span className="text-sm font-semibold text-white tracking-wide">Premium HVAC Expertise</span>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    AC Service in <span className="text-[#154769]">Hyderabad</span>
                  </h1>
                  <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-light">
                    Hyderabad AC Services provides complete AC servicing for homes, offices, and commercial spaces with clean cooling, better performance, and reliable on-site support.
                  </p>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
                <button className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#154769] px-8 font-semibold text-white shadow-xl shadow-[#154769]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#154769]/60 hover:scale-105 active:scale-95">
                  <span>Book Service</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a href="https://wa.me/918712322475" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border-2 border-white bg-white/10 px-8 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95">
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </motion.div>

              {/* Stats Cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { label: '4.9★', value: 'rating' },
                  { label: '10+', value: 'years expert' },
                  { label: 'Same Day', value: 'support' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl bg-white/15 px-4 py-4 backdrop-blur border border-white/20 text-center transition-all duration-300 hover:bg-white/25 hover:border-white/40">
                    <div className="font-bold text-xl text-white">{stat.label}</div>
                    <div className="text-xs text-white/70 font-light mt-1">{stat.value}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div variants={fadeUp} className="relative h-full">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={technicianImage} 
                  alt="AC Technician" 
                  className="h-112.5 w-full object-cover sm:h-137.5" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#103754]/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -left-6 top-12 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 font-semibold text-[#103754] shadow-xl backdrop-blur hover:shadow-2xl transition-all duration-300"
              >
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="text-sm">Trusted AC Support</span>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute right-0 bottom-16 flex items-center gap-3 rounded-2xl bg-linear-to-r from-[#154769] to-[#103754] px-5 py-3 font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Zap className="h-5 w-5" />
                <span className="text-sm">Fast & Reliable</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Intro Section */}
      <motion.section initial="hidden" whileInView="show" variants={containerVariants} className="bg-linear-to-b from-white to-[#e8f1f7]/40 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div variants={fadeUp} className="rounded-3xl bg-white/70 px-8 py-12 sm:px-12 sm:py-16 backdrop-blur border border-[#b8ccda] shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white/90">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-[#154769]/15 px-4 py-2 mb-8 border border-[#154769]/30">
              <span className="text-xs font-bold tracking-widest text-[#154769] uppercase">Professional AC Services</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-[#103754] mb-8 leading-tight">
              Service that keeps your cooling smooth and dependable
            </motion.h2>
            
            <div className="space-y-5">
              {[
                'Clean and efficient cooling performance for everyday comfort.',
                'Preventive servicing that helps reduce breakdowns and repairs.',
                'Skilled technicians with structured on-site service flow.',
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                  <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#154769]" />
                  <p className="text-slate-700 text-lg leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section initial="hidden" whileInView="show" variants={containerVariants} className="bg-white px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-16 text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#103754] leading-tight">What's Included in Our AC Service</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Complete maintenance covering all essential components</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Waves, title: 'Filter Cleaning', desc: 'Deep cleaning for better airflow and improved cooling output.' },
              { icon: Flame, title: 'Gas Check', desc: 'Pressure and refrigerant inspection to keep cooling stable.' },
              { icon: BatteryCharging, title: 'Electrical Check', desc: 'Safe inspection of wiring, capacitor, and compressor links.' },
              { icon: Waves, title: 'Coil Wash', desc: 'Condenser and evaporator coil washing for smoother performance.' },
              { icon: Clock, title: 'Performance Test', desc: 'Cooling output verification and final system testing.' },
              { icon: ShieldCheck, title: 'Preventive Maintenance', desc: 'Routine service to reduce wear and avoid surprise breakdowns.' },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group rounded-2xl border border-[#b8ccda] bg-linear-to-br from-white to-[#e8f1f7]/40 p-8 transition-all duration-300 hover:scale-105 hover:border-[#154769]/50 hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#154769]/15 group-hover:bg-[#154769]/25 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-[#154769]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#103754] group-hover:text-[#154769] transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section initial="hidden" whileInView="show" variants={containerVariants} className="bg-linear-to-br from-[#103754] to-[#154769] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-16 text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Why Choose Our AC Service</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Industry-leading expertise and customer commitment</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: 'Premium Quality', desc: 'High-standard parts and certified technician expertise.' },
              { icon: Thermometer, title: 'Temperature Control', desc: 'Optimized cooling for consistent comfort year-round.' },
              { icon: Wrench, title: 'Expert Technicians', desc: '10+ years of cooling system repair and installation.' },
              { icon: Clock, title: 'Fast Response', desc: 'Same-day service availability for urgent cooling needs.' },
              { icon: Star, title: '4.9★ Rating', desc: 'Trusted by thousands of satisfied Hyderabad customers.' },
              { icon: ShieldCheck, title: 'Service Guarantee', desc: 'Reliable support with transparent pricing and warranties.' },
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/15 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-emerald-400/20 group-hover:bg-emerald-400/30 transition-all duration-300">
                  <benefit.icon className="h-7 w-7 text-emerald-300" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section initial="hidden" whileInView="show" variants={containerVariants} className="bg-white px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#154769]/15 px-4 py-2 border border-[#154769]/30">
              <span className="text-xs font-bold tracking-widest text-[#154769] uppercase">How It Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#103754] leading-tight">Our AC Service Process</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { num: '01', title: 'Book Your Service', desc: 'Call, WhatsApp, or email our team to schedule your AC visit.' },
              { num: '02', title: 'On-Site Service', desc: 'Our technician inspects, cleans, and tests your AC system.' },
              { num: '03', title: 'Cooling Check', desc: 'Verify cooling output and provide maintenance recommendations.' },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group rounded-2xl border border-[#b8ccda] bg-linear-to-br from-white to-[#e8f1f7]/45 p-8 lg:p-10 transition-all duration-300 hover:scale-105 hover:border-[#154769]/50 hover:shadow-2xl"
              >
                <div className="mb-6 text-6xl sm:text-7xl font-bold text-[#154769]/20 group-hover:text-[#154769]/40 transition-all duration-300">{step.num}</div>
                <h3 className="mb-3 text-2xl font-bold text-[#103754]">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Types of AC Section */}
      <motion.section initial="hidden" whileInView="show" variants={containerVariants} className="bg-gradient-to-b from-white to-[#e8f1f7] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-16 text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0d2f5a] leading-tight">AC Service for All Types</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We service all major AC models and brands</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Fan, title: 'Split AC', desc: 'Service available with detailed inspection' },
              { icon: Wind, title: 'Window AC', desc: 'Service available with detailed inspection' },
              { icon: Thermometer, title: 'Cassette AC', desc: 'Service available with detailed inspection' },
              { icon: Waves, title: 'Central AC', desc: 'Service available with detailed inspection' },
            ].map((type, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group rounded-2xl border border-white bg-white p-8 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#154769]/50"
              >
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#154769]/15 group-hover:bg-[#154769]/25 transition-all duration-300">
                  <type.icon className="h-8 w-8 text-[#154769]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#0d2f5a]">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </main>
  )
}

// Zap icon as fallback
function Zap(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
