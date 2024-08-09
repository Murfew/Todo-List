import "./styles.css";
import {
  createProject,
  createTodo,
  getProjectTodos,
  initializeStorage,
  removeTodo,
  setTodoDescription,
  setTodoDueDate,
  toggleTodoComplete,
} from "./appLogic";
import { setAddButtonsListeners } from "./DOM";

setAddButtonsListeners();
