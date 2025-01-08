import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { PROJECT_SKILLS, project_skills } from '../project/project-skills.function';
import { NavbarComponent } from '../navbar/navbar.component';
import { PortfolioGridComponent } from '../portfolio-grid/portfolio-grid.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  standalone: true,
  imports: [NavbarComponent, PortfolioGridComponent, FooterComponent],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects: Project[] = [];
  readonly filters: string[] = PROJECT_SKILLS;
  readonly project_skills: Map<string, number[]> = project_skills;

  filtered_projects: Project[] = [];
  selected_filters: string[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
    this.filtered_projects = this.projects;
  }

  private getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  filter($event: string) {
    const filtered_item: string = $event; //event emitted by filters component
    console.log(filtered_item);
    this.updateFilters(filtered_item);
    this.updateFilteredProjects();
  }

  private updateFilters(filtered_item: string): void {
    if (this.selected_filters.includes(filtered_item)) {
      const index = this.selected_filters.indexOf(filtered_item);
      this.selected_filters.splice(index, 1);
    } else {
      this.selected_filters.push(filtered_item);
    }
  }

  private getVisibleProjects(): number[] {
    let visible_projects: number[] = this.project_skills.get(this.selected_filters[0])!;
    
    for (let i = 1; i < this.selected_filters.length; i++){
      const projects = this.project_skills.get(this.selected_filters[i])!;
      visible_projects = visible_projects.filter(element => projects.includes(element));
    }

    return visible_projects;
  }

  private updateFilteredProjects(): void {
    if (this.selected_filters.length == 0) {
      this.filtered_projects = this.projects;
    } else {
      this.filtered_projects = [];
      const projects: Set<number> = new Set(this.getVisibleProjects());
  
      for (let i = 0; i < this.projects.length; i++){
        if (projects.has(this.projects[i].id)){
          this.filtered_projects.push(this.projects[i]);
        }
      }
    }
  }

}
