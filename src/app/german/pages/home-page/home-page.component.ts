import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VerbsService } from "../../services/verbs.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  minValue: number;
  maxValue: number;
  constructor(private router: Router, private verbsService: VerbsService) {}

  ngOnInit() {
    this.maxValue = this.verbsService.maxValue;
    this.minValue = this.verbsService.minValue;
  }

  onSubmit(value: number) {
    this.verbsService.setNumberOfVerbs(value);
    this.router.navigateByUrl("/verbs");
  }
}
