import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Anergia',
  description: 'Get in touch with Anergia to learn how we can help transform your gaming business with our iGaming and crypto gaming solutions.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

