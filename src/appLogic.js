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

export function removeTodo(id) {
  for (let i = 1; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
    project.todos.forEach((todo, index) => {
      if (todo.id == id) {
        project.todos.splice(index, 1);
        localStorage.setItem(localStorage.key(i), JSON.stringify(project));
        return;
      }
    });
  }
}

export function setTodoTitle(id, newTitle) {
  for (let i = 1; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
    project.todos.forEach((todo) => {
      if (todo.id == id) {
        todo.title = newTitle;
        localStorage.setItem(localStorage.key(i), JSON.stringify(project));
        return;
      }
    });
  }
}

export function setTodoDescription(id, newDescription) {
  for (let i = 1; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
    project.todos.forEach((todo) => {
      if (todo.id == id) {
        todo.description = newDescription;
        localStorage.setItem(localStorage.key(i), JSON.stringify(project));
        return;
      }
    });
  }
}

export function setTodoDueDate(id, newDueDate) {}

export function setTodoPriority(id, newPriority) {}

export function setTodoComplete(id) {}
