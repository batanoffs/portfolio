import { Routes, Route } from 'react-router-dom';

import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { MasterLayout } from './layout/MasterLayout';
import { MainLayout } from './layout/MainLayout';
import { SocialIcons } from './components/SocialIcons';
import { JobTitleAnimatedText } from './components/JobTitle';
import { Navigation } from './components/Navigation';
import { SideLayout } from './layout/SideLayout';
import { ProjectPage } from './pages/ProjectPage';
import { ScrollToTop } from './utils/ScrollToTop';
import { ScrollToAnchor } from './utils/ScrollToAnchor';
import { SkillButtons } from './components/SkillButtons';

import data from './data.json';

import './index.css';

export const App = () => {
    ScrollToAnchor();

    return (
        <MasterLayout>
            <SideLayout>
                <JobTitleAnimatedText />
                <SkillButtons styles="flex flex-col lg:flex-row md:flex-row gap-2 overflow-hidden h-[auto] mb-6" />
                <Navigation />
                <SocialIcons />
            </SideLayout>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<MainContent data={data} />} />
                    {data.projects.map((project) => (
                        <Route
                            key={project.id}
                            path={project.href}
                            element={
                                <ProjectPage
                                    styles="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                                    project={project}
                                />
                            }
                        />
                    ))}
                </Routes>
                <Footer />
                <ScrollToTop />
            </MainLayout>
        </MasterLayout>
    );
};
