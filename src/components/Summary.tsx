type SummaryProps = {
    name: string;
    className?: string;
};

export const Summary = ({ name, className }: SummaryProps) => {
    const small = (
        <p className="mb-4">
            I am experienced professional passionate about web technologies and user-friendly
            applications. About two years ago, I rediscovered my passion for coding. During that
            time I have improved my knowledge and skills through various courses and projects. At
            the end I was able to land my first internship at Humble Software Ltd and right after
            that I joined Cost-effective solutions as a full-stack intern.
        </p>
    );

    const long = (
        <>
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
        </>
    );

    const full = (
        <p className="mb-4">
            Beyond the professional realm, I enjoy board games, hiking, gardening and sometimes I
            play squash or basketball.
        </p>
    );
    return (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            {name === 'full' ? full : name === 'long' ? long : name === 'small' ? small : small}
        </div>
    );
};
