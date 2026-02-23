import React from 'react';
import Reveal from './Reveal';
import {
    FiLayers,
    FiActivity,
    FiGrid,
    FiZap,
    FiUsers
} from 'react-icons/fi';
import { FaGamepad } from 'react-icons/fa';

const modernServices = [
    {
        id: 'turnkey-platform',
        title: 'Turnkey iGaming Platform',
        description: 'Complete end-to-end iGaming solution ready for deployment with all essential modules and enterprise-grade features.',
        icon: FaGamepad,
        gradient: ['#FF8A00', '#FF2D00'],
        bgGradient: 'from-[#FF8A00]/20 to-[#FF2D00]/20',
    },
    {
        id: 'white-label',
        title: 'White-Label Casino Solutions',
        description: 'Fully customizable casino platform with your branding, ready to launch in weeks with comprehensive back-office support.',
        icon: FiLayers,
        gradient: ['#FF8A00', '#FF2D00'],
        bgGradient: 'from-[#FF8A00]/20 to-[#FF2D00]/20',
    },
    {
        id: 'sportsbook',
        title: 'Sportsbook Betting Engine',
        description: 'Advanced sportsbook platform with real-time odds, live betting coverage, and robust risk management controls.',
        icon: FiActivity,
        gradient: ['#FF8A00', '#FF2D00'],
        bgGradient: 'from-[#FF8A00]/20 to-[#FF2D00]/20',
    },
    {
        id: 'game-aggregation',
        title: 'Casino Game Aggregation',
        description: 'Access thousands of top-tier casino games from world-leading providers through a single, seamless API integration.',
        icon: FiGrid,
        gradient: ['#FF8A00', '#FF2D00'],
        bgGradient: 'from-[#FF8A00]/20 to-[#FF2D00]/20',
    },
    {
        id: 'live-dealer',
        title: 'Live Dealer Integration',
        description: 'Immersive real-time gaming experiences with top-tier live dealer studio integrations and high-definition streaming.',
        icon: FiZap,
        gradient: ['#FF8A00', '#FF2D00'],
        bgGradient: 'from-[#FF8A00]/20 to-[#FF2D00]/20',
    },
    {
        id: 'pam',
        title: 'Player Account Management',
        description: 'Robust PAM system to manage player data, complex transactions, personalized bonuses, and deep loyalty insights.',
        icon: FiUsers,
        gradient: ['#FF8A00', '#FF2D00'],
        bgGradient: 'from-[#FF8A00]/20 to-[#FF2D00]/20',
    },
];

import { useDemo } from '@/context/DemoContext'

const ModernServiceSection = () => {
    const { openDemoModal } = useDemo()

    return (
        <section className="py-24 bg-[#050B1B] relative overflow-hidden">
            {/* Background Decorative Elements - Matching Hero Section Theme */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-blue/30 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary-orange/20 rounded-full blur-[150px] animate-float-soft" />
            </div>

            <div className="container-app relative z-10">
                <div className="text-center mb-20 flex flex-col items-center">
                    <Reveal>
                        <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">OUR SERVICES</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Elevate Your <span className="text-gradient">Gaming Experience</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed text-balance">
                            Comprehensive iGaming solutions designed for speed, scale, and
                            unmatched player engagement across all platforms.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {modernServices.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                onClick={() => openDemoModal(service.id)}
                                className="group flex items-start gap-8 transition-all duration-300 cursor-pointer"
                            >
                                {/* Icon Container */}
                                <div className="flex-shrink-0 relative">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(255,138,0,0.15)]`}>

                                        {/* Icon with gradient stroke */}
                                        <div className="relative flex items-center justify-center">
                                            <svg width="0" height="0" className="absolute">
                                                <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor={service.gradient[0]} />
                                                    <stop offset="100%" stopColor={service.gradient[1]} />
                                                </linearGradient>
                                            </svg>
                                            <service.icon size={40} style={{ stroke: `url(#grad-${index})` }} className="transition-all duration-500" />
                                        </div>

                                        {/* Gradient Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-2xl -z-10`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col pt-2">
                                    <h3 className="text-2xl font-bold text-gradient mb-3 group-hover:opacity-80 transition-opacity duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Modern Grid Background Effect */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </section>
    );
};

export default ModernServiceSection;
