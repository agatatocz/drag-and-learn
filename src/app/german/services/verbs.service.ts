import { Injectable } from "@angular/core";
import { data as germanVerbs } from "../../../data/german/irregularVerbs";
import { IrregularVerb } from "src/interfaces/IrregularVerb";
import { shuffle, take } from "lodash";

@Injectable({
  providedIn: "root",
})
export class VerbsService {
  numberOfVerbs: number = 1;
  minValue: number = 1;
  maxValue: number = germanVerbs.length;

  constructor() {}

  public setNumberOfVerbs(numberOfVerbs: number) {
    this.numberOfVerbs = numberOfVerbs;
  }

  getVerbs(): Array<IrregularVerb> {
    return take(shuffle(germanVerbs), this.numberOfVerbs);
  }
}
