import { useState } from 'react';
import { technologies, skills, tools } from '../constants/skills';

export const SkillButtons = ({ styles }: { styles: string }) => {
    const [showTech, setShowTech] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showTools, setShowTools] = useState(false);

    const buttonStyle =
        'hover:animate-pulse px-2 py-0.5 border-2 text-sm shadow rounded-2xl bg-slate-200/10 hover:text-teal-400 hover:border-teal-600 border-slate-800 cursor-pointer hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg';

    return (
        <div className={styles}>
            <div className="flex md:flex-col lg:flex-col md:items-stretch lg:items-stretch gap-2">
                <button
                    className={`${buttonStyle} hover:bg-cyan-400/30`}
                    onMouseEnter={() => setShowTech(true)}
                    onMouseLeave={() => setShowTech(false)}
                    onTouchStart={() => setShowTech(true)}
                    onTouchEnd={() => setShowTech(false)}
                >
                    Techs
                </button>
                <button
                    className={`${buttonStyle} hover:bg-teal-700/40`}
                    onMouseEnter={() => setShowSkills(true)}
                    onMouseLeave={() => setShowSkills(false)}
                    onTouchStart={() => setShowSkills(true)}
                    onTouchEnd={() => setShowSkills(false)}
                >
                    Skills
                </button>
                <button
                    className={`${buttonStyle} hover:bg-purple-800/30`}
                    onMouseEnter={() => setShowTools(true)}
                    onMouseLeave={() => setShowTools(false)}
                    onTouchStart={() => setShowTools(true)}
                    onTouchEnd={() => setShowTools(false)}
                >
                    Tools
                </button>
            </div>
            <div
                className={`flex flex-wrap gap-1 animate-writing overflow-hidden whitespace-nowrap  ${
                    showTech ? 'flex' : 'hidden'
                }`}
            >
                {technologies.map((tech) => (
                    <div
                        className="inline-block items-center overflow-hidden whitespace-nowrap rounded-full bg-cyan-400/30
                            px-3 py-1 text-xs font-medium leading-5 text-slate-200"
                        key={tech}
                    >
                        {tech}
                    </div>
                ))}
            </div>
            <div
                className={`flex flex-wrap gap-1 animate-writing overflow-hidden whitespace-nowrap ${
                    showSkills ? 'flex' : 'hidden'
                }`}
            >
                {skills.map((skill) => (
                    <div
                        className="inline-block items-center overflow-hidden whitespace-nowrap rounded-full bg-teal-700/40
                            px-3 py-1 text-xs font-medium leading-5 text-slate-200"
                        key={skill}
                    >
                        {skill}
                    </div>
                ))}
            </div>
            <div
                className={`flex flex-wrap gap-1 animate-writing overflow-hidden whitespace-nowrap ${
                    showTools ? 'flex' : 'hidden'
                }`}
            >
                {tools.map((tool) => (
                    <div
                        className="inline-block items-center overflow-hidden whitespace-nowrap rounded-full bg-purple-800/30
                            px-3 py-1 text-xs font-medium leading-5 text-slate-200"
                        key={tool}
                    >
                        {tool}
                    </div>
                ))}
            </div>
        </div>
    );
};
