/**
 * App component:
 * The root component of the application, which renders
 * the main layout of the application and their children.
 *
 * @component App.tsx
 * @returns {JSX.Element} A JSX element representing the App component.
 */

import { Routes, Route } from 'react-router-dom';
import { JobTitle, MainContent, Footer, SocialIcons, SkillButtons, Navigation } from './components/index';
import { MasterLayout, MainLayout, SideLayout } from './components/layout/index';
import { ScrollToAnchor, ScrollToTop } from './utils/index';
import { ProjectPage } from './components/project-page/ProjectPage';

import data from './data.json';
import './index.css';

export const App = () => {

    //Render elements
    return (

        // Render the master layout which wraps the application
        <MasterLayout>

             {/* Init the scroll to anchor component  */}
            <ScrollToAnchor />

            {/* Render the side layout */}
            <SideLayout>
                <JobTitle />
                <SkillButtons />
                <Navigation />
                <SocialIcons />
            </SideLayout>

            {/* Render the main layout */}
            <MainLayout>

                {/* Define routes */}
                <Routes>

                    {/* Main content route */}
                    <Route path="/" element={<MainContent data={data} />} />

                    {/* Map through the projects and render routes for each one */}
                    {data.projects.map((project) => (
                        <Route
                            key={project.id}
                            path={project.href}
                            element={<ProjectPage {...project} />}
                        />
                    ))}
                </Routes>

                {/* Render the footer */}
                <Footer />

                {/* Init the scroll to top component  */}
                <ScrollToTop />

            </MainLayout>
            
        </MasterLayout>
    );
};
