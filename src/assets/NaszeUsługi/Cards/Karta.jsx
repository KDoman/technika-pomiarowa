import "./Karta.css";

export function Karta(props) {
  return (
    <div className="karta-container">
      <div className="karta-container-div">
        <p>
          <img
            className="karta-img"
            src="Logo.png"
            alt="Logo technika pomiarowa"
          ></img>
          {props.title}
        </p>
        <img
          className="karta-container-img"
          src={props.src}
          alt={props.alt}
        ></img>
      </div>
      <div className="karta-container-div">
        <p className="karta-container-p">{props.p}</p>
      </div>
    </div>
  );
}
