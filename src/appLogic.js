import Project from "./Project";
import Todo from "./Todo";

export function initializeStorage() {
  createProject("Default");
  createTodo("test", "", "", "", "", "Default");
}

export function createProject(title) {
  localStorage.setItem(title, JSON.stringify(new Project(title)));
}

export function removeProject(title) {
  localStorage.removeItem(title);
}

export function createTodo(
  title,
  description,
  dueDate,
  priority,
  notes,
  project
) {
  const parentProject = JSON.parse(localStorage.getItem(project));

  parentProject.todos.push(
    new Todo(title, description, dueDate, priority, notes)
  );
  localStorage.setItem(project, JSON.stringify(parentProject));
}
