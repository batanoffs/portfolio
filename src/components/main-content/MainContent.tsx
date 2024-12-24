/**
 * MainContent component
 *
 * The MainContent component renders the main content of the page.
 * It receives data prop which has the following structure:
 * {
 *   work: Array<WorkExperience>,
 *   projects: Array<Project>,
 *   certificates: Array<Certificate>
 * }
 *
 * @component MainContext.tsx
 * @param {MainContentProps} props - The props to be passed to the component.
 * @returns {JSX.Element} A JSX element representing the MainContent component.
 */

import { Certificates, About, Experience, Projects } from '../index';
import { MainContentProps } from './main.interface';

export const MainContent = ({ data }: MainContentProps) => {
    return (
        <>
            {/* The About component renders the About section of the page */}
            <About
                styles="flex flex-col justify-between mb-16 scroll-mt-16
                h-[auto] md:mb-8 md:h-[370px] lg:mb-8 lg:h-[370px] lg:scroll-mt-24"
            />

            {/* The Experience component renders the Experience section of the page */}
            <Experience
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                experience={data.work}
            />

            {/* The Projects component renders the Projects section of the page */}
            <Projects
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                projects={data.projects}
            />

            {/* The Certificates component renders the Certificates section of the page */}
            <Certificates
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                certificates={data.certificates}
            />
        </>
    );
};
