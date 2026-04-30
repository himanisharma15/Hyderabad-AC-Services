import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const heroTrustBadges = [
  { label: 'Trusted', value: 'Premium care' },
  { label: 'Fast', value: 'Quick support' },
  { label: 'Reliable', value: 'Expert team' },
]

const defaultStatItems = [
  { icon: Star, label: '4.9★', value: 'rating' },
  { icon: Clock3, label: '10+ years', value: 'experience' },
  { icon: ShieldCheck, label: 'Same day', value: 'support' },
]

function splitParagraphs(text = '') {
  return text
    .split('\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function SectionHeading({ eyebrow, title, description, centered = false, light = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow ? (
        <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${light ? 'border-white/15 bg-white/10 text-white/85' : 'border-blue-200 bg-white text-[#1d5eff]'}`}>
          <Sparkles className="h-4 w-4" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-[#0d2f5a]'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? 'text-white/80' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

function IconCard({ icon: Icon, title, description, light = false }) {
  return (
    <div className={`group rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${light ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${light ? 'bg-white/10 text-white' : 'bg-[#1d5eff]/10 text-[#1d5eff]'}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`text-lg font-semibold ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-6 ${light ? 'text-white/75' : 'text-slate-600'}`}>{description}</p>
    </div>
  )
}

function StepCard({ step, title, description }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#0d2f5a] to-[#1d5eff] text-sm font-semibold text-white shadow-lg shadow-[#1d5eff]/20">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-[#1d5eff]/30 hover:bg-[#1d5eff]/5 hover:text-[#0d2f5a]">
      {children}
    </span>
  )
}

export default function ServiceDetailPage({ service }) {
  const paragraphs = splitParagraphs(service.detailedDescription)
  const features = service.features ?? []
  const steps = paragraphs.slice(0, 3)
  const serviceGroups = features.length ? features : [service.title]
  const secondaryImage = service.images?.[1]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.id])

  return (
    <main className="relative overflow-hidden bg-[#f5f9ff] text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#1d5eff]/10 blur-3xl" />
        <div className="absolute right-0 top-120 h-80 w-80 rounded-full bg-[#0d2f5a]/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <motion.section
        className="relative flex min-h-[calc(100svh-78px)] overflow-hidden bg-linear-to-br from-[#0b1c33] via-[#0d2f5a] to-[#12386b] bg-cover bg-no-repeat px-6 sm:px-8 lg:min-h-[calc(100svh-92px)] lg:px-12"
        style={{
          backgroundImage: `url("${encodeURI(service.image)}")`,
          backgroundPosition: service.heroBackgroundPosition ?? 'center top',
        }}
        initial="hidden"
        animate="show"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-[#07111f]/50 via-transparent to-[#07111f]/65" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-10">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-5 text-center lg:text-left">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-[0.7875rem] font-semibold text-white shadow-lg backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              Premium HVAC Expertise
            </span>

            <h1 className="max-w-3xl text-[2.7rem] font-bold tracking-tight text-white sm:text-[3.375rem] lg:text-[4.05rem]" style={{ color: '#ffffff' }}>
              {service.title}
            </h1>

            <p className="max-w-2xl text-[1.0125rem] leading-8 text-gray-200 sm:text-[1.125rem]" style={{ color: '#e5e7eb' }}>
              {service.description}
            </p>

            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row sm:flex-wrap lg:justify-start">
              <button className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/40 bg-white/90 px-8 text-[0.9rem] font-semibold text-[#0d2f5a] shadow-lg shadow-black/10 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl active:scale-95">
                <span>Book Service</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="https://wa.me/918712322475"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-emerald-200 bg-white/90 px-8 text-[0.9rem] font-semibold text-emerald-700 shadow-lg shadow-black/10 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid max-w-3xl gap-4 pt-2 sm:grid-cols-3">
              {defaultStatItems.map((stat) => {
                const Icon = stat.icon

                return (
                  <div key={stat.label} className="rounded-xl border border-white/20 bg-white/20 p-4 shadow-lg backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[1.0125rem] font-semibold text-white">{stat.label}</div>
                        <div className="text-[0.675rem] font-medium uppercase tracking-[0.2em] text-white/75">{stat.value}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5 flex justify-center lg:justify-start">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
              {heroTrustBadges.map((badge) => (
                <div key={badge.label} className="rounded-2xl border border-white/20 bg-white/20 px-5 py-4 text-left shadow-lg backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="text-[0.7875rem] font-semibold text-white">{badge.label}</div>
                  <div className="text-[0.675rem] text-white/75">{badge.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp} className="space-y-6">
            <SectionHeading
              eyebrow="Service Intro"
              title="Service Overview"
              description={service.description}
            />

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1d5eff]" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-4xl border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-3xl bg-slate-100">
                <img src={secondaryImage ?? service.image} alt={service.title} className="h-90 w-full object-cover sm:h-105" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative bg-white px-6 py-14 sm:px-8 lg:px-12 lg:py-18"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeUp} className="mb-12">
            <SectionHeading
              eyebrow="Included Services"
              title="Our Service Process"
              description="A clear step-by-step checklist of what our technician covers during this service."
              centered
            />
          </motion.div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-slate-300 xl:block" />
            {features.map((feature, index) => (
              <motion.div key={feature} variants={fadeUp} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-white">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1d5eff] text-white shadow-lg shadow-[#1d5eff]/25">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1d5eff]">
                  Step 0{index + 1}
                </div>
                <h3 className="mx-auto mt-2 max-w-44 text-sm font-semibold leading-6 text-slate-950">
                  {feature}
                </h3>
                <p className="mx-auto mt-2 max-w-44 text-xs leading-5 text-slate-500">
                  Checked carefully for clean cooling and reliable performance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-10">
            <SectionHeading
              eyebrow="How It Works"
              title="How It Works"
              description="A simple service flow presented with the exact service copy from this page."
              centered
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.length ? (
              steps.map((paragraph, index) => (
                <StepCard
                  key={paragraph}
                  step={`0${index + 1}`}
                  title={`Step ${index + 1}`}
                  description={paragraph}
                />
              ))
            ) : (
              <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
                {service.description}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-10">
            <SectionHeading
              eyebrow="Service Types"
              title="Service Types / Categories"
              description="A clean, premium pill grid that keeps the service content intact while making it easier to scan."
              centered
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            {serviceGroups.map((group) => (
              <Pill key={group}>{group}</Pill>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
