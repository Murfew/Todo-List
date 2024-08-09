export default class Todo {
  constructor(title, description = "", dueDate = undefined, priority = 0) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }
}
