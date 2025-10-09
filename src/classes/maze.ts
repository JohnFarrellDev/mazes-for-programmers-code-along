import { create_div } from "../components/create_div";
import { Cell } from "./cell";

export class Maze {
  #height: number;
  #width: number;
  #cells: Array<Array<Cell>>;

  constructor(width: number, height: number) {
    this.#width = width;
    this.#height = height;

    this.#cells = Array.from({ length: this.#height }, (_, rowIndex) => {
      return Array.from({ length: this.#width }, (_, columnIndex) => {
        return new Cell(rowIndex, columnIndex);
      });
    });
  }

  get cells() {
    return this.#cells;
  }

  generateHtml(cellRenderer?: (cell: Cell, element: HTMLDivElement) => void) {
    const container = create_div({ id: "maze-container" });

    this.cells.forEach((row) => {
      const rowContainer = create_div({});
      rowContainer.style.display = "flex";

      row.forEach((cell) => {
        const cellElement = create_div({});
        cellRenderer?.(cell, cellElement);
        rowContainer.appendChild(cellElement);
      });

      container.appendChild(rowContainer);
    });

    return container;
  }
}
