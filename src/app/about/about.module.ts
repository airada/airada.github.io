import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFeaturedComponent } from '../portfolio-featured/portfolio-featured.component'
import { AboutComponent } from './about.component'
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { RouterTestingModule } from "@angular/router/testing";


@NgModule({
  exports: [AppRoutingModule,PortfolioFeaturedComponent, AboutComponent],
  declarations: [PortfolioFeaturedComponent, AboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    RouterTestingModule
  ]
})
export class AboutModule { }
