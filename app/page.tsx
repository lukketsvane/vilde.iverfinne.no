export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
            Velkommen
          </h1>
          <p className="text-green-600 text-base">
            Psykologhjelp for studenter
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              Er du student i psykologifag og synes det vanskelig å forstå hvorfor karakterene ikke når opp?
            </p>

            <p className="text-base leading-relaxed text-gray-700 mb-4">
              Har du en oppgave du gjerne skulle hatt ekstra veiledning og tilbakemelding på?
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Trenger du hjelp til eksamensforberedelser?
            </p>
          </div>

          <div className="border-l-2 border-green-500 pl-4 py-2">
            <p className="text-lg text-gray-900 mb-1">
              Jeg vil gjerne bistå deg
            </p>
            <p className="text-green-600">
              - Vilde
            </p>
            <p className="text-sm text-green-600 mt-1">
              Ph.d. i psykologi med flere års erfaring som sensor
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/kontakt"
            className="inline-block bg-green-500 text-white px-6 py-3 font-medium text-base hover:bg-green-600 transition-colors"
          >
            Ta kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
