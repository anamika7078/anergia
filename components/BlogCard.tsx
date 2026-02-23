import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/lib/data'
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group h-full block">
      <article className="h-full flex flex-col bg-[#0A1122] rounded-3xl overflow-hidden border border-white/5 hover:border-primary-orange/30 transition-all duration-500 shadow-xl relative">

        {/* Hover Highlight Border */}
        <div className="absolute inset-0 border-2 border-primary-orange/0 group-hover:border-primary-orange/10 rounded-3xl transition-all duration-500 z-20 pointer-events-none" />

        {/* Header Image */}
        <div className="relative h-60 w-full overflow-hidden flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1122] via-[#0A1122]/20 to-transparent" />

          {/* Category/Tag Overlay */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-lg bg-primary-blue/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
              Insights
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-8 relative z-10">
          {/* Metadata Row */}
          <div className="flex items-center gap-6 mb-5 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2 group-hover:text-primary-blue transition-colors">
              <FaUser size={10} className="text-primary-blue/60" />
              {post.author}
            </div>
            <div className="flex items-center gap-2 group-hover:text-primary-orange transition-colors">
              <FaClock size={10} className="text-primary-orange/60" />
              {formattedDate}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-gradient transition-all duration-300 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow group-hover:text-slate-300 transition-colors">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary-orange group-hover:text-primary-white transition-all duration-300">
              <span className="relative">
                Read More
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-orange group-hover:w-full transition-all duration-500"></span>
              </span>
              <FaArrowRight className="text-[10px] transform transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-blue/5 blur-3xl rounded-full group-hover:bg-primary-blue/10 transition-all opacity-0 group-hover:opacity-100"></div>
      </article>
    </Link>
  )
}
