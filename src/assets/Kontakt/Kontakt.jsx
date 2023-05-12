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
          <ul className="footer-ul-redirection">
            <li className="footer-ul-redirection-li">
              <a>O nas</a>
            </li>
            <li className="footer-ul-redirection-li">
              <a>Nasze usługi</a>
            </li>
            <li className="footer-ul-redirection-li">
              <a>Doświadczenie</a>
            </li>
            <li className="footer-ul-redirection-li">
              <a>Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="footer-div-info">
          <ul className="footer-company-info-ul">
            <li className="footer-company-info-li">
              <span className="footer-company-span">Adres</span>
              <span className="footer-company-text">
                Al. Jerozolimskie 85/21, Warszawa, 02-001
              </span>
            </li>
            <li className="footer-company-info-li">
              <span className="footer-company-span">Telefon</span>
              <span className="footer-company-text">515-551-878</span>
            </li>
            <li className="footer-company-info-li">
              <span className="footer-company-span">Mail</span>
              <span className="footer-company-text">
                technika_pomiarowa@o2.pl
              </span>
            </li>
            <li className="footer-company-info-li">
              <span className="footer-company-span">NIP</span>
              <span className="footer-company-text">9512185869</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
