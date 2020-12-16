import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "../app/portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { ProjectPreviewComponent } from "./project-preview/project-preview.component";
import { FiltersComponent } from "./filters/filters.component";

const routes: Routes = [
  { path: "Portfolio", component: PortfolioComponent },
  { path: "About", component: AboutComponent },
  { path: "ProjectPreview", component: ProjectPreviewComponent },
  { path: "Filters", component: FiltersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
