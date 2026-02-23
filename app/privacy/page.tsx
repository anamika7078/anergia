import { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Privacy Policy - Anergia',
  description: 'Privacy policy for Anergia marketing website.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Privacy Policy"
        subtitle="This is a placeholder policy page for the marketing site."
        align="left"
        className="py-14"
      />

      <section className="py-14 bg-primary-white">
        <div className="container-app">
          <div className="card p-8 prose max-w-none">
            <p>
              Anergia respects your privacy. This page is provided as a template for your legal
              team to finalize before production launch.
            </p>
            <h2>Information We Collect</h2>
            <p>
              Contact form submissions may include name, email, company, and message content.
            </p>
            <h2>How We Use Information</h2>
            <p>
              We use submitted information to respond to inquiries and improve our services.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy questions, contact <a href="mailto:contact@anergia.com">contact@anergia.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


