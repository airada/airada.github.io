import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-portfolio-featured',
  templateUrl: './portfolio-featured.component.html',
  styleUrls: ['./portfolio-featured.component.css'],
  animations: [
    trigger('alert', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s ease-out')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in')
      ]),
    ]),
  ]
})
export class PortfolioFeaturedComponent implements OnInit {
  @Input() badges: string;
  @Input() image: string;
  @Input() image2: string;
  @Input() title: string
  @Input() date: string;
  @Input() description: string;
  @Input() problem: string;
  @Input() solution: string;
  @Input() features: string;
  @Input() code: string;
  @Input() link: string;
  badges_list: Array<string>;
  skillExist = true;

  constructor() { }

  ngOnInit(): void {
    this.badges_list = this.badges.split(",");
  }

  details(){
    console.log("to be added.");
    this.alert_fadein();
    this.alert_fadeout();
  }

  alert_fadein() {
    this.skillExist = false;
  }

  alert_fadeout() {
    setTimeout( () => {
          this.skillExist = true;
        }, 2000);
   }
}
