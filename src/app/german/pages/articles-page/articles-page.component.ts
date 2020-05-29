import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "src/app/german/services/articles.service";
import { Article } from "src/interfaces/german/Article";
import { Column } from "src/interfaces/Column";

@Component({
  selector: "app-articles-page",
  templateUrl: "./articles-page.component.html",
  styleUrls: ["./articles-page.component.scss"],
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  columns: Column[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articles = this.articlesService.getArticles();
    this.columns = this.articlesService.columns;
  }

  handleNewSet() {
    this.articles = this.articlesService.getArticles();
  }
}
