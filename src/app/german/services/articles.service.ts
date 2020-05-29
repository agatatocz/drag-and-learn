import { Injectable } from "@angular/core";
import { shuffle, take } from "lodash";

import { data, columns } from "src/data/german/articles";
import { Article } from "src/interfaces/german/Article";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  numberOfArticles: number = 1;
  minValue: number = 1;
  maxValue: number = data.length;
  columns = columns;

  constructor() {}

  public setNumberOfArticles(numberOfArticles: number) {
    this.numberOfArticles = numberOfArticles;
  }

  getArticles(): Array<Article> {
    return take(shuffle(data), this.numberOfArticles);
  }
}
