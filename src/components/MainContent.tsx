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
            <Experience data={data} />
            <Projects data={data} />
            <Resume />
            <Footer />
        </main>
    )
}
