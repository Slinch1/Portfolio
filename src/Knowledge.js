import './Knowledge.css';
import { useState } from 'react';
import {
    TypescriptOriginalIcon,
    Html5OriginalIcon,
    Css3OriginalIcon,
    JavascriptOriginalIcon,
    RubyOriginalIcon,
    ReactOriginalIcon,
    AngularOriginalIcon,
    TailwindcssOriginalIcon,
    NextjsOriginalIcon,
    RailsPlainWordmarkIcon,
    UnityOriginalIcon,
    CsharpOriginalIcon,
    GodotOriginalIcon,
    MongodbOriginalIcon,
    MysqlOriginalIcon,
    SqliteOriginalIcon,
    GitOriginalIcon,
    GithubOriginalIcon,
    JavaOriginalIcon,
    PythonOriginalIcon,
  } from "react-devicons";

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
          { logo: <TypescriptOriginalIcon className="svg-icon" alt="TypeScript Logo" />, info: "TypeScript", level: 90 },
          { logo: <Html5OriginalIcon className="svg-icon" alt="HTML Logo" />, info: "HTML", level: 80 },
          { logo: <Css3OriginalIcon className="svg-icon" alt="CSS Logo" />, info: "CSS", level: 80 },
          { logo: <JavascriptOriginalIcon className="svg-icon" alt="JavaScript Logo" />, info: "JavaScript", level: 70 },
          { logo: <RubyOriginalIcon className="svg-icon" alt="Ruby Logo" />, info: "Ruby", level: 60 },
        ],
      },
      {
        title: "Frameworks & Libraries",
        entries: [
          { logo: <AngularOriginalIcon className="svg-icon" alt="Angular Logo" />, info: "Angular", level: 80 },
          { logo: <ReactOriginalIcon className="svg-icon" alt="React Logo" />, info: "React", level: 60 },
          { logo: <TailwindcssOriginalIcon className="svg-icon" alt="Tailwind Logo" />, info: "Tailwind", level: 70 },
          { logo: <NextjsOriginalIcon className="svg-icon" alt="Next.js Logo" />, info: "Next.js", level: 30 },
          { logo: <RailsPlainWordmarkIcon className="svg-icon" alt="Ruby on Rails Logo" />, info: "Ruby on Rails", level: 30 },
        ],
      },
      {
        title: "Spieleentwicklung",
        entries: [
          { logo: <UnityOriginalIcon className="svg-icon" alt="Unity Logo" />, info: "Unity", level: 80 },
          { logo: <CsharpOriginalIcon className="svg-icon" alt="C# Logo" />, info: "C#", level: 80 },
          { logo: <GodotOriginalIcon className="svg-icon" alt="Godot Logo" />, info: "Godot", level: 30 },
        ],
      },
      {
        title: "Datenbanken",
        entries: [
          { logo: <MongodbOriginalIcon className="svg-icon" alt="MongoDB Logo" />, info: "MongoDB", level: 70 },
          { logo: <MysqlOriginalIcon className="svg-icon" alt="MySQL Logo" />, info: "MySQL", level: 50 },
          { logo: <SqliteOriginalIcon className="svg-icon" alt="SQLite Logo" />, info: "SQLite", level: 50 },
        ],
      },
      {
        title: "Tools & Verschiedenes",
        entries: [
          { logo: <GitOriginalIcon className="svg-icon" alt="Git Logo" />, info: "Git", level: 90 },
          { logo: <GithubOriginalIcon className={`filter-${theme} svg-icon`} alt="GitHub Logo" />, info: "GitHub", level: 70 },
          { logo: <JavaOriginalIcon className="svg-icon" alt="Java Logo" />, info: "Java", level: 50 },
          { logo: <PythonOriginalIcon className="svg-icon" alt="Python Logo" />, info: "Python", level: 30 },
        ],
      },
    ];
  
    return (
      <div id="knowledge-section" className={theme}>
        <div className="knowledge-grid">
          {knowledgeData.map((container, index) => (
            <KnowledgeContainer key={index} {...container} theme={theme} />
          ))}
        </div>
      </div>
    );
  };

export default KnowledgeSection;
