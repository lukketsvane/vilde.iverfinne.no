export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Velkommen
          </h1>
          <div className="w-16 h-1 bg-zinc-800 mb-6"></div>
        </div>
        
        <div className="bg-white border border-zinc-200 p-6 sm:p-8">
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-4">
            Er du student i psykologifag og synes det vanskelig å forstå hvorfor karakterene ikke når opp?
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-4">
            Har du en oppgave du gjerne skulle hatt ekstra veiledning og tilbakemelding på?
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 mb-6">
            Trenger du hjelp til eksamensforberedelser?
          </p>
          
          <div className="border-l-4 border-zinc-800 pl-4 py-2">
            <p className="text-lg sm:text-xl font-semibold text-zinc-900 mb-1">
              Jeg vil gjerne bistå deg
            </p>
            <p className="text-base text-zinc-600">
              - Vilde
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              Ph.d. i psykologi med flere års erfaring som sensor
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <a
            href="/kontakt"
            className="inline-block bg-zinc-900 text-white px-6 py-3 font-semibold text-base hover:bg-zinc-800 transition-colors"
          >
            Ta kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
