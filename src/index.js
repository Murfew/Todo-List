import "./styles.css";
import { createTodo, initializeStorage } from "./appLogic";

initializeStorage();
createTodo("test");
createTodo("test again");
