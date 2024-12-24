/**
 * MasterLayout component
 *
 * This component renders the main layout of the application, which includes
 * the navigation, main content and footer.
 *
 * @component MasterLayout.tsx
 * @param {PropsWithChildren<unknown>} props The props of the component.
 * @returns {JSX.Element} - A JSX element representing the MasterLayout component.
 */

import { PropsWithChildren } from 'react';

export const MasterLayout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div className="group/spotlight relative">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute h-dvh"></div>

            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <a
                    className="absolute left-0 top-0 block -translate-x-full
                    rounded bg-gradient-to-br from-teal-400 via-blue-500
                    to-purple-600 px-4 py-3 text-sm font-bold uppercase
                    tracking-widest text-white focus-visible:translate-x-0"
                    href="#content"
                >
                    Skip to Content
                </a>
                <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
            </div>
        </div>
    );
};
