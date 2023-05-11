import "./Doswiadczenie.css";
import { Animacja } from "./Animacja/Animacja";

export function Doswiadczenie() {
  return (
    <div className="doswiadczenie-container">
      <h1 className="doswiadczenie-h1">Doświadczenie</h1>
      <div className="doswiadczenie-div-animation">
        <div className="doswiadczenie-div-animation-wrap">
          <div className="div-animation">
            <Animacja text="5"></Animacja>
            <p>Lat doświadczenia</p>
          </div>
          <div className="div-animation">
            <Animacja text="1000"></Animacja>
            <p>Wykonanych usług</p>
          </div>
        </div>
        <div className="doswiadczenie-div-animation-wrap">
          <div className="div-animation">
            <Animacja text="500"></Animacja>
            <p>Rekomandacji</p>
          </div>
          <div className="div-animation">
            <Animacja text="1000"></Animacja>
            <p>Zadowolonych klientów</p>
          </div>
        </div>
      </div>
      <div className="doswiadczenie-div">
        <p className="doswiadczenie-p">
          Firma elektryczna Technika pomiarowa została założona w 2018 roku i od
          tego czasu zdobyła reputację jako solidny dostawca usług
          elektrycznych. Nasze doświadczenie, zadowolenie klientów i dbałość o
          szczegóły stanowią fundamenty naszej działalności.
        </p>
        <p className="doswiadczenie-p">
          Naszym celem jest nie tylko zadowolenie klientów, ale także
          przekraczanie ich oczekiwań. Dlatego stawiamy na wysoką jakość
          wykonywanych prac, staranne planowanie i dbałość o szczegóły.
          Podchodzimy do każdego zlecenia indywidualnie, analizując potrzeby
          klienta i oferując najlepsze rozwiązania.
        </p>
        <p className="doswiadczenie-p">
          Jesteśmy dumni z pozytywnych opinii i satysfakcji, które otrzymujemy
          od naszych klientów. Dzięki naszemu podejściu skoncentrowanemu na
          jakości i zadowoleniu klientów, budujemy długotrwałe relacje oparte na
          zaufaniu i profesjonalizmie.
        </p>
      </div>
    </div>
  );
}
