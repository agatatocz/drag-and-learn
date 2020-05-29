import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";

import { SheredModule } from "../shered/shered.module";

import { VerbsService } from "./services/verbs.service";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { IrregularVerbsPageComponent } from "./pages/irregular-verbs-page/irregular-verbs-page.component";
import { ArticlesPageComponent } from "./pages/articles-page/articles-page.component";

@NgModule({
  declarations: [
    HomePageComponent,
    IrregularVerbsPageComponent,
    ArticlesPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    SheredModule,
  ],
  providers: [VerbsService],
  exports: [
    HomePageComponent,
    IrregularVerbsPageComponent,
    ArticlesPageComponent,
  ],
})
export class GermanModule {}
