import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/data'
import { FaArrowRight } from 'react-icons/fa'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Anergia Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="min-h-screen bg-[#050B1B] pt-8 pb-32">
      {/* Header Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full mb-16 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-primary-orange font-bold text-sm mb-6 uppercase tracking-[0.2em]">
              <span>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative side glow */}
          <div className="absolute -left-20 top-0 w-40 h-40 bg-primary-blue/5 rounded-full blur-[100px]" />

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed whitespace-pre-line text-lg md:text-xl">
              {post.content}
            </div>
          </div>
        </div>

        {/* Action / Back to Blog */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 text-slate-400 hover:text-primary-orange transition-all font-bold uppercase tracking-widest text-sm"
          >
            <FaArrowRight className="rotate-180 text-xs transition-transform group-hover:-translate-x-2" />
            Back to Insights
          </Link>
        </div>
      </div>
    </article>
  )
}

