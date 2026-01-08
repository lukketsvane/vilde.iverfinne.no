export default function OmMeg() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Om meg
          </h1>
          <div className="w-16 h-1 bg-zinc-800 mb-6"></div>
        </div>
        
        <div className="bg-white border border-zinc-200 p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">
              Vilde Brecke
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed mb-3">
              Ph.d. i psykologi med solid erfaring innen undervisning, veiledning og sensurering.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Utdanning
            </h3>
            <ul className="space-y-2 text-zinc-700">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Ph.d. i psykologi</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Mastergrad i psykologi</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Erfaring
            </h3>
            <ul className="space-y-2 text-zinc-700">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Flere års erfaring som sensor på universitets- og høyskolenivå</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Veiledning av bachelor- og masterstudenter</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Undervisning i ulike psykologifag</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Kompetanse
            </h3>
            <ul className="space-y-2 text-zinc-700">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Karakterforbedring og eksamensoppfølging</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Oppgaveveiledning og tilbakemelding</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Akademisk skriving og struktur</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span>Studieteknikk og læringsstrategier</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
