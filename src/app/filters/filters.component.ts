import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() title: string;
  @Input() items: string;
  @Output() selected_event = new EventEmitter<string>();
  item_list: Array<string>;
  selected_list: any = [];
  
  constructor() { 
  }

  ngOnInit() {
    this.item_list = this.items.split(",");
  }

  change_btn_color(item) {
    console.log(item);
    var inputValue = (<HTMLInputElement>document.getElementById(item));
    inputValue.classList.toggle('bg-selected');
    
  }

  add_selected(component, item) {
    this.change_btn_color(component);
    if (this.selected_list.indexOf(item) == -1) {
      this.selected_list.push(item);
    } else {
      this.selected_list.splice(this.selected_list.indexOf(item), 1);
    }
    
    switch(item) { 
      case "C#": { 
        this.selected_event.emit("cs");
        break; 
      }
      case "Project Management": { 
        this.selected_event.emit("pm");
        break; 
      }
      case "HTML/CSS": { 
        this.selected_event.emit("htmlcss");
        break; 
      }
      case "JavaScript": { 
        this.selected_event.emit("js");
        break; 
      }
      default: { 
        this.selected_event.emit(item.toLowerCase());
        break; 
      } 
   } 

  }
}
