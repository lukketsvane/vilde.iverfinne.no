export default function Kontakt() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
            Kontakt
          </h1>
          <p className="text-blue-600 text-base">
            Ta kontakt for en uforpliktende samtale
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-base text-gray-700 leading-relaxed">
            Jeg ser frem til å høre fra deg! Ta gjerne kontakt for en uforpliktende samtale
            om hvordan jeg kan hjelpe deg med dine studier.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-gray-900 mb-1">E-post</h2>
              <a
                href="mailto:vilde.brecke@gmail.com"
                className="text-blue-600 hover:text-green-700 transition-colors"
              >
                vilde.brecke@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-lg text-gray-900 mb-1">Telefon</h2>
              <a
                href="tel:+4748220065"
                className="text-blue-600 hover:text-green-700 transition-colors"
              >
                +47 48 22 00 65
              </a>
              <p className="text-gray-500 text-sm mt-1">
                Hverdager 09:00-17:00
              </p>
            </div>

            <div>
              <h2 className="text-lg text-gray-900 mb-1">Responstid</h2>
              <p className="text-blue-600">
                Svar innen 1-2 virkedager
              </p>
            </div>
          </div>

          <div className="border-l-2 border-blue-500 pl-4 py-2">
            <h2 className="text-lg text-gray-900 mb-2">Når du tar kontakt</h2>
            <p className="text-gray-700 mb-3">
              Fortell gjerne litt om:
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Hva du studerer og på hvilket nivå</li>
              <li>Hvilken type hjelp du trenger</li>
              <li>Eventuelle frister eller tidspunkter</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
