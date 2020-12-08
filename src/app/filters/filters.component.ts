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
  suggestion_list: Array<string>;
  selected_list: any = [];
  searchInput: string = "";
  
  constructor() { 
  }

  ngOnInit() {
    this.item_list = this.items.split(",");
    this.suggestion_list = this.item_list.slice();
  }

  @HostListener('keyup') onKeyUp() {
    this.resize();
  }

  @HostListener('focus') onFocus() {
    this.resize();
  }

  reset_list(){
    this.suggestion_list = this.item_list.slice();
  }

  update_suggestions(list) {
    this.suggestion_list.splice(0, this.suggestion_list.indexOf(list[0]));
    var last = this.suggestion_list.indexOf(list.pop());
    console.log(last);
    this.suggestion_list.splice(last + 1, this.suggestion_list.length - last);

  }

  search(str) {
    var suggestions = [];
    const regex : RegExp = new RegExp('^'+str+'+');

    for(let i = 0; i < this.suggestion_list.length; i++) {
      if(this.suggestion_list[i].toLocaleLowerCase().search(regex) == -1) {
        console.log("mismatch")
      } else {
        suggestions.push(this.suggestion_list[i]);
        console.log("match");
      }
    }
    console.log(suggestions);
    this.update_suggestions(suggestions);
  }

  modelChange(str) {
    if (!str){
      this.reset_list();
      return;
    }
    this.searchInput = str;
    console.log("searching:", this.searchInput)
    this.search(this.searchInput.toLowerCase());
  }

  value(item){
    console.log("selecting: ", item);
    this.userInput.nativeElement.value = "";
    this.reset_list();
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
    this.reset_list();
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
