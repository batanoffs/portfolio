import ReactPlayer from 'react-player/file'
import { ProjectLinks } from '../components/ProjectLinks'
import { ProjectContent } from '../components/ProjectContent'

type ContentItem =
    | string
    | { code: string[] }
    | { subsection: string; code: string[] }
    | { text: string; checked?: boolean }
    | { subsection: string; details: string }
    | { propName: string; type: string; default: string; description: string }

type ContentSection = {
    id: number | string
    section: string
    items: ContentItem[]
}

type ProjectProps = {
    styles: string
    project: {
        id: string
        label: string
        title: string
        description: string
        image: string
        video: string
        links: {
            live?: string
            github: string
            npm?: string
        }
        href: string
        menu: (string | { name: string; items: string[] })[]
        content: ContentSection[]
        badges: { type: string; link: string }[]
        tags: { id: string; name: string }[]
    }
}

export const ProjectPage = ({ project, styles }: ProjectProps) => {
    return (
        <section className={styles} aria-label="Selected project">
            <div className="flex justify-between mb-4 bg-slate-900/75">
                <h1
                    id={project.label}
                    className="text-xl mg:text-4xl lg:text-4xl font-bold text-slate-200"
                >
                    {project.title}
                </h1>
                <ProjectLinks links={project.links} />
            </div>

            <section className="flex flex-wrap lg:flex-nowrap gap-2 mb-4 scroll-mt-6 md:mb-6 lg:mb-4">
                {project.badges?.map((badge, index) => (
                    <span key={index} className="text-sm text-slate-200 font-bold">
                        <img src={badge.link} alt={badge.type} />
                    </span>
                ))}
            </section>

            {project.video !== '' && (
                <section
                    aria-label="Video"
                    className="relative aspect-video mb-4 scroll-mt-16 md:mb-0 lg:mb-8 lg:scroll-mt-12"
                >
                    <ReactPlayer
                        className="absolute top-0 left-0"
                        width="100%"
                        height="100%"
                        url={project.video}
                        muted={true}
                        playing={true}
                        controls={true}
                        pipe={'false'}
                    />
                </section>
            )}
            <section className="mb-6 scroll-mt-16 md:mb-6 lg:mb-6 lg:scroll-mt-24">
                <p key={project.id} className="text-sm text-pretty text-slate-400">
                    {project.description}
                </p>
            </section>
            <nav className="flex flex-col mb-2 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24">
                <ul className="underline font-bold text-xl">Table of content</ul>
                {project.menu.map((section, index) => (
                    <li className="list-none" key={index}>
                        {typeof section === 'object' ? (
                            <details className="text-sm font-bold text-slate-400 hover:cursor-pointer peer-hover:text-teal-400 hover:text-pretty">
                                <summary className="text-slate-400">{section.name}</summary>
                                <ul>
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                className="text-sm font-bold pl-6 text-slate-400 hover:underline hover:text-teal-400 hover:text-pretty"
                                                href={`#${item}`}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ) : (
                            <a
                                className="text-sm font-bold text-slate-400 hover:underline hover:text-teal-400 hover:text-pretty"
                                href={`#${section}`}
                            >
                                {section}
                            </a>
                        )}
                    </li>
                ))}
            </nav>

            <ProjectContent
                styles="mb-4 p-2 scroll-mt-16 md:mb-12 lg:mb-6 lg:scroll-mt-24 rounded-md 
                lg:-inset-x-6 lg:bg-slate-800/50 lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
                lg:drop-shadow-lg"
                content={project.content}
            />
        </section>
    )
}
