import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

interface CardProps {
  imgUrl: string;
  text: string;
  link: string;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard: React.FC<CardProps> = ({ imgUrl, text, link, onHover, onLeave }) => {
  return (
    <div className="containerCard" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="card">
        <img src={imgUrl} alt="Project Preview" />
        <div className="text">
          <p>{text}</p>
          <button><Link to={link}>Go to project!</Link></button>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
