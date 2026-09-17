// src/component/Categories.tsx
import { Link } from "react-router-dom";
import postsData from "../data/posts.json";
import type { Post } from "../types/post";
import { FaSun, FaUser, FaCamera } from "react-icons/fa";
import { FaMountainSun, FaSliders } from "react-icons/fa6";
const Categories = () => {
  const posts = postsData.posts as Post[];

  // حساب عدد المقالات في كل تصنيف
  const categories = [
    {
      name: "إضاءة",
      icon: (
        <FaSun className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      name: "بورتريه",
      icon: (
        <FaUser className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
      gradient: "from-orange-600 to-orange-400",
    },
    {
      name: "مناظر طبيعية",
      icon: (
        <FaMountainSun className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      name: "تقنيات",
      icon: (
        <FaSliders className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      name: "معدات",
      icon: (
        <FaCamera className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
      gradient: "from-orange-500 to-yellow-500",
    },
  ].map((cat) => ({
    ...cat,
    count: posts.filter((post) => post.category === cat.name).length,
  }));

  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[#262626] bg-[#161616]/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">
              التصنيفات
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            استكشف حسب الموضوع
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/blog?category=${category.name}`}
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  {category.icon}
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  {category.name}
                </h3>

                {/* Count */}
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  {category.count} مقالة
                </p>

                {/* Arrow */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-white rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
