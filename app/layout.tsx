import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anergia - iGaming & Crypto Gaming SaaS Platform',
  description: 'Enterprise-grade iGaming and Crypto Gaming SaaS solutions. Turnkey platforms, white-label solutions, and blockchain integration for the gaming industry.',
  keywords: 'iGaming, crypto gaming, SaaS, blockchain gaming, casino platform, sportsbook, crypto casino',
  authors: [{ name: 'Anergia' }],
  metadataBase: new URL('https://anergia.com'),
  openGraph: {
    title: 'Anergia - iGaming & Crypto Gaming SaaS Platform',
    description: 'Enterprise-grade iGaming and Crypto Gaming SaaS solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Anergia - iGaming & Crypto Gaming SaaS Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anergia - iGaming & Crypto Gaming SaaS Platform',
    description: 'Enterprise-grade iGaming and Crypto Gaming SaaS solutions',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050B1B] text-white selection:bg-primary-orange/30 overflow-x-hidden`}>
        {/* Global Shaded Background Effects */}
        <div className="global-bg-effects">
          <div className="bg-blob-blue" />
          <div className="bg-blob-orange" />
        </div>

        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

