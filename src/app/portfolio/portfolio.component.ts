import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  skill_tags: any = [["cs","C#"], ["cpp","C++"], ["python","PYTHON"],["java","JAVA"], ["unity","UNITY"],["unreal","UNREAL"],["design","DESIGN"], ["backend","BACKEND"], ["mobile","MOBILE"], ["vr","VIRTUAL REALITY"]];
  chosen_skill: any = [];
  skill_array: any = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // you'll get your through 'elements' below code
}

  //Adds or Removes Skill to filtering list
  add_skill(skill_item){

    if (this.chosen_skill.includes(skill_item)){
      this.chosen_skill.splice(this.chosen_skill.indexOf(skill_item), 1);
      //console.log(skill_item + " was UNSELECTED");
      this.change_btn_color(skill_item, 'bg-warning','bg-dark');

    } else {
      this.chosen_skill.push(skill_item);
      //console.log(skill_item + " was SELECTED");
      this.change_btn_color(skill_item, 'bg-dark','bg-warning');
      this.filter_skill();
    }

    console.log(this.chosen_skill);
  }

  change_btn_color(item, removed, added){
    var inputValue = (<HTMLInputElement>document.getElementById(item));
    inputValue.classList.remove(removed);  
    inputValue.classList.add(added);
  }

  is_chosen(skill){
    return this.chosen_skill.includes(skill)
  }
  
  // Looks for components with ALL skills NOT chosen 
  // 1. Loop through skill tags to find which HTML elements DO NOT have the chosen skill in order to HIDE them
  // 2. SHOW HTML elements that have the class
  filter_skill(){
    for(let i = 0; i < this.skill_tags.length; i++){
      this.hide_class(this.skill_tags[i][0]);     //initially hides all HTML elements
    }

    for(let j = 0; j < this.chosen_skill.length; j++){
      this.show_class(this.chosen_skill[j]);
    }
  }

  hide_class(skill){
    let elements = document.querySelectorAll("."+skill);
    elements.forEach(element => {
      element.classList.add('hidden');
    });
  }

//Toggles hidden class
  show_class(skill){
    console.log(skill);
    let elements = document.querySelectorAll("."+skill);
    elements.forEach(element => {
      element.classList.remove('hidden');
      console.log(element.classList);
    });
  }

 



  

}
