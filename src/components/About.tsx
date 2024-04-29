import { FC } from 'react'

export const About: FC = () => {
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
                    proficiency in front end technologies. This led me to developed a finance web
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
                    and ended up in Top 10 best projects in web apps category out of overall 150+
                    participants.
                </p>
                <p className="mb-4">
                    Beyond the professional realm, I enjoy hiking and gardening. The joy of reaching
                    the summit after a strenuous climb, or seeing the first sprouts to harvesting
                    the first fruits, mirrors the satisfaction I get when I finally solve a
                    challenging coding problem.
                </p>
            </div>
        </section>
    )
}
