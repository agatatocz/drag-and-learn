import { Injectable } from "@angular/core";
import {
  data as germanVerbs,
  columns,
} from "../../../data/german/irregularVerbs";
import { IrregularVerb } from "src/interfaces/IrregularVerb";
import { shuffle, take } from "lodash";

@Injectable({
  providedIn: "root",
})
export class VerbsService {
  numberOfVerbs: number = 1;
  minValue: number = 1;
  maxValue: number = germanVerbs.length;
  columns = columns;

  constructor() {}

  public setNumberOfVerbs(numberOfVerbs: number) {
    this.numberOfVerbs = numberOfVerbs;
  }

  getVerbs(): Array<IrregularVerb> {
    return take(shuffle(germanVerbs), this.numberOfVerbs);
  }
}
