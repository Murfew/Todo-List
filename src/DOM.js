export function setAddButtonsListeners() {
  const addNew = document.querySelector(".add-new");
  const addProject = document.querySelector(".add-project");
  const addTodo = document.querySelector(".add-todo");

  addNew.addEventListener("click", () => {
    addProject.style.display = "block";
    addTodo.style.display = "block";
  });
}
