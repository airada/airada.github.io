export interface Project {
    date_created: Date;
    id: number;
    img: string;
    features?: string;
    problem?: string;
    skills: string[];
    solution?: string;
    summary?: string;
    title: string;
}