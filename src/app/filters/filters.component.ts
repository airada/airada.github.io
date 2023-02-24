import { Component, Input, Output, ViewChild, Renderer2, ElementRef, EventEmitter, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"],
})

export class FiltersComponent implements OnInit {
  @Input() platforms: string = "";
  @Input() languages: string = "";
  @Input() skills: string = "";
  @Output() filter_skill = new EventEmitter<string>();
  @ViewChild("input") input: ElementRef;
  arrowkey_position: number = -1;
  caret_down: string = "assets/img/caret-down.svg"
  caret_up: string = "assets/img/caret-up.svg"
  input_focused: boolean = false;
  skills_list: Array<string> = [];
  platforms_list: Array<string> = [];
  languages_list: Array<string> = [];
  private scroll_position: number = 0;
  search_size: number = 12;
  selected: Array<string> = [];
  suggestions: Array<string> = [];
  sortBy: string = "Newest"
  all_skills: string = "";

  constructor(private renderer: Renderer2) {  }

  ngOnInit() { 
    this.all_skills = this.skills.concat(","+this.platforms, ","+this.languages);
    this.skills_list = this.all_skills.split(",");
    this.suggestions = this.skills_list.slice(); 

    this.skills_list = this.skills.split(",");
    this.platforms_list = this.platforms.split(",");
    this.languages_list = this.languages.split(",");
  }

  private input_resize() {
    const length = this.input.nativeElement.value.length;

    switch(length) {
      case 0:
        this.renderer.setAttribute(this.input.nativeElement, "size", this.search_size.toString());
        break;
      case 1:
        this.renderer.setAttribute(this.input.nativeElement, "size", "1");
        break;
      default:
        this.renderer.setAttribute(this.input.nativeElement, "size", Math.round(length/2).toString());
        break;      
    }
  }

  @HostListener("keyup") onKeyUp() {
    this.input_resize();
  }

  @HostListener("focus") onFocus() {
    this.input_resize();
  }

  private set_scroll(position) {
    // document.getElementById("dropdown-content").scrollTop = position;
  }

  private reset_scroll() {
    this.arrowkey_position = -1;
    this.scroll_position = 0;
    this.set_scroll(0);
  }

  private emit_event(item) {
    switch (item) {
      case "C#": {
        this.filter_skill.emit("cs");
        break;
      }
      case "Project Management": {
        this.filter_skill.emit("pm");
        break;
      }
      case "HTML/CSS": {
        this.filter_skill.emit("htmlcss");
        break;
      }
      case "JavaScript": {
        this.filter_skill.emit("js");
        break;
      }
      default: {
        this.filter_skill.emit(item.toLowerCase());
        break;
      }
    }
  }

  keydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38: // Up Arrow Key
        if (this.arrowkey_position > -1) {
          this.arrowkey_position--;
          this.scroll_position -= 20;
          this.set_scroll(this.scroll_position);
        }
        break;
      case 40: // Down Arrow Key
        if (this.arrowkey_position < this.skills_list.length - 1) {
          this.arrowkey_position++;
          if (this.arrowkey_position > 0) {
            this.scroll_position += 20;
            this.set_scroll(this.scroll_position);
          }
        }
        break;
      case 8: // Backspace
        if (this.input.nativeElement.value == "" && this.selected.length > 0) {
          this.emit_event(this.selected.pop());
        }
        this.reset_scroll();
        break;
    }
  }

  private reset_input() {
    this.renderer.setProperty(this.input.nativeElement, "value", "");
    this.renderer.setAttribute(this.input.nativeElement, "size", this.search_size.toString());
  }

  private reset_suggestions() {
    this.suggestions = this.skills_list.slice();
  }

  toggle_skill(item) {
    // this.reset_input();
    this.reset_suggestions();
    if (this.selected.indexOf(item) == -1) {
      this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1);
    }
    this.emit_event(item);
  }

  private update_suggestions(list) {
    this.arrowkey_position = -1;
    this.suggestions.splice(0, this.suggestions.indexOf(list[0]));
    const last = this.suggestions.indexOf(list.pop());
    this.suggestions.splice(last + 1, this.suggestions.length - last);
  }

  private suggest(str) {
    let matches = [];
    this.reset_suggestions();
    const regex: RegExp = new RegExp("^" + str + "+");

    for (let i = 0; i < this.suggestions.length; i++) {
      if (this.suggestions[i].toLowerCase().search(regex) != -1) {
        matches.push(this.suggestions[i]);
      }
    }

    this.update_suggestions(matches);
  }

  search(item) {
    if(item == "" && (this.arrowkey_position != -1)){
      this.toggle_skill(this.suggestions[this.arrowkey_position]);
      return;
    }

    //Capitalize first letter
    const str = item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1);

    if (this.skills_list.includes(str) && !(this.selected.includes(str))) {
      this.toggle_skill(str);
    } else if (this.selected.includes(str) && (this.suggestions.indexOf(str) == this.arrowkey_position)) {
      this.selected.splice(this.selected.indexOf(str), 1);
    } else if (this.arrowkey_position != -1) {
      this.toggle_skill(this.suggestions[this.arrowkey_position]);
    } else if (!this.skills_list.includes(str)){
      this.emit_event("invalid");
    }

    this.reset_input();
    this.reset_scroll();
    this.reset_suggestions();
  }

  content(type, mode) {
    this.reset_scroll();
    let inputValue = <HTMLInputElement>(document.getElementById(type+"-dropdown-content"));
    let caret = <HTMLImageElement>(document.getElementById(type+"-caret"));
    
    let type_list = this.get_other_types(type);
    this.hide_content(type_list[0]);
    this.hide_content(type_list[1]);


    switch(mode){
      case "show":
        inputValue.classList.remove("hide");
        caret.src = this.caret_up;
        break;
      case "hide":
        inputValue.classList.add("hide");
        caret.src = this.caret_down;
        break;
      case "toggle":
        inputValue.classList.toggle("hide");

        if (caret.src.includes(this.caret_down)) {
          caret.src = this.caret_up;
        } else {
          caret.src = this.caret_down;
        }
        break;
    }
  }

  get_other_types(type) {
    switch(type){
      case "platform":
        return ["language", "skill"];
      case "language":
        return ["platform", "skill"];
      case "skill":
        return ["platform", "language"];
    }
  }

  hide_content(type){
    let typeValue = <HTMLInputElement>(document.getElementById(type+"-dropdown-content"));
    let caret = <HTMLImageElement>(document.getElementById(type+"-caret"));


    if (!typeValue.classList.contains("hide")) {
      typeValue.classList.add("hide");
      caret.src = this.caret_down;
    }
  }

  modelChange(str) {
    // this.content('show');
    if (!str) {
      this.reset_suggestions();
      return;
    }
    this.suggest(str.toLowerCase());
  }

  clear() {
    for (let i = 0; i < this.selected.length; i++) {
      this.emit_event(this.selected[i]);
    }
    this.selected = [];
  }

  includeBG(item) {
    if (this.selected.includes(item)) {
      return "dropdown-item bg-selected";
    } else {
      return "dropdown-item";
    }
  }
}
