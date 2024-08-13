import {
  createProject,
  createTodo,
  removeProject,
  toggleTodoComplete,
} from "./appLogic";

export function setAddButtonsListeners() {
  const addNew = document.querySelector(".add-new");
  const addProject = document.querySelector(".add-project");
  const addTodo = document.querySelector(".add-todo");

  const showSmallButtons = () => {
    addProject.style.display = "block";
    addTodo.style.display = "block";
  };

  const hideSmallButtons = () => {
    addProject.style.display = "none";
    addTodo.style.display = "none";
  };

  addNew.addEventListener("click", () => {
    if (addProject.style.display == "" || addProject.style.display == "none") {
      showSmallButtons();
    } else {
      hideSmallButtons();
    }
  });

  addProject.addEventListener("click", () => {
    hideSmallButtons();
    const dialog = generateProjectDialog();
    dialog.showModal();
  });

  addTodo.addEventListener("click", () => {
    hideSmallButtons();
    const dialog = generateTodoDialog();
    dialog.showModal();
  });
}

function generateProjectDialog() {
  const body = document.querySelector("body");
  const dialog = document.createElement("dialog");
  const form = document.createElement("form");
  const formTitle = document.createElement("h1");
  const titleContainer = document.createElement("div");
  const colorContainer = document.createElement("div");
  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");
  const colorLabel = document.createElement("label");
  const colorInput = document.createElement("input");
  const buttonContainer = document.createElement("div");
  const submitButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  body.appendChild(dialog);
  dialog.appendChild(form);
  form.appendChild(formTitle);
  form.appendChild(titleContainer);
  form.appendChild(colorContainer);
  form.appendChild(buttonContainer);
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);
  colorContainer.appendChild(colorLabel);
  colorContainer.appendChild(colorInput);
  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(cancelButton);

  formTitle.textContent = "Create New Project";
  titleLabel.textContent = "Name";
  colorLabel.textContent = "Color";
  submitButton.textContent = "Create";
  cancelButton.textContent = "Cancel";

  colorInput.setAttribute("type", "color");
  dialog.setAttribute("id", "project-create");
  titleLabel.setAttribute("for", "project-name");
  titleInput.setAttribute("id", "project-name");
  colorLabel.setAttribute("for", "project-color");
  colorInput.setAttribute("id", "project-color");
  submitButton.setAttribute("type", "submit");

  cancelButton.addEventListener("click", () => {
    dialog.close();
    titleInput.value = "";
    colorInput.value = "";
  });

  submitButton.addEventListener("click", (e) => {
    createProject(titleInput.value, colorInput.value);
    addProjectToPage(titleInput.value);
    dialog.close();
  });

  return dialog;
}

function addProjectToPage(name) {
  const projectToAdd = JSON.parse(localStorage.getItem(name));

  const projects = document.querySelector(".projects");

  const newProject = document.createElement("li");
  newProject.setAttribute("id", projectToAdd.title);

  const colorIcon = document.createElement("span");
  colorIcon.classList.add("material-symbols-outlined");
  colorIcon.textContent = "circle";
  colorIcon.style.color = projectToAdd.color;

  const deleteIcon = document.createElement("span");
  deleteIcon.classList.add("material-symbols-outlined");
  deleteIcon.textContent = "delete";

  const projectName = document.createElement("span");
  projectName.textContent = projectToAdd.title;

  projects.appendChild(newProject);
  newProject.appendChild(colorIcon);
  newProject.appendChild(projectName);
  newProject.appendChild(deleteIcon);

  deleteIcon.addEventListener("click", () => {
    if (projectName.textContent !== "Default") {
      removeProject(projectName.textContent);
      setActiveProject("Default");
      updateProjects();
    }
  });

  projectName.addEventListener("click", () => {
    setActiveProject(projectName.textContent);
  });

  colorIcon.addEventListener("click", () => {
    setActiveProject(projectName.textContent);
    console.log("this");
  });
}

export function updateProjects() {
  const projects = document.querySelector(".projects");
  projects.replaceChildren();
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "debug") {
      addProjectToPage(localStorage.key(i));
    }
  }
}

