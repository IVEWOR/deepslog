import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-slate-500 text-sm text-left">
          © 2026 deepakj. - Shopify Plus Developer
        </p>
        {/* Copyright */}
        {/* <p className="text-slate-500 text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} - Built with Next.js - Free to copy
          this design
        </p> */}

        {/* Essential Links & Back to Top */}
        <div className="flex items-center gap-6">
          <Link
            href="/agency"
            className="text-slate-500 hover:text-indigo-400 text-sm transition-colors font-medium"
          >
            Agency Partners
          </Link>

          {/* Subtle separator */}
          <span className="text-slate-700 hidden sm:inline">|</span>

          <a
            href="https://linkedin.com/in/thedeepakjangra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 text-sm transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/IVEWOR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 text-sm transition-colors font-medium"
          >
            GitHub
          </a>

          {/* Subtle separator */}
          <span className="text-slate-700 hidden sm:inline">|</span>

          <a
            href="#"
            className="text-slate-500 hover:text-white text-sm font-medium transition-colors"
            aria-label="Back to top"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
