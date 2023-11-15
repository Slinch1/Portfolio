import * as ContentText from './Contenttexts.js'

const ProjectEntry = ({projectName,category, image, description, workedPosition}) => (
    <div className="project-entry">
        {image && <img src={image} alt={`${projectName} Preview`} className="project-image" />}
        <div className="project-details">
            <h3>{projectName}</h3>
            <div className="project-category">
                <p>{category}</p>
            </div>
            <p className="worked-position">{workedPosition}</p>
            <p>{description}</p>
        </div>
    </div>
);

const Projects = () => (
    <div id="projects-container">
        <ProjectEntry projectName="WW" category="Web-Tool, Ruby on Rails"  workedPosition="Teamchef, PM, Programmierer" description={ContentText.WWDescription()}/>
        <ProjectEntry projectName="Beta 2024" category="Videospiel, Unity, C#, Codecks"  workedPosition="Featureteam-Lead Enemies, Programmierer" description={ContentText.BetaDescription()}/>
    </div>
);

export default Projects