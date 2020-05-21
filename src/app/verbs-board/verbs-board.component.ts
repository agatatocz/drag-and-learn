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
  firstForm: string[] = [];
  secondForm: string[] = [];
  thirdForm: string[] = [];
  translation: string[] = [];
  currentWord: string[] = [];
  points: boolean[] = [];

  constructor() {}

  ngOnInit() {
    this.allVerbs = shuffle(
      flatten(germanVerbs.map((verb) => Object.values(verb)))
    );
    this.currentWord[0] = this.allVerbs.pop();
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
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (!this.currentWord.length) this.currentWord[0] = this.allVerbs.pop();
    if (!this.allVerbs.length && !this.currentWord[0]) this.validate();
  }
}
