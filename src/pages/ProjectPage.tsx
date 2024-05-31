import { useFetchReadme } from '../hooks/useFetchReadme'

import Markdown from 'react-markdown'
import ReactPlayer from 'react-player/file'

import { CodeSnippet } from '../utils/CodeSnippetRender'

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
        readme: string
        menu: (string | { name: string; items: string[] })[]
        content: ContentSection[]
        badges: { type: string; link: string }[]
        tags: { id: string; name: string }[]
    }
}

type ContentSection = {
    id: number | string
    section: string
    items: string[]
}

export const ProjectPage = ({ project, styles }: ProjectProps) => {
    const { data, loading, error } = useFetchReadme(project.readme)

    const ifMiniFinance = data.includes(
        'https://github.com/batanoffs/mini-finance/assets/111650687/d3e5ef51-4f2d-4225-a05e-6da467265a31'
    )

    let newData
    if (ifMiniFinance) {
        newData = data.replace(
            /https:\/\/github.com\/batanoffs\/mini-finance\/assets\/111650687\/d3e5ef51-4f2d-4225-a05e-6da467265a31/g,
            ''
        )
    }

    if (loading) return <div className="text-center my-4">Loading...</div>
    if (error) return <div className="text-red-500">Error: {error.message}</div>

    return (
        <div className={styles}>
            {ifMiniFinance && (
                <>
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
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
                </>
            )}

            <Markdown
                children={ifMiniFinance ? newData : data}
                components={{
                    h1: ({ children }) => (
                        <h1
                            id={children?.toString().toLowerCase().replace(/\s+/g, '-')}
                            className={`text-3xl ${ifMiniFinance ? 'hidden' : ''} font-bold my-4`}
                        >
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2
                            id={children?.toString().toLowerCase().replace(/\s+/g, '-')}
                            className="text-2xl font-bold my-4"
                        >
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3
                            id={children?.toString().toLowerCase().replace(/\s+/g, '-')}
                            className="text-xl font-bold my-4"
                        >
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => <p className="my-2">{children}</p>,
                    a: ({ href, children }) => (
                        <a href={href} className=" text-blue-500 underline">
                            {children}
                        </a>
                    ),
                    li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
                    code: ({ inline, children }) =>
                        inline ? (
                            <CodeSnippet>{children}</CodeSnippet>
                        ) : (
                            <pre className="bg-gray-950 text-slate-500 rounded p-4 my-2">
                                <code>{children}</code>
                            </pre>
                        ),
                }}
            />
        </div>
    )
}
