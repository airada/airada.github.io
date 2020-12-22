import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "../filters/filters.component";
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";


@NgModule({
  exports: [FiltersComponent, ProjectPreviewComponent],
  declarations: [FiltersComponent, ProjectPreviewComponent],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
