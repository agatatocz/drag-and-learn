import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IrregularVerbsPageComponent } from "./german/pages/irregular-verbs-page/irregular-verbs-page.component";
import { HomePageComponent } from "./german/pages/home-page/home-page.component";

const routes: Routes = [
  { path: "verbs", component: IrregularVerbsPageComponent },
  { path: "", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
