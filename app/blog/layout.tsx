import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog - Anergia',
    description: 'Latest insights, trends, and updates about iGaming and crypto gaming technology.',
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
