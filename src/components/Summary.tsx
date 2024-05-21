import { useState } from 'react'

type SummaryProps = {
    name: string
    className?: string
}

const technologies = [
    'React',
    'JavaScript',
    'TypeScript',
    'CSS3',
    'HTML5',
    'TailwindCSS',
    'SASS',
    'Bootstrap',
    'AntDesign',
    'Material UI',
    'Git',
    'Vite',
    'Photoshop',
    'Figma',
]

const skills = [
    'AJAX',
    'oAuth',
    'RESTful APIs',
    'Authentication',
    'Responsive design',
    'Web Accessibility',
    'Backendless | Firebase',
    'Github',
    'VS Code',
]

export const Summary = ({ name, className }: SummaryProps) => {
    const [showTech, setShowTech] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const small = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4">
                I am former Architect studing full stack web development at
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ip-arch.com/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    {' '}
                    Software University{' '}
                </a>
                with year and a half experience in coding and three years of professional experience
                in architecture and QA.
            </p>

            <p className="mb-4">
                Beyond the professional realm, I enjoy boardgames, hiking and gardening.
            </p>
            <div className="flex flex-col gap-2 h-[110px] overflow-hidden ">
                <div className="flex gap-2">
                    <button
                        className="hover:text-center hover:animate-pulse w-32 h-8
                    border-0 rounded-xl bg-sky-700/50 p-1 cursor-pointer"
                        onMouseEnter={() => setShowTech(true)}
                        onMouseLeave={() => setShowTech(false)}
                    >
                        Technologies
                    </button>
                    <button
                        className="hover:animate-pulse w-32 h-8
                    border-0 rounded-xl bg-violet-600/20 cursor-pointer"
                        onMouseEnter={() => setShowSkills(true)}
                        onMouseLeave={() => setShowSkills(false)}
                    >
                        Skills
                    </button>
                </div>
                <div className="">
                    <div className={`flex flex-wrap gap-2 animate-writing overflow-hidden whitespace-nowrap  ${showTech ? 'flex' : 'hidden'}`}>
                        {technologies.map((tech) => (
                            <div
                                className="inline-block items-center overflow-hidden whitespace-nowrap rounded-full bg-sky-700/50
                            px-3 py-1 text-xs font-medium leading-5 text-slate-400"
                                key={tech}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                    <div className={`flex flex-wrap gap-2 animate-writing overflow-hidden whitespace-nowrap ${showSkills ? 'flex' : 'hidden'}`}>
                        {skills.map((skill) => (
                            <div
                                className="inline-block items-center overflow-hidden whitespace-nowrap rounded-full bg-violet-600/20
                            px-3 py-1 text-xs font-medium leading-5 text-slate-400"
                                key={skill}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    const long = (
        <div className={className}>
            <p className="mb-4">
                Ever since I wrote my first program in high school of mathmatics, I knew I was
                hooked on the art of coding. My passion kicked in later when I was working as an
                Architect closely collaborating with our software development team.
            </p>
            <p className="mb-4">
                That took me to{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    Software University
                </a>{' '}
                where I study for a full-stack developer. During my first year I honed my
                proficiency in front end technologies which led me to develope a finance web
                application for{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuniada.softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    "Softuniada 2024" Olympiad
                </a>{' '}
                and ended up in Top 10 best projects out of overall 150+ participants.
            </p>
        </div>
    )

    const full = (
        <div className={className}>
            <p className="mb-4 text-pretty">
                Ever since I wrote my first program in High School of Mathmatics, I knew I was
                hooked on the art of coding. My passion kicked in later when I was working as an
                Architect at{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ip-arch.com/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    one of the biggest architectural company
                </a>{' '}
                in Bulgaria, where I collaborated a lot with our development team.
            </p>
            <p className="mb-4 text-pretty">
                That took me to{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    Software University
                </a>{' '}
                where I study for a full-stack developer. During my first year I honed my
                proficiency in front end technologies which led me to develop a finance web
                application for{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuniada.softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    "Softuniada 2024" Olympiad
                </a>{' '}
                and ended up in Top 10 best projects out of overall 150+ participants.
            </p>
            <p className="mb-4">
                Beyond the professional realm, I enjoy boardgames, hiking and gardening.
            </p>
        </div>
    )
    return name === 'full' ? full : name === 'long' ? long : name === 'small' ? small : small
}
