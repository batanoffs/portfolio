export interface Work {
    id: string;
    date: string;
    position: string[];
    company: string;
    website: string;
    description: string[];
    skills: Array<{
        id: string;
        name: string;
    }>;
}

export interface ExperienceProps {
    experience?: Work[];
    styles?: string;
}
