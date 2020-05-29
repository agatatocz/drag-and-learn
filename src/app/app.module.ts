import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { GermanModule } from "./german/german.module";
import { SheredModule } from "./shered/shered.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GermanModule,
    SheredModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
