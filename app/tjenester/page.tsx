export default function Tjenester() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Tjenester
          </h1>
          <div className="w-24 h-1 bg-zinc-800 dark:bg-zinc-200 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Oppgaveveiledning
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Få profesjonell veiledning på bachelor- og masteroppgaver. Jeg hjelper deg med struktur, 
              akademisk skriving, metodevalg og kildebruk.
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Detaljert tilbakemelding på utkast</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Hjelp med oppgavestruktur og argumentasjon</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Veiledning i akademisk skriving</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Eksamensforberedelser
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Forbered deg grundig til eksamen med målrettet hjelp fra erfaren sensor. 
              Jeg kjenner kravene og kan hjelpe deg å nå dine mål.
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Gjennomgang av pensum og sentrale temaer</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Øvingsoppgaver med tilbakemelding</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Strategier for eksamensskriving</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Karakterforbedring
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Forstå hvorfor karakterene ikke når opp, og lær hva som skal til for å forbedre resultatene. 
              Med min erfaring som sensor kan jeg gi deg verdifull innsikt.
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Analyse av tidligere besvarelser</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Forståelse av vurderingskriterier</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Personlig tilpasset veiledning</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Studieteknikk
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Lær effektive studieteknikker og læringsstrategier tilpasset psykologifag. 
              Optimaliser studiehverdagen din og få bedre resultater.
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Effektive lesemetoder</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Strukturering av fagstoff</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 dark:text-zinc-500 mr-2">✓</span>
                <span>Tidsplanlegging og prioritering</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/kontakt"
            className="inline-block bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Ta kontakt for mer informasjon
          </a>
        </div>
      </div>
    </main>
  );
}
