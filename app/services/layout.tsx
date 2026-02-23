import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services - Anergia',
    description: 'Comprehensive iGaming and Crypto Gaming services including turnkey platforms, white-label solutions, blockchain integration, and more.',
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
