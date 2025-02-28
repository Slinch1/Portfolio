import React from 'react';


export const BetaLogo = (projectName) => <img src={require('./Logos/beta.svg').default} alt={`${projectName} Preview`} className="project-image"/>;
export const GameProgLogo = (projectName) => <img src={require('./Logos/gameprog.svg').default} alt={`${projectName} Preview`} className="project-image"/>;
export const AlgoDatLogo = (projectName) => <img src={require('./Logos/algodat.svg').default} alt={`${projectName} Preview`} className="project-image"/>;

export const PlanerLogo = () => <img src={require('./Logos/planer.png')} alt="Planer Logo" className="project-image"/>;
export const FeedMeLogo = () => <img src={require('./Logos/feedme.png')} alt="Feed Me Logo" className="project-image"/>;

export const ItchioLogo = () => <img src={require('./Logos/itchio.svg').default} alt="Itchio Logo" className="social-link-svg"/>;
