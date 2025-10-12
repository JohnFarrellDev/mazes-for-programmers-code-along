import { create_div } from "../components/create_div";
import { Maze } from "./maze";
import type { Maze_Render } from "../interfaces/maze_renderer";

export class Bordered_Maze implements Maze_Render {
  render(maze: Maze): HTMLDivElement {
    const container = create_div({ id: "maze-container-bordered" });

    maze.cells.forEach((row, row_index) => {
      const row_container = create_div();
      row_container.style.display = "flex";

      row.forEach((cell, column_index) => {
        const cell_element = create_div();

        cell_element.style.width = "40px";
        cell_element.style.height = "40px";

        // north
        if (cell.borders[0]) {
          cell_element.style.borderTop = "2px solid white";
        }
        // west
        if (cell.borders[3]) {
          cell_element.style.borderLeft = "2px solid white";
        }
        // south — only bottom edge
        if (cell.borders[2] && row_index === maze.cells.length - 1) {
          cell_element.style.borderBottom = "2px solid white";
        }
        // east — only rightmost edge
        if (cell.borders[1] && column_index === maze.cells[0].length - 1) {
          cell_element.style.borderRight = "2px solid white";
        }

        row_container.append(cell_element);
      });

      container.appendChild(row_container);
    });

    return container;
  }
}
