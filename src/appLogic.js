import Project from "./Project";
import Todo from "./Todo";
import { isToday } from "date-fns";

export function initializeStorage() {
  createProject("Default", "#000000");
}

export function createProject(title, color) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === title) {
      return false;
    }
  }

  localStorage.setItem(title, JSON.stringify(new Project(title, color)));
  return true;
}

export function removeProject(title) {
  localStorage.removeItem(title);
}

export function createTodo(
  title,
  description = "",
  dueDate = "",
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

export function removeTodo(id, projectName = "Default") {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo, index) => {
    if (todo.id == id) {
      project.todos.splice(index, 1);
      localStorage.setItem(projectName, JSON.stringify(project));
      return;
    }
  });
}

export function setTodoTitle(id, newTitle, projectName = "Default") {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo) => {
    if (todo.id == id) {
      todo.title = newTitle;
      localStorage.setItem(projectName, JSON.stringify(project));
      return;
    }
  });
}

export function setTodoDescription(
  id,
  newDescription,
  projectName = "Default"
) {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo) => {
    if (todo.id == id) {
      todo.description = newDescription;
      localStorage.setItem(projectName, JSON.stringify(project));
      return;
    }
  });
}

export function setTodoDueDate(id, newDueDate, projectName = "Default") {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo) => {
    if (todo.id == id) {
      todo.dueDate = newDueDate;
      localStorage.setItem(projectName, JSON.stringify(project));
      return;
    }
  });
}

export function setTodoPriority(id, newPriority, projectName = "Default") {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo) => {
    if (todo.id == id) {
      todo.priority = newPriority;
      localStorage.setItem(projectName, JSON.stringify(project));
      return;
    }
  });
}

export function toggleTodoComplete(id, projectName = "Default") {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo) => {
    if (todo.id == id) {
      todo.complete = !todo.complete;
      localStorage.setItem(projectName, JSON.stringify(project));
      return;
    }
  });
}

export function getTodayTodos() {
  const todayTodos = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "debug") {
      const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
      project.todos.forEach((todo) => {
        if (isToday(new Date(todo.dueDate))) {
          todayTodos.push(todo);
        }
      });
    }
  }
  return todayTodos;
}

export function getProjectTodos(project) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "debug") {
      const currentProject = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      );
      if (currentProject.title === project) {
        return currentProject.todos;
      }
    }
  }
}
