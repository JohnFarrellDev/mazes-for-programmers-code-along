import { Bordered_Maze } from "../../classes/bordered_maze";
import { Maze } from "../../classes/maze";
import { Numerical_Maze } from "../../classes/numerical_maze";

const maze = new Maze(6, 8);

const numerical_maze_renderer = new Numerical_Maze();
const numerical_maze_html = numerical_maze_renderer.render(maze);
document
  .querySelector("#basic-maze-container")
  ?.appendChild(numerical_maze_html);

const border_maze_renderer = new Bordered_Maze();
const border_maze_html = border_maze_renderer.render(maze);
document
  .querySelector("#basic-maze-container-bordered")
  ?.appendChild(border_maze_html);
