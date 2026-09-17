// src/pages/Blog.tsx
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import postsData from "../data/posts.json";
import type { Post } from "../types/post";
import BlogHeader from "../component/BlogHeader";
import BlogFilters from "../component/BlogFilters";
import BlogCard from "../component/BlogCard";
import Pagination from "../component/Pagination";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const allPosts = postsData.posts as Post[];
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // قراءة الـ category من الـ URL وتحديث الـ state عند فتح الصفحة أو تغيير الـ URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory("جميع المقالات");
    }
  }, [searchParams]);

  // الفلترة
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchCategory =
        activeCategory === "جميع المقالات" || post.category === activeCategory;

      const matchSearch =
        post.title.includes(search) ||
        post.excerpt.includes(search) ||
        post.tags.some((tag) => tag.includes(search));

      return matchCategory && matchSearch;
    });
  }, [allPosts, activeCategory, search]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategory = (value: string) => {
    setActiveCategory(value);
    setCurrentPage(1);
    
    // تحديث الـ URL ليعكس التصنيف الجديد بدون إحداث إعادة تحميل للصفحة
    if (value === "جميع المقالات") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen my-20">
      <BlogHeader />

      <BlogFilters
        search={search}
        setSearch={handleSearch}
        activeCategory={activeCategory}
        setActiveCategory={handleCategory}
        posts={allPosts}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results + View Toggle */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض <span className="font-bold text-white">{filteredPosts.length}</span> مقالات
          </p>

          <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
              }`}
              title="عرض شبكي"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
              }`}
              title="عرض قائمة"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Posts */}
        {paginatedPosts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-500">
            لا توجد مقالات مطابقة لبحثك
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Blog;