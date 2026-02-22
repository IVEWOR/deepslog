import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-slate-900 tracking-tight"
        >
          Deepak<span className="text-indigo-600">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link
            href="/agency"
            className="hover:text-indigo-600 transition-colors"
          >
            agency
          </Link>
          <Link
            href="/rescue"
            className="hover:text-indigo-600 transition-colors"
          >
            rescue
          </Link>
          <Link
            href="/work"
            className="hover:text-indigo-600 transition-colors"
          >
            work
          </Link>
          <Link
            href="/about"
            className="hover:text-indigo-600 transition-colors"
          >
            about
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
