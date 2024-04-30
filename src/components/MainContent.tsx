import { FC } from 'react'
import data from '../data.json'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Resume } from './Resume'
import { Footer } from './Footer'

export const MainContent: FC<{ styles?: string }> = ({ styles }) => {
    return (
        <main id="content" className={styles}>
            <About />
            <Experience experience={data.work} />
            <Projects projects={data.projects} />
            <Resume />
            <Footer />
        </main>
    )
}
