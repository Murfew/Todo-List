import "./styles.css";
import {
  createTodo,
  initializeStorage,
  setTodoDescription,
  toggleTodoComplete,
} from "./appLogic";

initializeStorage();
createTodo("test", "", "", "");
