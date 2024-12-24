/**
 * Footer component
 *
 * This component renders the footer section of the webpage.
 * It includes a resume link and provides information about
 * the tools and technologies used in the design and development
 * of the website.
 *
 * @component Footer
 * @returns {JSX.Element} A JSX element representing the footer.
 */

import { Resume } from './Resume';

export const Footer = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">

            {/* Render the Resume component */}
            <Resume />

            <p>
                
                {/* Design and coding tools */}
                Loosely designed in{' '}
                <a
                    href="https://www.figma.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Figma (opens in a new tab)"
                >
                    Figma
                </a>{' '}
                and coded in{' '}
                <a
                    href="https://code.visualstudio.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Visual Studio Code (opens in a new tab)"
                >
                    Visual Studio Code
                </a>{' '}
                . Built with{' '}
                <a
                    href="https://react.dev/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="React (opens in a new tab)"
                >
                    React
                </a>
                ,{' '}
                <a
                    href="https://vitejs.dev/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Vite (opens in a new tab)"
                >
                    Vite
                </a>
                ,{' '}
                <a
                    href="https://www.typescriptlang.org/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Typescript (opens in a new tab)"
                >
                    Typescript
                </a>
                , and{' '}
                <a
                    href="https://tailwindcss.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Tailwind CSS (opens in a new tab)"
                >
                    Tailwind CSS
                </a>
                , deployed with{' '}
                <a
                    href="https://www.netlify.com/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Netlify (opens in a new tab)"
                >
                    Netlify
                </a>
                . All text is set in the
                <a
                    href="https://rsms.me/inter/"
                    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Inter (opens in a new tab)"
                >
                    {' '}
                    Inter
                </a>{' '}
                typeface.
            </p>
        </footer>
    );
};

