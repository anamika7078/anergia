'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Service } from '@/lib/data'
import { FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'

interface ServiceCardProps {
  service: Service
  theme?: 'light' | 'dark'
}

import { useDemo } from '@/context/DemoContext'

export default function ServiceCard({ service, theme = 'dark' }: ServiceCardProps) {
  const { openDemoModal } = useDemo()
  const Icon = service.icon
  const isDark = theme === 'dark'
  const cardRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (rect) {
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-[#0A1122]/40 border border-white/5 hover:border-primary-orange/30 transition-all duration-700 shadow-2xl"
      style={{ cursor: 'none' }}
    >
      {/* Background Image - Absolute to cover everything */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image || '/bgimg.png'}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full p-10 flex flex-col justify-end">
        {/* Badge */}
        <div className="absolute top-8 right-8">
          <div className="px-3 py-1 rounded-full bg-primary-blue/20 backdrop-blur-md border border-primary-blue/30 text-[9px] font-black text-primary-blue uppercase tracking-widest">
            {service.category}
          </div>
        </div>

        {/* Icon & Title Section (Always Visible) */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:shadow-[0_0_30px_rgba(0,82,255,0.3)] transition-all">
            <Icon size={24} className="text-primary-blue group-hover:text-primary-orange transition-colors" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2 text-gradient">
            {service.title}
          </h3>
        </div>

        {/* Hidden Content (Reveals on Hover) */}
        <div className="max-h-0 group-hover:max-h-[400px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
          <div className="pt-4 border-t border-white/10">
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <button
              onClick={() => openDemoModal(service.id)}
              className="group/btn relative inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-white transition-all duration-500 hover:border-transparent overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-orange opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-black">
                Request Demo
                <FaArrowRight size={11} className="group-hover/btn:translate-x-1.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Border Glow */}
      <div className="absolute inset-0 z-20 pointer-events-none border border-white/0 group-hover:border-primary-orange/20 rounded-[2.5rem] transition-colors duration-700" />

      {/* Custom Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-30 pointer-events-none"
            animate={{ x: cursorPos.x - 36, y: cursorPos.y - 36 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(0,82,255,0.35) 0%, rgba(255,107,30,0.15) 100%)',
                boxShadow: '0 0 24px 6px rgba(0,82,255,0.35), 0 0 48px 12px rgba(255,107,30,0.1)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(255,255,255,0.18)',
              }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white select-none">View</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
