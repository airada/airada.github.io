import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';





const routes: Routes = [
  {path: 'Portfolio', component: PortfolioComponent},
  {path: 'About', component: AboutComponent},
  {path: 'ProjectPreview', component: ProjectPreviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
