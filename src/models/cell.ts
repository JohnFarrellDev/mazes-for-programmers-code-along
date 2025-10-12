export class Cell {
  #row: number;
  #column: number;
  #borders: Array<true>;

  constructor(row: number, column: number) {
    this.#row = row;
    this.#column = column;

    // north, east, south, west
    this.#borders = [true, true, true, true];
  }

  get row() {
    return this.#row;
  }

  get column() {
    return this.#column;
  }

  get borders() {
    return this.#borders;
  }
}
