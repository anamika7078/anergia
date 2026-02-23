'use client'

import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
    FaCloud, FaCoins, FaShieldAlt, FaLock, FaUsers, FaChartLine,
    FaArrowRight
} from 'react-icons/fa'

const features = [
    {
        n: '01',
        title: 'Turnkey Platform Engineering',
        desc: 'Scalable casino and sportsbook foundations with modular microservices. Our infrastructure is built for high-concurrency and global deployment.',
        icon: FaCloud,
        color: '#0052FF',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
        tags: ['Casino', 'Sportsbook', 'Microservices'],
    },
    {
        n: '02',
        title: 'Payments, Wallets & Payouts',
        desc: 'Multi-currency wallet systems supporting 100+ global payment rails, automated settlement, and instant payout processing.',
        icon: FaCoins,
        color: '#FF8A00',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=2070',
        tags: ['100+ Methods', 'Instant Payouts', 'Multi-Currency'],
    },
    {
        n: '03',
        title: 'Compliance & Player Protection',
        desc: 'Automated KYC/AML, responsible gaming limits, and comprehensive audit-ready reporting for every major jurisdiction.',
        icon: FaShieldAlt,
        color: '#00C4A7',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070',
        tags: ['KYC / AML', 'Regulatory', 'Audit-Ready'],
    },
    {
        n: '04',
        title: 'Risk, Fraud & Trading Controls',
        desc: 'AI-driven risk scoring, real-time fraud detection, and operational controls to safeguard your ecosystem against bad actors.',
        icon: FaLock,
        color: '#FF4A6E',
        image: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=2070',
        tags: ['AI Detection', 'Risk Scoring', 'Real-time'],
    },
    {
        n: '05',
        title: 'Crypto Gaming & Web3',
        desc: 'Full-stack blockchain integration including tokenomics, smart contract fair play, and NFT-based loyalty systems.',
        icon: FaUsers,
        color: '#A855F7',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070',
        tags: ['Smart Contracts', 'NFT Rewards', 'DeFi'],
    },
    {
        n: '06',
        title: 'Cloud, DevOps & Observability',
        desc: 'Enterprise-grade CI/CD pipelines, 99.9% uptime SLA, and deep observability across your entire gaming infrastructure.',
        icon: FaChartLine,
        color: '#22D3EE',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070',
        tags: ['99.9% Uptime', 'CI/CD', 'Monitoring'],
    },
]

