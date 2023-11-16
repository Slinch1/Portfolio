import './Projects.css';
import * as ContentText from './Contenttexts.js'
import * as SVGIcons from './SVGIcons';

const ProjectEntry = ({projectName,categories, image, description, workedPositions}) => (
    <div className="project-entry">
        {image ? (
            image
        ) : (
            <div className="project-image-placeholder" />
        )}
        <div className="project-details">
            <div className="project-name">
                <span>{projectName}</span>
            </div>
            <div className="project-categories">
                {categories && categories.map((category, index) => (
                    <div key={index} className="project-category">
                        <span>{category}</span>
                    </div>
                ))}
            </div>
            <div className="worked-positions">
                {workedPositions && workedPositions.map((workedPosition, index) => (
                    <div key={index} className="worked-position">
                        <span>{workedPosition}</span>
                    </div>
                ))}
            </div>
            <div className="description">
                <span>{description}</span>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        { projectName: "Wissenschaft und Wirtschaft", categories: ["Web-Tool", "Ruby on Rails", "Git"], workedPositions: ["Teamchef", "PM", "Programmierer"], description: ContentText.WWDescription() },
        { projectName: "Beta 2024", categories: ["Videospiel", "Unity", "C#", "Codecks", "Git"], image: SVGIcons.BetaLogo("Beta 2024"), workedPositions: ["Featureteam-Lead", "Programmierer"], description: ContentText.BetaDescription() },
        { projectName: "Hotline Mimic", categories: ["Videospiel", "Unity", "C#", "Git"], image: SVGIcons.GameProgLogo("Hotline Mimic"), workedPositions: ["Programmierer"], description: ContentText.HotlineDescription() },
        { projectName: "Warehouse Inc.", categories: ["Videospiel", "Unity", "C#", "Git"], image: SVGIcons.AlgoDatLogo("Warehouse Inc."), workedPositions: ["Programmierer"], description: ContentText.WarehouseDescription() },
    ];

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

export default Projects