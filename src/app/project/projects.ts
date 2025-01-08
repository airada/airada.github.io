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
        img: "/assets/personal.jpg", 
        img_alt: "A phone mockup of my personal website.",
        title: "Personal Website",
        summary: "Personal website with portfolio and accomplishments.",
        repo: "https://github.com/airada/airada.github.io",
        type: ["Website", "Design"],
    },
    { 
        id: 1,
        img: "/assets/healthwise.jpg",
        img_alt: "A tablet mockup of the profile page that I created for The UNITE Project, Healthwise.",
        title: "Online Healthcare",
        summary: "Researched-based, preventative healthcare application for expectant mothers.",
        repo: "https://github.com/airada/healthwise",
        type: ["Website", "Design"],
    },
    { 
        id: 2,
        img: "/assets/fabflix.jpg",
        img_alt: "A laptop mockup of my Fabflix website's cart page, including movie titles, quantities, and prices." ,
        title: "Modern Blockbuster",
        summary: "Purchase movies as a customer or update stock as an admin. Android application available.",
        repo: "https://github.com/airada/cs122b-update",
        type: ["Website","Mobile"]
    }
]

export const PROJECTS: Project[] = [
    { 
        date_created: new Date("2019-09-01"),
        id: 0,
        img: "/assets/personal.jpg", 
        img_alt: "A phone mockup of my personal website.",
        skills: ["HTML/CSS","TypeScript","Angular","Bootstrap", "Clip Studio Paint"],
        title: "Personal Website",
        objective: "Build a website that focuses on my portfolio and style without complicating the user experience.",
        result: "Simple navigation and minimalist design that's loosely inspired by social media and linktree pages. There are fewer components and animations, but faster load times and lower storage consumption.",
        features: "Original user interface elements, mockup photos, and design.",
        summary: "Personal website with portfolio and accomplishments.",
        repo: "https://github.com/airada/airada.github.io",
        type: ["Website", "Design"],
        year: "2019 - 2025"
    },
    { 
        date_created: new Date("2020-01-01"),
        id: 1,
        img: "/assets/healthwise.jpg",
        img_alt: "A tablet mockup of the profile page that I created for The UNITE Project, Healthwise.",
        skills: ["HTML/CSS","TypeScript","JSON Schemas","Angular","Bootstrap"],
        title: "Healthwise",
        objective: "Make improvements to the codebase and user interface while keeping the branding consistent and the current functionality untouched.",
        result: "Legacy code was updated to be more modular, the file structure became more maintainable, and the user experience became more consistent through redesigns, new components, and features.",
        features: "New design for the profile page, newly created survey options, and an added autosave feature.",
        summary: "Researched-based, preventative healthcare application for expectant mothers.",
        repo: "https://github.com/airada/healthwise",
        type: ["Website", "Design"],
        year: "2020"
    },
    { 
        date_created: new Date("2020-01-01"),
        id: 2,
        img: "/assets/fabflix.jpg",
        img_alt: "A laptop mockup of my Fabflix website's cart page, including movie titles, quantities, and prices." ,
        skills: ["SQL", "Java", "Amazon Web Services", "MySQL", "jQuery", "Apache Tomcat", "Android Studio", "JavaScript", "HTML/CSS", "Bootstrap"],
        title: "Fabflix",
        objective: "Learn more about advanced database techniques, cloud technology, and microservices architecture at a larger scale.",
        result: "Dynamic CRUD application hosted using Amazon Web Services (EC2, S3, and RDS), Java Servlets, and MySQL with over 286k records of data stored via IMDb.",
        features: "Load balancing, data encryption, available as an Android application, and added IMDb movie posters.",
        summary: "Purchase movies as a customer or update stock as an admin. Android application available.",
        type: ["Website","Mobile"],
        repo: "https://github.com/airada/cs122b-update",
        year: "2020 - 2025"
    }
]