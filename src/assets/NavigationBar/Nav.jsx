import "./Nav.css";

export function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-container_nav-bar">
        <img src="Logo.png" className="nav-container_nav-bar-img"></img>
        <ul className="nav-container_nav-bar-ul">
          <li>
            <a>O nas</a>
          </li>
          <li>
            <a>Nasze usługi</a>
          </li>
          <li>
            <a>Doświadczenie</a>
          </li>
          <li>
            <a>Kontakt</a>
          </li>
        </ul>
      </div>
      <section className="nav-container_under-nav-section">
        <div className="nav-container_under-nav-div">
          <h1 className="nav-container_under-nav-div-h1">Technika pomiarowa</h1>
          <p className="nav-container_under-nav-div-p">
            Przeglądy obiektów budowlanych/ pomiary elektryczne/ instalatorstwo
          </p>
        </div>
      </section>
    </nav>
  );
}
