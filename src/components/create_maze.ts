import { Maze } from "../models/maze";

export function create_maze() {
  const maze = new Maze(5, 4);

  return maze;
}

create_maze();
