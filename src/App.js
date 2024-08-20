import './App.css';
import KnowledgeContainer from "./Knowledge";
import Projects from "./Projects";
import {useBirthdayCounter} from "./Utility";
import ProfilPic from "./tp-profil.svg";
import SocialMedia from "./SocialMedia";
import React from "react";



function App() {
    const counter = useBirthdayCounter();
    const currentYear = new Date().getFullYear();
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
      </header>

      <div id="about-me">
        <h2>Über mich</h2>
          <p>Ich bin Timo Petzold, {counter}  Jahre alt</p>
          <div id="personal-info">
              <div id="profile-picture">
                  <img src={ProfilPic} alt="Profilbild" />
              </div>
              <div id="current-activity">
                  <h3>Aktuelle Tätigkeit: Student für Medieninformatik und Interaktives Entertainment an der Hochschule Mittweida</h3>
              </div>

              <p>Ein leidenschaftlicher Programmierer mit Erfahrung in...</p>
              <div id="knowledge-container-placement">
                  <KnowledgeContainer/>
              </div>
          </div>

      </div>

      <div id="portfolio">
          <div id="portfolio-header">
              <span>Portfolio</span>
          </div>

        <Projects/>
      </div>

    <footer>
        <p>&copy; {currentYear} Timo Petzold </p>
        <SocialMedia />
    </footer>
    </div>
  );
}

export default App;






