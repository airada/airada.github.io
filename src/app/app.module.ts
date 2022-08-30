import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { ProjectPreviewComponent } from "./project-preview/project-preview.component";
import { FiltersComponent } from "./filters/filters.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutModule } from "./about/about.module";
import { PortfolioModule } from "./portfolio/portfolio.module";

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    AboutModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
