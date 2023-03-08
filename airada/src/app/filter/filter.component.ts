import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Project } from '../project/project';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() projects: Project[] = [];
  @Input() filters: string[] = [""];
  @Output() filter_item = new EventEmitter<string>();
  platform_filters: string[] = [];
  language_filters: string[] = [];
  skill_filters: string[] = [];

  constructor() {}

  ngOnInit() {
    this.setFilters();
  }

  setFilters() {
    for(let i = 0; i < this.filters.length; i++){
      let filter_item = this.filters[i].split("_");

      switch (filter_item[0]){
        case "platform": {
          this.platform_filters.push(filter_item[1]);
          break;
        }
        case "language": {
          this.language_filters.push(filter_item[1]);
          break;
        }
        case "skill": {
          this.skill_filters.push(filter_item[1]);
          break;
        }
        default: {
          break;
        }
      }
    }

  }

  getItem(filter:string, item: string) {
    let project_skill = filter + "_" + item;
    this.emitEvent(project_skill);
    this.toggleActiveBackground(item);
  }

  private emitEvent(item: string) {
    this.filter_item.emit(item);
  }

  private toggleActiveBackground(item: string) {
    var element = document.getElementById(item)!;
    element.classList.toggle("active");

    if (element.classList.contains("active")){
      element.setAttribute("aria-current", "true");
    } else {
      element.removeAttribute("aria-current");
    }
  }
}
