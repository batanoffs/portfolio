import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Certificates } from './Certificates'

import data from '../data.json'

export const MainContent = () => {
    return (
        <>
            <About />
            <Experience experience={data.work} />
            <Projects projects={data.projects} />
            <Certificates certificates={data.certificates} />
        </>
    )
}
