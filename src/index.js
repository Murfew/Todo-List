import "./styles.css";
import {
  createTodo,
  getProjectTodos,
  initializeStorage,
  setTodoDescription,
  toggleTodoComplete,
} from "./appLogic";

initializeStorage();
createTodo("test");
