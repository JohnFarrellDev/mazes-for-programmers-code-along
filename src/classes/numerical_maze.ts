import { Maze } from "./maze";

export class Numerical_Maze extends Maze {
  constructor(width: number, height: number) {
    super(width, height);
  }

  generateHtml() {
    return super.generateHtml((cell, el) => {
      el.style.width = "50px";
      el.style.height = "50px";
      el.style.display = "grid";
      el.style.placeItems = "center";
      el.textContent = `${cell.column + 1 + cell.row * this.width}`;
    });
  }
}
