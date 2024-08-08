import Project from "./Project";
import Todo from "./Todo";

export function initializeStorage() {
  createProject("Default");
}

export function createProject(title) {
  localStorage.setItem(title, JSON.stringify(new Project(title)));
}

export function removeProject(title) {
  localStorage.removeItem(title);
}
