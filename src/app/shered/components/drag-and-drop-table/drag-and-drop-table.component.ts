import { Component, OnInit, Input } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { shuffle, flatten, isEqual } from "lodash";
import { Column } from "src/interfaces/Column";
import { Data } from "src/interfaces/german/Data";

@Component({
  selector: "app-drag-and-drop-table",
  templateUrl: "./drag-and-drop-table.component.html",
  styleUrls: ["./drag-and-drop-table.component.scss"],
})
export class DragAndDropTableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() data: Data[];
  points: boolean[] = [];
  flattenDragData: string[] = [];
  constructor() {}

  ngOnInit() {
    this.setTables();
  }

  setTables() {
    this.columns.forEach((column) => {
      this[column.name] = [];
    });
    this.points = [];

    const keys = this.columns
      .map((column) => (column.show ? null : column.name))
      .filter((item) => item);
    this.flattenDragData = shuffle(
      flatten(this.data.map((item) => keys.map((key) => item[key])))
    );

    this.data.forEach((item) => {
      this.columns.forEach((column) => {
        if (column.show) this[column.name].push(item[column.name]);
        else this[column.name].push("");
      });
    });
  }

  includes(array: Array<Object>, item: Object) {
    return array.map((element) => isEqual(element, item)).includes(true);
  }

  validate() {
    this.data.forEach((item, i) => {
      const row = {};
      this.columns.forEach((column) => {
        row[column.name] = this[column.name][i];
      });
      if (this.includes(this.data, row)) this.points[i] = true;
      else this.points[i] = false;
    });
  }

  handleCurrnetVerbChange() {
    const verb = this.flattenDragData.shift();
    this.flattenDragData.push(verb);
  }

  drop(event: CdkDragDrop<string[]>) {
    const { previousContainer, container } = event;
    if (previousContainer !== container) {
      const [fromProperty, fromIndex] = previousContainer.id.split("-");
      const [toProperty, toIndex] = container.id.split("-");

      if (toProperty !== "flattenDragData") {
        const tmp = this[toProperty][parseInt(toIndex)];
        this[toProperty][parseInt(toIndex)] = this[fromProperty][
          parseInt(fromIndex)
        ];
        this[fromProperty][parseInt(fromIndex)] = tmp;
        if (fromProperty === "flattenDragData" && !this.flattenDragData[0])
          this.flattenDragData.shift();
      } else {
        this.flattenDragData.unshift(this[fromProperty][parseInt(fromIndex)]);
        this[fromProperty][parseInt(fromIndex)] = "";
      }
      if (!this.flattenDragData.length) this.validate();
    }
  }
}
