import './Projects.css';
import * as ContentText from './Contenttexts.js'
import * as Icons from './Icons.js';

const studyProjects = [
    { projectName: "Wissenschaft und Wirtschaft", categories: ["Web-Tool", "Ruby on Rails", "Git"], workedPositions: ["Teamchef", "PM", "Programmierer"], description: ContentText.WWDescription() },
    { projectName: "Beta 2024", categories: ["Videospiel", "Unity", "C#", "Codecks", "Git"], image: Icons.BetaLogo("Beta 2024"), workedPositions: ["Featureteam-Lead", "Programmierer"], description: ContentText.BetaDescription() },
    { projectName: "Hotline Mimic", categories: ["Videospiel", "Unity", "C#", "Git"], image: Icons.GameProgLogo("Hotline Mimic"), workedPositions: ["Programmierer"], description: ContentText.HotlineDescription() },
    { projectName: "Warehouse Inc.", categories: ["Videospiel", "Unity", "C#", "Git"], image: Icons.AlgoDatLogo("Warehouse Inc."), workedPositions: ["Programmierer"], description: ContentText.WarehouseDescription() },
];

const privateProjects = [
    { projectName: "Portfolio", categories: ["Website", "React", "JavaScript", "CSS", "Git", "GitHub"], workedPositions: ["Programmierer", "Designer"], description: ContentText.PortfolioDescription() },
    { projectName: "Termin Planer", categories: ["Windows Forms App", "C#", "Git", "MySQL"], image: Icons.PlanerLogo(), workedPositions: ["Programmierer"], description: ContentText.PlanerDescription() },
    { projectName: "Feed Me", categories: ["Videospiel", "Unity", "C#", "Git"], image: Icons.FeedMeLogo(), workedPositions: ["Programmierer"], description: ContentText.FeedMeDescription() }
];

const ProjectEntry = ({ projectName, categories, image, description, workedPositions }) => (
    <div className="project-entry">
        {image ? image : <div className="project-image-placeholder" />}
        <div className="project-details">
            <div className="project-name"><span>{projectName}</span></div>
            <div className="project-categories">
                {categories?.map((category, index) => (
                    <div key={index} className="project-category"><span>{category}</span></div>
                ))}
            </div>
            <div className="worked-positions">
                {workedPositions?.map((workedPosition, index) => (
                    <div key={index} className="worked-position"><span>{workedPosition}</span></div>
                ))}
            </div>
            <div className="description"><span>{description}</span></div>
        </div>
    </div>
);

const Projects = ({ type = "study" }) => {
    const projects = type === "private" ? privateProjects : studyProjects;
    const isOdd = projects.length % 2 !== 0;

    return (
        <div id="projects-container" className={isOdd ? 'odd-projects' : ''}>
            {projects.map((project, index) => (
                <ProjectEntry
                    key={index}
                    projectName={project.projectName}
                    categories={project.categories}
                    image={project.image}
                    workedPositions={project.workedPositions}
                    description={project.description}
                />
            ))}
        </div>
    );
};

export default Projects;