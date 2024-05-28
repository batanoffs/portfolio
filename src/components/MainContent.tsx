import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Certificates } from './Certificates'

import data from '../data.json'
import projectData from '../projects.json'

export const MainContent = () => {
    return (
        <>
            <About />
            <Experience experience={data.work} />
            <Projects projects={projectData.projects} />
            <Certificates certificates={data.certificates} />
        </>
    )
}
