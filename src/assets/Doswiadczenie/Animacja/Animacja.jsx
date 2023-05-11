import "./Animacja.css";
import CountUp from "react-countup";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Animacja(props) {
  const animation = useRef(null);

  useEffect(() => {
    const element = animation.current;
    gsap.fromTo(
      element,
      { scale: 0.5 },
      {
        scale: 1,
        duration: props.animationDuration,
        delay: props.animationDelay,
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  }, []);
  return (
    <div className="div-animacja" ref={animation}>
      <CountUp
        end={props.text}
        duration={props.duration}
        separator=" "
        suffix="+"
        enableScrollSpy
        scrollSpyOnce
      />
    </div>
  );
}
