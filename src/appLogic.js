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
  const todoProject = JSON.parse(localStorage.getItem(project));
  const todo = new Todo(
    title,
    description,
    dueDate,
    priority,
    todoProject.idCounter
  );
  todoProject.todos.push(todo);
  todoProject.idCounter++;
  localStorage.setItem(project, JSON.stringify(todoProject));
}

export function removeTodo() {}
