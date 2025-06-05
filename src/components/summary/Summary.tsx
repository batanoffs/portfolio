/**
 * Summary
 *
 * This component renders a section about the author and
 * can be toggled between three different states.
 *
 * @component Summary.tsx
 * @param {SummaryProps} props - The component props.
 * @returns {JSX.Element} - A JSX element representing the Summary component.
 */

import { SummaryProps } from './summary.interface';
import { content } from './content';

export const Summary = ({ name, className }: SummaryProps) => {
    // Define the three states of the Summary component.
    const small = (
        <>
            <p className="mb-4">{content.small.p}</p>
            <p className="mb-4">{content.small.p1}</p>
        </>
    );
    const full = (
        <>
            <p className="mb-4">{content.full.p1}</p>
            <p className="mb-4">{content.full.p2}</p>
        </>
    );

    const long = (
       <>
            <p className="mb-4">{content.long.p1}</p>
            <p className="mb-4">
                {content.long.p2}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="software university (opens in a new tab)"
                >
                    {content.long.a1}
                </a>
                {content.long.p3}
                <a
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://softuniada.softuni.bg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="programming olympiad (opens in a new tab)"
                >
                    {' '}
                    {content.long.a2}
                </a>
                .
            </p>
        </>
    );

    return (
        <div className={className}>
            <p className="mb-4">Hello and welcome!</p>

            {name === 'full' ? full : name === 'long' ? long : name === 'small' ? small : small}
        </div>
    );
};
