import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/data'

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
    <article className="min-h-screen pt-8 pb-16">
      {/* Header Image */}
      <div className="relative h-64 md:h-96 w-full mb-8 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 lg:px-8 pb-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-primary-white/80">
              {formattedDate} • {post.author}
            </p>
            <h1 className="mt-2 text-2xl md:text-4xl font-bold text-primary-white shimmer-underline">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-white rounded-xl shadow-lg p-8 md:p-12 hover-lift">
          <div className="prose prose-lg max-w-none">
            <div className="text-primary-dark/80 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center text-primary-blue hover:text-primary-orange transition-colors font-semibold"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </article>
  )
}

