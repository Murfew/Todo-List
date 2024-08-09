export default class Project {
  constructor(title, color = undefined) {
    this.title = title;
    this.todos = [];
    this.idCounter = 0;
    this.color = color;
  }
}
