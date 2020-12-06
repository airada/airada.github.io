import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @ViewChild('input') userInput: ElementRef;
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

  @HostListener('keyup') onKeyUp() {
    this.resize();
  }

  @HostListener('focus') onFocus() {
    this.resize();
  }

  private resize() {
    this.userInput.nativeElement.setAttribute('size', this.userInput.nativeElement.value.length);
  }

  show_content () {
    var inputValue = (<HTMLInputElement>document.getElementById('dropdown-content'));
    inputValue.classList.remove('hide');
  }

  hide_content () {
    var inputValue = (<HTMLInputElement>document.getElementById('dropdown-content'));
    inputValue.classList.add('hide');
  }

  toggle_content() {
    var inputValue = (<HTMLInputElement>document.getElementById('dropdown-content'));
    inputValue.classList.toggle('hide');
  }

  change_bg_color(item) {
    console.log(item);
    var inputValue = (<HTMLInputElement>document.getElementById(item));
    inputValue.classList.toggle('bg-selected');
  }

  add_selected(component, item) {
    this.change_bg_color(component);
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
