import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { BackButtonComponent } from "./components/back-button/back-button.component";
import { HeaderComponent } from "./components/header/header.component";
import { DragAndDropTableComponent } from "./components/drag-and-drop-table/drag-and-drop-table.component";

@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent,
    DragAndDropTableComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DragDropModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [BackButtonComponent, HeaderComponent, DragAndDropTableComponent],
})
export class SheredModule {}
