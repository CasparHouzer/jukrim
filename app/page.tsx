import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="text-white py-20 px-4" style={{ backgroundColor: 'rgb(126, 185, 244)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Wir gegen Jugendkriminalität e.V
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#3676BA]">
                Gemeinsam für eine sichere Jugend in Mittelfranken
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                Wir stärken junge Menschen, schaffen soziale Netzwerke und fördern ein respektvolles Miteinander.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
        <Image
                src="/images/hero/logo_jukrim.png"
                alt="Wir gegen Jugendkriminalität e.V. Logo"
                width={400}
                height={120}
                className="w-full max-w-md h-auto"
          priority
        />
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Mission */}
      <section id="mission" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Block */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3676BA] mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                Wir setzen uns in Westmittelfranken für Gewaltprävention im Jugendbereich ein und fördern Maßnahmen zum Aufbau eines sozialen Netzwerkes.
                <br />
                Auf Basis des Kinder- und Jugendhilfegesetzes und der Konzepte der AG Jukrim setzen wir gezielt auf:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3676BA] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Gewaltprävention im Jugendbereich</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3676BA] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Unterstützung lokaler und regionaler Initiativen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3676BA] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Präventionsprojekte an sozialen Brennpunkten</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3676BA] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Täter-Opfer-Ausgleich & professionelle Konfliktberatung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3676BA] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Aufklärung und starke Öffentlichkeitsarbeit</span>
                </li>
              </ul>
            </div>
            
            {/* Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/hero/hero.jpg"
                alt="Unsere Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wer sind wir */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3676BA] mb-12 text-center">
            Wer sind wir
          </h2>
          
          {/* Einführungstext */}
          <div className="mb-12 text-gray-700 space-y-4 text-lg leading-relaxed">
            <p>
              Der Verein „Wir gegen Jugendkriminalität e.V." wurde am 28.11.2002 gegründet und vom Finanzamt Ansbach als gemeinnützig anerkannt. Im Vereinsregister sind wir unter Nr. VR 1000 erfasst.
            </p>
            <p>
              Wir sind selbstlos tätig und verfolgen keine eigenwirtschaftlichen Ziele. Unsere Finanzen stammen aus <b>Mitgliedsbeiträgen, Zuwendungen und Spenden</b>.  Der Verein wird getragen von interessierten Bürgern und Bürgerinnen der Stadt Ansbach sowie der Landkreise Ansbach und Neustadt a.d. Aisch-Bad Windsheim
            </p>
            <p>
              Wir kooperieren mit der Arbeitsgemeinschaft (AG) JuKrim, in der die Jugendämter, Schulen, Sicherheitsbehörden, Staatsanwaltschaften, Gerichte und Polizei der Region vertreten sind.
            </p>
            <p>
              Vereinsorgane sind die Mitgliederversammlung und der Vorstand.
            </p>
          </div>

          {/* Gruppenfoto */}
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md bg-gray-100">
              <Image
                src="/images/team/team_photo.png"
                alt="Gruppenfoto"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Der Vorstand */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#3676BA] mb-8 text-center">
            Der Vorstand
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thomas */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden shadow-md mx-auto" style={{ maxWidth: '300px' }}>
                <Image
                  src="/images/team/thomas.jpg"
                  alt="Thomas Harloff"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#3676BA] mb-2 text-center">
                Thomas Harloff
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Geschäftsführender Vorsitzender
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-left">
                Als noch recht neuer Bürger von Ansbach (seit 2020) haben es mir die Stadt und die Region Westmittelfranken sehr leicht gemacht, mich einzuleben und wohlzufühlen. Ich gehöre dem Jahrgang 1982 an und bin Journalist im Bereich Autos und Mobilität. Für unseren Verein engagiere ich mich, weil für den gesellschaftlichen Zusammenhalt ehrenamtliches Engagement unabdingbar ist und dem Thema Jugendkriminalität präventiv begegnet. Der Verein bringt beides zusammen, weshalb ich überzeugt bin, hier viel Gutes bewirken zu können.
              </p>
            </div>

            {/* Markus */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden shadow-md mx-auto" style={{ maxWidth: '300px' }}>
                <Image
                  src="/images/team/markus.jpg"
                  alt="Markus Bucka"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#3676BA] mb-2 text-center">
                Markus Bucka
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                1. Vorsitzender
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-left">
                Vereinsmitglied von „Wir gegen Jugendkriminalität e.V." (JuKrim) bin ich seit 2014. Im Jahr 2020 wurde ich erneut in den Stadtrat Ansbach gewählt und dann auch zum 2. Bürgermeister ernannt. Dadurch habe ich satzungsgemäß auch die Mitarbeit im Vorstand von JuKrim e.V. angenommen und wurde dann von der Mitgliederversammlung zum 1. Vorsitzenden des Vereins gewählt. Ein großes Anliegen ist mir dieser Verein, da es äußerst wichtig ist, dass durch vielerlei Maßnahmen die Kriminalität von Jugendlichen möglichst frühzeitig verhindert wird. Dafür engagieren wir uns als Verein gerne finanziell, indem wir Veranstaltungen von Kindergärten, Schulen und freien Trägern unterstützen, die mit dieser Zielsetzung vereinbar sind. Als Verein selbst führen wir aber keine dieser Kurse etc. durch.
              </p>
            </div>

            {/* Sandra */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden shadow-md mx-auto" style={{ maxWidth: '300px' }}>
                <Image
                  src="/images/team/sandra.jpg"
                  alt="Sandra Kilian"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#3676BA] mb-2 text-center">
                Sandra Kilian
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Amtsleitung Amt für Familie und Jugend der Stadt Ansbach
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-left">
                Ich bin gebürtige Ansbacherin und kenne die Strukturen in und außerhalb der Stadtverwaltung sehr gut. In meiner Funktion als Amtsleiterin bekomme ich die Probleme und Bedarfe der Kinder, Jugendlichen und Familien in Ansbach tagtäglich mit. Als Verfechterin präventiver Maßnahmen finde ich es toll, mich im Verein „Wir-gegen-Jugendkriminalität" engagieren zu können. Prävention von Jugendkriminalität ist ein zentrales Anliegen von Gesellschaft, Politik, Schulen und Sozialen Einrichtungen. Als Jugendamt können wir hierbei präventiv unterstützen, wie z.B, durch den Einsatz unserer Streetworkerin oder unseres Jugendzentrums, das für alle Jugendlichen offen ist und auch für benachteiligte Jugendliche Freizeitangebote bereithält. Ferner haben wir an den Ansbacher Grund- und Mittelschulen Jugendsozialarbeiter im Einsatz, die den Kindern- und Jugendlichen in den unterschiedlichsten Problemlagen zur Seite stehen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Projekte */}
      <section id="projekte" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3676BA] mb-12 text-center">
            Unsere Projekte
          </h2>
          <div className="space-y-8">
            {/* Gründung */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3676BA] mb-3">
                Neuer Vorstand 2024-2027
              </h3>
              <p className="text-gray-700 mb-4">
              Unser Verein „Wir gegen Jugendkriminalität e.V.“ wählt neuen Geschäftsführer und Vorstand.
              </p>
              <a
                href="/pdfs/gründung.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
              >
                PDF herunterladen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Satzung */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3676BA] mb-3">
                Satzung
              </h3>
              <p className="text-gray-700 mb-4">
                Unsere aktuelle Vereinssatzung finden Sie hier.
              </p>
              <a
                href="/pdfs/satzung.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
              >
                PDF herunterladen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Teen Court */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3676BA] mb-3">
                "Teen-Court"
              </h3>
              <p className="text-gray-700 mb-4">
              „JuKrim" unterstützt die Schülerrichter des Projekts „Teen-Court":
              Staatsanwaltschaft, Polizei und Kastanienhof arbeiten hier eng zusammen
              </p>
              <a
                href="/pdfs/teen_court.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
              >
                PDF herunterladen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Benefizkonzert */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3676BA] mb-3">
                Benefizkonzert mit dem bayrischen Polizeiorchester
              </h3>
              <p className="text-gray-700 mb-4">
              Anlässlich seines 20-jährigen Bestehens hat der Verein „Wir gegen Jugendkriminalität e.V.“ in Zusammenarbeit mit dem Bayrischen Polizeiorchester ein Benefizkonzert veranstaltet.
              </p>
              <a
                href="/pdfs/benefizkonzert_polizei.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
              >
                PDF herunterladen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
        </div>

            {/* Selbstbehauptungskurs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3676BA] mb-3">
                Selbstbehauptungskurs mit Grundschülern gefördert
              </h3>
              <p className="text-gray-700 mb-4">
              Zweit- bis Viertklässler trainieren auf spielerische Art hilfreiche Abwehrtechniken in der <b>Grundschule Oberscheckenbach</b>
              </p>
              <a
                href="/pdfs/selbstbehauptungskurs.pdf"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
              >
                PDF herunterladen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Förderprojekte Landkreis Ansbach */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3676BA] mb-3">
                Bekanntgabe weiterer erfolgreicher Förderprojekte im Landkreis Ansbach
              </h3>
              <p className="text-gray-700 mb-4">
              Unser Verein unterstützt finanziell Präventionskurse u.a. in Kindergärten, Schulen, sozialen Einrichtungen
              </p>
              <a
                href="/pdfs/praeventionskurse.pdf"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center text-[#3676BA] hover:text-[#E1B84F] font-semibold transition-colors"
              >
                PDF herunterladen
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mitglied werden */}
      <section id="mitglied" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3676BA] mb-8 text-center">
            Mitglied werden und uns unterstützen
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Unterstützen Sie uns bei unserer Mission! Als gemeinnütziger Verein sind wir auf engagierte Mitglieder angewiesen, die sich für eine sichere und gewaltfreie Zukunft unserer Jugend einsetzen. Werden Sie Teil unseres Netzwerks und helfen Sie uns dabei, Präventionsprojekte zu fördern, lokale Initiativen zu unterstützen und jungen Menschen Perspektiven zu eröffnen. Gemeinsam können wir einen nachhaltigen Beitrag zur Reduzierung von Jugendkriminalität in Mittelfranken leisten.
          </p>
          <a
            href="/pdfs/mittgliedsantrag.pdf"
            download="mittgliedsantrag.pdf"
            className="inline-flex items-center bg-[#3676BA] text-white px-6 py-3 rounded-lg hover:bg-[#2a5a8f] font-semibold transition-colors"
          >
            Mitgliedsantrag herunterladen
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3676BA] mb-8 text-center">
            Kontakt
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bei Interesse an unserem Verein, offenen Fragen oder Förderbedarf für gemeinsame Projekte gegen Jugendkriminalität, nehmen Sie gerne Kontakt mit uns auf:
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-[#3676BA] mb-4">
                  Wir gegen Jugendkriminalität e.V.
                </h3>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3676BA] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#E1B84F]">Wir gegen Jugendkriminalität e.V.</h3>
              <p className="text-gray-100 mb-2">
                Der Verein wurde am 28.11.2002 gegründet und vom Finanzamt Ansbach als gemeinnützig anerkannt.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#E1B84F]">Spendenkonto</h3>
              <p className="text-gray-100 mb-1">Sparkasse Ansbach</p>
              <p className="text-gray-100 mb-1">IBAN: DE05 7655 0000 0000 2693 81</p>
              <p className="text-gray-100 mb-1">BIC: BYLADEM1ANS</p>
              <p className="text-gray-100">Vereinsregister Nr. VR 1000</p>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center">
            <Link
              href="/impressum"
              className="text-[#E1B84F] hover:text-white transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
