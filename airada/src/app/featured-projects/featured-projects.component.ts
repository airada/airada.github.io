import { Component } from '@angular/core';
import { Project } from '../project/project';
import { FEATURED_PROJECTS } from '../project/projects';
import { PROJECT_SKILLS} from '../project/project-skills.function';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {
  projects: Project[] = FEATURED_PROJECTS;
  buttons = PROJECT_SKILLS;

  showTags = true;

 alterDivHeight() {
    this.showTags = !this.showTags;
 }
}
