import { FC } from 'react'
import data from '../data.json'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Resume } from './Resume'

type Props = {
    styles?: string
}

export const MainContent: FC<Props> = ({ styles }) => {
    return (
        <main id="content" className={styles}>
            <About />
            <Experience data={data} />
            <Projects data={data} />
            <Resume />
        </main>
    )
}
