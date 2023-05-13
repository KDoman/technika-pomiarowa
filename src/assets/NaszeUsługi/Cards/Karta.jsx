import "./Karta.css";
import { motion } from "framer-motion";

export function Karta(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 2 }}
    >
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
    </motion.div>
  );
}
