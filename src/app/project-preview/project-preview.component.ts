import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {
  @Input() skills: string;
  @Input() image_thumbnail: any;
  
  skill_list: Array<string>;

  constructor() { 
  }

  ngOnInit() {
    this.skill_list = this.skills.split(",");
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.show);
  //   this.show = changes.show.currentValue;
  //   console.log("child component: " + this.show);
  //   }




}
