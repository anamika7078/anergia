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

      <section className="py-24 bg-[#0A1122]">
        <div className="container-app">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 prose prose-invert max-w-none">
            <p className="text-slate-300">
              These terms are provided as a template for your legal team to finalize before
              production launch.
            </p>
            <h2 className="text-white">Use of Website</h2>
            <p className="text-slate-400">
              The website is provided for informational purposes. Content may change without notice.
            </p>
            <h2 className="text-white">Disclaimer</h2>
            <p className="text-slate-400">
              Anergia provides software solutions for operators. This marketing site does not provide
              gambling services.
            </p>
            <h2 className="text-white">Contact</h2>
            <p className="text-slate-400">
              For terms questions, contact <a href="mailto:contact@anergia.com" className="text-primary-orange hover:text-primary-blue">contact@anergia.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


