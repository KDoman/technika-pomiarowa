import "./Nav.css";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <nav className="nav-container">
      <section className="nav-container_under-nav-section">
        <div className="nav-container_under-nav-div">
          <motion.div
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="nav-container_under-nav-div-h1">
              Technika pomiarowa{" "}
            </h1>
            <img
              src="Logo.png"
              alt="Logo Techniki pomiarowej"
              className="nav-container_img-next-to-h1"
            ></img>
          </motion.div>
          <motion.div
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <p className="nav-container_under-nav-div-p">
              Przeglądy obiektów budowlanych/ pomiary elektryczne/
              instalatorstwo
            </p>
          </motion.div>
        </div>
      </section>
    </nav>
  );
}
