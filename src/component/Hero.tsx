import { Link } from "react-router-dom";
import { FaNewspaper, FaUsers, FaFolderOpen, FaPenNib } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] my-20 flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#262626] bg-[#161616]/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">
              مرحباً بك في عدسة
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              فن
            </span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all group"
            >
              <span>استكشف المقالات</span>
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-[#262626] text-neutral-300 hover:bg-[#161616] hover:text-white transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>اعرف المزيد</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              {
                icon: <FaNewspaper className="text-2xl text-orange-500" />,
                value: "+50",
                label: "مقالة",
              },
              {
                icon: <FaUsers className="text-2xl text-orange-500" />,
                value: "+10ألف",
                label: "قارئ",
              },
              {
                icon: <FaFolderOpen className="text-2xl text-orange-500" />,
                value: "4",
                label: "تصنيفات",
              },
              {
                icon: <FaPenNib className="text-2xl text-orange-500" />,
                value: "6",
                label: "كاتب",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#161616]/60 border border-[#262626] rounded-2xl p-4 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-1">{stat.icon}</div>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
