import { Link } from 'react-router-dom';
import { ArrowIcon } from './components/ArrowIcon';

interface ProjectComingSoonProps {
    title: string;
}

export const ProjectComingSoon = ({ title }: ProjectComingSoonProps) => {
    return (
        <Link
            className="inline-flex items-baseline font-medium
                leading-tight text-slate-200 hover:text-teal-300
                focus-visible:text-teal-300 group/link text-base"
            to="/#"
            target="_self"
            aria-label="coming soon"
        >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
                {title}
                <span className="inline-block">
                    <ArrowIcon />
                </span>
            </span>
        </Link>
    );
};
