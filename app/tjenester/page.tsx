export default function Tjenester() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
            Tjenester
          </h1>
          <p className="text-blue-600 text-base">
            Veiledning og hjelp for psykologistudenter
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg text-gray-900 mb-1">Oppgaveveiledning</h2>
            <p className="text-blue-600 text-sm mb-3">
              Bachelor- og masteroppgaver
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Få profesjonell veiledning på bachelor- og masteroppgaver. Jeg hjelper deg med struktur,
              akademisk skriving, metodevalg og kildebruk.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Detaljert tilbakemelding på utkast</li>
              <li>Hjelp med oppgavestruktur og argumentasjon</li>
              <li>Veiledning i akademisk skriving</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-gray-900 mb-1">Eksamensforberedelser</h2>
            <p className="text-blue-600 text-sm mb-3">
              Målrettet eksamensstøtte
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Forbered deg grundig til eksamen med målrettet hjelp fra erfaren sensor.
              Jeg kjenner kravene og kan hjelpe deg å nå dine mål.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Gjennomgang av pensum og sentrale temaer</li>
              <li>Øvingsoppgaver med tilbakemelding</li>
              <li>Strategier for eksamensskriving</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-gray-900 mb-1">Karakterforbedring</h2>
            <p className="text-blue-600 text-sm mb-3">
              Forstå vurderingskriteriene
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Forstå hvorfor karakterene ikke når opp, og lær hva som skal til for å forbedre resultatene.
              Med min erfaring som sensor kan jeg gi deg verdifull innsikt.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Analyse av tidligere besvarelser</li>
              <li>Forståelse av vurderingskriterier</li>
              <li>Personlig tilpasset veiledning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-gray-900 mb-1">Studieteknikk</h2>
            <p className="text-blue-600 text-sm mb-3">
              Effektive læringsstrategier
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Lær effektive studieteknikker og læringsstrategier tilpasset psykologifag.
              Optimaliser studiehverdagen din og få bedre resultater.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Effektive lesemetoder</li>
              <li>Strukturering av fagstoff</li>
              <li>Tidsplanlegging og prioritering</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/kontakt"
            className="inline-block bg-blue-600 text-white px-6 py-3 font-medium text-base hover:bg-blue-700 transition-colors"
          >
            Ta kontakt for mer informasjon
          </a>
        </div>
      </div>
    </main>
  );
}
