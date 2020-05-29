import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MatGridListModule } from "@angular/material/grid-list";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { SheredModule } from "../shered/shered.module";

import { VerbsService } from "./services/verbs.service";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { IrregularVerbsPageComponent } from "./pages/irregular-verbs-page/irregular-verbs-page.component";

@NgModule({
  declarations: [HomePageComponent, IrregularVerbsPageComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    DragDropModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    SheredModule,
  ],
  providers: [VerbsService],
  exports: [HomePageComponent, IrregularVerbsPageComponent],
})
export class GermanModule {}
