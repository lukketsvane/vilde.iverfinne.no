export default function Tjenester() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Tjenester
          </h1>
          <div className="w-16 h-1 bg-zinc-800 mb-6"></div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white border border-zinc-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Oppgaveveiledning
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed mb-3">
              Få profesjonell veiledning på bachelor- og masteroppgaver. Jeg hjelper deg med struktur, 
              akademisk skriving, metodevalg og kildebruk.
            </p>
            <ul className="space-y-1 text-zinc-600">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Detaljert tilbakemelding på utkast</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Hjelp med oppgavestruktur og argumentasjon</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Veiledning i akademisk skriving</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-zinc-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Eksamensforberedelser
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed mb-3">
              Forbered deg grundig til eksamen med målrettet hjelp fra erfaren sensor. 
              Jeg kjenner kravene og kan hjelpe deg å nå dine mål.
            </p>
            <ul className="space-y-1 text-zinc-600">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Gjennomgang av pensum og sentrale temaer</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Øvingsoppgaver med tilbakemelding</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Strategier for eksamensskriving</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-zinc-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Karakterforbedring
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed mb-3">
              Forstå hvorfor karakterene ikke når opp, og lær hva som skal til for å forbedre resultatene. 
              Med min erfaring som sensor kan jeg gi deg verdifull innsikt.
            </p>
            <ul className="space-y-1 text-zinc-600">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Analyse av tidligere besvarelser</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Forståelse av vurderingskriterier</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Personlig tilpasset veiledning</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-zinc-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Studieteknikk
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed mb-3">
              Lær effektive studieteknikker og læringsstrategier tilpasset psykologifag. 
              Optimaliser studiehverdagen din og få bedre resultater.
            </p>
            <ul className="space-y-1 text-zinc-600">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Effektive lesemetoder</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Strukturering av fagstoff</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">✓</span>
                <span>Tidsplanlegging og prioritering</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/kontakt"
            className="inline-block bg-zinc-900 text-white px-6 py-3 font-semibold text-base hover:bg-zinc-800 transition-colors"
          >
            Ta kontakt for mer informasjon
          </a>
        </div>
      </div>
    </main>
  );
}
