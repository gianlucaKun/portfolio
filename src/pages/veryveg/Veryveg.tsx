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
          Progetto di sviluppo di un'applicazione mobile destinata a
          semplificare la gestione di diete vegane o vegetariane. L'applicazione
          include funzionalità avanzate come la scansione dei prodotti tramite
          barcode, la creazione di liste della spesa e la condivisione di
          ricette. Lavoro collaborativo con un altro sviluppatore attraverso
          l'uso di Git per il controllo del codice e il lavoro di squadra.
          Scansione Barcode: Implementazione della funzionalità di scansione dei
          prodotti alimentari tramite barcode per ottenere informazioni
          dettagliate. Gestione Lista della Spesa: Creazione, aggiornamento e
          gestione delle liste della spesa personalizzate dagli utenti.
          Condivisione di Ricette: Implementazione della funzionalità di
          condivisione delle ricette di cucina per favorire uno stile di vita
          vegano o vegetariano.
        </p>
      </div>
      <div className="containerFigma">
        <h3 className="titleFigma">figma</h3>
        <img src={figma1} alt="" className="imgFigma figma1"/>
        <img src={figma2} alt="" className="imgFigma figma2"/>
        <p className="description descriptionFigma">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          sequi ipsam. Quaerat, reiciendis ab incidunt exercitationem ullam ipsa
          quis atque error? Aperiam adipisci laudantium exercitationem eum,
          magni hic aliquam libero?
        </p>
      </div>
      <div className="containerBE">
        <h3 className="titleBE">backend</h3>
        <img src="" alt="" className="imgBE"/>
        <p className="description descriptionBE">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          nobis itaque ab porro debitis, cumque facere. Ex voluptas qui
          consectetur nesciunt? Totam pariatur officia nisi modi, mollitia iure
          quibusdam odio!
        </p>
      </div>
      <h1>in progress.....</h1>
    </main>
  );
};

export default Veryveg;
