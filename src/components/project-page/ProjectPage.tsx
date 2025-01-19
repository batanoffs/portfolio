/**
 * Project Page
 *
 * A component that fetches the readme file of the project from github and
 * renders the content with the help of Markdown and remarkGfm libraries.
 *
 * @component ProjectPage.tsx
 * @param {ProjectProps} project - The project metadata.
 * @returns {JSX.Element} The parsed readme for the current project.
 */

import React, { ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ReactPlayer from 'react-player';

import { useFetchReadme } from './useFetchReadme';
import { ProjectLinks } from './ProjectLinks';
import { ProjectProps } from './projects/project.interface';
import { DEMO_URLS } from '../../constants/common';
import { CodeSnippet, Loading } from '../../utils';

export const ProjectPage = (project: ProjectProps) => {
    // Call hook to obtain data
    const { data, loading, error } = useFetchReadme(project.readme);

    // Check if the content is loading and render loading state
    if (loading) return <Loading />;

    // Check if error occurred and render error
    if (error) {
        return (
            <div className="text-red-500 p-4 rounded-md bg-red-50" role="alert">
                <p>Failed to load project data.</p>
                <button onClick={() => window.location.reload()} className="mt-2 text-sm underline">
                    Retry
                </button>
            </div>
        );
    }

    // VideoComponent for better organization
    const VideoComponent = ({ url }: { url: string }) => (
        <ReactPlayer
            aria-label="Video"
            className="relative aspect-video mb-4 scroll-mt-16 md:mb-0 lg:mb-8 lg:scroll-mt-12"
            width="100%"
            height="100%"
            url={url}
            muted={true}
            playing={true}
            controls={true}
            pipe="false"
        />
    );

    const LinkRenderer = ({ href, children }: { href?: string; children: ReactNode }) => {
        if (
            href &&
            (href === DEMO_URLS.miniFinance ||
                href === DEMO_URLS.knigiBg ||
                href === DEMO_URLS.aiBuilder)
        ) {
            return <VideoComponent url={href} />;
        }

        if (!href) return <>{children}</>;

        return (
            <a href={href} className="text-blue-500 underline hover:text-blue-700">
                {children}
            </a>
        );
    };

    // Return component JSX logic and elements
    return (
        <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <Markdown
                // children={miniFinance ? miniFinanceDataContext : data}
                children={data}
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
                            node?.position?.start.line && node?.position?.start.line <= 3;

                        // Check if children contain video links
                        if (
                            Array.isArray(children) &&
                            children.some(
                                (child) =>
                                    React.isValidElement(child) &&
                                    (child as React.ReactElement<{ href: string }>).props?.href &&
                                    [
                                        DEMO_URLS.miniFinance,
                                        DEMO_URLS.knigiBg,
                                        DEMO_URLS.aiBuilder,
                                    ].includes(
                                        (child as React.ReactElement<{ href: string }>).props.href
                                    )
                            )
                        ) {
                            return <>{children}</>;
                        }

                        return (
                            <p className={`my-2 ${isFirstParagraph ? 'flex gap-2' : ''}`}>
                                {children}
                            </p>
                        );
                    },
                    a: ({ href, children }) => <LinkRenderer href={href} children={children} />,

                    ul: ({ children }) => <ul className="ml-4 list-disc">{children}</ul>,
                    table: ({ children }) => (
                        <div className="overflow-x-auto mt-2 mb-4">
                            <table className="w-full border border-slate-700 border-collapse">
                                {/* <tbody className=" text-gray-400"></tbody> */}
                                {children}
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
