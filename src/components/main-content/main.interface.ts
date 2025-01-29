export interface MainContentProps {
    data: {
        // work: Array<{
        //     id: string;
        //     date: string;
        //     position: string[];
        //     company: string;
        //     website: string;
        //     description: string[];
        //     skills: Array<{
        //         id: string;
        //         name: string;
        //     }>;
        // }>;
        projects: Array<{
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
        }>;
        certificates: Array<{
            name: string;
            date: string;
            img: string;
            link: string;
        }>;
    };
}