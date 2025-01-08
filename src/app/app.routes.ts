import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
      { path: "portfolio", component: PortfolioComponent },
      { path: "details/:id", component: ProjectDetailsComponent }
  ];