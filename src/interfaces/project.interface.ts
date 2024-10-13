export type ProjectProps = {
    styles: string;
    project: {
        id: string;
        label: string;
        title: string;
        description: string;
        image: string;
        video: string;
        links: {
            live?: string;
            github: string;
            npm?: string;
        };
        href: string;
        readme: string;
        badges: { type: string; link: string }[];
        tags: { id: string; name: string }[];
    };
};

export interface ProjectLinksProps {
    links: {
        github?: string;
        live?: string;
        npm?: string;
    };
}
