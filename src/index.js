import "./styles.css";
import { initializeStorage } from "./appLogic";
import { updateProjects, setAddButtonsListeners } from "./DOM";

initializeStorage();
updateProjects();
setAddButtonsListeners();
