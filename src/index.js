import "./styles.css";
import {
  createProject,
  createTodo,
  getProjectTodos,
  initializeStorage,
  removeProject,
  removeTodo,
  setTodoDescription,
  setTodoDueDate,
  toggleTodoComplete,
} from "./appLogic";
import { setAddButtonsListeners } from "./DOM";

setAddButtonsListeners();
