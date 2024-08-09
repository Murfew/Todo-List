import { createProject } from "./appLogic";

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
    console.log(addProject.style.display == "");
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
    // create and show dialog for todo creation
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
  titleLabel.textContent = "Project Name";
  colorLabel.textContent = "Project Color";
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
    e.preventDefault();
    createProject(titleInput.value, colorInput.value);
    dialog.close();
  });

  return dialog;
}
