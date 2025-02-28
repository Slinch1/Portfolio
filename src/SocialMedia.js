import './SocialMedia.css';
import * as SVGIcons from './Icons';
import {GithubOriginalIcon, LinkedinPlainIcon} from "react-devicons";

const SocialMediaEntry = ({ href, logo, text }) => (
    <div className="social-media-entry">
        <a href={href} target="_blank" rel="noopener noreferrer" className="social-link">
            {logo}
            <span>{text}</span>
        </a>
    </div>
);

const SocialMedia = () => (
    <div className="social-media">
        <SocialMediaEntry href="https://github.com/Slinch1" target="_blank" rel="noopener noreferrer" logo={<GithubOriginalIcon className="social-link-svg"/>} text="GitHub"/>
        <SocialMediaEntry href="https://www.linkedin.com/in/timo-petzold-65979829b" target="_blank" rel="noopener noreferrer" logo={<LinkedinPlainIcon className="special-linkedin-icon"/>} text="LinkedIn"/>
        <SocialMediaEntry href="https://slinch1.itch.io/" target="_blank" rel="noopener noreferrer" logo={<SVGIcons.ItchioLogo />} text="Itch.io"/>
    </div>
);

export default SocialMedia;