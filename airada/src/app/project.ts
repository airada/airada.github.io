export interface Project {
    date_created: Date;
    img: string;
    notable_features?: string;
    problem?: string;
    skills: Map<string, Array<string>>;
    solution?: string;
    summary?: string;
    title: string;
}