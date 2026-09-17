// src/component/BlogCard.tsx
import { Link } from "react-router-dom";
import type { Post } from "../types/post";

interface BlogCardProps {
  post: Post;
  viewMode?: "grid" | "list";
}

const BlogCard = ({ post, viewMode = "grid" }: BlogCardProps) => {
  if (viewMode === "list") {
    // شكل القائمة (List)
    return (
      <article className="group bg-[#161616] rounded-2xl border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500">
        <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-6 flex flex-col justify-center flex-1">
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
              {post.title}
            </h3>
            <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-white">{post.author.name}</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // شكل الشبكة (Grid) - الافتراضي
  return (
    <article className="group bg-[#161616] rounded-2xl border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>{post.date}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
              />
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <svg
                className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;