import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VerbsBoardComponent } from "./verbs-board/verbs-board.component";
import { StartScreenComponent } from "./start-screen/start-screen.component";

const routes: Routes = [
  { path: "verbs", component: VerbsBoardComponent },
  { path: "", component: StartScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
