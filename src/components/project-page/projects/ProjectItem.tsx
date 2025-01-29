/**
 * ProjectItem Component
 *
 * Renders an individual project card with title, description, tags, and image.
 * Handles navigation and coming soon status.
 *
 * @param {Object} props - Component props
 * @param {ProjectProps} props.project - Project data to display
 */

// external imports
import { MouseEvent, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// internal imports
import { ProjectProps } from './types/project.interface';
import { ProjectComingSoon } from './ProjectComingSoon';
import { ProjectTags } from './components/ProjectTags';
import { ProjectImage } from './components/ProjectImage';
import { ArrowIcon } from './components/ArrowIcon';
import { CONTAINER_CLASSES, LINK_CLASSES, OVERLAY_CLASSES } from './constants/classes';
import { isProjectComingSoon } from './utils/projectUtils';

export const ProjectItem = (project: ProjectProps ) => {
    const navigate = useNavigate();

    // Handle navigation with smooth scroll and delayed scroll to top
    const handleNavClick = useCallback(
        (e: MouseEvent<HTMLAnchorElement>, to: string) => {
            e.preventDefault();
            
            try {
                navigate(to);
                // Add delay to ensure page content is loaded before scrolling
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    });
                }, 100); // Small delay to allow for page load
            } catch (error) {
                console.error('Navigation failed:', error);
            }
        },
        [navigate]
    );

    const isComingSoon = isProjectComingSoon(project.title);
    const projectUrl = `${project.href}/#${project.label}`;

    // Render appropriate link based on project status
    const renderProjectLink = () => {
        if (isComingSoon) {
            return <ProjectComingSoon title={project.title} />;
        }

        return (
            <Link
                className={LINK_CLASSES}
                to={projectUrl}
                onClick={(e) => handleNavClick(e, projectUrl)}
                target="_self"
                rel="noreferrer noopener"
                aria-label={`View project: ${project.title}`}
            >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                    {project.title}
                    <span className="inline-block" aria-hidden="true">
                        <ArrowIcon />
                    </span>
                </span>
            </Link>
        );
    };

    return (
        <li className="mb-12">
            <div className={CONTAINER_CLASSES}>
                <div className={OVERLAY_CLASSES} />

                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>{renderProjectLink()}</h3>

                    <p
                        className={`mt-2 text-sm leading-normal ${isComingSoon ? 'blur-sm' : ''}`}
                        aria-hidden={isComingSoon}
                    >
                        {project.description}
                    </p>

                    <ProjectTags
                        tags={project.tags}
                        isBlurred={isComingSoon}
                        aria-hidden={isComingSoon}
                    />
                </div>

                <ProjectImage src={project.image} alt={`${project.title} project screenshot`} />
            </div>
        </li>
    );
};
