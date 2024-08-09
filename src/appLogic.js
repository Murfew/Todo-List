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

export function createTodo(
  title,
  description = "",
  dueDate = undefined,
  priority = 0,
  project = "Default"
) {
  const todo = new Todo(title, description, dueDate, priority);
  const todoProject = JSON.parse(localStorage.getItem(project));
  todoProject.todos.push(todo);
  localStorage.setItem(project, JSON.stringify(todoProject));
}
