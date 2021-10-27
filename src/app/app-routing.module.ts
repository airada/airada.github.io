import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "../app/portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";


const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "home", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
