import type { Maze } from "../models/maze";

export interface Maze_Render {
  render(maze: Maze): HTMLDivElement;
}
