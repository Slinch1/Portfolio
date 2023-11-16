import './App.css';
import KnowledgeContainer from "./Knowledge";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";
import ProfilPic from "./tp-profil.svg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
      </header>

      <div id="about-me">
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

      </div>

      <div id="portfolio">
        <h2>Portfolio</h2>
        <Projects/>
      </div>

    <footer>
        <p>&copy; 2023 Timo Petzold</p>
        <SocialMedia/>
    </footer>
    </div>
  );
}

export default App;


