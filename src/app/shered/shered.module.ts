import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";

import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

import { BackButtonComponent } from "./components/back-button/back-button.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [BackButtonComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule, MatIconModule, MatToolbarModule],
  exports: [BackButtonComponent, HeaderComponent],
})
export class SheredModule {}
