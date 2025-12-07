import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Navigation />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-[#3676BA] mb-8">Kontakt</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Bei Interesse an unserem Verein, offenen Fragen oder gemeinsamen Projekten, nehmen Sie gerne Kontakt mit uns auf:
          </p>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-[#3676BA] mb-4">
                Wir gegen Jugendkriminalität e.V.
              </h2>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-[#3676BA]">
                Thomas Harloff
              </p>
              <p className="text-lg">
                Dornberg 112E
              </p>
              <p className="text-lg">
                91522 Ansbach
              </p>
              <p className="text-lg">
                E-Mail: <a href="mailto:info@jukrim.de" className="text-[#3676BA] hover:text-[#E1B84F] transition-colors">info@jukrim.de</a>
              </p>
            </div>
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

