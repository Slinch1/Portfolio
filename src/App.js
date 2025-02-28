import './App.css';
import KnowledgeSection from "./Knowledge";
import Projects from "./Projects";
import { useBirthdayCounter } from "./Utility";
import SocialMedia from "./SocialMedia";
import React, { useState, useEffect } from "react";
import ProfilPic256 from "./profile/tp_256.webp";
import ProfilPic512 from "./profile/tp_512.webp";
import ProfilPic1024 from "./profile/tp_1024.webp";

function App() {
    const counter = useBirthdayCounter();
    const currentYear = new Date().getFullYear();
    
    // Theme aus localStorage holen oder "light" als Default setzen
    const getInitialTheme = () => {
        return localStorage.getItem("theme") || "light";
    };

    const [theme, setTheme] = useState(getInitialTheme());
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Theme im localStorage speichern und im Body setzen
    const toggleTheme = (selectedTheme) => {
        setTheme(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
        document.body.classList.remove("light-mode", "dark-mode", "custom-mode");
        document.body.classList.add(`${selectedTheme}-mode`);
        setDropdownOpen(false);
    };

    // Theme beim ersten Laden direkt im Body setzen
    useEffect(() => {
        document.body.classList.add(`${theme}-mode`);
    }, [theme]);

    return (
        <div className={`App ${theme}`}>
            <header>
                <h1>Portfolio</h1>
                <div className="theme-selector">
                    <button id="theme-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}-Mode
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
                        <img 
                            src={ProfilPic512}
                            srcSet={`${ProfilPic256} 256w, ${ProfilPic512} 512w, ${ProfilPic1024} 1024w`}
                            sizes="(max-width: 600px) 256px, (max-width: 1024px) 512px, 1024px"
                            alt="Profilbild" 
                            loading='lazy' 
                        />
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
                    <span>Studiums-Projekte</span>
                </div>
                <Projects type='study' theme={theme} />
            </div>

            <div id="projects">
                <div id="projects-header">
                    <span>Private Projekte</span>
                </div>
                <Projects type='private' theme={theme} />
            </div>

            <footer>
                <p>&copy; {currentYear} Timo Petzold</p>
                <SocialMedia />
            </footer>
        </div>
    );
}

export default App;
