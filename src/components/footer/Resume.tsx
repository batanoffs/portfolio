/**
 * Resume component
 * A component that renders a link to the full resume PDF.
 *
 * @component Resume.tsx
 * @returns {JSX.Element} - A JSX element representing the Resume component.
 */

import resumePDF from '/resume - Daniel Batanov.pdf';

export const Resume = () => {
    return (
        <div className="mt-6">
            <a
                className="inline-flex items-baseline leading-tight
                 hover:text-teal-300 focus-visible:text-teal-300
                font-semibold text-slate-200 group/link text-base"
                href={resumePDF}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Full Résumé (opens in a new tab)"
            >
                <span>
                    View Full{' '}
                    <span className="inline-block">
                        Résumé
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform
                            group-hover/link:-translate-y-1 group-hover/link:translate-x-1
                            group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1
                            motion-reduce:transition-none ml-1 translate-y-px"
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
            </a>
        </div>
    );
};

