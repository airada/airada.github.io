import { Component, Input } from '@angular/core';
import { Project } from '../project/project';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
  standalone: true,
  imports: [NgFor, RouterLink],
  styleUrls: ['./portfolio-grid.component.css']
})
export class PortfolioGridComponent {
  @Input() projects: Project[] = [];
}
