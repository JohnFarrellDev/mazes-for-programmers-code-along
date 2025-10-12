import type { Maze } from "../classes/maze";

export interface Maze_Render {
  render(maze: Maze): HTMLDivElement;
}
