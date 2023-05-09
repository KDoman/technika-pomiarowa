import "./Karta.css";

export function Karta(props) {
  return (
    <div className="karta-container">
      <p>{props.p}</p>
      <img
        className="karta-container-img"
        src={props.src}
        alt={props.alt}
      ></img>
    </div>
  );
}