function setActiveProject(projectName) {
  document.querySelector("main .title").textContent = projectName;
  updateTodos(projectName);
}

function generateTodoDialog() {
  const body = document.querySelector("body");
  const dialog = document.createElement("dialog");
  const form = document.createElement("form");
  const cancelButton = document.createElement("button");
  const submitButton = document.createElement("button");
  const buttonContainer = document.createElement("div");
  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");
  const titleContainer = document.createElement("div");
  const descLabel = document.createElement("label");
  const descInput = document.createElement("textarea");
  const descContainer = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");
  const dueDateContainer = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("input");
  const priorityContainer = document.createElement("div");
  const formTitle = document.createElement("h1");
  const projectLabel = document.createElement("label");
  const projectContainer = document.createElement("div");
  const projectSelect = document.createElement("select");

  body.appendChild(dialog);
  dialog.appendChild(form);
  form.appendChild(formTitle);
  form.appendChild(titleContainer);
  form.appendChild(descContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityContainer);
  form.appendChild(projectContainer);
  form.appendChild(buttonContainer);
  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(cancelButton);
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);
  descContainer.appendChild(descLabel);
  descContainer.appendChild(descInput);
  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityInput);
  projectContainer.appendChild(projectLabel);
  projectContainer.appendChild(projectSelect);

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "debug") {
      const project = localStorage.key(i);
      const newOption = document.createElement("option");
      newOption.setAttribute("value", project);
      newOption.textContent = project;
      projectSelect.appendChild(newOption);

      if (project === "Default") {
        newOption.setAttribute("selected", true);
      }
    }
  }

  dialog.setAttribute("id", "todo-create");
  titleLabel.setAttribute("for", "todo-name");
  titleInput.setAttribute("id", "todo-name");
  descLabel.setAttribute("for", "todo-desc");
  descInput.setAttribute("id", "todo-desc");
  dueDateLabel.setAttribute("for", "todo-due-date");
  dueDateInput.setAttribute("id", "todo-due-date");
  priorityLabel.setAttribute("for", "todo-priority");
  priorityInput.setAttribute("id", "todo-priority");
  projectLabel.setAttribute("for", "todo-project");
  projectSelect.setAttribute("id", "todo-project");

  dueDateInput.setAttribute("type", "datetime-local");
  priorityInput.setAttribute("type", "range");
  priorityInput.setAttribute("min", "0");
  priorityInput.setAttribute("max", "3");
  priorityInput.setAttribute("value", "0");
  submitButton.setAttribute("type", "submit");

  formTitle.textContent = "Create New Todo";
  submitButton.textContent = "Create";
  cancelButton.textContent = "Cancel";
  titleLabel.textContent = "Name";
  descLabel.textContent = "Description";
  dueDateLabel.textContent = "Due Date";
  priorityLabel.textContent = "Priority";
  projectLabel.textContent = "Project";

  cancelButton.addEventListener("click", () => {
    dialog.close();
    titleInput.value = "";
    descInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    createTodo(
      titleInput.value,
      descInput.value,
      dueDateInput.value,
      priorityInput.value,
      projectSelect.value
    );
    setActiveProject(projectSelect.value);
    dialog.close();
  });

  return dialog;
}

export function updateTodos(projectName) {
  // remove all current todo items
  const todosContainer = document.querySelector(".todos");
  todosContainer.replaceChildren("");

  // loop over all todo item in a project
  // display each item in the DOM
  const project = JSON.parse(localStorage.getItem(projectName));
  project.todos.forEach((todo) => {
    addTodoToPage(todo, projectName);
  });
}

