import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VerbsService } from "src/app/german/services/verbs.service";
import { ArticlesService } from "src/app/german/services/articles.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  minVerbs: number;
  maxVerbs: number;
  minArticles: number;
  maxArticles: number;

  constructor(
    private router: Router,
    private verbsService: VerbsService,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.maxVerbs = this.verbsService.maxValue;
    this.minVerbs = this.verbsService.minValue;
    this.maxArticles = this.articlesService.maxValue;
    this.minArticles = this.articlesService.minValue;
  }

  onVerbsSubmit(value: number) {
    this.verbsService.setNumberOfVerbs(value);
    this.router.navigateByUrl("/verbs");
  }
  onArticlesSubmit(value: number) {
    this.articlesService.setNumberOfArticles(value);
    this.router.navigateByUrl("/articles");
  }
}
