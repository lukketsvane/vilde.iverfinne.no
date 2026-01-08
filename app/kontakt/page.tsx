export default function Kontakt() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Kontaktinfo
          </h1>
          <div className="w-16 h-1 bg-zinc-800 mb-6"></div>
        </div>
        
        <div className="bg-white border border-zinc-200 p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4">
              Ta kontakt
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed mb-6">
              Jeg ser frem til å høre fra deg! Ta gjerne kontakt for en uforpliktende samtale 
              om hvordan jeg kan hjelpe deg med dine studier.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-zinc-800 pl-4 py-2">
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                E-post
              </h3>
              <a 
                href="mailto:vilde.brecke@gmail.com" 
                className="text-lg text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                vilde.brecke@gmail.com
              </a>
            </div>

            <div className="border-l-4 border-zinc-800 pl-4 py-2">
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                Telefon
              </h3>
              <a 
                href="tel:+47XXXXXXXX" 
                className="text-lg text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                +47 XXX XX XXX
              </a>
              <p className="text-sm text-zinc-500 mt-1">
                (Ringetid: hverdager 09:00-17:00)
              </p>
            </div>

            <div className="border-l-4 border-zinc-800 pl-4 py-2">
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                Responstid
              </h3>
              <p className="text-zinc-700">
                Jeg svarer som regel innen 1-2 virkedager.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-zinc-100">
            <h3 className="text-base font-semibold text-zinc-900 mb-2">
              Når du tar kontakt
            </h3>
            <p className="text-zinc-700 mb-2">
              Fortell gjerne litt om:
            </p>
            <ul className="space-y-1 text-zinc-700">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Hva du studerer og på hvilket nivå</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Hvilken type hjelp du trenger</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Eventuelle frister eller tidspunkter</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
