import React from "react";
import "./Camping.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Camping: React.FC = () => {
  return (
    <main className="containerCamping">
      <button className="btnleftArrow">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="leftArrow" />
        </Link>
      </button>
      <h1 className="title">Camping Zampa</h1>
      <div className="iframeContainer">
        <iframe
          src="https://camping-site-rouge.vercel.app/"
          title="Camping Site"
        ></iframe>
      </div>
      <div className="mobile">
    <a href="https://camping-site-rouge.vercel.app/"  target="_blank" rel="noopener noreferrer">vai al sito{" "}
    <FontAwesomeIcon icon={faCircleRight} className="circleRight" /></a>
      </div>
    </main>
  );
};

export default Camping;