function addTodoToPage(todo, projectName) {
  //TODO format due date
  // Main container
  const todoContainer = document.querySelector(".todos");
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoContainer.appendChild(todoItem);

  // Checkbox to complete
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", () => {
    toggleTodoComplete(todo.id, projectName);
  });
  todoItem.appendChild(checkbox);

  // name
  const todoName = document.createElement("p");
  todoName.classList.add("name");
  todoName.textContent = todo.title;
  todoItem.appendChild(todoName);

  //due date
  const todoDueDate = document.createElement("p");
  todoDueDate.classList.add("due-date");
  todoDueDate.textContent = todo.dueDate;
  todoItem.appendChild(todoDueDate);

  //description
  const todoDescription = document.createElement("p");
  todoDescription.classList.add("desc");
  todoDescription.textContent = todo.description;
  todoItem.appendChild(todoDescription);

  todoItem.addEventListener("click", () => {
    showEditTodoDialog(todo.id, projectName);
  });
}

function showEditTodoDialog(id, projectName) {
  const project = JSON.parse(localStorage.getItem(projectName));

  project.todos.forEach((todo) => {
    if (todo.id == id) {
      const body = document.querySelector("body");
      const dialog = document.createElement("dialog");
      const form = document.createElement("form");
      const deleteButton = document.createElement("button");
      const saveButton = document.createElement("button");
      const buttonContainer = document.createElement("div");
      const titleLabel = document.createElement("label");
      const titleInput = document.createElement("input");
      const titleContainer = document.createElement("div");
      const descLabel = document.createElement("label");
      const descInput = document.createElement("textarea");
      const descContainer = document.createElement("div");
      const dueDateLabel = document.createElement("label");
      const dueDateInput = document.createElement("input");
      const dueDateContainer = document.createElement("div");
      const priorityLabel = document.createElement("label");
      const priorityInput = document.createElement("input");
      const priorityContainer = document.createElement("div");
      const formTitle = document.createElement("h1");

      body.appendChild(dialog);
      dialog.appendChild(form);
      form.appendChild(formTitle);
      form.appendChild(titleContainer);
      form.appendChild(descContainer);
      form.appendChild(dueDateContainer);
      form.appendChild(priorityContainer);
      form.appendChild(buttonContainer);
      buttonContainer.appendChild(saveButton);
      buttonContainer.appendChild(deleteButton);
      titleContainer.appendChild(titleLabel);
      titleContainer.appendChild(titleInput);
      descContainer.appendChild(descLabel);
      descContainer.appendChild(descInput);
      dueDateContainer.appendChild(dueDateLabel);
      dueDateContainer.appendChild(dueDateInput);
      priorityContainer.appendChild(priorityLabel);
      priorityContainer.appendChild(priorityInput);

      dialog.setAttribute("id", "todo-edit");
      titleLabel.setAttribute("for", "todo-edit-name");
      titleInput.setAttribute("id", "todo-edit-name");
      descLabel.setAttribute("for", "todo-edit-desc");
      descInput.setAttribute("id", "todo-edit-desc");
      dueDateLabel.setAttribute("for", "todo-edit-due-date");
      dueDateInput.setAttribute("id", "todo-edit-due-date");
      priorityLabel.setAttribute("for", "todo-edit-priority");
      priorityInput.setAttribute("id", "todo-edit-priority");

      dueDateInput.setAttribute("type", "datetime-local");
      priorityInput.setAttribute("type", "range");
      priorityInput.setAttribute("min", "0");
      priorityInput.setAttribute("max", "3");
      priorityInput.setAttribute("value", "0");
      saveButton.setAttribute("type", "submit");

      //grab todo's values
      titleInput.setAttribute("value", todo.title);
      priorityInput.setAttribute("value", todo.priority);
      descInput.textContent = todo.description;
      dueDateInput.setAttribute("value", todo.dueDate);

      formTitle.textContent = "Edit Todo";
      saveButton.textContent = "Save";
      deleteButton.textContent = "Delete";
      titleLabel.textContent = "Name";
      descLabel.textContent = "Description";
      dueDateLabel.textContent = "Due Date";
      priorityLabel.textContent = "Priority";

      deleteButton.addEventListener("click", () => {
        dialog.close();
        //TODO delete todo
      });

      saveButton.addEventListener("click", (e) => {
        e.preventDefault();
        //TODO edit todo
        dialog.close();
      });

      dialog.showModal();
    }
  });
}
