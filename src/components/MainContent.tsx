import { Experience } from './Experience';
import { Projects } from './Projects';
import { About } from './About';
import { Certificates } from './Certificates';
import { MainContentProps } from '../interfaces/main.interface';

export const MainContent = ({ data }: MainContentProps) => {
    return (
        <>
            <About
                styles="flex flex-col justify-between mb-16 scroll-mt-16
                h-[auto] md:mb-8 md:h-[370px] lg:mb-8 lg:h-[370px] lg:scroll-mt-24"
            />
            <Experience
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                experience={data.work}
            />
            <Projects
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                projects={data.projects}
            />
            <Certificates
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                certificates={data.certificates}
            />
        </>
    );
};
