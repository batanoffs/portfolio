import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Certificates } from './Certificates'

import data from '../data.json'
import projectData from '../projects.json'

export const MainContent = () => {
    return (
        <>
            <About
                styles="flex flex-col justify-between mb-16 scroll-mt-16
                h-[auto] md:mb-24 md:h-[500px] lg:mb-26 lg:h-[500px] lg:scroll-mt-24"
            />
            <Experience
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                experience={data.work}
            />
            <Projects
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                projects={projectData.projects}
            />
            <Certificates
                styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                certificates={data.certificates}
            />
        </>
    )
}
