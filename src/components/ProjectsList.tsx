import { Link } from 'react-router-dom';

type ProjectListProps = {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    links: {
        live?: string;
        github?: string;
        npm?: string;
    };
    href: string;
    tags: Array<{
        id: string;
        name: string;
    }>;
};

type Props = {
    project: ProjectListProps;
};

export const ProjectList = ({ project }: Props) => {
    return (
        <li key={project.id} className="mb-12">
            <div
                className="group relative grid gap-4 pb-1 transition-all
                                    sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100
                                    lg:group-hover/list:opacity-50"
            >
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden
                                        rounded-md transition motion-reduce:transition-none
                                        lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50
                                        lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
                                        lg:group-hover:drop-shadow-lg"
                ></div>

                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        {project.title.includes('Book Store') ||
                        project.title.includes('Portfolio') ? (
                            <Link
                                className="inline-flex items-baseline font-medium
                                            leading-tight text-slate-200 hover:text-teal-300
                                            focus-visible:text-teal-300 group/link text-base "
                                to="/#"
                                target="_self"
                                aria-label="coming soon"
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                                <span>
                                    {project.title}
                                    <span className="inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        ) : (
                            <Link
                                className="inline-flex items-baseline font-medium
                                                leading-tight text-slate-200 hover:text-teal-300
                                                focus-visible:text-teal-300 group/link text-base"
                                to={project.href + '/#' + project.label}
                                target="_self"
                                rel="noreferrer noopener"
                                aria-label={project.label || 'View project'}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                                <span>
                                    {project.title}
                                    <span className="inline-block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        )}
                    </h3>
                    {project.title.includes('Book Store') || project.title.includes('Portfolio') ? (
                        <p className="mt-2 text-sm text-pretty leading-normal blur-sm">
                            {project.description}
                        </p>
                    ) : (
                        <p className="mt-2 text-sm text-pretty leading-normal">
                            {project.description}
                        </p>
                    )}

                    {project.tags ? (
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            {project.tags.map((tag: { id: string; name: string }) => (
                                <li key={tag.id} className="mr-1.5 mt-2">
                                    {project.title.includes('Book Store') ||
                                    project.title.includes('Portfolio') ? (
                                        <div
                                            className="flex items-center rounded-full bg-teal-400/10
                                                     px-3 py-1 text-xs font-medium leading-5 text-teal-300 blur"
                                        >
                                            {tag.name}
                                        </div>
                                    ) : (
                                        <div
                                            className="flex items-center rounded-full bg-teal-400/10
                                                     px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                                        >
                                            {tag.name}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                <img
                    alt={project.title}
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    style={{ color: 'transparent' }}
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    src={project.image}
                />
            </div>
        </li>
    );
};
