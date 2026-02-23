'use client'

import { useState, FormEvent } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaSpinner, FaTerminal, FaCode } from 'react-icons/fa'
import Hero from '@/components/Hero'
import Reveal from '@/components/Reveal'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Required'
    if (!formData.email.trim()) {
      newErrors.email = 'Required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormStatus('submitting')

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success')
      // Reset after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' })
        setFormStatus('idle')
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="min-h-screen bg-[#050B1B]">
      {/* 100vh Hero for Contact */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        title="*Engineering* the Future of *Gaming*"
        subtitle="Connect with our solutions architects to build your bespoke iGaming infrastructure."
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-white/20 bg-primary-white/10 px-4 py-2 text-sm font-medium text-primary-white/90 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Core Systems Operational
          </div>
        }
        align="center"
        className="min-h-[60vh] lg:min-h-[70vh] !py-0"
      />

      {/* Contact Infrastructure */}
      <section className="relative z-10 -mt-32 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Contact Chips - Strategic Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: FaEnvelope, title: "Direct Intel", value: "HQ@ANERGIA.IO", link: "mailto:contact@anergia.com" },
              { icon: FaPhone, title: "Comms Link", value: "+1 (888) 555-0123", link: "tel:+18885550123" },
              { icon: FaMapMarkerAlt, title: "Node Location", value: "SAN FRANCISCO, CA", link: "#" }
            ].map((chip, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <a href={chip.link} className="flex items-center gap-5 p-8 bg-[#0A1122]/80 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-primary-orange/30 transition-all duration-500 group relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-orange group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,138,0,0.3)] transition-all duration-500 relative z-10">
                    <chip.icon size={24} />
                  </div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">{chip.title}</div>
                    <div className="text-lg font-bold text-white group-hover:text-primary-orange transition-colors">{chip.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Social Proof & Status - Integrated Terminal Look */}
            <div className="lg:col-span-2 space-y-10">
              <Reveal>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                    Ready to <br /> <span className="text-gradient">Integrate?</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Skip the sales buffer. Speak directly with lead architects who understand high-load gaming systems.
                  </p>
                </div>
              </Reveal>

              {/* Live Status Module */}
              <Reveal delay={0.2}>
                <div className="bg-black/40 rounded-3xl border border-white/10 p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <FaTerminal size={120} className="text-primary-orange" />
                  </div>
                  <h3 className="text-xs font-black mb-8 flex items-center gap-3 text-white uppercase tracking-[0.4em]">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    Secure Uplink Status
                  </h3>
                  <div className="space-y-5 font-mono text-xs">
                    {[
                      { l: 'CORE_GATEWAY', s: 'STABLE', c: 'text-green-400' },
                      { l: 'DB_REPLICATION', s: 'SYNCED', c: 'text-green-400' },
                      { l: 'API_AUTHENTICATION', s: 'ENCRYPTED', c: 'text-blue-400' },
                      { l: 'SUPPORT_LATENCY', s: '< 2 HOURS', c: 'text-primary-orange' }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                        <span className="text-slate-500">{row.l}</span>
                        <span className={clsx("font-bold", row.c)}>{row.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Dev Support Chip */}
              <Reveal delay={0.3}>
                <div className="rounded-3xl border border-white/5 bg-[#0A1122]/40 p-10 relative group">
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-14 w-14 rounded-full border-4 border-[#0A1122] bg-primary-blue/20 flex items-center justify-center text-[10px] font-black text-primary-white overflow-hidden relative group-hover:scale-105 transition-transform">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-dark opacity-40"></div>
                          <span>DEV_{i}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-black text-sm uppercase tracking-widest mb-1">Architecture Desk</div>
                      <div className="text-slate-500 text-xs">Lead developers currently on standby</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Application Form - Futuristic Terminal Panel */}
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <div className="bg-[#0A1122] rounded-[3rem] shadow-2xl border border-white/5 p-8 md:p-16 relative overflow-hidden group">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 blur-3xl rounded-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-blue/5 blur-3xl rounded-full" />

                  {/* Form Success Overlay */}
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 bg-[#0A1122]/95 flex flex-col items-center justify-center text-center p-8 backdrop-blur-3xl"
                      >
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="h-24 w-24 bg-primary-orange rounded-full flex items-center justify-center text-white mb-8 shadow-[0_0_40px_rgba(255,138,0,0.5)]"
                        >
                          <FaCheckCircle size={48} />
                        </motion.div>
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">UPLINK ESTABLISHED</h3>
                        <p className="text-slate-400 text-lg">Verification complete. Architect response scheduled.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center gap-3 mb-12 border-b border-white/5 pb-8">
                    <FaCode className="text-primary-orange" size={24} />
                    <h2 className="text-2xl font-black text-white tracking-widest uppercase">Integration Request</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-primary-orange uppercase tracking-[.4em] ml-1">Identity</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={clsx(
                            "w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:bg-white/10 focus:border-primary-orange transition-all outline-none",
                            errors.name && "border-primary-orange"
                          )}
                          placeholder="FULL NAME"
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-primary-orange uppercase tracking-[.4em] ml-1">Source Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={clsx(
                            "w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:bg-white/10 focus:border-primary-orange transition-all outline-none",
                            errors.email && "border-primary-orange"
                          )}
                          placeholder="HQ@CORP.COM"
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-primary-orange uppercase tracking-[.4em] ml-1">Entity Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:bg-white/10 focus:border-primary-orange transition-all outline-none"
                        placeholder="ORGANIZATION / PROJECT"
                        disabled={formStatus === 'submitting'}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-primary-orange uppercase tracking-[.4em] ml-1">Mission Specs</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={clsx(
                          "w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:bg-white/10 focus:border-primary-orange transition-all outline-none resize-none",
                          errors.message && "border-primary-orange"
                        )}
                        placeholder="DEFINE YOUR ARCHITECTURE REQUIREMENTS..."
                        disabled={formStatus === 'submitting'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={clsx(
                        "w-full py-6 rounded-2xl font-black text-xl text-white transition-all duration-500 flex items-center justify-center shadow-2xl relative overflow-hidden group/btn",
                        formStatus === 'submitting' ? "bg-white/10 cursor-wait" : "bg-gradient-to-r from-primary-blue to-primary-orange hover:shadow-[0_0_40px_rgba(0,82,255,0.3)]"
                      )}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {formStatus === 'submitting' ? (
                          <>
                            <FaSpinner className="animate-spin" />
                            BUFFERING...
                          </>
                        ) : (
                          <>
                            INITIATE CONNECTION
                            <FaArrowRight className="group-hover/btn:translate-x-3 transition-transform" />
                          </>
                        )}
                      </span>
                      {/* Animated Shimmer on Button */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translateX-full group-hover:animate-shimmer" />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
