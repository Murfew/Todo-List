import "./styles.css";
import { initializeStorage } from "./appLogic";
import { updateProjects, setAddButtonsListeners, updateTodos } from "./DOM";

function loadPage() {
  initializeStorage();
  updateProjects();
  updateTodos("Default");
  setAddButtonsListeners();
}

loadPage();
