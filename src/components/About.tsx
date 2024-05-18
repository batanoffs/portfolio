export const About = () => {
    const updateSummary = (e) => {
        const buttonName = e.target.value
        console.log(buttonName)
    }
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                         lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2
                    className="text-sm font-bold uppercase tracking-widest
                         text-slate-200 lg:sr-only"
                >
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    Ever since I wrote my first program in high school, I knew I was hooked on the
                    art of coding. My passion kicked in later when I was working as an{' '}
                    <a
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://www.ip-arch.com/en"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="advertising agency (opens in a new tab)"
                    >
                        Architect
                    </a>{' '}
                    and collaborating with our developer team.
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
                <p className="mb-4">
                    Beyond the professional realm, I enjoy boardgames, hiking and gardening.
                </p>
            </div>
            <div className="flex gap-8">
                <button
                    className="flex items-center rounded-full border-teal-300 border
                        px-3 py-1 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/10"
                    onClick={updateSummary}
                >
                    SMALL
                </button>
                <button
                    className="flex items-center rounded-full border-teal-300 border
                        px-3 py-1 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/10"
                    onClick={updateSummary}
                >
                    LONG
                </button>
                <button
                    className="flex items-center rounded-full border-teal-300 border px-3 py-1
                 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/10"
                    onClick={updateSummary}
                >
                    FULL
                </button>
            </div>
        </section>
    )
}
