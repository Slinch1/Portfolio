import './App.css';
import KnowledgeContainer from "./Knowledge";
import Projects from "./Projects";
import ProfilPic from "./tp-profil.svg";
import * as SVGIcons from './SVGIcons';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
      </header>

      <section id="about-me">
        <h2>Über mich</h2>
          <p>Ich bin Timo Petzold, 20 Jahre alt</p>
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

      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <Projects/>

      </section>

    <footer>
        <p>&copy; 2023 Timo Petzold</p>

        <div className="social-media">
            <div className="social-media-entry">
                <a href="https://github.com/Slinch1" target="_blank" rel="noopener noreferrer" className="social-link">
                    <SVGIcons.GitHubLogo />
                    <span>GitHub</span>
                </a>
            </div>
            <div className="social-media-entry">
                <a href="https://www.linkedin.com/in/timo-petzold-65979829b" target="_blank" rel="noopener noreferrer" className="social-link">
                    <SVGIcons.LinkedInLogo />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;

