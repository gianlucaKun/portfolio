import React from "react";
import "./ProjectCard.scss";
interface CardProps {
  imgUrl: string;
  text: string;
}

const ProjectCard: React.FC<CardProps> = ({ imgUrl, text }) => {
  return (
    <div className="containerCard">
      <div className="card">
        <img src={imgUrl} alt="Project Preview" />
        <div className="text">
          <p>{text}</p>
          <button>Go to project!</button>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
