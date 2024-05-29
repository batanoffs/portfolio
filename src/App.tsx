import { Routes, Route } from 'react-router-dom'

import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import { MasterLayout } from './layout/MasterLayout'
import { MainLayout } from './layout/MainLayout'
import { SocialIcons } from './components/SocialIcons'
import { JobTitleAnimatedText } from './components/JobTitle'
import { Navigation } from './components/Navigation'
import { SideLayout } from './layout/SideLayout'
import { ProjectPage } from './pages/ProjectPage'

import ScrollToAnchor from './utils/ScrollToAnchor'

import data from './projects.json'
import './index.css'

export const App = () => {
    ScrollToAnchor()

    return (
        <MasterLayout>
            <SideLayout>
                <JobTitleAnimatedText />
                <Navigation />
                <SocialIcons />
            </SideLayout>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    {data.projects.map((project) => (
                        <Route
                            key={project.id}
                            path={project.href }
                            element={<ProjectPage project={project} />}
                        />
                    ))}
                </Routes>
                <Footer />
            </MainLayout>
        </MasterLayout>
    )
}
