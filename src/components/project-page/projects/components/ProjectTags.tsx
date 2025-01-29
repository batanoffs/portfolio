import { ProjectProps } from '../types/project.interface';

interface ProjectTagsProps {
    tags: ProjectProps['tags'];
    isBlurred?: boolean;
}

export const ProjectTags = ({ tags, isBlurred = false }: ProjectTagsProps) => {
    if (!tags?.length) return null;

    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map((tag) => (
                <li key={tag.id} className="mr-1.5 mt-2">
                    <div
                        className={`flex items-center rounded-full bg-teal-400/10
                                px-3 py-1 text-xs font-medium leading-5 text-teal-300
                                ${isBlurred ? 'blur' : ''}`}
                    >
                        {tag.name}
                    </div>
                </li>
            ))}
        </ul>
    );
};
