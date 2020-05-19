import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { germanVerbs } from "../../data/germanVerbs";
import { flatten } from "lodash";

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

  constructor() {}

  ngOnInit() {
    this.allVerbs = flatten(germanVerbs.map((verb) => Object.values(verb)));
    this.currentWord[0] = this.allVerbs.pop();
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
  }
}
