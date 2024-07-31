import React from "react";
import "./Header.scss";
import logo from "../../assets/alien.webp";

interface HeaderProps {
  animate: boolean;
}

const Header: React.FC<HeaderProps> = ({ animate }) => {
  return (
    <header>
      <img src={logo} alt="prova logo" className={animate ? "animate" : ""} />
      <h1></h1>
    </header>
  );
};

export default Header;
