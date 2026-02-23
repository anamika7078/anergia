import { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Cookie Policy - Anergia',
  description: 'Cookie policy for Anergia marketing website.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Cookie Policy"
        subtitle="This is a placeholder cookie policy page for the marketing site."
        align="left"
        className="py-14"
      />

      <section className="py-14 bg-primary-white">
        <div className="container-app">
          <div className="card p-8 prose max-w-none">
            <p>
              This page is a template. Update it based on your analytics and cookie usage before launch.
            </p>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device to help websites function and improve experiences.
            </p>
            <h2>How We Use Cookies</h2>
            <p>
              We may use cookies for essential site functionality and performance measurement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


