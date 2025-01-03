/**
 * Project Page
 * A component that renders a project page based on the project metadata input.
 *
 * @component ProjectPage.tsx
 * @param {Project} project - The project metadata.
 * @returns {JSX.Element} The rendered project page.
 */

import { ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useFetchReadme } from './useFetchReadme';
import { ProjectLinks } from './ProjectLinks';
import { CodeSnippet } from '../../utils/index';
import { ProjectProps } from './projects/project.interface';
import { MINI_FINANCE_URL } from '../../constants/common';
// import ReactPlayer from 'react-player/file';

export const ProjectPage = (project: ProjectProps) => {
    
    // Call hook to obtain data
    const { data, loading, error } = useFetchReadme(project.readme);

    // Declare variable
    let newData;

    // Save string to var if incudes
    const miniFinance = data.includes(MINI_FINANCE_URL);

    // Check if true
    if (miniFinance) {
        
        // Replace the data and save it to newData
        newData = data.replace(
            /https:\/\/github.com\/batanoffs\/mini-finance\/assets\/111650687\/d3e5ef51-4f2d-4225-a05e-6da467265a31/g,
            ''
        );
    }

    // Check if the content is loading and render loading state
    if (loading) return <div className="text-center text-2xl my-4 text-slate-400">Loading...</div>;

    // Check if error occurred and render error
    if (error) return <div className="text-red-500">Error fetching data: {error.message}</div>;

    // Return component JSX logic and elements
    return (
        <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <Markdown
                children={miniFinance ? newData : data}
                skipHtml={false}
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <div className="flex justify-between align-middle items-center mb-4">
                            <h1
                                id={children?.toString().toLowerCase().replace(/\s+/g, '-')}
                                className="text-3xl font-bold my-4 "
                            >
                                {children}
                            </h1>
                            <ProjectLinks {...project.links} />
                            {/* <div>
                                {miniFinance && (
                                    <section aria-label="Video" className="relative aspect-video mb-4 scroll-mt-16 md:mb-0 lg:mb-8 lg:scroll-mt-12">
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
                            </div> */}
                        </div>
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
                            className="text-xl font-bold my-4 text-gray-200"
                        >
                            {children}
                        </h3>
                    ),
                    p: ({
                        children,
                        node,
                    }: {
                        children?: ReactNode;
                        node?: { position?: { start: { line: number } } };
                    }) => {
                        const isFirstParagraph =
                            node?.position?.start.line && node?.position?.start.line <= 3
                                ? true
                                : false;
                        return (
                            <p className={`my-2 ${isFirstParagraph ? 'flex gap-2' : ''}`}>
                                {children}
                            </p>
                        );
                    },
                    a: ({ href, children }) => (
                        <a href={href} className="text-blue-500 underline hover:text-blue-700">
                            {children}
                        </a>
                    ),

                    ul: ({ children }) => <ul className="ml-4 list-disc">{children}</ul>,
                    table: ({ children }) => (
                        <div className="overflow-x-auto mt-2 mb-4">
                            <table className="w-full border border-slate-700 border-collapse">
                                <tbody className=" text-gray-400">{children}</tbody>
                            </table>
                        </div>
                    ),
                    tr: ({ children }) => <tr className="border-b border-slate-700">{children}</tr>,
                    th: ({ children }) => (
                        <th className="px-2 py-2 border border-slate-700 bg-slate-800 text-left">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="px-2 py-2 border border-slate-700">{children}</td>
                    ),
                    code: (props) => {
                        const { children, className, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                            <CodeSnippet>{children}</CodeSnippet>
                        ) : (
                            <code
                                {...rest}
                                className={`${className} bg-gray-800 text-gray-500 p-0.5 rounded`}
                            >
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </div>
    );
};
