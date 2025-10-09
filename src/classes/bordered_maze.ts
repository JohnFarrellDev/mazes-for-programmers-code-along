import { Maze } from "./maze";

export class Bordered_Maze extends Maze {
  constructor(width: number, height: number) {
    super(width, height);
  }

  generateHtml() {
    return super.generateHtml((cell, el) => {
      el.style.padding = "16px";
      el.style.borderTop = "2px solid white";
      el.style.borderLeft = "2px solid white";
      el.style.borderBottom =
        cell.row === this.cells.length - 1 ? "2px solid white" : "";
      el.style.borderRight =
        cell.column === this.cells[0].length - 1 ? "2px solid white" : "";
    });
  }
}
