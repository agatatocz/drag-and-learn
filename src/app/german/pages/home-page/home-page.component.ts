import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
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
  valueControl: FormControl;
  constructor(private router: Router, private verbsService: VerbsService) {}

  ngOnInit() {
    this.maxValue = this.verbsService.maxValue;
    this.minValue = this.verbsService.minValue;

    this.valueControl = new FormControl(this.minValue, [
      Validators.required,
      Validators.min(this.minValue),
      Validators.max(this.maxValue),
    ]);
  }

  onSubmit() {
    this.verbsService.setNumberOfVerbs(this.valueControl.value);
    this.router.navigateByUrl("/verbs");
  }
}
