import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Pizzeria.scss'
const Pizzeria: React.FC = () => {
  return (
    <main className="containerPizzeria">
      <button className="btnleftArrow">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="leftArrow" />
        </Link>
      </button>
      <h1 className="title">Pizzeria</h1>
      <div className="containerDescription">
        <p className="description">
          Un'applicazione web per una pizzeria, progettata per offrire una navigazione fluida attraverso diverse sezioni del sito, come la Home, il Menu, e una pagina "About". L'applicazione utilizza React Router per gestire le varie pagine, garantendo un'esperienza utente dinamica e interattiva.
        </p>
        <ul className="description">
          <li>
            <strong>Home Page:</strong> La homepage presenta un header accattivante con il nome della pizzeria e un pulsante per accedere rapidamente al menu.
          </li>
          <li>
            <strong>Menu Page:</strong> La pagina del menu è interattiva, permettendo agli utenti di sfogliare diverse categorie di piatti, con paginazione per una navigazione migliorata.
          </li>
          <li>
            <strong>About Page:</strong> Una sezione dedicata alla storia e alla filosofia della pizzeria.
          </li>
          <li>
            <strong>Architettura:</strong> Il progetto è strutturato con componenti modulari riutilizzabili e utilizza React Hooks per gestire lo stato e le operazioni asincrone.
          </li>
          <li>
            <strong>Funzionalità Aggiuntive:</strong> Navigazione con React Router, paginazione dinamica, e caricamento dati tramite Fetch API da un file JSON esterno.
          </li>
        </ul>
        <p className="description">
          Questo progetto rappresenta un'applicazione ben strutturata, con potenziale per ulteriori estensioni, come la gestione degli ordini o l'integrazione di un sistema di prenotazione.
        </p>
      </div>
      <h1>In progress.....</h1>
    </main>
  );
};

export default Pizzeria;
