import React from "react";
import "./Veryveg.scss";
import figma1 from "../../assets/figmaveryveg.png";
import figma2 from "../../assets/figmaveryveg2.png";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Veryveg: React.FC = () => {
  return (
    <main className="containerVeryveg">
      <button className="btnleftArrow">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="leftArrow" />
        </Link>
      </button>
      <h1 className="title">Veryveg</h1>
      <div className="containerDescription">
        <p className="description">
          A mobile application development project aimed at simplifying the
          management of vegan or vegetarian diets. The application includes
          advanced features such as product scanning via barcode, creating
          shopping lists, and sharing recipes. Collaborative work was done with
          another developer, utilizing Git for code control and teamwork.
          <ul>
            <li>
              Barcode Scanning: Implemented functionality to scan food products
              via barcode to retrieve detailed information.{" "}
            </li>
            <li>
              Shopping List Management: Enabled users to create, update, and
              manage personalized shopping lists.{" "}
            </li>
            <li>
              Recipe Sharing: Developed a feature to share cooking recipes,
              promoting a vegan or vegetarian lifestyle.
            </li>
          </ul>
        </p>
      </div>
      <div className="containerFigma">
        <h3 className="titleFigma">figma</h3>
        <img src={figma1} alt="" className="imgFigma figma1" />
        <img src={figma2} alt="" className="imgFigma figma2" />
        <p className="description descriptionFigma">
          Used Figma for creating mockups and making various design choices
          across all aspects of the app, including the app icon, homepage,
          camera scanner, buttons, and user feedback.
        </p>
      </div>
      <div className="containerBE">
        <h3 className="titleBE">backend</h3>
        <img src="" alt="" className="imgBE" />
        <p className="description descriptionBE">
          The backend is developed using Java 17 and Spring Boot 4, with
          MapStruct for object mapping and Lombok for reducing boilerplate code.
          MongoDB is used as the database, and the backend is hosted on Heroku.
        </p>
        <a
          href="https://github.com/gianlucaKun/veryvegBackend"
          className="linkrepository"
        >
          backend repository on my github
        </a>
      </div>
      <div className="containerFE">
        <h3 className="titleBE">frontend</h3>
        <img src="" alt="" className="imgFE" />
        <p className="description descriptionFE">
          The frontend of the application is built using React Native, which
          allows for a smooth and responsive user interface across both iOS and
          Android platforms. This technology was chosen for its efficiency in
          building cross-platform mobile applications, ensuring a consistent
          user experience.
        </p>
        <a
          href="https://github.com/gianlucaKun/veryveg"
          className="linkrepository"
        >
          frontend repository on my github
        </a>
      </div>
      <h1>in progress.....</h1>
    </main>
  );
};

export default Veryveg;
