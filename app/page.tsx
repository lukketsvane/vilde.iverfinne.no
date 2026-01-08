export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Velkommen
          </h1>
          <div className="w-24 h-1 bg-zinc-800 dark:bg-zinc-200 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 sm:p-12">
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6">
            Er du student i psykologifag og synes det vanskelig å forstå hvorfor karakterene ikke når opp?
          </p>
          
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6">
            Har du en oppgave du gjerne skulle hatt ekstra veiledning og tilbakemelding på?
          </p>
          
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mb-8">
            Trenger du hjelp til eksamensforberedelser?
          </p>
          
          <div className="border-l-4 border-zinc-800 dark:border-zinc-200 pl-6 py-2">
            <p className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Jeg vil gjerne bistå deg
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              - Vilde
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
              Ph.d. i psykologi med flere års erfaring som sensor
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/kontakt"
            className="inline-block bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Ta kontakt
          </a>
        </div>
      </div>
    </main>
  );
}
