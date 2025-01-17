/**
 * ProjectList component
 *
 * This component renders a single project item. It displays the project title, description, tags,
 * and an image. If the project's title includes 'Portfolio', it renders a special link and applies
 * specific styles to the description and tags.
 *
 * @component ProjectList.tsx
 * @param {Project} project - The project data to be rendered.
 * @returns {JSX.Element} A JSX element representing a project item.
 */

import { JSX } from 'react';

import { ProjectListProps, ProjectProps } from './project.interface';
import { ProjectItem } from './ProjectItem';

export const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
    return (
        <ul className="group/list">
            {projects?.map((project: ProjectProps) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </ul>
    );
};
