export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
            Velkommen
          </h1>
          <div className="w-24 h-1 bg-zinc-800 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white shadow-lg p-8 sm:p-12">
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 mb-6">
            Er du student i psykologifag og synes det vanskelig å forstå hvorfor karakterene ikke når opp?
          </p>
          
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 mb-6">
            Har du en oppgave du gjerne skulle hatt ekstra veiledning og tilbakemelding på?
          </p>
          
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 mb-8">
            Trenger du hjelp til eksamensforberedelser?
          </p>
          
          <div className="border-l-4 border-zinc-800 pl-6 py-2">
            <p className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
              Jeg vil gjerne bistå deg
            </p>
            <p className="text-lg text-zinc-600">
              - Vilde
            </p>
            <p className="text-sm text-zinc-500 mt-2">
              Ph.d. i psykologi med flere års erfaring som sensor
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/kontakt"
            className="inline-block bg-zinc-900 text-white px-8 py-4 font-semibold text-lg hover:bg-zinc-800 transition-colors"
          >
            Ta kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
