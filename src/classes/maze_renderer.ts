import type { Maze } from "./maze";

export interface Maze_Render {
  render(maze: Maze): HTMLDivElement;
}
