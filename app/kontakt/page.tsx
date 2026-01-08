export default function Kontakt() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
            Kontaktinfo
          </h1>
          <div className="w-24 h-1 bg-zinc-800 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white shadow-lg p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
              Ta kontakt
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed mb-8">
              Jeg ser frem til å høre fra deg! Ta gjerne kontakt for en uforpliktende samtale 
              om hvordan jeg kan hjelpe deg med dine studier.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-zinc-800 pl-6 py-3">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                E-post
              </h3>
              <a 
                href="mailto:vilde.brecke@gmail.com" 
                className="text-xl text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                vilde.brecke@gmail.com
              </a>
            </div>

            <div className="border-l-4 border-zinc-800 pl-6 py-3">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                Telefon
              </h3>
              <a 
                href="tel:+47XXXXXXXX" 
                className="text-xl text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                +47 XXX XX XXX
              </a>
              <p className="text-sm text-zinc-500 mt-1">
                (Ringetid: hverdager 09:00-17:00)
              </p>
            </div>

            <div className="border-l-4 border-zinc-800 pl-6 py-3">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                Responstid
              </h3>
              <p className="text-zinc-700">
                Jeg svarer som regel innen 1-2 virkedager.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900 mb-3">
              Når du tar kontakt
            </h3>
            <p className="text-zinc-700 mb-3">
              Fortell gjerne litt om:
            </p>
            <ul className="space-y-2 text-zinc-700">
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
