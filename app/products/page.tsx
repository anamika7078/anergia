'use client'

import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import NextImage from 'next/image'
import { products } from '@/lib/data'
import { FaArrowRight, FaUsers, FaChartLine, FaShieldAlt, FaCoins } from 'react-icons/fa'
import { useDemo } from '@/context/DemoContext'

export default function ProductsPage() {
  const { openDemoModal } = useDemo()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Hero
        backgroundImage="/bgimg.png" // Dashboard/Data Analytics
        title="Enterprise-Grade *Gaming Products*"
        subtitle="Scalable, secure, and ready-to-deploy platforms. Built for high-volume operators who demand performance and reliability."
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-white/20 bg-primary-white/10 px-4 py-2 text-sm font-medium text-primary-white/90 backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange"></span>
            </span>
            Production-Ready Solutions
          </div>
        }
        buttons={
          <>
            <a href="#products" className="btn-primary">
              Browse Products
              <FaArrowRight className="ml-2" />
            </a>
            <button onClick={() => openDemoModal()} className="btn-secondary">
              Schedule Demo
            </button>
          </>
        }
        stats={[
          { value: '2M+', label: 'Active Players', icon: <FaUsers /> },
          { value: '$500M+', label: 'Monthly Volume', icon: <FaChartLine /> },
          { value: '100%', label: 'Secure Wallets', icon: <FaShieldAlt /> },
          { value: '50+', label: 'Currencies', icon: <FaCoins /> },
        ]}
        align="center"
        animateStats={true}
      />

      <div className="section-divider opacity-10" />

      {/* Modern Grid Background Effect */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div id="products" className="container-app relative z-10">
          <div className="mb-20 flex flex-col items-center text-center">
            <Reveal>
              <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">ECOSYSTEM</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Product <span className="text-gradient">Showcase</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1} width="100%" fullHeight>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider opacity-10" />

      {/* Feature Highlighting Section - Unique Layout */}
      <section className="py-28 bg-[#0A1122] border-y border-white/5 relative overflow-hidden">
        <div className="container-app relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
                  FORGED FOR <br />
                  <span className="text-gradient">SUPREMACY.</span>
                </h2>
                <p className="text-slate-400 text-xl leading-relaxed mb-12">
                  Our products aren't just software—they're high-performance engines designed to dominate the competitive iGaming landscape.
                </p>
                <div className="space-y-6">
                  {[
                    { t: 'Real-time Analytics', d: 'Sub-millisecond latency on all event processing.' },
                    { t: 'Fractional Scaling', d: 'Autoscaling clusters that breathe with your traffic.' },
                    { t: 'Military-Grade Ops', d: 'Hardened infrastructure with multi-region redundancy.' }
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-1.5 h-12 bg-primary-orange opacity-20 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{f.t}</h4>
                        <p className="text-slate-500 text-sm">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Visual Graphic Element */}
            <Reveal delay={0.3} variant="scale">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-primary-orange/30 rounded-3xl rotate-3 blur-2xl opacity-40 animate-pulse" />
                <div className="absolute inset-0 border border-white/10 rounded-3xl backdrop-blur-md bg-white/5 overflow-hidden shadow-2xl group-hover:border-primary-orange/30 transition-all duration-700">
                  <NextImage
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop"
                    alt="Crypto Gaming Infrastructure Dashboard"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1122] via-[#0A1122]/40 to-transparent" />

                  {/* Digital Overlay elements */}
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <div className="h-1 w-12 bg-primary-orange/60 rounded-full" />
                    <div className="h-1 w-8 bg-primary-blue/60 rounded-full" />
                  </div>
                </div>
                {/* Floating UI Dots */}
                <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary-orange animate-pulse shadow-[0_0_20px_rgba(255,138,0,0.5)]" />
                <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-primary-blue animate-ping" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-[#050B1B] relative overflow-hidden">
        <div className="container-app text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter">
              SCALE TO <span className="text-gradient">INFINITY.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Unlock the full potential of your gaming operations with our enterprise foundation.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={0.3}>
            <button
              onClick={() => openDemoModal()}
              className="btn-primary px-16 py-8 rounded-[2.5rem] text-2xl"
            >
              REQUEST LIVE DEMO
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
