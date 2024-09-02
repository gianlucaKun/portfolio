import React, { useState } from "react";
import "./Camping.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleRight,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Camping: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMobileView = () => setIsMobileView(!isMobileView);

  return (
    <main className="containerCamping">
      <button className="btnleftArrow">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="leftArrow" />
        </Link>
      </button>
      <h1 className="title">Camping Zampa</h1>
      <div className="mobile linkSito">
        <a
          href="https://camping-site-rouge.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vai al sito{" "}
          <FontAwesomeIcon icon={faCircleRight} className="circleRight" />
        </a>
      </div>
      <div className="viewControls">
        <button onClick={toggleMobileView}>
          <FontAwesomeIcon icon={faMobileAlt} />{" "}
          {isMobileView ? "Desktop View" : "Mobile View"}
        </button>
      </div>

      <div className={`contentWrapper ${isMobileView ? "mobileView" : ""}`}>
        <div className={`iframeContainer ${isMobileView ? "rotated" : ""}`}>
          <iframe
            src="https://camping-site-rouge.vercel.app/"
            title="Camping Site"
          ></iframe>
        </div>
        <div className="containerDescription">
          <div className="description">
            <h3>Progetto: Sito Web per Campeggio</h3>
            <p>
              Ho realizzato un sito web per un campeggio utilizzando React e
              TypeScript per garantire un'applicazione moderna e facilmente
              scalabile. Il progetto è attualmente in fase di sviluppo e al
              momento include una landing page ben strutturata. Ho impiegato
              SCSS per la gestione degli stili, permettendo un design responsive
              e facilmente personalizzabile.
            </p>
            <p>
              Il sito è progettato con un'architettura modulare per facilitare
              l'integrazione di nuove funzionalità in futuro. In corso d'opera,
              il sito verrà ampliato con sezioni aggiuntive, come una galleria
              di immagini, un'area per le prenotazioni e una mappa interattiva
              del campeggio.
            </p>
          </div>
          <div className="description">
            <h4>Tecnologie Utilizzate:</h4>
            <ul>
              <li>React per una gestione dinamica e reattiva del contenuto</li>
              <li>TypeScript per un codice più sicuro e mantenibile</li>
              <li>SCSS per un design avanzato e personalizzabile</li>
            </ul>
          </div>
          <div className="description">
            <h4>Conclusioni</h4>
            Questo progetto rappresenta un esempio del mio approccio metodico e
            della mia attenzione ai dettagli, con l'obiettivo di fornire
            un'esperienza utente fluida e coinvolgente.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Camping;
