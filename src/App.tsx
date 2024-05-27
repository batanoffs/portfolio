import { Routes, Route } from 'react-router-dom'

import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import { MasterLayout } from './layout/master'
import { MainLayout } from './layout/MainLayout'
import { SocialIcons } from './components/SocialIcons'
import { JobTitleAnimatedText } from './components/JobTitle'
import { Navigation } from './components/Navigation'
import ScrollToAnchor from './utils/ScrollToAnchor'

import { SideLayout } from './layout/SideLayout'

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
                </Routes>
                <Footer />
            </MainLayout>
        </MasterLayout>
    )
}
