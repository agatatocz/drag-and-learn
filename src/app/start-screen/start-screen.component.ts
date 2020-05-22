import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VerbsService } from "../services/verbs.service";

@Component({
  selector: "app-start-screen",
  templateUrl: "./start-screen.component.html",
  styleUrls: ["./start-screen.component.scss"],
})
export class StartScreenComponent implements OnInit {
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
    console.log(this.valueControl.value, this.maxValue);
    this.verbsService.setNumberOfVerbs(this.valueControl.value);
    this.router.navigateByUrl("/verbs");
  }
}
