import { Maze } from "../classes/maze";

export function create_maze() {
  const maze = new Maze(5, 4);
  console.log("🚀 ~ create_maze ~ maze:", maze);
}

create_maze();
