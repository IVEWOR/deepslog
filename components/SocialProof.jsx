export default function SocialProof() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20">
      <div className="animate-fade-in-up [animation-delay:700ms] flex flex-col items-center">
        {/* Top: Trusted By Text */}
        <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center">
          Trusted by agencies and startups to deliver
        </p>

        {/* Middle: Logo Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 lg:gap-x-16 mb-10 w-full opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo Placeholders (Replace text with your actual SVGs or Image tags later) */}
          <div className="font-bold text-xl tracking-tighter text-slate-800">
            NXPRO
          </div>
          <div className="font-semibold text-xl text-slate-800">
            GRAYMATTERS
          </div>
          <div className="font-light font-serif tracking-widest text-xl text-slate-800">
            FAIRE
          </div>
          <div className="font-black text-xl text-slate-800 uppercase tracking-tight">
            Merkbart
          </div>

          {/* "+50 more" Badge */}
          <div className="flex items-center justify-center px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-500">
            +50 MORE
          </div>
        </div>

        {/* Bottom: Testimonial Card */}
        <div className="relative max-w-3xl w-full bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-xl shadow-indigo-100/10">
          {/* Decorative Quote Icon in the background */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-indigo-100 opacity-50 pointer-events-none">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-4">
              "He built our web app from scratch, both backend and frontend.
              Very happy with the result—quick and excellent at finding
              solutions to complex issues."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                FJ
              </div>
              <p className="text-sm font-bold text-slate-900">
                Filip J{" "}
                <span className="text-slate-400 font-normal">| MERKBART</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
