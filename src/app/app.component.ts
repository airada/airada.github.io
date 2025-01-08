import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jasmine Irada | Portfolio';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([`${"home"}`]);
  }
}
