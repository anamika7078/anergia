import { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Terms of Service - Anergia',
  description: 'Terms of service for Anergia marketing website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Terms of Service"
        subtitle="This is a placeholder terms page for the marketing site."
        align="left"
        className="py-14"
      />

      <section className="py-14 bg-primary-white">
        <div className="container-app">
          <div className="card p-8 prose max-w-none">
            <p>
              These terms are provided as a template for your legal team to finalize before
              production launch.
            </p>
            <h2>Use of Website</h2>
            <p>
              The website is provided for informational purposes. Content may change without notice.
            </p>
            <h2>Disclaimer</h2>
            <p>
              Anergia provides software solutions for operators. This marketing site does not provide
              gambling services.
            </p>
            <h2>Contact</h2>
            <p>
              For terms questions, contact <a href="mailto:contact@anergia.com">contact@anergia.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


