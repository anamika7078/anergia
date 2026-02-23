'use client'

import Hero from '@/components/Hero'
import BlogCard from '@/components/BlogCard'
import Reveal from '@/components/Reveal'
import { blogPosts } from '@/lib/data'
import { FaArrowRight, FaNewspaper, FaUsers, FaGlobe, FaLightbulb } from 'react-icons/fa'
import { useDemo } from '@/context/DemoContext'

export default function BlogPage() {
  const { openDemoModal } = useDemo()

  return (
    <div className="min-h-screen bg-[#050B1B] pb-16">
      {/* Header */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
        title="*Insights* & Industry *Trends*"
        subtitle="Deep dives into iGaming technology, blockchain innovation, and the future of digital entertainment."
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-white/20 bg-primary-white/10 px-4 py-2 text-sm font-medium text-primary-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary-orange animate-pulse" />
            Thought Leadership
          </div>
        }
        buttons={
          <>
            <a href="#latest" className="btn-primary">
              Read Latest
              <FaArrowRight className="ml-2" />
            </a>
            <button onClick={() => openDemoModal()} className="btn-secondary">
              Subscribe Free
            </button>
          </>
        }
        stats={[
          { value: '500+', label: 'Articles', icon: <FaNewspaper /> },
          { value: '50k+', label: 'Readers', icon: <FaUsers /> },
          { value: '120+', label: 'Regions', icon: <FaGlobe /> },
          { value: '100+', label: 'Guides', icon: <FaLightbulb /> },
        ]}
        align="center"
        animateStats={true}
      />

      <div className="section-divider opacity-10" />

      {/* Modern Filter Strip - Decorative */}
      <div className="bg-[#0A1122] border-y border-white/5 py-6">
        <div className="container-app flex flex-wrap justify-center gap-10">
          {['ALL INSIGHTS', 'BLOCKCHAIN', 'IGAMING', 'REGULATION', 'CASE STUDIES'].map((f, i) => (
            <button key={i} className="text-[10px] font-black tracking-[0.3em] text-slate-500 hover:text-primary-orange transition-colors">
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section id="latest" className="py-24 relative overflow-hidden">
        {/* Background Accent orbs */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-primary-orange/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-app relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.1} width="100%">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>

          {/* Pagination Placeholder UI */}
          <div className="mt-24 flex items-center justify-center gap-4">
            <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-40 cursor-not-allowed">
              <FaArrowRight className="rotate-180" />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map(n => (
                <button key={n} className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-sm font-bold transition-all ${n === 1 ? 'bg-primary-orange border-primary-orange text-white' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}>
                  {n}
                </button>
              ))}
            </div>
            <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary-blue hover:to-primary-orange hover:border-transparent transition-all">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Integrated into Blog */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-app relative z-10">
          <div className="rounded-[40px] bg-[#0A1122] border border-white/5 p-12 lg:p-20 flex flex-col items-center text-center relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-blue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                NEVER MISS AN <span className="text-gradient">UPGRADE.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-400 text-lg mb-10 max-w-xl">
                Join 5,000+ industry leaders receiving our weekly analysis on gaming and blockchain tech.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.3}>
              <div className="max-w-md w-full mx-auto relative group/input">
                <input
                  type="email"
                  placeholder="OPERATOR_EMAIL@HQ.COM"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white font-mono text-sm focus:outline-none focus:border-primary-orange transition-colors"
                />
                <button
                  onClick={() => openDemoModal()}
                  className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-gradient-to-r from-primary-blue to-primary-orange text-white font-black text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  CONNECT
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
