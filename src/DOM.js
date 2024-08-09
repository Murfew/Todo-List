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
    console.log("adding project");
    hideSmallButtons();
  });

  addTodo.addEventListener("click", () => {
    console.log("adding todo");
    hideSmallButtons();
  });
}
