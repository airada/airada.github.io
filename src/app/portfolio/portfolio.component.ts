import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  skills: any = ["C#", "C++", "PYTHON", "JAVA", "GIT", "MYSQL", "UNITY", "UNREAL", "BLENDER"];

  constructor() { }

  ngOnInit() {
  }

}
