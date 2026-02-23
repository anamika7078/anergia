'use client'

import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ModernServiceSection from '@/components/ModernServiceSection'
import DeliverySection from '@/components/DeliverySection'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import Reveal from '@/components/Reveal'
import { services, products, blogPosts, testimonials } from '@/lib/data'
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaCloud,
  FaLock,
  FaUsers,
  FaCoins,
  FaQuoteLeft,
} from 'react-icons/fa'

import { useDemo } from '@/context/DemoContext'

export default function Home() {
  const { openDemoModal } = useDemo()
  const featuredServices = services.slice(0, 6)
  const featuredProducts = products.slice(0, 3)
  const featuredBlogs = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        videoBackground="/bgvideo.mp4"
        title="Enterprise *iGaming* & *Crypto Gaming* SaaS for Modern Operators"
        subtitle="Launch faster with turnkey platforms, compliant player management, and secure wallets—built for scale, performance, and global growth."
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-white/20 bg-primary-white/10 px-4 py-2 text-sm font-medium text-primary-white/90 backdrop-blur-sm shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange"></span>
            </span>
            Investor-ready iGaming + Crypto Gaming infrastructure
          </div>
        }
        buttons={
          <>
            <button onClick={() => openDemoModal()} className="btn-primary">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
            <button onClick={() => openDemoModal()} className="btn-secondary">
              Contact Sales
            </button>
          </>
        }
        stats={[
          { value: '99.9%', label: 'Uptime SLA', icon: <FaCloud /> },
          { value: '100+', label: 'Payments & rails', icon: <FaCoins /> },
          { value: '25+', label: 'Compliance controls', icon: <FaLock /> },
          { value: '1M+', label: 'Accounts supported', icon: <FaUsers /> },
        ]}
        animateStats={true}
      />

      <div className="section-divider opacity-10" />

      {/* Featured Services - Modern Design */}
      <ModernServiceSection />

      <div className="section-divider opacity-10" />

      {/* Offerings / What we deliver */}
      <DeliverySection />

      <div className="section-divider opacity-10" />

      {/* Featured Products - High Impact Grid */}
      <section className="py-24 bg-[#050B1B] relative overflow-hidden">
        <div className="container-app relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <Reveal>
              <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">OUR SOLUTIONS</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Premium <span className="text-gradient">Gaming Products</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1} width="100%" fullHeight>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Anergia - New Immersive UI */}
      <section className="py-28 bg-[#0A1122] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        <div className="container-app relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gradient mb-6 tracking-tight">
                Why Choose Anergia?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed text-balance">
                The fusion of enterprise-grade security and gaming-optimized performance.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Hardened Security', description: 'Advanced multi-sig patterns and automated audit trails.', icon: FaShieldAlt },
              { title: 'Global Compliance', description: 'Pre-certified modules for all major gaming jurisdictions.', icon: FaLock },
              { title: 'Infinite Scale', description: 'Cloud-native architecture designed for millions of players.', icon: FaCloud },
            ].map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.1}>
                <div className="text-center flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary-orange/50 group-hover:shadow-[0_0_40px_rgba(255,138,0,0.1)] transition-all duration-500">
                    <feature.icon size={32} className="text-primary-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-orange transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Client Say - Modern Testimonial UI */}
      <section className="py-28 bg-[#050B1B] relative overflow-hidden">
        <div className="container-app relative z-10">
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Partner <span className="text-gradient">Success</span></h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 0.1}>
                <div className="p-10 rounded-3xl bg-[#0A1122]/60 border border-white/5 relative group hover:border-primary-orange/20 transition-all duration-500">
                  <FaQuoteLeft className="text-primary-orange/20 text-4xl absolute top-8 left-8" />
                  <p className="text-slate-300 italic text-lg leading-relaxed mb-8 relative z-10 px-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-orange/40 transition-colors">
                      <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-primary-orange transition-colors">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{testimonial.role} @ {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights - Blog Section */}
      <section className="py-28 bg-[#050B1B]">
        <div className="container-app">
          <div className="text-center mb-24 flex flex-col items-center">
            <Reveal>
              <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">INSIGHTS</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ecosystem <span className="text-gradient">Updates</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredBlogs.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.1}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-20 flex justify-center">
            <Reveal variant="scale" delay={0.3}>
              <Link href="/blog" className="btn-secondary px-10">
                Explore Full Library
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-24 bg-gradient-to-r from-primary-blue to-primary-orange relative overflow-hidden group">
        <div className="absolute inset-x-0 bottom-0 top-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
        <div className="container-app relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">READY TO SCALE?</h2>
            <p className="text-white/80 font-bold tracking-widest text-sm uppercase">Join 100+ global operators today.</p>
          </div>
          <button
            onClick={() => openDemoModal()}
            className="px-12 py-6 bg-white rounded-2xl text-[#050B1B] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-white/20"
          >
            GET STARTED NOW
          </button>
        </div>
        {/* Background animated circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-black/10 rounded-full blur-[100px] animate-float-soft"></div>
      </section>
    </div>
  )
}
