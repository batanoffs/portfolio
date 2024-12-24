/**
 * SideLayout component
 *
 * This component renders a div that will be sticky to the top right corner of the
 * viewport on large and medium screens and will occupy the full height of the
 * viewport. It is intended to be used as a side bar.
 *
 * @component SideLayout.tsx
 * @param {PropsWithChildren} props - The props to be passed to the component.
 * @returns {JSX.Element} A JSX element representing the SideLayout component.
 */

import { PropsWithChildren } from 'react';

export const SideLayout = ({ children }: PropsWithChildren) => {

    return (
        <div
            className="lg:sticky lg:top-0 lg:flex gap-8 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start lg:py-24
                        md:top-0 md:flex md:max-h-screen md:flex-col md:justify-start
                        flex max-h-screen flex-col justify-start"
        >
            {children}
        </div>
    );
};
