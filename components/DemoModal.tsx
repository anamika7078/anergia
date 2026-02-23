'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaUser, FaEnvelope, FaBuilding, FaChevronDown, FaPaperPlane } from 'react-icons/fa'
import { products, services } from '@/lib/data'

interface DemoModalProps {
    isOpen: boolean
    onClose: () => void
    initialSelection?: string
}

export default function DemoModal({ isOpen, onClose, initialSelection }: DemoModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        interest: initialSelection || '',
        message: ''
    })

    // Update selection if the initialSelection changes (e.g. user clicks a different card)
    useEffect(() => {
        if (initialSelection) {
            setFormData(prev => ({ ...prev, interest: initialSelection }))
        }
    }, [initialSelection])

    // Combine products and services for the dropdown
    const allOptions = [
        ...products.map(p => ({ id: p.id, name: p.name, category: 'Product' })),
        ...services.map(s => ({ id: s.id, name: s.title, category: 'Service' }))
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Implement submission logic here
        console.log('Submission:', formData)
        alert('Request submitted! Our team will contact you shortly.')
        onClose()
    }

    // Handle escape key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-xl bg-[#0A1122] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Background Glows */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors z-50 p-2 hover:bg-white/5 rounded-full"
                                aria-label="Close modal"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="p-10 md:p-14 relative z-10">
                                <div className="mb-10">
                                    <span className="text-micro text-primary-orange mb-4 block tracking-[0.3em]">REACH OUT</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                        Request a <span className="text-gradient">Live Demo</span>
                                    </h2>
                                    <p className="text-slate-400 mt-3 text-base leading-relaxed">
                                        Experience the future of iGaming infrastructure.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-7">
                                    <div className="grid md:grid-cols-2 gap-7">
                                        {/* Name Field */}
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                            <div className="relative group">
                                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-blue transition-colors" size={14} />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all text-sm"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                                            <div className="relative group">
                                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-blue transition-colors" size={14} />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all text-sm"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Field */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Company Name</label>
                                        <div className="relative group">
                                            <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-blue transition-colors" size={14} />
                                            <input
                                                required
                                                type="text"
                                                placeholder="Your Enterprise"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all text-sm"
                                                value={formData.company}
                                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Interest Field (Dropdown) */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Interested In</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-orange transition-colors">
                                                <FaChevronDown size={14} />
                                            </div>
                                            <select
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white appearance-none focus:outline-none focus:border-primary-orange/50 focus:bg-white/10 transition-all text-sm"
                                                value={formData.interest}
                                                onChange={e => setFormData({ ...formData, interest: e.target.value })}
                                            >
                                                <option value="" disabled className="bg-[#0A1122]">Select a product or service</option>
                                                <optgroup label="Products" className="bg-[#0A1122] text-primary-orange font-bold">
                                                    {products.map(p => (
                                                        <option key={p.id} value={p.id} className="bg-[#0A1122] text-white py-2">{p.name}</option>
                                                    ))}
                                                </optgroup>
                                                <optgroup label="Services" className="bg-[#0A1122] text-primary-blue font-bold">
                                                    {services.map(s => (
                                                        <option key={s.id} value={s.id} className="bg-[#0A1122] text-white py-2">{s.title}</option>
                                                    ))}
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message (Optional)</label>
                                        <textarea
                                            placeholder="Tell us about your requirements..."
                                            rows={3}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all text-sm resize-none"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full group/btn relative flex items-center justify-center py-5 bg-gradient-to-r from-primary-blue to-primary-orange rounded-xl font-black text-white uppercase tracking-[0.2em] text-sm shadow-xl hover:shadow-[0_0_40px_rgba(0,82,255,0.4)] transition-all duration-500 active:scale-95 overflow-hidden mt-10"
                                    >
                                        <span className="relative z-10 flex items-center gap-3">
                                            Send Request
                                            <FaPaperPlane size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
