import "./Kontakt.css";

export function Kontakt() {
  return (
    <div className="kontakt-container">
      <footer>
        <h1>Kontakt</h1>
        <h3>
          Skontaktuj się z nami!
          <br />
          <br />
          Naszym celem jest zapewnienie Ci bezpieczeństwa, oszczędności i
          wygody, gwarantując jednocześnie wysoką jakość wykonania usług.
          <br />
          <br />
          Skorzystaj z naszych usług elektrycznych i dołącz do grona
          zadowolonych klientów.
        </h3>
      </footer>
      <div className="footer-div">
        <div className="footer-div-info">
          <img src="Logo.png" alt="Technika pomiarowa Logo"></img>
        </div>
        <div className="footer-div-info">
          <ul>
            <li>
              <span className="footer-span">Adres</span>
              <span className="footer-text">
                Al. Jerozolimskie 85/21, Warszawa, 02-001
              </span>
            </li>
            <li>
              <span className="footer-span">Telefon</span>
              <span className="footer-text">515-551-878</span>
            </li>
            <li>
              <span className="footer-span">Mail</span>
              <span className="footer-text">technika_pomiarowa@o2.pl</span>
            </li>
            <li>
              <span className="footer-span">NIP</span>
              <span className="footer-text">9512185869</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
