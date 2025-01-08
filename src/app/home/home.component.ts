import { Component } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { NavbarComponent } from '../navbar/navbar.component';
import { FeaturedProjectsComponent } from '../featured-projects/featured-projects.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [NavbarComponent, FeaturedProjectsComponent, FooterComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private clipboard: Clipboard) {};

  copyEmail() {
    this.clipboard.copy('jasmineirada@gmail.com');
    alert("Copied 'jasmineirada@gmail.com' to clipboard!");
  }
}
