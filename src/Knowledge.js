import './Knowledge.css';
import * as Icons from './Icons';
import { useState } from 'react';

const KnowledgeEntry = ({ logo, info, level, theme }) => {
    const [hovered, setHovered] = useState(false);

    const getSkillBarColor = (level) => {
        const greenIntensity = Math.max(50, 255 - level * 2);
        return `rgb(0, ${greenIntensity}, 0)`;
    };

    return (
        <div className={`knowledge-entry ${theme}`}>
            <div 
                className="logo" 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                <div className="icon-container">{logo}</div>
                {hovered && <div className="info-box">{info}</div>}
            </div>
            <div className={`experience-bar ${theme}`}>
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

const KnowledgeContainer = ({ title, entries, theme }) => {
    const sortedEntries = [...entries].sort((a, b) => b.level - a.level);

    return (
        <div className={`knowledge-container ${theme}`}>
            <div className="knowledge-title">{title}</div>
            <div className="knowledge-row">
                {sortedEntries.map((entry, index) => (
                    <KnowledgeEntry key={index} {...entry} theme={theme} />
                ))}
            </div>
        </div>
    );
};
const KnowledgeSection = ({ theme }) => {
    const knowledgeData = [
        {
            title: "Web-Entwicklung",
            entries: [
                { logo: <Icons.TypeSCriptLogo />, info: "TypeScript", level: 90 },
                { logo: <Icons.HTMLLogo />, info: "HTML", level: 80 },
                { logo: <Icons.CSSLogo />, info: "CSS", level: 80 },
                { logo: <Icons.JavaScriptLogo />, info: "JavaScript", level: 70 },
                { logo: <Icons.RubyLogo />, info: "Ruby", level: 30 },
            ]
        },
        {
            title: "Frameworks & Libraries",
            entries: [
                { logo: <Icons.AngularLogo />, info: "Angular", level: 80 },
                { logo: <Icons.ReactLogo />, info: "React", level: 60 },
                { logo: <Icons.TailwindLogo />, info: "Tailwind", level: 70 },
                { logo: <Icons.NextJSLogo />, info: "Next.js", level: 30 },
                { logo: <Icons.RailsLogo />, info: "Ruby on Rails", level: 30 },
            ]
        },
        {
            title: "Spieleentwicklung",
            entries: [
                { logo: <Icons.UnityLogo />, info: "Unity", level: 80 },
                { logo: <Icons.CSharpLogo />, info: "C#", level: 80 },
                { logo: <Icons.GodotLogo />, info: "Godot", level: 30 },
            ]
        },
        {
            title: "Datenbanken",
            entries: [
                { logo: <Icons.MongoDBLogo />, info: "MongoDB", level: 70 },
                { logo: <Icons.MySQLLogo />, info: "MySQL", level: 50 },
                { logo: <Icons.SQLiteLogo />, info: "SQLite", level: 50 },
            ]
        },
        {
            title: "Tools & Verschiedenes",
            entries: [
                { logo: <Icons.GitLogo />, info: "Git", level: 90 },
                { logo: <Icons.GitHubLogo theme={theme} />, info: "GitHub", level: 70 },
                { logo: <Icons.JavaLogo />, info: "Java", level: 50 },
                { logo: <Icons.PythonLogo />, info: "Python", level: 30 },
            ]
        }
    ];

    return (
        <div id="knowledge-section" className={theme}> {/* Hier wird das Theme angewendet */}
            <div className="knowledge-grid">
                {knowledgeData.map((container, index) => (
                    <KnowledgeContainer key={index} {...container} theme={theme} />
                ))}
            </div>
        </div>
    );
};

export default KnowledgeSection;
