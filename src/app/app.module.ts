import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ProjectPreviewComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
