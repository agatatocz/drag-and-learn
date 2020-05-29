import { Injectable } from "@angular/core";
import { shuffle, take } from "lodash";

import { data, columns } from "../../../data/german/irregularVerbs";
import { IrregularVerb } from "src/interfaces/IrregularVerb";

@Injectable({
  providedIn: "root",
})
export class VerbsService {
  numberOfVerbs: number = 1;
  minValue: number = 1;
  maxValue: number = data.length;
  columns = columns;

  constructor() {}

  public setNumberOfVerbs(numberOfVerbs: number) {
    this.numberOfVerbs = numberOfVerbs;
  }

  getVerbs(): Array<IrregularVerb> {
    return take(shuffle(data), this.numberOfVerbs);
  }
}
