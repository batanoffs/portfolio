import { FC } from 'react'
// import { Routes, Route } from 'react-router-dom'

import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Resume } from './Resume'
import { Footer } from './Footer'

import data from '../data.json'

export const MainContent: FC = () => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience experience={data.work} />
            <Projects projects={data.projects} />

            <Resume />
            <Footer />
        </main>
    )
}
