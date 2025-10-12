import { create_div } from "../components/create_div";
import { Maze } from "./maze";
import type { Maze_Render } from "./maze_renderer";

export class Numerical_Maze implements Maze_Render {
  render(maze: Maze): HTMLDivElement {
    const container = create_div({ id: "maze-container-numerical" });

    maze.cells.forEach((row) => {
      const row_container = create_div();
      row_container.style.display = "flex";

      row.forEach((cell) => {
        const cell_element = create_div();

        cell_element.style.width = "40px";
        cell_element.style.height = "40px";
        cell_element.style.display = "grid";
        cell_element.style.placeItems = "center";

        cell_element.textContent = `${cell.column + 1 + cell.row * row.length}`;

        row_container.append(cell_element);
      });

      container.appendChild(row_container);
    });

    return container;
  }
}
