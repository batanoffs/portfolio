export const Summary = (props: object) => {
    console.log(props)

    const small = (
        <div className="transition ease-in delay-1000 duration-1000">
            <p className="mb-4">
                Hi there, I am former Architect studing full stack web development at
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.ip-arch.com/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="advertising agency (opens in a new tab)"
                >
                    {' '}
                    Software University
                </a>
                .
            </p>

            <p className="mb-4">
                Beyond the professional realm, I enjoy boardgames, hiking and gardening.
            </p>
        </div>
    )

    const long = (
        <div className="transition ease-in delay-1000 duration-1000">
            <p className="mb-4">
                Ever since I wrote my first program in high school, I knew I was hooked on the art
                of coding. My passion kicked in later when I was working as an{' '}
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
    )
    const full = (
        <div className="transition ease-in delay-1000 duration-1000">
            <p className="mb-4 text-pretty">
                Ever since I wrote my first program in high school, I knew I was hooked on the art
                of coding. My passion kicked in later when I was working as an{' '}
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
    )
    return props?.name === 'small' ? small : props?.name === 'long' ? long : full
}
