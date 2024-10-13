import { useFetchReadme } from '../hooks/useFetchReadme';

import Markdown from 'react-markdown';
import ReactPlayer from 'react-player/file';
import remarkGfm from 'remark-gfm';

import { CodeSnippet } from '../utils/CodeSnippetRender';
import { ProjectLinks } from '../components/ProjectLinks';
import { ProjectProps } from '../interfaces/project.interface';

export const ProjectPage = ({ project, styles }: ProjectProps) => {
    const { data, loading, error } = useFetchReadme(project.readme);

    const raAuthTitle = 'ra-auth-ui';

    const miniFinance = data.includes(
        'https://github.com/batanoffs/mini-finance/assets/111650687/d3e5ef51-4f2d-4225-a05e-6da467265a31'
    );

    let newData;
    if (miniFinance) {
        newData = data.replace(
            /https:\/\/github.com\/batanoffs\/mini-finance\/assets\/111650687\/d3e5ef51-4f2d-4225-a05e-6da467265a31/g,
            ''
        );
    }

    if (loading) {
        return <div className="text-center text-2xl my-4 text-slate-400">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className={styles}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <ProjectLinks links={project.links} />
            </div>
            {miniFinance && (
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

            <Markdown
                children={miniFinance ? newData : data}
                skipHtml={false}
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <h1
                            id={children?.toString().toLowerCase().replace(/\s+/g, '-')}
                            className={`text-3xl ${miniFinance ? 'hidden' : ''} ${
                                children?.toString().includes(raAuthTitle) ? 'hidden' : ''
                            } font-bold my-4`}
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
                    p: ({ children }) => {
                        return <p className="my-2">{children}</p>;
                    },
                    a: ({ href, children }) => (
                        <a href={href} className="text-blue-500 underline">
                            {children}
                        </a>
                    ),
                    li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
                    code: (props) => {
                        const { children, className, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                            <CodeSnippet>{children}</CodeSnippet>
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </div>
    );
};
