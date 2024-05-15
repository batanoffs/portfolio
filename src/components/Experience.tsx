type Work = {
    id: string
    date: string
    company: string
    position: string[]
    description: string | string[]
    website: string
    skills: Array<{
        id: string
        name: string
    }>
}

type ExperienceProps = {
    experience?: Work[]
}

export const Experience = (props: ExperienceProps) => {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
        >
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                    px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                    lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {props.experience &&
                        props.experience.map((job: Work) => (
                            <li key={job.id} className="mb-12">
                                <div
                                    className="group relative grid pb-1 transition-all sm:grid-cols-8
                                    sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                                >
                                    <div
                                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition
                                        motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50
                                        lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                                    ></div>
                                    <header
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase
                                            tracking-wide text-slate-500 sm:col-span-2"
                                    >
                                        {job.date}
                                    </header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a
                                                    className="inline-flex items-baseline font-medium 
                                                        leading-tight text-slate-200 hover:text-teal-300 
                                                        focus-visible:text-teal-300 group/link text-base"
                                                    href={job.website}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {job.position[0]}
                                                        {' at '}
                                                        <span className="inline-block">
                                                            {job.company}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                className="inline-block h-4 w-4 shrink-0 transition-transform
                                                                    group-hover/link:-translate-y-1 group-hover/link:translate-x-1
                                                                    group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1
                                                                    motion-reduce:transition-none ml-1 translate-y-px"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            {job.position.length > 1
                                                ? job.position
                                                      .slice(1)
                                                      .map((title: string, index: number) => (
                                                          <div key={index + 1} aria-hidden="true">
                                                              <span className="text-slate-500">
                                                                  {title}
                                                              </span>
                                                          </div>
                                                      ))
                                                : null}
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">
                                            {Array.isArray(job.description) ? (
                                                <ul>
                                                    {job.description.map(
                                                        (bullet: string, index: number) => (
                                                            <li
                                                                className="ml-4 list-disc"
                                                                key={index}
                                                            >
                                                                <p>{bullet}</p>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            ) : null}
                                        </p>
                                        <ul
                                            className="mt-2 flex flex-wrap"
                                            aria-label="Technologies used"
                                        >
                                            {job.skills.map(
                                                (skill: { id: string; name: string }) => (
                                                    <li key={skill.id} className="mr-1.5 mt-2">
                                                        <div
                                                            className="flex items-center rounded-full
                                                        bg-teal-400/10 px-3 py-1 text-xs font-medium
                                                        leading-5 text-teal-300"
                                                        >
                                                            {skill.name}
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ol>
            </div>
        </section>
    )
}
