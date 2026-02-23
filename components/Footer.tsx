import Link from 'next/link'
import Image from 'next/image'
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050B1B] text-primary-white border-t border-white/5 relative overflow-hidden pt-24 pb-12">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated Top border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-orange/40 to-transparent shadow-[0_0_15px_rgba(255,138,0,0.3)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-8">
              <div className="relative w-56 h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/20260216_163214.png"
                  alt="Anergia Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-10 leading-relaxed text-sm">
              The ultimate high-performance iGaming and Crypto gaming SaaS foundation.
              Engineered for speed, scaled for global dominance.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaGithub, href: "#" },
                { icon: FaEnvelope, href: "mailto:contact@anergia.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary-orange hover:border-primary-orange hover:bg-primary-orange/5 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-orange mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {['Casino Platform', 'Betting Engine', 'Payment Gateways', 'Wallet Solutions', 'Game Aggregation'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/products`}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-primary-orange mr-0 group-hover:mr-3 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-orange mb-8">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <FaMapMarkerAlt className="text-primary-blue" />
                <span>Valley Tech Plaza, SF</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group cursor-pointer hover:text-white transition-colors">
                <FaPhoneAlt className="text-primary-blue" />
                <span>+1 (555) 234-9000</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group cursor-pointer hover:text-white transition-colors">
                <FaEnvelope className="text-primary-blue" />
                <span>hq@anergia.io</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA Column */}
          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-orange mb-8">Next Level</h4>
            <p className="text-xs text-slate-500 mb-6 font-medium italic">Ready to launch your empire?</p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-primary-blue to-primary-orange text-white font-bold transition-all hover:shadow-[0_0_30px_rgba(255,138,0,0.3)] hover:-translate-y-1"
            >
              Get Started Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-slate-500 font-medium">
            © {currentYear} ANERGIA SYSTEMS. <span className="text-primary-orange/50">ALL ACCESS SECURED.</span>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <Link href="/privacy" className="hover:text-primary-blue transition-colors">Privacy Pattern</Link>
            <Link href="/terms" className="hover:text-primary-blue transition-colors">Terms of Ops</Link>
            <Link href="/cookies" className="hover:text-primary-blue transition-colors">Cookie Vault</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
