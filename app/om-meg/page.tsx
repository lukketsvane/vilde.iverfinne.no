import Image from "next/image";

export default function OmMeg() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="flex-shrink-0">
            <Image
              src="https://i.ibb.co/Zzj1jL3W/IMG-8290.jpg"
              alt="Vilde Brecke"
              width={200}
              height={250}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
              Vilde Brecke
            </h1>
            <p className="text-green-600 text-base">
              Ph.d. i psykologi
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-base text-gray-700 leading-relaxed">
            Jeg er utdannet ph.d. i psykologi med solid erfaring innen undervisning,
            veiledning og sensurering. I min praksis hjelper jeg studenter med å forbedre
            sine akademiske ferdigheter og oppnå bedre resultater.
          </p>

          <div>
            <h2 className="text-lg text-gray-900 mb-3">Utdanning</h2>
            <div className="space-y-2">
              <div>
                <p className="text-gray-900">Ph.d. i psykologi</p>
              </div>
              <div>
                <p className="text-gray-900">Mastergrad i psykologi</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg text-gray-900 mb-3">Erfaring</h2>
            <div className="space-y-2">
              <div>
                <p className="text-gray-900">Sensor på universitets- og høyskolenivå</p>
                <p className="text-green-600 text-sm">Flere års erfaring</p>
              </div>
              <div>
                <p className="text-gray-900">Veiledning av studenter</p>
                <p className="text-green-600 text-sm">Bachelor- og masternivå</p>
              </div>
              <div>
                <p className="text-gray-900">Undervisning</p>
                <p className="text-green-600 text-sm">Ulike psykologifag</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg text-gray-900 mb-3">Kompetanse</h2>
            <div className="space-y-2">
              <div>
                <p className="text-gray-900">Karakterforbedring og eksamensoppfølging</p>
              </div>
              <div>
                <p className="text-gray-900">Oppgaveveiledning og tilbakemelding</p>
              </div>
              <div>
                <p className="text-gray-900">Akademisk skriving og struktur</p>
              </div>
              <div>
                <p className="text-gray-900">Studieteknikk og læringsstrategier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
