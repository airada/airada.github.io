import { Component, OnInit, ElementRef, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})

export class AboutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    let height = window.scrollY;
    let bg = document.getElementById("whitebg");

    bg.style.top = height * 0.25 + 'px';
  }
}
