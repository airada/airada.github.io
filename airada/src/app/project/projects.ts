import { Project } from './project';

/* 
        HOW TO ADD PROJECTS

        1. Copy the Project[] template and fill in the information for PROJECTS.
        2. For skills, prepend either 'platform_', 'language_', or 'skill_' to the skill used in the project
        3. Add any additional skills to the PROJECT_SKILLS array in project-skills.ts.
*/

export const FEATURED_PROJECTS: Project[] = [
    { 
        id: 0,
        date_created: new Date("2019-09-01"), 
        img: "/assets/mockup_website_01.jpg", 
        skills: ["platform_Windows","platform_MacOS","platform_iOS","platform_Android","language_HTML/CSS",
        "language_TypeScript","skill_Angular","skill_Bootstrap","skill_Design"],
        title: "Personal Website",
        problem: "Creating a minimalist, accessible, responsive design while optimizing website performance.",
        solution: "Heavy test-driven development using accessibility checkers, performance and network metrics, and user interface design theories and best practices.",
        features: "Open-source portfolio multi-filter component, original interface and mockup designs.",
        summary: "Personal website with portfolio and accomplishments."
    }
]

export const PROJECTS: Project[] = [
    { 
        id: 0,
        date_created: new Date("2019-09-01"), 
        img: "/assets/mockup_website_01.jpg", 
        skills: ["platform_Desktop","platform_Mobile","language_HTML/CSS",
        "language_TypeScript","skill_Angular","skill_Bootstrap"], 
        title: "Personal Website"
    }
]