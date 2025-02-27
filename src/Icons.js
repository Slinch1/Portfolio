import React from 'react';


export const JavaScriptLogo = () => <img src={require('./Logos/javascript.svg').default} alt="JavaScript Logo" className="svg-icon"/>;
export const ReactLogo = () => <img src={require('./Logos/react.svg').default} alt="React Logo" className="svg-icon"/>;
export const NextJSLogo = () => <img src={require('./Logos/nextjs.svg').default} alt="Next.JS Logo" className="svg-icon"/>;
export const HTMLLogo = () => <img src={require('./Logos/html.svg').default} alt="HTML Logo" className="svg-icon"/>;
export const CSSLogo = () => <img src={require('./Logos/css.svg').default} alt="CSS Logo" className="svg-icon"/>;
export const JavaLogo = () => <img src={require('./Logos/java.svg').default} alt="Java Logo" className="svg-icon"/>;
export const RubyLogo = () => <img src={require('./Logos/ruby.svg').default} alt="Ruby Logo" className="svg-icon"/>;
export const RailsLogo = () => <img src={require('./Logos/rails.svg').default} alt="Rails Logo" className="svg-icon"/>;
export const CSharpLogo = () => <img src={require('./Logos/csharp.svg').default} alt="C# Logo" className="svg-icon"/>;
export const UnityLogo = () => <img src={require('./Logos/unity.svg').default} alt="Unity Logo" className="svg-icon"/>;
export const GitLogo = () => <img src={require('./Logos/git.svg').default} alt="Git Logo" className="svg-icon"/>;
export const TypeSCriptLogo = () => <img src={require('./Logos/typescript.svg').default} alt="TypeScript Logo" className="svg-icon"/>;
export const AngularLogo = () => <img src={require('./Logos/angular.svg').default} alt="Angular Logo" className="svg-icon"/>;
export const PythonLogo = () => <img src={require('./Logos/python.svg').default} alt="Python Logo" className="svg-icon"/>;
export const MongoDBLogo = () => <img src={require('./Logos/mongodb.svg').default} alt="MongoDB Logo" className="svg-icon"/>;
export const MySQLLogo = () => <img src={require('./Logos/mysql.svg').default} alt="MySQL Logo" className="svg-icon"/>;
export const SQLiteLogo = () => <img src={require('./Logos/sqlite.svg').default} alt="SQLite Logo" className="svg-icon"/>;
export const GodotLogo = () => <img src={require('./Logos/godot.svg').default} alt="Godot Logo" className="svg-icon"/>;
export const TailwindLogo = () => <img src={require('./Logos/tailwind.svg').default} alt="Tailwind Logo" className="svg-icon"/>;

export const BetaLogo = (projectName) => <img src={require('./Logos/beta.svg').default} alt={`${projectName} Preview`} className="project-image"/>;
export const GameProgLogo = (projectName) => <img src={require('./Logos/gameprog.svg').default} alt={`${projectName} Preview`} className="project-image"/>;
export const AlgoDatLogo = (projectName) => <img src={require('./Logos/algodat.svg').default} alt={`${projectName} Preview`} className="project-image"/>;

export const PlanerLogo = () => <img src={require('./Logos/planer.png')} alt="Planer Logo" className="project-image"/>;
export const FeedMeLogo = () => <img src={require('./Logos/feedme.png')} alt="Feed Me Logo" className="project-image"/>;

export const GitHubLogo = ({ theme }) => (
    <img src={require('./Logos/github.svg').default} alt="GitHub Logo" className={`svg-icon filter-${theme}`}/>
);
export const LinkedInLogo = () => <img src={require('./Logos/linkedin.svg').default} alt="LinkedIn Logo"/>;
export const IntchioLogo = () => <img src={require('./Logos/itchio.svg').default} alt="Intchio Logo"/>;
