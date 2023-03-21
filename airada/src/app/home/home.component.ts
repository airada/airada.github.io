import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 role: string = "> ";
 typingSpeed: number = 100;

  constructor(){
  }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.typeWriter("SOFTWARE ENGINEERING");
    this.clear(this.delay("SOFTWARE ENGINEERING"));
    this.typeWriter("GAME DEVELOPMENT", this.delay("SOFTWARE ENGINEERING"));
    this.clear(this.delay("SOFTWARE ENGINEERING") + this.delay("GAME DEVELOPMENT"));
    this.typeWriter("ART AND DESIGN", this.delay("SOFTWARE ENGINEERING") + this.delay("GAME DEVELOPMENT"));
  }
  

 typeWriter(string: string, delay: number = 0) {
    setTimeout(() => {
        for (let i = 0; i < string.length; i++) {
          this.type(string, this.typingSpeed * i, i);
      }
    }, delay);
  }

  type(string: string, typingSpeed: number, index: number) {
      setTimeout(() => {
        document.getElementById("typewriter")!.innerHTML += string.charAt(index);
      }, typingSpeed);
  }

  clear(delay: number) {
    setTimeout(() => {
      document.getElementById("typewriter")!.innerHTML = "> ";
    }, delay);
  }

  delay(string: string): number {
    return (string.length * this.typingSpeed) + 1500;
  }
}
