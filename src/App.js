import './App.css';
import KnowledgeContainer from "./Knowledge";
import ProfilPic from "./tp-profil.svg";

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

        <div className="portfolio-item">
          <h3>Webentwicklungsprojekt</h3>
          <p>Ein innovatives Webprojekt, bei dem ich für...</p>
        </div>

        <div className="portfolio-item">
          <h3>Softwareentwicklung</h3>
          <p>Entwicklung einer benutzerfreundlichen Software für...</p>
        </div>

      </section>

      <footer>
        <p>&copy; 2023 Timo Petzold</p>
      </footer>
    </div>
  );
}

export default App;


