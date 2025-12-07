import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-[#3676BA] mb-8">Impressum</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-[#3676BA] mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">
              <strong>Wir gegen Jugendkriminalität e.V.</strong>
            </p>
            <p className="mb-2">
            Thomas Harloff
            <br />
            Dornberg 112E
            <br />
            91522 Ansbach
            <br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#3676BA] mb-4">Kontakt</h2>
            <p className="mb-2">
              E-Mail: info@jukrim.de
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#3676BA] mb-4">Registereintrag</h2>
            <p className="mb-2">
              Eintragung im Vereinsregister.
            </p>
            <p className="mb-2">
              Registernummer: VR 1000
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#3676BA] mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-2">
              Thomas Harloff & Adrian Bucka
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#3676BA] mb-4">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}


