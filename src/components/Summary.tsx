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
]

const tools = ['Figma', 'Github', 'VS Code', 'Photoshop', 'Postman', 'Chrome DevTools']

const skills = [
    'AJAX',
    'oAuth',
    'RESTful APIs',
    'Authentication',
    'Responsive design',
    'Web Accessibility',
    'Backendless | Firebase',
]

export const Summary = ({ name, className }: SummaryProps) => {
    const [showTech, setShowTech] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showTools, setShowTools] = useState(false)
    const small = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4">
                I am a former architect currently studying to become a full stack developer at
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ip-arch.com/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    {' '}
                    Software University.{' '}
                </a>
                I have a year and a half of experience in coding, three years of professional
                experience in architecture, and a few months in quality assurance.
            </p>
            <div className="flex flex-col gap-2 h-[140px] lg:h-[110px] overflow-hidden md:h-[150px]">
                <div className="flex gap-2">
                    <button
                        className="hover:text-center hover:animate-pulse w-[33%] h-8 hover:bg-cyan-400/30
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer"
                        onMouseEnter={() => setShowTech(true)}
                        onMouseLeave={() => setShowTech(false)}
                    >
                        Technologies
                    </button>
                    <button
                        className="hover:animate-pulse w-[33%] h-8 hover:bg-teal-700/40
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer"
                        onMouseEnter={() => setShowSkills(true)}
                        onMouseLeave={() => setShowSkills(false)}
                    >
                        Skills
                    </button>
                    <button
                        className="hover:animate-pulse w-[33%] h-8 hover:bg-purple-800/30
                    border-0 border-slate-700 shadow rounded-md bg-slate-200/10 cursor-pointer"
                        onMouseEnter={() => setShowTools(true)}
                        onMouseLeave={() => setShowTools(false)}
                    >
                        Tools
                    </button>
                </div>
                <div className="">
                    <div
                        className={`flex flex-wrap gap-2 animate-writing overflow-hidden whitespace-nowrap  ${
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
                        className={`flex flex-wrap gap-2 animate-writing overflow-hidden whitespace-nowrap ${
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
                        className={`flex flex-wrap gap-2 animate-writing overflow-hidden whitespace-nowrap ${
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
            </div>
        </div>
    )

    const long = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4">
                Ever since writing my first program in high school mathematics, I have developed a
                deep passion for coding. As a former architect, my passion was further nurtured
                through extensive collaboration with software developers in my previous role.
            </p>
            <p className="mb-4">
                I am now studying to become a full-stack developer at{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
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
                    aria-label="advertising agency (opens in a new tab)"
                >
                    {' '}
                    "Softuniada 2024" Programming Olympiad
                </a>
                .
            </p>
        </div>
    )

    const full = (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            <p className="mb-4 text-pretty">
                Ever since I wrote my first program in high school mathematics, I knew I was hooked
                on the art of coding. My passion kicked in later, when I was working as an architect
                at{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ip-arch.com/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    one of the biggest architectural companies
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
                    Software University,
                </a>{' '}
                where I am studying to be a full-stack developer. During my first year, I honed my
                proficiency in front-end technologies, which led me to develop a finance web
                application for{' '}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuniada.softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    "Softuniada 2024" Programming Olympiad
                </a>{' '}
                and ended up in Top 10 best projects out of an overall 150+ participants.
            </p>
            <p className="mb-4">
                Beyond the professional realm, I enjoy board games, hiking, and gardening.
            </p>
        </div>
    )
    return name === 'full' ? full : name === 'long' ? long : name === 'small' ? small : small
}
