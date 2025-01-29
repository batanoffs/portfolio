/**
 * Projects component
 * Renders a section containing a list of project items.
 *
 * @component Projects.tsx
 * @param {ProjectListProps} props - The props for the Projects component, including:
 *   - projects: An optional array of Project objects to display.
 *   - styles: An optional string of CSS class names for styling.
 * @returns {JSX.Element} The rendered Projects section.
 */

import { ProjectListProps, ProjectProps } from './types/project.interface';
import { ProjectItem } from './ProjectItem';

export const Projects = ({ projects, styles }: ProjectListProps) => {
    return (
        <section id="projects" className={styles} aria-label="Selected projects">
            {/* Header section with sticky behavior for accessibility */}
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                    px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                    lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                {/* Projects List */}
                <ul className="group/list">
                    {projects?.map((project: ProjectProps) => (
                        <ProjectItem key={project.id} {...project} />
                    ))}
                </ul>
            </div>
        </section>
    );
};
