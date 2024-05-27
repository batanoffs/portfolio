type ProjectDetails = {
    project: {
        id: string
        label: string
        title: string
        description: string
        image: string
        links: {
            live?: string
            github?: string
            npm?: string
        }
        achievments?: Array<
            | string
            | {
                  stars?: string
                  forks?: string
                  downloads?: string
                  version?: string
              }
        >
        href: string
        tags: Array<{
            id: string
            name: string
        }>
    }
}

export const ProjectDetails = ({ project }: ProjectDetails) => {
    return (
        <div
            className="flex flex-col gap-6 justify-between mb-16 scroll-mt-16 h-[auto] md:mb-24 md:h-[500px]
            lg:mb-26 lg:h-[500px] lg:scroll-mt-24"
        >
            <h1 className="text-4xl font-bold text-slate-200 self-start">{project.title}</h1>

            <section className="flex gap-2">
                {project.achievments?.map((achievment, index) => (
                    <div key={index} className="text-sm text-slate-200 font-bold px-2">
                        {typeof achievment === 'string' ? (
                            achievment
                        ) : achievment?.stars ? (
                            <span className="flex items-center">⭐️ {achievment.stars}</span>
                        ) : achievment?.forks ? (
                            <span className="flex items-center">🍴 {achievment.forks}</span>
                        ) : achievment?.downloads ? (
                            <span className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        fill="currentColor"
                                        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                                    />
                                </svg>
                                {' max '}
                                {achievment.downloads}
                            </span>
                        ) : achievment?.version ? (
                            <span className="flex items-center">{achievment.version}</span>
                        ) : (
                            ''
                        )}
                    </div>
                ))}
                {project.links.live && (
                    <a
                        className="font-medium hover:bg-teal-400 hover:text-black bg-white border-black h-6 py-0.5
                    text-center text-sm shadow-sm shadow-slate-700 text-black w-[20%] rounded-xl"
                        href={project.links.live}
                        target="_blank"
                    >
                        Live demo
                    </a>
                )}
                {project.links.github && (
                    <a
                        className="font-medium hover:bg-teal-400 hover:text-black bg-white border-black h-6 py-0.5
                    text-center text-sm shadow-sm shadow-slate-700 text-black w-[20%] rounded-3xl"
                        href={project.links.github}
                        target="_blank"
                    >
                        Github
                    </a>
                )}
                {project.links.npm && (
                    <a
                        className="font-medium hover:bg-teal-400 hover:text-black bg-white border-black h-6 py-0.5
                    text-center text-sm shadow-sm shadow-slate-700 text-black w-[20%] rounded-3xl"
                        href={project.links.npm}
                        target="_blank"
                    >
                        NPM package
                    </a>
                )}
            </section>

            <div className="w-full flex gap-6">
                <nav className="flex flex-col ">
                    <p className="underline font-bold">Table of content</p>

                    <a
                        className="text-sm text-slate-200 hover:underline hover:text-teal-400 hover:text-pretty"
                        href="#description"
                    >
                        Description
                    </a>
                    <a
                        className="text-sm text-slate-200 hover:underline hover:text-teal-400 hover:text-pretty"
                        href="#technologies"
                    >
                        Technologies
                    </a>
                    <a
                        className="text-sm text-slate-200 hover:underline hover:text-teal-400 hover:text-pretty"
                        href="#features"
                    >
                        Features
                    </a>
                    <a
                        className="text-sm text-slate-200 hover:underline hover:text-teal-400 hover:text-pretty"
                        href="#screenshots"
                    >
                        Screenshots
                    </a>
                </nav>
            </div>
            <div className="flex gap-4 justify-evenly align-middle w-full"></div>
            <div id="description" className="flex-1">
                <p key={project.id} className="text-sm text-pretty text-slate-400">
                    {project.description}
                </p>
            </div>

            <div id="technologies"></div>
            <div id="features"></div>
            <div id="screenshots"></div>
        </div>
    )
}
