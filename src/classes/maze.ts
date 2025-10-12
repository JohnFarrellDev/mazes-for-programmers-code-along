import { Cell } from "./cell";

export class Maze {
  #cells: Array<Array<Cell>>;

  constructor(width: number, height: number) {
    this.#cells = Array.from({ length: height }, (_, rowIndex) => {
      return Array.from({ length: width }, (_, columnIndex) => {
        return new Cell(rowIndex, columnIndex);
      });
    });
  }

  get cells() {
    return this.#cells;
  }
}
