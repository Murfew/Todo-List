import "./styles.css";
import { createTodo, initializeStorage, setTodoDescription } from "./appLogic";

initializeStorage();
createTodo("test");
