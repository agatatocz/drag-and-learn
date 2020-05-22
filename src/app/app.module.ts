import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MatGridListModule } from "@angular/material/grid-list";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VerbsBoardComponent } from "./verbs-board/verbs-board.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StartScreenComponent } from "./start-screen/start-screen.component";

import { VerbsService } from "./services/verbs.service";

@NgModule({
  declarations: [AppComponent, VerbsBoardComponent, StartScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    DragDropModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [VerbsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
