import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "../filters/filters.component";
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { PortfolioComponent } from "./portfolio.component";


@NgModule({
  exports: [AppRoutingModule, FiltersComponent, ProjectPreviewComponent, PortfolioComponent],
  declarations: [FiltersComponent, ProjectPreviewComponent, PortfolioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ]

})
export class PortfolioModule { }
