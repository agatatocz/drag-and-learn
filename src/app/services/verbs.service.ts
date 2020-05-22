import { Injectable } from "@angular/core";
import { germanVerbs } from "../../data/germanVerbs";
import { GermanVerb } from "src/interfaces/GermanVerb";
import { shuffle, take } from "lodash";

@Injectable({
  providedIn: "root",
})
export class VerbsService {
  numberOfVerbs: number = 2;
  minValue: number = 2;
  maxValue: number = germanVerbs.length;

  constructor() {}

  public setNumberOfVerbs(numberOfVerbs: number) {
    this.numberOfVerbs = numberOfVerbs;
  }

  getVerbs(): Array<GermanVerb> {
    return take(shuffle(germanVerbs), this.numberOfVerbs);
  }
}
