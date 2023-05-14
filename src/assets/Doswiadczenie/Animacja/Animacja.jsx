import "./Animacja.css";
import CountUp from "react-countup";

export function Animacja(props) {
  return (
    <div className="div-animacja">
      <CountUp
        end={props.text}
        duration={props.duration}
        delay={props.delay}
        separator=" "
        suffix="+"
        enableScrollSpy
        scrollSpyOnce
      />
    </div>
  );
}

// git install gsap
// git install react-countup
