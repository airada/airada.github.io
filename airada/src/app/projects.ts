import { Project } from './project';

export const PROJECTS: Project[] = [
    { 
        date_created: new Date("2019-09-01"), 
        img: "D:\Projects\WebDev\airada\airada.github.io\airada\src\assets\mockup_website_01.jpg", 
        skills:  new Map([
            ["platforms", ["windows","macos","ios","android"]],
            ["languages", ["htmlcss","typescript"]],
            ["skills", ["angular","bootstrap","design"]]
        ]), 
        title: "Personal Website"
    }
]