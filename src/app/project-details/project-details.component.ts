import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Project } from '../project/project';
import { PROJECTS } from '../project/projects';
import { NgFor, NgIf } from '@angular/common';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, RouterLinkActive, UpperCasePipe],
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  project_title: string = "Personal Website";
  projects: Project[] = PROJECTS;
  project: Project;
  project_id: any;
  id: any;
  img_src: string = "";
  skills: any = "";

  constructor(private route: ActivatedRoute) { 
    this.project = this.projects[this.id];
  }

  ngOnInit() {
    this.project_id = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.project = this.projects[this.id];

    this.img_src = (this.project.img.split("."))[0].concat("_details.jpg");
    this.getSkills(this.id);
  }

  getSkills(id: number): string {
    this.skills = this.project.skills?.join(", ");

    return this.skills;
  }
}
