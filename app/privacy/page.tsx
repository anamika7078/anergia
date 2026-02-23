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

      <section className="py-24 bg-[#0A1122]">
        <div className="container-app">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 prose prose-invert max-w-none">
            <p className="text-slate-300">
              Anergia respects your privacy. This page is provided as a template for your legal
              team to finalize before production launch.
            </p>
            <h2 className="text-white">Information We Collect</h2>
            <p className="text-slate-400">
              Contact form submissions may include name, email, company, and message content.
            </p>
            <h2 className="text-white">How We Use Information</h2>
            <p className="text-slate-400">
              We use submitted information to respond to inquiries and improve our services.
            </p>
            <h2 className="text-white">Contact</h2>
            <p className="text-slate-400">
              For privacy questions, contact <a href="mailto:contact@anergia.com" className="text-primary-orange hover:text-primary-blue">contact@anergia.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


