import "./NaszeUslugi.css";
import { Karta } from "./Cards/Karta";

export function NaszeUslugi() {
  return (
    <div className="nasze-uslugi-container">
      <div className="nasze-uslugi_div">
        <h1>Nasze usługi</h1>
        <div className="nasze-uslugi_div-karty">
          <div className="nasze-uslugi-mini-div-karty">
            <Karta
              p="Instalacje Elektryczne"
              src="instalacje.png"
              alt="Logo Instalacje elektryczne"
            ></Karta>
            <Karta
              p="Pomiary Elektryczne"
              src="pomiary.png"
              alt="Logo Pomiary elektryczne "
            ></Karta>
            <Karta
              p="Oświetlenie"
              src="oswietlenie.png"
              alt="Logo oświetlenie"
            ></Karta>
          </div>
          <div className="nasze-uslugi-mini-div-karty">
            <Karta
              p="Naprawa I Konserwacja"
              src="naprawa.png"
              alt="Logo Naprawa i konserwacja"
            ></Karta>
            <Karta
              p="Doradztwo energetyczne"
              src="doradztwo.png"
              alt="Logo Doradztwo"
            ></Karta>
            <Karta
              p="Modernizacja I Naprawa Bezpieczników"
              src="Modernizacja.png"
              alt="Logo Modernizacja bezpieczników"
            ></Karta>
          </div>
        </div>
      </div>
    </div>
  );
}
