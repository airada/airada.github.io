import { Project } from './project';
import { PROJECTS } from './projects';

export const PROJECT_SKILLS: string[] =  getProjectSkills();
export const project_skills: Map<string, number[]> = mapProjectSkills();

function mapProjectSkills() {
    let project_skills: Map<string, number[]> = new Map();

    for (let i = 0; i < PROJECTS.length; i++){
        let skills = PROJECTS[i].skills;
        let id = PROJECTS[i].id;

        for (let j = 0; j < skills.length; j++){
            let key: string = skills[j];
            
            if (project_skills.has(key)) {
                let values: number[] = project_skills.get(key)!;
                if (!values.includes(id)) {
                    values = values.concat([id]);
                    project_skills.set(key, values);
                }
            } else {
                project_skills.set(skills[j], [id]);
            }
        }
    }

    return project_skills;
}

function getProjectSkills() {
    let project_skills: string[] = [];

    for (let i = 0; i < PROJECTS.length; i++){
        let skills = PROJECTS[i].skills;

        for (let j = 0; j < skills.length; j++){
            let skill: string = skills[j];
            
            if (!project_skills.includes(skill)) {
                project_skills.push(skill);
            }
        }
    }

    return project_skills;
}