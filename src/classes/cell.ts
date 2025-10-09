export class Cell {
  #row: number;
  #column: number;

  constructor(row: number, column: number) {
    this.#row = row;
    this.#column = column;
  }

  get row() {
    return this.#row;
  }

  get column() {
    return this.#column;
  }
}
