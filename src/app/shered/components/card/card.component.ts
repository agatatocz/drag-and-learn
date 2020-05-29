import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Output() onSubmit = new EventEmitter<number>();

  valueControl: FormControl;
  constructor() {}

  ngOnInit() {
    this.valueControl = new FormControl(this.minValue, [
      Validators.required,
      Validators.min(this.minValue),
      Validators.max(this.maxValue),
    ]);
  }

  handleSubmit() {
    this.onSubmit.emit(this.valueControl.value);
  }
}
