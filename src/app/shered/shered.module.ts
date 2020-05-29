import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

import { BackButtonComponent } from "./components/back-button/back-button.component";
import { HeaderComponent } from "./components/header/header.component";
import { DragAndDropTableComponent } from "./components/drag-and-drop-table/drag-and-drop-table.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent,
    DragAndDropTableComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    BackButtonComponent,
    HeaderComponent,
    DragAndDropTableComponent,
    CardComponent,
  ],
})
export class SheredModule {}
