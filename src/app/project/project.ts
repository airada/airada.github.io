export interface Project {
    date_created?: Date;
    id: number;
    img: string;
    img_alt: string;
    features?: string;
    objective?: string;
    repo?: string;
    skills?: string[];
    result?: string;
    summary?: string;
    title: string;
    type?: string[];
    year?: string;
}