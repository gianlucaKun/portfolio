import React, { useState } from 'react'
import ProjectCard from '../cards/ProjectCard'
import './Projects.scss'
import veryvegpreview from '../../assets/veryvegpreview2.jpg'
import pizzeriapreview from '../../assets/pizzeriaPreview2.jpg'
import campingpreview from '../../assets/CampingLandingPage2.jpg'

const Projects: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const testoveryveg : string = "Veryveg è un'app mobile che aiuta gli utenti a fare scelte alimentari informate. Permette di selezionare il proprio regime dietetico, scansionare prodotti e ricevere feedback, includendo anche una checklist per la spesa. È sviluppata con React Native, Spring Boot e MongoDB."

  const testoPizzria : string = "Il progetto React per la pizzeria è un'applicazione web interattiva che offre una navigazione fluida attraverso diverse sezioni del sito, come la Home, il Menu, e una pagina About. Il progetto è organizzato utilizzando React Router per gestire le diverse pagine, fornendo un'esperienza utente dinamica."

  const testoCamping : string = "Sviluppo di un sito web moderno e responsive per un campeggio, realizzato con React, TypeScript e SCSS. Attualmente include una landing page e sarà ampliato con nuove funzionalità." 

  return (
    <div className='containerProjects' id='projects'>
        <div><h2>Projects</h2>
        <p className={isHovered ? 'hidden' : ''}>
        Ho lavorato su una varietà di progetti che dimostrano la mia capacità di sviluppare soluzioni web complete e innovative, integrando al meglio design, backend, e gestione dei dati.
        </p></div>
        <div className='containerPreviewProjects'>
        <ProjectCard 
              imgUrl={campingpreview} 
              text={testoCamping} 
              link='/camping'
              onHover={() => setIsHovered(true)}
              onLeave={() => setIsHovered(false)}
            />
            <ProjectCard 
              imgUrl={veryvegpreview}
              text={testoveryveg} 
              link='/veryveg'
              onHover={() => setIsHovered(true)}
              onLeave={() => setIsHovered(false)}
            />
            <ProjectCard 
              imgUrl={pizzeriapreview}
              text={testoPizzria}
              link='/pizzeria'
              onHover={() => setIsHovered(true)}
              onLeave={() => setIsHovered(false)}
            />
            
            <ProjectCard 
              imgUrl='https://picsum.photos/400/300' 
              text="lorem ipsum casuale" 
              link='/veryveg'
              onHover={() => setIsHovered(true)}
              onLeave={() => setIsHovered(false)}
            />
            <ProjectCard 
              imgUrl='https://picsum.photos/400/300' 
              text="lorem ipsum casuale" 
              link='/veryveg'
              onHover={() => setIsHovered(true)}
              onLeave={() => setIsHovered(false)}
            />
        </div>
    </div>
  )
}

export default Projects
