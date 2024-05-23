// import { Routes, Route } from 'react-router-dom'

import { Experience } from './Experience'
import { Projects } from './Projects'
import { About } from './About'
import { Resume } from './Resume'

import data from '../data.json'

export const MainContent = () => {
    return (
        <>
            <About />
            <Experience experience={data.work} />
            <Projects projects={data.projects} />
        </>
    )
}
