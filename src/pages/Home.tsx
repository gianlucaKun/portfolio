import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import Skills from "../components/skills/Skills";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Projects from "../components/projects/Projects";

const Home: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Fullstack Developer", "Welcome to my portfolio"],
      typeSpeed: 70,
      backSpeed: 35,
      backDelay: 1500,
      startDelay: 500,
      loop: false, // Loop the sequence indefinitely
      showCursor: true,
      contentType: "html",
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="containerHome">
      <div className="containerBio">
        <h2>
          {" "}
          Hi! I'm Gianluca,
          <br /> <span className="typed-text" ref={el}></span>
        </h2>
        <p>
        Mi occupo di sviluppare applicazioni web complete, dal frontend intuitivo al backend robusto e sicuro. Con una forte passione per il codice pulito e le soluzioni innovative, mi impegno a creare prodotti digitali che migliorano l'esperienza utente e rispondono alle esigenze del business. Se hai bisogno di un partner tecnico affidabile e competente per il tuo prossimo progetto, non esitare a contattarmi.
        </p>
        <button>
          <a  href="mailto:gianluca.andreoni95@gmail.com?subject=Let's Connect!">
          Contact Me{" "}
            <FontAwesomeIcon icon={faCircleRight} className="circleRight" />
          </a>
        </button>
      </div>
      <div className="containerSkills">
        <h2>Skills</h2>
        <p>
        Come Fullstack Developer, mi sono specializzato in diverse aree chiave dello sviluppo web, combinando design, codice e gestione efficiente dei progetti.
        </p>
        <div className="caruselSkills">
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="skills">
            <Skills number={75} caption="FrontEnd" />
            <Skills number={85} caption="BackEnd" />
            <Skills number={80} caption="Database" />
            <Skills number={65} caption="Figma" />
            <Skills number={85} caption="GitHub" />
          </div>
          <button>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div>
        <Projects/>
      </div>
    </main>
  );
};

export default Home;
