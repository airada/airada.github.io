import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';
import { FilterComponent } from './filter/filter.component';
import { SplitPipe } from './pipes/split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    FeaturedProjectsComponent,
    PortfolioGridComponent,
    FilterComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
