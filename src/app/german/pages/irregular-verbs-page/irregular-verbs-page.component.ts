import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { shuffle, flatten, isEqual } from "lodash";
import { VerbsService } from "../../../german/services/verbs.service";
import { IrregularVerb } from "src/interfaces/IrregularVerb";

@Component({
  selector: "app-irregular-verbs-page",
  templateUrl: "./irregular-verbs-page.component.html",
  styleUrls: ["./irregular-verbs-page.component.scss"],
})
export class IrregularVerbsPageComponent implements OnInit {
  verbs: IrregularVerb[] = [];
  flattenVerbs: string[] = [];
  firstForm: string[] = [];
  secondForm: string[] = [];
  thirdForm: string[] = [];
  translation: string[] = [];
  points: boolean[] = [];

  constructor(private verbsService: VerbsService) {}

  ngOnInit() {
    this.handleNewSet();
  }

  setTables() {
    this.firstForm = [];
    this.secondForm = [];
    this.thirdForm = [];
    this.translation = [];
    this.points = [];

    this.flattenVerbs = shuffle(
      flatten(
        this.verbs.map((verb) => [
          verb.firstForm,
          verb.secondForm,
          verb.thirdForm,
        ])
      )
    );
    this.verbs.forEach((verb) => {
      this.firstForm.push("");
      this.secondForm.push("");
      this.thirdForm.push("");
      this.translation.push(verb.translation);
    });
  }

  includes(array: Array<Object>, item: Object) {
    return array.map((element) => isEqual(element, item)).includes(true);
  }

  validate() {
    for (let i = 0; i < this.verbs.length; i++) {
      const row = {
        firstForm: this.firstForm[i],
        secondForm: this.secondForm[i],
        thirdForm: this.thirdForm[i],
        translation: this.translation[i],
      };
      if (this.includes(this.verbs, row)) this.points[i] = true;
      else this.points[i] = false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const { previousContainer, container } = event;
    if (previousContainer !== container) {
      const [fromProperty, fromIndex] = previousContainer.id.split("-");
      const [toProperty, toIndex] = container.id.split("-");

      if (toProperty !== "flattenVerbs") {
        const tmp = this[toProperty][parseInt(toIndex)];
        this[toProperty][parseInt(toIndex)] = this[fromProperty][
          parseInt(fromIndex)
        ];
        this[fromProperty][parseInt(fromIndex)] = tmp;
        if (fromProperty === "flattenVerbs" && !this.flattenVerbs[0])
          this.flattenVerbs.shift();
      } else {
        this.flattenVerbs.unshift(this[fromProperty][parseInt(fromIndex)]);
        this[fromProperty][parseInt(fromIndex)] = "";
      }
      if (!this.flattenVerbs.length) this.validate();
    }
  }

  handleCurrnetVerbChange() {
    const verb = this.flattenVerbs.shift();
    this.flattenVerbs.push(verb);
  }

  handleReset() {
    this.setTables();
  }

  handleNewSet() {
    this.verbs = this.verbsService.getVerbs();
    this.setTables();
  }
}
