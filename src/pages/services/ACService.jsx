import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import {
  ArrowRight,
  Droplets,
  Fan,
  Gauge,
  ShieldCheck,
  Star,
  ThermometerSun,
  TimerReset,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const stats = [
  { icon: Star, label: '4.9★', value: 'rating' },
  { icon: TimerReset, label: '10+ years', value: 'experience' },
  { icon: ShieldCheck, label: 'Same day', value: 'support' },
]

const serviceMatters = [
  {
    icon: ThermometerSun,
    title: 'Consistent Cooling',
    description: 'Maintain consistent cooling performance',
  },
  {
    icon: ShieldCheck,
    title: 'Lifespan',
    description: 'Extend the lifespan of your air conditioner',
  },
  {
    icon: Droplets,
    title: 'Water Leakage',
    description: 'Prevent water leakage and foul odors',
  },
  {
    icon: Zap,
    title: 'Energy Savings',
    description: 'Reduce electricity consumption',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Improve indoor air quality',
  },
]

const serviceIncludes = [
  {
    icon: Fan,
    title: 'Complete AC Cleaning',
    description: 'Indoor & outdoor unit cleaning, coil washing, and dust removal.',
  },
  {
    icon: Wind,
    title: 'Filter & Coil Cleaning',
    description: 'High-pressure cleaning to restore cooling efficiency.',
  },
  {
    icon: Droplets,
    title: 'Drain Line & Water Leak Check',
    description: 'Prevents water dripping and clogging issues.',
  },
  {
    icon: Wrench,
    title: 'Electrical & Performance Check',
    description: 'Ensures all components are running safely.',
  },
  {
    icon: Gauge,
    title: 'Gas Pressure & Cooling Test',
    description: 'To ensure optimum refrigerant levels.',
  },
]

function SectionHeading({ title, description }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
      <h2 className="text-[2.75rem] font-black tracking-tight text-slate-950 sm:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

export default function ACServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate bg-[#f8fbff] px-6 pb-14 pt-0 sm:px-8 sm:pt-0 lg:px-12 lg:pb-16 lg:pt-0">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute right-[-6rem] top-28 h-80 w-80 rounded-full bg-cyan-100/80 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-44 w-96 -translate-x-1/2 rounded-full bg-white blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100svh-190px)] max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-2xl space-y-7">
            <motion.h1
              variants={fadeUp}
              className="max-w-2xl text-5xl font-black uppercase leading-[0.92] tracking-wide text-slate-950 sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                WebkitTextStroke: '0.7px currentColor',
                textShadow: '0 0 0 currentColor',
              }}
            >
              Cool Comfort, Simply Delivered
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-xl text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Premium AC maintenance for homes, offices, and commercial spaces.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <a href="tel:+918712322475" className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#1d5eff] px-8 font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:bg-[#164bd1] hover:shadow-2xl active:scale-95">
                Schedule Service
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="https://wa.me/918712322475" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/70 px-8 font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[#1d5eff]/30 hover:bg-white hover:text-[#1d5eff] active:scale-95">
                <FaWhatsapp className="h-5 w-5 text-[#25d366]" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }} className="relative">
            <div className="rounded-[2rem] border border-white bg-white/70 p-3 shadow-xl shadow-slate-200/70 backdrop-blur">
              <img src="/AC service 1.jpg" alt="Professional AC technicians working" className="h-[360px] w-full rounded-[1.5rem] object-cover shadow-sm sm:h-[460px] lg:h-[540px]" />
            </div>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="show" variants={stagger} className="relative mx-auto -mt-2 grid max-w-5xl gap-4 sm:grid-cols-3 lg:-mt-10">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div key={stat.value} variants={fadeUp} className="rounded-2xl border border-white/70 bg-white/60 p-5 shadow-lg shadow-slate-200/60 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-[#1d5eff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-950">{stat.label}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{stat.value}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="relative bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="absolute left-[8%] top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            title="Why Regular AC Service Matters"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
            <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/60 p-7 shadow-xl shadow-blue-100/50 backdrop-blur">
              <div className="absolute inset-0 bg-linear-to-br from-white/90 via-blue-50/60 to-cyan-50/50" />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#1d5eff] shadow-sm">
                      <ThermometerSun className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-[2.25rem] font-black text-slate-950">Consistent Cooling</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                      Maintain consistent cooling performance
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-lg backdrop-blur md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative flex min-h-48 items-center justify-center rounded-2xl bg-slate-50">
                    <motion.div animate={{ opacity: [1, 0.35, 1], y: [0, -4, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-8 top-8 flex flex-col items-center gap-2">
                      <div className="h-28 w-5 rounded-full border border-red-200 bg-white p-1">
                        <motion.div animate={{ height: ['70%', '42%', '62%'] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="mt-auto rounded-full bg-red-400" />
                      </div>
                      <span className="text-xs font-semibold text-red-500">Before</span>
                    </motion.div>

                    <motion.div animate={{ opacity: [0.45, 1, 1], scale: [0.96, 1, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-8 top-8 flex flex-col items-center gap-2">
                      <div className="h-28 w-5 rounded-full border border-blue-200 bg-white p-1">
                        <motion.div animate={{ height: ['54%', '54%', '54%'] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} className="mt-auto rounded-full bg-[#1d5eff]" />
                      </div>
                      <span className="text-xs font-semibold text-[#1d5eff]">After</span>
                    </motion.div>

                    <motion.div animate={{ x: [-18, 18, -18], opacity: [0.3, 0.85, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-10 left-16 right-16 space-y-2">
                      <div className="h-1 rounded-full bg-linear-to-r from-transparent via-cyan-300 to-transparent" />
                      <div className="ml-8 h-1 rounded-full bg-linear-to-r from-transparent via-blue-300 to-transparent" />
                      <div className="mr-10 h-1 rounded-full bg-linear-to-r from-transparent via-cyan-200 to-transparent" />
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1d5eff]">Cooling Stabilized</div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Dust and weak airflow can make cooling fluctuate. A clean service restores a steady blue-zone reading and smoother comfort.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {serviceMatters.slice(1).map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  animate={{ boxShadow: ['0 1px 2px rgba(15, 23, 42, 0.04)', '0 0 0 1px rgba(29, 94, 255, 0.12)', '0 1px 2px rgba(15, 23, 42, 0.04)'] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="group rounded-2xl border border-gray-200 bg-white/85 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1d5eff]">
                    <motion.div animate={{ rotate: [0, 6, 0, -6, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>
                </motion.div>
              )
              })}
            </div>
          </div>

        </div>
      </motion.section>

      <motion.section id="service-includes" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading title="Our AC Service Includes" />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {serviceIncludes.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} variants={scaleIn} className="group relative text-center">
                  <div className="relative mx-auto mb-5 flex h-22 items-center justify-center">
                    {index < serviceIncludes.length - 1 ? (
                      <div className="absolute left-1/2 top-1/2 hidden h-px w-full overflow-hidden bg-blue-100 lg:block">
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: index * 0.25 }}
                          className="h-full w-1/2 bg-linear-to-r from-transparent via-[#1d5eff] to-transparent"
                        />
                      </div>
                    ) : null}
                    <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border-2 border-blue-200 bg-white text-[#1d5eff] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#1d5eff] group-hover:shadow-lg">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="mx-auto max-w-44 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mx-auto mt-3 max-w-52 text-xs leading-5 text-slate-500">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="relative overflow-hidden bg-linear-to-b from-[#f7fbff] to-[#edf4ff] px-6 py-18 sm:px-8 lg:px-12">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-7rem] top-16 h-80 w-80 rounded-full bg-white/80 blur-3xl" />

        <div className="relative mx-auto max-w-7xl space-y-18">
          <div className="rounded-[1.8rem] border border-blue-100/70 bg-white/80 p-6 shadow-xl shadow-blue-100/45 backdrop-blur sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div variants={fadeUp} className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d5eff]">Basement &amp; Cellar Exhaust Services in Hyderabad</p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-[#0d2f5a] sm:text-5xl">
                  Ensure Fresh Air &amp; Safe Ventilation in Your Basement
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  Engineered basement exhaust systems built to remove fumes, control humidity,
                  and keep enclosed spaces safer and healthier.
                </p>
                <a href="tel:+918712322475" className="mt-7 inline-flex h-13 items-center justify-center rounded-full bg-[#1d5eff] px-7 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#164bd1]">
                  Contact Us
                </a>
              </motion.div>

              <motion.div variants={scaleIn} className="rounded-3xl border border-blue-100 bg-white p-3 shadow-2xl shadow-slate-300/40">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/162568/air-conditioner-air-conditioning-outside-air-conditioners-162568.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Basement ventilation duct system"
                    className="h-[340px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[380px]"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-[#0d2f5a]/20"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h3 variants={fadeUp} className="text-4xl font-black text-[#0d2f5a] sm:text-5xl">
              Why Basement Ventilation Matters
            </motion.h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { icon: Zap, title: 'Removes Smoke & Fumes', text: 'Clears trapped contaminated air quickly.' },
                { icon: Wind, title: 'Improves Air Quality', text: 'Supports cleaner breathing conditions.' },
                { icon: Droplets, title: 'Prevents Moisture & Mold', text: 'Controls dampness and microbial growth.' },
                { icon: ShieldCheck, title: 'Enhances Safety', text: 'Reduces risk in enclosed underground zones.' },
                { icon: Fan, title: 'Supports Air Circulation', text: 'Maintains steady, balanced ventilation flow.' },
              ].map((benefit) => {
                const Icon = benefit.icon
                return (
                  <motion.div key={benefit.title} variants={fadeUp} className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-md shadow-blue-100/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1d5eff]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-lg font-black text-slate-900">{benefit.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h3 variants={fadeUp} className="text-4xl font-black text-[#0d2f5a] sm:text-5xl">
              Ideal For
            </motion.h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Residential Buildings', 'Parking Basements', 'Commercial Complexes', 'Industrial Facilities'].map((space) => (
                <motion.div key={space} variants={fadeUp} className="rounded-xl border border-blue-100 bg-white px-5 py-4 text-center text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {space}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h3 variants={fadeUp} className="text-4xl font-black text-[#0d2f5a] sm:text-5xl">
              Our Ventilation Process
            </motion.h3>
            <div className="mt-7 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/30 sm:p-8">
              <div className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
                <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-linear-to-r from-transparent via-[#1d5eff]/45 to-transparent lg:block" />
                {[
                  { icon: Gauge, label: 'Site Inspection' },
                  { icon: Wrench, label: 'System Design' },
                  { icon: Fan, label: 'Installation' },
                  { icon: Wind, label: 'Airflow Testing' },
                  { icon: ShieldCheck, label: 'Maintenance Support' },
                ].map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div key={step.label} variants={fadeUp} className="relative z-10 text-center">
                      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-[#1d5eff] shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1d5eff]">Step {index + 1}</div>
                      <div className="mt-1 text-sm font-bold text-slate-800">{step.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          
        </div>
      </motion.section>

    </main>
  )
}
