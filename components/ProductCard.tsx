'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/data'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
}

import { useDemo } from '@/context/DemoContext'

export default function ProductCard({ product }: ProductCardProps) {
  const { openDemoModal } = useDemo()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-[#0A1122] border border-white/5 hover:border-primary-orange/30 transition-all duration-700 shadow-2xl"
    >
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        {/* Animated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      </div>

      {/* Floating Badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black text-primary-white uppercase tracking-widest group-hover:border-primary-orange/50 transition-colors">
          Enterprise
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 h-full w-full p-10 flex flex-col justify-end">

        {/* Title Section (Pushes up on hover) */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-xl font-bold text-white mb-4 text-gradient">
            {product.name}
          </h3>
        </div>

        {/* Reveal Section */}
        <div className="max-h-0 group-hover:max-h-[400px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
          <div className="pt-4 border-t border-white/10">
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {product.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-primary-orange/10 border border-primary-orange/20 flex items-center justify-center mr-3">
                    <FaCheck size={8} className="text-primary-orange" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={() => openDemoModal(product.id)}
              className="group/btn relative flex items-center justify-center w-full px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white transition-all duration-500 hover:border-transparent overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-orange opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black">
                Request Demo
                <FaArrowRight size={12} className="group-hover/btn:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Border Glow */}
      <div className="absolute inset-0 z-20 pointer-events-none border border-white/0 group-hover:border-primary-orange/20 rounded-[2.5rem] transition-colors duration-700" />
    </motion.div>
  )
}
