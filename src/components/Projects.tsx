import { ProjectList } from './ProjectsList'

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
    menu: Array<string | string[]>
    content: Array<{
        section: string
        items: Array<string | { subSection?: string; commands?: string[]; code?: string }>
    }>
    achievements: Array<{
        section: string
        items: Array<{
            type: string
            link: string
        }>
    }>
    tags: Array<{
        id: string
        name: string
    }>
}

type Props = {
    projects?: Project[]
    styles?: string
}

export const Projects = ({ projects = [], styles }: Props = {}) => {
    return (
        <section id="projects" className={styles} aria-label="Selected projects">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                    px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                    lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project: Project) => (
                        <ProjectList key={project.id} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
