import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { germanVerbs } from "../../data/germanVerbs";
import { shuffle, flatten, isEqual } from "lodash";

@Component({
  selector: "app-verbs-board",
  templateUrl: "./verbs-board.component.html",
  styleUrls: ["./verbs-board.component.scss"],
})
export class VerbsBoardComponent implements OnInit {
  allVerbs: string[] = [];
  firstForm: string[] = ["", "", ""];
  secondForm: string[] = ["", "", ""];
  thirdForm: string[] = ["", "", ""];
  translation: string[] = ["", "", ""];
  points: boolean[] = [];

  constructor() {}

  ngOnInit() {
    this.allVerbs = shuffle(
      flatten(germanVerbs.map((verb) => Object.values(verb)))
    );
  }

  includes(array: Array<Object>, item: Object) {
    return array.map((element) => isEqual(element, item)).includes(true);
  }

  validate() {
    for (let i = 0; i < germanVerbs.length; i++) {
      const row = {
        firstForm: this.firstForm[i],
        secondForm: this.secondForm[i],
        thirdForm: this.thirdForm[i],
        translation: this.translation[i],
      };
      if (this.includes(germanVerbs, row)) this.points[i] = true;
      else this.points[i] = false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const { previousContainer, container } = event;
    if (previousContainer !== container) {
      const [fromProperty, fromIndex] = previousContainer.id.split("-");
      const [toProperty, toIndex] = container.id.split("-");

      if (toProperty !== "allVerbs") {
        this[toProperty][parseInt(toIndex)] = this[fromProperty][
          parseInt(fromIndex)
        ];
        this[fromProperty][parseInt(fromIndex)] = "";
        if (fromProperty === "allVerbs") this.allVerbs.shift();
      } else {
        this.allVerbs.unshift(this[fromProperty][parseInt(fromIndex)]);
        this[fromProperty][parseInt(fromIndex)] = "";
      }
      if (!this.allVerbs.length) this.validate();
      console.log(this);
    }
  }
}
