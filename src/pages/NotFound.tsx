// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] my-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative text-center px-4">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-bold leading-none mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">
          عذرًا، الصفحة اللي بتدور عليها مش موجودة أو اتغير مكانها.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            العودة للرئيسية
          </Link>
          <Link
            to="/blog"
            className="px-8 py-3.5 rounded-full text-sm font-medium border border-[#262626] text-neutral-300 hover:bg-[#161616] hover:text-white transition-all"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;