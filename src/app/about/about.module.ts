import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFeaturedComponent } from '../portfolio-featured/portfolio-featured.component'


@NgModule({
  exports: [PortfolioFeaturedComponent],
  declarations: [PortfolioFeaturedComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
