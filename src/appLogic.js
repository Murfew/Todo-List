import Project from "./Project";
import Todo from "./Todo";

export function initializeStorage() {
  localStorage.setItem("projects", JSON.stringify([]));
  localStorage.setItem("todos", JSON.stringify([]));

  createProject("Default");
}

function createProject(title) {
  const projects = JSON.parse(localStorage.getItem("projects"));
  projects.push(new Project(title));
  localStorage.setItem("projects", JSON.stringify(projects));
}
