import { useState } from 'react';
import { techStack } from '../constants/skills';

type SummaryProps = {
    name: string;
    className?: string;
};

export const Summary = ({ name, className }: SummaryProps) => {
    const [showTech, setShowTech] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showTools, setShowTools] = useState(false);
    const small = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4">
                I am experienced professional passionate about building engaging, user-friendly
                applications. About two years ago, I found a new passion for coding. During that
                time I worked my skills up through various courses, projects, and internships. My
                previous experience in architecture and QA testing has instilled a strong work ethic
                and a proactive mindset. I am now looking forward to applying my skill set in a new
                environment alongside like-minded individuals.
            </p>
            <div className="flex flex-col gap-2 h-[180px] lg:h-[160px] overflow-hidden md:h-[150px]">
                <div className="flex gap-2">
                    <button
                        className="hover:text-center hover:animate-pulse w-[33%] h-8 hover:bg-cyan-400/30
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer"
                        onMouseEnter={() => setShowTech(true)}
                        onMouseLeave={() => setShowTech(false)}
                        onTouchStart={() => setShowTech(true)}
                        onTouchEnd={() => setShowTech(false)}
                    >
                        Technologies
                    </button>
                    <button
                        className="hover:animate-pulse w-[33%] h-8 hover:bg-teal-700/40
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer"
                        onMouseEnter={() => setShowSkills(true)}
                        onMouseLeave={() => setShowSkills(false)}
                        onTouchStart={() => setShowTech(true)}
                        onTouchEnd={() => setShowTech(false)}
                    >
                        Skills
                    </button>
                    <button
                        className="hover:animate-pulse w-[33%] h-8 hover:bg-purple-800/30
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer"
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
        </div>
    );

    const long = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4">
                Ever since writing my first program in high school of mathematics, I have developed
                a deep passion for coding. As a former architect, my passion was further nurtured
                through extensive collaboration with software developers in my previous and current
                role.
            </p>
            <p className="mb-4">
                I studied to become a full-stack developer at{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="software university (opens in a new tab)"
                >
                    Software University
                </a>
                . In my first year, I honed my front-end skills and developed a finance web
                application that ranked in the Top 10 at the
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuniada.softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="programming olympiad (opens in a new tab)"
                >
                    {' '}
                    "Softuniada 2024" Programming Olympiad
                </a>
                .
            </p>
        </div>
    );

    const full = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4">
                Beyond the professional realm, I enjoy board games, hiking, and gardening.
            </p>
        </div>
    );
    return name === 'full' ? full : name === 'long' ? long : name === 'small' ? small : small;
};