export default function DeliverySection() {
    const [active, setActive] = useState(0)
    const [hovered, setHovered] = useState<number | null>(null)
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

    // The displayed item is hovered (if any) else the active (clicked)
    const displayIndex = hovered !== null ? hovered : active
    const current = features[displayIndex]
    const Icon = current.icon

    const handleMouseEnter = (i: number) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
        setHovered(i)
    }

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHovered(null)
        }, 120) // Slightly longer to feel more deliberate
    }

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect()
        if (rect) {
            setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="py-24 bg-[#050B1B] relative overflow-hidden"
            style={{ cursor: hovered !== null ? 'none' : 'default' }}
        >
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-primary-blue/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary-orange/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-app relative z-10">
                {/* Heading */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-xs text-primary-orange mb-4 block tracking-[0.3em] font-bold uppercase">Core Value</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        What We <span className="text-gradient">Deliver</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        A complete stack for regulated gaming—designed with fintech-grade security and gaming-grade performance.
                    </p>
                </div>

                {/* Main interactive layout */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left: Feature List */}
                    <div className="flex flex-col gap-3 lg:w-[42%] shrink-0">
                        {features.map((f, i) => {
                            const FIcon = f.icon
                            const isActive = active === i
                            const isHov = hovered === i
                            const isHighlighted = isHov || (hovered === null && isActive)

                            return (
                                <button
                                    key={f.n}
                                    onClick={() => setActive(i)}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 group relative overflow-hidden ${isHighlighted
                                            ? 'border-white/20 bg-white/5'
                                            : 'border-white/5 bg-transparent hover:bg-white/[0.03] hover:border-white/10'
                                        }`}
                                >
                                    {/* Active / Hover glow strip */}
                                    <AnimatePresence>
                                        {isHighlighted && (
                                            <motion.div
                                                layoutId="active-bar"
                                                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                                                style={{ backgroundColor: f.color }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Hover shimmer sweep */}
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none rounded-2xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHov ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{
                                            background: `linear-gradient(105deg, transparent 40%, ${f.color}12 60%, transparent 80%)`,
                                        }}
                                    />

                                    <div className="flex items-center gap-5 relative z-10">
                                        <motion.div
                                            className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                                            animate={
                                                isHighlighted
                                                    ? { backgroundColor: `${f.color}20`, borderColor: `${f.color}50`, scale: 1.08 }
                                                    : { backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)', scale: 1 }
                                            }
                                            style={{ border: '1px solid' }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <FIcon
                                                className="text-xl transition-colors duration-300"
                                                style={{ color: isHighlighted ? f.color : '#475569' }}
                                            />
                                        </motion.div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-black text-white/20 italic tracking-widest">{f.n}</span>
                                            </div>
                                            <h3 className={`font-bold text-base leading-snug transition-colors duration-200 ${isHighlighted ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'}`}>
                                                {f.title}
                                            </h3>
                                        </div>

                                        <motion.div
                                            animate={{ opacity: isHighlighted ? 1 : 0, x: isHighlighted ? 0 : -8 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FaArrowRight
                                                className="shrink-0 text-xs"
                                                style={{ color: f.color }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Expanded Description — show on hover OR active (clicked) */}
                                    <AnimatePresence>
                                        {isHighlighted && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                                className="overflow-hidden relative z-10"
                                            >
                                                <p className="text-slate-400 text-sm leading-relaxed mt-4 pl-[68px]">
                                                    {f.desc}
                                                </p>
                                                <div className="flex gap-2 flex-wrap mt-4 pl-[68px]">
                                                    {f.tags.map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                                            style={{ backgroundColor: `${f.color}15`, color: f.color, border: `1px solid ${f.color}30` }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            )
                        })}
                    </div>

                    {/* Right: Image Panel */}
                    <div className="lg:flex-1 relative h-80 lg:h-auto rounded-[2.5rem] overflow-hidden border border-white/10 min-h-[450px] shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                        <AnimatePresence>
                            <motion.div
                                key={displayIndex}
                                initial={{ opacity: 0, scale: 1.08 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.93 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={current.image}
                                    alt={current.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Color-tinted overlay derived from feature color */}
                                <motion.div
                                    key={`overlay-${displayIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(to top, #050B1B 0%, ${current.color}18 55%, transparent 100%)`,
                                    }}
                                />

                                {/* Bottom info card */}
                                <div className="absolute bottom-8 left-8 right-8">
                                    <motion.div
                                        key={`card-${displayIndex}`}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.15 }}
                                        className="p-6 rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/10"
                                        style={{ borderColor: `${current.color}30` }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: `${current.color}20`, border: `1px solid ${current.color}50` }}
                                            >
                                                <Icon className="text-2xl" style={{ color: current.color }} />
                                            </div>
                                            <div>
                                                <div className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: current.color }}>
                                                    {current.n} / 06
                                                </div>
                                                <h4 className="text-white font-bold text-lg leading-tight">{current.title}</h4>
                                            </div>
                                        </div>
                                        {/* Tags row in the panel card */}
                                        <div className="flex gap-2 flex-wrap mt-4 pt-4 border-t border-white/[0.08]">
                                            {current.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                                    style={{ backgroundColor: `${current.color}15`, color: current.color, border: `1px solid ${current.color}30` }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Custom Interactive Cursor (Sync with ServiceCard) */}
            <AnimatePresence>
                {hovered !== null && (
                    <motion.div
                        className="fixed z-[100] pointer-events-none hidden lg:block"
                        animate={{ x: cursorPos.x, y: cursorPos.y }}
                        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.2 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="w-16 h-16 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                            style={{
                                background: `radial-gradient(circle, ${features[hovered].color}40 0%, transparent 100%)`,
                                boxShadow: `0 0 20px 2px ${features[hovered].color}30`,
                                backdropFilter: 'blur(4px)',
                                border: `1px solid ${features[hovered].color}40`,
                            }}
                        >
                            <span className="text-[8px] font-black uppercase tracking-widest text-white select-none">
                                {active === hovered ? 'Selected' : 'View'}
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
