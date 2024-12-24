/**
 * MainLayout
 *
 * This component renders the main section of the website.
 * It should contain any content that is not part of the
 * navigation or footer.
 *
 * @component MainLayout.tsx
 * @param {PropsWithChildren} props - The component props.
 * @returns {JSX.Element} A JSX element representing the MainLayout component.
 */
import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24 ">
            {children}
        </main>
    );
};


