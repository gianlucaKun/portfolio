import React from "react";
import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons";


const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/portfolio/#projects">projects</a></li>
        <li>ipsum</li>
        <li>test</li>
        <li>prova</li>
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
        <div className="containerBtn">
          <button className="loginBtn">login</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
