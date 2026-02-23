'use client'

import Link from 'next/link'
import NextImage from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/products', label: 'PRODUCTS' },
    { href: '/blog', label: 'INSIGHTS' },
    { href: '/contact', label: 'ACCESS' },
  ]

  return (
    <nav
      className={clsx(
        'fixed top-0 inset-x-0 z-[100] transition-all duration-500',
        isScrolled
          ? 'bg-[#050B1B]/80 backdrop-blur-xl border-b border-white/5 pt-2 pb-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent pt-4 pb-16'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">

          {/* Brand Logo */}
          <Link href="/" className="group flex items-center">
            <div className="relative w-80 h-32 -ml-4">
              <NextImage
                src="/20260216_163214.png"
                alt="Anergia Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      'relative px-5 py-2 text-[10px] font-black tracking-[0.2em] transition-all duration-300 rounded-full group',
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Active Background Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover Line */}
                    {!isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-orange group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="ml-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-primary-blue to-primary-orange text-white text-xs font-black uppercase tracking-widest transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,82,255,0.4)] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:border-primary-orange/50 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <FaTimes size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <FaBars size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0A1122]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-10 space-y-4">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "block px-6 py-4 rounded-2xl text-sm font-black tracking-[0.2em] transition-all",
                        isActive
                          ? 'text-primary-orange bg-white/5 border border-primary-orange/20 shadow-[0_0_20px_rgba(255,138,0,0.1)]'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-5 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-2xl font-black text-center uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
