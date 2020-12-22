import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-project-preview",
  templateUrl: "./project-preview.component.html",
  styleUrls: ["./project-preview.component.css"],
})
export class ProjectPreviewComponent implements OnInit {
  @Input() skills: string;
  @Input() image_thumbnail: any;
  @Input() title: string;

  skill_list: Array<string>;

  constructor() {}

  ngOnInit() {
    this.skill_list = this.skills.split(",");
  }

  hide_overlay(){
    let overlay = <HTMLElement>document.getElementById("overlay");
    overlay.classList.remove("bg-overlay");
  }

  show_overlay(){
    let overlay = <HTMLElement>document.getElementById("overlay");
    overlay.classList.add("bg-overlay");
  }
}
