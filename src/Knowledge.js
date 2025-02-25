import './Knowledge.css';
import * as SVGIcons from './SVGIcons';
import { useState } from 'react';

const KnowledgeEntry = ({ logo, info, level }) => {
    const [hovered, setHovered] = useState(false);

    // Berechnen der Farbe der Skill-Skala basierend auf dem Level
    const getSkillBarColor = (level) => {
        const greenIntensity = Math.max(50, 255 - level * 2); // Dunkler werden bei höherem Level
        return `rgb(0, ${greenIntensity}, 0)`;  // Dunkleres Grün
    };

    return (
        <div className="knowledge-entry">
            <div 
                className="logo" 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                <div className="icon-container">{logo}</div>
                {hovered && <div className="info-box">{info}</div>}
            </div>
            <div className="experience-bar">
                <div 
                    className="experience-fill" 
                    style={{ 
                        width: `${level}%`,
                        backgroundColor: getSkillBarColor(level) 
                    }}
                ></div>
            </div>
            <div className='left-label'>Grundlagen</div>
            <div className='right-label'>Erfahren</div>
        </div>
    );
};



const KnowledgeContainer = ({ title, entries }) => (
    <div className="knowledge-container">
        <div className="knowledge-title">{title}</div>
        <div className="knowledge-row">
            {entries.map((entry, index) => (
                <KnowledgeEntry key={index} {...entry} />
            ))}
        </div>
    </div>
);

const KnowledgeSection = () => {
    const knowledgeData = [
        {
            title: "Web-Entwicklung",
            entries: [
                { logo: <SVGIcons.HTMLLogo />, info: "HTML", level: 80 },
                { logo: <SVGIcons.CSSLogo />, info: "CSS", level: 80 },
                { logo: <SVGIcons.JavaScriptLogo />, info: "JavaScript", level: 70 },
                { logo: <SVGIcons.TypeSCriptLogo />, info: "TypeScript", level: 90 },
                { logo: <SVGIcons.RubyLogo />, info: "Ruby", level: 10 },
            ]
        },
        {
            title: "Frameworks & Libraries",
            entries: [
                { logo: <SVGIcons.ReactLogo />, info: "React", level: 60 },
                { logo: <SVGIcons.NextJSLogo />, info: "Next.js", level: 30 },
                { logo: <SVGIcons.AngularLogo />, info: "Angular", level: 80 },
                { logo: <SVGIcons.RailsLogo />, info: "Ruby on Rails", level: 10 },
            ]
        },
        {
            title: "Spieleentwicklung",
            entries: [
                { logo: <SVGIcons.UnityLogo />, info: "Unity", level: 80 },
                { logo: <SVGIcons.CSharpLogo />, info: "C#", level: 80 },
            ]
        },
        {
            title: "Tools & Verschiedenes",
            entries: [
                { logo: <SVGIcons.GitLogo />, info: "Git", level: 90 },
                { logo: <SVGIcons.GitHubLogo />, info: "GitHub", level: 70 },
                { logo: <SVGIcons.JavaLogo />, info: "Java", level: 50 },
            ]
        }
    ];

    return (
        <div id="knowledge-section">
            <div className="knowledge-grid">
                {knowledgeData.map((container, index) => (
                    <KnowledgeContainer key={index} {...container} />
                ))}
            </div>
        </div>
    );
};

export default KnowledgeSection;
