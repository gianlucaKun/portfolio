import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons";


const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li className="projectsNavbar"><a href="/portfolio/#projects">Progetti</a></li>
        <li className="mobile displayNone">Formazione</li>
        <li className="mobile displayNone"><Link to="/cv">Curriculum Vitae</Link></li>
        <li className="mobile displayNone">prova</li>
        <div className="containerIconSocial">
          <a href="https://github.com/gianlucaKun" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/gianluca.sdvb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://codepen.io/Gianlucakun95" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/gianluca-andreoni/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>
        <div className="containerBtn mobile displayNone" >
          <button className="loginBtn">login</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
