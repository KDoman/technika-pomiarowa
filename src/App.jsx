import "./App.css";
import { Doswiadczenie } from "./assets/Doswiadczenie/Doswiadczenie";
import { Kontakt } from "./assets/Kontakt/Kontakt";
import { NaszeUslugi } from "./assets/NaszeUsługi/NaszeUslugi";
import { Nav } from "./assets/NavigationBar/Nav";
import { ONas } from "./assets/ONas/ONas";
import { Telefon } from "./assets/Telefon/Telefon";

function App() {
  return (
    <div className="app-container">
      <Telefon></Telefon>
      <Nav></Nav>
      <ONas></ONas>
      <section>
        <div className="bg-image-under-o-nas"></div>
      </section>
      <NaszeUslugi></NaszeUslugi>
      <section>
        <div className="bg-image-under-uslugi"></div>
      </section>
      <Doswiadczenie></Doswiadczenie>
      <section>
        <div className="bg-image-under-doswiadczenie"></div>
      </section>
      <Kontakt></Kontakt>
    </div>
  );
}

export default App;
