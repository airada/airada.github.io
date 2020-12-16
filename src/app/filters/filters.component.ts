import {
  Component,
  Input,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
  OnInit,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"],
})
export class FiltersComponent implements OnInit {
  @ViewChild("input") userInput: ElementRef;
  @Input() title: string;
  @Input() items: string;
  @Output() selected_event = new EventEmitter<string>();
  item_list: Array<string>;
  suggestion_list: Array<string>;
  selected_list: any = [];
  searchInput: string = "";
  arrowkeyLocation = 0;
  content = false;
  scrollLocation = 0;

  constructor() {}

  ngOnInit() {
    this.item_list = this.items.split(",");
    this.suggestion_list = this.item_list.slice();
  }

  @HostListener("keyup") onKeyUp() {
    this.resize();
  }

  @HostListener("focus") onFocus() {
    this.resize();
  }

  keydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38: // this is the ascii of arrow up
        if (this.arrowkeyLocation >= 1) {
          this.arrowkeyLocation--;
          this.scrollLocation = this.scrollLocation - 30;
          document.getElementById(
            "dropdown-content"
          ).scrollTop = this.scrollLocation;
        }
        break;
      case 40: // this is the ascii of arrow down
        if (this.arrowkeyLocation < this.item_list.length - 1) {
          this.arrowkeyLocation++;
          if (this.arrowkeyLocation != 0) {
            this.scrollLocation = this.scrollLocation + 30;
          }
          document.getElementById(
            "dropdown-content"
          ).scrollTop = this.scrollLocation;
        }
        break;
      case 13:
        this.add_selected(this.suggestion_list[this.arrowkeyLocation]);
        break;
      case 10:
        this.add_selected(this.suggestion_list[this.arrowkeyLocation]);
        break;
      case 8:
        if (
          this.userInput.nativeElement.value == "" &&
          this.selected_list.length > 0
        ) {
          this.emit_event(this.selected_list.pop());
        }
        break;
    }
  }

  clear() {

    for (let i = 0; i < this.selected_list.length; i++) {
      this.emit_event(this.selected_list[i]);
    }

    this.selected_list = [];
  }

  item() {
    this.show_content();
    this.content = true;
  }

  blurred(ev) {
    if (this.content) {
      this.show_content();
    } else {
      this.hide_content();
    }
  }

  reset_input() {
    this.userInput.nativeElement.value = "";
    this.userInput.nativeElement.setAttribute("size", 6);
  }

  reset_list() {
    this.suggestion_list = this.item_list.slice();
  }

  update_suggestions(list) {
    this.arrowkeyLocation = 0;
    this.suggestion_list.splice(0, this.suggestion_list.indexOf(list[0]));
    var last = this.suggestion_list.indexOf(list.pop());
    this.suggestion_list.splice(last + 1, this.suggestion_list.length - last);
  }

  includeBG(item) {
    if (this.selected_list.includes(item)) {
      return "dropdown-item bg-selected";
    } else {
      return "dropdown-item";
    }
  }

  search(str) {
    var suggestions = [];
    this.reset_list();
    const regex: RegExp = new RegExp("^" + str + "+");

    for (let i = 0; i < this.suggestion_list.length; i++) {
      if (this.suggestion_list[i].toLocaleLowerCase().search(regex) != -1) {
        suggestions.push(this.suggestion_list[i]);
      }
    }

    this.update_suggestions(suggestions);
  }

  modelChange(str) {
    this.show_content();

    if (!str) {
      this.reset_list();
      return;
    }
    this.searchInput = str;
    this.search(this.searchInput.toLowerCase());
  }

  value(item) {
    const str =
      item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1);

    if (
      this.item_list.includes(str) &&
      this.selected_list.includes(str) == false
    ) {
      this.add_selected(str);
    } else if (this.selected_list.includes(str)) {
      this.reset_input();
      this.reset_list();
      this.selected_list.splice(this.selected_list.indexOf(str), 1);
    }
  }

  private resize() {
    if (this.userInput.nativeElement.value.length == 0) {
      this.userInput.nativeElement.setAttribute("size", 6);
    } else if (this.userInput.nativeElement.value.length == 1) {
      this.userInput.nativeElement.setAttribute("size", 1);
    } else {
      this.userInput.nativeElement.setAttribute(
        "size",
        Math.round(this.userInput.nativeElement.value.length / 2)
      );
    }
  }

  show_content() {
    this.content = false;
    var inputValue = <HTMLInputElement>(
      document.getElementById("dropdown-content")
    );
    inputValue.classList.remove("hide");
  }

  hide_content() {
    var inputValue = <HTMLInputElement>(
      document.getElementById("dropdown-content")
    );
    inputValue.classList.add("hide");
  }

  toggle_content() {
    var inputValue = <HTMLInputElement>(
      document.getElementById("dropdown-content")
    );
    inputValue.classList.toggle("hide");
  }

  add_selected(item) {
    this.reset_input();
    this.reset_list();
    if (this.selected_list.indexOf(item) == -1) {
      this.selected_list.push(item);
    } else {
      this.selected_list.splice(this.selected_list.indexOf(item), 1);
    }

    this.emit_event(item);
  }

  emit_event(item) {
    console.log(item);
    switch (item) {
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
