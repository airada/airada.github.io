import { Component, OnInit, ChangeDetectorRef, ElementRef, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations: [
    trigger('starsAnim', [
      transition('down => up', [
        animate("100s linear", keyframes([
          style({ transform: 'translateY(0vh)' }),
          style({ transform: 'translateY(-200vh)' })
        ]))
      ])
    ]),
    trigger('starsAnim1', [
      transition('down => up', [
        animate("125s linear", keyframes([
          style({ transform: 'translateY(0vh)' }),
          style({ transform: 'translateY(-200vh)' })
        ]))
      ])
    ]),
    trigger('starsAnim2', [
      transition('down => up', [
        animate("150s linear", keyframes([
          style({ transform: 'translateY(0vh)' }),
          style({ transform: 'translateY(-200vh)' })
        ]))
      ]),
    ])
  ]
})

export class AboutComponent implements OnInit {
  constructor(private router: Router, private cdr: ChangeDetectorRef) { }
  private stars: string;
  private stars1: string;
  private stars2: string;
  public state = 'down';
  private colors: Array<string> = ["#3C4F6C75", "#1A4C4A75", "#FED3B7", "#FF925E80", "#FF7A66", "#ABA3D275", "#FFD9EE50", "#FFD96C", "#D65F9150"]


  ngOnInit() {
    this.stars = this.box_shadow(400, 250, 7, 8);
    this.stars1 = this.box_shadow(200, 200, 2, 6);
    this.stars2 = this.box_shadow(75, 200, 0, 1);
    document.getElementById("stars").style.boxShadow = this.stars;
    document.getElementById("stars1").style.boxShadow = this.stars1;
    document.getElementById("stars2").style.boxShadow = this.stars2;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    let height = window.scrollY;
    let bg = document.getElementById("whitebg");
   
    bg.style.top = height * 0.25 + 'px';
  }

  ngAfterViewInit() {
    if (this.state === "down") { this.state = "up" }
    else { this.state = "down" }
    this.cdr.detectChanges();
  }

  onEnd(event) {
    if (this.state === "up") { this.state = "down" }
    else { this.state = "up" }
    // console.log("animation ended: state = ", this.state);
  }

  private rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private box_shadow(num_stars, vh_height, color1, color2) {
    let box_shadow_str = "";

    for (let i = 0; i <= num_stars; i++) {
      box_shadow_str += this.rng(0, 100).toString() + "vw " + this.rng(0, vh_height).toString() + "vh " + "#faf9f7"

      if (i != num_stars) {
        box_shadow_str += ","
      }

    }

    return box_shadow_str
  }
}
