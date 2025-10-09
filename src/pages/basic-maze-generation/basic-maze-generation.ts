import { Bordered_Maze } from "../../classes/bordered_maze";
import { Numerical_Maze } from "../../classes/numerical_maze";

const numerical_maze = new Numerical_Maze(4, 5);
const numerical_maze_html = numerical_maze.generateHtml();
document
  .querySelector("#basic-maze-container")
  ?.appendChild(numerical_maze_html);

const border_maze = new Bordered_Maze(6, 6);
const border_maze_html = border_maze.generateHtml();
document
  .querySelector("#basic-maze-container-bordered")
  ?.appendChild(border_maze_html);
