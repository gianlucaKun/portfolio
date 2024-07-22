import React from "react";
import "./Navbar.scss";

import github from "../../assets/GitHub-Symbol.png";
import instagram from "../../assets/instagram-Symbol.png";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>lorem</li>
        <li>ipsum</li>
        <li>test</li>
        <li>prova</li>
        <div>
          <a href="https://github.com/gianlucaKun">
            <img src={github} alt="logo-github" className="github-logo" />
          </a>
          <a href="https://github.com/gianlucaKun">
            <img src={instagram} alt="logo-github" className="instagram-logo" />
          </a>
          <a href="https://github.com/gianlucaKun">
            <img src={github} alt="logo-github" className="github-logo" />
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
