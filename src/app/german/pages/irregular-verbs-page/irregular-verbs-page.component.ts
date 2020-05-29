import { Component, OnInit } from "@angular/core";
import { VerbsService } from "../../../german/services/verbs.service";
import { IrregularVerb } from "src/interfaces/IrregularVerb";
import { Column } from "src/interfaces/Column";

@Component({
  selector: "app-irregular-verbs-page",
  templateUrl: "./irregular-verbs-page.component.html",
  styleUrls: ["./irregular-verbs-page.component.scss"],
})
export class IrregularVerbsPageComponent implements OnInit {
  verbs: IrregularVerb[] = [];
  columns: Column[];

  constructor(private verbsService: VerbsService) {}

  ngOnInit() {
    this.verbs = this.verbsService.getVerbs();
    this.columns = this.verbsService.columns;
  }

  handleNewSet() {
    this.verbs = this.verbsService.getVerbs();
  }
}
