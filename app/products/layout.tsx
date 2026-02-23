import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Products - Anergia',
    description: 'Explore our enterprise-grade iGaming and crypto gaming products. Request a demo today.',
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
