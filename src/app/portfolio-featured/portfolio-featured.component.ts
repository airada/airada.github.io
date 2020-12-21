import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-featured',
  templateUrl: './portfolio-featured.component.html',
  styleUrls: ['./portfolio-featured.component.css']
})
export class PortfolioFeaturedComponent implements OnInit {
  @Input() badges: string;
  @Input() image: string;
  @Input() title: string
  @Input() date: string;
  @Input() description: string;
  @Input() code: string;
  @Input() link: string;
  badges_list: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.badges_list = this.badges.split(",");
  }

}
