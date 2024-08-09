export default class Project {
  constructor(title, color) {
    this.title = title;
    this.todos = [];
    this.idCounter = 0;
    this.color = color;
  }
}
