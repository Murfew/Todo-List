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

initializeStorage();
createTodo("test");
