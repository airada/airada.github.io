import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project/project';

@Component({
  selector: 'app-portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
  styleUrls: ['./portfolio-grid.component.css']
})
export class PortfolioGridComponent {
  @Input() projects: Project[] = [];

  constructor() {}

  ngOnInit() {

  }
}
