import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  skills: any = ["C#", "C++", "PYTHON", "JAVA", "GIT", "MYSQL", "UNITY", "UNREAL", "BLENDER", "DESIGN", "BACKEND", "MOBILE", "VIRTUAL REALITY"];
  chosen_skill: any = [];

  constructor() { }

  ngOnInit() {
  }

  filterSkill(skill_item){
    if (this.chosen_skill.includes(skill_item)){
      this.chosen_skill.splice(this.chosen_skill.indexOf(skill_item), 1);
      console.log(skill_item + " was UNSELECTED");
    } else {
      this.chosen_skill.push(skill_item);
      console.log(skill_item + " was SELECTED");
    }

  }

}
