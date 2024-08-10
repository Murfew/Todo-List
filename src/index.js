import "./styles.css";
import { initializeStorage } from "./appLogic";
import { updateProjects, setAddButtonsListeners } from "./DOM";

function loadPage() {
  initializeStorage();
  updateProjects();
  setAddButtonsListeners();
}

loadPage();
