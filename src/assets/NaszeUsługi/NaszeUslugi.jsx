import "./NaszeUslugi.css";
import { Karta } from "./Cards/Karta";

export function NaszeUslugi() {
  return (
    <div className="nasze-uslugi-container">
      <div className="nasze-uslugi_div">
        <h1 className="nasze-uslugi-h1">Nasze usługi</h1>
        <div className="nasze-uslugi_div-karty">
          <div className="nasze-uslugi-mini-div-karty">
            <Karta
              title="Instalacje Elektryczne"
              src="instalacje.png"
              alt="Logo Instalacje elektryczne"
              p="Gwarancja solidności instalacji elektrycznej dostosowanej do Twoich indywidualnych potrzeb"
            ></Karta>
            <Karta
              title="Pomiary Elektryczne"
              src="pomiary.png"
              alt="Logo Pomiary elektryczne "
              p="Kompleksowe pomiary w obiektach mieszkalnych, komercyjnych i przemysłowych"
            ></Karta>
            <Karta
              title="Oświetlenie"
              src="oswietlenie.png"
              alt="Logo oświetlenie"
              p="Montaż oświetlenia zgodnie z najwyższymi standardami.  Dbałość o szczegóły i estetykę"
            ></Karta>
          </div>
          <div className="nasze-uslugi-mini-div-karty">
            <Karta
              title="Indukcja"
              src="indukcja.png"
              alt="Logo indukcja"
              p="Podłączenie indukcji, zapewniając optymalne działanie i pełną zgodność z normami elektrycznymi"
            ></Karta>
            <Karta
              title="Przyłącza Elektryczne"
              src="przylacze.png"
              alt="Logo przyłącze"
              p="Prowadzenie kabli, montaż zabezpieczeń oraz licznika"
            ></Karta>
            <Karta
              title="Montaż Gniazd I Włączników"
              src="gniazdo.png"
              alt="Logo gniazda"
              p="Bezpieczeństwo, staranność w układaniu przewodów, poprawne podłączenie i estetyczne wykończenie"
            ></Karta>
          </div>
          <div className="nasze-uslugi-mini-div-karty">
            <Karta
              title="Naprawa I Konserwacja"
              src="naprawa.png"
              alt="Logo Naprawa i konserwacja"
              p="Diagnoza i usuwanie usterek, oraz przeprowadzanie regularnych przeglądów i konserwacji"
            ></Karta>
            <Karta
              title="Doradztwo energetyczne"
              src="doradztwo.png"
              alt="Logo Doradztwo"
              p="Analiza zużycia energii, ocena wydajności urządzeń i rozwiązania mające na celu obniżenie kosztów"
            ></Karta>
            <Karta
              title="Modernizacja I Naprawa Bezpieczników"
              src="Modernizacja.png"
              alt="Logo Modernizacja bezpieczników"
              p="Modernizacja, diagnoza i wymiana bezpieczników"
            ></Karta>
          </div>
        </div>
      </div>
    </div>
  );
}
