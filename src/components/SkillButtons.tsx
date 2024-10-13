import { useState } from 'react';
import { techStack } from '../constants/skills';

export const SkillButtons = () => {
    const [showTech, setShowTech] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showTools, setShowTools] = useState(false);

    return (
        <div className="flex flex-col gap-2 h-[180px] lg:h-[160px] overflow-hidden md:h-[150px]">
            <div className="flex gap-2">
                <button
                    className="hover:text-center hover:animate-pulse w-[33%] h-8 hover:bg-cyan-400/30
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
                    onMouseEnter={() => setShowTech(true)}
                    onMouseLeave={() => setShowTech(false)}
                    onTouchStart={() => setShowTech(true)}
                    onTouchEnd={() => setShowTech(false)}
                >
                    Technologies
                </button>
                <button
                    className="hover:animate-pulse w-[33%] h-8 hover:bg-teal-700/40
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
                    onMouseEnter={() => setShowSkills(true)}
                    onMouseLeave={() => setShowSkills(false)}
                    onTouchStart={() => setShowTech(true)}
                    onTouchEnd={() => setShowTech(false)}
                >
                    Skills
                </button>
                <button
                    className="hover:animate-pulse w-[33%] h-8 hover:bg-purple-800/30
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
                    onMouseEnter={() => setShowTools(true)}
                    onMouseLeave={() => setShowTools(false)}
                    onTouchStart={() => setShowTech(true)}
                    onTouchEnd={() => setShowTech(false)}
                >
                    Tools
                </button>
            </div>
            <div className="">
                <div
                    className={`flex flex-wrap gap-1 animate-writing overflow-hidden whitespace-nowrap  ${
                        showTech ? 'flex' : 'hidden'
                    }`}
                >
                    {techStack.technologies.map((tech) => (
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
                    {techStack.skills.map((skill) => (
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
                    {techStack.tools.map((tool) => (
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
        </div>
    );
};
