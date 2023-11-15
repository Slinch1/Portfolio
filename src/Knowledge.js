import React from 'react';
import './Knowledge.css';
import * as SVGIcons from './SVGIcons';

const KnowledgeEntry = ({ logo, text }) => (
    <div className="knowledge-entry">
        <div className="logo">
            {logo}
        </div>
        <span className="text">{text}</span>
    </div>
);

const KnowledgeContainer = () => (
    <div id="knowledge-container">
        <div className="knowledge-row">
        <KnowledgeEntry logo={<SVGIcons.HTMLLogo />} text="HTML"/>
        <KnowledgeEntry logo={<SVGIcons.CSSLogo />} text="CSS"/>
        <KnowledgeEntry logo={<SVGIcons.JavaScriptLogo />} text="JavaScript" />
        <KnowledgeEntry logo={<SVGIcons.ReactLogo />} text="React" />
        <KnowledgeEntry logo={<SVGIcons.NextJSLogo />} text="Next.JS"/>
        <KnowledgeEntry logo={<SVGIcons.RubyLogo />} text="Ruby"/>
        <KnowledgeEntry logo={<SVGIcons.RailsLogo />} text="Rails"/>
        </div>
        <div className="knowledge-row">
        <KnowledgeEntry logo={<SVGIcons.UnityLogo />} text="Unity"/>
        <KnowledgeEntry logo={<SVGIcons.CSharpLogo />} text="C#"/>
        </div>
        <div className="knowledge-row">
        <KnowledgeEntry logo={<SVGIcons.JavaLogo />} text="Java"/>
        <KnowledgeEntry logo={<SVGIcons.GitLogo />} text="Git"/>
        </div>
    </div>
);

export default KnowledgeContainer;