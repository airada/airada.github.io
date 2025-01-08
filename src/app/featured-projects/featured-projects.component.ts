import { Component } from '@angular/core';
import { Project } from '../project/project';
import { FEATURED_PROJECTS } from '../project/projects';
import { PROJECT_SKILLS} from '../project/project-skills.function';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {
  projects: Project[] = FEATURED_PROJECTS;
  buttons = PROJECT_SKILLS;
  img_src: string = "";
  showTags = true;

 alterDivHeight() {
    this.showTags = !this.showTags;
 }

 updateSRC(id: number, ext: string): void {
  let src = ((this.projects[id].img).split("."))[0].concat(ext);
  this.projects[id].img = src;
 }
}
