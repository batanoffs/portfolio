export interface ProjectProps {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    href: string;
    readme: string;
    video: string;
    links: {
        live?: string;
        github?: string;
        npm?: string;
    };
    badges: {
        type: string;
        link: string;
    }[];
    tags: {
        id: string;
        name: string;
    }[];
}

export interface ProjectListProps {
    projects?: ProjectProps[];
    styles?: string;
}