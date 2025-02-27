import './App.css';
import KnowledgeSection from "./Knowledge";
import Projects from "./Projects";
import { useBirthdayCounter } from "./Utility";
import ProfilPic from "./profile/tp_2048.png";
import SocialMedia from "./SocialMedia";
import React, { useState } from "react";

function App() {
    const counter = useBirthdayCounter();
    const currentYear = new Date().getFullYear();
    const [theme, setTheme] = useState("light");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleTheme = (selectedTheme) => {
        setTheme(selectedTheme);
        document.body.classList.remove("light-mode", "dark-mode", "custom-mode");
        document.body.classList.add(`${selectedTheme}-mode`);
        setDropdownOpen(false);
    };

    return (
        <div className={`App ${theme}`}>
            <header>
                <h1>Portfolio</h1>
                <div className="theme-selector">
                    <button id="theme-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        Theme
                    </button>
                    {dropdownOpen && (
                        <div className={`theme-dropdown ${theme}-theme`}>
                            <div className="theme-option" onClick={() => toggleTheme("light")}>
                                🌞 Light
                            </div>
                            <div className="theme-option" onClick={() => toggleTheme("dark")}>
                                🌙 Dark
                            </div>
                            {/* <div className="theme-option" onClick={() => toggleTheme("custom")}>
                                ❓ ???
                            </div> */}
                        </div>
                    )}
                </div>
            </header>

            <div id="about-me">
                <h2>Über mich</h2>
                <p>Ich bin Timo Petzold, {counter} Jahre alt</p>
                <div id="personal-info">
                    <div id="profile-picture">
                        <img src={ProfilPic} alt="Profilbild" />
                    </div>
                    <div id="current-activity">
                        <h3>Aktuelle Tätigkeit: Student für Medieninformatik und Interaktives Entertainment an der Hochschule Mittweida</h3>
                    </div>
                    <p>Ein leidenschaftlicher Programmierer mit Erfahrung in...</p>
                    <div id="knowledge-container-placement">
                      <KnowledgeSection theme={theme} />
                    </div>
                </div>
            </div>

            <div id="projects">
                <div id="projects-header">
                    <span>Studiums Projekte</span>
                </div>
                <Projects type='study' />
            </div>

            <div id="projects">
                <div id="projects-header">
                    <span>Private Projekte</span>
                </div>
                <Projects type='private' />
            </div>

            <footer>
                <p>&copy; {currentYear} Timo Petzold</p>
                <SocialMedia />
            </footer>
        </div>
    );
}

export default App;