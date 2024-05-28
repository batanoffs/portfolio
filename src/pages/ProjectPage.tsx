import ReactPlayer from 'react-player/youtube'
import { ProjectLinks } from '../components/ProjectLinks'
import { ProjectContent } from '../components/ProjectContent'

type Project = {
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
    href: string
    menu: Array<string | string[] | { name: string; items: string[] }>
    content: Array<{
        id: string
        section: string
        items: Array<
            | string
            | {
                  subSection?: string
                  commands?: string[]
                  code?: string
                  details?: string
                  text?: string
                  checked?: boolean
              }
        >
    }>
    badges: Array<{
        type: string
        link: string
    }>
    tags: Array<{
        id: string
        name: string
    }>
}

type Props = {
    project: Project
}

export const ProjectPage = ({ project }: Props) => {
    return (
        <>
            <section className="flex justify-between mb-4 scroll-mt-16 md:mb-2 lg:mb-2 lg:scroll-mt-24">
                <h1 className="text-4xl font-bold text-slate-200 self-start">{project.title}</h1>
                <ProjectLinks links={project.links} />
            </section>
            <section className="flex gap-1 mb-4 scroll-mt-6 md:mb-6 lg:mb-4 lg:scroll-mt-24">
                {project.badges?.map((badge, index) => (
                    <span key={index} className="text-sm text-slate-200 font-bold">
                        <img src={badge.link} alt={badge.type} />
                    </span>
                ))}
            </section>

            <section
                aria-label="Video"
                className="relative aspect-video mb-4 scroll-mt-16 md:mb-0 lg:mb-8 lg:scroll-mt-12"
            >
                <ReactPlayer
                    className="absolute top-0 left-0"
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                />
            </section>

            <section className="mb-6 scroll-mt-16 md:mb-6 lg:mb-6 lg:scroll-mt-24">
                <p key={project.id} className="text-sm text-pretty text-slate-400">
                    {project.description}
                </p>
            </section>
            <nav className="flex flex-col mb-2 scroll-mt-16 md:mb-24 lg:mb-2 lg:scroll-mt-24">
                <ul className="underline font-bold">Table of content</ul>
                {project.menu.map((section, index) => (
                    <li className="list-none" key={index}>
                        {typeof section === 'object' ? (
                            <details className="text-sm text-slate-200 hover:cursor-pointer peer-hover:text-teal-400 hover:text-pretty">
                                <summary className="text-slate-200">{section.name}</summary>
                                <ul>
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                className="text-sm pl-6 text-slate-200 hover:underline hover:text-teal-400 hover:text-pretty"
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
                                className="text-sm text-slate-200 hover:underline hover:text-teal-400 hover:text-pretty"
                                href={`#${section}`}
                            >
                                {section}
                            </a>
                        )}
                    </li>
                ))}
            </nav>

            <ProjectContent content={project.content} />
        </>
    )
}
