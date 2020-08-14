import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  skill_tags: any = [["cs", "C#"], ["cpp", "C++"], ["python", "PYTHON"], ["java", "JAVA"], ["unity", "UNITY"], ["unreal", "UNREAL"], ["design", "DESIGN"], ["backend", "BACKEND"], ["mobile", "MOBILE"], ["vr", "VIRTUAL REALITY"], ["clear", "CLEAR ALL"]];
  chosen_skill: any = [];

  constructor() { }

  ngOnInit() {
  }

  //Skill is added to or removed from chosen list
  add_skill(skill_item) {
    if (skill_item == "clear"){
      for (let i = 0; i < this.skill_tags.length; i++) {
        this.toggle_class(this.skill_tags[i][0], false);    //removes hidden class, if it exists  
        var inputValue = (<HTMLInputElement>document.getElementById(this.skill_tags[i][0]));
        inputValue.removeAttribute('style');
        inputValue.classList.add('bg-warning');

      }

      this.chosen_skill = [];
      return;
    }
    if (this.chosen_skill.includes(skill_item)) {
      this.chosen_skill.splice(this.chosen_skill.indexOf(skill_item), 1);
      this.change_btn_color(skill_item, 'bg-warning', '#d39e00', false);
    } else {
      this.chosen_skill.push(skill_item);
      this.change_btn_color(skill_item, 'bg-warning', '#d39e00', true);
    }

    this.filter_skill();
  }

  change_btn_color(item, color1, color2, push) {
    var inputValue = (<HTMLInputElement>document.getElementById(item));
    if (push){ inputValue.setAttribute("style","background-color: "+ color2 + ";"); } 
    else {  inputValue.removeAttribute('style');  }
    inputValue.classList.toggle(color1);
  }

  // Filters projects based on the chosen skill list
  filter_skill() {
    let len = this.chosen_skill.length;

    for (let i = 0; i < this.skill_tags.length; i++) {
      if (len === 0) {
        this.toggle_class(this.skill_tags[i][0], false);    //removes hidden class, if it exists   
      } else if (len >= 1) {
        this.toggle_class(this.skill_tags[i][0], true);     //adds hidden class to all projects
      }
    }

    if (len === 1) {
      this.toggle_class(this.chosen_skill[0], false);
    } else if (len > 1) {
      let elements = document.querySelectorAll("." + this.chosen_skill[0]);

      elements.forEach(element => {
       const result = this.chosen_skill.every(val => element.classList.contains(val));
       if (result) { element.classList.remove('hidden');}
      }
      )
    }
  }

  toggle_class(skill, flag) {
    let elements = document.querySelectorAll("." + skill);
    elements.forEach(element => {
      element.classList.toggle('hidden', flag);
      console.log(skill + ": " + element.classList);
    });
  }

}
