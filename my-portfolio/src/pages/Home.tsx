import React, {useEffect, useRef} from "react";
import Typed from 'typed.js'
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import Skills from "../components/skills/Skills";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Fullstack Developer",
        "Welcome to my portfolio!"
      ],
      typeSpeed: 70,
      backSpeed: 35,
      backDelay: 1500,
      startDelay: 500,
      loop: false, // Loop the sequence indefinitely
      showCursor: true,
      contentType: 'html',
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="containerHome">
      <h4 className="welcome">Welcome to my portfolio</h4>
      <div className="containerBio">
        <h2>  Hi! I'm Gianluca,<br/> <span className="typed-text" ref={el}></span></h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          adipisci possimus libero et atque facilis sit, repellat molestias
          perspiciatis corporis, velit vitae eligendi officia ipsum odit iste
          quasi, quidem minus.
        </p>
        <button>
          <a href="#">
            Let's Connect{" "}
            <FontAwesomeIcon icon={faCircleRight} className="circleRight" />
          </a>
        </button>
      </div>
      <div className="containerSkills">
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi
          obcaecati quia quisquam accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae, harum quibusdam perferendis
          dolore error illo vitae nulla.
        </p>
        <div className="caruselSkills">
          <button><FontAwesomeIcon icon={faArrowLeft} /></button>
          <Skills number={85} caption="FrontEnd" />
          <Skills number={85} caption="BackEnd" />
          <Skills number={85} caption="Database" />
          <button><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </main>
  );
};

export default Home;
