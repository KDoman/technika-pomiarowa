import "./App.css";
import { NaszeUslugi } from "./assets/NaszeUsługi/NaszeUslugi";
import { Nav } from "./assets/NavigationBar/Nav";
import { ONas } from "./assets/O nas/ONas";

function App() {
  return (
    <div className="app-container">
      <Nav></Nav>
      <ONas></ONas>
      <section>
        <div className="bg-image-under-o-nas"></div>
      </section>
      <NaszeUslugi></NaszeUslugi>
    </div>
  );
}

export default App;
