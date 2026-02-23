'use client'

import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import { services } from '@/lib/data'
import { FaArrowRight, FaGlobe, FaGamepad, FaTrophy, FaServer } from 'react-icons/fa'

export default function ServicesPage() {
  const igamingServices = services.filter((s) => s.category === 'igaming')
  const cryptoServices = services.filter((s) => s.category === 'crypto')

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Hero
        backgroundImage="/service.jpg"
        title="Comprehensive *iGaming* & *Crypto* Solutions"
        subtitle="From turnkey white-label platforms to custom blockchain integration, we deliver the technology that powers the world's leading gaming brands."
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-white/20 bg-primary-white/10 px-4 py-2 text-sm font-medium text-primary-white/90 backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange"></span>
            </span>
            End-to-End Development Services
          </div>
        }
        buttons={
          <>
            <a href="#igaming" className="btn-primary">
              Explore Services
              <FaArrowRight className="ml-2" />
            </a>
            <Link href="/contact" className="btn-secondary">
              Talk to an Expert
            </Link>
          </>
        }
        stats={[
          { value: '50+', label: 'Global Partners', icon: <FaGlobe /> },
          { value: '5000+', label: 'Casino Games', icon: <FaGamepad /> },
          { value: '200+', label: 'Sports Markets', icon: <FaTrophy /> },
          { value: '99.99%', label: 'API Uptime', icon: <FaServer /> },
        ]}
        align="center"
        animateStats={true}
      />

      <div className="section-divider opacity-10" />

      {/* iGaming Services */}
      <section id="igaming" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-app relative z-10">
          <div className="mb-20 flex flex-col items-center text-center">
            <Reveal>
              <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">TRADITIONAL GAMING</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                iGaming <span className="text-gradient">Ecosystem</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed text-balance">
                Complete, production-ready solutions for large-scale online gaming operations.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {igamingServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1} width="100%" fullHeight>
                <ServiceCard service={service} theme="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider opacity-10" />

      {/* Crypto Gaming Services - DARK THEME */}
      <section className="py-24 bg-[#0A1122] relative overflow-hidden border-y border-white/5">
        {/* Ambient Effects for Dark Theme */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-primary-blue/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[20%] left-[-5%] w-[35%] h-[35%] bg-primary-orange/5 rounded-full blur-[120px] animate-float-soft" />
        </div>

        <div className="container-app relative z-10">
          <div className="mb-20 flex flex-col items-center text-center">
            <Reveal>
              <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">NEXT-GEN TECH</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Web3 & <span className="text-gradient">Blockchain</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed text-balance">
                Cutting-edge decentralized infrastructure for the future of digital asset ownership.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cryptoServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1} width="100%" fullHeight>
                <ServiceCard service={service} theme="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Footer CTA Strip */}
      <section className="py-24 bg-[#050B1B] relative overflow-hidden">
        <div className="container-app relative z-10">
          <div className="rounded-[40px] bg-gradient-to-br from-primary-blue/20 to-primary-orange/20 border border-white/10 p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10" />
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 max-w-3xl">
                HAVE A <span className="text-gradient">SPECIFIC</span> REQUIREMENT?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-300 text-xl mb-12 max-w-2xl">
                Our solutions architects are ready to design your bespoke gaming infrastructure.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/contact" className="btn-primary px-12 py-6 rounded-2xl text-xl">
                BOOK ARCHITECTURE REVIEW
              </Link>
            </Reveal>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>
    </div>
  )
}
