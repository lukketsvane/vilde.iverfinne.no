import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contact links */}
        <div className="flex flex-col items-end gap-2 mb-6">
          <a
            href="mailto:vilde.brecke@gmail.com"
            className="text-white/90 hover:text-white transition-colors"
          >
            E-post vilde.brecke@gmail.com
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-center pt-4 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>NO</span>
          </div>
          <div className="text-white/80">
            {currentYear} &copy; Vilde Brecke
          </div>
        </div>
      </div>
    </footer>
  );
}
