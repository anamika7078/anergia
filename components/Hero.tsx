'use client'

import { motion, Variants } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'

interface Stat {
    value: string
    label: string
    icon?: ReactNode
}

interface HeroProps {
    title: string
    subtitle: string
    buttons?: ReactNode
    badge?: ReactNode
    stats?: Stat[]
    className?: string
    backgroundImage?: string
    videoBackground?: string
    align?: 'center' | 'left'
    animateStats?: boolean
}

export default function Hero({
    title,
    subtitle,
    buttons,
    badge,
    stats,
    className,
    backgroundImage,
    videoBackground,
    align = 'center',
    animateStats = false,
}: HeroProps) {
    const isCentered = align === 'center'
    const [videoLoaded, setVideoLoaded] = useState(false)

    // Variants for staggered animations
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Increased stagger for more dramatic effect
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "premium" feel
            },
        },
    }

    return (
        <section
            className={twMerge(
                'relative min-h-screen flex items-center overflow-hidden text-primary-white pt-48 pb-20 lg:pt-64 lg:pb-32 bg-primary-dark',
                className
            )}
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {videoBackground ? (
                    <>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedData={() => setVideoLoaded(true)}
                            className={clsx(
                                "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                                videoLoaded ? "opacity-100" : "opacity-0"
                            )}
                        >
                            <source src={videoBackground} type="video/mp4" />
                        </video>
                        {/* Fallback image while video loads if needed, but fading in looks okay too */}
                        {/* Lighter overlay for video visibility */}
                        <div className="absolute inset-0 bg-primary-dark/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-primary-dark/30" />
                    </>
                ) : backgroundImage ? (
                    <>
                        <Image
                            src={backgroundImage}
                            alt="Hero background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* HSL-based dynamic overlays for readability on images - refined for visibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-primary-dark/40 to-primary-blue/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent opacity-40" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gradient-blue">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    </div>
                )}
            </div>

            {/* Ambient Light Effects */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
                <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary-blue/30 blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-primary-orange/20 blur-[150px] animate-float-soft" />
            </div>

            <div className="container-app relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left/Top: High-contrast typography */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className={clsx(
                            'flex flex-col gap-8',
                            isCentered && 'lg:col-span-2 lg:items-center lg:text-center'
                        )}
                    >
                        {/* Badge System */}
                        {badge && (
                            <motion.div variants={itemVariants} className="inline-block">
                                {badge}
                            </motion.div>
                        )}

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]"
                        >
                            {title.split('*').map((part, index) => (
                                index % 2 === 1 ? (
                                    <span key={index} className="text-gradient">{part}</span>
                                ) : (
                                    <span key={index}>{part}</span>
                                )
                            ))}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={clsx(
                                "text-lg md:text-xl text-primary-white/80 max-w-2xl text-balance leading-relaxed",
                                isCentered ? "mx-auto" : ""
                            )}
                        >
                            {subtitle}
                        </motion.p>

                        {buttons && (
                            <motion.div
                                variants={itemVariants}
                                className={clsx(
                                    'flex flex-col sm:flex-row gap-4',
                                    isCentered ? 'justify-center' : 'justify-start'
                                )}
                            >
                                {buttons}
                            </motion.div>
                        )}

                        {/* Stats integrated into Hero content if centered or distinct if split */}
                        {stats && stats.length > 0 && isCentered && (
                            <motion.div
                                variants={containerVariants}
                                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
                            >
                                {stats.map((stat, index) => (
                                    <HeroStat key={index} stat={stat} />
                                ))}
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right/Bottom: Visual Element (only if not centered) */}
                    {!isCentered && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="hidden lg:block relative"
                        >
                            {/* Abstract Dashboard/Visual Placeholder or just empty spacer if visual not needed */}
                            <div className="relative rounded-2xl border border-primary-white/10 bg-primary-white/5 backdrop-blur-md p-6 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 perspective-1000 group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue to-primary-orange rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative rounded-xl overflow-hidden bg-primary-dark/50 aspect-[4/3] flex items-center justify-center border border-primary-white/5">
                                    <div className="text-primary-white/20 font-mono text-sm">
                                        [Interactive Visual / Dashboard]
                                    </div>

                                    {/* Simulated UI Elements */}
                                    <div className="absolute top-4 left-4 right-4 flex gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                                        <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-blue/10 to-transparent"></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Bottom Stats for Split Layout */}
                {stats && stats.length > 0 && !isCentered && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-20 border-t border-primary-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <div className="text-3xl font-bold text-primary-white tracking-tight">{stat.value}</div>
                                <div className="text-sm text-primary-white/60 uppercase tracking-widest font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    )
}

function HeroStat({ stat }: { stat: Stat }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="rounded-xl border border-primary-white/10 bg-primary-white/5 px-4 py-4 text-left hover:bg-primary-white/10 transition-colors backdrop-blur-sm"
        >
            <div className="flex items-center gap-3">
                {stat.icon && (
                    <div className="text-primary-orange text-xl">
                        {stat.icon}
                    </div>
                )}
                <div>
                    <div className="text-2xl font-bold leading-none mb-1 text-primary-white">
                        {stat.value}
                    </div>
                    <div className="text-xs text-primary-white/60 font-medium tracking-wide uppercase">
                        {stat.label}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
